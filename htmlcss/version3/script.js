/* =========================================================================
   Phoenixx Edu Factory — version3 (plain HTML/CSS/JS port of the React app)
   ========================================================================= */

/* ----------------------------- DATA: SERVICES ---------------------------- */
const SERVICES = [
  {
    slug: "corporate-training",
    icon: "briefcase",
    title: "Corporate Training",
    problem: "Communication gaps and weak leadership costing your team performance?",
    desc: "We build customized programs that turn capable people into high-performing teams.",
    tags: "Leadership · Productivity · Team Building",
    bg: "linear-gradient(155deg, #0c4a6e 0%, #1d4ed8 55%, #0f172a 100%)",
    intro:
      "Your team is technically capable — but misaligned communication, underdeveloped leadership, and low team cohesion are quietly costing you performance, retention, and results. Our Corporate Training delivers customized workforce development programs built around your organization's actual gaps — covering leadership communication, team dynamics, productivity, and the interpersonal skills that determine whether talented people become high-performing teams.",
    highlights: [
      { title: "Leadership Development", desc: "Build managers who coach, delegate, and inspire." },
      { title: "Team Building", desc: "Improve collaboration, trust, and accountability." },
      { title: "Communication & Etiquette", desc: "Sharpen workplace and client communication." },
      { title: "Productivity & Time Management", desc: "Practical systems for getting high-value work done." },
    ],
    outcomes: [
      "Develop confident, capable people-leaders",
      "Boost team collaboration and accountability",
      "Lift overall workforce productivity and morale",
    ],
    audience: "Corporates, startups, and enterprise teams of any size.",
  },
  {
    slug: "nlp-workshops",
    icon: "brain-circuit",
    title: "NLP Workshops",
    problem: "Your words don't land the way you intend — no matter how much you prepare?",
    desc: "We give you tools to communicate with precision, build rapport, and get results.",
    tags: "Basic · Practitioner · Master",
    bg: "linear-gradient(155deg, #4c1d95 0%, #6d28d9 55%, #1e1b4b 100%)",
    intro:
      "You want to lead, influence, and connect — but your words don't land the way you intend, and you leave conversations feeling like you didn't get your point across no matter how much you prepare. Our NLP Workshops teach the science behind how language, thought, and behavior work together — giving you tools to communicate with precision, build instant rapport, and create the outcomes you design, across Basic, Practitioner, and Master Practitioner levels.",
    highlights: [
      { title: "Basic", desc: "Core presuppositions, rapport, and outcome framing." },
      { title: "Practitioner", desc: "Language models, reframing, and belief change." },
      { title: "Master Practitioner", desc: "Advanced strategies, modelling, and coaching with NLP." },
      { title: "Real Application", desc: "Apply NLP to communication, sales, and leadership." },
    ],
    outcomes: [
      "Build instant rapport in any conversation",
      "Reframe limiting beliefs and patterns",
      "Coach yourself and others toward outcomes",
    ],
    audience: "Coaches, trainers, leaders, and self-development seekers.",
  },
  {
    slug: "soft-skills-training",
    icon: "messages-square",
    title: "Soft Skills Training",
    problem: "Qualified on paper — but losing opportunities to people who communicate better?",
    desc: "We build the communication fluency and confidence that gets you noticed and promoted.",
    tags: "Communication · Confidence · Influence",
    bg: "linear-gradient(155deg, #7c2d12 0%, #b45309 55%, #1c1917 100%)",
    intro:
      "You're qualified on paper — but you keep losing opportunities to people who simply communicate better, present with more confidence, and carry themselves like leaders. Our Soft Skills Training builds the communication fluency, presence, and interpersonal confidence that get you noticed, trusted, and promoted — the human skills that decide how far your talent actually takes you.",
    highlights: [
      { title: "Communication", desc: "Speak clearly, structure ideas, and present with impact." },
      { title: "Confidence & Presence", desc: "Carry yourself with credibility in any room." },
      { title: "Teamwork & Collaboration", desc: "Build trust and work well across functions." },
      { title: "Workplace Etiquette", desc: "Professional email, meeting, and conversation skills." },
    ],
    outcomes: [
      "Communicate confidently in meetings and interviews",
      "Build presence that gets you noticed and trusted",
      "Collaborate and lead with clarity",
    ],
    audience: "Students, early-career professionals, and corporate teams.",
  },
  {
    slug: "hospitality-training",
    icon: "utensils-crossed",
    title: "Hospitality Training",
    problem: "Your team knows the process — but guests still don't feel genuinely valued?",
    desc: "We build the mindset and standards that turn every interaction into a five-star moment.",
    tags: "Customer Service · Operations",
    bg: "linear-gradient(155deg, #064e3b 0%, #0f766e 55%, #022c22 100%)",
    intro:
      "Your front-line team is technically trained — but they struggle to deliver the warm, consistent, professional guest experience that builds loyalty and reputation, and one bad interaction erases ten great ones. Our Hospitality Training builds the customer-service mindset, emotional intelligence, and professional standards that make every guest feel genuinely valued — not just processed. Because in hospitality, how you make people feel is the product.",
    highlights: [
      { title: "Guest Service Excellence", desc: "Five-star service standards and etiquette." },
      { title: "Front Office Operations", desc: "Check-in, upselling, and complaint handling." },
      { title: "Grooming & Presence", desc: "Professional image and confident body language." },
      { title: "Team Coordination", desc: "Smooth service flow across departments." },
    ],
    outcomes: [
      "Deliver consistent, five-star guest experiences",
      "Handle complaints and recover service gracefully",
      "Coordinate confidently across hotel operations",
    ],
    audience: "Hotels, restaurants, resorts, and hospitality students.",
  },
  {
    slug: "retail-and-sales-training",
    icon: "shopping-bag",
    title: "Retail and Sales Training",
    problem: "Your team knows the product — but keeps losing deals at the close?",
    desc: "We train the interpersonal skills that turn product knowledge into real revenue.",
    tags: "Selling · Customer Service · Conversion",
    bg: "linear-gradient(155deg, #7c2d12 0%, #db2777 55%, #1c1917 100%)",
    intro:
      "Your sales team knows the product inside out — but they're losing deals because they can't read the customer, handle objections, or close with confidence, and product knowledge without people skills costs revenue. Our Retail and Sales Training builds the interpersonal skills, persuasion techniques, and customer-first mindset that turn product knowledge into actual sales — so your team knows how to connect, convince, and convert in any selling environment.",
    highlights: [
      { title: "Customer Engagement", desc: "Greet, understand, and connect with every customer." },
      { title: "Consultative Selling", desc: "Match needs to products and sell with confidence." },
      { title: "Objection Handling & Closing", desc: "Move conversations to a confident yes." },
      { title: "Upselling & Cross-Selling", desc: "Grow basket size without pressure tactics." },
    ],
    outcomes: [
      "Convert more walk-ins into paying customers",
      "Handle objections and close with confidence",
      "Deliver service that drives repeat business",
    ],
    audience: "Retail staff, sales executives, showrooms, and brand teams.",
  },
  {
    slug: "institution-programs",
    icon: "graduation-cap",
    title: "Institution Programs",
    problem: "Your graduates are talented — but placement rates don't reflect it?",
    desc: "We bring career readiness training directly to campus with proven placement outcomes.",
    tags: "College-to-Corporate · Counselling",
    bg: "linear-gradient(155deg, #78350f 0%, #d97706 55%, #1c1917 100%)",
    intro:
      "Your institution produces academically strong graduates — but placement rates don't reflect the quality of your students, because employers are screening for skills your curriculum doesn't cover. Phoenixx Edu Factory's Institution Programs bring structured corporate-readiness training, career counselling, and placement skills directly to your campus — bridging the gap between academic excellence and employment-ready performance, with a proven track record of improving placement outcomes.",
    highlights: [
      { title: "Campus-to-Corporate", desc: "Employability, resume, and interview readiness." },
      { title: "Career Counselling", desc: "Guided pathways from college to first job." },
      { title: "Faculty Development", desc: "Modern pedagogy and classroom communication." },
      { title: "Aptitude & Skills", desc: "Structured prep for placement success." },
    ],
    outcomes: [
      "Improve student placement readiness and outcomes",
      "Equip faculty with modern teaching skills",
      "Build a repeatable college-to-corporate pipeline",
    ],
    audience: "Colleges, universities, and training institutions.",
  },
];

