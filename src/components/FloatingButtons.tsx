import { Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FloatingButtons = () => {
  return (
    <>
      {/* Left side - Call & WhatsApp */}
      <div className="fixed left-4 bottom-6 z-50 flex flex-col gap-3">
        <a
          href="tel:+94707399144"
          className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Call us"
        >
          <Phone className="w-5 h-5" />
        </a>
        <a
          href="https://wa.me/94771399144"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[hsl(142,70%,42%)] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="WhatsApp us"
        >
          <MessageCircle className="w-5 h-5" />
        </a>
      </div>

      {/* Right side - Book Now (mobile sticky) */}
      <Link
        to="/booking"
        className="fixed right-4 bottom-6 z-50 md:hidden bg-foreground text-background font-medium px-6 py-3 rounded-full shadow-lg text-sm hover:bg-foreground/90 transition-colors"
      >
        Book Now
      </Link>
    </>
  );
};

export default FloatingButtons;
