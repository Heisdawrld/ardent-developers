"use client";

import { motion } from "framer-motion";

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

export default function Location() {
  return (
    <section className="py-16 lg:py-24 bg-warm-gray">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] uppercase tracking-[0.15em] text-foreground/40 mb-2"
        >
          Location
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="text-3xl lg:text-4xl font-bold tracking-tight mb-4"
        >
          Lekki, Lagos, Nigeria
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-foreground/60 text-[15px] leading-relaxed max-w-2xl mb-10"
        >
          Lekki is one of Lagos&apos;s fastest-growing corridors, with premium
          infrastructure, new road networks, and world-class developments
          reshaping the landscape. Close to the action, but removed from the
          chaos.
        </motion.p>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full h-64 lg:h-80 bg-sand/60 rounded-xl flex items-center justify-center mb-10"
        >
          <div className="text-center">
            <svg
              className="w-10 h-10 mx-auto mb-3 text-foreground/20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <p className="text-xs text-foreground/30 uppercase tracking-wider">
              Map Coming Soon
            </p>
          </div>
        </motion.div>

        {/* Distance boxes - like Compound */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
          {distances.map((d, i) => (
            <motion.div
              key={d.place}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-xl p-5 text-center border border-sand/60"
            >
              <p className="text-2xl font-bold text-accent mb-1">{d.time}</p>
              <p className="text-[13px] text-foreground/50">{d.place}</p>
            </motion.div>
          ))}
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {keyFeatures.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-white rounded-xl p-6 border border-sand/60"
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
