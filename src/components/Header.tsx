"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Overview", href: "#overview" },
  { label: "Amenities", href: "#amenities" },
  { label: "Location", href: "#location" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ============ STICKY FLOATING PILL NAV (Habitat pattern) ============ */}
      <div
        className="sticky z-[1000] hidden md:flex"
        style={{ top: 20 }}
      >
        <div
          className="w-full mx-auto flex items-center justify-between"
          style={{
            padding: "0 60px",
            height: 50,
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Ardent Limited"
              width={30}
              height={40}
              className="h-[40px] w-auto"
              style={{ objectFit: "contain" }}
            />
          </Link>

          {/* Nav pill container */}
          <div
            className="flex items-center gap-2"
            style={{
              background: "var(--cream)",
              padding: 5,
              borderRadius: 50,
            }}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-1.5 text-[15px] font-medium text-black hover:text-gold transition-colors"
                style={{ letterSpacing: "-0.23px" }}
              >
                {link.label}
              </Link>
            ))}

            {/* Download Brochure pill button */}
            <a
              href="#pricing"
              className="btn-pill"
              style={{ height: 40 }}
            >
              <span className="btn-txt">Download Brochure</span>
              <span className="btn-round" style={{ width: 24, height: 24 }}>
                <svg
                  className="arrow arrow-primary"
                  viewBox="0 0 12 13"
                  width="12"
                  height="13"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.99262 12.5303C5.28551 12.8232 5.76039 12.8232 6.05328 12.5303L10.8263 7.75736C11.1191 7.46447 11.1191 6.98959 10.8263 6.6967C10.5334 6.4038 10.0585 6.4038 9.76559 6.6967L5.52295 10.9393L1.28031 6.6967C0.987416 6.40381 0.512543 6.40381 0.219649 6.6967C-0.0732439 6.98959 -0.0732438 7.46447 0.21965 7.75736L4.99262 12.5303ZM5.52295 0L4.77295 1.22392e-07L4.77295 12L5.52295 12L6.27295 12L6.27295 -1.22392e-07L5.52295 0Z"
                    fill="#0A0A0A"
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
                    fill="#0A0A0A"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ============ MOBILE HEADER (logo + hamburger) ============ */}
      <div
        className="sticky z-[1000] md:hidden flex items-center justify-between"
        style={{ top: 10, padding: "0 30px", height: 50 }}
      >
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Ardent Limited"
            className="h-[34px] w-auto"
            style={{ objectFit: "contain" }}
          />
        </Link>
        <button
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
          className="w-10 h-10 flex items-center justify-center"
        >
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
            <path
              d="M1 1H19M1 7H19M1 13H19"
              stroke="#0A0A0A"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* ============ MOBILE MENU OVERLAY ============ */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[2000] md:hidden"
          style={{ background: "var(--cream)" }}
        >
          <div className="flex items-center justify-between px-[30px] h-[50px]">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => setMobileOpen(false)}
            >
              <img
                src="/logo.png"
                alt="Ardent Limited"
                className="h-[34px] w-auto"
                style={{ objectFit: "contain" }}
              />
            </Link>
            <button
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="w-10 h-10 flex items-center justify-center"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M1 1L17 17M17 1L1 17"
                  stroke="#0A0A0A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col gap-3 px-[30px] pt-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[28px] font-semibold text-black py-2 border-b border-line"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#pricing"
              onClick={() => setMobileOpen(false)}
              className="btn-pill mt-8 self-start"
            >
              <span className="btn-txt">Download Brochure</span>
              <span className="btn-round">
                <svg viewBox="0 0 12 13" width="12" height="13">
                  <path
                    d="M4.99262 12.5303C5.28551 12.8232 5.76039 12.8232 6.05328 12.5303L10.8263 7.75736C11.1191 7.46447 11.1191 6.98959 10.8263 6.6967C10.5334 6.4038 10.0585 6.4038 9.76559 6.6967L5.52295 10.9393L1.28031 6.6967C0.987416 6.40381 0.512543 6.40381 0.219649 6.6967C-0.0732439 6.98959 -0.0732438 7.46447 0.21965 7.75736L4.99262 12.5303ZM5.52295 0L4.77295 1.22392e-07L4.77295 12L5.52295 12L6.27295 12L6.27295 -1.22392e-07L5.52295 0Z"
                    fill="#0A0A0A"
                  />
                </svg>
              </span>
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
