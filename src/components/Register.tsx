"use client";

/**
 * Register — Habitat `.adventure-section` pattern (1:1 CSS replica).
 *
 * Structure (from HABITAT_REF/sections/06-price-super-container.html):
 *
 *   .price-super-container
 *     .adventure-section                    ← cream bg
 *       section                             ← flex column, padding 100px 60px
 *         .head-content                     ← centered header
 *           h1                              ← 80px headline w/ span.gold-deep
 *           p                               ← 22px lead copy
 *         .container-img                    ← relative; max-width 1200px
 *           .adventure-img                  ← 600px tall cover image w/ 24px radius
 *             img.ad-vid                    ← hero image (or video when client provides)
 *           .launch-container               ← absolute bottom overlay; 2-col grid
 *             .market                       ← 2-col grid of amenity items + tape SVGs
 *               .item                       ← 15px label w/ bottom hairline
 *             .sale-details-container       ← vertical flex
 *               img.img-leaf.top            ← decorative top-right leaf
 *               img.img-leaf.bottom         ← decorative bottom-left leaf
 *               .sale-price                 ← LAUNCH SALE ONGOING + bullet list
 *                 h2 + ul > li
 *               .investment                ← two info blocks
 *                 .info (h2 + p)
 *                 .sqm-info (h2 + p)
 *           .brochure-form-container        ← 2-col grid; black panel + cream form
 *             .left                         ← h2 + h4 + .lists with checkmark SVGs
 *               .top-content
 *                 h2, h4, .lists > .list > svg + p
 *             form.right                    ← .top-content (p + .form > inputs) + button
 *
 * NOTE: Habitat nests .brochure-form-container *inside* .container-img.
 * We mirror that nesting so the cream form panel overlays the dark image
 * area exactly like the reference site.
 */

const MARKET_ITEMS = [
  "Vibrant Community Hub",
  "24/7 Power Supply",
  "Perimeter Fencing",
  "Intelligent Drainage",
  "Beautiful Landscaping",
  "Central Water System",
];

const BROCHURE_LIST = [
  "Updated plot prices and payment plans",
  "Information about Land Title and documentation",
  "Other opportunities to invest in this project",
];

