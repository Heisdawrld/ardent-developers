import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Vision from "@/components/Vision";
import Amenities from "@/components/Amenities";
import Infrastructure from "@/components/Infrastructure";
import Register from "@/components/Register";
import Gallery from "@/components/Gallery";
import Letter from "@/components/Letter";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <>
      {/* Sticky floating pill nav — Habitat pattern */}
      <Header />

      <main className="flex-1">
        {/* 0. Hero — full-bleed image + 52% black overlay, split-screen content */}
        <Hero />

        {/* 1. Overview / Vision intro — 2-col with side leaf + line poles */}
        <Overview />

        {/* 2. Vision — sticky full-bleed image with overlay headline */}
        <Vision />

        {/* 3. Amenities — numbered features list + sticky image + market cards */}
        <Amenities />

        {/* 4. Infrastructure — sticky video + quote + map + timeline + Lekki Corridor info */}
        <Infrastructure />

        {/* 5. Pricing / Register — Habitat adventure-section pattern */}
        <Register />

        {/* 6. Gallery — "Pictures from Site" photo grid */}
        <Gallery />

        {/* 7. Letter — CEO/founder letter to reader */}
        <Letter />

        {/* 8. FAQ — sticky logo + 3-column colored cards */}
        <FAQ />

        {/* 9. Footer / final CTA */}
        <Footer />
      </main>

      {/* Sticky bottom CTA bar (mobile only, appears after hero) */}
      <StickyCTA />
    </>
  );
}
