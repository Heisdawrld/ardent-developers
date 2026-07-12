type Variant = "leaf" | "branch" | "drop" | "potted" | "landscape" | "monstera";

type Props = {
  className?: string;
  flip?: boolean;
  variant?: Variant;
  /** override stroke/fill color via currentColor text-* utility */
  colorClass?: string;
};

/**
 * Multi-variant biophilic SVG illustrations.
 * Default opacity is low (decorative). Pass a stronger opacity class to use as feature icon.
 *
 * Variants:
 *  - leaf       : single elongated leaf with veins (Habitat side-leaf)
 *  - branch     : small branch with multiple leaves
 *  - drop       : water drop
 *  - potted     : potted plant
 *  - landscape  : rolling hills with sun
 *  - monstera   : monstera leaf (split-leaf silhouette)
 */
export default function LeafDecor({
  className = "",
  flip = false,
  variant = "leaf",
  colorClass = "text-accent",
}: Props) {
  return (
    <svg
      className={`absolute pointer-events-none ${colorClass} ${className}`}
      viewBox={viewBoxFor(variant)}
      fill="none"
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
      aria-hidden="true"
    >
      {renderVariant(variant)}
    </svg>
  );
}

function viewBoxFor(v: Variant): string {
  switch (v) {
    case "leaf":
      return "0 0 200 300";
    case "branch":
      return "0 0 240 200";
    case "drop":
      return "0 0 100 140";
    case "potted":
      return "0 0 160 200";
    case "landscape":
      return "0 0 240 160";
    case "monstera":
      return "0 0 240 240";
  }
}

function renderVariant(v: Variant) {
  switch (v) {
    case "leaf":
      return (
        <>
          <path
            d="M100 10C60 50 20 120 30 200C40 260 80 290 100 290C120 290 160 260 170 200C180 120 140 50 100 10Z"
            fill="currentColor"
          />
          <path
            d="M100 10V290"
            stroke="white"
            strokeWidth="1.5"
            opacity="0.45"
          />
          <path
            d="M100 80C80 90 60 110 50 140"
            stroke="white"
            strokeWidth="1"
            opacity="0.35"
          />
          <path
            d="M100 140C120 150 140 170 150 200"
            stroke="white"
            strokeWidth="1"
            opacity="0.35"
          />
          <path
            d="M100 180C80 190 55 210 45 240"
            stroke="white"
            strokeWidth="1"
            opacity="0.35"
          />
        </>
      );
    case "branch":
      return (
        <>
          <path
            d="M10 100C60 95 110 90 220 60"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {[
            { cx: 60, cy: 95, r: 22 },
            { cx: 110, cy: 85, r: 26 },
            { cx: 160, cy: 75, r: 24 },
            { cx: 205, cy: 60, r: 18 },
          ].map((leaf, i) => (
            <g key={i}>
              <ellipse
                cx={leaf.cx}
                cy={leaf.cy - 18}
                rx={leaf.r}
                ry={leaf.r * 1.6}
                fill="currentColor"
                transform={`rotate(-25 ${leaf.cx} ${leaf.cy - 18})`}
              />
              <line
                x1={leaf.cx}
                y1={leaf.cy - 35}
                x2={leaf.cx}
                y2={leaf.cy + 20}
                stroke="white"
                strokeWidth="1"
                opacity="0.4"
              />
            </g>
          ))}
        </>
      );
    case "drop":
      return (
        <>
          <path
            d="M50 5C50 5 90 60 90 95C90 120 72 135 50 135C28 135 10 120 10 95C10 60 50 5 50 5Z"
            fill="currentColor"
          />
          <ellipse
            cx="35"
            cy="95"
            rx="10"
            ry="14"
            fill="white"
            opacity="0.45"
          />
        </>
      );
    case "potted":
      return (
        <>
          {/* Pot */}
          <path
            d="M40 130H120L112 195H48L40 130Z"
            fill="currentColor"
            opacity="0.85"
          />
          <rect
            x="36"
            y="120"
            width="88"
            height="14"
            rx="2"
            fill="currentColor"
          />
          {/* Plant */}
          <path
            d="M80 120C80 90 60 70 40 60"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M80 120C80 90 100 70 120 60"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M80 120C80 80 80 50 80 30"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <ellipse
            cx="40"
            cy="58"
            rx="14"
            ry="22"
            fill="currentColor"
            transform="rotate(-35 40 58)"
          />
          <ellipse
            cx="120"
            cy="58"
            rx="14"
            ry="22"
            fill="currentColor"
            transform="rotate(35 120 58)"
          />
          <ellipse cx="80" cy="28" rx="12" ry="24" fill="currentColor" />
        </>
      );
    case "landscape":
      return (
        <>
          <circle cx="180" cy="55" r="28" fill="currentColor" opacity="0.85" />
          <path
            d="M0 130C30 110 60 110 90 125C120 140 150 100 180 120C200 132 220 122 240 130V160H0V130Z"
            fill="currentColor"
            opacity="0.85"
          />
          <path
            d="M0 145C40 130 70 138 100 148C130 158 160 132 190 145C210 152 225 145 240 148V160H0V145Z"
            fill="currentColor"
          />
        </>
      );
    case "monstera":
      return (
        <>
          <path
            d="M120 10C70 30 30 80 25 140C20 195 50 225 90 230C70 200 60 160 70 130C60 155 50 195 65 225C75 230 110 232 130 225C150 200 145 150 135 130C150 160 155 200 140 225C170 215 200 180 195 130C190 80 165 30 120 10Z"
            fill="currentColor"
          />
          {/* Split cuts */}
          <path
            d="M95 60L75 130"
            stroke="white"
            strokeWidth="3"
            opacity="0.55"
          />
          <path
            d="M120 55L130 140"
            stroke="white"
            strokeWidth="3"
            opacity="0.55"
          />
          <path
            d="M145 80L170 150"
            stroke="white"
            strokeWidth="3"
            opacity="0.55"
          />
          <path
            d="M70 100L50 170"
            stroke="white"
            strokeWidth="3"
            opacity="0.55"
          />
          <path
            d="M120 10L120 220"
            stroke="white"
            strokeWidth="2"
            opacity="0.4"
          />
        </>
      );
  }
}