/* ---------------------------- DATA: INDUSTRIES --------------------------- */
const INDUSTRIES = [
  {
    icon: "graduation-cap",
    label: "Education",
    blurb:
      "Institutions produce knowledge — but graduates often leave without the communication, confidence, or career skills employers demand on day one. We close the gap between academic learning and professional readiness, for faculty and students alike.",
    trainings: [
      { title: "Faculty Development", desc: "Equip educators to teach the skills employers actually look for." },
      { title: "Campus-to-Corporate", desc: "Build career readiness and interview confidence before students graduate." },
      { title: "Student Life Skills", desc: "Help students handle pressure, lead, and grow with confidence." },
      { title: "Career Counselling", desc: "Help students find direction and the right career path." },
    ],
  },
  {
    icon: "heart-pulse",
    label: "Healthcare",
    blurb:
      "Healthcare professionals are trained in clinical skills — but patient communication, empathy under pressure, and team coordination are often left to chance, costing trust and outcomes. We train teams in the interpersonal skills that build high-functioning clinical environments.",
    trainings: [
      { title: "Patient Communication", desc: "Deliver information clearly and respond to anxiety with empathy." },
      { title: "Stress & Resilience", desc: "Help staff perform under pressure without burning out." },
      { title: "Team Coordination", desc: "Improve coordination and accountability across clinical and admin teams." },
      { title: "Healthcare Leadership", desc: "Build communication and team-motivation skills for healthcare managers." },
    ],
  },
  {
    icon: "utensils-crossed",
    label: "Hospitality",
    blurb:
      "Hospitality businesses invest heavily in decor, food, and technology — but the guest experience often falls apart at the human level, where inconsistent service destroys reputation. We train teams to make every guest interaction exceptional, not just adequate.",
    trainings: [
      { title: "Guest Experience Excellence", desc: "Build the mindset that creates memorable, five-star guest stays." },
      { title: "Service Recovery", desc: "Turn a bad experience into a loyalty-building moment." },
      { title: "Communication & Presentation", desc: "Align how your team looks, speaks, and presents." },
      { title: "Hospitality Leadership", desc: "Build team-management skills that high-performing venues require." },
    ],
  },
  {
    icon: "code-2",
    label: "IT",
    blurb:
      "IT professionals are technically brilliant — but communication gaps, poor stakeholder management, and underdeveloped leadership hold teams back from delivering their full value. We help IT teams make technical excellence visible to the business.",
    trainings: [
      { title: "Technical Communication", desc: "Translate technical thinking into clear, persuasive language for anyone." },
      { title: "Stakeholder Management", desc: "Keep projects aligned and clients confident through communication." },
      { title: "Agile Team Communication", desc: "Strengthen sprint communication and cross-functional alignment." },
      { title: "Leadership for Tech Leads", desc: "Turn strong engineers into effective, confident team leaders." },
    ],
  },
  {
    icon: "headset",
    label: "BPO",
    blurb:
      "BPO employers need agents who are confident, articulate, and process-literate from day one — but most freshers arrive with qualifications and no industry-ready skills. We train candidates and teams in exactly what employers need, before they walk through the door.",
    trainings: [
      { title: "Voice & Accent", desc: "Build speech clarity, consistency, and professional tone." },
      { title: "BPO Process & Etiquette", desc: "Make new agents operationally ready from day one." },
      { title: "Customer Handling & De-escalation", desc: "Help agents stay calm and de-escalate difficult calls." },
      { title: "Team Leader Development", desc: "Build coaching and performance skills for floor leaders." },
    ],
  },
  {
    icon: "store",
    label: "Retail",
    blurb:
      "Retail businesses invest in product range, store design, and pricing — but lose sales every day because floor staff can't connect with customers, handle objections, or close confidently. We train teams to sell with confidence and serve with warmth.",
    trainings: [
      { title: "Sales Floor Communication", desc: "Open conversations and guide customers to confident purchases." },
      { title: "Customer Experience", desc: "Turn first-time shoppers into loyal, returning customers." },
      { title: "Objection Handling & Closing", desc: "Give your team the technique to convert hesitation." },
      { title: "Retail Leadership", desc: "Turn store managers into motivating, effective team leaders." },
    ],
  },
  {
    icon: "factory",
    label: "Manufacturing",
    blurb:
      "Manufacturing demands precision, safety, and teamwork — but communication breakdowns, leadership gaps, and low morale quietly erode efficiency, safety, and output. We train teams and supervisors in the skills that keep operations running safely and smoothly.",
    trainings: [
      { title: "Safety Communication", desc: "Embed a speak-up culture where workers flag issues early." },
      { title: "Supervisor Leadership", desc: "Build coaching and people skills for production supervisors." },
      { title: "Team Communication & Coordination", desc: "Keep production moving with clear, accountable handoffs." },
      { title: "Productivity & Work Ethic", desc: "Rebuild accountability and the mindset that drives output." },
    ],
  },
  {
    icon: "landmark",
    label: "Banking",
    blurb:
      "Banking professionals are trusted with people's financial futures — but relationship skills, communication confidence, and ethical selling are rarely trained to the level customer trust and regulation demand. We train teams to build trust, improve service, and sell ethically.",
    trainings: [
      { title: "Customer Relationship Management", desc: "Build listening and empathy skills that retain customers." },
      { title: "Ethical Sales & Product Communication", desc: "Match the right product to the right customer, honestly." },
      { title: "Complaint Handling & Service Recovery", desc: "Resolve issues quickly while leaving customers feeling heard." },
      { title: "Leadership for Branch Managers", desc: "Build coaching and performance skills branches need." },
    ],
  },
];

