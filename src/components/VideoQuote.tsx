"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/**
 * VideoQuote — Habitat section 6 pattern.
 *
 * A sticky section with a video/image background. As the user scrolls past,
 * the next section slides up over it — creating a parallax-like reveal.
 *
 * Layout:
 * - position: sticky; top: 0; z-index: 2
 * - background: black #0A0A0A
 * - padding: 100px 60px desktop / 80px 30px mobile
 * - height: 900px desktop / 844px mobile
 *
 * Inner content:
 * - Top-left quote mark "
 * - Bottom-right quote mark "
 * - Center play-overlay button
 *
 * Slot: drop a file at /public/video.mp4 to enable the video background.
 */
export default function VideoQuote() {
  const [playing, setPlaying] = useState(false);

  return (
    <section
      className="w-full relative overflow-hidden"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 2,
        background: "var(--black)",
        padding: "100px 60px",
        height: "min(900px, 90vh)",
      }}
    >
      {/* Video / image background */}
      <div className="absolute inset-0">
        {/* Slot: drop /public/video.mp4 to enable */}
        <video
          className="absolute inset-0 w-full h-full"
          autoPlay={playing}
          muted
          loop
          playsInline
          poster="/images/master-plan.jpg"
          style={{ objectFit: "cover", opacity: 0.4 }}
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 0.4))",
          }}
        />
      </div>

      {/* Top-left opening quote mark */}
      <div className="absolute top-[60px] left-[60px] hidden md:block">
        <h2
          className="text-white"
          style={{
            fontSize: 45,
            fontWeight: 400,
            lineHeight: "45px",
            letterSpacing: "-0.31px",
            opacity: 0.6,
          }}
        >
          &ldquo;
        </h2>
      </div>

      {/* Bottom-right closing quote mark */}
      <div className="absolute bottom-[60px] right-[60px] hidden md:block">
        <h2
          className="text-white text-right"
          style={{
            fontSize: 45,
            fontWeight: 400,
            lineHeight: "45px",
            letterSpacing: "-0.31px",
            opacity: 0.6,
          }}
        >
          &rdquo;
        </h2>
      </div>

      {/* Center play overlay + quote */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center px-6 max-w-3xl"
        >
          {/* Play button */}
          <button
            onClick={() => setPlaying(!playing)}
            className="mx-auto mb-8 flex items-center justify-center w-20 h-20 rounded-full border-2 border-white/40 hover:border-gold hover:bg-gold/10 transition-all group"
            aria-label={playing ? "Pause video" : "Play video"}
          >
            <svg
              className="w-6 h-6 text-white group-hover:text-gold transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              {playing ? (
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              ) : (
                <path d="M8 5v14l11-7z" />
              )}
            </svg>
          </button>

          <p className="text-white/70 text-[11px] tracking-[0.25em] uppercase mb-6">
            Play video
          </p>

          {/* The quote */}
          <p
            className="text-white font-medium"
            style={{
              fontSize: "clamp(22px, 3vw, 36px)",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            &ldquo;This is probably the most important corridor to
            Southern Nigeria&rsquo;s next decade of growth.&rdquo;
          </p>

          <p className="text-white/60 mt-6 text-sm tracking-wider uppercase">
            — Ardent Limited, Development Brief
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          section {
            padding: 80px 30px !important;
            height: 844px !important;
          }
        }
      `}</style>
    </section>
  );
}
