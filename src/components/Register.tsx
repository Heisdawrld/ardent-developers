"use client";

import { motion } from "framer-motion";
import LeafDecor from "./LeafDecor";

export default function Register() {
  return (
    <section
      id="register"
      className="relative py-20 lg:py-28 bg-cream overflow-hidden"
    >
      <LeafDecor
        variant="monstera"
        className="top-0 right-10 w-48 text-accent opacity-[0.10]"
      />
      <LeafDecor
        variant="leaf"
        flip
        className="bottom-0 -left-8 w-44 text-accent opacity-[0.06]"
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, x: -22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-script text-accent text-3xl lg:text-4xl leading-none mb-6 -ml-1"
        >
          register now
        </motion.p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Pricing / CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-accent rounded-2xl p-8 lg:p-10 text-white relative overflow-hidden"
          >
            <LeafDecor
              variant="leaf"
              className="-top-4 -right-4 w-32 text-white opacity-[0.1]"
            />

            <p className="text-cream text-[11px] uppercase tracking-[0.18em] mb-1">
              Launch Phase
            </p>
            <h3 className="text-2xl lg:text-3xl font-bold mb-6">
              Register Your Interest
            </h3>

            <div className="space-y-3 mb-8">
              {[
                "Prime waterfront location",
                "Climate-responsive architecture",
                "Flexible payment plans available",
                "Exclusive early access pricing",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <svg
                    className="w-4 h-4 text-white/50 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="text-sm text-white/80">{item}</p>
                </div>
              ))}
            </div>

            <div className="flex items-baseline gap-2 mb-8">
              <p className="text-2xl font-medium text-white/70">From</p>
              <p className="text-5xl font-bold text-gold">₦45M</p>
            </div>

            <a
              href="#contact"
              className="block w-full py-3.5 bg-cream text-foreground text-sm font-bold rounded-full text-center hover:bg-cream/90 transition-colors"
            >
              Grab the Offer
            </a>
          </motion.div>

          {/* Right - Brochure Download */}
          <motion.div
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold tracking-tight mb-4">
              Download Brochure
            </h3>
            <p className="text-foreground/60 text-[15px] leading-relaxed mb-8">
              You&apos;ll also get access to:
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Updated unit prices and payment plans",
                "Information about Land Title and documentation",
                "Floor plans and architectural details",
                "Other opportunities to invest in this project",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="w-4 h-4 text-accent mt-0.5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="text-sm text-foreground/60">{item}</p>
                </li>
              ))}
            </ul>

            <p className="text-sm text-foreground/50 mb-4">
              Drop your email and we&apos;ll send you the project brochure right
              away.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-5 py-3.5 bg-white border border-sand rounded-full text-sm focus:outline-none focus:border-accent transition-colors"
              />
              <button className="px-8 py-3.5 bg-accent text-white text-sm font-semibold rounded-full hover:bg-accent-light transition-colors whitespace-nowrap">
                Download Now
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
