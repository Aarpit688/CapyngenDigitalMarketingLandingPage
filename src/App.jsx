import React from "react";
import HeroSection from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { FeaturesSection } from "./components/FeaturesSection";
import GetStarted from "./components/GetStarted";
import { assets } from "./assets/assets";
import GrowPresenceSection from "./components/GrowPresenceSection";
import WhyChooseCapyngen from "./components/WhyChooseCapyngen";
import CapyngenComparisonTable from "./components/CapyngenComparisonTable";
import ResultsSection from "./components/ResultsSection";
import { ServicesSection } from "./components/ServicesSection";
import TermsAndConditions from "./components/TermsAndConditions";
import About from "./components/About";

const App = () => {
  return (
    <div className="overflow-hidden scroll-smooth">
      <Navbar />
      <HeroSection />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Trusted by 1000+ Businesses"
        description={[
          "Capyngen has collaborated with global brands, startups, and enterprises to help them achieve exceptional digital success.",
          "We believe every business — big or small — deserves a strong and lasting online presence.",
        ]}
        buttonText="Contact Us"
        backgroundVideo={assets.backgroundVideo}
        textSize="text-lg md:text-xl"
      />

      <FeaturesSection />
      <div id="whychoose"></div>
      <WhyChooseCapyngen />
      <GrowPresenceSection />
      <div id="whycapyngenbetter"></div>
      <CapyngenComparisonTable />
      <ResultsSection />
      <div id="ourservices"></div>
      <ServicesSection />
      <TermsAndConditions />
      <div id="about"></div>
      <About />
    </div>
  );
};

export default App;
