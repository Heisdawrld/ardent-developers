"use client";

/**
 * Gallery — Habitat "Pictures from Site" pattern.
 *
 * Structure:
 *   .gallery-super-container
 *     .gallery-section
 *       .gallery-header    ← heading + subtext
 *       .gallery-grid      ← grid of photo cards with "Click to view" overlay
 */

const GALLERY_ITEMS = [
  { src: "/images/estate-aerial.jpg", alt: "Ardent estate aerial view" },
  { src: "/images/master-plan.jpg", alt: "Ardent master plan" },
  { src: "/images/cta-envelope.jpg", alt: "Ardent lifestyle spaces" },
  { src: "/images/hero-poster.jpg", alt: "Ardent estate entrance" },
  { src: "/images/estate-aerial.jpg", alt: "Ardent community spaces" },
  { src: "/images/master-plan.jpg", alt: "Ardent infrastructure" },
];

export default function Gallery() {
  return (
    <div className="gallery-super-container">
      <div className="gallery-section">
        {/* ===== Header ===== */}
        <div className="gallery-header">
          <h2>Pictures from Site</h2>
          <p>
            Check out some stunning photos from our past site visits. Follow our
            journey as we bring this community to life.
          </p>
        </div>

        {/* ===== Photo grid ===== */}
        <div className="gallery-grid">
          {GALLERY_ITEMS.map((item, i) => (
            <div key={i} className="gallery-card">
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span>Click to view</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
