/*
 * Visualizador de modelos .glb (Three.js) — carregado só quando algum projeto tem modelo 3D.
 * Rode scripts/fetch_vendor.sh uma vez no servidor para baixar o Three.js para /static/vendor.
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const viewers = new Set();
const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function hasWebGL() {
  try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch (e) { return false; }
}

function mount(host, src) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, 0.01, 100);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  host.appendChild(renderer.domElement);
  scene.add(new THREE.HemisphereLight(0xffffff, 0xd8c8b0, 1.6));
  const sun = new THREE.DirectionalLight(0xffffff, 1.8);
  sun.position.set(3, 5, 4);
  scene.add(sun);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enablePan = false;
  controls.enableDamping = true;
  controls.autoRotate = !reduced;
  controls.autoRotateSpeed = 1.2;
  ['pointerdown', 'wheel', 'touchstart'].forEach((ev) => host.addEventListener(ev, (e) => e.stopPropagation(), { passive: true }));

  let mixer = null, actions = [], open = false, raf = 0, dead = false;
  const clock = new THREE.Clock();

  function resize() {
    const w = host.clientWidth || 1, h = host.clientHeight || 1;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  const ro = new ResizeObserver(resize);
  ro.observe(host);
  resize();

  new GLTFLoader().load(src, (gltf) => {
    if (dead) return;
    const root = gltf.scene;
    const box = new THREE.Box3().setFromObject(root);
    const size = box.getSize(new THREE.Vector3()).length() || 1;
    const center = box.getCenter(new THREE.Vector3());
    root.position.sub(center);
    scene.add(root);
    camera.position.set(size * 0.55, size * 0.35, size * 0.95);
    controls.minDistance = size * 0.45;
    controls.maxDistance = size * 2.2;
    controls.target.set(0, 0, 0);
    controls.update();
    if (gltf.animations && gltf.animations.length) {
      mixer = new THREE.AnimationMixer(root);
      actions = gltf.animations.map((clip) => {
        const a = mixer.clipAction(clip);
        a.setLoop(THREE.LoopOnce, 1);
        a.clampWhenFinished = true;
        return a;
      });
      const btn = document.createElement('button');
      btn.className = 'chip pink glbbtn';
      btn.type = 'button';
      btn.textContent = 'Abrir';
      btn.addEventListener('click', () => {
        open = !open;
        actions.forEach((a) => { a.paused = false; a.timeScale = open ? 1 : -1; if (!a.isRunning()) { if (!open) a.time = a.getClip().duration; a.play(); } });
        btn.textContent = open ? 'Fechar' : 'Abrir';
      });
      host.appendChild(btn);
    }
  }, undefined, () => {
    const p = document.createElement('p');
    p.textContent = 'Não foi possível carregar o modelo 3D.';
    p.style.cssText = 'position:absolute;left:0;right:0;top:45%;text-align:center;font:600 13px Archivo,sans-serif;color:#5b3343';
    host.appendChild(p);
  });

  function loop() {
    if (dead) return;
    raf = requestAnimationFrame(loop);
    const dt = clock.getDelta();
    if (mixer) mixer.update(dt);
    controls.update();
    renderer.render(scene, camera);
  }
  loop();

  const v = {
    host,
    dispose() {
      dead = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
      controls.dispose();
      scene.traverse((o) => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => { Object.values(m).forEach((x) => x && x.isTexture && x.dispose()); m.dispose(); });
      });
      renderer.dispose();
      host.innerHTML = '';
    },
  };
  viewers.add(v);
  return v;
}

window.syncGLB = function () {
  if (!hasWebGL()) return;
  viewers.forEach((v) => { if (!v.host.isConnected) { v.dispose(); viewers.delete(v); } });
  document.querySelectorAll('.glbhost').forEach((host) => {
    const src = host.getAttribute('data-glb') || '';
    if (src === host._glbSrc) return;
    if (host._glbViewer) { host._glbViewer.dispose(); viewers.delete(host._glbViewer); host._glbViewer = null; }
    host._glbSrc = src;
    if (src.charAt(0) === '/') host._glbViewer = mount(host, src);
  });
};
window.syncGLB();
