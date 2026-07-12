"use client";

import { motion } from "framer-motion";
import LeafDecor from "./LeafDecor";

export default function Overview() {
  return (
    <section
      id="overview"
      className="w-full relative"
      style={{
        padding: "84px 60px 50px",
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div
          className="flex flex-col md:flex-row md:justify-between md:items-stretch"
          style={{ gap: 10 }}
        >
          {/* LEFT — copy */}
          <motion.div
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:justify-between"
            style={{
              gap: 100,
              maxWidth: 793,
              flex: 1,
            }}
          >
            <div>
              {/* Eyebrow */}
              <div className="tag-chip inline-flex mb-6">
                <span>The Vision</span>
              </div>

              {/* Desktop-only script accent */}
              <p className="font-script desktop-only text-gold text-4xl lg:text-5xl leading-none mb-4">
                introducing
              </p>

              {/* Section h2 — Habitat 50px desktop / 28px mobile */}
              <h2
                className="text-ink font-semibold mb-8"
                style={{
                  fontSize: "clamp(28px, 4.5vw, 50px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                Ardent Limited is set to be one of Nigeria&rsquo;s most
                exciting development brands this decade — a bold new
                landmark estate combining design-led residences with
                thoughtfully landscaped grounds.
              </h2>

              {/* Lead paragraph — Habitat 22px desktop / 15px mobile */}
              <p
                className="text-body"
                style={{
                  fontSize: "clamp(15px, 1.7vw, 22px)",
                  lineHeight: 1.5,
                  maxWidth: 700,
                }}
              >
                Just 20 minutes from Lekki Free Zone by 2028, this
                isn&rsquo;t another cookie-cutter estate — it&rsquo;s the
                rare kind of community that gets designed before it gets
                built. Every plot, every road, every amenity is planned
                with intention.
              </p>
            </div>

            {/* Lower metadata block */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 mt-8 border-t border-line">
              {[
                { label: "Location", value: "Lekki Corridor, Lagos" },
                { label: "Phase 1", value: "25 acres" },
                { label: "Expected Completion", value: "Q4 2027" },
                { label: "Plot Sizes", value: "300–1000 sqm" },
                { label: "Density", value: "Low" },
                { label: "Title", value: "C of O" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-muted mb-1.5">
                    {item.label}
                  </p>
                  <p className="text-sm font-semibold text-ink">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — side leaf decoration (Habitat pattern) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:flex justify-end items-start"
            style={{ width: 197, flexShrink: 0 }}
          >
            <LeafDecor
              variant="leaf"
              className="text-gold opacity-80"
              style={{ width: 197, height: "auto" }}
            />
          </motion.div>
        </div>
      </div>

      {/* Mobile padding override */}
      <style jsx>{`
        @media (max-width: 767px) {
          section {
            padding: 50px 30px !important;
          }
        }
      `}</style>
    </section>
  );
}
