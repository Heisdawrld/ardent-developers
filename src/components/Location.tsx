"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const YEARS = [2025, 2026, 2027, 2028] as const;

const YEAR_DATA: Record<
  (typeof YEARS)[number],
  { label: string; milestones: string[]; progress: number }
> = {
  2025: {
    label: "Phase 1 — Groundwork",
    milestones: [
      "Perimeter fencing complete",
      "Gatehouse operational",
      "Road subgrade preparation",
    ],
    progress: 25,
  },
  2026: {
    label: "Phase 2 — Infrastructure",
    milestones: [
      "Central water treatment plant online",
      "Roads paved & lit",
      "Drainage network complete",
    ],
    progress: 55,
  },
  2027: {
    label: "Phase 3 — Handover",
    milestones: [
      "First plot handovers",
      "Commercial avenue opens",
      "Landscaping matured",
    ],
    progress: 80,
  },
  2028: {
    label: "Phase 4 — Community",
    milestones: [
      "Farmers&rsquo; market operational",
      "Full community live",
      "Lekki Free Zone access road complete",
    ],
    progress: 100,
  },
};

export default function Location() {
  const [activeYear, setActiveYear] = useState<(typeof YEARS)[number]>(2025);
  const data = YEAR_DATA[activeYear];

  return (
    <section id="location" className="w-full relative overflow-hidden">
      {/* Bottom container — Habitat pattern (cream bg, intro paragraph) */}
      <div
        className="w-full"
        style={{
          background: "var(--cream)",
          padding: "90px 60px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-end"
          style={{ gap: 30 }}
        >
          <div className="flex-1">
            <p
              className="text-body"
              style={{
                fontSize: "clamp(15px, 1.5vw, 22px)",
                lineHeight: 1.5,
                maxWidth: 700,
              }}
            >
              The Lekki Deep Seaport Access Road Network is opening up
              the Epe, Ikorodu, and Ijebu-Ode axis. Ardent sits at the
              strategic center of this once-in-a-generation
              infrastructure shift.
            </p>
          </div>

          {/* Right-side: Learn-more pill button (Habitat pattern) */}
          <a
            href="#pricing"
            className="btn-pill self-start md:self-end"
            style={{ background: "var(--black)" }}
          >
            <span className="btn-txt">Learn about the road infrastructure</span>
            <span className="btn-round">
              <svg
                className="arrow arrow-primary"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.2071 8.7071C16.5976 8.31658 16.5976 7.68341 16.2071 7.29289L9.84315 0.928931C9.45262 0.538406 8.81946 0.538406 8.42893 0.928931C8.03841 1.31946 8.03841 1.95262 8.42893 2.34314L14.0858 8L8.42893 13.6569C8.03841 14.0474 8.03841 14.6805 8.42893 15.0711C8.81946 15.4616 9.45262 15.4616 9.84315 15.0711L16.2071 8.7071ZM0.5 8L0.5 9L15.5 9L15.5 8L15.5 7L0.5 7L0.5 8Z"
                  fill="#0A0A0A"
                />
              </svg>
              <svg
                className="arrow arrow-secondary"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.2071 8.7071C16.5976 8.31658 16.5976 7.68341 16.2071 7.29289L9.84315 0.928931C9.45262 0.538406 8.81946 0.538406 8.42893 0.928931C8.03841 1.31946 8.03841 1.95262 8.42893 2.34314L14.0858 8L8.42893 13.6569C8.03841 14.0474 8.03841 14.6805 8.42893 15.0711C8.81946 15.4616 9.45262 15.4616 9.84315 15.0711L16.2071 8.7071ZM0.5 8L0.5 9L15.5 9L15.5 8L15.5 7L0.5 7L0.5 8Z"
                  fill="#0A0A0A"
                />
              </svg>
            </span>
          </a>
        </motion.div>
      </div>

      {/* Content container — heading + paragraph + year-switcher */}
      <div
        className="w-full"
        style={{ padding: "0 60px 60px" }}
      >
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row" style={{ gap: 30 }}>
          {/* Left: heading + paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2
              className="text-ink font-semibold mb-5"
              style={{
                fontSize: "clamp(35px, 5vw, 70px)",
                lineHeight: "75px",
                letterSpacing: "-0.03em",
              }}
            >
              Infrastructure Map
            </h2>
            <p
              className="text-body"
              style={{
                fontSize: "clamp(15px, 1.4vw, 22px)",
                lineHeight: 1.5,
                maxWidth: 520,
              }}
            >
              The Lekki Deep Seaport Access Road Network is opening up
              the Epe, Ikorodu, and Ijebu-Ode axis. Ardent sits at the
              strategic center of this once-in-a-generation
              infrastructure shift.
            </p>
          </motion.div>

          {/* Right: year-switcher */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col"
            style={{ gap: 16, minWidth: 233 }}
          >
            <h4
              className="text-black font-semibold"
              style={{
                fontSize: 15,
                lineHeight: "20px",
                letterSpacing: "-0.23px",
              }}
            >
              Infrastructure Completion Projection
            </h4>

            {/* Year buttons */}
            <div className="flex" style={{ gap: 8 }}>
              {YEARS.map((year) => {
                const isActive = year === activeYear;
                return (
                  <button
                    key={year}
                    onClick={() => setActiveYear(year)}
                    className="flex-1 px-4 py-2 rounded-[12px] font-semibold transition-all"
                    style={{
                      background: isActive
                        ? "var(--gold)"
                        : "var(--gold-soft)",
                      color: "var(--black)",
                      fontSize: 15,
                      border: isActive
                        ? "1px solid var(--gold-deep)"
                        : "1px solid transparent",
                    }}
                  >
                    {year}
                  </button>
                );
              })}
            </div>

            {/* Active year data */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeYear}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="p-4 rounded-[12px]"
                style={{ background: "var(--cream-deep)" }}
              >
                <p
                  className="text-ink font-semibold mb-3"
                  style={{ fontSize: 15, lineHeight: "20px" }}
                >
                  {data.label}
                </p>

                {/* Progress bar */}
                <div
                  className="w-full h-2 rounded-full mb-4 overflow-hidden"
                  style={{ background: "rgba(10, 10, 10, 0.08)" }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${data.progress}%` }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full"
                    style={{ background: "var(--gold)" }}
                  />
                </div>

                <ul className="flex flex-col" style={{ gap: 6 }}>
                  {data.milestones.map((m, i) => (
                    <li
                      key={i}
                      className="text-body text-[13px] flex items-start"
                      style={{ gap: 8 }}
                    >
                      <span
                        className="text-gold mt-1 flex-shrink-0"
                        style={{ fontSize: 10 }}
                      >
                        ●
                      </span>
                      <span dangerouslySetInnerHTML={{ __html: m }} />
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Map container — embedded Google Maps of Lekki/Lagos area */}
      <div
        className="w-full relative"
        style={{ padding: "0 20px", height: 650 }}
      >
        <div className="max-w-[1400px] mx-auto h-full relative">
          <iframe
            title="Ardent Estate Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127292.70833333334!2d3.5!3d6.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzAnMDAuMCJOIDPCsTMwJzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
            className="w-full h-full"
            style={{
              border: 0,
              borderRadius: 24,
              filter: "grayscale(0.4) contrast(1.05)",
            }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />

          {/* Map label overlay — Habitat pattern */}
          <div
            className="absolute top-6 left-6 px-4 py-2 rounded-[12px] glass-dark"
            style={{ color: "var(--white)" }}
          >
            <p className="text-[11px] tracking-[0.2em] uppercase opacity-70">
              Ardent Estate Site
            </p>
            <p className="text-base font-semibold mt-0.5">Lekki Corridor</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          section :global(.w-full[style*="padding: 90px 60px"]) {
            padding: 60px 20px 109px !important;
          }
          section :global(.w-full[style*="padding: 0px 60px 60px"]) {
            padding: 0 0 50px !important;
          }
        }
      `}</style>
    </section>
  );
}
