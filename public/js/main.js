// Basic page script
// Loads after the page becomes interactive
(function () {
  function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn, { once: true });
    }
  }

  ready(function () {
    // Diagnostics
    console.log('[main.js] Ready. You can attach handlers here.');

    // Theme toggle: [data-action="toggle-theme"]
    var THEME_KEY = 'theme';
    function getTheme() {
      var attr = document.documentElement.getAttribute('data-theme');
      return attr === 'dark' ? 'dark' : 'light';
    }
    function setTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      try { localStorage.setItem(THEME_KEY, theme); } catch (_) {}
    }
    document.querySelectorAll('[data-action="toggle-theme"]').forEach(function (el) {
      el.addEventListener('click', function () {
        var next = getTheme() === 'dark' ? 'light' : 'dark';
        setTheme(next);
      });
    });
  });
})();
