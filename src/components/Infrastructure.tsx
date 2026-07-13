"use client";

import { useState } from "react";

/**
 * Infrastructure — Full Habitat HCFE pattern replica.
 *
 * Matches Habitat's exact section flow:
 *   1. .top-section — big headline
 *   2. .middle-section — video quote with play button
 *   3. .map-section — interactive infrastructure map with clickable points
 *   4. .timeline-section — year slider (2025-2028) with projections
 *   5. .bottom-section — 2-col cream CTA
 */

const MAP_POINTS = [
  { id: "lekki-ijebu", label: "Lekki to Ijebu Ode connecting road", top: "35%", left: "20%", sub: "How long from VI to Ijebu Ode on new road?" },
  { id: "sagamu-benin", label: "Sagamu – Benin Expressway", top: "55%", left: "45%" },
  { id: "dry-port", label: "Ijebu Ode Inland Dry Port", top: "65%", left: "55%" },
  { id: "deep-sea", label: "Deep Sea Ports", top: "25%", left: "15%" },
  { id: "food-hub", label: "Lagos Food Security Systems Hub", top: "45%", left: "35%" },
];

const TIMELINE_YEARS = [
  {
    year: "2025",
    items: ["Sagamu-Ijebu Expressway expansion begins", "Perimeter fencing and gatehouse completion", "Initial plot allocations commence"],
  },
  {
    year: "2026",
    items: ["Lekki Deep Seaport Phase 2 operational", "Central water system installation", "Internal road network construction"],
  },
  {
    year: "2027",
    items: ["Ijebu Ode Inland Dry Port commissioned", "Community clubhouse construction", "Landscaping and green spaces established"],
  },
  {
    year: "2028",
    items: ["Full Lekki-Ijebu corridor open", "15 mins from Lekki Free Zone", "Estate fully serviced and habitable"],
  },
];

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
  const [activePoint, setActivePoint] = useState<string | null>(null);
  const [activeYear, setActiveYear] = useState("2028");

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

        {/* ============ MAP SECTION — Interactive Infrastructure Map ============ */}
        <div className="map-section">
          <div className="map-header">
            <h2>Infrastructure Map</h2>
            <p>
              The Lekki Deep Seaport Access Road Network is opening up the Epe,
              Ikorodu, and Ijebu communities.
            </p>
            <span className="map-hint">Click around to explore map</span>
          </div>

          <div className="map-container">
            {/* Stylised map visual */}
            <div className="map-visual">
              {/* Road lines */}
              <svg className="map-svg" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Main corridor line */}
                <path d="M100 250 Q300 200 500 280 Q600 320 750 300" stroke="var(--gold)" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.6" />
                {/* Branch roads */}
                <path d="M200 250 L150 150" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.3" />
                <path d="M400 260 L350 380" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.3" />
                <path d="M600 290 L650 180" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.3" />
                <path d="M300 230 L280 120" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.3" />
                {/* Ardent marker */}
                <circle cx="400" cy="260" r="12" fill="var(--gold)" opacity="0.9" />
                <circle cx="400" cy="260" r="20" fill="none" stroke="var(--gold)" strokeWidth="2" opacity="0.4" />
                <text x="400" y="295" textAnchor="middle" fill="var(--gold)" fontSize="13" fontWeight="600" fontFamily="var(--font-sans)">ARDENT</text>
              </svg>

              {/* Clickable map points */}
              {MAP_POINTS.map((point) => (
                <div
                  key={point.id}
                  className={`map-point ${activePoint === point.id ? "active" : ""}`}
                  style={{ top: point.top, left: point.left }}
                  onClick={() =>
                    setActivePoint(activePoint === point.id ? null : point.id)
                  }
                >
                  <div className="map-dot" />
                  <div className="map-label">{point.label}</div>
                  {point.sub && activePoint === point.id && (
                    <div className="map-sublabel">{point.sub}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ============ TIMELINE SECTION — Year slider ============ */}
          <div className="timeline-section">
            <h3>Infrastructure Completion Projection</h3>
            <div className="timeline-years">
              {TIMELINE_YEARS.map((yr) => (
                <button
                  key={yr.year}
                  className={`timeline-year ${activeYear === yr.year ? "active" : ""}`}
                  onClick={() => setActiveYear(yr.year)}
                >
                  {yr.year}
                </button>
              ))}
            </div>
            <div className="timeline-content">
              {TIMELINE_YEARS.find((yr) => yr.year === activeYear)?.items.map(
                (item, i) => (
                  <div key={i} className="timeline-item">
                    <div className="timeline-dot" />
                    <p>{item}</p>
                  </div>
                )
              )}
            </div>
          </div>
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
