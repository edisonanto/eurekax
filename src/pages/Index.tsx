import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CalculatorSection from "@/components/CalculatorSection";
import ElementsSection from "@/components/ElementsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <CalculatorSection />
      <ElementsSection />
      <Footer />
    </main>
  );
};

export default Index;
