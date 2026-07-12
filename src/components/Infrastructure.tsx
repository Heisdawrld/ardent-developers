"use client";

/**
 * Infrastructure — Habitat `.highway-section` pattern (1:1 CSS replica).
 *
 * Combines the WatermarkHeadline + VideoQuote + Location sections from the
 * previous Ardent build into a single Habitat-faithful section using the
 * classes already defined in globals.css:
 *
 *   .infrastructure-super-container
 *     .highway-section
 *       .top-section        ← white bg, big centered headline
 *         h1                 ← 60px headline w/ span.muted
 *       .middle-section     ← black bg, sticky video quote
 *         .play-overlay      ← absolute-centered play button + label
 *           .play-icon       ← 90px circle w/ hover gold ring
 *           .play-text       ← 11px uppercase label
 *         .quote             ← 36px white quote text
 *         .attribution       ← 13px uppercase attribution
 *       .bottom-section      ← cream bg, 2-col grid (text | link-button)
 *         .text              ← 22px left text about Lekki Deep Sea Port
 *         a.link-button      ← "Learn about the road infrastructure" CTA
 *
 * Source: HABITAT_REF/sections/04-infrastructure-super-container.html
 * (top section is the Lekki Corridor headline; middle is the video quote
 * with the governor attribution; bottom is the location/road-infrastructure
 * CTA in 2-column cream block).
 */

/** Habitat's exact two-arrow swap-on-hover link-button roundel. */
function LinkButtonArrowPair() {
  return (
    <div className="round">
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
  );
}

export default function Infrastructure() {
  return (
    <div id="infrastructure" className="infrastructure-super-container">
      <div className="highway-section">
        {/* ============ TOP: Big headline (Lekki Corridor intro) ============ */}
        <div className="top-section">
          <h1>
            The Lekki Corridor:{" "}
            <span>
              What&apos;s special about this once-in-a-generation
              infrastructure shift.
            </span>
          </h1>
        </div>

        {/* ============ MIDDLE: Black bg video-quote ============ */}
        <div className="middle-section">
          {/* Play overlay (absolute-centered above quote) */}
          <div className="play-overlay">
            <button
              type="button"
              className="play-icon"
              aria-label="Play video"
            >
              {/* Play triangle */}
              <svg
                width="22"
                height="24"
                viewBox="0 0 22 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M21 12L0.75 23.4904L0.750001 0.509617L21 12Z"
                  fill="var(--white)"
                />
              </svg>
            </button>
            <span className="play-text">Play video</span>
          </div>

          {/* The quote */}
          <p className="quote">
            &ldquo;This is probably the most important corridor to Southern
            Nigeria&apos;s next decade of growth.&rdquo;
          </p>

          {/* Attribution */}
          <p className="attribution">
            — Ardent Limited · Development Brief 2024
          </p>
        </div>

        {/* ============ BOTTOM: 2-col cream CTA ============ */}
        <div className="bottom-section">
          <div className="text">
            The Lekki Deep Seaport Access Road Network is opening up the Epe,
            Ikorodu, and Ijebu-Ode axis. Ardent sits at the strategic center
            of this once-in-a-generation infrastructure shift — making the
            estate a landmark for the next decade of Lagos residential and
            industrial growth.
          </div>

          <a href="#pricing" className="link-button">
            <div className="txt">Learn about the road infrastructure</div>
            <LinkButtonArrowPair />
          </a>
        </div>
      </div>
    </div>
  );
}
