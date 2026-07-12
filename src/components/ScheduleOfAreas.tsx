"use client";

import { motion } from "framer-motion";

const units = [
  {
    type: "3-Bedroom Apartments",
    units: 6,
    beds: 3,
    block: "Block B | G+4 Apartment Block",
    size: "~150 sqm",
    features: "Cross-ventilated layout · Dedicated BQ · Generous balconies",
    status: "Pre-Construction",
  },
  {
    type: "4-Bedroom Maisonettes",
    units: 4,
    beds: 4,
    block: "Block B | G+4 Apartment Block",
    size: "~250 sqm",
    features:
      "Dual-level living · Dedicated BQ · Private rooftop garden · Private balconies",
    status: "Pre-Construction",
  },
  {
    type: "4-Bedroom Terraces",
    units: 4,
    beds: 4,
    block: "Block A & C | G+3 Terrace Block",
    size: "~322 sqm",
    features:
      "Private garden · 2 × Dedicated BQ · Private rooftop terrace · Full-floor living",
    status: "Pre-Construction",
  },
];

export default function ScheduleOfAreas() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] uppercase tracking-[0.15em] text-foreground/40 mb-2"
        >
          Schedule of Areas
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="text-3xl lg:text-4xl font-bold tracking-tight mb-12"
        >
          Three typologies, one standard
        </motion.h2>

        {/* Cards for each unit type */}
        <div className="space-y-4 mb-12">
          {units.map((unit, i) => (
            <motion.div
              key={unit.type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="border border-sand rounded-xl p-6 lg:p-8"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-lg font-semibold mb-1">{unit.type}</h3>
                  <p className="text-[13px] text-foreground/40">{unit.block}</p>
                </div>
                <span className="inline-flex px-3 py-1 bg-accent-muted text-accent text-[11px] font-medium rounded-full w-fit">
                  {unit.status}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4 py-4 border-t border-sand/60">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-foreground/35 mb-0.5">
                    Units
                  </p>
                  <p className="text-sm font-medium">{unit.units}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-foreground/35 mb-0.5">
                    Bed
                  </p>
                  <p className="text-sm font-medium">{unit.beds}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-foreground/35 mb-0.5">
                    Size
                  </p>
                  <p className="text-sm font-medium">{unit.size}</p>
                </div>
              </div>

              <p className="text-[13px] text-foreground/50">{unit.features}</p>
            </motion.div>
          ))}
        </div>

        {/* Summary stats */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-6 border-y border-sand text-center"
        >
          <p className="text-sm text-foreground/50">
            <span className="font-medium text-foreground/70">
              24 total residences
            </span>{" "}
            &nbsp;|&nbsp;{" "}
            <span className="font-medium text-foreground/70">
              3 residential blocks
            </span>{" "}
            &nbsp;|&nbsp;{" "}
            <span className="font-medium text-foreground/70">
              150 – 322 sqm
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
