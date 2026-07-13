"use client";

/**
 * Vision — Hybrid Habitat + Kota pattern.
 *
 * Keeps Habitat's sticky full-bleed image with watermark headline,
 * adds a Kota-style editorial caption (serif italic) at bottom-left.
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

          {/* Kota-style editorial caption */}
          <div className="vision-editorial-caption">
            <div className="eyebrow">01 · The Vision</div>
            <p>
              A coastal neighborhood near Epe — designed for purpose-driven
              living, where landscape, architecture, and community meet along
              the Lekki Corridor.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
