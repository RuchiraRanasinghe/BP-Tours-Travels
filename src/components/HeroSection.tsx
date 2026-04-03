import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.svg";

const HeroSection = () => {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Bandaranaike International Airport with Sri Lankan travel scene" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/75 via-foreground/55 to-foreground/85" />
      </div>

      <div className="relative z-10 container text-center px-6 py-24">
        <motion.span
          className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Trusted Travel Partner in Sri Lanka
        </motion.span>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary-foreground mb-6 leading-[1.05] tracking-tight"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.6 }}
        >
          Premium Travel
          <br />
          <span className="text-gradient-gold">with Comfort</span>
        </motion.h1>

        <motion.p
          className="text-primary-foreground/65 text-lg md:text-xl max-w-lg mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          Airport transfers, local rides & island-wide tours.
          Cars & vans — available 24/7.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <button
            onClick={scrollToBooking}
            className="bg-gradient-gold text-primary-foreground font-semibold px-10 py-4 rounded-full text-lg shadow-gold hover:scale-110 active:scale-95 transition-transform duration-300"
          >
            Book Your Ride
          </button>
          <a
            href="https://wa.me/94771399144"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-primary-foreground/20 text-primary-foreground font-semibold px-10 py-4 rounded-full text-lg hover:border-primary-foreground/40 hover:bg-primary-foreground/5 transition-all duration-300"
          >
            WhatsApp Us
          </a>
        </motion.div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <ArrowDown className="w-5 h-5 text-primary-foreground/25 mx-auto animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
