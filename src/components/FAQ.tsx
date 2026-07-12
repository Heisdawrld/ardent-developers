"use client";

import { motion } from "framer-motion";
import LeafDecor from "./LeafDecor";

const FAQS = [
  {
    q: "How long until the estate is fully developed?",
    a: "Phase 1 (25 acres) is underway now, with first handovers expected by Q4 2027. Full community live — including the farmers&rsquo; market and commercial avenue — is targeted for 2028, in step with the Lekki Deep Seaport access road completion.",
  },
  {
    q: "Can I build my own home on the plot?",
    a: "Yes, you can. Our construction team also provides advisory and construction support, and you&rsquo;re free to use your own architect and builder — subject to the estate&rsquo;s design guidelines to protect everyone&rsquo;s investment.",
  },
  {
    q: "What happens after I reserve a plot?",
    a: "After you fill and submit the subscription form, you&rsquo;ll get a Receipt of Payment, followed by your Allocation Letter. Survey documents and title perfection follow on a clear schedule tied to your payment plan.",
  },
  {
    q: "What&rsquo;s included in the estate besides plots?",
    a: "We are developing 90 acres of vegetables and ephemeral fast-moving crops alongside the residential plots — plus a 10-acre farmers&rsquo; market, central water system, perimeter fencing, intelligent drainage, and beautified landscaping.",
  },
  {
    q: "Are there additional fees beyond the plot price?",
    a: "Yes — payment for Survey documents and title perfection when due. These are statutory and infrastructure-related; we&rsquo;ll give you a clear schedule before you commit.",
  },
  {
    q: "What&rsquo;s the title on the land?",
    a: "The estate carries a Certificate of Occupancy (C of O). Each plot buyer receives a registered Survey Plan and Deed of Assignment as part of the documentation package.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faqs"
      className="w-full relative"
      style={{ padding: "220px 0 0" }}
    >
      {/* Side leaf decorations (Habitat pattern — img-leaf absolute positioned) */}
      <div
        className="absolute top-0 left-0 right-0 hidden md:flex justify-between z-0 pointer-events-none"
        style={{ height: 382 }}
      >
        <LeafDecor
          variant="leaf"
          className="text-gold opacity-90"
          style={{ width: 197, height: "auto" }}
        />
        <LeafDecor
          variant="leaf"
          flip
          className="text-gold opacity-90"
          style={{ width: 197, height: "auto" }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Head container — Habitat pattern (centered intro) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto text-center mb-16"
          style={{ maxWidth: 880, padding: "0 30px" }}
        >
          <h3
            className="text-ink font-semibold mb-4"
            style={{
              fontSize: "clamp(20px, 2.5vw, 34px)",
              lineHeight: 1.2,
              letterSpacing: "0.4px",
            }}
          >
            Some frequently asked questions about our project. We answered
            them so you don&rsquo;t have to ask.
          </h3>
          <p
            className="text-muted"
            style={{ fontSize: "clamp(13px, 1vw, 16px)" }}
          >
            Still have questions? WhatsApp us anytime.
          </p>
        </motion.div>

        {/* FAQ list — Habitat faqs container (flex column, gap 25px, padding 0 30px) */}
        <div
          className="flex flex-col"
          style={{ gap: 25, padding: "0 30px" }}
        >
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="p-6 md:p-8"
              style={{
                background: "var(--cream)",
                borderRadius: 24,
                border: "1px solid var(--line)",
              }}
            >
              <h4
                className="text-ink font-semibold mb-3"
                style={{
                  fontSize: "clamp(15px, 1.4vw, 22px)",
                  lineHeight: 1.3,
                  letterSpacing: "-0.26px",
                }}
              >
                {faq.q}
              </h4>
              <p
                className="text-body"
                style={{
                  fontSize: "clamp(13px, 1.1vw, 17px)",
                  lineHeight: "22px",
                  maxWidth: 900,
                }}
                dangerouslySetInnerHTML={{ __html: faq.a }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          section {
            padding: 100px 0 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
