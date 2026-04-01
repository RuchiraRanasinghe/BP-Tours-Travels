import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import VehiclesSection from "@/components/VehiclesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <ServicesSection />
        <VehiclesSection />
        <WhyChooseUs />
      </div>
      <CTASection />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default ServicesPage;
