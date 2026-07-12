"use client";

import { motion } from "framer-motion";
import LeafDecor from "./LeafDecor";

const INCLUSIONS = [
  "Vibrant Farmers&rsquo; Market access",
  "Community Power Supply",
  "Perimeter Fencing & Gatehouse",
  "Intelligent Drainage System",
  "Beautiful Landscaping",
  "Survey & Title Documentation",
];

export default function Register() {
  return (
    <section
      id="pricing"
      className="w-full relative"
      style={{
        background: "var(--cream)",
        padding: "120px 20px 20px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[1400px] mx-auto flex flex-col"
        style={{ gap: 60 }}
      >
        {/* Head content */}
        <div className="px-0 md:px-10">
          <div className="tag-chip inline-flex mb-6">
            <span>Pricing</span>
          </div>

          {/* Desktop-only script accent */}
          <p className="font-script desktop-only text-gold text-4xl lg:text-5xl leading-none mb-3">
            reserve your plot
          </p>

          <h1
            className="text-ink font-semibold mb-6"
            style={{
              fontSize: "clamp(35px, 5.5vw, 70px)",
              lineHeight: "75px",
              letterSpacing: "-0.03em",
            }}
          >
            Secure Your Plot(s)
          </h1>
          <p
            className="text-body"
            style={{
              fontSize: "clamp(15px, 1.4vw, 20px)",
              maxWidth: 700,
              lineHeight: 1.5,
            }}
          >
            Phase 1 spanning 25 acres is now open for reservation.
            Reserve your plots and start your journey with Ardent today
            — the launch sale is ongoing.
          </p>
        </div>

        {/* Container with image (the big card) */}
        <div
          className="relative flex flex-col md:flex-row mx-0 md:mx-0"
          style={{ gap: 20 }}
        >
          {/* Decorative tape SVGs at the corners (Habitat pattern) */}
          <div
            className="absolute -top-2 left-4 md:left-12 hidden md:block"
            aria-hidden
          >
            <svg width="20" height="55" viewBox="0 0 20 55" fill="none">
              <rect width="20" height="55" fill="var(--gold)" />
              <rect y="4" width="20" height="1" fill="var(--black)" opacity="0.2" />
              <rect y="50" width="20" height="1" fill="var(--black)" opacity="0.2" />
            </svg>
          </div>
          <div
            className="absolute -top-2 right-4 md:right-12 hidden md:block"
            aria-hidden
          >
            <svg width="20" height="55" viewBox="0 0 20 55" fill="none">
              <rect width="20" height="55" fill="var(--gold)" />
              <rect y="4" width="20" height="1" fill="var(--black)" opacity="0.2" />
              <rect y="50" width="20" height="1" fill="var(--black)" opacity="0.2" />
            </svg>
          </div>

          {/* Decorative gold leaf at top-left corner (Habitat ad-top-leaf) */}
          <div
            className="absolute -top-6 -left-6 hidden md:block opacity-90"
            aria-hidden
          >
            <LeafDecor
              variant="leaf"
              className="text-gold"
              style={{ width: 120, height: "auto", transform: "rotate(-25deg)" }}
            />
          </div>

          {/* Decorative gold leaf at bottom-right corner (Habitat ad-bottom-leaf) */}
          <div
            className="absolute -bottom-6 -right-6 hidden md:block opacity-90"
            aria-hidden
          >
            <LeafDecor
              variant="leaf"
              flip
              className="text-gold"
              style={{ width: 120, height: "auto", transform: "rotate(-25deg)" }}
            />
          </div>

          {/* ============ LEFT: Price card (dark) ============ */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 p-8 md:p-12 flex flex-col justify-between"
            style={{
              background: "var(--black)",
              borderRadius: 24,
              color: "var(--white)",
              minHeight: 400,
            }}
          >
            <div>
              <h2
                className="font-semibold mb-4"
                style={{
                  fontSize: "clamp(28px, 3vw, 40px)",
                  lineHeight: "35px",
                  letterSpacing: "-0.03em",
                }}
              >
                LAUNCH SALE ONGOING
              </h2>
              <p
                className="mb-8"
                style={{
                  fontSize: "clamp(15px, 1.4vw, 22px)",
                  lineHeight: 1.4,
                  maxWidth: 350,
                  color: "rgba(255, 255, 255, 0.7)",
                }}
              >
                You get free 50 cocoa trees per plot; 300 cocoa trees per
                acre.
              </p>
            </div>

            <div>
              <p
                className="text-gold font-semibold"
                style={{
                  fontSize: "clamp(28px, 3.2vw, 40px)",
                  lineHeight: "45px",
                  letterSpacing: "-0.02em",
                }}
              >
                NGN 2.95 Million
              </p>
              <p className="text-white/60 text-sm mt-1">per plot</p>

              <a
                href="https://wa.me/2348000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill mt-8 inline-flex"
                style={{ background: "var(--gold)" }}
              >
                <span className="btn-txt">Reserve Your Plot</span>
                <span className="btn-round" style={{ background: "var(--black)" }}>
                  <svg
                    className="arrow arrow-primary"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.2071 8.7071C16.5976 8.31658 16.5976 7.68341 16.2071 7.29289L9.84315 0.928931C9.45262 0.538406 8.81946 0.538406 8.42893 0.928931C8.03841 1.31946 8.03841 1.95262 8.42893 2.34314L14.0858 8L8.42893 13.6569C8.03841 14.0474 8.03841 14.6805 8.42893 15.0711C8.81946 15.4616 9.45262 15.4616 9.84315 15.0711L16.2071 8.7071ZM0.5 8L0.5 9L15.5 9L15.5 8L15.5 7L0.5 7L0.5 8Z"
                      fill="var(--gold)"
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
                      fill="var(--gold)"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </motion.div>

          {/* ============ RIGHT: Brochure card (dark, with inclusions list) ============ */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 p-8 md:p-12"
            style={{
              background: "var(--black)",
              borderRadius: 24,
              color: "var(--white)",
            }}
          >
            <h2
              className="font-semibold mb-8"
              style={{
                fontSize: "clamp(24px, 2.8vw, 40px)",
                lineHeight: "45px",
                letterSpacing: "-0.04em",
              }}
            >
              Download Brochure
            </h2>

            <h4
              className="font-semibold mb-6"
              style={{
                fontSize: "clamp(15px, 1.4vw, 22px)",
                lineHeight: "23px",
                letterSpacing: "-0.26px",
                color: "var(--cream)",
              }}
            >
              You&rsquo;ll also get access to:
            </h4>

            <ul className="flex flex-col mb-8" style={{ gap: 12 }}>
              {INCLUSIONS.map((item) => (
                <li
                  key={item}
                  className="flex items-start"
                  style={{ gap: 12 }}
                >
                  {/* Gold check icon */}
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ background: "var(--gold)" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="var(--black)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span
                    className="text-white/90"
                    style={{
                      fontSize: "clamp(15px, 1.2vw, 17px)",
                      lineHeight: "22px",
                    }}
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="btn-pill"
              style={{ background: "var(--cream)" }}
            >
              <span className="btn-txt" style={{ color: "var(--black)" }}>
                Download Now!
              </span>
              <span className="btn-round" style={{ background: "var(--gold)" }}>
                <svg
                  className="arrow arrow-primary"
                  viewBox="0 0 12 13"
                  width="12"
                  height="13"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.99262 12.5303C5.28551 12.8232 5.76039 12.8232 6.05328 12.5303L10.8263 7.75736C11.1191 7.46447 11.1191 6.98959 10.8263 6.6967C10.5334 6.4038 10.0585 6.4038 9.76559 6.6967L5.52295 10.9393L1.28031 6.6967C0.987416 6.40381 0.512543 6.40381 0.219649 6.6967C-0.0732439 6.98959 -0.0732438 7.46447 0.21965 7.75736L4.99262 12.5303ZM5.52295 0L4.77295 1.22392e-07L4.77295 12L5.52295 12L6.27295 12L6.27295 -1.22392e-07L5.52295 0Z"
                    fill="var(--black)"
                  />
                </svg>
                <svg
                  className="arrow arrow-secondary"
                  viewBox="0 0 12 13"
                  width="12"
                  height="13"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.99262 12.5303C5.28551 12.8232 5.76039 12.8232 6.05328 12.5303L10.8263 7.75736C11.1191 7.46447 11.1191 6.98959 10.8263 6.6967C10.5334 6.4038 10.0585 6.4038 9.76559 6.6967L5.52295 10.9393L1.28031 6.6967C0.987416 6.40381 0.512543 6.40381 0.219649 6.6967C-0.0732439 6.98959 -0.0732438 7.46447 0.21965 7.75736L4.99262 12.5303ZM5.52295 0L4.77295 1.22392e-07L4.77295 12L5.52295 12L6.27295 12L6.27295 -1.22392e-07L5.52295 0Z"
                    fill="var(--black)"
                  />
                </svg>
              </span>
            </a>
          </motion.div>
        </div>
      </motion.div>

      <style jsx>{`
        @media (max-width: 767px) {
          section {
            padding: 60px 15px 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
