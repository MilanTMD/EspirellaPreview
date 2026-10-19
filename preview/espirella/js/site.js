/* Espirella preview - mobile menu (classic script, no dependencies).
   Behaviour: open/close, Esc, backdrop click, focus trap, scroll lock, focus return. */
(function () {
  'use strict';

  var root = document.querySelector('.mobile-nav');
  if (!root) return;

  var toggle = root.querySelector('[data-nav-toggle]');
  var panel = root.querySelector('[data-nav-panel]');
  var backdrop = root.querySelector('[data-nav-backdrop]');
  var closeBtn = root.querySelector('[data-nav-close]');
  if (!toggle || !panel || !backdrop) return;

  var desktop = window.matchMedia('(min-width: 1024px)');
  var hideTimer;

  function isOpen() {
    return toggle.getAttribute('aria-expanded') === 'true';
  }

  function onKeydown(e) {
    if (e.key === 'Escape') {
      e.preventDefault();
      close(true);
    }
  }

  function onPanelKeydown(e) {
    if (e.key !== 'Tab') return;
    var focusable = Array.prototype.filter.call(
      panel.querySelectorAll('a[href], button:not([disabled])'),
      function (el) { return !el.hidden; }
    );
    if (!focusable.length) return;
    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function open() {
    window.clearTimeout(hideTimer);
    panel.hidden = false;
    backdrop.hidden = false;
    void panel.offsetWidth; // force reflow so the slide-in transition runs
    root.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    document.documentElement.classList.add('nav-open');
    document.addEventListener('keydown', onKeydown);
    if (closeBtn) closeBtn.focus();
  }

  function close(returnFocus) {
    if (!isOpen()) return;
    root.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    document.documentElement.classList.remove('nav-open');
    document.removeEventListener('keydown', onKeydown);
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    function hide() {
      panel.hidden = true;
      backdrop.hidden = true;
    }
    if (reduce) hide();
    else hideTimer = window.setTimeout(hide, 220);
    if (returnFocus) toggle.focus();
  }

  toggle.addEventListener('click', function () {
    if (isOpen()) close(true);
    else open();
  });
  if (closeBtn) closeBtn.addEventListener('click', function () { close(true); });
  backdrop.addEventListener('click', function () { close(true); });
  panel.addEventListener('keydown', onPanelKeydown);
  // In-page links (#id or same-page index.html#id): release scroll lock and close, no focus return.
  panel.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a[href]') : null;
    if (!a || !a.hash) return;
    var samePage = a.getAttribute('href').charAt(0) === '#' ||
      (a.pathname === window.location.pathname && a.host === window.location.host);
    if (samePage) close(false);
  });

  function onViewportChange() {
    if (desktop.matches && isOpen()) close(false);
  }
  if (desktop.addEventListener) desktop.addEventListener('change', onViewportChange);
  else if (desktop.addListener) desktop.addListener(onViewportChange);
})();
