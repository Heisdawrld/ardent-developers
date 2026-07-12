"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LeafDecor from "./LeafDecor";

const distances = [
  { time: "10 min", place: "Ikoyi" },
  { time: "15 min", place: "Victoria Island" },
  { time: "40 min", place: "Murtala Muhammed Airport" },
  { time: "5 min", place: "Lekki Phase 1" },
];

const keyFeatures = [
  {
    title: "Prime Location",
    description:
      "Strategically positioned in one of Lagos's most sought-after neighbourhoods with easy access to major business districts.",
  },
  {
    title: "Premium Infrastructure",
    description:
      "World-class road networks, underground utilities, efficient drainage systems, and modern street lighting throughout.",
  },
  {
    title: "24/7 Security",
    description:
      "Gated community with round-the-clock security personnel, CCTV surveillance, and controlled access points.",
  },
  {
    title: "Waterfront Living",
    description:
      "Direct access to the lagoon with waterfront pavilions and stunning water views from prime units.",
  },
];

// Infrastructure completion projection — Habitat-style year toggle
const infrastructure = [
  {
    year: 2025,
    title: "Lekki Coastal Road — Phase 1",
    status: "Under Construction",
    progress: 35,
    detail:
      "Coastal dual-carriageway linking Lekki Phase 1 to the new waterfront corridor opens 2 lanes.",
  },
  {
    year: 2026,
    title: "Lekki–Epe Expressway Expansion",
    status: "Funded",
    progress: 55,
    detail:
      "Widening to 10 lanes through Lekki–Ajah, with new interchanges and a dedicated BRT corridor.",
  },
  {
    year: 2027,
    title: "Waterfront Bridge + Ardent Access Loop",
    status: "Planned",
    progress: 70,
    detail:
      "Direct bridge connecting The Residences to the Lekki–Epe expressway — 4 min drive to Phase 1.",
  },
  {
    year: 2028,
    title: "Lekki Deep Seaport Access Network",
    status: "Projection",
    progress: 100,
    detail:
      "Full network complete. The Residences sits 15 min from the Deep Seaport and 20 min from the new Free Zone.",
  },
];

const years = [2025, 2026, 2027, 2028];

