/* ==========================================================================
   Ryan Zhou — site logic
   Rendering from SITE (js/data.js), hash routing, and interactions.
   ========================================================================== */

(function () {
  "use strict";

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  var ACCENTS = {
    violet: "#a78bfa", cyan: "#67e8f9", mint: "#6ee7b7",
    amber: "#fcd34d", rose: "#fda4af", blue: "#93c5fd"
  };
  function accent(name) { return ACCENTS[name] || ACCENTS.cyan; }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------- tiny markdown renderer (headings, lists, bold, italic,
     links, inline code, blockquotes, hr) ---------- */
  function inlineMd(s) {
    return esc(s)
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, '$1<em>$2</em>');
  }

  function renderMarkdown(md) {
    var lines = md.replace(/\r/g, "").split("\n");
    var html = [], list = null, para = [];

    function flushPara() {
      if (para.length) { html.push("<p>" + inlineMd(para.join(" ")) + "</p>"); para = []; }
    }
    function flushList() {
      if (list) { html.push("<" + list.tag + ">" + list.items.join("") + "</" + list.tag + ">"); list = null; }
    }

    lines.forEach(function (raw) {
      var line = raw.trim();
      var m;
      if (!line) { flushPara(); flushList(); return; }
      if ((m = line.match(/^(#{1,4})\s+(.*)/))) {
        flushPara(); flushList();
        var lvl = Math.min(m[1].length + 1, 4); // # -> h2, ## -> h3
        html.push("<h" + lvl + ">" + inlineMd(m[2]) + "</h" + lvl + ">");
        return;
      }
      if (/^(---|\*\*\*)$/.test(line)) { flushPara(); flushList(); html.push("<hr />"); return; }
      if ((m = line.match(/^>\s?(.*)/))) {
        flushPara(); flushList();
        html.push("<blockquote>" + inlineMd(m[1]) + "</blockquote>");
        return;
      }
      if ((m = line.match(/^[-*]\s+(.*)/))) {
        flushPara();
        if (!list || list.tag !== "ul") { flushList(); list = { tag: "ul", items: [] }; }
        list.items.push("<li>" + inlineMd(m[1]) + "</li>");
        return;
      }
      if ((m = line.match(/^\d+[.)]\s+(.*)/))) {
        flushPara();
        if (!list || list.tag !== "ol") { flushList(); list = { tag: "ol", items: [] }; }
        list.items.push("<li>" + inlineMd(m[1]) + "</li>");
        return;
      }
      flushList();
      para.push(line);
    });
    flushPara(); flushList();
    return html.join("\n");
  }

  /* ================== RENDER: hero ================== */
  $("#hero-bio").textContent = SITE.profile.bio;

  /* ================== RENDER: bento ================== */
  var bento = $("#bento");
  bento.innerHTML =
    '<div class="card b-bio reveal">' +
      '<span class="b-label">The short version</span>' +
      "<p>Hey, I'm <strong>Ryan</strong> — a <strong>UC Berkeley &amp; University of Michigan</strong> graduate and an all-round PM builder. " +
      "I've spent 2+ years shipping product at <strong>Tiger Securities</strong>, <strong>TikTok</strong>, and a leading <strong>AI startup</strong> founded by Musical.ly's creator. " +
      "I care about craft, speed, and products that make people feel something. Also: I will travel unreasonable distances for good food.</p>" +
    "</div>" +
    '<div class="card b-edu reveal">' +
      '<span class="b-label">Education</span>' +
      '<p class="b-big">🎓 UC Berkeley<br />&amp; UMichigan</p>' +
      '<p class="b-sub">Computer Science + Business</p>' +
    "</div>" +
    '<div class="card b-now reveal">' +
      '<span class="b-label">Currently</span>' +
      '<div class="pulse-row"><span class="pulse"></span><p class="b-big" style="font-size:17px">Exploring AI × consumer products</p></div>' +
      '<p class="b-sub">Open to interesting conversations.</p>' +
    "</div>" +
    '<div class="card b-stats reveal">' +
      '<span class="b-label">In numbers</span>' +
      '<div class="stat-grid">' +
        '<div><div class="stat-num">2+</div><div class="stat-label">years in product</div></div>' +
        '<div><div class="stat-num">4</div><div class="stat-label">companies shipped at</div></div>' +
        '<div><div class="stat-num">1M+</div><div class="stat-label">creators &amp; users touched</div></div>' +
        '<div><div class="stat-num">' + SITE.posts.length + '</div><div class="stat-label">field notes written</div></div>' +
      "</div>" +
    "</div>" +
    '<div class="card b-food reveal">' +
      '<span class="b-label">Off duty</span>' +
      '<div class="food-emoji">🍜 🌮 🍣</div>' +
      '<p class="b-sub">Food explorist — hunting the next great bowl of noodles, from Cairo street food to Tokyo omakase.</p>' +
    "</div>";

  /* ================== RENDER: timeline ================== */
  $("#timeline").innerHTML = SITE.experience.map(function (x) {
    var color = accent(x.accent);
    return (
      '<div class="t-item reveal" style="--dot:' + color + '">' +
        '<span class="t-dot"></span>' +
        '<div class="card t-card">' +
          '<div class="t-top"><span class="t-company">' + esc(x.company) + '</span>' +
          '<span class="t-period">' + esc(x.period) + "</span></div>" +
          '<span class="t-role">' + esc(x.role) + "</span>" +
          '<p class="t-blurb">' + esc(x.blurb) + "</p>" +
          '<div class="t-tags">' + x.tags.map(function (t) { return '<span class="chip">' + esc(t) + "</span>"; }).join("") + "</div>" +
          (x.post ? '<a class="t-link" href="#/post/' + esc(x.post) + '">Read the story →</a>' : "") +
        "</div>" +
      "</div>"
    );
  }).join("");

  /* ================== RENDER: posts grid ================== */
  $("#posts-grid").innerHTML = SITE.posts.map(function (p, i) {
    var color = accent(p.accent);
    return (
      '<a class="card post-card reveal' + (i === 0 ? " featured" : "") + '" href="#/post/' + esc(p.id) + '" style="--pc:' + color + '">' +
        '<div class="pc-cover">' +
          (p.image ? '<img src="' + esc(p.image) + '" alt="" loading="lazy" onerror="this.remove()" />' : "") +
          '<span class="pc-emoji">' + p.emoji + "</span>" +
        "</div>" +
        '<div class="pc-body">' +
          '<div class="pc-tags">' + p.tags.slice(0, 3).map(function (t) { return '<span class="chip">' + esc(t) + "</span>"; }).join("") + "</div>" +
          '<h3 class="pc-title">' + esc(p.title) + "</h3>" +
          '<p class="pc-desc">' + esc(p.description) + "</p>" +
          '<div class="pc-meta"><span>' + esc(p.date) + '</span><span class="pc-read">' + esc(p.readTime) + " →</span></div>" +
        "</div>" +
      "</a>"
    );
  }).join("");

  /* ================== RENDER: marquee + contact ================== */
  var words = ["LET'S BUILD SOMETHING", "AI PRODUCTS", "CREATOR ECONOMY", "GOOD FOOD", "ZERO TO ONE"];
  var seq = words.map(function (w) { return "<span>" + w + '</span><span class="dot-sep">✦</span>'; }).join("");
  $("#marquee-track").innerHTML = seq + seq; // duplicate for seamless loop

  var s = SITE.profile.socials;
  $("#contact-actions").innerHTML =
    '<a class="btn btn-primary" href="mailto:' + SITE.profile.email + '">✉ &nbsp;' + SITE.profile.email + "</a>" +
    '<a class="btn btn-ghost" href="' + s.github + '" target="_blank" rel="noopener">GitHub</a>' +
    '<a class="btn btn-ghost" href="' + s.linkedin + '" target="_blank" rel="noopener">LinkedIn</a>' +
    '<a class="btn btn-ghost" href="' + s.twitter + '" target="_blank" rel="noopener">Twitter</a>';

  $("#footer-copy").textContent = "© " + new Date().getFullYear() + " " + SITE.profile.name + ". Built with care, no framework.";

  /* ================== typewriter ================== */
  (function typewriter() {
    var el = $("#typewriter");
    var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var roles = SITE.profile.roles;
    if (reduced) { el.textContent = roles[0]; return; }
    var ri = 0, ci = 0, deleting = false;
    function tick() {
      var word = roles[ri];
      ci += deleting ? -1 : 1;
      el.textContent = word.slice(0, ci);
      var delay = deleting ? 34 : 74;
      if (!deleting && ci === word.length) { delay = 1900; deleting = true; }
      else if (deleting && ci === 0) { deleting = false; ri = (ri + 1) % roles.length; delay = 350; }
      setTimeout(tick, delay);
    }
    tick();
  })();

  /* ================== card spotlight ================== */
  document.addEventListener("pointermove", function (e) {
    var t = e.target && e.target.closest ? e.target.closest(".card") : null;
    if (!t) return;
    var r = t.getBoundingClientRect();
    t.style.setProperty("--mx", (e.clientX - r.left) + "px");
    t.style.setProperty("--my", (e.clientY - r.top) + "px");
  });

  /* ================== scroll: nav bg + reveal + active link ================== */
  var nav = $("#nav");
  function onScroll() { nav.classList.toggle("scrolled", window.scrollY > 24); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

  function observeReveals() {
    $$(".reveal:not(.in)").forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i % 6, 4) * 70 + "ms";
      io.observe(el);
    });
  }
  observeReveals();

  var sectionIo = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      $$("#nav-links a").forEach(function (a) {
        a.classList.toggle("active", a.dataset.section === en.target.id);
      });
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  ["about", "experience", "writing", "contact"].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) sectionIo.observe(el);
  });

  /* ================== mobile menu ================== */
  var burger = $("#nav-burger"), links = $("#nav-links");
  burger.addEventListener("click", function () {
    var open = links.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(open));
  });
  links.addEventListener("click", function () {
    links.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  });

  /* ================== hash router (home <-> post reader) ================== */
  var homeView = $("#home-view"), postView = $("#post-view");

  function findPost(id) {
    for (var i = 0; i < SITE.posts.length; i++) if (SITE.posts[i].id === id) return i;
    return -1;
  }

  function showPost(id) {
    var i = findPost(id);
    if (i < 0) { location.hash = "#/"; return; }
    var p = SITE.posts[i];
    $("#post-tags").innerHTML = p.tags.map(function (t) { return '<span class="chip">' + esc(t) + "</span>"; }).join("");
    $("#post-title").textContent = p.title;
    $("#post-meta").textContent = p.date + "  ·  " + p.readTime;
    $("#post-body").innerHTML = renderMarkdown(p.content);
    var next = SITE.posts[(i + 1) % SITE.posts.length];
    var nextEl = $("#post-next");
    nextEl.href = "#/post/" + next.id;
    nextEl.innerHTML = "<small>Next note</small>" + esc(next.title) + " →";
    document.title = p.title + " — Ryan Zhou";
    homeView.hidden = true;
    postView.hidden = false;
    window.scrollTo(0, 0);
  }

  function showHome() {
    document.title = "Ryan Zhou — Product Builder";
    postView.hidden = true;
    homeView.hidden = false;
    observeReveals();
  }

  function route() {
    var h = location.hash || "";
    var m = h.match(/^#\/post\/([\w-]+)/);
    if (m) { showPost(m[1]); return; }
    var wasPost = !postView.hidden;
    showHome();
    // in-page anchors (#about etc.) — let the browser scroll natively;
    // but when returning from a post view the target may need a nudge.
    if (wasPost && /^#[a-z]+$/.test(h)) {
      var el = document.getElementById(h.slice(1));
      if (el) requestAnimationFrame(function () { el.scrollIntoView(); });
    }
  }

  window.addEventListener("hashchange", route);
  route();
})();
