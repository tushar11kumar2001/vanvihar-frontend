
import AboutSection from "@/sections/AboutSection";
import FAQSection from "@/sections/FAQSection";
import Footer from "@/sections/FooterSection";
import HeroSection from "@/sections/HeroSection";
import NationalParks from "@/sections/NationalParkSection";
import Navbar from "@/components/Navbar";
import PopularPackages from "@/sections/PopularPackages";
import PopularResorts from "@/sections/PopularResorts";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
       <AboutSection />
      <NationalParks />
      <PopularPackages />
      <PopularResorts />
      <FAQSection/>
      <Footer/>
    </>
  );
}
