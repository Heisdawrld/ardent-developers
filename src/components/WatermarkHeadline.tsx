"use client";

import { motion } from "framer-motion";

interface WatermarkHeadlineProps {
  tag: string;
  /** Each line of the big translucent headline */
  lines: string[];
}

/**
 * WatermarkHeadline — Habitat section 5 pattern.
 *
 * A sticky translucent big-text headline that scrolls past the viewport.
 * The headline text is rendered at 75px (desktop) / 36px (mobile), with
 * color rgba(10, 10, 10, 0.18) — a very pale black watermark.
 *
 * Above the headline sits a small tag-chip (e.g. "Infrastructure").
 *
 * Layout: column, gap 20px, padding 60px desktop / 0 mobile.
 */
export default function WatermarkHeadline({
  tag,
  lines,
}: WatermarkHeadlineProps) {
  return (
    <section
      className="w-full"
      style={{
        padding: "60px 60px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[1400px] mx-auto flex flex-col"
        style={{ gap: 30 }}
      >
        {/* Tag chip */}
        <div className="tag-chip self-start">
          <span>{tag}</span>
        </div>

        {/* Sticky translucent headline */}
        <h2 className="watermark-headline">
          {lines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h2>
      </motion.div>

      <style jsx>{`
        @media (max-width: 767px) {
          section {
            padding: 30px !important;
          }
        }
      `}</style>
    </section>
  );
}
