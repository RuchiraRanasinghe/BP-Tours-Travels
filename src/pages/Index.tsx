import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import VehiclesSection from "@/components/VehiclesSection";
import BookingForm from "@/components/BookingForm";
import AirportTransferSection from "@/components/AirportTransferSection";
import AirportPickupSection from "@/components/AirportPickupSection";
import AirportDropSection from "@/components/AirportDropSection";
import MeetGreetSection from "@/components/MeetGreetSection";
import BookingSection from "@/components/BookingSection";
import PricingSection from "@/components/PricingSection";
import FleetSection from "@/components/FleetSection";
import PaymentSection from "@/components/PaymentSection";
import TourPackagesSection from "@/components/TourPackagesSection";
import RatesSection from "@/components/RatesSection";
import TrackingSection from "@/components/TrackingSection";
import SupportSection from "@/components/SupportSection";
import AccountSection from "@/components/AccountSection";
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
      
      {/* Airport Services Section */}
      <AirportTransferSection />
      <AirportPickupSection />
      <AirportDropSection />
      <MeetGreetSection />
      
      {/* Local Transport Section */}
      <BookingForm />
      <BookingSection />
      
      {/* Pricing Section */}
      <PricingSection />
      <RatesSection />
      
      {/* Vehicles Section */}
      <VehiclesSection />
      <FleetSection />
      
      {/* Payment Section */}
      <PaymentSection />
      
      {/* Tracking Section */}
      <TrackingSection />
      
      {/* Support Section */}
      <SupportSection />
      
      {/* Account Section */}
      <AccountSection />
      
      {/* Other Sections */}
      <TourPackagesSection />
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
