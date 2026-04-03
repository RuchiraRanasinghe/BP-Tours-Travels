import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <>
      {/* Left side - Call & WhatsApp */}
      <div className="fixed left-4 bottom-24 md:bottom-6 z-50 flex flex-col gap-3">
        <a
          href="tel:+94707399144"
          className="w-14 h-14 rounded-full bg-gradient-blue text-primary-foreground flex items-center justify-center shadow-blue hover:scale-125 active:scale-100 transition-transform duration-300"
          aria-label="Call us"
          title="Call us"
        >
          <Phone className="w-6 h-6" />
        </a>
        <a
          href="https://wa.me/94771399144"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[hsl(var(--green))] text-primary-foreground flex items-center justify-center shadow-lg hover:scale-125 active:scale-100 transition-transform duration-300"
          aria-label="WhatsApp us"
          title="WhatsApp us"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>

    </>
  );
};

export default FloatingButtons;
