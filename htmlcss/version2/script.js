/* ===================== ICONS ===================== */
// Render all <i data-lucide="..."> placeholders.
function renderIcons() {
  if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
}
renderIcons();

/* ===================== COPYRIGHT YEAR ===================== */
(function () {
  var el = document.getElementById("copyright");
  if (el) el.textContent = "© " + new Date().getFullYear() + " Phoenixx Edu Factory. All rights reserved.";
})();

/* ===================== THEME TOGGLE ===================== */
(function () {
  var btn = document.getElementById("theme-toggle");
  if (!btn) return;
  btn.addEventListener("click", function () {
    var isDark = document.documentElement.classList.toggle("dark");
    try { localStorage.setItem("phoenixx-theme", isDark ? "dark" : "light"); } catch (e) {}
  });
})();

/* ===================== NAVBAR SCROLLED STATE ===================== */
(function () {
  var nav = document.getElementById("navbar");
  if (!nav) return;
  var onScroll = function () { nav.classList.toggle("scrolled", window.scrollY > 16); };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
})();

/* ===================== MOBILE MENU ===================== */
(function () {
  var toggle = document.getElementById("menu-toggle");
  var menu = document.getElementById("mobile-menu");
  if (!toggle || !menu) return;
  var setOpen = function (open) {
    menu.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    toggle.innerHTML = '<i data-lucide="' + (open ? "x" : "menu") + '"></i>';
    renderIcons();
  };
  toggle.addEventListener("click", function () { setOpen(menu.hidden); });
  menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { setOpen(false); });
  });
})();

/* ===================== NLP LEVELS ===================== */
(function () {
  var LEVELS = [
    {
      label: "Basic", tagline: "Foundations of NLP", duration: "2 days",
      blurb: "Discover how language and thought shape behavior. Build self-awareness, rapport, and goal-setting fundamentals.",
      outcomes: ["Core NLP presuppositions", "Building rapport instantly", "Outcome & goal framing", "Anchoring positive states"],
    },
    {
      label: "Practitioner", tagline: "Apply NLP in practice", duration: "5 days",
      blurb: "Master practical techniques for communication, influence, and change work you can use with clients and teams.",
      outcomes: ["Meta & Milton language models", "Reframing & belief change", "Submodalities & strategies", "Coaching with NLP"],
    },
    {
      label: "Master Practitioner", tagline: "Advanced mastery", duration: "7 days",
      blurb: "Go deep into modelling excellence, advanced patterns, and the mindset to train and transform others.",
      outcomes: ["Modelling excellence", "Advanced timeline techniques", "Values & meta-programs", "Designing interventions"],
    },
  ];
  var tabs = document.getElementById("nlp-tabs");
  if (!tabs) return;
  var taglineEl = document.getElementById("nlp-tagline");
  var durationEl = document.getElementById("nlp-duration");
  var headingEl = document.getElementById("nlp-heading");
  var blurbEl = document.getElementById("nlp-blurb");
  var outcomesEl = document.getElementById("nlp-outcomes");

  function render(i) {
    var lvl = LEVELS[i];
    taglineEl.textContent = lvl.tagline;
    durationEl.textContent = lvl.duration;
    headingEl.textContent = "NLP " + lvl.label;
    blurbEl.textContent = lvl.blurb;
    outcomesEl.innerHTML = lvl.outcomes
      .map(function (o) {
        return '<li><span class="tick"><i data-lucide="check"></i></span>' + o + "</li>";
      })
      .join("");
    tabs.querySelectorAll(".nlp-tab").forEach(function (b, bi) {
      b.classList.toggle("active", bi === i);
      b.setAttribute("aria-pressed", String(bi === i));
    });
    renderIcons();
  }

  tabs.querySelectorAll(".nlp-tab").forEach(function (b) {
    b.addEventListener("click", function () { render(parseInt(b.dataset.i, 10)); });
  });
  render(1);
})();

/* ===================== STARS (testimonials) ===================== */
(function () {
  document.querySelectorAll(".stars").forEach(function (el) {
    el.innerHTML = '<i data-lucide="star"></i>'.repeat(5);
  });
  renderIcons();
})();

/* ===================== REVEAL ON SCROLL ===================== */
(function () {
  var els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach(function (el) { el.classList.add("in"); });
    return;
  }
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
  );
  els.forEach(function (el) { io.observe(el); });
})();

