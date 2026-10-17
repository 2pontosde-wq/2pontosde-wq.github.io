/*
 * dc.js — micro-runtime de templates do portfólio (sem dependências).
 *
 * Lê um <template id="dc-template"> com a sintaxe:
 *   {{caminho.do.valor}}          em textos e atributos
 *   <sc-for list="{{lista}}" as="item">  …  </sc-for>
 *   <sc-if value="{{condicao}}">  …  </sc-if>
 *   onClick="{{funcao}}"          (qualquer on<Evento>)
 * e renderiza um componente `class Component extends DCLogic { renderVals() {...} }`.
 * Re-renderiza em lote (microtask) a cada setState/forceUpdate.
 */
(function () {
  'use strict';
  var SVG_NS = 'http://www.w3.org/2000/svg';
  var HOLE = /\{\{\s*([^}]+?)\s*\}\}/g;
  var ONE_HOLE = /^\{\{\s*([^}]+?)\s*\}\}$/;
  var EVENT_MAP = { doubleclick: 'dblclick' };

  function lookup(path, scope) {
    if (path === 'true') return true;
    if (path === 'false') return false;
    var parts = path.split('.');
    var head = parts[0], cur;
    var s = scope;
    while (s) { if (Object.prototype.hasOwnProperty.call(s.locals, head)) { cur = s.locals[head]; break; } s = s.parent; }
    if (!s) cur = scope.root[head];
    for (var i = 1; i < parts.length && cur != null; i++) cur = cur[parts[i]];
    return cur;
  }
  function interp(str, scope) {
    return str.replace(HOLE, function (_, p) { var v = lookup(p, scope); return v == null ? '' : String(v); });
  }

  /* ---------- compilação ---------- */
  function compileChildren(parent, svg) {
    var out = [];
    for (var n = parent.firstChild; n; n = n.nextSibling) {
      var c = compileNode(n, svg);
      if (c) out.push(c);
    }
    return out;
  }
  function compileNode(node, svg) {
    if (node.nodeType === 3) {
      var txt = node.nodeValue;
      if (txt.indexOf('{{') < 0) return { kind: 'text', text: txt };
      var parts = [], last = 0, m;
      HOLE.lastIndex = 0;
      while ((m = HOLE.exec(txt))) {
        if (m.index > last) parts.push({ kind: 'text', text: txt.slice(last, m.index) });
        parts.push({ kind: 'hole', path: m[1] });
        last = m.index + m[0].length;
      }
      if (last < txt.length) parts.push({ kind: 'text', text: txt.slice(last) });
      return { kind: 'frag', parts: parts };
    }
    if (node.nodeType !== 1) return null;
    var tag = node.localName;
    if (tag === 'sc-for') {
      var lm = ONE_HOLE.exec(node.getAttribute('list') || '');
      return { kind: 'for', list: lm ? lm[1] : '', as: node.getAttribute('as') || 'item', body: compileChildren(node, svg) };
    }
    if (tag === 'sc-if') {
      var vm = ONE_HOLE.exec(node.getAttribute('value') || '');
      return { kind: 'if', cond: vm ? vm[1] : 'false', body: compileChildren(node, svg) };
    }
    var isSvg = svg || tag === 'svg';
    var el = { kind: 'el', tag: tag, svg: isSvg, attrs: [], events: [], dyn: [] };
    for (var i = 0; i < node.attributes.length; i++) {
      var a = node.attributes[i], name = a.name, val = a.value;
      if (name.indexOf('hint-placeholder') === 0) continue;
      var lname = name.toLowerCase();
      if (lname.length > 2 && lname.slice(0, 2) === 'on') {
        var em = ONE_HOLE.exec(val);
        if (em) { var ev = lname.slice(2); el.events.push({ type: EVENT_MAP[ev] || ev, path: em[1] }); continue; }
      }
      if (lname === 'playsinline') name = 'playsinline';
      if (lname === 'autoplay') name = 'autoplay';
      if (lname === 'novalidate') name = 'novalidate';
      if (val.indexOf('{{') >= 0) {
        var one = ONE_HOLE.exec(val);
        el.dyn.push({ name: name, path: one ? one[1] : null, tpl: one ? null : val });
      } else el.attrs.push([name, val]);
    }
    el.children = compileChildren(node.content || node, isSvg);
    return el;
  }

  /* ---------- instâncias ---------- */
  function Inst(nodes, scope) { this.nodes = nodes; this.scope = scope; }

  function mountList(cnodes, scope, parentEl, before) {
    var bindings = [];
    cnodes.forEach(function (c) { mountNode(c, scope, parentEl, before, bindings); });
    return bindings;
  }
  function mountNode(c, scope, parentEl, before, bindings) {
    if (c.kind === 'text') { parentEl.insertBefore(document.createTextNode(c.text), before); return; }
    if (c.kind === 'frag') {
      c.parts.forEach(function (p) {
        if (p.kind === 'text') parentEl.insertBefore(document.createTextNode(p.text), before);
        else {
          var tn = document.createTextNode('');
          parentEl.insertBefore(tn, before);
          bindings.push({ t: 'text', node: tn, path: p.path, last: undefined });
        }
      });
      return;
    }
    if (c.kind === 'for' || c.kind === 'if') {
      var anchor = document.createComment(c.kind);
      parentEl.insertBefore(anchor, before);
      bindings.push({ t: c.kind, c: c, anchor: anchor, items: [], parentEl: parentEl });
      return;
    }
    var el = c.svg ? document.createElementNS(SVG_NS, c.tag) : document.createElement(c.tag);
    c.attrs.forEach(function (a) {
      el.setAttribute(a[0], a[1]);
      if (a[0] === 'muted' && !c.svg) el.muted = true;
    });
    var holder = { el: el, scope: scope };
    c.events.forEach(function (ev) {
      el.addEventListener(ev.type, function (e) {
        var fn = lookup(ev.path, holder.scope);
        if (typeof fn === 'function') return fn(e);
      }, ev.type === 'wheel' || ev.type.indexOf('touch') === 0 ? { passive: false } : false);
    });
    c.dyn.forEach(function (d) { bindings.push({ t: 'attr', el: el, d: d, svg: c.svg, last: undefined, holder: holder }); });
    if (c.events.length && !c.dyn.length) bindings.push({ t: 'holder', holder: holder });
    var kids = mountList(c.children, scope, el, null);
    for (var i = 0; i < kids.length; i++) bindings.push(kids[i]);
    parentEl.insertBefore(el, before);
  }

  function setAttr(el, name, v, svg) {
    if (v == null || v === false) { el.removeAttribute(name); return; }
    if (v === true) v = '';
    if (!svg && name === 'value' && 'value' in el) { if (el.value !== String(v)) el.value = v; return; }
    el.setAttribute(name, v);
  }

  function update(bindings, scope) {
    for (var i = 0; i < bindings.length; i++) {
      var b = bindings[i];
      if (b.t === 'text') {
        var v = lookup(b.path, scope); v = v == null ? '' : String(v);
        if (v !== b.last) { b.node.nodeValue = v; b.last = v; }
      } else if (b.t === 'attr') {
        b.holder.scope = scope;
        var av = b.d.path ? lookup(b.d.path, scope) : interp(b.d.tpl, scope);
        if (typeof av === 'function') continue;
        if (av !== b.last) { setAttr(b.el, b.d.name, av, b.svg); b.last = av; }
      } else if (b.t === 'holder') {
        b.holder.scope = scope;
      } else if (b.t === 'if') {
        var on = !!lookup(b.c.cond, scope);
        if (on && !b.items.length) {
          var frag = document.createDocumentFragment();
          var bs = mountList(b.c.body, scope, frag, null);
          var nodes = Array.prototype.slice.call(frag.childNodes);
          b.anchor.parentNode.insertBefore(frag, b.anchor);
          b.items.push({ nodes: nodes, bindings: bs });
        } else if (!on && b.items.length) {
          b.items[0].nodes.forEach(function (n) { if (n.parentNode) n.parentNode.removeChild(n); });
          b.items = [];
        }
        if (b.items.length) update(b.items[0].bindings, scope);
      } else if (b.t === 'for') {
        var list = lookup(b.c.list, scope) || [];
        if (!Array.isArray(list)) list = [];
        while (b.items.length > list.length) {
          var it = b.items.pop();
          it.nodes.forEach(function (n) { if (n.parentNode) n.parentNode.removeChild(n); });
        }
        for (var k = 0; k < list.length; k++) {
          var locals = {}; locals[b.c.as] = list[k];
          var sc = { locals: locals, parent: scope, root: scope.root };
          if (k >= b.items.length) {
            var fr = document.createDocumentFragment();
            var bb = mountList(b.c.body, sc, fr, null);
            var ns = Array.prototype.slice.call(fr.childNodes);
            b.anchor.parentNode.insertBefore(fr, b.anchor);
            b.items.push({ nodes: ns, bindings: bb });
          }
          update(b.items[k].bindings, sc);
        }
      }
    }
  }

  /* ---------- classe base ---------- */
  function DCLogic(props) { this.props = props || {}; this.state = {}; }
  DCLogic.prototype.setState = function (patch) {
    if (typeof patch === 'function') patch = patch(this.state, this.props);
    if (patch) for (var k in patch) this.state[k] = patch[k];
    this.__schedule && this.__schedule();
  };
  DCLogic.prototype.forceUpdate = function () { this.__schedule && this.__schedule(); };
  window.DCLogic = DCLogic;

  window.dcMount = function (Component, mountEl, tplEl) {
    var compiled = compileChildren(tplEl.content, false);
    var comp = new Component({});
    var rootScope = { locals: {}, parent: null, root: {} };
    var bindings = mountList(compiled, rootScope, mountEl, null);
    var pending = false, mounted = false;
    function render() {
      pending = false;
      var vals = comp.renderVals() || {};
      rootScope.root = vals;
      update(bindings, rootScope);
      if (mounted) { if (comp.componentDidUpdate) comp.componentDidUpdate(); }
    }
    comp.__schedule = function () { if (!pending) { pending = true; Promise.resolve().then(render); } };
    render();
    mounted = true;
    if (comp.componentDidMount) comp.componentDidMount();
    window.addEventListener('pagehide', function () { if (comp.componentWillUnmount) comp.componentWillUnmount(); });
    return comp;
  };
})();
