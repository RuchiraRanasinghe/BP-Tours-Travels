import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import VehiclesSection from "@/components/VehiclesSection";
import BookingForm from "@/components/BookingForm";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <VehiclesSection />
      <BookingForm />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
