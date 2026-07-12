"use client";

import { motion } from "framer-motion";
import LeafDecor from "./LeafDecor";

const amenities = [
  { facility: "Utilities Building", category: "Infrastructure" },
  { facility: "Gate House", category: "Security" },
  { facility: "Reception / Facilities Office", category: "Admin" },
  { facility: "Driver's Lounge", category: "Service" },
  { facility: "Waterfront Pavilion", category: "Leisure" },
  { facility: "Gym", category: "Fitness" },
  { facility: "Children's Playground", category: "Leisure" },
  { facility: "Swimming Pool", category: "Leisure" },
  { facility: "Communal Courtyard", category: "Landscape" },
  { facility: "Waterfront Garden Path", category: "Landscape" },
];

export default function Amenities() {
  return (
    <section className="relative py-16 lg:py-24 bg-cream overflow-hidden">
      <LeafDecor
        variant="drop"
        className="top-8 right-6 w-16 text-accent opacity-[0.20]"
      />
      <LeafDecor
        variant="potted"
        className="bottom-12 -left-10 w-28 text-accent opacity-[0.08]"
      />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, x: -22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-script text-accent text-3xl lg:text-4xl leading-none mb-2 -ml-1"
        >
          amenities
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05, duration: 0.6 }}
          className="text-[11px] uppercase tracking-[0.18em] text-foreground/40 mb-2 mt-2"
        >
          Communal Facilities & Amenities
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, x: -22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold tracking-tight mb-10"
        >
          Every detail, considered
        </motion.h2>

        {/* Amenities Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-sand rounded-xl overflow-hidden"
        >
          {/* Header */}
          <div className="grid grid-cols-2 py-3 px-6 bg-accent-muted/50 border-b border-sand">
            <p className="text-[10px] uppercase tracking-[0.18em] text-accent/70">
              Facility
            </p>
            <p className="text-[10px] uppercase tracking-[0.18em] text-accent/70">
              Category
            </p>
          </div>

          {/* Rows */}
          {amenities.map((item, i) => (
            <div
              key={item.facility}
              className={`grid grid-cols-2 py-4 px-6 hover:bg-cream transition-colors ${
                i < amenities.length - 1 ? "border-b border-sand/60" : ""
              }`}
            >
              <p className="text-sm font-semibold">{item.facility}</p>
              <p className="text-sm text-foreground/50">{item.category}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