/* Hero right-hand module bars. */
const HERO_MODULES = [
  { icon: "message-square", title: "Communication", level: "Soft Skills", pct: 100 },
  { icon: "users", title: "Leadership", level: "Practitioner", pct: 96 },
  { icon: "activity", title: "Resilience", level: "Life Skills", pct: 92 },
  { icon: "headphones", title: "Service Skills", level: "Hospitality", pct: 88 },
];

/* Trust-strip rotating items. */
const TRUST_ITEMS = [
  "Soft skills that get you hired",
  "NLP that changes how you think",
  "Hospitality training that impresses guests",
  "Corporate training that fixes real team problems",
  "Retail & sales skills that close more deals",
  "Career counselling that clears the confusion",
];

/* Footer socials (path data lifted from the React Footer). */
const SOCIALS = [
  { label: "YouTube", path: "M23.5 6.5a3 3 0 0 0-2.1-2.1C19.5 3.9 12 3.9 12 3.9s-7.5 0-9.4.5A3 3 0 0 0 .5 6.5C0 8.4 0 12 0 12s0 3.6.5 5.5a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.5.5-5.5s0-3.6-.5-5.5ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" },
  { label: "LinkedIn", path: "M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5V8h3v11ZM6.5 6.7a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6ZM19 19h-3v-5.6c0-1.4-.5-2.3-1.7-2.3-1 0-1.5.6-1.7 1.3-.1.2-.1.5-.1.8V19h-3V8h3v1.3a3 3 0 0 1 2.7-1.5c2 0 3.5 1.3 3.5 4.1V19Z" },
  { label: "Instagram", path: "M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4a3.7 3.7 0 0 1-1.4-.9 3.7 3.7 0 0 1-.9-1.4c-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1C2.6 9.9 2.6 10.3 2.6 12s0 2.1.1 3.3c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-3.3s0-2.1-.1-3.3c-.1-1.1-.2-1.7-.4-2.1a3.3 3.3 0 0 0-.8-1.3 3.3 3.3 0 0 0-1.3-.8c-.4-.2-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1Zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 8a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2Zm6.3-8.2a1.1 1.1 0 1 1-2.3 0 1.1 1.1 0 0 1 2.3 0Z" },
  { label: "X", path: "M18.2 2h3.3l-7.2 8.3L23 22h-6.6l-5.2-6.8L5.3 22H2l7.7-8.8L1.7 2h6.8l4.7 6.2L18.2 2Zm-1.2 18h1.8L7.1 3.9H5.2L17 20Z" },
];

