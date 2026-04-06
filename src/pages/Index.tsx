import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import VehiclesSection from "@/components/VehiclesSection";
import BookingForm from "@/components/BookingForm";
import AirportTransferSection from "@/components/AirportTransferSection";
import TourPackagesSection from "@/components/TourPackagesSection";
import RatesSection from "@/components/RatesSection";
import ReviewsSection from "@/components/ReviewsSection";
import AboutSection from "@/components/AboutSection";
import InquirySection from "@/components/InquirySection";
import ServiceAreaMapSection from "@/components/ServiceAreaMapSection";
import ContactSection from "@/components/ContactSection";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <VehiclesSection />
      <BookingForm />
      <AirportTransferSection />
      <TourPackagesSection />
      <RatesSection />
      <ReviewsSection />
      <AboutSection />
      <InquirySection />
      <ServiceAreaMapSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
