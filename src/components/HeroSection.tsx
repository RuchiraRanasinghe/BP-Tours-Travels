import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/bp-logo.jpg";

const HeroSection = () => {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Scenic coastal road" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center px-6 py-20">
        <motion.img
          src={logo}
          alt="BP Tours & Travels"
          className="w-28 h-28 md:w-36 md:h-36 mx-auto mb-6 rounded-2xl shadow-2xl object-cover"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-4 leading-tight"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Premium Travel <br />
          <span className="text-gradient-gold">with Comfort</span>
        </motion.h1>

        <motion.p
          className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-body"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Airport transfers, local rides & tourist travel across Sri Lanka.
          Cars & vans at your service.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <button
            onClick={scrollToBooking}
            className="bg-gradient-gold text-primary-foreground font-semibold px-8 py-4 rounded-xl text-lg shadow-gold hover:scale-105 transition-transform"
          >
            Book Now
          </button>
          <a
            href="https://wa.me/94771399144"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-primary-foreground/30 text-primary-foreground font-semibold px-8 py-4 rounded-xl text-lg hover:bg-primary-foreground/10 transition-colors"
          >
            WhatsApp Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
