/* Lê os dados do site (gerados pelo servidor) antes de iniciar a bancada. */
(function () {
  try { window.SITE = JSON.parse(document.getElementById('site-data').textContent || '{}'); } catch (e) { window.SITE = {}; }
  var w = document.body.getAttribute('data-initial');
  if (w) window.INITIAL_WIN = w;
})();
