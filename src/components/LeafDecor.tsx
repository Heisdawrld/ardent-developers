export default function LeafDecor({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      className={`absolute pointer-events-none opacity-[0.08] ${className}`}
      viewBox="0 0 200 300"
      fill="none"
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
    >
      <path
        d="M100 10C60 50 20 120 30 200C40 260 80 290 100 290C120 290 160 260 170 200C180 120 140 50 100 10Z"
        fill="currentColor"
        className="text-accent"
      />
      <path
        d="M100 10V290"
        stroke="currentColor"
        className="text-accent"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <path
        d="M100 80C80 90 60 110 50 140"
        stroke="currentColor"
        className="text-accent"
        strokeWidth="1"
        opacity="0.3"
      />
      <path
        d="M100 140C120 150 140 170 150 200"
        stroke="currentColor"
        className="text-accent"
        strokeWidth="1"
        opacity="0.3"
      />
      <path
        d="M100 180C80 190 55 210 45 240"
        stroke="currentColor"
        className="text-accent"
        strokeWidth="1"
        opacity="0.3"
      />
    </svg>
  );
}
