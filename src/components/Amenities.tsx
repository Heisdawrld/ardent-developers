"use client";

/**
 * Amenities — Hybrid Habitat + Kota No.1.
 *
 * Keeps Habitat's editorial intro + numbered amenity list + market cards,
 * adds Kota-style "Communal Facilities" structured table.
 */

const AMENITY_ITEMS = [
  {
    num: "02",
    title: "Community Power Supply",
    desc: "Reliable transformer and generator power your plot and Commercial avenue respectively for instant construction and living.",
  },
  {
    num: "03",
    title: "Reliable Central Water System",
    desc: "Pre-installed water system delivers potable water for immediate construction and use.",
  },
  {
    num: "04",
    title: "Perimeter Fencing",
    desc: "Sturdy fencing secures our boundaries, providing optimal security for immediate cultivation work.",
  },
  {
    num: "05",
    title: "Intelligent Drainage System",
    desc: "Our eco-friendly drainage design ensures estate-ready plots, prevents flooding, and recycles water.",
  },
  {
    num: "06",
    title: "Beautiful Landscaping",
    desc: "Lush gardens and flower fields enhance estate's aesthetic appeal, boosting plot values.",
  },
  {
    num: "07",
    title: "Ardent Lifestyle Hub",
    desc: "Our community lifestyle hub unites community members and visitors to enjoy curated experiences all year round.",
  },
];

/** Kota-style Communal Facilities table data */
const FACILITIES = [
  {
    name: "Clubhouse",
    desc: "3,000 SQM community hub for gatherings, events, and resident meetings",
    status: "Phase 1",
    active: true,
  },
  {
    name: "Farm-to-Table Restaurant",
    desc: "Curated dining featuring produce grown within the estate's agrihood",
    status: "Phase 1",
    active: true,
  },
  {
    name: "Wellness Spa",
    desc: "Restorative wellness center with treatment rooms and relaxation lounges",
    status: "Phase 2",
    active: false,
  },
  {
    name: "Co-working Space",
    desc: "Fiber-connected work hub with private offices and meeting rooms",
    status: "Phase 2",
    active: false,
  },
  {
    name: "Sports Complex",
    desc: "Tennis, basketball, and multi-purpose courts with spectator seating",
    status: "Phase 2",
    active: false,
  },
  {
    name: "Central Water System",
    desc: "Pre-installed potable water infrastructure servicing every plot from day one",
    status: "Delivered",
    active: true,
  },
  {
    name: "Perimeter Fencing",
    desc: "Sturdy boundary fencing with controlled access gatehouse",
    status: "Delivered",
    active: true,
  },
  {
    name: "Intelligent Drainage",
    desc: "Eco-friendly drainage design that prevents flooding and recycles water",
    status: "Delivered",
    active: true,
  },
];

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
        <div className="btn-tag">Amenities</div>

        {/* ===== Amenities hero — heading + intro + description ===== */}
        <div className="amenities-hero">
          <h2>Amenities</h2>
          <p>
            Ardent fosters an ecosystem where members and investors collaborate
            to build vibrant communities, while also curating exciting lifestyle
            experiences.
          </p>
          <p>
            Our estate features an ecosystem of amenities so carefully designed
            that your plots are fully serviced from day one. This makes sure you
            can start building your home without delay.
          </p>
        </div>

        {/* ===== Numbered amenity features list (02–07) ===== */}
        <div className="amenities-list">
          {AMENITY_ITEMS.map((item) => (
            <div key={item.num} className="amenity-item">
              <div className="amenity-num">{item.num}</div>
              <div className="amenity-content">
                <h3>{item.title}:</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

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

        {/* ===== Kota-style Communal Facilities table ===== */}
        <div className="communal-facilities-section">
          <div className="communal-facilities-header">
            <h2>Communal Facilities</h2>
            <p>
              Every shared space at Ardent is positioned to anchor lasting value
              into every plot — thoughtfully phased, fully serviced, and curated
              for community life.
            </p>
          </div>

          <table className="facilities-table">
            <thead>
              <tr>
                <th>Facility</th>
                <th>Description</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {FACILITIES.map((facility) => (
                <tr key={facility.name}>
                  <td className="facility-name">{facility.name}</td>
                  <td>{facility.desc}</td>
                  <td
                    className={`facility-status ${facility.active ? "active" : ""}`}
                  >
                    {facility.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ===== Market intro paragraph ===== */}
        <div className="market-intro">
          <p>
            Positioned right along the corridor, Ardent features a thriving
            lifestyle hub. Every activity here is designed to blend strong
            commercial value with warm, memorable experiences for residents and
            visitors.
          </p>
          <p>
            This is far more than just an amenity area. It is a thoughtfully
            created lifestyle ecosystem that welcomes residents with curated
            experiences, wellness moments, and authentic stories of
            Nigeria&apos;s rich cultural heritage and the promise of modern
            community living — making Ardent a delightful must-visit destination
            along the corridor.
          </p>
        </div>

        {/* ===== Market card carousel (5 amenity cards) ===== */}
        <div className="commercial">
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
            farm-to-table restaurant, a wellness spa, a co-working hub, and a
            sports complex — all designed to anchor lasting value into every
            plot.
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
