/**
 * LeafDecor — Simplified biophilic SVG decorations
 * Three elegant vector variants, all using currentColor so they can be
 * tinted via Tailwind text-* utilities (text-gold, text-cream, text-black).
 *
 * Usage:
 *   <LeafDecor variant="leaf" className="..." />
 *   <LeafDecor variant="branch" flip className="..." />
 *   <LeafDecor variant="monstera" className="..." />
 */

type Variant = "leaf" | "branch" | "monstera";

interface LeafDecorProps {
  variant: Variant;
  className?: string;
  flip?: boolean;
  style?: React.CSSProperties;
}

export default function LeafDecor({
  variant,
  className = "",
  flip = false,
  style,
}: LeafDecorProps) {
  const transform = flip ? "scale(-1, 1)" : undefined;
  const common = {
    className,
    style: { transform, ...style },
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  } as const;

  if (variant === "leaf") {
    return (
      <svg
        viewBox="0 0 197 381"
        {...common}
      >
        {/* Single elegant leaf with central vein */}
        <path
          d="M98.5 380.5 C 30 320, 10 220, 30 130 C 50 50, 98.5 5, 98.5 5 C 98.5 5, 147 50, 167 130 C 187 220, 167 320, 98.5 380.5 Z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M98.5 5 L 98.5 380.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        {/* Side veins */}
        {[60, 110, 160, 210, 260, 310].map((y, i) => (
          <g key={y}>
            <path
              d={`M98.5 ${y} Q ${70 - i * 2} ${y + 15}, ${55 - i * 3} ${y + 35}`}
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              opacity="0.7"
            />
            <path
              d={`M98.5 ${y} Q ${127 + i * 2} ${y + 15}, ${142 + i * 3} ${y + 35}`}
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              opacity="0.7"
            />
          </g>
        ))}
      </svg>
    );
  }

  if (variant === "branch") {
    return (
      <svg
        viewBox="0 0 240 200"
        {...common}
      >
        {/* Branch with leaves */}
        <path
          d="M5 180 C 60 160, 120 130, 180 70 C 200 50, 220 30, 235 15"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        {/* Leaves on the branch */}
        {[
          { x: 60, y: 160, r: -30, s: 0.8 },
          { x: 100, y: 135, r: -25, s: 0.9 },
          { x: 140, y: 105, r: -20, s: 1 },
          { x: 175, y: 75, r: -15, s: 0.85 },
          { x: 205, y: 45, r: -10, s: 0.7 },
        ].map((leaf, i) => (
          <g
            key={i}
            transform={`translate(${leaf.x} ${leaf.y}) rotate(${leaf.r}) scale(${leaf.s})`}
          >
            <path
              d="M0 0 C -8 -15, -8 -35, 0 -50 C 8 -35, 8 -15, 0 0 Z"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M0 0 L 0 -50"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.6"
            />
          </g>
        ))}
      </svg>
    );
  }

  // monstera — signature split-leaf silhouette
  return (
    <svg
      viewBox="0 0 400 400"
      {...common}
    >
      <path
        d="M200 380
           C 120 360, 60 280, 50 180
           C 45 120, 80 60, 140 40
           C 175 28, 200 30, 200 30
           C 200 30, 225 28, 260 40
           C 320 60, 355 120, 350 180
           C 340 280, 280 360, 200 380 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      {/* Monstera signature splits (notches) */}
      <path
        d="M200 30 L 200 380"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M200 80 L 130 110 M 200 80 L 270 110"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M200 140 L 110 170 M 200 140 L 290 170"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M200 200 L 90 220 M 200 200 L 310 220"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M200 260 L 100 270 M 200 260 L 300 270"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M200 320 L 130 320 M 200 320 L 270 320"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {/* Outer vein detail */}
      <path
        d="M140 40 C 100 80, 80 140, 90 200 C 95 250, 130 320, 200 360"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M260 40 C 300 80, 320 140, 310 200 C 305 250, 270 320, 200 360"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}