const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id";

/* ------------------------------- helpers --------------------------------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const el = (tag, cls, html) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html != null) n.innerHTML = html;
  return n;
};
const icon = (name, cls) => `<i data-lucide="${name}"${cls ? ` class="${cls}"` : ""}></i>`;
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const refreshIcons = () => { if (window.lucide) window.lucide.createIcons(); };

const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function getService(slug) {
  return SERVICES.find((s) => s.slug === slug);
}

/* --------------------------------- THEME --------------------------------- */
function initTheme() {
  const btn = $("#theme-toggle");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    try { localStorage.setItem("phoenixx-theme", isDark ? "dark" : "light"); } catch (e) {}
  });
}

/* ------------------------- NAVBAR (scroll + menus) ----------------------- */
function initNavbar() {
  const nav = $("#navbar");
  const onScroll = () => nav && nav.classList.toggle("scrolled", window.scrollY > 16);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // mobile menu
  const menuToggle = $("#menu-toggle");
  const mobileMenu = $("#mobile-menu");
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      const open = mobileMenu.hasAttribute("hidden");
      if (open) {
        mobileMenu.removeAttribute("hidden");
        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.setAttribute("aria-label", "Close menu");
        nav.classList.add("menu-open");
      } else {
        mobileMenu.setAttribute("hidden", "");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open menu");
        nav.classList.remove("menu-open");
      }
    });
  }

  // services dropdown (desktop) — open on hover, toggle on click
  const dd = $("#services-dropdown");
  if (dd) {
    const btn = $(".nav-dropdown-btn", dd);
    const menu = $(".nav-dropdown-menu", dd);
    const open = () => { menu.removeAttribute("hidden"); btn.setAttribute("aria-expanded", "true"); dd.classList.add("open"); };
    const close = () => { menu.setAttribute("hidden", ""); btn.setAttribute("aria-expanded", "false"); dd.classList.remove("open"); };
    dd.addEventListener("mouseenter", open);
    dd.addEventListener("mouseleave", close);
    btn.addEventListener("click", () => (dd.classList.contains("open") ? close() : open()));
  }
}

