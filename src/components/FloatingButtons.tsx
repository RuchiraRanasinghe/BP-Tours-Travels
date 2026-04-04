import { Mail, MessageCircle, Phone } from "lucide-react";

const FloatingButtons = () => {
  return (
    <>
      <div className="fixed left-4 bottom-24 md:bottom-6 z-50 flex flex-col gap-3">
        <a
          href="tel:+94707290144"
          className="w-14 h-14 rounded-full bg-gradient-blue text-primary-foreground flex items-center justify-center shadow-blue hover:scale-125 active:scale-100 transition-transform duration-300"
          aria-label="Call 070 729 0144"
          title="Call 070 729 0144"
        >
          <Phone className="w-6 h-6" />
        </a>

        <a
          href="https://wa.me/94707290144"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-white text-primary flex items-center justify-center shadow-lg hover:scale-125 active:scale-100 transition-transform duration-300 border border-border/70"
          aria-label="WhatsApp 070 729 0144"
          title="WhatsApp 070 729 0144"
        >
          <MessageCircle className="w-6 h-6 text-blue-700" />
        </a>

        <a
          href="mailto:bandarapremathilaka.tours@gmail.com"
          className="w-14 h-14 rounded-full bg-foreground text-primary-foreground flex items-center justify-center shadow-lg hover:scale-125 active:scale-100 transition-transform duration-300"
          aria-label="Email"
          title="Email"
        >
          <Mail className="w-6 h-6" />
        </a>
      </div>
    </>
  );
};

export default FloatingButtons;
