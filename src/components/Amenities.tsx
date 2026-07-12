"use client";

/**
 * Amenities — Habitat `.amenities-super-container` + `.new-habitat-commercial`
 * pattern (1:1 CSS replica).
 *
 * Structure (from HABITAT_REF/sections/03-amenities-super-container.html):
 *
 *   .amenities-super-container
 *     .new-habitat-commercial         ← cream→white gradient wrapper
 *       .btn-tag                      ← gold-soft pill chip (eyebrow label)
 *       .avenue-section               ← full-bleed sticky image + overlay
 *         .txt-name                   ← sticky watermark name
 *           p                         ← "Ardent Lifestyle"
 *         section
 *           img                       ← full-bleed master-plan.jpg
 *           .overlay-bg > .overlay   ← 28% black tint
 *       .commercial                   ← 0 20px padding wrapper
 *         .market-container           ← flex row of 5 .market-card items
 *           .market-card
 *             img                     ← 368px tall amenity photo
 *             .title                  ← 22px ink label
 *       .bottom-container             ← centered CTA block
 *         h3                          ← 34px descriptive headline
 *         .contain-line               ← gold rule + dot separator
 *           .line > .round
 *         a.link-button               ← CTA button (Habitat pattern)
 */

const MARKET_CARDS = [
  {
    title: "3000 SQM Clubhouse",
    img: "/images/estate-aerial.jpg",
    alt: "Ardent Clubhouse",
  },
  {
    title: "Farm-to-Table Restaurant",
    img: "/images/master-plan.jpg",
    alt: "Ardent Farm-to-Table Restaurant",
  },
  {
    title: "Wellness Spa",
    img: "/images/cta-envelope.jpg",
    alt: "Ardent Wellness Spa",
  },
  {
    title: "Co-working Space",
    img: "/images/estate-aerial.jpg",
    alt: "Ardent Co-working Space",
  },
  {
    title: "Sports Complex",
    img: "/images/master-plan.jpg",
    alt: "Ardent Sports Complex",
  },
];

/** Habitat's exact two-arrow swap-on-hover link-button. */
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

export default function Amenities() {
  return (
    <div id="amenities" className="amenities-super-container">
      <div className="new-habitat-commercial">
        {/* ===== Eyebrow chip ===== */}
        <div className="btn-tag">Ardent Lifestyle</div>

        {/* ===== Full-bleed sticky master-plan image ===== */}
        <div className="avenue-section">
          <div className="txt-name">
            <p>Ardent Lifestyle</p>
          </div>
          <section>
            <img
              src="/images/master-plan.jpg"
              alt="Ardent master plan — full-bleed avenue view"
              fetchPriority="high"
              loading="eager"
            />
            <div className="overlay-bg">
              <div className="overlay" />
            </div>
          </section>
        </div>

        {/* ===== Market card carousel (5 amenity cards) ===== */}
        <div className="commercial">
          {/* Habitat nests .market-container > .carousel-root > .carousel-track.
              We collapse those wrappers and render the .market-card children
              in a horizontal flex row with the same visual rhythm. */}
          <div
            className="market-container"
            style={{
              display: "flex",
              gap: 10,
              overflowX: "auto",
              paddingBottom: 8,
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {MARKET_CARDS.map((card) => (
              <div
                key={card.title}
                className="market-card"
                style={{ flex: "0 0 auto", scrollSnapAlign: "start" }}
              >
                <img
                  src={card.img}
                  alt={card.alt}
                  loading="lazy"
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
                <div className="title">{card.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Bottom container — descriptive headline + line + CTA ===== */}
        <div className="bottom-container">
          <h3>
            Ardent Lifestyle features a thoughtfully curated collection of
            community spaces. These include a charming clubhouse, a
            farm-to-table restaurant, a wellness spa, a co-working hub, and
            a sports complex — all designed to anchor lasting value into
            every plot.
          </h3>

          <div className="contain-line">
            <div className="line" />
            <div className="round" />
          </div>

          <a href="#pricing" className="link-button">
            <div className="txt">Learn more about Ardent Lifestyle</div>
            <LinkButtonArrowPair />
          </a>
        </div>
      </div>
    </div>
  );
}
