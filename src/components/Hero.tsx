"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "min(860px, 92vh)" }}
    >
      {/* ============ HERO IMAGE BACKGROUND ============ */}
      <div className="absolute inset-0">
        {/* Image (or video when client provides one) */}
        {/* Slot: drop a file at /public/hero.mp4 to enable video background */}
        <img
          src="/images/hero-poster.jpg"
          alt="Ardent Limited luxury estate"
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: "cover" }}
        />
        {/* 52% black overlay — Habitat pattern for white-text legibility */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(10, 10, 10, 0.52)" }}
        />
        {/* Subtle gold radial accent at bottom-left for warmth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 100%, rgba(230, 200, 140, 0.18), transparent 50%)",
          }}
        />
      </div>

      {/* ============ HERO CONTENT ============ */}
      <div
        className="relative z-10 w-full h-full mx-auto flex flex-col justify-between"
        style={{
          maxWidth: 1440,
          padding: "30px 20px",
        }}
      >
        {/* Top spacer (header floats above) */}
        <div className="hidden md:block h-[80px]" />

        {/* Bottom-aligned content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          {/* Eyebrow / brand mark */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-white text-[12px] md:text-[13px] font-medium tracking-[0.25em] uppercase mb-5"
            style={{ letterSpacing: "0.25em" }}
          >
            Ardent Limited · Lagos, Nigeria
          </motion.p>

          {/* Desktop-only script accent (Habitat pattern) */}
          <p className="font-script desktop-only text-gold text-5xl lg:text-6xl leading-none mb-3 -ml-1">
            Redefining Modern Living
          </p>

          {/* Main hero h1 — Habitat 70px desktop / 35px mobile */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.8 }}
            className="text-white font-semibold mb-6"
            style={{
              fontSize: "clamp(35px, 6vw, 70px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Bold, design-led
            <br />
            communities, built
            <br />
            for the future.
          </motion.h1>

          {/* Tagline — Habitat 22px desktop / 15px mobile */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.7 }}
            className="text-white/90 mb-10 max-w-2xl"
            style={{
              fontSize: "clamp(15px, 1.7vw, 22px)",
              fontWeight: 600,
              lineHeight: 1.4,
            }}
          >
            A next-generation Lagos real estate development brand crafting
            premium, considered residences — where architecture, landscape,
            and lifestyle meet.
          </motion.p>

          {/* CTA pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a href="#pricing" className="btn-pill">
              <span className="btn-txt">Reserve Your Plot</span>
              <span className="btn-round">
                {/* Right-arrow icon */}
                <svg
                  className="arrow arrow-primary"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.2071 8.7071C16.5976 8.31658 16.5976 7.68341 16.2071 7.29289L9.84315 0.928931C9.45262 0.538406 8.81946 0.538406 8.42893 0.928931C8.03841 1.31946 8.03841 1.95262 8.42893 2.34314L14.0858 8L8.42893 13.6569C8.03841 14.0474 8.03841 14.6805 8.42893 15.0711C8.81946 15.4616 9.45262 15.4616 9.84315 15.0711L16.2071 8.7071ZM0.5 8L0.5 9L15.5 9L15.5 8L15.5 7L0.5 7L0.5 8Z"
                    fill="#0A0A0A"
                  />
                </svg>
                <svg
                  className="arrow arrow-secondary"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.2071 8.7071C16.5976 8.31658 16.5976 7.68341 16.2071 7.29289L9.84315 0.928931C9.45262 0.538406 8.81946 0.538406 8.42893 0.928931C8.03841 1.31946 8.03841 1.95262 8.42893 2.34314L14.0858 8L8.42893 13.6569C8.03841 14.0474 8.03841 14.6805 8.42893 15.0711C8.81946 15.4616 9.45262 15.4616 9.84315 15.0711L16.2071 8.7071ZM0.5 8L0.5 9L15.5 9L15.5 8L15.5 7L0.5 7L0.5 8Z"
                    fill="#0A0A0A"
                  />
                </svg>
              </span>
            </a>

            {/* WhatsApp pill (outline variant) */}
            <a
              href="https://wa.me/2348000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill btn-pill-outline"
            >
              <span className="btn-txt">Chat on WhatsApp</span>
              <span className="btn-round">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="#0A0A0A"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* ============ SCROLL HINT (subtle, bottom-center) ============ */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2">
        <span className="text-white/50 text-[11px] tracking-[0.2em] uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}
