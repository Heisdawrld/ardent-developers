"use client";

import { motion } from "framer-motion";
import LeafDecor from "./LeafDecor";

const pillars = [
  {
    word: "airflow",
    description:
      "Cross ventilation across all units, breeze blocks, and screened openings",
  },
  {
    word: "light",
    description:
      "Natural light penetration through deep windows and indoor-outdoor transitions",
  },
  {
    word: "landscape",
    description:
      "Landscape-first site strategy with courtyards, gardens, and green edges",
  },
];

const features = [
  "Deep overhangs and shaded facades",
  "Breeze blocks and screened openings",
  "Indoor-outdoor transitions via balconies and landscaped edges",
  "Tropical modern material palette",
  "Clear separation between public, private, and service zones",
];

export default function DesignDoctrine() {
  return (
    <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
      <LeafDecor
        variant="monstera"
        className="top-0 right-0 w-56 lg:w-72 text-accent opacity-[0.10]"
      />
      <LeafDecor
        variant="leaf"
        flip
        className="bottom-0 left-0 w-44 lg:w-60 text-accent opacity-[0.05]"
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-script text-accent text-3xl lg:text-4xl leading-none mb-2 -ml-1"
            >
              doctrine
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05, duration: 0.6 }}
              className="text-[11px] uppercase tracking-[0.18em] text-foreground/40 mb-2 mt-2"
            >
              Design Doctrine
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, x: -22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-3xl lg:text-4xl font-bold tracking-tight mb-12"
            >
              Airflow. Light. Landscape.
            </motion.h2>

            <div className="space-y-8">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.word}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  <p className="text-accent text-sm font-semibold lowercase tracking-wide mb-1">
                    {p.word}
                  </p>
                  <p className="text-[15px] text-foreground/60 leading-relaxed">
                    {p.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Architectural Features */}
          <div className="flex flex-col justify-center">
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl font-semibold mb-8"
            >
              Architectural Features
            </motion.h3>

            <div className="space-y-0">
              {features.map((feat, i) => (
                <motion.div
                  key={feat}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  className="py-4 border-b border-sand/60 last:border-b-0"
                >
                  <p className="text-[15px] text-foreground/70">{feat}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
