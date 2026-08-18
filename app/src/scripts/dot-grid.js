  (function () {
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---------- Interactive dot-grid canvas (vanilla port of the Quordix technique) ---------- */
    var canvas = document.getElementById('dotgrid');
    if (!canvas || !canvas.getContext) return;
    var context = canvas.getContext('2d');

    var SPACING = 30;
    var BASE_R = 1.5;
    var HOVER_R = 100;
    var SCAN_DUR = 2500;
    var SCAN_PAUSE = 4000;
    var BASE_COLOR = 'rgba(22,19,14,0.10)';
    var ACTIVE_COLOR = '#F26B1D';
    var GLOW = 'rgba(242,107,29,0.35)';

    var mouseX = -1000, mouseY = -1000;
    var isMobile = false;
    var canvasWidth = 0, canvasHeight = 0;
    var animationFrame = null;
    var particles = [];

    function createParticle() {
      return {
        x: Math.random() * canvasWidth,
        y: Math.random() * canvasHeight,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5
      };
    }

    function resizeCanvas() {
      var devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvasWidth = window.innerWidth;
      canvasHeight = window.innerHeight;
      canvas.width = Math.round(canvasWidth * devicePixelRatio);
      canvas.height = Math.round(canvasHeight * devicePixelRatio);
      canvas.style.width = canvasWidth + 'px';
      canvas.style.height = canvasHeight + 'px';
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      isMobile = canvasWidth < 768;
      particles = [];
      var n = isMobile ? 14 : 30;
      for (var i = 0; i < n; i++) particles.push(createParticle());
      if (prefersReducedMotion) drawFrame(0); // static frame on resize
    }

    function drawFrame(now) {
      context.clearRect(0, 0, canvasWidth, canvasHeight);

      // drifting faint orange particles
      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvasWidth) p.vx *= -1;
        if (p.y < 0 || p.y > canvasHeight) p.vy *= -1;
        context.beginPath();
        context.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        context.fillStyle = 'rgba(242,107,29,0.15)';
        context.fill();
      }

      // mobile: slow horizontal scan line (2.5s sweep + 4s pause) instead of cursor
      var scanLoopTime = now % (SCAN_DUR + SCAN_PAUSE);
      var scanY = (Math.min(scanLoopTime / SCAN_DUR, 1)) * (canvasHeight + HOVER_R * 2) - HOVER_R;

      for (var x = 0; x < canvasWidth; x += SPACING) {
        for (var y = 0; y < canvasHeight; y += SPACING) {
          var distance;
          if (isMobile) {
            distance = Math.abs(y - scanY);
          } else {
            var deltaX = x - mouseX, deltaY = y - mouseY;
            distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
          }
          if (distance < HOVER_R) {
            var scale = 1 - distance / HOVER_R;
            context.fillStyle = ACTIVE_COLOR;
            context.shadowBlur = 15;
            context.shadowColor = GLOW;
            context.beginPath();
            context.arc(x, y, BASE_R + scale * 3, 0, Math.PI * 2);
            context.fill();
          } else {
            context.fillStyle = BASE_COLOR;
            context.shadowBlur = 0;
            context.shadowColor = 'transparent';
            context.beginPath();
            context.arc(x, y, BASE_R, 0, Math.PI * 2);
            context.fill();
          }
        }
      }
      context.shadowBlur = 0;
      context.shadowColor = 'transparent';
    }

    function animationLoop(now) {
      drawFrame(now);
      animationFrame = requestAnimationFrame(animationLoop);
    }

    function onPointerMove(e) {
      if (isMobile) return;
      mouseX = e.clientX;
      mouseY = e.clientY;
    }
    function onPointerLeave() {
      mouseX = -1000;
      mouseY = -1000;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    if (prefersReducedMotion) {
      // prefers-reduced-motion: one static frame, no rAF animationLoop, no listeners needed
      drawFrame(0);
      return;
    }

    window.addEventListener('mousemove', onPointerMove);
    document.documentElement.addEventListener('mouseleave', onPointerLeave);

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        if (animationFrame !== null) { cancelAnimationFrame(animationFrame); animationFrame = null; }
      } else if (animationFrame === null) {
        animationFrame = requestAnimationFrame(animationLoop);
      }
    });

    /* ---------- Hero object mouse parallax (desktop only, JS enhancement) ---------- */
    var heroSection = document.querySelector('.hero');
    var heroObject = document.querySelector('.hero-object');
    if (heroSection && heroObject) {
      var targetRotateX = 0, targetRotateY = 0, currentRotateX = 0, currentRotateY = 0, parallaxFrame = null;
      var updateParallax = function () {
        currentRotateX += (targetRotateX - currentRotateX) * 0.08;
        currentRotateY += (targetRotateY - currentRotateY) * 0.08;
        heroObject.style.transform = 'perspective(900px) rotateX(' + currentRotateX.toFixed(2) + 'deg) rotateY(' + currentRotateY.toFixed(2) + 'deg)';
        if (Math.abs(targetRotateX - currentRotateX) > 0.01 || Math.abs(targetRotateY - currentRotateY) > 0.01) {
          parallaxFrame = requestAnimationFrame(updateParallax);
        } else {
          parallaxFrame = null;
        }
      };
      var requestParallaxFrame = function () { if (parallaxFrame === null) parallaxFrame = requestAnimationFrame(updateParallax); };
      heroSection.addEventListener('mousemove', function (e) {
        if (window.innerWidth < 900) return;
        var r = heroSection.getBoundingClientRect();
        var normalizedX = (e.clientX - r.left) / r.width - 0.5;
        var normalizedY = (e.clientY - r.top) / r.height - 0.5;
        targetRotateY = normalizedX * 6;
        targetRotateX = -normalizedY * 6;
        requestParallaxFrame();
      });
      heroSection.addEventListener('mouseleave', function () {
        targetRotateX = 0; targetRotateY = 0;
        requestParallaxFrame();
      });
    }

    animationFrame = requestAnimationFrame(animationLoop);
  })();
