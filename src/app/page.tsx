import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import ImageStrip from "@/components/ImageStrip";
import Amenities from "@/components/Amenities";
import WatermarkHeadline from "@/components/WatermarkHeadline";
import VideoQuote from "@/components/VideoQuote";
import Location from "@/components/Location";
import Register from "@/components/Register";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* 0. Hero — full-bleed image + 52% black overlay */}
        <Hero />

        {/* 1. Overview / Vision — 2-col intro with side leaf */}
        <Overview />

        {/* 2. Image strip — full-bleed rounded image card (estate aerial) */}
        <ImageStrip
          src="/images/estate-aerial.jpg"
          alt="Ardent Estate — aerial vision"
          overlay={{
            eyebrow: "The Vision",
            title: "A landmark estate, by design.",
          }}
        />

        {/* 3. Amenities — 3-col grid with gold icons */}
        <Amenities />

        {/* 4. Image strip — master plan / plot layout */}
        <ImageStrip
          src="/images/master-plan.jpg"
          alt="Ardent Estate — master plan"
          overlay={{
            eyebrow: "Master Plan",
            title: "Every plot, planned with intention.",
          }}
        />

        {/* 5. Watermark headline — sticky translucent big text */}
        <WatermarkHeadline
          tag="Infrastructure"
          lines={[
            "The Lekki Corridor:",
            "What's special about",
            "this once-in-a-generation",
            "infrastructure shift.",
          ]}
        />

        {/* 6. Video quote — sticky video bg with play button */}
        <VideoQuote />

        {/* 7. Location — interactive year-switcher map */}
        <Location />

        {/* 8. Pricing / Register — dark card on cream bg */}
        <Register />

        {/* 9. Image strip — CTA teaser */}
        <ImageStrip
          src="/images/cta-envelope.jpg"
          alt="Ardent — luxury architectural detail"
        />

        {/* 10. FAQ — with side leaf decorations */}
        <FAQ />

        {/* 11. Footer / final CTA */}
        <Footer />
      </main>

      {/* Sticky bottom CTA bar (mobile only, appears after hero) */}
      <StickyCTA />
    </>
  );
}
