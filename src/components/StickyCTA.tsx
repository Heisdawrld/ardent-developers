"use client";

import { useState, useEffect } from "react";

/**
 * StickyCTA — Habitat's signature bottom-of-screen CTA bar (mobile only).
 *
 * Appears as a sticky pill at the bottom of the viewport once the user
 * scrolls past the hero. Contains two `.link-button` elements side by side:
 *   1. "NGN 2.95M / Plot"  (solid black, right-arrow)
 *   2. "Download Brochure"  (down-arrow, links to #contact form)
 *
 * Habitat pattern: position: fixed; bottom: 10px; z-index: 1000.
 * Uses the same .link-button class already defined in globals.css so the
 * arrow-swap hover/active animation works exactly like the rest of the site.
 */
export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling past hero (~600px)
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed left-0 right-0 z-[1000] flex justify-center md:hidden"
      style={{
        bottom: 10,
        padding: "0 12px",
        pointerEvents: "none",
      }}
    >
      <div
        className="flex items-center"
        style={{
          padding: 4,
          borderRadius: 60,
          height: 60,
          gap: 4,
          pointerEvents: "auto",
          background: "rgba(250, 247, 240, 0.85)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: "0 8px 32px rgba(10, 10, 10, 0.18)",
          border: "1px solid rgba(10, 10, 10, 0.08)",
        }}
      >
        {/* Pricing button — solid black .link-button */}
        <a
          href="#pricing"
          className="link-button"
          style={{ padding: "10px 10px 10px 20px", height: 50 }}
        >
          <div className="txt">NGN 2.95M / Plot</div>
          <div className="round">
            {/* Right-arrow (primary, visible) */}
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              className="arrow"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              style={{ opacity: 1, transform: "none" }}
            >
              <path
                d="M16.2071 8.7071C16.5976 8.31658 16.5976 7.68341 16.2071 7.29289L9.84315 0.928931C9.45262 0.538406 8.81946 0.538406 8.42893 0.928931C8.03841 1.31946 8.03841 1.95262 8.42893 2.34314L14.0858 8L8.42893 13.6569C8.03841 14.0474 8.03841 14.6805 8.42893 15.0711C8.81946 15.4616 9.45262 15.4616 9.84315 15.0711L16.2071 8.7071ZM0.5 8L0.5 9L15.5 9L15.5 8L15.5 7L0.5 7L0.5 8Z"
                fill="var(--black)"
              />
            </svg>
            {/* Right-arrow (secondary, slides in on hover) */}
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              className="arrow"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              style={{ opacity: 0, transform: "translateX(-22px)" }}
            >
              <path
                d="M16.2071 8.7071C16.5976 8.31658 16.5976 7.68341 16.2071 7.29289L9.84315 0.928931C9.45262 0.538406 8.81946 0.538406 8.42893 0.928931C8.03841 1.31946 8.03841 1.95262 8.42893 2.34314L14.0858 8L8.42893 13.6569C8.03841 14.0474 8.03841 14.6805 8.42893 15.0711C8.81946 15.4616 9.45262 15.4616 9.84315 15.0711L16.2071 8.7071ZM0.5 8L0.5 9L15.5 9L15.5 8L15.5 7L0.5 7L0.5 8Z"
                fill="var(--black)"
              />
            </svg>
          </div>
        </a>

        {/* Download Brochure button — gold .link-button with down-arrow */}
        <a
          href="#contact"
          className="link-button"
          style={{
            background: "var(--gold)",
            padding: "10px 10px 10px 20px",
            height: 50,
          }}
        >
          <div className="txt" style={{ color: "var(--black)" }}>
            Download Brochure
          </div>
          <div className="round" style={{ background: "var(--black)" }}>
            {/* Down-arrow (primary, visible) */}
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              className="arrow"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              style={{ opacity: 1, transform: "none" }}
            >
              <path
                d="M4.99262 12.5303C5.28551 12.8232 5.76039 12.8232 6.05328 12.5303L10.8263 7.75736C11.1191 7.46447 11.1191 6.98959 10.8263 6.6967C10.5334 6.4038 10.0585 6.4038 9.76559 6.6967L5.52295 10.9393L1.28031 6.6967C0.987416 6.40381 0.512543 6.40381 0.219649 6.6967C-0.0732439 6.98959 -0.0732438 7.46447 0.21965 7.75736L4.99262 12.5303ZM5.52295 0L4.77295 1.22392e-07L4.77295 12L5.52295 12L6.27295 12L6.27295 -1.22392e-07L5.52295 0Z"
                fill="var(--gold)"
              />
            </svg>
            {/* Down-arrow (secondary, slides up on hover — uses same swap CSS) */}
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              className="arrow"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              style={{ opacity: 0, transform: "translateX(-22px)" }}
            >
              <path
                d="M4.99262 12.5303C5.28551 12.8232 5.76039 12.8232 6.05328 12.5303L10.8263 7.75736C11.1191 7.46447 11.1191 6.98959 10.8263 6.6967C10.5334 6.4038 10.0585 6.4038 9.76559 6.6967L5.52295 10.9393L1.28031 6.6967C0.987416 6.40381 0.512543 6.40381 0.219649 6.6967C-0.0732439 6.98959 -0.0732438 7.46447 0.21965 7.75736L4.99262 12.5303ZM5.52295 0L4.77295 1.22392e-07L4.77295 12L5.52295 12L6.27295 12L6.27295 -1.22392e-07L5.52295 0Z"
                fill="var(--gold)"
              />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}
