"use client";

import { motion } from "framer-motion";
import LeafDecor from "./LeafDecor";

export default function Hero() {
  return (
    <section className="relative">
      {/* ============ HERO VIDEO / IMAGE BACKDROP ============ */}
      <div className="relative w-full h-[80vh] lg:h-[92vh] bg-foreground overflow-hidden">
        {/*
          HERO VIDEO SLOT
          ----------------
          Drop a file at /public/hero.mp4 (or hero.webm) and it will auto-load.
          Until then, the gradient + decorative SVG leaves render as a tasteful fallback.
        */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster=""
        >
          <source src="/hero.mp4" type="video/mp4" />
          <source src="/hero.webm" type="video/webm" />
        </video>

        {/* Gradient + decorative fallback layer (always behind content) */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/85 to-accent/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/30" />

        {/* Biophilic decoration framing the hero */}
        <LeafDecor
          variant="monstera"
          className="top-0 left-0 w-[42vw] max-w-[480px] opacity-[0.08] text-white -translate-x-8 -translate-y-6"
        />
        <LeafDecor
          variant="branch"
          flip
          className="bottom-0 right-0 w-[40vw] max-w-[440px] opacity-[0.07] text-white translate-x-6 translate-y-6"
        />

        {/* Hero content overlay */}
        <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col justify-end pb-16 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, x: -22 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <p className="text-accent text-[12px] font-medium tracking-[0.25em] uppercase mb-4">
              Lagos · Nigeria
            </p>

            {/* Cursive accent word above the project name (Habitat signature) */}
            <p className="font-script text-accent text-4xl md:text-5xl lg:text-6xl leading-none mb-3 -ml-1">
              The Residences
            </p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-5"
            >
              Waterfront Living,
              <br />
              Redefined.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.7 }}
              className="text-white/70 text-base lg:text-lg max-w-xl leading-relaxed"
            >
              A low-density, design-led waterfront residence. Premium homes
              built around airflow, light, and landscape.
            </motion.p>
          </motion.div>
        </div>

        {/* WhatsApp floating button */}
        <a
          href="https://wa.me/2348000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-6 right-6 z-20 flex items-center gap-2 px-4 py-2.5 bg-accent text-white text-xs font-semibold rounded-full shadow-lg hover:bg-accent-light transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp
        </a>
      </div>

      {/* ============ PROPERTY INFO BAR (Kota-style metadata) ============ */}
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Leaves framing the metadata bar */}
        <LeafDecor
          variant="leaf"
          className="top-4 -left-6 w-24 text-accent opacity-[0.20] hidden lg:block"
        />
        <div className="py-10 lg:py-14">
          <motion.div
            initial={{ opacity: 0, x: -22 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10 pb-10 border-b border-sand"
          >
            {[
              { label: "Property Type", value: "Residential" },
              { label: "Location", value: "Lekki, Lagos" },
              { label: "Status", value: "Pre-Construction" },
              { label: "Expected Completion", value: "Q4 2027" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-[11px] uppercase tracking-[0.18em] text-foreground/40 mb-1.5">
                  {item.label}
                </p>
                <p className="text-sm font-semibold text-foreground">
                  {item.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
