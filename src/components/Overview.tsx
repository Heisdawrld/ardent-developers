"use client";

/**
 * Overview — Hybrid Habitat + Kota No.1.
 *
 * Keeps Habitat's main-section structure (lead copy + h2 + line poles),
 * but leans into editorial warmth via serif italic lead copy and
 * terracotta-tinted line poles (handled in globals.css).
 */

const LINE_POLES = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19] as const;

export default function Overview() {
  return (
    <div id="overview" className="main-section">
      {/* Editorial section divider — Kota-style numbering */}
      <div className="editorial-divider">
        <span className="num">01</span>
        <div className="line" />
        <span className="label">The Vision</span>
      </div>

      <section>
        {/* ============ LEFT: lead copy + section h2 ============ */}
        <div className="left-section">
          <p>
            Just 20 minutes from Lekki Free Zone by 2028, this isn&apos;t
            another estate scheme — it&apos;s the re-imagining of Lagos
            residential culture.
          </p>

          <div className="h2">
            <h2>
              Ardent Limited is set to be one of{" "}
              <span>Nigeria&apos;s most exciting residential communities</span>{" "}
              this decade—a coastal neighborhood, near Epe designed for
              purpose-driven living and modern lifestyle experiences.
            </h2>
            <h2>
              Envisioned as a landmark estate, it combines well landscaped
              residential plots with a thriving community hub to create a
              modern agrihood.
            </h2>
          </div>
        </div>

        {/* ============ RIGHT: increasing-width gold poles ============ */}
        <div className="right-section">
          <div className="lines">
            {LINE_POLES.map((w) => (
              <div
                key={w}
                className="line-pole"
                style={{ width: `${w}px` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom hairline rules — Habitat pattern */}
      <div className="line-ctn" />
      <div className="line-diagonal" />
    </div>
  );
}