/* Close mobile menu helper. */
function closeMobileMenu() {
  const menuToggle = $("#menu-toggle");
  const mobileMenu = $("#mobile-menu");
  const nav = $("#navbar");
  if (mobileMenu && !mobileMenu.hasAttribute("hidden")) {
    mobileMenu.setAttribute("hidden", "");
    if (menuToggle) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open menu");
    }
    nav && nav.classList.remove("menu-open");
  }
}

/* ----------------------- SECTION LINKS (smooth scroll) ------------------- */
function initSectionLinks() {
  $$(".section-link").forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href") || "";
      closeMobileMenu();
      // Same-page hash → smooth scroll. Cross-page (index.html#x) → let it navigate.
      if (href.startsWith("#")) {
        const target = document.getElementById(href.slice(1));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth" });
        }
      }
    });
  });
}

/* ------------------------- REVEAL ON SCROLL ----------------------------- */
function initReveal() {
  const items = $$(".reveal");
  if (prefersReduced || !("IntersectionObserver" in window)) {
    items.forEach((i) => i.classList.add("shown"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("shown");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  items.forEach((i) => io.observe(i));
}

/* ------------------------- COUNT-UP (about stats) ----------------------- */
function animateCount(node, to, suffix, decimals, duration) {
  if (prefersReduced) { node.textContent = to.toFixed(decimals) + suffix; return; }
  const start = performance.now();
  const tick = (t) => {
    const p = Math.min(1, (t - start) / duration);
    const eased = 1 - Math.pow(1 - p, 3);
    node.textContent = (to * eased).toFixed(decimals) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function initCountUps() {
  const nodes = $$(".count");
  const run = (node) => {
    const to = parseFloat(node.dataset.to);
    const suffix = node.dataset.suffix || "";
    const decimals = parseInt(node.dataset.decimals || "0", 10);
    animateCount(node, to, suffix, decimals, 1800);
  };
  if (prefersReduced || !("IntersectionObserver" in window)) { nodes.forEach(run); return; }
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } }),
    { threshold: 0.5 }
  );
  nodes.forEach((n) => io.observe(n));
}

/* ------------------------------ HERO CARDS ------------------------------ */
function initHero() {
  const card = $("#module-card");
  if (!card) return; // not on this page

  // build module rows
  HERO_MODULES.forEach((m) => {
    const row = el("div", "mod-row");
    row.innerHTML = `
      <span class="mod-icon">${icon(m.icon)}</span>
      <div class="mod-body">
        <div class="mod-top"><p class="mod-title">${esc(m.title)}</p><span class="mod-pct">0%</span></div>
        <p class="mod-level">${esc(m.level)}</p>
        <div class="mod-bar"><div class="mod-fill" style="width:0%"></div></div>
      </div>`;
    card.appendChild(row);
  });

  const C = 2 * Math.PI * 40;
  const ringVal = $("#ring-value");
  const ringNum = $("#ring-num");
  ringVal.style.strokeDasharray = C;
  ringVal.style.strokeDashoffset = C;

  const COMPLETION = 92;
  const render = (p) => {
    const completion = COMPLETION * p;
    ringVal.style.strokeDashoffset = C * (1 - completion / 100);
    ringNum.textContent = Math.round(completion) + "%";
    $$(".mod-row", card).forEach((row, i) => {
      const w = Math.round(HERO_MODULES[i].pct * p);
      $(".mod-fill", row).style.width = w + "%";
      $(".mod-pct", row).textContent = w + "%";
    });
  };

  const start = () => {
    if (prefersReduced) { render(1); return; }
    const t0 = performance.now();
    const DUR = 1800;
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / DUR);
      render(1 - Math.pow(1 - p, 3));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const media = $("#hero-media");
  if (prefersReduced || !("IntersectionObserver" in window)) { start(); return; }
  const io = new IntersectionObserver(
    (entries) => { if (entries[0].isIntersecting) { start(); io.disconnect(); } },
    { threshold: 0.3 }
  );
  io.observe(media);
}

/* ------------------------------ TRUST STRIP ----------------------------- */
function initTrustStrip() {
  const track = $("#trust-track");
  if (!track) return;
  const items = [...TRUST_ITEMS, ...TRUST_ITEMS];
  items.forEach((t) => {
    const span = el("span", "trust-item");
    span.innerHTML = `${esc(t)}<span class="trust-dot"></span>`;
    track.appendChild(span);
  });
}

/* --------------------------- SERVICES ACCORDION ------------------------- */
function initServicesAccordion() {
  const wrap = $("#svc-accordion");
  if (!wrap) return;
  SERVICES.forEach((s, i) => {
    const a = document.createElement("a");
    a.href = `service.html?s=${s.slug}`;
    a.className = "svc-panel" + (i === 0 ? " active" : "");
    a.setAttribute("aria-label", `${s.title} — view program`);
    a.innerHTML = `
      <span class="svc-bg" style="background:${s.bg}"></span>
      <span class="svc-overlay"></span>
      <span class="svc-watermark">${icon(s.icon)}</span>
      <span class="svc-collapsed"><span class="svc-vertical">${esc(s.title)}</span></span>
      <div class="svc-expanded">
        <span class="svc-card-icon">${icon(s.icon)}</span>
        <h3>${esc(s.title)}</h3>
        <p class="svc-problem">${esc(s.problem)}</p>
        <p class="svc-desc">${esc(s.desc)}</p>
        <span class="svc-more">Learn More ${icon("arrow-right")}</span>
      </div>`;
    const activate = () => {
      $$(".svc-panel", wrap).forEach((p) => p.classList.remove("active"));
      a.classList.add("active");
    };
    a.addEventListener("mouseenter", activate);
    a.addEventListener("focus", activate);
    wrap.appendChild(a);
  });
}

/* ------------------------------ INDUSTRIES ------------------------------ */
function initIndustries() {
  const selector = $("#ind-selector");
  const panel = $("#ind-panel");
  if (!selector || !panel) return;

  const renderPanel = (ind) => {
    panel.innerHTML = `
      <div class="ind-fade">
        <div class="ind-head">
          <span class="ind-head-icon">${icon(ind.icon)}</span>
          <div>
            <h3>${esc(ind.label)}</h3>
            <p class="ind-blurb">${esc(ind.blurb)}</p>
          </div>
        </div>
        <div class="ind-trainings">
          ${ind.trainings
            .map(
              (t) => `
            <div class="ind-train">
              <span class="ind-check">${icon("check")}</span>
              <div><p class="ind-train-title">${esc(t.title)}</p><p class="ind-train-desc">${esc(t.desc)}</p></div>
            </div>`
            )
            .join("")}
        </div>
      </div>`;
    refreshIcons();
  };

  INDUSTRIES.forEach((ind, i) => {
    const btn = el("button", "ind-btn" + (i === 0 ? " active" : ""));
    btn.type = "button";
    btn.innerHTML = `
      <span class="ind-btn-icon">${icon(ind.icon)}</span>
      <span class="ind-btn-label">${esc(ind.label)}</span>
      ${icon("chevron-right", "ind-btn-arrow")}`;
    const select = () => {
      $$(".ind-btn", selector).forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderPanel(ind);
    };
    btn.addEventListener("mouseenter", select);
    btn.addEventListener("focus", select);
    btn.addEventListener("click", select);
    selector.appendChild(btn);
  });

  renderPanel(INDUSTRIES[0]);
}

/* ------------------------------ TESTIMONIALS ---------------------------- */
function initStars() {
  $$(".stars").forEach((box) => {
    box.innerHTML = Array.from({ length: 5 }).map(() => icon("star", "star-filled")).join("");
  });
}

/* ------------------------------ CLIENT LOGOS ---------------------------- */
const CLIENT_LOGOS = [
  "assets/clientlogo/client1.png",
  "assets/clientlogo/client3.png",
  "assets/clientlogo/client4.png",
  "assets/clientlogo/client5.avif",
  "assets/clientlogo/client6.png",
  "assets/clientlogo/client7.png",
  "assets/clientlogo/client8.svg",
  "assets/clientlogo/client9.jpg",
];

function initClientLogos() {
  const track = $("#clients-track");
  if (!track) return;
  const logos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
  logos.forEach((src, i) => {
    const div = el("div", "client-item");
    div.innerHTML = `<img src="${src}" alt="Client logo ${(i % CLIENT_LOGOS.length) + 1}" loading="lazy" />`;
    track.appendChild(div);
  });
}

/* -------------------------------- CONTACT ------------------------------- */
function initContactForm() {
  const form = $("#contact-form");
  if (!form) return;
  const fail = $("#form-fail");
  const submitBtn = $("#submit-btn");

  const setError = (name, on) => {
    const field = form.querySelector(`[name="${name}"]`);
    const err = form.querySelector(`.field-error[data-for="${name}"]`);
    if (field) field.classList.toggle("invalid", on);
    if (err) err.classList.toggle("show", on);
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const firstName = String(fd.get("firstName") || "").trim();
    const lastName = String(fd.get("lastName") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();

    const checks = {
      firstName: !firstName,
      lastName: !lastName,
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
      message: !message,
    };
    Object.keys(checks).forEach((k) => setError(k, checks[k]));
    if (Object.values(checks).some(Boolean)) return;

    fail.setAttribute("hidden", "");
    submitBtn.disabled = true;
    submitBtn.innerHTML = `${icon("loader-2", "spin")} Sending...`;
    refreshIcons();

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });
      if (!res.ok) throw new Error("Request failed: " + res.status);
      form.reset();
    } catch {
      fail.removeAttribute("hidden");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Submit Now";
    }
  });
}

