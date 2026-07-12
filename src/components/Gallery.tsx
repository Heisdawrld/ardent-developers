"use client";

import { motion } from "framer-motion";
import LeafDecor from "./LeafDecor";

export default function Gallery() {
  return (
    <section id="editorial" className="relative py-16 lg:py-24 bg-warm-gray overflow-hidden">
      <LeafDecor
        variant="branch"
        className="top-10 -right-12 w-72 text-accent opacity-[0.10]"
      />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, x: -22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-script text-accent text-3xl lg:text-4xl leading-none mb-2 -ml-1"
        >
          gallery
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05, duration: 0.6 }}
          className="text-[11px] uppercase tracking-[0.18em] text-foreground/40 mb-2 mt-2"
        >
          Gallery
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, x: -22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold tracking-tight mb-3"
        >
          Project Imagery
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h3 className="text-lg font-semibold mb-2">Gallery coming soon</h3>
          <p className="text-sm text-foreground/50 max-w-lg">
            Renders, site photography, and architectural visuals will be
            published as the project progresses.
          </p>
        </motion.div>

        {/* Gallery Grid Placeholder */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className={`aspect-[4/3] rounded-lg flex items-center justify-center bg-gradient-to-br ${
                i === 1
                  ? "md:col-span-2 md:aspect-[8/3] from-beige-soft to-cream"
                  : i % 3 === 0
                  ? "from-beige to-accent-muted"
                  : i % 3 === 2
                  ? "from-cream to-accent-muted"
                  : "from-beige to-cream"
              }`}
            >
              <p className="text-[11px] text-foreground/30 uppercase tracking-wider">
                Image {i}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <a
            href="#register"
            className="text-sm text-accent font-semibold hover:underline"
          >
            Register for Updates &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
