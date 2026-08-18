  (function () {
    document.documentElement.classList.add('js');

    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---------- Glitch debug helper: ?glitch jumps the 7s cycle to the first burst,
       ?glitch=freeze freezes a representative burst frame (deterministic screenshots) ---------- */
    if (location.search.indexOf('glitch=freeze') !== -1) {
      var freezeStyle = document.createElement('style');
      freezeStyle.textContent =
        '.glitch { animation: none !important; color: var(--ink) !important; text-shadow: -2px 0 var(--accent), 2px 0 var(--teal) !important; }' +
        '.glitch::before { animation: none !important; opacity: 1 !important; color: var(--accent); clip-path: polygon(0 10%,100% 0,100% 30%,0 35%); transform: translate(8px,4px) skewX(-12deg); }' +
        '.glitch::after { animation: none !important; opacity: 1 !important; color: var(--teal); clip-path: polygon(0 55%,100% 55%,100% 100%,0 100%); transform: translate(8px,4px); }';
      document.head.appendChild(freezeStyle);
    } else if (location.search.indexOf('glitch') !== -1) {
      var glitchStyle = document.createElement('style');
      glitchStyle.textContent = '.glitch, .glitch::before, .glitch::after { animation-delay: -2.05s !important; }';
      document.head.appendChild(glitchStyle);
    }

    /* ---------- Scroll reveal ---------- */
    var revealTargets = document.querySelectorAll('.reveal');
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealTargets.forEach(function (el) { el.classList.add('is-visible'); });
    } else {
      // stagger 60ms among reveal siblings in the same container
      var revealGroups = new Map();
      revealTargets.forEach(function (el) {
        var p = el.parentElement;
        var i = revealGroups.get(p) || 0;
        el.style.transitionDelay = (i * 60) + 'ms';
        revealGroups.set(p, i + 1);
      });
      var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      revealTargets.forEach(function (el) { revealObserver.observe(el); });
    }

    /* ---------- Mobile nav overlay ----------
       Debug: ?nav=open shows the overlay immediately (for screenshots) */
    var burgerButton = document.querySelector('.nav-burger');
    var mobileNavigation = document.getElementById('nav-overlay');
    if (burgerButton && mobileNavigation) {
      var setNavigationOpen = function (open) {
        mobileNavigation.classList.toggle('open', open);
        burgerButton.classList.toggle('open', open);
        burgerButton.setAttribute('aria-expanded', open ? 'true' : 'false');
        burgerButton.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
        mobileNavigation.setAttribute('aria-hidden', open ? 'false' : 'true');
        document.body.style.overflow = open ? 'hidden' : '';
      };
      burgerButton.addEventListener('click', function () {
        setNavigationOpen(!mobileNavigation.classList.contains('open'));
      });
      mobileNavigation.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () { setNavigationOpen(false); });
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && mobileNavigation.classList.contains('open')) {
          setNavigationOpen(false);
          burgerButton.focus();
        }
      });
      if (location.search.indexOf('nav=open') !== -1) setNavigationOpen(true);
    }

    /* ---------- FAQ accordion (independent items) ----------
       Debug: ?faq=open expands all items (for screenshots) */
    var openAllFaq = location.search.indexOf('faq=open') !== -1;
    document.querySelectorAll('.faq-item').forEach(function (item, i) {
      var btn = item.querySelector('.faq-q');
      var panel = item.querySelector('.faq-a');
      var panelId = 'faq-a-' + (i + 1);
      panel.id = panelId;
      btn.setAttribute('aria-controls', panelId);
      function setOpen(open) {
        item.classList.toggle('open', open);
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      }
      setOpen(openAllFaq);
      btn.addEventListener('click', function () {
        setOpen(!item.classList.contains('open'));
      });
    });

    /* ---------- Terminal: staged line entrance (plays once) ----------
       Debug: ?static shows all lines immediately (for screenshots) */
    var terminalWindow = document.querySelector('.term-window');
    if (terminalWindow) {
      if (location.search.indexOf('static') !== -1) {
        // ?static: force every line visible, skip the stagger entirely (QA screenshots)
        var staticQaStyle = document.createElement('style');
        staticQaStyle.textContent = '.js .term-window .term-line { opacity: 1 !important; transform: none !important; animation: none !important; } .js .reveal { opacity: 1 !important; transform: none !important; transition: none !important; }';
        document.head.appendChild(staticQaStyle);
      } else if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        terminalWindow.classList.add('term-play');
      } else {
        var terminalObserver = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              terminalWindow.classList.add('term-play');
              terminalObserver.disconnect();
            }
          });
        }, { threshold: 0.25 });
        terminalObserver.observe(terminalWindow);
      }
    }

  })();