/* ===================== CONTACT FORM ===================== */
(function () {
  var form = document.getElementById("contact-form");
  if (!form) return;
  var submitBtn = document.getElementById("submit-btn");
  var success = document.getElementById("form-success");

  function setError(name, show) {
    var input = form.querySelector('[name="' + name + '"]');
    var err = form.querySelector('.field-error[data-for="' + name + '"]');
    if (input) input.classList.toggle("invalid", show);
    if (err) err.classList.toggle("show", show);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var fd = new FormData(form);
    var name = String(fd.get("name") || "").trim();
    var email = String(fd.get("email") || "").trim();
    var message = String(fd.get("message") || "").trim();

    var errs = {
      name: !name,
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
      message: !message,
    };
    setError("name", errs.name);
    setError("email", errs.email);
    setError("message", errs.message);
    if (errs.name || errs.email || errs.message) return;

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i data-lucide="loader-2" class="spin"></i> Sending...';
    renderIcons();

    // Simulated async submit — wire to your backend / Formspree here.
    setTimeout(function () {
      submitBtn.disabled = false;
      submitBtn.textContent = "Submit Now";
      success.hidden = false;
      renderIcons();
      form.reset();
      setTimeout(function () { success.hidden = true; }, 6000);
    }, 1200);
  });
})();

/* ===================== HERO EMBER FIELD ===================== */
(function () {
  var canvas = document.getElementById("ember");
  if (!canvas) return;
  var ctx = canvas.getContext("2d", { alpha: true });
  if (!ctx) return;

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var dpr = Math.min(window.devicePixelRatio || 1, 2);

  // Pre-rendered glow sprite.
  var sprite = document.createElement("canvas");
  var SP = 64;
  sprite.width = sprite.height = SP;
  var sctx = sprite.getContext("2d");
  var g = sctx.createRadialGradient(SP / 2, SP / 2, 0, SP / 2, SP / 2, SP / 2);
  g.addColorStop(0, "rgba(255, 170, 70, 0.9)");
  g.addColorStop(0.4, "rgba(249, 115, 22, 0.35)");
  g.addColorStop(1, "rgba(249, 115, 22, 0)");
  sctx.fillStyle = g;
  sctx.fillRect(0, 0, SP, SP);

  var particles = [], w = 0, h = 0;

  function seed() {
    var rect = canvas.getBoundingClientRect();
    w = rect.width; h = rect.height;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    var count = Math.min(34, Math.round((w * h) / 42000));
    particles = [];
    for (var i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w, y: Math.random() * h,
        r: 6 + Math.random() * 22,
        vy: 0.12 + Math.random() * 0.45,
        vx: (Math.random() - 0.5) * 0.25,
        a: 0.25 + Math.random() * 0.5,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    ctx.globalCompositeOperation = "lighter";
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      ctx.globalAlpha = p.a;
      ctx.drawImage(sprite, p.x - p.r, p.y - p.r, p.r * 2, p.r * 2);
    }
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = "source-over";
  }

  function step() {
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      p.y -= p.vy; p.x += p.vx;
      if (p.y + p.r < 0) { p.y = h + p.r; p.x = Math.random() * w; }
      if (p.x < -p.r) p.x = w + p.r; else if (p.x > w + p.r) p.x = -p.r;
    }
    draw();
  }

  var raf = 0, running = false;
  function loop() { step(); raf = requestAnimationFrame(loop); }
  function start() { if (running || reduce) return; running = true; raf = requestAnimationFrame(loop); }
  function stop() { running = false; cancelAnimationFrame(raf); }

  seed();
  draw();

  var io = new IntersectionObserver(function (entries) {
    entries[0].isIntersecting ? start() : stop();
  }, { threshold: 0.01 });
  io.observe(canvas);

  document.addEventListener("visibilitychange", function () { document.hidden ? stop() : start(); });

  var resizeRaf = 0;
  var ro = new ResizeObserver(function () {
    cancelAnimationFrame(resizeRaf);
    resizeRaf = requestAnimationFrame(function () { seed(); draw(); });
  });
  ro.observe(canvas);
})();

