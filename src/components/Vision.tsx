"use client";

/**
 * Vision — Habitat `.vision-section` pattern (1:1 CSS replica).
 *
 * Structure (from HABITAT_REF/sections/01-vision-super-container.html):
 *
 *   .vision-super-container
 *     .vision-section                ← height: 1384px; position: relative
 *       .txt-name                    ← position: sticky; top: 0; height: 100vh
 *                                     ← flex column, justify-end, align-center
 *         h2                         ← 90px cream headline (the watermark name)
 *       section                      ← position: absolute; inset: 0
 *         img                        ← full-bleed estate aerial (24px radius)
 *         .overlay-bg
 *           .overlay                ← 28% black tint
 *
 * The sticky `.txt-name` pins the estate name to the bottom of the viewport
 * while the full-bleed image (and its 28% black overlay) scrolls past — a
 * Habitat signature parallax reveal.
 */

export default function Vision() {
  return (
    <div id="vision" className="vision-super-container">
      <div className="vision-section">
        {/* Sticky estate-name watermark */}
        <div className="txt-name">
          <h2>Ardent Orchards.</h2>
        </div>

        {/* Full-bleed estate aerial image */}
        <section>
          <img
            src="/images/estate-aerial.jpg"
            alt="Ardent Orchards — aerial view of the master plan"
            fetchPriority="high"
            loading="eager"
          />
          <div className="overlay-bg">
            <div className="overlay" />
          </div>
        </section>
      </div>
    </div>
  );
}
