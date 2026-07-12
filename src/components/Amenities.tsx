"use client";

import { motion } from "framer-motion";

const AMENITIES = [
  {
    title: "Community Power Supply",
    body: "Reliable transformer and generator power your plot and the commercial avenue retail strip — no downtime, no excuses.",
    icon: "power",
  },
  {
    title: "Central Water System",
    body: "Treated, potable water reticulated to every plot from a central processing plant. Built for daily dependability.",
    icon: "drop",
  },
  {
    title: "Perimeter Fencing",
    body: "Secure boundary wall with controlled access points and a manned gatehouse — your peace of mind, designed in.",
    icon: "fence",
  },
  {
    title: "Intelligent Drainage",
    body: "Engineered drainage network sized for Lagos rainfall — protecting roads, plots, and foundations for decades.",
    icon: "drain",
  },
  {
    title: "Beautiful Landscaping",
    body: "Curated tree-lined avenues, pocket parks, and streetscapes designed to mature gracefully over time.",
    icon: "leaf",
  },
  {
    title: "Ardent Farmers Market",
    body: "A 10-acre community retail hub on the expressway — every acre adds long-term value to your plot.",
    icon: "market",
  },
];

function Icon({ name }: { name: string }) {
  const common = {
    width: 120,
    height: 120,
    viewBox: "0 0 120 120",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  } as const;

  // All icons drawn as line-art in gold (currentColor)
  const icons: Record<string, React.ReactElement> = {
    power: (
      <svg {...common}>
        <g opacity="0.9">
          <path
            d="M61.6 89 L71.2 56.6 C71.4 55.95 71.3 55.4 70.98 54.94 C70.63 54.48 70.14 54.25 69.5 54.25 L60.75 54.25 L60.75 30.65 C60.75 30.05 60.48 29.73 59.94 29.69 C59.4 29.65 59.05 29.86 58.9 30.33 L49.3 62.87 C49.1 63.54 49.18 64.1 49.55 64.55 C49.92 65 50.43 65.22 51.1 65.22 L59.85 65.22 L59.85 88.78 C59.85 89.4 60.13 89.74 60.7 89.78 C61.27 89.82 61.6 89.55 61.6 88.93"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
        </g>
      </svg>
    ),
    drop: (
      <svg {...common}>
        <path
          d="M60 20 C 60 20, 30 55, 30 80 C 30 95, 45 105, 60 105 C 75 105, 90 95, 90 80 C 90 55, 60 20, 60 20 Z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M45 85 C 45 92, 52 95, 58 92"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
      </svg>
    ),
    fence: (
      <svg {...common}>
        {[20, 40, 60, 80, 100].map((x) => (
          <g key={x}>
            <path
              d={`M${x} 30 L ${x} 90`}
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <path
              d={`M${x} 30 L ${x - 6} 38 L ${x + 6} 38 Z`}
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
          </g>
        ))}
        <path d="M15 55 L 105 55" stroke="currentColor" strokeWidth="2" />
        <path d="M15 75 L 105 75" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    drain: (
      <svg {...common}>
        <path
          d="M20 90 Q 30 70, 50 70 Q 70 70, 90 50 Q 100 40, 105 30"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M30 90 Q 40 75, 60 75 Q 80 75, 100 55 Q 105 50, 105 45"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
        {[30, 50, 70, 90].map((x) => (
          <circle key={x} cx={x} cy={100 - x * 0.5} r="2" fill="currentColor" opacity="0.5" />
        ))}
      </svg>
    ),
    leaf: (
      <svg {...common}>
        <path
          d="M30 90 C 30 50, 50 30, 90 30 C 90 70, 70 90, 30 90 Z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M30 90 L 90 30"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M40 80 L 60 60 M 50 90 L 70 70 M 30 70 L 50 50 M 60 90 L 80 70"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.5"
        />
      </svg>
    ),
    market: (
      <svg {...common}>
        <path
          d="M25 50 L 30 35 L 90 35 L 95 50 L 95 95 L 25 95 Z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path d="M25 50 L 95 50" stroke="currentColor" strokeWidth="2" />
        <path d="M40 50 L 40 95 M 60 50 L 60 95 M 80 50 L 80 95" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
        <path
          d="M50 95 L 50 70 L 70 70 L 70 95"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
  };
  return icons[name] || icons.leaf;
}

export default function Amenities() {
  return (
    <section
      id="amenities"
      className="w-full relative"
      style={{
        padding: "40px 60px",
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Top section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start mb-16"
          style={{ gap: 20 }}
        >
          <div className="tag-chip">Amenities</div>

          {/* Desktop-only script accent */}
          <p className="font-script desktop-only text-gold text-4xl lg:text-5xl leading-none">
            considered living
          </p>

          <h2
            className="text-ink font-semibold"
            style={{
              fontSize: "clamp(28px, 4vw, 50px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: 900,
            }}
          >
            Ardent fosters an ecosystem where members and investors
            collaborate to cultivate lasting value — every amenity
            engineered for the long term.
          </h2>

          <p
            className="text-body"
            style={{
              fontSize: "clamp(15px, 1.4vw, 20px)",
              maxWidth: 700,
              lineHeight: 1.5,
            }}
          >
            Six core infrastructure pillars anchor the estate. Each is
            planned, costed, and timed to deliver against a clear
            completion projection.
          </p>
        </motion.div>

        {/* 3-column grid of amenity cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {AMENITIES.map((amenity, i) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col"
              style={{ gap: 16 }}
            >
              {/* Icon */}
              <div className="text-gold">
                <Icon name={amenity.icon} />
              </div>

              {/* Title — Habitat h3: 20px, weight 600, -0.45px letter-spacing */}
              <h3
                className="text-ink font-semibold"
                style={{
                  fontSize: 20,
                  lineHeight: "21px",
                  letterSpacing: "-0.45px",
                }}
              >
                {amenity.title}:
              </h3>

              {/* Body — Habitat 16-17px / line-height 22px */}
              <p
                className="text-body"
                style={{
                  fontSize: "clamp(15px, 1.2vw, 17px)",
                  lineHeight: "22px",
                }}
              >
                {amenity.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom section — Habitat pattern (bottom right paragraph) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 flex justify-end"
        >
          <p
            className="text-body"
            style={{
              fontSize: "clamp(15px, 1.4vw, 20px)",
              maxWidth: 700,
              lineHeight: 1.5,
              textAlign: "left",
            }}
          >
            Positioned right along the expressway, Ardent features a
            thriving 10-acre farmers&rsquo; market — every acre adds
            long-term commercial value to your plot.
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          section {
            padding: 30px 15px !important;
          }
        }
      `}</style>
    </section>
  );
}
