"use client";

import Link from "next/link";

const NAV_LINKS = [
  { label: "Overview", href: "#vision", key: "vision" },
  { label: "Amenities", href: "#amenities", key: "amenities" },
  { label: "Location", href: "#infrastructure", key: "infra" },
  { label: "Pricing", href: "#pricing", key: "pricing" },
  { label: "FAQs", href: "#faqs", key: "faqs" },
  { label: "Contact", href: "#contact", key: "contact" },
];

export default function Header() {
  return (
    <>
      {/* ============ HERO HEADER (logo + nav links inside hero) ============ */}
      {/* This is the in-hero header — Habitat pattern: logo left, nav links right */}

      {/* ============ STICKY HEADER (floating pill nav that appears on scroll) ============ */}
      <div className="sticky-header">
        {/* Logo */}
        <a className="logo" href="/">
          <img
            src="/logo-header.png"
            alt="Ardent Limited"
            style={{ height: 64, width: "auto", objectFit: "contain" }}
          />
        </a>

        {/* Nav pill container */}
        <div className="link-container">
          {NAV_LINKS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className={link.key === "vision" ? "active" : ""}
            >
              {link.label}
            </a>
          ))}

          {/* Download Brochure CTA inside the pill */}
          <a href="#pricing" className="link-button btn-wrap">
            <div className="txt">Download Brochure</div>
            <div className="round">
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.99262 12.5303C5.28551 12.8232 5.76039 12.8232 6.05328 12.5303L10.8263 7.75736C11.1191 7.46447 11.1191 6.98959 10.8263 6.6967C10.5334 6.4038 10.0585 6.4038 9.76559 6.6967L5.52295 10.9393L1.28031 6.6967C0.987416 6.40381 0.512543 6.40381 0.219649 6.6967C-0.0732439 6.98959 -0.0732438 7.46447 0.21965 7.75736L4.99262 12.5303ZM5.52295 0L4.77295 1.22392e-07L4.77295 12L5.52295 12L6.27295 12L6.27295 -1.22392e-07L5.52295 0Z"
                  fill="#0A0A0A"
                />
              </svg>
            </div>
          </a>
        </div>

        {/* Right-side download icon (Habitat pattern) */}
        <div className="contain">
          <div className="box"></div>
          <div className="ctn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                d="M7.29289 16.2071C7.68342 16.5976 8.31658 16.5976 8.70711 16.2071L15.0711 9.84315C15.4616 9.45262 15.4616 8.81946 15.0711 8.42893C14.6805 8.03841 14.0474 8.03841 13.6569 8.42893L8 14.0858L2.34315 8.42893C1.95262 8.03841 1.31946 8.03841 0.928932 8.42893C0.538408 8.81946 0.538408 9.45262 0.928932 9.84315L7.29289 16.2071ZM8 0.5L7 0.5L7 15.5H8H9V0.5L8 0.5Z"
                fill="#0A0A0A"
              />
            </svg>
          </div>
          <div className="box"></div>
        </div>
      </div>
    </>
  );
}
