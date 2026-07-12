"use client";

import { motion } from "framer-motion";
import LeafDecor from "./LeafDecor";

const features = [
  {
    number: "01",
    title: "Climate-Responsive Design",
    description:
      "Every unit is designed around airflow, natural light, and the surrounding landscape — ensuring comfort year-round.",
  },
  {
    number: "02",
    title: "Landscape-First Approach",
    description:
      "Buildings positioned to maximise visual connection to outdoor spaces and the waterfront.",
  },
  {
    number: "03",
    title: "Human-Scale Environments",
    description:
      "Projects organised to ensure intimacy and comfort, never overwhelming the people who live there.",
  },
  {
    number: "04",
    title: "Premium Infrastructure",
    description:
      "World-class road networks, underground utilities, and modern systems throughout every development.",
  },
  {
    number: "05",
    title: "Private Amenities",
    description:
      "Exclusive access to gym, swimming pool, waterfront pavilion, and communal courtyard spaces.",
  },
  {
    number: "06",
    title: "Tropical Modern Aesthetic",
    description:
      "A material palette that honours the climate — breeze blocks, deep overhangs, and shaded facades.",
  },
];

export default function Features() {
  return (
    <section className="relative py-20 lg:py-28 bg-accent overflow-hidden">
      <LeafDecor
        variant="monstera"
        className="top-10 -left-10 w-56 text-white opacity-[0.06]"
      />
      <LeafDecor
        variant="branch"
        flip
        className="bottom-10 -right-10 w-64 text-white opacity-[0.18]"
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <motion.p
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-script text-white text-3xl lg:text-4xl leading-none mb-2 -ml-1"
          >
            ecosystem
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.6 }}
            className="text-white/80 text-[11px] uppercase tracking-[0.18em] mb-2 mt-2"
          >
            Our Ecosystem
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4"
          >
            Designed for modern living
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-white/60 text-[15px] leading-relaxed"
          >
            We foster an ecosystem where design and community thrive together.
            Every amenity and feature is carefully crafted to enhance your
            everyday experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feat, i) => (
            <motion.div
              key={feat.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group bg-white/[0.07] backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/[0.12] transition-colors"
            >
              <p className="text-white text-3xl font-bold mb-4">
                {feat.number}
              </p>
              <h3 className="text-white text-base font-semibold mb-2">
                {feat.title}
              </h3>
              <p className="text-white/50 text-[13px] leading-relaxed">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