/* ===================== SCROLL ZIGZAG ===================== */
(function () {
  var svg = document.getElementById("zigzag");
  if (!svg) return;

  var SVGNS = "http://www.w3.org/2000/svg";
  var path = document.createElementNS(SVGNS, "path");
  path.setAttribute("pathLength", "1");
  path.setAttribute("stroke", "hsl(var(--primary))");
  path.setAttribute("stroke-width", "3.5");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");
  path.setAttribute("fill", "none");
  path.style.strokeDasharray = "1";
  path.style.strokeDashoffset = "1";
  path.style.filter = "drop-shadow(0 0 6px hsl(var(--primary) / 0.5))";
  path.style.transition = "stroke-dashoffset 60ms linear";
  svg.appendChild(path);

  var startY = 0, endY = 1;

  function build() {
    // Skip the hero — start with a horizontal above the About section.
    var sections = Array.prototype.slice
      .call(document.querySelectorAll("main section"))
      .filter(function (el) { return el.id !== "home"; });
    var footer = document.querySelector("footer");
    var nodes = footer ? sections.concat([footer]) : sections;
    if (!nodes.length) return;

    var w = window.innerWidth;
    // Run the verticals in the gutter just outside the content column.
    var container = document.querySelector("main .container");
    var EDGE = 12, GAP = 18;
    var leftX = EDGE, rightX = w - EDGE;
    if (container) {
      var c = container.getBoundingClientRect();
      if (c.left > EDGE + GAP) leftX = c.left - GAP;
      if (w - c.right > EDGE + GAP) rightX = c.right + GAP;
    }

    var ys = nodes.map(function (el) {
      return el.getBoundingClientRect().top + window.scrollY;
    });
    var last = nodes[nodes.length - 1].getBoundingClientRect();
    ys.push(last.bottom + window.scrollY);

    startY = ys[0];
    endY = ys[ys.length - 1];

    var pts = [];
    ys.forEach(function (y, i) {
      if (i % 2 === 0) { pts.push([leftX, y], [rightX, y]); }
      else { pts.push([rightX, y], [leftX, y]); }
    });

    var d = pts
      .map(function (p, i) { return (i === 0 ? "M" : "L") + " " + p[0].toFixed(1) + " " + p[1].toFixed(1); })
      .join(" ");
    path.setAttribute("d", d);
    svg.style.height = document.documentElement.scrollHeight + "px";
  }

  var raf = 0;
  function onScroll() {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(function () {
      var pen = window.scrollY + window.innerHeight * 0.5;
      var span = endY - startY;
      var p = span > 0 ? Math.min(1, Math.max(0, (pen - startY) / span)) : 0;
      path.style.strokeDashoffset = String(1 - p);
    });
  }

  build();
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", function () { build(); onScroll(); });
  window.addEventListener("load", function () { build(); onScroll(); });
  if (window.ResizeObserver) {
    var ro = new ResizeObserver(function () { build(); onScroll(); });
    ro.observe(document.body);
  }
})();

/* ===================== SCORE CARD COUNT-UP ===================== */
(function () {
  var card = document.getElementById("score-card");
  if (!card) return;
  var valueEl = document.getElementById("gauge-value");
  var dotEl = document.getElementById("gauge-dot");
  var numEl = document.getElementById("gauge-num");
  var mComp = document.getElementById("m-completion");
  var mSat = document.getElementById("m-satisfaction");
  var mPlace = document.getElementById("m-placement");

  var ARC = 251.3; // semicircle length (π·80)
  var TARGETS = { score: 89, completion: 92, satisfaction: 4.9, placement: 88 };

  valueEl.style.strokeDasharray = String(ARC);
  valueEl.style.strokeDashoffset = String(ARC); // start hidden

  function render(e) {
    var score = TARGETS.score * e;
    var frac = score / 100;
    valueEl.style.strokeDashoffset = String(ARC * (1 - frac));
    var ang = ((180 - 180 * frac) * Math.PI) / 180;
    dotEl.setAttribute("cx", String(100 + 80 * Math.cos(ang)));
    dotEl.setAttribute("cy", String(100 - 80 * Math.sin(ang)));
    numEl.textContent = String(Math.round(score));
    mComp.textContent = Math.round(TARGETS.completion * e) + "%";
    mSat.textContent = (TARGETS.satisfaction * e).toFixed(1) + " / 5";
    mPlace.textContent = Math.round(TARGETS.placement * e) + "%";
  }

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) { render(1); return; }

  var started = false, raf = 0, DUR = 2000;
  function animate(t0) {
    function tick(t) {
      var p = Math.min(1, (t - t0) / DUR);
      var e = 1 - Math.pow(1 - p, 3); // easeOutCubic
      render(e);
      if (p < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
  }

  var io = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting && !started) {
      started = true;
      raf = requestAnimationFrame(animate);
      io.disconnect();
    }
  }, { threshold: 0.4 });
  io.observe(card);
})();
