import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Gallery from "@/components/Gallery";
import ScheduleOfAreas from "@/components/ScheduleOfAreas";
import Amenities from "@/components/Amenities";
import DesignDoctrine from "@/components/DesignDoctrine";
import Location from "@/components/Location";
import Features from "@/components/Features";
import Register from "@/components/Register";
import Letter from "@/components/Letter";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-14 lg:pt-16">
        <Hero />
        <Overview />
        <Gallery />
        <ScheduleOfAreas />
        <Amenities />
        <DesignDoctrine />
        <Location />
        <Features />
        <Register />
        <Letter />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