export default function Location() {
  const [activeYear, setActiveYear] = useState(2025);
  const active = infrastructure.find((i) => i.year === activeYear)!;

  return (
    <section className="relative py-16 lg:py-24 bg-warm-gray overflow-hidden">
      <LeafDecor
        variant="landscape"
        className="top-12 -right-12 w-72 text-leaf opacity-[0.06]"
      />
      <LeafDecor
        variant="leaf"
        flip
        className="bottom-24 -left-10 w-40 text-accent opacity-[0.06]"
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, x: -22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[11px] uppercase tracking-[0.18em] text-foreground/40 mb-2"
        >
          Location
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, x: -22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05, duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold tracking-tight mb-2"
        >
          Lekki, Lagos, Nigeria
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-foreground/60 text-[15px] leading-relaxed max-w-2xl mb-10"
        >
          Lekki is one of Lagos&apos;s fastest-growing corridors, with premium
          infrastructure, new road networks, and world-class developments
          reshaping the landscape. Close to the action, but removed from the
          chaos.
        </motion.p>

        {/* ===== Interactive infrastructure map (Habitat signature) ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-14">
          {/* Map panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 relative h-[360px] lg:h-[420px] rounded-2xl overflow-hidden border border-sand"
          >
            {/* Stylized map backdrop */}
            <div className="absolute inset-0 bg-gradient-to-br from-aqua via-aqua-deep to-mint" />

            {/* Roads / network SVG */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 600 420"
              preserveAspectRatio="none"
            >
              {/* Lagoon */}
              <path
                d="M0 320 C 100 300, 180 350, 280 330 C 380 310, 460 360, 600 340 L600 420 L0 420 Z"
                fill="#cdeede"
                opacity="0.65"
              />
              {/* Expressway */}
              <path
                d="M-20 180 C 120 170, 220 200, 320 180 C 420 160, 520 200, 640 170"
                stroke="#0f2311"
                strokeWidth="6"
                fill="none"
                opacity="0.45"
                strokeLinecap="round"
              />
              <path
                d="M-20 180 C 120 170, 220 200, 320 180 C 420 160, 520 200, 640 170"
                stroke="#89cc27"
                strokeWidth="2"
                fill="none"
                strokeDasharray="10 8"
                opacity="0.9"
              />
              {/* Cross road */}
              <path
                d="M210 -10 C 200 100, 230 220, 220 430"
                stroke="#0f2311"
                strokeWidth="3"
                fill="none"
                opacity="0.35"
              />
              {/* Pin: The Residences */}
              <g transform="translate(220 175)">
                <circle r="14" fill="#0f2311" opacity="0.2" />
                <circle r="7" fill="#0f2311" />
                <circle r="3" fill="#89cc27" />
              </g>
              {/* Pin: Lekki Phase 1 */}
              <g transform="translate(380 130)">
                <circle r="6" fill="#0f2311" opacity="0.5" />
              </g>
              {/* Pin: Airport */}
              <g transform="translate(70 90)">
                <circle r="6" fill="#0f2311" opacity="0.5" />
              </g>
              {/* Pin: VI */}
              <g transform="translate(490 220)">
                <circle r="6" fill="#0f2311" opacity="0.5" />
              </g>
              {/* Labels */}
              <text
                x="220"
                y="160"
                fill="#0f2311"
                fontSize="11"
                fontWeight="600"
                textAnchor="middle"
              >
                The Residences
              </text>
              <text
                x="380"
                y="120"
                fill="#0f2311"
                fontSize="10"
                textAnchor="middle"
                opacity="0.75"
              >
                Lekki Phase 1
              </text>
              <text
                x="70"
                y="80"
                fill="#0f2311"
                fontSize="10"
                textAnchor="middle"
                opacity="0.75"
              >
                Airport
              </text>
              <text
                x="490"
                y="240"
                fill="#0f2311"
                fontSize="10"
                textAnchor="middle"
                opacity="0.75"
              >
                Victoria Island
              </text>
              <text
                x="500"
                y="395"
                fill="#0f2311"
                fontSize="11"
                fontStyle="italic"
                opacity="0.65"
              >
                Lagos Lagoon
              </text>
            </svg>

            {/* Floating year chip on map */}
            <div className="absolute top-4 left-4 bg-white/85 backdrop-blur-sm rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-wide border border-sand">
              Infrastructure · {activeYear}
            </div>

            <p className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.2em] text-foreground/40">
              Click a year to explore
            </p>
          </motion.div>

          {/* Year toggle + detail panel */}
          <motion.div
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 bg-white rounded-2xl p-6 lg:p-8 border border-sand"
          >
            <p className="text-[11px] uppercase tracking-[0.18em] text-foreground/40 mb-3">
              Infrastructure Completion Projection
            </p>

            {/* Year buttons */}
            <div className="flex gap-2 mb-6">
              {years.map((y) => (
                <button
                  key={y}
                  onClick={() => setActiveYear(y)}
                  className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                    activeYear === y
                      ? "bg-accent text-white shadow-sm"
                      : "bg-warm-gray text-foreground/60 hover:bg-sand/60"
                  }`}
                >
                  {y}
                </button>
              ))}
            </div>

            {/* Detail */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active.year}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`inline-flex px-3 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full ${
                    active.status === "Projection"
                      ? "bg-pop/10 text-pop"
                      : active.status === "Funded"
                      ? "bg-cream text-foreground/70"
                      : active.status === "Planned"
                      ? "bg-lavender text-pop"
                      : "bg-leaf-soft text-accent"
                  }`}
                >
                  {active.status}
                </span>
                <span className="text-xs font-mono text-foreground/50">
                  {active.progress}%
                </span>
              </div>

              <h3 className="text-lg font-bold mb-2 leading-snug">
                {active.title}
              </h3>
              <p className="text-[13px] text-foreground/60 leading-relaxed mb-5">
                {active.detail}
              </p>

              {/* Progress bar */}
              <div className="h-1.5 w-full bg-warm-gray rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${active.progress}%` }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="h-full bg-leaf rounded-full"
                />
              </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Distance boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
          {distances.map((d, i) => (
            <motion.div
              key={d.place}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-xl p-5 text-center border border-sand"
            >
              <p className="text-2xl font-bold text-leaf mb-1">{d.time}</p>
              <p className="text-[13px] text-foreground/50">{d.place}</p>
            </motion.div>
          ))}
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {keyFeatures.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -22 : 22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-white rounded-xl p-6 border border-sand"
            >
              <h3 className="text-base font-semibold mb-2">{feat.title}</h3>
              <p className="text-[13px] text-foreground/55 leading-relaxed">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