/* ------------------------------ FLOATING CTA ---------------------------- */
function initFloatingCTA() {
  const cta = $("#floating-cta");
  if (!cta) return;
  const onScroll = () => cta.classList.toggle("show", window.scrollY > window.innerHeight * 0.6);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* --------------------------- NAV / FOOTER FILL -------------------------- */
function fillServiceMenus() {
  // desktop dropdown
  const menu = $("#services-menu");
  if (menu) {
    menu.innerHTML = SERVICES.map(
      (s) => `<a href="service.html?s=${s.slug}" class="dd-item">${icon(s.icon)}<span>${esc(s.title)}</span></a>`
    ).join("");
  }
  // mobile services list
  const mob = $("#mobile-services");
  if (mob) {
    mob.innerHTML = SERVICES.map(
      (s) => `<a href="service.html?s=${s.slug}" class="mm-svc">${icon(s.icon)}<span>${esc(s.title)}</span></a>`
    ).join("");
  }
  // footer services
  const fs = $("#footer-services");
  if (fs) {
    fs.innerHTML = SERVICES.map(
      (s) => `<li><a href="service.html?s=${s.slug}">${esc(s.title)}</a></li>`
    ).join("");
  }
  // footer socials
  const soc = $("#footer-socials");
  if (soc) {
    soc.innerHTML = SOCIALS.map(
      (s) =>
        `<a href="#" aria-label="${s.label}"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="${s.path}"/></svg></a>`
    ).join("");
  }
}

function setYear() {
  const cp = $("#copyright");
  if (cp) cp.textContent = `© ${new Date().getFullYear()} Phoenixx Edu Factory. All rights reserved.`;
}

/* ----------------------------- SERVICE PAGE ----------------------------- */
function renderServicePage() {
  const root = $("#service-root");
  if (!root) return;

  const slug = new URLSearchParams(location.search).get("s");
  const service = getService(slug);

  if (!service) {
    root.innerHTML = `
      <main class="notfound">
        <p class="nf-code">404</p>
        <h1>Service not found</h1>
        <p class="nf-text">The page you're looking for doesn't exist.</p>
        <a href="index.html" class="btn btn-dark">${icon("arrow-left")} Back home</a>
      </main>`;
    document.title = "Not found — Phoenixx Edu Factory";
    refreshIcons();
    return;
  }

  document.title = `${service.title} — Phoenixx Edu Factory`;
  const others = SERVICES.filter((s) => s.slug !== service.slug);

  root.innerHTML = `
    <main>
      <!-- banner -->
      <section class="svc-banner">
        <img src="assets/hero-bg.jpg" alt="${esc(service.title)}" class="svc-banner-img" />
        <span class="svc-banner-tint" style="background:${service.bg}"></span>
        <span class="svc-banner-dark"></span>
        <div class="container svc-banner-inner">
          <div class="breadcrumb">
            <a href="index.html">Home</a><span>/</span>
            <a href="index.html#services">Services</a><span>/</span>
            <span class="current">${esc(service.title)}</span>
          </div>
          <div class="svc-banner-head">
            <span class="svc-banner-icon">${icon(service.icon)}</span>
            <h1>${esc(service.title)}</h1>
            <p class="svc-banner-tags">${esc(service.tags)}</p>
          </div>
        </div>
      </section>

      <!-- content -->
      <section class="section svc-content">
        <div class="container">
          <div class="svc-content-grid">
            <div class="svc-main">
              <p class="svc-intro reveal">${esc(service.intro)}</p>

              <h2 class="svc-subhead reveal" style="--d:.05s">What this program covers</h2>
              <div class="svc-highlights">
                ${service.highlights
                  .map(
                    (h, i) => `
                  <div class="svc-highlight reveal" style="--d:${0.05 * i}s">
                    <h3>${esc(h.title)}</h3>
                    <p>${esc(h.desc)}</p>
                  </div>`
                  )
                  .join("")}
              </div>

              <h2 class="svc-subhead reveal" style="--d:.05s">What you'll walk away with</h2>
              <ul class="svc-outcomes">
                ${service.outcomes
                  .map(
                    (o) => `<li><span class="oc-check">${icon("check")}</span><span>${esc(o)}</span></li>`
                  )
                  .join("")}
              </ul>
            </div>

            <aside class="svc-aside">
              <div class="svc-aside-card">
                <h3>Who it's for</h3>
                <p class="svc-aud">${esc(service.audience)}</p>
                <a href="index.html#contact" class="svc-enquire">Enquire about this program ${icon("arrow-right")}</a>
                <div class="svc-others">
                  <h3>Other programs</h3>
                  <ul>
                    ${others
                      .map(
                        (s) => `<li><a href="service.html?s=${s.slug}">${icon(s.icon)}<span>${esc(s.title)}</span></a></li>`
                      )
                      .join("")}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>`;

  window.scrollTo(0, 0);
}

/* ------------------------------ SCROLL ZIGZAG ----------------------------- */
/* An orange line that weaves between every section and "draws" itself as the
   user scrolls down the page. The path is normalised with pathLength="1", so a
   strokeDashoffset from 1 (hidden) to 0 (drawn) maps directly to scroll
   progress. It's an absolutely-positioned, pointer-events-none overlay. */
function initZigzag() {
  const svg = document.getElementById("zigzag");
  if (!svg) return;

  const SVGNS = "http://www.w3.org/2000/svg";
  const path = document.createElementNS(SVGNS, "path");
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

  let startY = 0, endY = 1;

  function build() {
    // Run from About Us down to the last section before the footer — the line
    // starts at #about and ends above the footer (footer is NOT included).
    const all = Array.prototype.slice.call(
      document.querySelectorAll("main section")
    );
    const startIdx = all.findIndex((el) => el.id === "about");
    const nodes = startIdx >= 0 ? all.slice(startIdx) : all;
    if (!nodes.length) return;

    const w = window.innerWidth;
    // Trace the BORDER of the layout: take the widest content column (sections
    // share the same max-width, but some — like About — are narrower) and run
    // the verticals just outside it. This frames the content as a visible
    // border without ever crossing a card. PAD is the gap outside the column.
    const EDGE = 12, PAD = 20;
    let colLeft = w, colRight = 0;
    const containers = Array.prototype.slice.call(
      document.querySelectorAll("main section .container")
    );
    containers.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.width === 0) return;
      colLeft = Math.min(colLeft, r.left);
      colRight = Math.max(colRight, r.right);
    });
    if (colRight <= colLeft) { colLeft = EDGE + PAD; colRight = w - EDGE - PAD; }
    const leftX = Math.max(EDGE, colLeft - PAD);
    const rightX = Math.min(w - EDGE, colRight + PAD);

    const ys = nodes.map((el) => el.getBoundingClientRect().top + window.scrollY);
    const last = nodes[nodes.length - 1].getBoundingClientRect();
    ys.push(last.bottom + window.scrollY);

    startY = ys[0];
    endY = ys[ys.length - 1];

    const pts = [];
    ys.forEach((y, i) => {
      if (i % 2 === 0) { pts.push([leftX, y], [rightX, y]); }
      else { pts.push([rightX, y], [leftX, y]); }
    });

    const d = pts
      .map((p, i) => (i === 0 ? "M" : "L") + " " + p[0].toFixed(1) + " " + p[1].toFixed(1))
      .join(" ");
    path.setAttribute("d", d);
    svg.style.height = document.documentElement.scrollHeight + "px";
  }

  let raf = 0;
  function onScroll() {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const pen = window.scrollY + window.innerHeight * 0.5;
      const span = endY - startY;
      const p = span > 0 ? Math.min(1, Math.max(0, (pen - startY) / span)) : 0;
      path.style.strokeDashoffset = String(1 - p);
    });
  }

  build();
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", () => { build(); onScroll(); });
  window.addEventListener("load", () => { build(); onScroll(); });
  if (window.ResizeObserver) {
    const ro = new ResizeObserver(() => { build(); onScroll(); });
    ro.observe(document.body);
  }
}

/* --------------------------------- INIT --------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  fillServiceMenus();
  renderServicePage(); // no-op on home (no #service-root)
  setYear();

  initTheme();
  initNavbar();
  initHero();
  initTrustStrip();
  initServicesAccordion();
  initIndustries();
  initStars();
  initClientLogos();
  initContactForm();
  initFloatingCTA();

  initCountUps();
  initReveal();

  // section links bind after dynamic content is in place
  initSectionLinks();

  // zigzag builds last — after all dynamic sections are in the DOM
  initZigzag();

  refreshIcons();
});
