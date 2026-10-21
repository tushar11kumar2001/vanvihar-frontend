import HowToReachSection from "@/sections/HowToReachSection";
import OverviewSection from "@/sections/OverviewSection";
import ParkHeroSection from "@/sections/ParkHeroSection";
import SafariOptionSection from "@/sections/SafariOptionSection";
import ThingsToDoSection from "@/sections/ThingsToDoSection";

function ParkPage() {
    return (
        <div>
         <ParkHeroSection />
         <OverviewSection />
         <ThingsToDoSection />
         <HowToReachSection />
         <div className="bg-gray-300 w-[95%] mx-auto h-[1px]" />
        <SafariOptionSection />

        </div>
    );
}

export default ParkPage;