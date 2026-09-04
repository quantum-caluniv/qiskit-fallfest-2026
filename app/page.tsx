"use client";

import { useEffect, useState, type CSSProperties } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDay, setActiveDay] = useState<1 | 2>(1);
  const [quantumLogoRotation, setQuantumLogoRotation] = useState(0);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("qiskit-theme");
    setDarkMode(savedTheme === "dark");
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const theme = darkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("qiskit-theme", theme);
  }, [darkMode, mounted]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => setDarkMode((previous) => !previous);

  const navItems: [string, string][] = [
    ["About", "#about"],
    ["Experience", "#experience"],
    ["Speakers", "#speakers"],
    ["Partners", "#partners"],
    ["Schedule", "#schedule"],
    ["FAQ", "#faq"],
    ["Contact", "#contact"],
  ];

  /* =========================================================
    CONTACTS
  ========================================================= */

  const contacts = [
    { name: "Subhajit Pal", email: "subhajitp00@gmail.com", linkedin: "https://www.linkedin.com/", github: "https://github.com/", image: "/qiskit-fallfest-2026/organisers/arkadeep.jpg" },
    { name: "Pritam Mitra",  email: "pritammitra2k12@gmail.com", linkedin: "https://www.linkedin.com/", github: "https://github.com/", image: "/qiskit-fallfest-2026/organisers/suchetana.jpg" },
    { name: "Tarab Momin",  email: "tarabmomin51@gmail.com", linkedin: "https://www.linkedin.com/", github: "https://github.com/", image: "/qiskit-fallfest-2026/organisers/soham.jpg" },
    { name: "Arkadeep Pramanik",  email: "sunarkadeep@gmail.com", linkedin: "https://www.linkedin.com/", github: "https://github.com/", image: "/qiskit-fallfest-2026/organisers/saptak.jpg" },
    { name: "Soham Sarkar", number: "+91 90000 10005", email: "sohamsarkar.off@gmail.com", linkedin: "https://www.linkedin.com/", github: "https://github.com/", image: "/qiskit-fallfest-2026/organisers/anish.jpg" },
    { name: "Suchetana Das", email: "suchetana.das1140@gmail.com", linkedin: "https://www.linkedin.com/", github: "https://github.com/", image: "/qiskit-fallfest-2026/organisers/subhajit.jpg" },
    { name: "Saptak Mukhopadhyay", number: "+91 90000 10007", email: "mukhopadhyaysaptak@gmail.com", linkedin: "https://www.linkedin.com/", github: "https://github.com/", image: "/qiskit-fallfest-2026/organisers/tarab.jpg" },
    { name: "Anish Mandal", number: "+91 90000 10008", email: "anish07072007@gmail.com", linkedin: "https://www.linkedin.com/", github: "https://github.com/", image: "/qiskit-fallfest-2026/organisers/pritam.jpg" },
  ];

  /* =========================================================
    SPEAKERS — replace placeholders with real details/photos
  ========================================================= */

  const speakers = [
    { name: "Prof. (Dr.) Susmita Sur-Kolay", designation: "Distinguished Quantum Lecture — Quantum Computing, Quantum Information and the Architecture of Tomorrow", organization: "Indian Statistical Institute", image: "/qiskit-fallfest-2026/speakers/speaker1.jpg" },
    { name: "Prof. (Dr.) Amlan Chakrabarti", designation: "Distinguished Quantum Lecture — Quantum Algorithms, Quantum EDA and the Journey Towards Real Quantum Systems", organization: "University of Calcutta", image: "/qiskit-fallfest-2026/speakers/speaker2.jpg" },
    { name: "Speaker Name 3", designation: "Designation / Position", organization: "Organization / Institution", image: "/qiskit-fallfest-2026/speakers/speaker3.jpg" },
  ];

  const specialGuests = [1, 2, 3];

  /* =========================================================
    PARTNERS & SPONSORS — swap sponsor-slot placeholders for
    real logos once confirmed
  ========================================================= */

  const sponsorTiers = ["Title Sponsor", "Community Partner", "Community Partner", "Supporting Partner"];

  /* =========================================================
    SCHEDULE — from Qiskit Fall Fest 2026 agenda
  ========================================================= */

  const daySchedules: {
    header: { label: string; date: string };
    rows: { time: string; title: string; speaker?: string; highlight?: boolean }[];
  }[] = [
    {
      header: { label: "Day 1", date: "8 October" },
      rows: [
        { time: "10:00–10:20", title: "Inauguration & Welcome", speaker: "University of Calcutta & Organising Team" },
        { time: "10:20–10:40", title: "Why Quantum? Why Now?" },
        { time: "10:40–11:00", title: "Qiskit Fall Fest 2026 Orientation" },
        { time: "11:00–12:15", title: "Distinguished Quantum Lecture: Quantum Computing, Quantum Information and the Architecture of Tomorrow", speaker: "Prof. (Dr.) Susmita Sur-Kolay" },
        { time: "12:15–12:30", title: "Interactive Q&A" },
        { time: "12:30–1:30", title: "Lunch & Quantum Networking" },
        { time: "1:30–2:00", title: "Qiskit 101 — From Qubit to Circuit" },
        { time: "2:00–3:15", title: "Hands-on Qiskit Lab" },
        { time: "3:15–3:30", title: "Refreshment Break" },
        { time: "3:30–4:10", title: "Qiskit Quantum Challenge", highlight: true },
        { time: "4:10–4:30", title: "Day I Reflection & Quantum Community Connect" },
      ],
    },
    {
      header: { label: "Day 2", date: "9 October" },
      rows: [
        { time: "10:00–10:15", title: "Quantum Recap & Day II Kick-Off" },
        { time: "10:15–11:30", title: "Distinguished Quantum Lecture: Quantum Algorithms, Quantum EDA and the Journey Towards Real Quantum Systems", speaker: "Prof. (Dr.) Amlan Chakrabarti" },
        { time: "11:30–11:50", title: "Expert Q&A — Ask the Quantum Expert" },
        { time: "11:50–12:15", title: "Quantum Research Spotlight" },
        { time: "12:15–1:15", title: "Lunch & Research Networking" },
        { time: "1:15–1:45", title: "Qiskit 201 — Beyond the Basics" },
        { time: "1:45–3:00", title: "Hands-on Quantum Computing Session" },
        { time: "3:00–3:15", title: "Refreshment Break" },
        { time: "3:15–4:00", title: "Quantum Innovation Challenge", highlight: true },
        { time: "4:00–4:20", title: "Student Showcase & Recognition" },
        { time: "4:20–4:30", title: "Closing Ceremony" },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--fg)] transition-colors duration-500">

      {/* =================================================
          NAVIGATION
      ================================================= */}

      <div className="nav-wrap">
        <div className={`nav-capsule ${scrolled ? "scrolled" : ""}`}>
          <a href="#home" className="nav-logo">
            Qiskit Fall Fest<span> 2026 </span>
            
          </a>

          <nav className="nav-links">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="nav-link">{label}</a>
            ))}
          </nav>

          <div className="nav-right">
            <button type="button" onClick={() => setMobileMenuOpen((open) => !open)} className="mobile-menu-button" aria-label="Toggle navigation">
              <span /><span /><span />
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? "☀" : "☾"}
            </button>

            <a href="#register" className="register-button"><span className="full">Register →</span></a>
          </div>

          <div className={`mobile-nav ${mobileMenuOpen ? "open" : ""}`}>
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMobileMenuOpen(false)}>{label}</a>
            ))}
            <a href="#register" className="register-button" onClick={() => setMobileMenuOpen(false)}>Register →</a>
          </div>
        </div>
      </div>

      {/* =================================================
          HERO
      ================================================= */}

      <section id="home" className="hero-section px-6 pb-14 md:px-10">
        <div className="relative mx-auto w-full max-w-7xl">

          <div className="hero-kicker-wrap">
            <img src="/qiskit-fallfest-2026/stickers/sticker10.png" alt="" className="hero-kicker-backdrop" />

            <div className="hero-kicker-row">
              <img src="/qiskit-fallfest-2026/cuimage.jpeg" alt="University of Calcutta" className="h-10 w-10" />
              <span className="hero-kicker-text">University of Calcutta × IBM Quantum</span>
              <img src="/qiskit-fallfest-2026/stickers/sticker7.jpg" alt="IBM" className="h-9 w-9" />
            </div>
            
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">

          {/* HERO TEXT */}

          <div>
            <h1 className="hero-title mt-8 text-[2.7rem] sm:text-[3.9rem] md:text-[5rem] lg:text-[5.8rem]">
              QISKIT
              <br />
              FALL FEST 
              
              <br />
              <span className="gradient-text">2026  </span>
              
            </h1>

            <p className="hero-desc mt-8 max-w-xl text-base leading-7 md:text-lg">
              Step into the world of quantum computing. Learn, build, experiment
              and connect with the next generation of quantum innovators.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#register" className="register-button px-7 py-3">Register Now →</a>
              <a href="#about" className="explore-link">Explore Event</a>
            </div>

            <div className="hero-tag-row mt-10">
              <span className="pill">Quantum Computing</span>
              <span className="pill">Qiskit</span>
              <span className="pill">Workshops</span>
            </div>
          </div>

          {/* HERO VISUAL */}

          <div className="hero-visual relative flex min-h-[480px] items-center justify-center lg:min-h-[560px]">
            <img src="/hummingbirds.png" alt="" className="hero-bird hero-bird-one" />
            <img src="/hummingbirds.png" alt="" className="hero-bird hero-bird-two" />

            

            <div className="hero-card">
              <p className="hero-card-state">|ψ⟩ = QISKIT FALL FEST 2026</p>

              <div className="hero-card-row">
                <span className="hero-card-caption">Date</span>
                <strong>8 &amp; 9 October 2026</strong>
              </div>

              <div className="hero-card-row">
                <span className="hero-card-caption">Venue</span>
                <strong>Rajabazar Science College, University of Calcutta</strong>
              </div>

              <a href="https://maps.app.goo.gl/jSnPgWX4DzzechHq8" target="_blank" rel="noopener noreferrer" className="map-button">
                ⌖ &nbsp; View venue on Google Maps →
              </a>
            </div>
          </div>

          </div>
        </div>
      </section>

      {/* =================================================
          UNIVERSITY OF CALCUTTA — IDENTITY
      ================================================= */}

      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="identity-section">
            <img src="/qiskit-fallfest-2026/stickers/sticker10.png" alt="" className="identity-backdrop" />
            <img src="/qiskit-fallfest-2026/stickers/sticker1.png" alt="" className="identity-sticker" />
            <p className="eyebrow">Presented by</p>
            <div className="identity-title">
              UNIVERSITY OF
              <br />
              CALCUTTA
            </div>

            <div className="identity-content">
              <div>
                <p className="eyebrow" style={{ color: "var(--ion-light)" }}>Quantum computing × academia</p>
                <h2 className="identity-heading">
                  Where curiosity
                  <br />
                  meets quantum.
                </h2>
              </div>

              <div className="identity-text">
                <p>
                  Qiskit Fall Fest 2026 brings the world of quantum computing
                  to the University of Calcutta, connecting students,
                  researchers and technology enthusiasts through learning,
                  experimentation and collaboration.
                </p>

                <div className="institution-pills">
                  <span>University of Calcutta</span>
                  <span>IBM</span>
                  <span>Qiskit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          ABOUT
      ================================================= */}

      <section id="about" className="about-section px-6 py-14 md:px-10">
        <img src="/qiskit-fallfest-2026/stickers/sticker2.png" alt="" className="about-float-sticker" aria-hidden="true" />
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow" style={{ color: "var(--ion-light)" }}>01 / About</p>

          <div className="mt-8 grid gap-12 lg:grid-cols-2">
            <h2 className="font-mono text-4xl leading-[0.95] tracking-[-0.05em] md:text-6xl">
              Quantum
              <br />
              computing
              <br />
              starts here.
            </h2>

            <div className="text-base leading-7 text-[var(--muted)] md:text-lg">
              <p>
                Qiskit Fall Fest is an opportunity to explore quantum
                computing through accessible learning, workshops and
                community interaction.
              </p>
              <p className="mt-5">
                Whether you are completely new to quantum computing or
                already experimenting with Qiskit, this event is designed
                to help you take your next step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          EXPERIENCE
      ================================================= */}

      <section id="experience" className="experience-section px-6 py-14 md:px-10">
        <img src="/qiskit-fallfest-2026/stickers/sticker11.png" alt="" className="experience-float experience-float-a" />
        <img src="/qiskit-fallfest-2026/stickers/sticker1.png" alt="" className="experience-float experience-float-b" />

        <div className="mx-auto max-w-7xl">
          <p className="eyebrow" style={{ color: "var(--ion-light)" }}>02 / Experience</p>

          <h2 className="mt-6 max-w-4xl font-mono text-4xl leading-tight tracking-[-0.05em] md:text-6xl">
            Learn. Build.  Connect.
            <br />
            
            <br />
           
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <ExperienceCard number="01" title="Learn" description="Understand the foundations of quantum computing through accessible talks and interactive sessions." sticker="/qiskit-fallfest-2026/stickers/sticker3.png" />
            <ExperienceCard number="02" title="Build" description="Get hands-on with Qiskit and experiment with quantum circuits and algorithms." sticker="/qiskit-fallfest-2026/stickers/sticker5.png" />
            <ExperienceCard number="03" title="Connect" description="Meet students, researchers and quantum enthusiasts who are building the future." sticker="/qiskit-fallfest-2026/stickers/sticker1.png" />
          </div>
        </div>
      </section>

      {/* =================================================
          SPEAKERS
      ================================================= */}

      <section id="speakers" className="speakers-section px-6 py-14 md:px-10">
        
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">03 / Speakers</p>

          <div className="mt-7 grid gap-10 lg:grid-cols-2 lg:items-end">
            <h2 className="font-mono text-4xl leading-[0.95] tracking-[-0.05em] md:text-6xl">
              Meet the
              <br />
              <span className="gradient-text">quantum minds.</span>
            </h2>

            <p className="max-w-xl text-base leading-7 text-[var(--muted)] md:text-lg">
              Learn from distinguished researchers, industry experts and
              quantum computing enthusiasts who are joining us at Qiskit
              Fall Fest 2026.
            </p>
          </div>

          <div className="speaker-grid-three mt-14">
            {speakers.map((speaker) => (
              <SpeakerCard key={speaker.name} {...speaker} />
            ))}
          </div>

          <div className="special-guests-heading">
            <div>
              <p className="eyebrow">Featured Guests</p>
              <h3>More quantum voices.</h3>
            </div>
            <p>Three dedicated slots for special guests joining Qiskit Fall Fest 2026.</p>
          </div>

          <div className="special-guests-grid">
            {specialGuests.map((_, index) => (
              <SpecialGuestSlot key={index} index={index + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          PARTNERS & SPONSORS
      ================================================= */}

      <section id="partners" className="px-6 py-14 md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow" style={{ color: "var(--ion-light)" }}>04 / Partners</p>

          <h2 className="mt-6 font-mono text-4xl tracking-[-0.05em] md:text-6xl">
            Backed by
            <br />
            the best.
          </h2>

          <div className="partners-lead mt-12">
            <div className="partner-lead-card partner-lead-card-cu">
              <img src="/qiskit-fallfest-2026/cuimage.jpeg" alt="University of Calcutta" />
              <div>
                <p className="partner-lead-label">Host institution</p>
                <p className="partner-lead-name">University of Calcutta</p>
              </div>
            </div>

            <div className="partner-lead-card partner-lead-card-ibm">
              <img src="/qiskit-fallfest-2026/stickers/sticker7.jpg" alt="IBM" />
              <div>
                <p className="partner-lead-label">Technology partner</p>
                <p className="partner-lead-name">IBM Quantum</p>
              </div>
            </div>
          </div>

          <p className="mt-14 text-xs uppercase tracking-[0.25em] text-[var(--muted)]">Sponsors — announced soon</p>

          <div className="sponsor-grid">
            {sponsorTiers.map((tier, index) => (
              <div key={`${tier}-${index}`} className="sponsor-slot">{tier}</div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          EVENT SNAPSHOT + SCHEDULE
      ================================================= */}

      <section id="schedule" className="schedule-section px-6 py-14 md:px-10">
        <img src="/qiskit-fallfest-2026/stickers/sticker4.png" alt="" className="schedule-float-sticker" aria-hidden="true" />
        <img src="/qiskit-fallfest-2026/stickers/sticker10.png" alt="" className="schedule-backdrop" />
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">05 / Schedule</p>

          <h2 className="mt-6 font-mono text-4xl tracking-[-0.05em] md:text-6xl">
            Event
            <br />
            schedule.
          </h2>

          <div className="snapshot-row mt-12">
            <div className="snapshot-chip">
              <p className="snapshot-chip-label">Date</p>
              <p className="snapshot-chip-value">8 – 9 Oct 2026</p>
            </div>
            <div className="snapshot-chip">
              <p className="snapshot-chip-label">Timing</p>
              <p className="snapshot-chip-value">10:00 AM – 4:30 PM</p>
            </div>
            <div className="snapshot-chip">
              <p className="snapshot-chip-label">Venue</p>
              <p className="snapshot-chip-value">Rajabazar Science College</p>
            </div>
          </div>

          <div className="day-tabs">
            <button type="button" className={`day-tab ${activeDay === 1 ? "active" : ""}`} onClick={() => setActiveDay(1)}>
              <span className="day-tab-label">Day 1</span>
              <span className="day-tab-date">8 October</span>
            </button>
            <button type="button" className={`day-tab ${activeDay === 2 ? "active" : ""}`} onClick={() => setActiveDay(2)}>
              <span className="day-tab-label">Day 2</span>
              <span className="day-tab-date">9 October</span>
            </button>
          </div>

          {daySchedules.map((day, dayIndex) => (
            <div
              key={day.header.label}
              className={`day-card ${dayIndex === 0 ? "day-card-one" : "day-card-two"} ${activeDay === dayIndex + 1 ? "visible" : ""}`}
            >
              <div className="schedule-header">
                <span>Time</span>
                <span>Agenda</span>
                <span>Speaker / Presenter</span>
              </div>
              {day.rows.map((row) => (
                <ScheduleRow key={row.time + row.title} time={row.time} title={row.title} speaker={row.speaker} highlight={row.highlight} />
              ))}
            </div>
          ))}

          <p className="mt-7 text-xs text-[var(--muted)]">* Timings are subject to minor adjustment on the day.</p>
        </div>
      </section>

      {/* =================================================
          REGISTRATION
      ================================================= */}

      <section id="register" className="relative overflow-hidden px-6 py-16 md:px-10">
        <div className="pointer-events-none absolute -top-40 -right-40 h-[450px] w-[450px] rounded-full bg-[var(--ion)] opacity-10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="eyebrow">06 / Registration</p>

          <h2 className="mt-7 font-mono text-4xl leading-none tracking-[-0.06em] md:text-7xl">
            Ready to enter
            <br />
            the quantum world?
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
            Registration will open soon. Keep an eye on this page for
            official registration details.
          </p>

          <button disabled className="mt-9 cursor-not-allowed rounded-full bg-[var(--ion)] px-8 py-4 text-sm font-semibold text-white opacity-80">
            Registration Opening Soon
          </button>
        </div>
      </section>

      {/* =================================================
          FAQ
      ================================================= */}

      <section id="faq" className="px-6 py-14 md:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="eyebrow" style={{ color: "var(--ion-light)" }}>07 / FAQ</p>

          <h2 className="mt-6 font-mono text-4xl tracking-[-0.05em] md:text-6xl">Questions?</h2>

          <div className="mt-10 space-y-4">
            <FAQ question="Do I need prior quantum computing experience?" answer="No. The event is designed to welcome beginners as well as participants with previous quantum computing experience." />
            <FAQ question="Do I need to know programming?" answer="Basic programming knowledge can be helpful, but beginner-friendly guidance will be provided." />
            <FAQ question="What should I bring?" answer="Bring your laptop, charger and curiosity. Official requirements will be announced before the event." />
          </div>
        </div>
      </section>

      {/* =================================================
          CONTACT — kept simple
      ================================================= */}

      <section id="contact" className="px-6 py-14 md:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="eyebrow">08 / Contact</p>

          <h2 className="mt-6 font-mono text-4xl tracking-[-0.05em] md:text-6xl">
            Contact <span className="gradient-text">Us.</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)]">
            Have questions about Qiskit Fall Fest 2026? Get in touch with
            our organizing team.
          </p>

          <div className="contact-grid">
            {contacts.map((contact, index) => (
              <div key={contact.name} className="contact-card" style={{ "--accent-shift": index } as CSSProperties}>
                {contact.image ? (
                  <img src={contact.image} alt={contact.name} className="contact-avatar" />
                ) : (
                  <div className="contact-avatar contact-avatar-initials">{contact.name.slice(0, 1)}</div>
                )}
                <h3>{contact.name}</h3>
                <p className="contact-role">Team Member</p>
                {contact.number && <a href={`tel:${contact.number.replace(/\s/g, "")}`} className="contact-detail">{contact.number}</a>}
                <div className="social-icons">
                  {contact.email && <a href={`mailto:${contact.email}`} aria-label={`Email ${contact.name}`}><MailIcon /></a>}
                  {contact.linkedin && <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${contact.name} LinkedIn`}><LinkedInIcon /></a>}
                  {contact.github && <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label={`${contact.name} GitHub`}><GitHubIcon /></a>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="site-footer">
        <div className="footer-glow footer-glow-one" />
        <div className="footer-glow footer-glow-two" />
        <div className="footer-inner">
          <div>
            <p className="footer-kicker">QUANTUM COMPUTING × COMMUNITY</p>
            <p className="footer-title">Qiskit Fall Fest <span>2026</span></p>
            <p className="footer-subtitle">University of Calcutta × IBM Qiskit</p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#speakers">Speakers</a>
            <a href="#partners">Partners</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-event">
            <strong>8 &amp; 9 October 2026</strong>
            <span>University of Calcutta</span>
            <a href="https://www.google.com/maps/search/?api=1&query=University+of+Calcutta" target="_blank" rel="noopener noreferrer">Get directions →</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Qiskit Fall Fest • University of Calcutta</span>
          <span>Built for the quantum community.</span>
        </div>
      </footer>

    </main>
  );
}

function MailIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18v14H3z" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="m3 7 9 6 9-6" fill="none" stroke="currentColor" strokeWidth="1.8" /></svg>;
}
function LinkedInIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8v11M5 5.2v.1M10 19V8m0 4c.6-2.2 2-3.5 4.2-3.5 3 0 4.8 1.9 4.8 5.6V19M10 12.2c.6-2.1 2-3.7 4.4-3.7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
}
function GitHubIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5a8.5 8.5 0 0 0-2.7 16.6c.4.1.6-.2.6-.4v-1.6c-2.3.5-2.8-1-2.8-1-.4-1-.9-1.2-.9-1.2-.8-.6.1-.6.1-.6.9.1 1.3.9 1.3.9.8 1.3 2 1 2.5.8.1-.6.3-1 .5-1.2-1.8-.2-3.7-.9-3.7-4a3.1 3.1 0 0 1 .8-2.2c-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8a7.6 7.6 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.5 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.2 0 3.1-1.9 3.8-3.7 4 .3.2.5.7.5 1.4v2c0 .2.2.5.6.4A8.5 8.5 0 0 0 12 3.5Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>;
}

/* =========================================================
  EXPERIENCE CARD
========================================================= */

function ExperienceCard({ number, title, description, sticker }: { number: string; title: string; description: string; sticker: string }) {
  return (
    <div className="surface-card group p-7">
      <img src={sticker} alt="" className="experience-sticker" />
      <p className="font-mono text-xs text-[var(--photon-light)]">{number}</p>
      <h3 className="mt-10 font-mono text-3xl">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{description}</p>
      <div className="surface-card-accent" />
    </div>
  );
}

/* =========================================================
  SPEAKER CARD
========================================================= */

function SpeakerCard({ name, designation, organization, image }: { name: string; designation: string; organization: string; image: string }) {
  return (
    <div className="speaker-card group">
      <div className="speaker-photo">
        <img src={image} alt={name} />
      </div>

      <div className="p-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--photon-light)]">Special Guest / Speaker</p>
        <h3 className="mt-2 font-mono text-xl leading-tight md:text-2xl">{name}</h3>
        <p className="mt-3 text-sm leading-6">{designation}</p>
        <p className="mt-1 text-xs leading-5 text-[var(--muted)]">{organization}</p>
        <div className="surface-card-accent" />
      </div>
    </div>
  );
}

function SpecialGuestSlot({ index }: { index: number }) {
  return (
    <div className="special-guest-slot">
      <div className="special-guest-placeholder">
        <span className="special-guest-plus">+</span>
        <span className="special-guest-number">0{index}</span>
      </div>
      <div>
        <p className="special-guest-label">Special Guest</p>
        <h3>To be announced</h3>
        <p>Guest details will be revealed soon.</p>
      </div>
    </div>
  );
}

/* =========================================================
  SCHEDULE ROW — Time / Agenda / Speaker
========================================================= */

function ScheduleRow({ time, title, speaker, highlight }: { time: string; title: string; speaker?: string; highlight?: boolean }) {
  return (
    <div className={`schedule-row ${highlight ? "schedule-row-highlight" : ""}`}>
      <span className="schedule-time">{time}</span>
      <span className="schedule-title">{title}</span>
      <span className="schedule-speaker">{speaker || "—"}</span>
    </div>
  );
}

/* =========================================================
  FAQ
========================================================= */

function FAQ({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="faq-item">
      <summary>
        <div className="flex items-center justify-between gap-4">
          <span>{question}</span>
          <span className="text-xl">+</span>
        </div>
      </summary>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)]">{answer}</p>
    </details>
  );
}