"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Total Units", value: "24" },
  { label: "Blocks", value: "3" },
  {
    label: "Configuration",
    value: "1 × G+4 Apartment Block · 2 × G+3 Terrace Blocks",
  },
];

export default function Overview() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Overview */}
        <div className="max-w-3xl mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold tracking-tight mb-6"
          >
            The standard for urban living in Lagos
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/60 text-[15px] leading-[1.8] space-y-4"
          >
            <p>
              The Residences is a waterfront residential development in Lekki,
              Lagos — a benchmark for climate-responsive, design-conscious urban
              living. The scheme is organised across three primary blocks,
              ensuring a human-scale environment.
            </p>
            <p>
              The project is designed around a landscape-first site strategy,
              with the building positioned to maximise visual connection to
              outdoor spaces and waterfront. Major design intent also focuses on
              sense of arrival, facade treatment, and private amenities.
            </p>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-6 lg:gap-10 py-8 border-y border-sand"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-[11px] uppercase tracking-[0.15em] text-foreground/40 mb-1.5">
                {stat.label}
              </p>
              <p className="text-sm font-medium leading-snug">{stat.value}</p>
            </div>
          ))}
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex gap-6"
        >
          <span className="text-sm text-foreground/40">Brochure Coming Soon</span>
          <span className="text-sm text-foreground/40">
            Floor Plans Coming Soon
          </span>
        </motion.div>
      </div>
    </section>
  );
}
