"use client";

import { motion } from "framer-motion";

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
    <section className="py-16 lg:py-24 bg-cream">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] uppercase tracking-[0.15em] text-foreground/40 mb-2"
        >
          Communal Facilities & Amenities
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
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
          <div className="grid grid-cols-2 py-3 px-6 bg-sand/40 border-b border-sand">
            <p className="text-[10px] uppercase tracking-[0.15em] text-foreground/40">
              Facility
            </p>
            <p className="text-[10px] uppercase tracking-[0.15em] text-foreground/40">
              Category
            </p>
          </div>

          {/* Rows */}
          {amenities.map((item, i) => (
            <div
              key={item.facility}
              className={`grid grid-cols-2 py-4 px-6 ${
                i < amenities.length - 1 ? "border-b border-sand/60" : ""
              }`}
            >
              <p className="text-sm font-medium">{item.facility}</p>
              <p className="text-sm text-foreground/50">{item.category}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
