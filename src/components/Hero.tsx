"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="hero-super-container">
      <div className="hero-section">
        <section>
          {/* ============ HERO BACKGROUND IMAGE + OVERLAY ============ */}
          <div className="img-bg">
            {/* Image (or video when client provides one) */}
            {/* Slot: drop a file at /public/hero.mp4 to enable video background */}
            <img
              src="/images/hero-poster.jpg"
              alt="Ardent Limited luxury estate"
              className="slide object-cover w-full h-full"
            />
            {/* 52% black overlay — Habitat exact pattern */}
            <div className="bg" />
          </div>

          {/* ============ HERO CONTENT CONTAINER ============ */}
          <div className="section-container">
            {/* ===== TOP: Brand mark ===== */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                zIndex: 10,
              }}
            >
              <span
                style={{
                  color: "var(--white)",
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                }}
              >
                Ardent Limited · Lagos, Nigeria
              </span>
            </motion.div>

            {/* ===== MAIN CONTENT (split left/right — Habitat pattern) ===== */}
            <div className="content">
              {/* LEFT: headline + tagline + CTA */}
              <motion.div
                className="left-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1>
                  Bold, design-led
                  <br />
                  communities, built
                  <br />
                  for the future.
                </h1>

                <p>Land Today • Home Tomorrow • Community Forever</p>

                <a href="#pricing" className="link-button">
                  <div className="txt">Reserve Your Plot</div>
                  <div className="round">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      className="arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <path
                        d="M16.2071 8.7071C16.5976 8.31658 16.5976 7.68341 16.2071 7.29289L9.84315 0.928931C9.45262 0.538406 8.81946 0.538406 8.42893 0.928931C8.03841 1.31946 8.03841 1.95262 8.42893 2.34314L14.0858 8L8.42893 13.6569C8.03841 14.0474 8.03841 14.6805 8.42893 15.0711C8.81946 15.4616 9.45262 15.4616 9.84315 15.0711L16.2071 8.7071ZM0.5 8L0.5 9L15.5 9L15.5 8L15.5 7L0.5 7L0.5 8Z"
                        fill="#0A0A0A"
                      />
                    </svg>
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      className="arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ opacity: 0, transform: "translateX(-22px)" }}
                    >
                      <path
                        d="M16.2071 8.7071C16.5976 8.31658 16.5976 7.68341 16.2071 7.29289L9.84315 0.928931C9.45262 0.538406 8.81946 0.538406 8.42893 0.928931C8.03841 1.31946 8.03841 1.95262 8.42893 2.34314L14.0858 8L8.42893 13.6569C8.03841 14.0474 8.03841 14.6805 8.42893 15.0711C8.81946 15.4616 9.45262 15.4616 9.84315 15.0711L16.2071 8.7071ZM0.5 8L0.5 9L15.5 9L15.5 8L15.5 7L0.5 7L0.5 8Z"
                        fill="#0A0A0A"
                      />
                    </svg>
                  </div>
                </a>
              </motion.div>

              {/* RIGHT: info card + secondary CTA */}
              <motion.div
                className="right-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="container">
                  <p>
                    The Lekki Corridor represents an important spine that
                    anchors the Lekki Deep Sea Port access road network,
                    positioning the Epe-Ibeju axis as a vital corridor uniting
                    the next decade of Lagos&apos;s residential and industrial
                    growth.
                  </p>
                </div>

                <a href="#infrastructure" className="link-button outline">
                  <div className="txt">Learn about the road infrastructure</div>
                  <div className="round">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      className="arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <path
                        d="M16.2071 8.7071C16.5976 8.31658 16.5976 7.68341 16.2071 7.29289L9.84315 0.928931C9.45262 0.538406 8.81946 0.538406 8.42893 0.928931C8.03841 1.31946 8.03841 1.95262 8.42893 2.34314L14.0858 8L8.42893 13.6569C8.03841 14.0474 8.03841 14.6805 8.42893 15.0711C8.81946 15.4616 9.45262 15.4616 9.84315 15.0711L16.2071 8.7071ZM0.5 8L0.5 9L15.5 9L15.5 8L15.5 7L0.5 7L0.5 8Z"
                        fill="#0A0A0A"
                      />
                    </svg>
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      className="arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ opacity: 0, transform: "translateX(-22px)" }}
                    >
                      <path
                        d="M16.2071 8.7071C16.5976 8.31658 16.5976 7.68341 16.2071 7.29289L9.84315 0.928931C9.45262 0.538406 8.81946 0.538406 8.42893 0.928931C8.03841 1.31946 8.03841 1.95262 8.42893 2.34314L14.0858 8L8.42893 13.6569C8.03841 14.0474 8.03841 14.6805 8.42893 15.0711C8.81946 15.4616 9.45262 15.4616 9.84315 15.0711L16.2071 8.7071ZM0.5 8L0.5 9L15.5 9L15.5 8L15.5 7L0.5 7L0.5 8Z"
                        fill="#0A0A0A"
                      />
                    </svg>
                  </div>
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
