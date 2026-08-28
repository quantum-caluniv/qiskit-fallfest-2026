"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const savedTheme = localStorage.getItem("qiskit-theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const theme = darkMode ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("qiskit-theme", theme);
  }, [darkMode, mounted]);

  const toggleTheme = () => {
    setDarkMode((previous) => !previous);
  };

  /* =========================================================
     CONTACTS
  ========================================================= */

  const contacts = [
    {
      name: "Arkadeep",
      number: "+91 90000 10001",
    },
    {
      name: "Suchetana",
      number: "+91 90000 10002",
    },
    {
      name: "Soham",
      number: "+91 90000 10003",
    },
    {
      name: "Saptak",
      number: "+91 90000 10004",
    },
  ];

  /* =========================================================
     SPECIAL GUESTS & SPEAKERS
     
     Replace the placeholder information with the actual
     guest/speaker details and photos.
  ========================================================= */

  const speakers = [
    {
      name: "Speaker Name 1",
      designation: "Designation / Position",
      organization: "Organization / Institution",
      image: "/qiskit-fallfest-2026/speakers/speaker1.jpg",
    },
    {
      name: "Speaker Name 2",
      designation: "Designation / Position",
      organization: "Organization / Institution",
      image: "/qiskit-fallfest-2026/speakers/speaker2.jpg",
    },
    {
      name: "Speaker Name 3",
      designation: "Designation / Position",
      organization: "Organization / Institution",
      image: "/qiskit-fallfest-2026/speakers/speaker3.jpg",
    },
    {
      name: "Speaker Name 4",
      designation: "Designation / Position",
      organization: "Organization / Institution",
      image: "/qiskit-fallfest-2026/speakers/speaker4.jpg",
    },
  ];

  return (
    <main
      className="
        min-h-screen
        overflow-hidden
        bg-[var(--background)]
        text-[var(--foreground)]
        transition-colors
        duration-500
      "
    >

      {/* =================================================
          NAVIGATION
      ================================================= */}

      <header
        className="
          fixed
          left-0
          top-0
          z-50
          w-full
          bg-[var(--background)]
          backdrop-blur-xl
          transition-colors
          duration-500
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            items-center
            justify-between
            px-6
            py-5
            md:px-10
          "
        >

          {/* LOGO */}

          <a
            href="#home"
            className="
              font-mono
              text-sm
              font-semibold
              tracking-tight
              text-[var(--foreground)]
              md:text-base
            "
          >
            Qiskit Fall Fest
            <span className="text-[var(--pink-light)]">
              {" "}2026
            </span>
          </a>


          {/* NAVIGATION */}

          <nav className="hidden items-center gap-6 md:flex">

            <a
              href="#about"
              className="nav-link text-sm"
            >
              About
            </a>

            <a
              href="#experience"
              className="nav-link text-sm"
            >
              Experience
            </a>

            <a
              href="#speakers"
              className="nav-link text-sm"
            >
              Speakers
            </a>

            <a
              href="#schedule"
              className="nav-link text-sm"
            >
              Schedule
            </a>

            <a
              href="#faq"
              className="nav-link text-sm"
            >
              FAQ
            </a>

            <a
              href="#contact"
              className="nav-link text-sm"
            >
              Contact
            </a>

          </nav>


          {/* RIGHT SIDE */}

          <div className="flex items-center gap-3">

            <button
              type="button"
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label={
                darkMode
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              title={
                darkMode
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {darkMode ? "☀" : "☾"}
            </button>

            <a
              href="#register"
              className="register-button"
            >
              Register
            </a>

          </div>

        </div>
      </header>


      {/* =================================================
          HERO
      ================================================= */}

      <section
        id="home"
        className="
          relative
          flex
          min-h-screen
          items-center
          bg-[var(--background)]
          px-6
          pb-20
          pt-32
          transition-colors
          duration-500
          md:px-10
        "
      >

        {/* Background decoration */}

        <div
          className="
            absolute
            -left-40
            top-40
            h-80
            w-80
            rounded-full
            bg-[var(--purple)]
            opacity-20
            blur-3xl
          "
        />

        <div
          className="
            absolute
            right-0
            top-20
            h-96
            w-96
            rounded-full
            bg-[var(--pink)]
            opacity-10
            blur-3xl
          "
        />


        <div
          className="
            relative
            mx-auto
            grid
            w-full
            max-w-7xl
            items-center
            gap-10
            lg:grid-cols-[1.05fr_0.95fr]
          "
        >

          {/* HERO TEXT */}

          <div>

            {/* UNIVERSITY + IBM */}

            <div className="mb-8 flex w-full items-center justify-center gap-6">

              <img
                src="/qiskit-fallfest-2026/cuimage.jpeg"
                alt="University of Calcutta"
                className="h-12 w-12 object-contain"
              />

              <span
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.32em]
                  text-[var(--muted)]
                  md:text-xs
                "
              >
                University of Calcutta X IBM Qiskit
              </span>

              <img
                src="/qiskit-fallfest-2026/WhatsApp Image 2026-08-08 at 12.51.26 PM.jpeg"
                alt="IBM"
                className="h-12 w-12 object-contain"
              />

            </div>


            {/* TITLE */}

            <h1
              className="
                font-mono
                text-[2rem]
                font-medium
                leading-[0.88]
                tracking-[-0.07em]
                sm:text-[4.8rem]
                md:text-[6rem]
                lg:text-[7rem]
              "
            >
              QISKIT

              <br />

              FALL FEST

              <br />

              <span className="gradient-text">
                2026
              </span>
            </h1>


            {/* DESCRIPTION */}

            <p
              className="
                mt-8
                max-w-xl
                text-base
                leading-7
                text-[var(--muted)]
                md:text-lg
              "
            >
              Step into the world of quantum computing.
              Learn, build, experiment and connect with
              the next generation of quantum innovators.
            </p>


            {/* BUTTONS */}

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <a
                href="#register"
                className="
                  register-button
                  px-7
                  py-3
                "
              >
                Register Now →
              </a>

              <a
                href="#about"
                className="
                  rounded-full
                  border
                  border-[var(--purple)]
                  px-7
                  py-3
                  text-center
                  text-sm
                  font-semibold
                  text-[var(--purple-light)]
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[var(--purple)]
                  hover:text-white
                "
              >
                Explore Event
              </a>

            </div>


            {/* TAGS */}

            <div className="mt-10 flex flex-wrap gap-3">

              <span className="pill">
                Quantum Computing
              </span>

              <span className="pill">
                Qiskit
              </span>

              <span className="pill">
                Workshops
              </span>

            </div>

          </div>


          {/* HERO VISUAL */}

          <div
            className="
              relative
              flex
              min-h-[480px]
              items-center
              justify-center
            "
          >

            <img
              src="/hummingbirds.png"
              alt=""
              className="
                animate-float
                absolute
                right-0
                top-4
                z-20
                w-[210px]
                object-contain
                md:w-[290px]
              "
            />


            <div
              className="
                absolute
                bottom-8
                right-0
                z-30
                rotate-[8deg]
                rounded-full
                bg-[var(--purple)]
                px-8
                py-5
                text-lg
                font-light
                text-white
                shadow-xl
                md:px-11
                md:py-6
                md:text-2xl
              "
            >
              Quantum Computing
            </div>


            <div
              className="
                absolute
                bottom-12
                left-0
                h-28
                w-28
                rounded-full
                bg-[var(--pink)]
                opacity-50
                blur-sm
                md:h-36
                md:w-36
              "
            />

          </div>

        </div>

      </section>


      {/* =================================================
          UNIVERSITY OF CALCUTTA
      ================================================= */}

      <section
        className="
          bg-[var(--background)]
          px-6
          transition-colors
          duration-500
          md:px-10
        "
      >

        <div className="mx-auto max-w-7xl">

          <div className="cu-section">

            <div className="cu-label">
              Presented by
            </div>

            <div className="cu-title">
              UNIVERSITY OF
              <br />
              CALCUTTA
            </div>

            <div className="cu-content">

              <div className="cu-description">

                <p className="small-label">
                  QUANTUM COMPUTING × ACADEMIA
                </p>

                <h2>
                  Where curiosity
                  <br />
                  meets quantum.
                </h2>

              </div>


              <div className="cu-text">

                <p>
                  Qiskit Fall Fest 2026 brings the world
                  of quantum computing to the University
                  of Calcutta, connecting students,
                  researchers and technology enthusiasts
                  through learning, experimentation and
                  collaboration.
                </p>

                <div className="institution-pills">

                  <span>
                    University of Calcutta
                  </span>

                  <span>
                    IBM
                  </span>

                  <span>
                    Qiskit
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          ABOUT
      ================================================= */}

      <section
        id="about"
        className="
          bg-[var(--background)]
          px-6
          py-24
          text-[var(--foreground)]
          transition-colors
          duration-500
          md:px-10
        "
      >

        <div className="mx-auto max-w-7xl">

          <p
            className="
              font-mono
              text-xs
              uppercase
              tracking-[0.35em]
              text-[var(--purple-light)]
            "
          >
            01 / About
          </p>


          <div
            className="
              mt-7
              grid
              gap-10
              lg:grid-cols-2
            "
          >

            <h2
              className="
                font-mono
                text-4xl
                leading-[0.95]
                tracking-[-0.05em]
                md:text-6xl
              "
            >
              Quantum
              <br />
              computing
              <br />
              starts here.
            </h2>


            <div
              className="
                text-base
                leading-7
                text-[var(--muted)]
                md:text-lg
              "
            >

              <p>
                Qiskit Fall Fest is an opportunity to
                explore quantum computing through
                accessible learning, workshops and
                community interaction.
              </p>

              <p className="mt-5">
                Whether you are completely new to
                quantum computing or already
                experimenting with Qiskit, this event
                is designed to help you take your
                next step.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          EXPERIENCE
      ================================================= */}

      <section
        id="experience"
        className="
          bg-[var(--background)]
          px-6
          py-24
          text-[var(--foreground)]
          transition-colors
          duration-500
          md:px-10
        "
      >

        <div className="mx-auto max-w-7xl">

          <p
            className="
              font-mono
              text-xs
              uppercase
              tracking-[0.35em]
              text-[var(--purple-light)]
            "
          >
            02 / Experience
          </p>


          <h2
            className="
              mt-5
              max-w-4xl
              font-mono
              text-4xl
              leading-tight
              tracking-[-0.05em]
              md:text-6xl
            "
          >
            Learn.
            <br />
            Build.
            <br />
            Explore.
          </h2>


          <div
            className="
              mt-12
              grid
              gap-5
              md:grid-cols-3
            "
          >

            <ExperienceCard
              number="01"
              title="Learn"
              description="Understand the foundations of quantum computing through accessible talks and interactive sessions."
            />

            <ExperienceCard
              number="02"
              title="Build"
              description="Get hands-on with Qiskit and experiment with quantum circuits and algorithms."
            />

            <ExperienceCard
              number="03"
              title="Connect"
              description="Meet students, researchers and quantum enthusiasts who are building the future."
            />

          </div>

        </div>

      </section>


      {/* =================================================
          SPECIAL GUESTS & SPEAKERS
      ================================================= */}

      <section
        id="speakers"
        className="
          bg-[var(--background)]
          px-6
          py-24
          text-[var(--foreground)]
          transition-colors
          duration-500
          md:px-10
        "
      >

        <div className="mx-auto max-w-7xl">

          {/* SECTION LABEL */}

          <p
            className="
              font-mono
              text-xs
              uppercase
              tracking-[0.35em]
              text-[var(--pink-light)]
            "
          >
            03 / Speakers
          </p>


          {/* HEADING */}

          <div
            className="
              mt-7
              grid
              gap-10
              lg:grid-cols-2
              lg:items-end
            "
          >

            <h2
              className="
                font-mono
                text-4xl
                leading-[0.95]
                tracking-[-0.05em]
                md:text-6xl
              "
            >
              Meet the
              <br />
              <span className="gradient-text">
                quantum minds.
              </span>
            </h2>


            <p
              className="
                max-w-xl
                text-base
                leading-7
                text-[var(--muted)]
                md:text-lg
              "
            >
              Learn from distinguished researchers, industry
              experts and quantum computing enthusiasts who
              are joining us at Qiskit Fall Fest 2026.
            </p>

          </div>


          {/* SPEAKER CARDS */}

          <div
            className="
              mt-14
              grid
              gap-6
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >

            {speakers.map((speaker) => (
              <SpeakerCard
                key={speaker.name}
                name={speaker.name}
                designation={speaker.designation}
                organization={speaker.organization}
                image={speaker.image}
              />
            ))}

          </div>

        </div>

      </section>


      {/* =================================================
          SCHEDULE
      ================================================= */}

      <section
        id="schedule"
        className="
          schedule-section
          px-6
          py-24
          transition-colors
          duration-500
          md:px-10
        "
      >

        <div className="mx-auto max-w-7xl">

          <p
            className="
              font-mono
              text-xs
              uppercase
              tracking-[0.35em]
              text-[var(--pink-light)]
            "
          >
            04 / Schedule
          </p>


          <h2
            className="
              mt-5
              font-mono
              text-4xl
              tracking-[-0.05em]
              md:text-6xl
            "
          >
            Event
            <br />
            schedule.
          </h2>


          <div
            className="
              mt-12
              divide-y
              divide-[var(--border)]
              border-y
              border-[var(--border)]
            "
          >

            <ScheduleRow
              time="09:00"
              title="Registration & Welcome"
            />

            <ScheduleRow
              time="10:00"
              title="Introduction to Quantum Computing"
            />

            <ScheduleRow
              time="11:30"
              title="Qiskit Hands-on Workshop"
            />

            <ScheduleRow
              time="14:00"
              title="Quantum Innovation Session"
            />

            <ScheduleRow
              time="16:00"
              title="Networking & Closing"
            />

          </div>


          <p
            className="
              mt-7
              text-xs
              text-[var(--muted)]
            "
          >
            * Official timings will be updated here.
          </p>

        </div>

      </section>


      {/* =================================================
          REGISTRATION
      ================================================= */}

      <section
        id="register"
        className="
          relative
          overflow-hidden
          bg-[var(--background)]
          px-6
          py-28
          text-[var(--foreground)]
          transition-colors
          duration-500
          md:px-10
        "
      >

        <div
          className="
            absolute
            -right-40
            -top-40
            h-[450px]
            w-[450px]
            rounded-full
            bg-[var(--purple)]
            opacity-10
            blur-3xl
          "
        />


        <div
          className="
            relative
            mx-auto
            max-w-5xl
            text-center
          "
        >

          <p
            className="
              font-mono
              text-xs
              uppercase
              tracking-[0.35em]
              text-[var(--pink-light)]
            "
          >
            05 / Registration
          </p>


          <h2
            className="
              mt-7
              font-mono
              text-4xl
              leading-none
              tracking-[-0.06em]
              md:text-7xl
            "
          >
            Ready to enter
            <br />
            the quantum world?
          </h2>


          <p
            className="
              mx-auto
              mt-7
              max-w-2xl
              text-base
              leading-7
              text-[var(--muted)]
              md:text-lg
            "
          >
            Registration will open soon.
            Keep an eye on this page for official
            registration details.
          </p>


          <button
            disabled
            className="
              mt-8
              cursor-not-allowed
              rounded-full
              bg-[var(--purple)]
              px-8
              py-4
              text-sm
              font-semibold
              text-white
              opacity-80
            "
          >
            Registration Opening Soon
          </button>

        </div>

      </section>


      {/* =================================================
          FAQ
      ================================================= */}

      <section
        id="faq"
        className="
          bg-[var(--background)]
          px-6
          py-24
          text-[var(--foreground)]
          transition-colors
          duration-500
          md:px-10
        "
      >

        <div className="mx-auto max-w-5xl">

          <p
            className="
              font-mono
              text-xs
              uppercase
              tracking-[0.35em]
              text-[var(--purple-light)]
            "
          >
            06 / FAQ
          </p>


          <h2
            className="
              mt-5
              font-mono
              text-4xl
              tracking-[-0.05em]
              md:text-6xl
            "
          >
            Questions?
          </h2>


          <div className="mt-10 space-y-4">

            <FAQ
              question="Do I need prior quantum computing experience?"
              answer="No. The event is designed to welcome beginners as well as participants with previous quantum computing experience."
            />

            <FAQ
              question="Do I need to know programming?"
              answer="Basic programming knowledge can be helpful, but beginner-friendly guidance will be provided."
            />

            <FAQ
              question="What should I bring?"
              answer="Bring your laptop, charger and curiosity. Official requirements will be announced before the event."
            />

          </div>

        </div>

      </section>


      {/* =================================================
          CONTACT
      ================================================= */}

      <section
        id="contact"
        className="
          bg-[var(--background)]
          px-6
          py-20
          text-[var(--foreground)]
          transition-colors
          duration-500
          md:px-10
        "
      >

        <div className="mx-auto max-w-5xl">

          <p
            className="
              font-mono
              text-xs
              uppercase
              tracking-[0.35em]
              text-[var(--pink-light)]
            "
          >
            07 / Contact
          </p>


          <h2
            className="
              mt-5
              font-mono
              text-4xl
              tracking-[-0.05em]
              md:text-6xl
            "
          >
            Contact
            <br />
            <span className="gradient-text">
              Us.
            </span>
          </h2>


          <p
            className="
              mt-5
              max-w-xl
              text-base
              leading-7
              text-[var(--muted)]
            "
          >
            Have questions about Qiskit Fall Fest 2026?
            Get in touch with our organizing team.
          </p>


          {/* SMALL CONTACT CARDS */}

          <div
            className="
              mt-10
              grid
              max-w-3xl
              gap-4
              sm:grid-cols-2
            "
          >

            {contacts.map((contact) => (
              <a
                key={contact.name}
                href={`tel:${contact.number.replace(/\s/g, "")}`}
                className="
                  event-card
                  rounded-2xl
                  px-5
                  py-5
                  transition
                  duration-300
                  hover:-translate-y-1
                "
              >

                <p
                  className="
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-[var(--pink-light)]
                  "
                >
                  Qiskit Fall Fest Team
                </p>

                <h3
                  className="
                    mt-2
                    font-mono
                    text-xl
                    md:text-2xl
                  "
                >
                  {contact.name}
                </h3>

                <p
                  className="
                    mt-1
                    text-sm
                    text-[var(--muted)]
                  "
                >
                  {contact.number}
                </p>

              </a>
            ))}

          </div>

        </div>

      </section>


      {/* =================================================
          FOOTER
      ================================================= */}

      <footer
        className="
          bg-[#08030c]
          px-6
          py-10
          text-white
          md:px-10
        "
      >

        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            justify-between
            gap-8
            md:flex-row
            md:items-end
          "
        >

          <div>

            <p className="font-mono text-xl">
              Qiskit Fall Fest 2026
            </p>

            <p className="mt-2 text-sm text-white/60">
              University of Calcutta
            </p>

          </div>


          <div className="text-left md:text-right">

            <p className="font-mono text-xl tracking-wider">
              IBM
            </p>

            <p className="mt-2 text-xs text-white/50">
              Qiskit Fall Fest • 2026
            </p>

          </div>

        </div>

      </footer>

    </main>
  );
}


