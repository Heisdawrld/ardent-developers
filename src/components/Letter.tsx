"use client";

import { motion } from "framer-motion";

export default function Letter() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] uppercase tracking-[0.15em] text-foreground/40 mb-2"
        >
          Yours sincerely, Ardent...
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="text-3xl lg:text-4xl font-bold tracking-tight mb-10"
        >
          Our Letter to You:
          <br />
          Your Journey Starts Now.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-foreground/60 text-[15px] leading-[1.9] space-y-5 text-left"
        >
          <p>Dear Reader,</p>
          <p>
            The year is 2026, and Lagos is changing faster than most people
            realise. The city is finally building the critical infrastructure to
            unlock large-scale urban development, and the conversations around
            opportunity are shifting fast.
          </p>
          <p>
            You&apos;re likely in your 20s or 30s, thinking seriously about
            building sustainable wealth. You&apos;re reading this at the perfect
            moment. This is one of those rare times when infrastructure, policy,
            and timing align.
          </p>
          <p>
            By investing in a residence at The Residences, you enter a world of
            climate-responsive design, waterfront living, and community-first
            development.
          </p>
          <p>
            Your adventure begins with a single step. Will you take it?
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-10"
        >
          <p className="text-base font-semibold">Ardent Owosho</p>
          <p className="text-sm text-foreground/50">CEO, Ardent Developers</p>
        </motion.div>
      </div>
    </section>
  );
}
