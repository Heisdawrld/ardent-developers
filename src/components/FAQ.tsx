"use client";

/**
 * FAQ — Habitat `.faq-section` pattern (1:1 CSS replica).
 *
 * Structure (from HABITAT_REF/sections/07-faq-super-container.html):
 *
 *   .faq-super-container
 *     .faq-section                          ← 3000px tall, sticky logo center
 *       .sticky-container                   ← position: sticky; top: 0; h: 100vh
 *         img                               ← centered logo (120×160, 0.8 opacity)
 *       section                             ← position: absolute; top: 0; full w
 *         .img-leaf                         ← absolute top, space-between
 *           img.first                       ← left leaf
 *           img.second                      ← right leaf
 *         h3.head-container                 ← 34px centered intro
 *         .faqs                             ← flex column, gap 25px, padding 0 30px
 *           .row                            ← grid 3-col, gap 25px
 *             .faq                          ← colored card (backdrop-blur)
 *               p                           ← 20px question
 *               h4                          ← 22px answer
 *             .spacer                       ← transparent grid cell
 *
 * Row layout (Habitat pattern — 5 FAQ cards across 4 rows in a 3-col grid):
 *   Row 1: faq + spacer + faq
 *   Row 2: spacer + faq + spacer
 *   Row 3: spacer + faq + faq
 *   Row 4: faq + spacer + spacer
 *
 * Each .faq card has Habitat-style translucent color tint via inline
 * background style — adapted from Habitat's greens/purples to Ardent's
 * warm gold/cream tint family for brand cohesion.
 */

const FAQS: { q: string; a: string; bg: string }[] = [
  {
    q: "When will construction begin?",
    a: "Construction begins Q2 2025, with first plot allocations happening immediately after subscription. Phase 1 infrastructure is already underway, with the gatehouse and perimeter fencing scheduled for completion by mid-2025.",
    bg: "rgba(230, 200, 140, 0.18)", // gold-soft tint
  },
  {
    q: "What's the documentation process?",
    a: "After you fill and submit the subscription form, you'll get a Receipt and Contract of Sale via email within 1-2 business days. You will then receive your Deed of Assignment and Provisional Survey at the next allocation event.",
    bg: "rgba(244, 233, 210, 0.85)", // cream-deep tint
  },
  {
    q: "Can I start building immediately?",
    a: "Yes, you can. Our construction team also provides advisory and construction support so you can build climate-responsive, tropical-modern homes from day one — subject to the estate's design guidelines.",
    bg: "rgba(201, 166, 99, 0.18)", // gold-deep tint
  },
  {
    q: "Are there additional costs?",
    a: "Only payment for Survey documents and title perfection when due. These are statutory, infrastructure-related, and clearly scheduled before you commit. No hidden levies, no surprise fees.",
    bg: "rgba(250, 247, 240, 0.95)", // cream tint
  },
  {
    q: "Is the land free of encumbrance?",
    a: "Yes, fully verified. The estate carries a clean Certificate of Occupancy (C of O), and the developer is actively collaborating with the office of the Surveyor General to ensure adherence to land-occupancy regulations.",
    bg: "rgba(230, 200, 140, 0.28)", // stronger gold tint
  },
];

export default function FAQ() {
  // Build the 4-row grid from the 5 FAQs (row layout per Habitat pattern).
  // Row 1: faq[0], spacer, faq[1]
  // Row 2: spacer, faq[2], spacer
  // Row 3: spacer, faq[3], faq[4]
  // Row 4: faq (extra placeholder? No — Habitat's row 4 has 1 faq + 2 spacers,
  //          but we only have 5 FAQ cards. We omit row 4 since the layout above
  //          already places all 5 cards cleanly across 3 rows.)
  // To stay faithful to Habitat's exact row count, we replicate row 4 with a
  // single 6th FAQ-style card (a closing / contact prompt) so the visual
  // rhythm matches the reference site exactly.

  const rows: React.ReactNode[][] = [
    [
      <div key="r1f1" className="faq" style={{ background: FAQS[0].bg }}>
        <p>{FAQS[0].q}</p>
        <h4>{FAQS[0].a}</h4>
      </div>,
      <div key="r1s1" className="spacer" />,
      <div key="r1f2" className="faq" style={{ background: FAQS[1].bg }}>
        <p>{FAQS[1].q}</p>
        <h4>{FAQS[1].a}</h4>
      </div>,
    ],
    [
      <div key="r2s1" className="spacer" />,
      <div key="r2f1" className="faq" style={{ background: FAQS[2].bg }}>
        <p>{FAQS[2].q}</p>
        <h4>{FAQS[2].a}</h4>
      </div>,
      <div key="r2s2" className="spacer" />,
    ],
    [
      <div key="r3s1" className="spacer" />,
      <div key="r3f1" className="faq" style={{ background: FAQS[3].bg }}>
        <p>{FAQS[3].q}</p>
        <h4>{FAQS[3].a}</h4>
      </div>,
      <div key="r3f2" className="faq" style={{ background: FAQS[4].bg }}>
        <p>{FAQS[4].q}</p>
        <h4>{FAQS[4].a}</h4>
      </div>,
    ],
    [
      <div
        key="r4f1"
        className="faq"
        style={{ background: "rgba(201, 166, 99, 0.28)" }}
      >
        <p>Still have questions?</p>
        <h4>
          Reach out on WhatsApp or Instagram — our team typically responds
          within a few hours, every day of the week.
        </h4>
      </div>,
      <div key="r4s1" className="spacer" />,
      <div key="r4s2" className="spacer" />,
    ],
  ];

  return (
    <div id="faqs" className="faq-super-container">
      <div className="faq-section">
        {/* ===== Sticky centered logo (Habitat pattern) ===== */}
        <div className="sticky-container">
          <img
            src="/logo-header.png"
            alt="Ardent Limited"
            style={{ height: 160, width: "auto", opacity: 0.8 }}
          />
        </div>

        <section>
          {/* Side leaf decorations (Habitat faq-leaf-left / -right pattern) */}
          <div className="img-leaf">
            <img
              src="/habitat-svgs/side_leaf.svg"
              alt=""
              aria-hidden="true"
              className="first"
              style={{ width: 197, height: "auto" }}
            />
            <img
              src="/habitat-svgs/side_leaf.svg"
              alt=""
              aria-hidden="true"
              className="second"
              style={{
                width: 197,
                height: "auto",
                transform: "scale(-1, 1)",
              }}
            />
          </div>

          {/* Section intro headline */}
          <h3 className="head-container">
            Some <span>frequently asked questions</span> about our project.
            We answered them so you don&apos;t have to ask.
          </h3>

          {/* FAQ cards arranged in Habitat's 4-row × 3-col grid */}
          <div className="faqs">
            {rows.map((row, i) => (
              <div key={i} className="row">
                {row}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
