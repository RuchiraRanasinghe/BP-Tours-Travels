import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ImageShowcaseSection from "@/components/ImageShowcaseSection";
import GallerySection from "@/components/GallerySection";
import VehiclesSection from "@/components/VehiclesSection";
import BookingForm from "@/components/BookingForm";
import AirportTransferSection from "@/components/AirportTransferSection";
import MeetGreetSection from "@/components/MeetGreetSection";
import BookingSection from "@/components/BookingSection";
import PricingSection from "@/components/PricingSection";
import FleetSection from "@/components/FleetSection";
import PaymentSection from "@/components/PaymentSection";
import TourPackagesSection from "@/components/TourPackagesSection";
import DestinationsSpotlightSection from "@/components/DestinationsSpotlightSection";
import RatesSection from "@/components/RatesSection";
import TrackingSection from "@/components/TrackingSection";
import SupportSection from "@/components/SupportSection";
import AccountSection from "@/components/AccountSection";
import ReviewsSection from "@/components/ReviewsSection";
import AboutSection from "@/components/AboutSection";
import WhySriLankaSection from "@/components/WhySriLankaSection";
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
      
      {/* Image Showcase */}
      <ImageShowcaseSection />
      
      <GallerySection />
      
      {/* Airport Services Section */}
      <AirportTransferSection />
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
      
      {/* Tour Packages & Destinations */}
      <TourPackagesSection />
      <DestinationsSpotlightSection />
      
      {/* Other Sections */}
      <ReviewsSection />
      <AboutSection />
      <WhySriLankaSection />
      <InquirySection />
      <ServiceAreaMapSection />
      <ContactSection />
      
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
