import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <>
      {/* Left side - Call & WhatsApp */}
      <div className="fixed left-4 bottom-24 md:bottom-6 z-50 flex flex-col gap-3">
        <a
          href="tel:+94707399144"
          className="w-14 h-14 rounded-full bg-gradient-gold text-primary-foreground flex items-center justify-center shadow-gold hover:scale-110 active:scale-100 transition-transform"
          aria-label="Call us"
        >
          <Phone className="w-6 h-6" />
        </a>
        <a
          href="https://wa.me/94771399144"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[hsl(var(--green))] text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 active:scale-100 transition-transform"
          aria-label="WhatsApp us"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>

      {/* Right side - Book Now */}
      <a
        href="#booking"
        className="fixed right-4 bottom-24 md:bottom-6 z-50 bg-gradient-gold text-primary-foreground font-semibold px-6 py-3 rounded-full shadow-gold hover:scale-105 active:scale-100 transition-transform"
      >
        Book Now
      </a>
    </>
  );
};

export default FloatingButtons;
