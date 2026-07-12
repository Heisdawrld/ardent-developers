"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-foreground relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-light/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent-light text-sm font-medium tracking-widest uppercase mb-6"
        >
          Register Interest
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-background leading-tight"
        >
          Be First to Know
          <br />
          When We Launch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-background/60 max-w-xl mx-auto leading-relaxed"
        >
          Join our priority list to receive exclusive updates, pricing, and early
          access to our developments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Your email address"
            className="w-full sm:flex-1 px-5 py-3.5 bg-background/10 border border-background/20 rounded-full text-sm text-background placeholder:text-background/40 focus:outline-none focus:border-accent-light transition-colors"
          />
          <button className="w-full sm:w-auto px-8 py-3.5 bg-accent text-white text-sm font-medium rounded-full hover:bg-accent-light transition-colors whitespace-nowrap">
            Register
          </button>
        </motion.div>
      </div>
    </section>
  );
}
