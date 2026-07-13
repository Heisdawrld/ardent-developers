"use client";

/**
 * Overview — Habitat `.main-section` pattern (1:1 CSS replica).
 *
 * Structure (from HABITAT_REF/sections/01-vision-super-container.html
 *  — actually, this corresponds to Habitat's "introducing" overview block
 *  that pairs the side-leaf + line-poles decoration with the lead copy):
 *
 *   .main-section
 *     img.side-leaf            ← decorative left-side leaf SVG
 *     section                  ← flex row, gap 10px, padding 84px 60px 50px
 *       .left-section          ← flex column, justify-between, gap 250px
 *         p                    ← lead copy (22px)
 *         .h2                  ← flex column, gap 50px
 *           h2                 ← 50px headline w/ span.gold-deep
 *           h2                 ← follow-up headline
 *       .right-section         ← justify-end
 *         .lines               ← flex row of img + line-poles
 *           img                ← side_leaf.svg
 *           .line-pole x10     ← widths 1,3,5,7,9,11,13,15,17,19px
 *     .line-ctn                ← 1px gold rule
 *     .line-diagonal           ← -1deg diagonal gold rule
 *
 * NOTE: All HTML structure and class names mirror Habitat exactly so the
 * Ardent-recolor of Habitat's CSS produces a 1:1 visual match.
 */

const LINE_POLES = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19] as const;

export default function Overview() {
  return (
    <div id="overview" className="main-section">
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
