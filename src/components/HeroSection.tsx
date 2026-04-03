import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Scenic coastal road" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
      </div>

      <div className="relative z-10 container text-center px-6 py-20">
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Trusted Travel Partner in Sri Lanka</span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary-foreground mb-6 leading-[1.05] tracking-tight"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          Premium Travel
          <br />
          <span className="text-gradient-gold">with Comfort</span>
        </motion.h1>

        <motion.p
          className="text-primary-foreground/70 text-lg md:text-xl max-w-xl mx-auto mb-10 font-body leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Airport transfers, local rides & tourist travel across Sri Lanka.
          Cars & vans at your service — 24/7.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.6 }}
        >
          <button
            onClick={scrollToBooking}
            className="bg-gradient-gold text-primary-foreground font-semibold px-10 py-4 rounded-2xl text-lg shadow-gold hover:scale-105 transition-transform"
          >
            Book Your Ride
          </button>
          <a
            href="https://wa.me/94771399144"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary-foreground/20 text-primary-foreground font-semibold px-10 py-4 rounded-2xl text-lg hover:bg-primary-foreground/10 backdrop-blur-sm transition-colors"
          >
            WhatsApp Us
          </a>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <ArrowDown className="w-5 h-5 text-primary-foreground/30 mx-auto animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
