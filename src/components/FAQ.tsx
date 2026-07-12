"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LeafDecor from "./LeafDecor";

const faqs = [
  {
    question: "What types of properties does Ardent Limited develop?",
    answer:
      "We specialise in residential and mixed-use developments, focusing on design-led projects that prioritise climate responsiveness, natural light, and landscape integration.",
  },
  {
    question: "Where are your projects located?",
    answer:
      "Our current portfolio is focused on prime locations across Lagos, Nigeria — including Ikoyi, Lekki, and Epe. We selectively choose sites with strong infrastructure and long-term growth potential.",
  },
  {
    question: "How can I register interest in a project?",
    answer:
      "You can register interest through our website by submitting your email address, or by contacting us directly via WhatsApp or our contact form. We'll keep you updated on pricing, availability, and exclusive access.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes, we offer flexible payment plans tailored to each project. Specific details are shared with registered interested parties once pricing is released.",
  },
  {
    question: "When will your projects be completed?",
    answer:
      "Completion timelines vary by project. Our current developments are in pre-construction or planning phases, with expected delivery dates shared upon registration.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <LeafDecor
        variant="leaf"
        className="top-12 -left-8 w-32 text-leaf opacity-[0.10]"
      />
      <LeafDecor
        variant="leaf"
        flip
        className="bottom-12 -right-8 w-32 text-leaf opacity-[0.10]"
      />
      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-script text-leaf text-3xl lg:text-4xl leading-none mb-2"
          >
            faq
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.6 }}
            className="text-[11px] uppercase tracking-[0.18em] text-foreground/40 mb-2 mt-2"
          >
            FAQ
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold tracking-tight"
          >
            Some frequently asked questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-foreground/50 text-sm"
          >
            We answered them so you don&apos;t have to ask.
          </motion.p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="border border-sand rounded-xl overflow-hidden hover:border-leaf/50 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-mint/40 transition-colors"
              >
                <span className="text-sm font-medium pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-4 h-4 text-leaf shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-sm text-foreground/55 leading-relaxed border-t border-sand/60 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
