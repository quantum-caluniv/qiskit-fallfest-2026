

"use client";
 
import { useEffect, useState, type CSSProperties } from "react";
 
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDay, setActiveDay] = useState<1 | 2 | 3>(1);
  const [qubitState, setQubitState] = useState<0 | 1 | 2>(2); // 0, 1, or 2=superposition
 
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
    ["Schedule", "#schedule"],
    ["FAQ", "#faq"],
    ["Contact", "#contact"],
  ];
 
  /* =========================================================
    CONTACTS
  ========================================================= */
 
  const contacts = [
    { name: "Subhajit Pal", email: "subhajitp00@gmail.com", linkedin: "https://www.linkedin.com/", github: "https://github.com/", image: "/qiskit-fallfest-2026/organisers/.jpeg" },
    { name: "Pritam Mitra",  email: "pritammitra2k12@gmail.com", linkedin: "https://www.linkedin.com/", github: "https://github.com/", image: "/qiskit-fallfest-2026/organisers/.jpeg" },
    { name: "Tarab Momin",  email: "tarabmomin51@gmail.com", linkedin: "https://www.linkedin.com/", github: "https://github.com/", image: "/qiskit-fallfest-2026/organisers/.jpeg" },
    { name: "Arkadeep Pramanik",  email: "sunarkadeep@gmail.com", linkedin: "https://www.linkedin.com/", github: "https://github.com/", image: "/qiskit-fallfest-2026/organisers/arkadeep.jpeg" },
    { name: "Soham Sarkar", number: "+91 90000 10005", email: "sohamsarkar.off@gmail.com", linkedin: "https://www.linkedin.com/", github: "https://github.com/", image: "/qiskit-fallfest-2026/organisers/soham.jpeg" },
    { name: "Suchetana Das", email: "suchetana.das1140@gmail.com", linkedin: "https://www.linkedin.com/", github: "https://github.com/", image: "/qiskit-fallfest-2026/organisers/suchetana.jpeg" },
    { name: "Saptak Mukhopadhyay", phone: "+919000010007", email: "mukhopadhyaysaptak@gmail.com", linkedin: "https://www.linkedin.com/", github: "https://github.com/", image: "/qiskit-fallfest-2026/organisers/saptak.jpeg" },
    { name: "Anish Mandal", number: "+91 90000 10008", email: "anish07072007@gmail.com", linkedin: "https://www.linkedin.com/", github: "https://github.com/", image: "/qiskit-fallfest-2026/organisers/anish.jpeg" },
  ];
 
  /* =========================================================
    SPEAKERS — replace placeholders with real details/photos
  ========================================================= */
 
  const speakers = [
    { name: "Prof. (Dr.) Susmita Sur-Kolay", designation: "Fulbright Nehru Academic Excellence Fellow at UC San Diego; Visiting Professor at Ashoka U.; International Excellence Fellow at Karlsruhe Institute of Tech. Germany; Professor (HAG) , Retd.   Indian Statistical Institute", organization: "Indian Statistical Institute", image: "/qiskit-fallfest-2026/speakers/susmita sur.jpg" },
    { name: "Prof. (Dr.) Amlan Chakrabarti", designation: "Professor and Director, A.K. Choudhury School of IT, University of Calcutta, Visiting Prof. Dept. of AI IIT Kharagpur & Adj. Prof. IIIT Delhi", organization: "University of Calcutta", image: "/qiskit-fallfest-2026/speakers/Amlansir.jpeg" },
  ];
 
 
 
  /* =========================================================
    SCHEDULE — from Qiskit Fall Fest 2026 agenda
  ========================================================= */
 
  const daySchedules: {
    header: { label: string; date: string; theme: string };
    rows: { time: string; title: string; speaker?: string; highlight?: boolean }[];
  }[] = [
    {
      header: {
        label: "Day 1",
        date: "7 October",
        theme: "Quantum Foundations to Qiskit",
      },
      rows: [
        { time: "17:00", title: "Welcome & Orientation" },
        { time: "17:30", title: "Distinguished Quantum Lecture", speaker: "Prof. (Dr.) Susmita Sur-Kolay" },
        { time: "18:30", title: "Live Q&A" },
        { time: "19:00", title: "Qiskit 101 — From Qubit to Circuit" },
        { time: "19:30", title: "Hands-on Qiskit Lab", highlight: false },
        { time: "20:30", title: "Live Q&A" },
        { time: "20:45", title: "Day 1 Reflection" },
      ],
    },
    {
      header: {
        label: "Day 2",
        date: "8 October",
        theme: "Beyond the Basics",
      },
      rows: [
        { time: "17:00", title: "Recap & Day 2 Kick-off" },
        { time: "17:30", title: "Distinguished Quantum Lecture", speaker: "Prof. (Dr.) Amlan Chakrabarti" },
        { time: "18:30", title: "Live Q&A" },
        { time: "19:00", title: "Qiskit 201 — Beyond the Basics" },
        { time: "19:30", title: "Hands-on Quantum Computing Session", highlight: false },
        { time: "20:30", title: "Live Q&A" },
        { time: "20:45", title: "Day 2 Reflection" },
      ],
    },
    {
      header: {
        label: "Day 3",
        date: "9 October",
        theme: "Quantum Research to Real-World Frontiers",
      },
      rows: [
        { time: "17:00", title: "Recap & Day 3 Kick-off" },
        { time: "17:30", title: "Expert from IBM Quantum Research", speaker: "IBM Quantum Research" },
        { time: "18:30", title: "Live Q&A" },
        { time: "19:00", title: "Quantum Research Spotlight" },
        { time: "19:45", title: "Quiz", highlight: false },
        { time: "20:30", title: "Closing Ceremony" },
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
              <img src="/qiskit-fallfest-2026/culogo.jpg" alt="University of Calcutta" className="hero-kicker-cu" />
              <span className="hero-kicker-text">University of Calcutta × IBM Quantum</span>
              <img src="/qiskit-fallfest-2026/stickers/sticker7.jpg" alt="IBM Quantum" className="hero-kicker-ibm" />
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
            <QuantumCircuitField />
 
            <img src="/hummingbirds.png" alt="" className="hero-bird hero-bird-one" />
            <img src="/hummingbirds.png" alt="" className="hero-bird hero-bird-two" />
 
            <div className="hero-card">
              <p className="hero-card-state">|ψ⟩ = QISKIT FALL FEST 2026</p>
 
              <div className="hero-card-row">
                <span className="hero-card-caption">Date</span>
                <strong>7, 8 &amp; 9 October 2026</strong>
              </div>
 
              <div className="hero-card-row hero-venue-row">
                <span className="hero-card-caption">Venue</span>
                <strong>Online Mode</strong>
              </div>
 
              <QubitToggle state={qubitState} onCycle={() => setQubitState((s) => ((s + 1) % 3) as 0 | 1 | 2)} />
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
                  to the University of Calcutta community, connecting students,
                  researchers and technology enthusiasts through learning,
                  experimentation and collaboration.
                </p>
 
                <div className="institution-pills">
                  <span>University of Calcutta</span>
                  <span>IBM Quantum</span>
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
              <p className="snapshot-chip-value">7 – 9 Oct 2026</p>
            </div>
            <div className="snapshot-chip">
              <p className="snapshot-chip-label">Timing</p>
              <p className="snapshot-chip-value">5:00 PM – 9:00 PM</p>
            </div>
            <div className="snapshot-chip">
              <p className="snapshot-chip-label">Venue</p>
              <p className="snapshot-chip-value">Online Mode</p>
            </div>
          </div>
 
          <div className="day-tabs" role="tablist" aria-label="Event schedule days">
            {daySchedules.map((day, index) => (
              <button
                key={day.header.label}
                type="button"
                role="tab"
                aria-selected={activeDay === index + 1}
                className={`day-tab ${activeDay === index + 1 ? "active" : ""}`}
                onClick={() => setActiveDay((index + 1) as 1 | 2 | 3)}
              >
                <span className="day-tab-label">{day.header.label}</span>
                <span className="day-tab-date">{day.header.date}</span>
              </button>
            ))}
          </div>
 
          {daySchedules.map((day, dayIndex) => (
            <div
              key={day.header.label}
              className={`day-card day-card-${dayIndex + 1} ${activeDay === dayIndex + 1 ? "visible" : ""}`}
              role="tabpanel"
            >
              <div className="schedule-day-intro">
                <div>
                  <p className="schedule-day-label">{day.header.label} · {day.header.date} 2026</p>
                  <h3>{day.header.theme}</h3>
                </div>
                <span>5:00 PM — 9:00 PM · Online</span>
              </div>
 
              <div className="schedule-header">
                <span aria-hidden="true" />
                <span>Time</span>
                <span>Agenda</span>
                <span>Speaker / Presenter</span>
              </div>
              {day.rows.map((row, rowIndex) => (
                <ScheduleRow
                  key={row.time + row.title}
                  time={row.time}
                  title={row.title}
                  speaker={row.speaker}
                  highlight={row.highlight}
                  isLast={rowIndex === day.rows.length - 1}
                />
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
            Registration opens on 23rd September
          </button>
        </div>
      </section>
 
      {/* =================================================
          FAQ
      ================================================= */}
 
      <section id="faq" className="faq-section px-6 py-14 md:px-10">
        <img src="/qiskit-fallfest-2026/stickers/sticker2.png" alt="" className="faq-float-sticker faq-sticker-one" aria-hidden="true" />
        <img src="/qiskit-fallfest-2026/stickers/sticker5.png" alt="" className="faq-float-sticker faq-sticker-two" aria-hidden="true" />
        <div className="mx-auto max-w-5xl">
          <p className="eyebrow" style={{ color: "var(--ion-light)" }}>07 / FAQ</p>
          <div className="faq-heading-row">
            <div>
              <h2 className="mt-6 font-mono text-4xl tracking-[-0.05em] md:text-6xl">Questions?</h2>
              <p className="faq-subtitle">Tap a question to reveal the answer. Every card reacts as you explore.</p>
            </div>
            <div className="faq-quantum-badge" aria-hidden="true"><span>?</span><i /></div>
          </div>
          <div className="mt-10 space-y-4 faq-list">
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
                {contact.phone && <div className="contact-detail-icon-row"><a href={`tel:${contact.phone}`} className="contact-icon-button" aria-label={`Call ${contact.name}`} title={`Call ${contact.name}`}><PhoneIcon /></a></div>}
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
            <p className="footer-subtitle">University of Calcutta × IBM Quantum</p>
          </div>
 
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#speakers">Speakers</a>
            <a href="#contact">Contact</a>
          </div>
 
          <div className="footer-event">
            <strong>7, 8 &amp; 9 October 2026</strong>
            <span>Virtual Mode</span>
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
 
function PhoneIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 3.5h3l1.2 4.1-1.8 1.5a14 14 0 0 0 5.9 5.9l1.5-1.8 4.1 1.2v3c0 1-.8 1.8-1.8 1.8C11.4 19.2 4.8 12.6 4.8 4.8c0-1 .8-1.8 1.7-1.8Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg>;
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
  QUANTUM CIRCUIT FIELD — interactive animated hero graphic
  A small live circuit: pulses travel down each wire and light
  up every gate node they pass, on a loop. Hovering a gate
  freezes + highlights it so it reads as genuinely interactive,
  not just decorative motion.
========================================================= */
 
function QuantumCircuitField() {
  const [activeGate, setActiveGate] = useState<string | null>(null);
 
  const wires = [
    { y: 40, gates: [{ x: 90, label: "H" }, { x: 190, label: "X" }, { x: 300, label: "•" }] },
    { y: 110, gates: [{ x: 60, label: "H" }, { x: 190, label: "Z" }, { x: 300, label: "⊕" }] },
    { y: 180, gates: [{ x: 130, label: "H" }, { x: 240, label: "Y" }, { x: 300, label: "H" }] },
  ];
 
  return (
    <svg
      className="quantum-circuit-field"
      viewBox="0 0 380 220"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {wires.map((wire, wireIndex) => (
        <g key={wire.y}>
          <line x1="10" y1={wire.y} x2="370" y2={wire.y} className="circuit-wire" />
          <circle className="circuit-pulse" r="4" style={{ animationDelay: `${wireIndex * 0.9}s` }}>
            <animateMotion
              dur="4.5s"
              repeatCount="indefinite"
              begin={`${wireIndex * 0.9}s`}
              path={`M10,${wire.y} L370,${wire.y}`}
            />
          </circle>
          {wire.gates.map((gate) => {
            const id = `${wire.y}-${gate.x}`;
            return (
              <g
                key={id}
                transform={`translate(${gate.x}, ${wire.y})`}
                className={`circuit-gate ${activeGate === id ? "is-active" : ""}`}
                onMouseEnter={() => setActiveGate(id)}
                onMouseLeave={() => setActiveGate(null)}
              >
                <rect x="-14" y="-14" width="28" height="28" rx="7" />
                <text x="0" y="5" textAnchor="middle">{gate.label}</text>
              </g>
            );
          })}
        </g>
      ))}
    </svg>
  );
}
 
/* =========================================================
  QUBIT TOGGLE — click-to-collapse interactive state widget
  Sits inside the hero card. Cycling through |0⟩ / |1⟩ / a
  superposition gives visitors something to actually click
  rather than just read.
========================================================= */
 
function QubitToggle({ state, onCycle }: { state: 0 | 1 | 2; onCycle: () => void }) {
  const labels: Record<0 | 1 | 2, string> = {
    0: "|0⟩",
    1: "|1⟩",
    2: "|0⟩ + |1⟩",
  };
  const captions: Record<0 | 1 | 2, string> = {
    0: "Collapsed to ground state",
    1: "Collapsed to excited state",
    2: "In superposition — tap to measure",
  };
 
  return (
    <button type="button" onClick={onCycle} className={`qubit-toggle qubit-state-${state}`} aria-label="Toggle qubit state">
      <span className="qubit-orb">
        <span className="qubit-orb-core" />
        <span className="qubit-orb-ring" />
        <span className="qubit-orb-ring qubit-orb-ring-alt" />
      </span>
      <span className="qubit-toggle-text">
        <strong>{labels[state]}</strong>
        <em>{captions[state]}</em>
      </span>
    </button>
  );
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
  Each row gets a session-type icon on a connecting circuit
  trace, so the schedule reads as a literal timeline rather
  than a plain table.
========================================================= */
 
function scheduleIconFor(title: string) {
  const t = title.toLowerCase();
  if (t.includes("lecture") || t.includes("research") || t.includes("spotlight")) return <LectureIcon />;
  if (t.includes("hands-on") || t.includes("lab") || t.includes("session")) return <LabIcon />;
  if (t.includes("q&a")) return <ChatIcon />;
  if (t.includes("quiz")) return <TrophyIcon />;
  if (t.includes("closing")) return <FlagIcon />;
  if (t.includes("welcome") || t.includes("kick-off") || t.includes("orientation")) return <SparkIcon />;
  if (t.includes("reflection") || t.includes("recap")) return <LoopIcon />;
  return <CircuitDotIcon />;
}
 
function ScheduleRow({ time, title, speaker, highlight, isLast }: { time: string; title: string; speaker?: string; highlight?: boolean; isLast?: boolean }) {
  return (
    <div className={`schedule-row ${highlight ? "schedule-row-highlight" : ""}`}>
      <span className="schedule-node-col">
        <span className={`schedule-node ${highlight ? "schedule-node-highlight" : ""}`}>{scheduleIconFor(title)}</span>
        {!isLast && <span className="schedule-node-trace" />}
      </span>
      <span className="schedule-time">{time}</span>
      <span className="schedule-title">{title}</span>
      <span className="schedule-speaker">{speaker || "—"}</span>
    </div>
  );
}
 
function LectureIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6.5 12 3l8 3.5-8 3.5-8-3.5Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><path d="M7 9.5v5c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-5" fill="none" stroke="currentColor" strokeWidth="1.6" /><path d="M20 8v6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>; }
function LabIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h6M10 3v5.5L5.5 17a2 2 0 0 0 1.8 3h9.4a2 2 0 0 0 1.8-3L14 8.5V3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><path d="M8 14h8" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg>; }
function ChatIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v10H9l-4 4v-4H4Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><path d="M8 9h8M8 12h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>; }
function TrophyIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><path d="M7 6H4v1a4 4 0 0 0 4 4M17 6h3v1a4 4 0 0 1-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M12 14v3m-3 3h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>; }
function FlagIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3v18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /><path d="M6 4h12l-3 3.5L18 11H6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>; }
function SparkIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v5M12 16v5M3 12h5M16 12h5M6 6l3 3M18 18l-3-3M6 18l3-3M18 6l-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>; }
function LoopIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><path d="M18 4v3.5h-3.5M6 20v-3.5h3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>; }
function CircuitDotIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.6" /><path d="M2 12h5.5M16.5 12H22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>; }
 
/* =========================================================
  FAQ
========================================================= */
 
function FAQ({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="faq-item">
      <summary>
        <div className="faq-summary-inner">
          <span className="faq-question-mark" aria-hidden="true">◇</span>
          <span>{question}</span>
          <span className="faq-plus" aria-hidden="true">+</span>
        </div>
      </summary>
      <div className="faq-answer-wrap">
        <span className="faq-answer-line" aria-hidden="true" />
        <p>{answer}</p>
      </div>
    </details>
  );
}
