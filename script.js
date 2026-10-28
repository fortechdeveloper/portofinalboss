/* =====================================================
   FASTDEV PORTFOLIO — SCRIPT.JS
   Author: Yudha Pramudya (FastDev)
   Fungsi: render project, filter, search, animasi, dsb.
   ===================================================== */

(function () {
  "use strict";

  /* ===================================================
     1. DATA PROJECT (58+ project)
     =================================================== */
  const PROJECTS = [
    {
      title: "Web2APK Builder",
      desc: "Tools online untuk mengubah website URL jadi file APK siap install di Android.",
      url: "https://web2apk.fastdev.my.id",
      urlLabel: "web2apk.fastdev.my.id",
      category: "tools",
      icon: "ico-wrench",
      tags: ["JavaScript", "WebView", "APK"],
    },
    {
      title: "Gmail Cuan",
      desc: "Platform digital untuk monetisasi akun Gmail dengan sistem otomatis.",
      url: "https://gmail.cuan.4dev.web.id",
      urlLabel: "gmail.cuan.4dev.web.id",
      category: "web",
      icon: "ico-globe",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Smart Home Controller",
      desc: "Dashboard IoT untuk mengontrol lampu, kipas, dan perangkat rumah via ESP32.",
      url: "#",
      urlLabel: "Project lokal",
      category: "iot",
      icon: "ico-chip",
      tags: ["ESP32", "MQTT", "C++"],
    },
    {
      title: "Weather Station Bantul",
      desc: "Stasiun cuaca mini pakai DHT22 + BMP280, data realtime ke dashboard web.",
      url: "#",
      urlLabel: "Project lokal",
      category: "iot",
      icon: "ico-sensor",
      tags: ["Arduino", "DHT22", "BMP280"],
    },
    {
      title: "FastDev Portfolio v1",
      desc: "Website portofolio pribadi versi pertama yang jadi titik awal belajar frontend.",
      url: "#",
      urlLabel: "Project lokal",
      category: "web",
      icon: "ico-globe",
      tags: ["HTML", "CSS", "JS"],
    },
    {
      title: "Penyiram Tanaman Otomatis",
      desc: "Sistem penyiram tanaman berbasis sensor kelembapan tanah dan pompa otomatis.",
      url: "#",
      urlLabel: "Project lokal",
      category: "iot",
      icon: "ico-sensor",
      tags: ["Arduino", "Sensor Tanah", "Relay"],
    },
    {
      title: "QR Generator Online",
      desc: "Generator QR code kilat untuk teks, URL, nomor WA, dan email.",
      url: "#",
      urlLabel: "Project lokal",
      category: "tools",
      icon: "ico-wrench",
      tags: ["JavaScript", "Canvas"],
    },
    {
      title: "URL Shortener FastDev",
      desc: "Layanan pemendek URL dengan custom slug dan statistik klik.",
      url: "#",
      urlLabel: "Project lokal",
      category: "tools",
      icon: "ico-wrench",
      tags: ["JavaScript", "LocalStorage"],
    },
    {
      title: "Cek Pulsa Otomatis",
      desc: "Tool cek sisa pulsa & kuota operator Indonesia dengan UI simpel.",
      url: "#",
      urlLabel: "Project lokal",
      category: "tools",
      icon: "ico-wrench",
      tags: ["JavaScript", "Fetch API"],
    },
    {
      title: "FastDev Blog",
      desc: "Blog statis untuk catatan belajar coding, tips, dan tutorial singkat.",
      url: "#",
      urlLabel: "Project lokal",
      category: "web",
      icon: "ico-globe",
      tags: ["HTML", "CSS", "Markdown"],
    },
    {
      title: "Dlingo Village Info",
      desc: "Portal informasi sederhana tentang Desa Dlingo, Bantul — profil dan agenda.",
      url: "#",
      urlLabel: "Project lokal",
      category: "web",
      icon: "ico-globe",
      tags: ["HTML", "CSS", "JS"],
    },
    {
      title: "Kuis Matematika",
      desc: "Game kuis matematika interaktif dengan timer dan skor otomatis.",
      url: "#",
      urlLabel: "Project lokal",
      category: "game",
      icon: "ico-rocket",
      tags: ["JavaScript", "DOM"],
    },
    {
      title: "Todo List App",
      desc: "Aplikasi catatan tugas harian dengan prioritas, deadline, dan penyimpanan lokal.",
      url: "#",
      urlLabel: "Project lokal",
      category: "web",
      icon: "ico-globe",
      tags: ["JavaScript", "LocalStorage"],
    },
    {
      title: "Kalkulator Ilmiah",
      desc: "Kalkulator dengan fungsi trigonometri, logaritma, dan operasi lanjutan.",
      url: "#",
      urlLabel: "Project lokal",
      category: "tools",
      icon: "ico-wrench",
      tags: ["JavaScript", "Math"],
    },
    {
      title: "Text to Speech Tool",
      desc: "Konversi teks apapun jadi suara pakai Web Speech API, tanpa server.",
      url: "#",
      urlLabel: "Project lokal",
      category: "tools",
      icon: "ico-wrench",
      tags: ["Web Speech API"],
    },
    {
      title: "Image Compressor",
      desc: "Kompres ukuran gambar langsung di browser pakai Canvas API.",
      url: "#",
      urlLabel: "Project lokal",
      category: "tools",
      icon: "ico-wrench",
      tags: ["Canvas API", "JS"],
    },
    {
      title: "Jogja Food Map",
      desc: "Peta kuliner khas Yogyakarta dengan filter kategori dan rating.",
      url: "#",
      urlLabel: "Project lokal",
      category: "web",
      icon: "ico-globe",
      tags: ["HTML", "CSS", "Leaflet"],
    },
    {
      title: "Cek Kuota Provider",
      desc: "Tool cek kuota internet semua provider Indonesia dari satu halaman.",
      url: "#",
      urlLabel: "Project lokal",
      category: "tools",
      icon: "ico-wrench",
      tags: ["JavaScript", "Fetch API"],
    },
    {
      title: "WA Auto Reply",
      desc: "Simulasi balasan otomatis WhatsApp dengan aturan kata kunci.",
      url: "#",
      urlLabel: "Project lokal",
      category: "tools",
      icon: "ico-wrench",
      tags: ["JavaScript", "Regex"],
    },
    {
      title: "Sistem Absensi IoT",
      desc: "Absensi siswa pakai RFID + ESP32, data terkirim ke Google Sheets.",
      url: "#",
      urlLabel: "Project lokal",
      category: "iot",
      icon: "ico-chip",
      tags: ["ESP32", "RFID", "Google Sheets"],
    },
    {
      title: "Smart Door Lock",
      desc: "Kunci pintu otomatis dengan RFID + keypad, log akses ke web dashboard.",
      url: "#",
      urlLabel: "Project lokal",
      category: "iot",
      icon: "ico-chip",
      tags: ["Arduino", "RFID", "Keypad"],
    },
    {
      title: "Alarm Getaran",
      desc: "Alarm pendeteksi getaran pakai SW-420 + buzzer untuk keamanan barang.",
      url: "#",
      urlLabel: "Project lokal",
      category: "iot",
      icon: "ico-sensor",
      tags: ["Arduino", "SW-420"],
    },
    {
      title: "Sensor Kualitas Udara",
      desc: "Monitor PM2.5 dan CO2 pakai MQ-135, tampilan di LCD + web.",
      url: "#",
      urlLabel: "Project lokal",
      category: "iot",
      icon: "ico-sensor",
      tags: ["ESP8266", "MQ-135"],
    },
    {
      title: "Dashboard IoT",
      desc: "Dashboard universal untuk menampilkan data dari beberapa perangkat IoT.",
      url: "#",
      urlLabel: "Project lokal",
      category: "web",
      icon: "ico-globe",
      tags: ["HTML", "JS", "MQTT"],
    },
    {
      title: "Blynk Clone Mini",
      desc: "Alternatif mini Blynk untuk kontrol device via web, protokol MQTT.",
      url: "#",
      urlLabel: "Project lokal",
      category: "web",
      icon: "ico-globe",
      tags: ["JS", "MQTT", "WebSocket"],
    },
    {
      title: "Color Palette Generator",
      desc: "Generator palet warna untuk desain, dengan export CSS variables.",
      url: "#",
      urlLabel: "Project lokal",
      category: "tools",
      icon: "ico-wrench",
      tags: ["JavaScript", "Color"],
    },
    {
      title: "Password Generator",
      desc: "Generator password kuat dengan opsi panjang, simbol, dan angka.",
      url: "#",
      urlLabel: "Project lokal",
      category: "tools",
      icon: "ico-wrench",
      tags: ["JavaScript", "Crypto"],
    },
    {
      title: "Markdown Editor",
      desc: "Editor markdown realtime dengan preview dan export HTML.",
      url: "#",
      urlLabel: "Project lokal",
      category: "tools",
      icon: "ico-wrench",
      tags: ["JavaScript", "Markdown"],
    },
    {
      title: "Notes App",
      desc: "Aplikasi catatan ringan dengan pencarian dan penyimpanan lokal.",
      url: "#",
      urlLabel: "Project lokal",
      category: "web",
      icon: "ico-globe",
      tags: ["JavaScript", "LocalStorage"],
    },
    {
      title: "Habit Tracker",
      desc: "Tracker kebiasaan harian dengan grafik streak mingguan.",
      url: "#",
      urlLabel: "Project lokal",
      category: "web",
      icon: "ico-globe",
      tags: ["JavaScript", "Chart"],
    },
    {
      title: "Pomodoro Timer",
      desc: "Timer fokus 25 menit + break 5 menit, dengan notifikasi suara.",
      url: "#",
      urlLabel: "Project lokal",
      category: "tools",
      icon: "ico-wrench",
      tags: ["JavaScript", "Audio API"],
    },
    {
      title: "Screenshot Tool Web",
      desc: "Ambil screenshot area layar browser pakai Screen Capture API.",
      url: "#",
      urlLabel: "Project lokal",
      category: "tools",
      icon: "ico-wrench",
      tags: ["Screen Capture API"],
    },
    {
      title: "Instagram Downloader",
      desc: "Tool download media IG publik (hanya untuk keperluan pribadi).",
      url: "#",
      urlLabel: "Project lokal",
      category: "tools",
      icon: "ico-wrench",
      tags: ["JavaScript", "Fetch API"],
    },
    {
      title: "YouTube Playlist Info",
      desc: "Ambil info playlist YouTube: durasi total, jumlah video, dsb.",
      url: "#",
      urlLabel: "Project lokal",
      category: "tools",
      icon: "ico-wrench",
      tags: ["JavaScript", "YouTube API"],
    },
    {
      title: "Random Quote Generator",
      desc: "Generator kutipan motivasi acak dengan tombol share ke sosmed.",
      url: "#",
      urlLabel: "Project lokal",
      category: "web",
      icon: "ico-globe",
      tags: ["JavaScript", "Fetch API"],
    },
    {
      title: "Game Snake",
      desc: "Remake game snake klasik dengan kontrol keyboard dan skor tertinggi.",
      url: "#",
      urlLabel: "Project lokal",
      category: "game",
      icon: "ico-rocket",
      tags: ["Canvas API", "JS"],
    },
    {
      title: "Game Tetris",
      desc: "Tetris browser sederhana dengan rotasi blok dan level bertingkat.",
      url: "#",
      urlLabel: "Project lokal",
      category: "game",
      icon: "ico-rocket",
      tags: ["Canvas API", "JS"],
    },
    {
      title: "Game Tic Tac Toe",
      desc: "Tic Tac Toe vs AI dengan minimax, plus mode 2 pemain.",
      url: "#",
      urlLabel: "Project lokal",
      category: "game",
      icon: "ico-rocket",
      tags: ["JavaScript", "Minimax"],
    },
    {
      title: "Rock Paper Scissors",
      desc: "Game batu-gunting-kertas dengan animasi interaktif.",
      url: "#",
      urlLabel: "Project lokal",
      category: "game",
      icon: "ico-rocket",
      tags: ["JavaScript", "CSS Anim"],
    },
    {
      title: "Memory Card Game",
      desc: "Game mengingat pasangan kartu dengan timer dan skor.",
      url: "#",
      urlLabel: "Project lokal",
      category: "game",
      icon: "ico-rocket",
      tags: ["JavaScript", "CSS"],
    },
    {
      title: "Sudoku Solver",
      desc: "Solver sudoku dengan algoritma backtracking, input via grid.",
      url: "#",
      urlLabel: "Project lokal",
      category: "tools",
      icon: "ico-wrench",
      tags: ["JavaScript", "Backtracking"],
    },
    {
      title: "BMI Calculator",
      desc: "Kalkulator BMI dengan kategori status dan rekomendasi singkat.",
      url: "#",
      urlLabel: "Project lokal",
      category: "tools",
      icon: "ico-wrench",
      tags: ["JavaScript", "Form"],
    },
    {
      title: "Unit Converter",
      desc: "Konverter satuan panjang, berat, suhu, dan waktu dalam satu halaman.",
      url: "#",
      urlLabel: "Project lokal",
      category: "tools",
      icon: "ico-wrench",
      tags: ["JavaScript", "Form"],
    },
    {
      title: "Currency Converter",
      desc: "Konverter mata uang realtime dengan data dari API gratis.",
      url: "#",
      urlLabel: "Project lokal",
      category: "tools",
      icon: "ico-wrench",
      tags: ["JavaScript", "REST API"],
    },
    {
      title: "Lo-fi Music Player",
      desc: "Player lo-fi sederhana dengan playlist lokal dan visualizer.",
      url: "#",
      urlLabel: "Project lokal",
      category: "web",
      icon: "ico-globe",
      tags: ["Audio API", "Canvas"],
    },
    {
      title: "Radio Online Jogja",
      desc: "Streaming beberapa radio lokal Yogyakarta dalam satu player.",
      url: "#",
      urlLabel: "Project lokal",
      category: "web",
      icon: "ico-globe",
      tags: ["HTML", "Audio"],
    },
    {
      title: "Podcast Player",
      desc: "Player podcast mini dengan kontrol kecepatan dan bookmark.",
      url: "#",
      urlLabel: "Project lokal",
      category: "web",
      icon: "ico-globe",
      tags: ["Audio API", "JS"],
    },
    {
      title: "Landing Page UMKM Bantul",
      desc: "Landing page produk UMKM lokal Bantul, fokus konversi WhatsApp.",
      url: "#",
      urlLabel: "Project lokal",
      category: "landing",
      icon: "ico-briefcase",
      tags: ["HTML", "CSS"],
    },
    {
      title: "Portfolio Fotografer",
      desc: "Template portofolio untuk fotografer dengan galeri masonry.",
      url: "#",
      urlLabel: "Project lokal",
      category: "landing",
      icon: "ico-briefcase",
      tags: ["HTML", "CSS", "JS"],
    },
    {
      title: "Undangan Digital",
      desc: "Undangan pernikahan digital interaktif dengan RSVP dan countdown.",
      url: "#",
      urlLabel: "Project lokal",
      category: "landing",
      icon: "ico-briefcase",
      tags: ["HTML", "CSS", "JS"],
    },
    {
      title: "Sistem Kasir Sederhana",
      desc: "Aplikasi kasir mini untuk warung dengan struk dan riwayat transaksi.",
      url: "#",
      urlLabel: "Project lokal",
      category: "web",
      icon: "ico-globe",
      tags: ["JavaScript", "LocalStorage"],
    },
    {
      title: "Invoice Generator",
      desc: "Generator invoice PDF untuk freelancer dengan template rapi.",
      url: "#",
      urlLabel: "Project lokal",
      category: "tools",
      icon: "ico-wrench",
      tags: ["JavaScript", "PDF"],
    },
    {
      title: "Kurir Tracker",
      desc: "Tracker paket sederhana untuk beberapa ekspedisi Indonesia.",
      url: "#",
      urlLabel: "Project lokal",
      category: "web",
      icon: "ico-globe",
      tags: ["JavaScript", "Fetch API"],
    },
    {
      title: "Chat Bot Rule Based",
      desc: "Chatbot sederhana dengan aturan kata kunci untuk FAQ.",
      url: "#",
      urlLabel: "Project lokal",
      category: "web",
      icon: "ico-globe",
      tags: ["JavaScript", "Regex"],
    },
    {
      title: "AI Image Prompt",
      desc: "Generator prompt untuk AI image generator, dengan preset gaya.",
      url: "#",
      urlLabel: "Project lokal",
      category: "tools",
      icon: "ico-wrench",
      tags: ["JavaScript", "Form"],
    },
    {
      title: "Bookmark Manager",
      desc: "Manajer bookmark dengan tag, pencarian, dan import/export JSON.",
      url: "#",
      urlLabel: "Project lokal",
      category: "tools",
      icon: "ico-wrench",
      tags: ["JavaScript", "LocalStorage"],
    },
    {
      title: "FastDev Admin Panel",
      desc: "Admin panel mini untuk mengelola project dan data user.",
      url: "#",
      urlLabel: "Project lokal",
      category: "web",
      icon: "ico-globe",
      tags: ["HTML", "CSS", "JS"],
    },
    {
      title: "Server Monitor",
      desc: "Monitor status uptime beberapa server/website dengan cek berkala.",
      url: "#",
      urlLabel: "Project lokal",
      category: "tools",
      icon: "ico-wrench",
      tags: ["JavaScript", "Fetch API"],
    },
    {
      title: "API Tester Web",
      desc: "Mini Postman di browser: kirim request GET/POST, lihat response JSON.",
      url: "#",
      urlLabel: "Project lokal",
      category: "tools",
      icon: "ico-wrench",
      tags: ["Fetch API", "JavaScript"],
    },
    {
      title: "IoT Fire Alarm",
      desc: "Alarm kebakaran dini pakai flame sensor + buzzer + notif Telegram.",
      url: "#",
      urlLabel: "Project lokal",
      category: "iot",
      icon: "ico-sensor",
      tags: ["ESP32", "Flame Sensor", "Telegram"],
    },
    {
      title: "Parkir Otomatis",
      desc: "Sistem parkir otomatis pakai sensor ultrasonik + palang otomatis.",
      url: "#",
      urlLabel: "Project lokal",
      category: "iot",
      icon: "ico-chip",
      tags: ["Arduino", "HC-SR04", "Servo"],
    },
  ];

  /* ===================================================
     2. ELEMEN
     =================================================== */
  const grid = document.getElementById("projectsGrid");
  const empty = document.getElementById("projectsEmpty");
  const filterGroup = document.getElementById("filterGroup");
  const searchInput = document.getElementById("projectSearch");

  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const navLinkEls = document.querySelectorAll(".nav-link");
  const toTop = document.getElementById("toTop");
  const yearNow = document.getElementById("yearNow");
  const roleDynamic = document.getElementById("roleDynamic");
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  const state = {
    filter: "all",
    query: "",
  };

  /* ===================================================
     3. RENDER PROJECTS
     =================================================== */
  function normalizeText(str) {
    return (str || "").toString().toLowerCase().trim();
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function matchesFilter(project) {
    if (state.filter === "all") return true;
    return project.category === state.filter;
  }

  function matchesQuery(project) {
    if (!state.query) return true;
    const q = state.query;
    const haystack = [
      project.title,
      project.desc,
      project.urlLabel,
      ...(project.tags || []),
      project.category,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  }

  function renderProjects() {
    if (!grid) return;

    const visible = PROJECTS.filter(
      (p) => matchesFilter(p) && matchesQuery(p)
    );

    if (visible.length === 0) {
      grid.innerHTML = "";
      if (empty) empty.hidden = false;
      return;
    }

    if (empty) empty.hidden = true;

    grid.innerHTML = visible
      .map((p, i) => {
        const iconId = p.icon || "ico-code";
        const tagHtml = (p.tags || [])
          .map((t) => `<span class="project-tag">${escapeHtml(t)}</span>`)
          .join("");

        const categoryLabel =
          p.category === "web"
            ? "Web App"
            : p.category === "iot"
            ? "IoT"
            : p.category === "tools"
            ? "Tools"
            : p.category === "game"
            ? "Game"
            : p.category === "landing"
            ? "Landing"
            : "Project";

        const isExternal = p.url && p.url !== "#";
        const linkTag = isExternal
          ? `<a href="${escapeHtml(p.url)}" target="_blank" rel="noopener" class="project-link">
               <svg><use href="#ico-external"></use></svg>
               <span>${escapeHtml(p.urlLabel)}</span>
             </a>`
          : `<span class="project-link" style="cursor:default;opacity:.7;">
               <svg><use href="#ico-check"></use></svg>
               <span>${escapeHtml(p.urlLabel || "Lokal")}</span>
             </span>`;

        return `
          <article class="project-card" style="animation-delay:${i * 22}ms;">
            <div class="project-head">
              <div class="project-icon">
                <svg><use href="#${iconId}"></use></svg>
              </div>
              <span class="project-badge">${categoryLabel}</span>
            </div>
            <h3 class="project-title">${escapeHtml(p.title)}</h3>
            <p class="project-desc">${escapeHtml(p.desc)}</p>
            <div class="project-tags">${tagHtml}</div>
            ${linkTag}
          </article>
        `;
      })
      .join("");
  }

  /* ===================================================
     4. FILTER & SEARCH
     =================================================== */
  function initFilters() {
    if (!filterGroup) return;

    filterGroup.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;

      filterGroup
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");

      state.filter = btn.dataset.filter || "all";
      renderProjects();
    });
  }

  function initSearch() {
    if (!searchInput) return;

    let timer = null;
    searchInput.addEventListener("input", (e) => {
      clearTimeout(timer);
      const val = e.target.value;
      timer = setTimeout(() => {
        state.query = normalizeText(val);
        renderProjects();
      }, 140);
    });
  }

  /* ===================================================
     5. NAVBAR & MOBILE MENU
     =================================================== */
  function initNavbar() {
    if (!navbar) return;

    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      navbar.classList.toggle("is-scrolled", y > 40);
      toTop && toTop.classList.toggle("is-visible", y > 500);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function initMobileMenu() {
    if (!navToggle || !navLinks) return;

    const toggleMenu = (open) => {
      const isOpen = typeof open === "boolean" ? open : !navLinks.classList.contains("is-open");
      navLinks.classList.toggle("is-open", isOpen);
      navToggle.classList.toggle("is-open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
    };

    navToggle.addEventListener("click", () => toggleMenu());

    navLinks.addEventListener("click", (e) => {
      if (e.target.closest(".nav-link")) toggleMenu(false);
    });

    document.addEventListener("click", (e) => {
      if (!navLinks.classList.contains("is-open")) return;
      if (navLinks.contains(e.target) || navToggle.contains(e.target)) return;
      toggleMenu(false);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navLinks.classList.contains("is-open")) {
        toggleMenu(false);
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024 && navLinks.classList.contains("is-open")) {
        toggleMenu(false);
      }
    });
  }

  /* ===================================================
     6. ACTIVE NAV ON SCROLL
     =================================================== */
  function initActiveNav() {
    const sections = ["hero", "about", "skills", "projects", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const setActive = (id) => {
      navLinkEls.forEach((a) => {
        const href = a.getAttribute("href") || "";
        a.classList.toggle("is-active", href === "#" + id);
      });
    };

    const onScroll = () => {
      const scrollPos = window.scrollY + 140;
      let current = "hero";

      for (const sec of sections) {
        if (sec.offsetTop <= scrollPos) current = sec.id;
      }

      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ===================================================
     7. REVEAL ANIMATION (IntersectionObserver)
     =================================================== */
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("in-view"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    items.forEach((el) => io.observe(el));
  }

  /* ===================================================
     8. COUNTER ANIMATION (stats)
     =================================================== */
  function initCounters() {
    const statCards = document.querySelectorAll(".stat-clay[data-count]");
    if (!statCards.length) return;

    const animateCount = (el) => {
      const target = parseInt(el.dataset.count, 10) || 0;
      const counter = el.querySelector(".counter");
      if (!counter) return;

      const duration = 1500;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(target * eased);
        counter.textContent = value.toString();

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          counter.textContent = target.toString();
        }
      };

      requestAnimationFrame(tick);
    };

    if (!("IntersectionObserver" in window)) {
      statCards.forEach(animateCount);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    statCards.forEach((el) => io.observe(el));
  }

  /* ===================================================
     9. TYPE ANIMATION (hero role)
     =================================================== */
  function initTypeAnimation() {
    if (!roleDynamic) return;

    const roles = [
      "Web Apps",
      "IoT Systems",
      "C++ Coder",
      "Arduino Sketch",
      "Frontend UI",
      "Tools Builder",
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const typeSpeed = 90;
    const deleteSpeed = 50;
    const holdTime = 1400;
    const betweenTime = 400;

    function tick() {
      const current = roles[roleIndex];

      if (!deleting) {
        charIndex++;
        roleDynamic.textContent = current.slice(0, charIndex);

        if (charIndex === current.length) {
          deleting = true;
          setTimeout(tick, holdTime);
          return;
        }
        setTimeout(tick, typeSpeed);
      } else {
        charIndex--;
        roleDynamic.textContent = current.slice(0, charIndex);

        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          setTimeout(tick, betweenTime);
          return;
        }
        setTimeout(tick, deleteSpeed);
      }
    }

    setTimeout(tick, 600);
  }

  /* ===================================================
     10. CURSOR GLOW (desktop only)
     =================================================== */
  function initCursorGlow() {
    const glow = document.querySelector(".cursor-glow");
    if (!glow) return;

    if (window.matchMedia("(hover: none)").matches) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let raf = null;

    const loop = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      glow.style.transform = `translate(${currentX - 190}px, ${currentY - 190}px)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener(
      "mousemove",
      (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
        document.body.classList.add("has-pointer");
        if (!raf) loop();
      },
      { passive: true }
    );

    document.addEventListener("mouseleave", () => {
      document.body.classList.remove("has-pointer");
    });
  }

  /* ===================================================
     11. COPY TO CLIPBOARD
     =================================================== */
  function initCopyButtons() {
    const rows = document.querySelectorAll(".contact-row[data-copy]");
    rows.forEach((row) => {
      row.addEventListener("click", async () => {
        const text = row.dataset.copy;
        if (!text) return;

        try {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(text);
          } else {
            const ta = document.createElement("textarea");
            ta.value = text;
            ta.style.position = "fixed";
            ta.style.opacity = "0";
            document.body.appendChild(ta);
            ta.select();
            document.execCommand("copy");
            document.body.removeChild(ta);
          }

          const btn = row.querySelector(".copy-btn");
          if (btn) {
            btn.classList.add("is-copied");
            setTimeout(() => btn.classList.remove("is-copied"), 1600);
          }
        } catch (err) {
          console.warn("Copy gagal:", err);
        }
      });
    });
  }

  /* ===================================================
     12. CONTACT FORM
     =================================================== */
  function initContactForm() {
    if (!contactForm || !formStatus) return;

    const inputs = contactForm.querySelectorAll(".form-input");

    const setStatus = (msg, type) => {
      formStatus.textContent = msg;
      formStatus.classList.remove("is-success", "is-error");
      if (type) formStatus.classList.add(type);
    };

    const validateEmail = (val) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());

    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      let valid = true;

      inputs.forEach((input) => {
        input.classList.remove("is-error");

        if (!input.value.trim()) {
          input.classList.add("is-error");
          valid = false;
          return;
        }

        if (input.type === "email" && !validateEmail(input.value)) {
          input.classList.add("is-error");
          valid = false;
        }
      });

      if (!valid) {
        setStatus("Isi semua kolom dengan benar ya.", "is-error");
        return;
      }

      const nama = document.getElementById("inputName")?.value.trim() || "";
      setStatus(`Makasih ${nama}, pesan lu udah gua terima. Bakal gua balas secepatnya.`, "is-success");

      contactForm.reset();
      inputs.forEach((i) => i.classList.remove("is-error"));
    });

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        input.classList.remove("is-error");
      });
    });
  }

  /* ===================================================
     13. TO TOP
     =================================================== */
  function initToTop() {
    if (!toTop) return;

    toTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ===================================================
     14. SMOOTH ANCHOR
     =================================================== */
  function initSmoothAnchor() {
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        const href = a.getAttribute("href");
        if (!href || href === "#") return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();
        const offset = 80;
        const top =
          target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      });
    });
  }

  /* ===================================================
     15. PARALLAX BLOBS
     =================================================== */
  function initParallaxBlobs() {
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const blobs = document.querySelectorAll(".blob");
    if (!blobs.length) return;

    let ticking = false;

    window.addEventListener(
      "mousemove",
      (e) => {
        if (ticking) return;
        ticking = true;

        requestAnimationFrame(() => {
          const cx = window.innerWidth / 2;
          const cy = window.innerHeight / 2;
          const dx = (e.clientX - cx) / cx;
          const dy = (e.clientY - cy) / cy;

          blobs.forEach((blob, i) => {
            const strength = (i + 1) * 12;
            blob.style.marginLeft = `${dx * strength}px`;
            blob.style.marginTop = `${dy * strength}px`;
          });

          ticking = false;
        });
      },
      { passive: true }
    );
  }

  /* ===================================================
     16. YEAR
     =================================================== */
  function initYear() {
    if (yearNow) {
      yearNow.textContent = new Date().getFullYear().toString();
    }
  }

  /* ===================================================
     17. INIT
     =================================================== */
  function init() {
    renderProjects();
    initFilters();
    initSearch();
    initNavbar();
    initMobileMenu();
    initActiveNav();
    initReveal();
    initCounters();
    initTypeAnimation();
    initCursorGlow();
    initCopyButtons();
    initContactForm();
    initToTop();
    initSmoothAnchor();
    initParallaxBlobs();
    initYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();