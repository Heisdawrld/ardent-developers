"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#editorial", label: "Editorial" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-14 lg:h-16">
          {/* Logo — white silhouette over dark hero, full color (with multiply blend to drop white bg) on scrolled white header */}
          <a href="#" className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="Ardent Limited — Redefining Modern Living"
              width={140}
              height={40}
              priority
              className={`h-9 lg:h-10 w-auto transition-all duration-300 ${
                scrolled
                  ? "[mix-blend-mode:multiply]"
                  : "[filter:brightness(0)_invert(1)] opacity-95"
              }`}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[13px] font-medium tracking-wide uppercase transition-colors ${
                  scrolled
                    ? "text-foreground/70 hover:text-foreground"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              className={`text-[13px] font-medium transition-colors ${
                scrolled
                  ? "text-foreground/70 hover:text-foreground"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Contact Us
            </a>
            <a
              href="#register"
              className={`px-5 py-2 text-[13px] font-medium rounded-full transition-colors ${
                scrolled
                  ? "bg-accent text-white hover:bg-accent-light"
                  : "bg-white text-foreground hover:bg-accent-muted"
              }`}
            >
              Register Interest
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-[5px] p-2 z-50"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-[1.5px] transition-all duration-200 ${
                scrolled || mobileOpen ? "bg-foreground" : "bg-white"
              } ${mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}
            />
            <span
              className={`block w-5 h-[1.5px] transition-all duration-200 ${
                scrolled || mobileOpen ? "bg-foreground" : "bg-white"
              } ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-[1.5px] transition-all duration-200 ${
                scrolled || mobileOpen ? "bg-foreground" : "bg-white"
              } ${mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-300 lg:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {/* Logo at top of mobile menu */}
          <Image
            src="/logo.png"
            alt="Ardent Limited"
            width={120}
            height={40}
            className="h-10 w-auto mb-4 [mix-blend-mode:multiply]"
          />
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#register"
            onClick={() => setMobileOpen(false)}
            className="mt-4 px-8 py-3 bg-accent text-white text-sm font-medium rounded-full"
          >
            Register Interest
          </a>
        </div>
      </div>
    </>
  );
}