/* =========================================================
   EXPERIENCE CARD
========================================================= */

function ExperienceCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        event-card
        group
        rounded-[1.5rem]
        p-7
        backdrop-blur-xl
      "
    >

      <p
        className="
          font-mono
          text-xs
          text-[var(--pink-light)]
        "
      >
        {number}
      </p>


      <h3
        className="
          mt-10
          font-mono
          text-3xl
        "
      >
        {title}
      </h3>


      <p
        className="
          mt-4
          text-sm
          leading-7
          text-[var(--muted)]
        "
      >
        {description}
      </p>


      <div
        className="
          mt-8
          h-1
          w-8
          rounded-full
          bg-[var(--pink)]
          transition-all
          duration-500
          group-hover:w-14
        "
      />

    </div>
  );
}


/* =========================================================
   SPEAKER CARD
========================================================= */

function SpeakerCard({
  name,
  designation,
  organization,
  image,
}: {
  name: string;
  designation: string;
  organization: string;
  image: string;
}) {
  return (
    <div
      className="
        event-card
        group
        overflow-hidden
        rounded-[1.5rem]
        backdrop-blur-xl
        transition
        duration-500
        hover:-translate-y-2
      "
    >

      {/* PHOTO */}

      <div
        className="
          relative
          aspect-[4/5]
          overflow-hidden
          bg-[var(--purple)]
        "
      >

        <img
          src={image}
          alt={name}
          className="
            h-full
            w-full
            object-cover
            transition
            duration-700
            group-hover:scale-105
          "
        />

        {/* PHOTO OVERLAY */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/60
            via-transparent
            to-transparent
            opacity-70
          "
        />

      </div>


      {/* SPEAKER DETAILS */}

      <div className="p-6">

        <p
          className="
            font-mono
            text-[10px]
            uppercase
            tracking-[0.2em]
            text-[var(--pink-light)]
          "
        >
          Special Guest / Speaker
        </p>


        <h3
          className="
            mt-2
            font-mono
            text-xl
            leading-tight
            md:text-2xl
          "
        >
          {name}
        </h3>


        <p
          className="
            mt-3
            text-sm
            leading-6
            text-[var(--foreground)]
          "
        >
          {designation}
        </p>


        <p
          className="
            mt-1
            text-xs
            leading-5
            text-[var(--muted)]
          "
        >
          {organization}
        </p>


        <div
          className="
            mt-5
            h-1
            w-8
            rounded-full
            bg-[var(--pink)]
            transition-all
            duration-500
            group-hover:w-14
          "
        />

      </div>

    </div>
  );
}


/* =========================================================
   SCHEDULE ROW
========================================================= */

function ScheduleRow({
  time,
  title,
}: {
  time: string;
  title: string;
}) {
  return (
    <div
      className="
        flex
        flex-col
        gap-2
        py-6
        sm:flex-row
        sm:items-center
      "
    >

      <span
        className="
          w-24
          font-mono
          text-sm
          text-[var(--pink-light)]
        "
      >
        {time}
      </span>


      <span
        className="
          font-mono
          text-lg
          md:text-xl
        "
      >
        {title}
      </span>

    </div>
  );
}


/* =========================================================
   FAQ
========================================================= */

function FAQ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details
      className="
        rounded-2xl
        p-5
        backdrop-blur-xl
      "
    >

      <summary
        className="
          cursor-pointer
          list-none
          font-mono
          text-base
          font-semibold
        "
      >

        <div
          className="
            flex
            items-center
            justify-between
            gap-4
          "
        >

          <span>
            {question}
          </span>

          <span className="text-xl">
            +
          </span>

        </div>

      </summary>


      <p
        className="
          mt-4
          max-w-3xl
          text-sm
          leading-7
          text-[var(--muted)]
        "
      >
        {answer}
      </p>

    </details>
  );
}