import Navbar from "@/components/Navbar";
import BookingForm from "@/components/BookingForm";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const BookingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <BookingForm />
      </div>
      <CTASection />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default BookingPage;
