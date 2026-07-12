"use client";

import LeafDecor from "./LeafDecor";

export default function Footer() {
  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      <LeafDecor
        variant="leaf"
        className="top-8 -left-6 w-32 text-leaf opacity-[0.10]"
      />
      <LeafDecor
        variant="leaf"
        flip
        className="top-8 -right-6 w-32 text-leaf opacity-[0.10]"
      />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 py-14 lg:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-lg font-bold tracking-tight mb-2">
              ARDENT<span className="text-leaf">.</span>
            </h2>
            <p className="text-background/40 text-[13px] max-w-xs leading-relaxed">
              A next-generation real estate development brand. Building bold,
              design-led communities and telling the stories behind them.
            </p>
          </div>

          {/* Nav */}
          <div className="flex items-center gap-6">
            {["Projects", "Editorial", "About", "FAQ", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[13px] text-background/50 hover:text-background transition-colors"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>

        {/* Middle row */}
        <div className="mt-10 pt-8 border-t border-background/10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-6">
            {["Instagram", "YouTube", "Facebook"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-[13px] text-background/40 hover:text-background transition-colors"
              >
                {social}
              </a>
            ))}
          </div>

          <div className="text-[13px] text-background/40 space-y-1">
            <a
              href="mailto:hello@ardentdev.com"
              className="block hover:text-background transition-colors"
            >
              hello@ardentdev.com
            </a>
            <a
              href="tel:+2348000000000"
              className="block hover:text-background transition-colors"
            >
              +234 800 000 0000
            </a>
            <p>Lagos, Nigeria</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-background/30">
            &copy; {new Date().getFullYear()} Ardent Developers. All rights
            reserved.
          </p>
          <a
            href="#"
            className="text-[11px] text-background/30 hover:text-background/50 transition-colors"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