/** Habitat's two-arrow swap-on-hover link-button roundel (right-arrow variant). */
function ArrowRightPair() {
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

export default function Register() {
  return (
    <div id="pricing" className="price-super-container">
      <div className="adventure-section">
        <section>
          {/* ===== Head content ===== */}
          <div className="head-content">
            <h1>
              Secure Your <span>Plot(s)</span>
            </h1>
            <p>
              Phase 1 spanning 25 acres is now open for reservation. Reserve
              your plots and start building your country home immediately.
            </p>
          </div>

          {/* ===== Container with image + launch overlay + brochure form ===== */}
          <div className="container-img">
            {/* Hero image (slot: drop /public/video.mp4 to enable video bg) */}
            <div className="adventure-img">
              <img
                src="/images/cta-envelope.jpg"
                alt="Ardent estate — reserve your plot"
                fetchPriority="high"
                loading="eager"
              />
            </div>

            {/* Launch-container: 2-col grid overlaying the image */}
            <div className="launch-container">
              {/* LEFT: amenity market list */}
              <div className="market">
                {MARKET_ITEMS.map((label) => (
                  <div key={label} className="item">
                    {label}
                  </div>
                ))}
              </div>

              {/* RIGHT: sale details card (LAUNCH SALE + investment block) */}
              <div className="sale-details-container">
                {/* Decorative leaves (Habitat ad-top-leaf / ad-bottom-leaf) */}
                <img
                  src="/habitat-svgs/side_leaf.svg"
                  alt=""
                  aria-hidden="true"
                  className="img-leaf top"
                  style={{ opacity: 0.7 }}
                />
                <img
                  src="/habitat-svgs/side_leaf.svg"
                  alt=""
                  aria-hidden="true"
                  className="img-leaf bottom"
                  style={{ opacity: 0.7, transform: "scale(-1, 1)" }}
                />

                <div className="sale-price">
                  <h2>LAUNCH SALE ONGOING</h2>
                  <ul>
                    <li>60 mins from VI</li>
                    <li>15 mins from Lekki Free Zone in 2028.</li>
                  </ul>
                </div>

                <div className="investment">
                  <div className="info">
                    <h2>
                      You get free 50 trees per plot; 300 trees per acre.
                    </h2>
                    <p>Grab the offer</p>
                  </div>
                  <div className="sqm-info">
                    <h2>NGN2.95Million</h2>
                    <p>Plots sizes starting at 600SQM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Brochure form (Habitat nests this inside .container-img) */}
            <div className="brochure-form-container">
              {/* LEFT: dark panel with brochure pitch + checkmark list */}
              <div className="left">
                <div className="top-content">
                  <h2>Download Brochure</h2>
                  <h4>You&apos;ll also get access to:</h4>

                  <div className="lists">
                    {BROCHURE_LIST.map((label) => (
                      <div key={label} className="list">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <rect
                            width="24"
                            height="24"
                            rx="12"
                            fill="var(--gold-soft)"
                          />
                          <path
                            d="M16.3536 12.3536C16.5488 12.1583 16.5488 11.8417 16.3536 11.6464L13.1716 8.46447C12.9763 8.2692 12.6597 8.2692 12.4645 8.46447C12.2692 8.65973 12.2692 8.97631 12.4645 9.17157L15.2929 12L12.4645 14.8284C12.2692 15.0237 12.2692 15.3403 12.4645 15.5355C12.6597 15.7308 12.9763 15.7308 13.1716 15.5355L16.3536 12.3536ZM8 12L8 12.5L16 12.5L16 12L16 11.5L8 11.5L8 12Z"
                            fill="var(--black)"
                          />
                        </svg>
                        <p>{label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative line-pole SVG (Habitat pattern — 10 increasing bars) */}
                <svg
                  width="163"
                  height="60"
                  viewBox="0 0 163 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  style={{ opacity: 0.6, marginTop: "auto" }}
                >
                  <g opacity="0.5">
                    <line
                      x1="4"
                      y1="60"
                      x2="4"
                      y2="0"
                      stroke="var(--cream)"
                      strokeWidth="2"
                    />
                    <rect
                      x="11"
                      width="3"
                      height="60"
                      rx="1.5"
                      fill="var(--cream)"
                    />
                    <rect
                      x="20"
                      width="5"
                      height="60"
                      rx="2.5"
                      fill="var(--cream)"
                    />
                    <rect
                      x="31"
                      width="7"
                      height="60"
                      rx="3.5"
                      fill="var(--cream)"
                    />
                    <rect
                      x="44"
                      width="9"
                      height="60"
                      rx="4.5"
                      fill="var(--cream)"
                    />
                    <rect
                      x="59"
                      width="11"
                      height="60"
                      rx="5.5"
                      fill="var(--cream)"
                    />
                    <rect
                      x="76"
                      width="13"
                      height="60"
                      rx="6.5"
                      fill="var(--cream)"
                    />
                    <rect
                      x="95"
                      width="15"
                      height="60"
                      rx="7.5"
                      fill="var(--cream)"
                    />
                    <rect
                      x="116"
                      width="17"
                      height="60"
                      rx="8.5"
                      fill="var(--cream)"
                    />
                    <rect
                      x="139"
                      width="19"
                      height="60"
                      rx="9.5"
                      fill="var(--cream)"
                    />
                  </g>
                </svg>
              </div>

              {/* RIGHT: cream form panel */}
              <form
                className="right"
                onSubmit={(e) => {
                  e.preventDefault();
                  // Slot: wire to a real API route when ready.
                }}
              >
                <div className="top-content">
                  <p>
                    Drop your email and we&apos;ll send you the project
                    brochure right away.
                  </p>

                  <div className="form">
                    {/* Full Name */}
                    <div className="input">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M7.5 7C6.5375 7 5.71358 6.65733 5.02825 5.972C4.34275 5.2865 4 4.4625 4 3.5C4 2.5375 4.34275 1.71358 5.02825 1.02825C5.71358 0.34275 6.5375 0 7.5 0C8.4625 0 9.28642 0.34275 9.97175 1.02825C10.6573 1.71358 11 2.5375 11 3.5C11 4.4625 10.6573 5.2865 9.97175 5.972C9.28642 6.65733 8.4625 7 7.5 7ZM0 13.0962V12.3923C0 11.9026 0.133 11.4491 0.399 11.0317C0.665 10.6144 1.0205 10.2936 1.4655 10.0693C2.45383 9.58475 3.45092 9.22133 4.45675 8.979C5.46258 8.73667 6.477 8.6155 7.5 8.6155C8.523 8.6155 9.53742 8.73667 10.5433 8.979C11.5491 9.22133 12.5462 9.58475 13.5345 10.0693C13.9795 10.2936 14.335 10.6144 14.601 11.0317C14.867 11.4491 15 11.9026 15 12.3923V13.0962C15 13.5179 14.8523 13.8766 14.5568 14.1723C14.2613 14.4678 13.9026 14.6155 13.4808 14.6155H1.51925C1.09742 14.6155 0.73875 14.4678 0.44325 14.1723C0.14775 13.8766 0 13.5179 0 13.0962Z"
                          fill="var(--body)"
                        />
                      </svg>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        required
                        name="fullName"
                      />
                    </div>

                    {/* Phone */}
                    <div className="input">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M1.05975 17C0.756917 17 0.504583 16.9 0.30275 16.7C0.100917 16.5 0 16.25 0 15.95V12.7078C0 12.4654 0.0798334 12.2487 0.2395 12.0577C0.399167 11.8667 0.60525 11.7379 0.85775 11.6713L3.6345 11.1058C3.87433 11.0724 4.10542 11.0884 4.32775 11.1538C4.55025 11.2192 4.73975 11.3334 4.89625 11.4963L7.14025 13.7598C7.85692 13.3546 8.52425 12.9167 9.14225 12.4462C9.76025 11.9757 10.3436 11.4661 10.8923 10.9173C11.4488 10.3647 11.9657 9.785 12.4432 9.178C12.9209 8.57083 13.3456 7.92692 13.7172 7.24625L11.4078 4.998C11.2616 4.86467 11.1603 4.69992 11.1038 4.50375C11.0474 4.30758 11.0391 4.073 11.0788 3.8L11.652 0.85775C11.7045 0.615417 11.8273 0.411917 12.0203 0.24725C12.2133 0.082417 12.436 0 12.6885 0H15.95C16.25 0 16.5 0.100916 16.7 0.30275C16.9 0.504583 17 0.756917 17 1.05975C17 2.94425 16.5618 4.83583 15.6855 6.7345C14.8092 8.63333 13.5746 10.3808 11.9818 11.977C10.3888 13.573 8.64133 14.8092 6.7395 15.6855C4.8375 16.5618 2.94425 17 1.05975 17Z"
                          fill="var(--body)"
                        />
                      </svg>
                      <input
                        type="tel"
                        placeholder="Enter your phone number"
                        required
                        name="phone"
                      />
                    </div>

                    {/* Email */}
                    <div className="input">
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M9.5 19C8.18583 19 6.95083 18.7507 5.795 18.252C4.63917 17.7533 3.63375 17.0766 2.77875 16.2218C1.92375 15.3669 1.24692 14.3617 0.74825 13.206C0.249417 12.0503 0 10.8156 0 9.50175C0 8.18775 0.249333 6.95267 0.748 5.7965C1.24667 4.64033 1.92342 3.63467 2.77825 2.7795C3.63308 1.92433 4.63833 1.24725 5.794 0.74825C6.94967 0.249417 8.18442 0 9.49825 0C10.8123 0 12.0473 0.249417 13.2035 0.74825C14.3597 1.24692 15.3653 1.92375 16.2205 2.77875C17.0757 3.63375 17.7528 4.63917 18.2518 5.795C18.7506 6.95083 19 8.18583 19 9.5V10.7192C19 11.6321 18.6866 12.4071 18.0598 13.0443C17.4329 13.6814 16.663 14 15.75 14C15.1602 14 14.6133 13.8558 14.1095 13.5673C13.6057 13.2788 13.2076 12.8819 12.9152 12.3767C12.4832 12.8923 11.9727 13.2917 11.3837 13.575C10.7946 13.8583 10.1667 14 9.5 14C8.25133 14 7.18917 13.5622 6.3135 12.6865C5.43783 11.8108 5 10.7487 5 9.5C5 8.25133 5.43783 7.18917 6.3135 6.3135C7.18917 5.43783 8.25133 5 9.5 5C10.7487 5 11.8108 5.43783 12.6865 6.3135C13.5622 7.18917 14 8.25133 14 9.5V10.7192C14 11.2102 14.1689 11.6298 14.5068 11.978C14.8446 12.326 15.259 12.5 15.75 12.5C16.241 12.5 16.6554 12.326 16.9932 11.978C17.3311 11.6298 17.5 11.2102 17.5 10.7192V9.5C17.5 7.26667 16.725 5.375 15.175 3.825C13.625 2.275 11.7333 1.5 9.5 1.5C7.26667 1.5 5.375 2.275 3.825 3.825C2.275 5.375 1.5 7.26667 1.5 9.5C1.5 11.7333 2.275 13.625 3.825 15.175C5.375 16.725 7.26667 17.5 9.5 17.5H13.75C13.9625 17.5 14.1407 17.5719 14.2845 17.7157C14.4282 17.8596 14.5 18.0378 14.5 18.2502C14.5 18.4629 14.4282 18.641 14.2845 18.7845C14.1407 18.9282 13.9625 19 13.75 19H9.5ZM9.5 12.5C10.3333 12.5 11.0417 12.2083 11.625 11.625C12.2083 11.0417 12.5 10.3333 12.5 9.5C12.5 8.66667 12.2083 7.95833 11.625 7.375C11.0417 6.79167 10.3333 6.5 9.5 6.5C8.66667 6.5 7.95833 6.79167 7.375 7.375C6.79167 7.95833 6.5 8.66667 6.5 9.5C6.5 10.3333 6.79167 11.0417 7.375 11.625C7.95833 12.2083 8.66667 12.5 9.5 12.5Z"
                          fill="var(--body)"
                        />
                      </svg>
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        required
                        name="email"
                      />
                    </div>
                  </div>
                </div>

                <div className="btn-wrap">
                  <button
                    type="submit"
                    className="link-button"
                    style={{ width: "100%" }}
                  >
                    <div className="txt">Download Now!</div>
                    <ArrowRightPair />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
