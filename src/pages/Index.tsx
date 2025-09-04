import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustIndicators from "@/components/TrustIndicators";
import Services from "@/components/Services";
import Products from "@/components/Products";

const Index = () => {
  return (
    <div className="min-h-screen font-sans">
      <Navigation />
      <Hero />
      <TrustIndicators />
      <Services />
      <Products />
    </div>
  );
};

export default Index;
