"use client";

import { motion } from "framer-motion";

interface ImageStripProps {
  src: string;
  alt: string;
  caption?: string;
  /** Optional overlay text shown bottom-left of the image */
  overlay?: {
    eyebrow: string;
    title: string;
  };
}

/**
 * ImageStrip — Habitat-style full-bleed image card with 24px border radius.
 * Used between sections as a visual breather / scene-setter.
 *
 * Habitat section 2 & 4 pattern: padding 30px 20px 20px (desktop) / 10px (mobile)
 * Image: 1400x1334 with border-radius 24px, object-fit cover.
 */
export default function ImageStrip({ src, alt, caption, overlay }: ImageStripProps) {
  return (
    <section
      className="w-full relative"
      style={{
        padding: "30px 20px 20px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-[1400px] mx-auto"
      >
        <img
          src={src}
          alt={alt}
          className="w-full"
          style={{
            borderRadius: 24,
            objectFit: "cover",
            display: "block",
            maxHeight: "85vh",
          }}
        />

        {/* Optional overlay text — Habitat pattern (txt-name sticky on top of image) */}
        {overlay && (
          <div
            className="absolute top-0 left-0 right-0 p-[40px] flex flex-col"
            style={{ gap: 8 }}
          >
            <p className="text-white/80 text-[11px] tracking-[0.25em] uppercase">
              {overlay.eyebrow}
            </p>
            <h3
              className="text-white font-semibold"
              style={{
                fontSize: "clamp(28px, 4vw, 45px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              {overlay.title}
            </h3>
          </div>
        )}

        {/* Optional caption below image */}
        {caption && (
          <p
            className="text-muted text-sm mt-4 text-center"
            style={{ fontSize: "clamp(13px, 1vw, 16px)" }}
          >
            {caption}
          </p>
        )}
      </motion.div>

      <style jsx>{`
        @media (max-width: 767px) {
          section {
            padding: 10px !important;
          }
        }
      `}</style>
    </section>
  );
}
