import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, BadgeDollarSign, Clock3, MessageCircle, Star } from "lucide-react";
import HeroBookingWidget from "./HeroBookingWidget";
import HeroCarousel from "./HeroCarousel";

const HeroSection = () => {
  const whatsappUrl = "https://wa.me/94707290144";
  const phoneNumber = "+94707290144";

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Hero Carousel Background */}
      <div className="absolute inset-0 w-full h-full">
        <HeroCarousel />
      </div>

      {/* Booking Widget - Positioned on left center */}
      <div className="absolute left-4 md:left-8 lg:left-12 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
        <HeroBookingWidget />
      </div>

      <div className="relative z-10 container px-6 py-24 md:py-28">
        <div className="grid items-center gap-14">
          <div className="text-center lg:text-left">
            <motion.span
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.22em] uppercase text-primary-foreground/85 backdrop-blur-sm mb-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Sri Lanka Routes
            </motion.span>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary-foreground mb-6 leading-[1.02] tracking-tight"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.6 }}
            >
              Trusted travel
              <br />
              <span className="text-gradient-hero">across Sri Lanka</span>
            </motion.h1>

            <motion.p
              className="max-w-xl mx-auto lg:mx-0 mb-8 rounded-2xl border border-white/12 bg-black/25 px-5 py-4 text-lg md:text-xl leading-relaxed text-white/95 shadow-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
            >
              Your trusted travel partner across the island with clean cars,
              friendly drivers, scenic routes, and fast airport pickups.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.55 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-slate-950/35 px-4 py-2 text-sm font-semibold text-slate-50 shadow-[0_12px_30px_rgba(0,0,0,0.16)] backdrop-blur-md">
                <Star className="h-4 w-4 fill-amber-300 text-amber-300" />
                4.9 rating
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-slate-950/35 px-4 py-2 text-sm font-semibold text-slate-50 shadow-[0_12px_30px_rgba(0,0,0,0.16)] backdrop-blur-md">
                <BadgeDollarSign className="h-4 w-4 text-sky-300" />
                From $25 / trip
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-slate-950/35 px-4 py-2 text-sm font-semibold text-slate-50 shadow-[0_12px_30px_rgba(0,0,0,0.16)] backdrop-blur-md">
                <Clock3 className="h-4 w-4 text-emerald-300" />
                Available 24/7
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <button
                onClick={scrollToBooking}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-blue px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-blue transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
              >
                Book a ride
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/20 text-primary-foreground font-semibold px-8 py-3.5 rounded-full text-base hover:border-primary-foreground/40 hover:bg-primary-foreground/5 transition-all duration-300"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp us
              </a>
            </motion.div>

            <motion.p
              className="mt-6 text-sm md:text-base text-primary-foreground/70"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.55 }}
            >
              Call anytime:{" "}
              <a href={`tel:${phoneNumber}`} className="font-semibold text-primary-foreground underline-offset-4 hover:underline hover:text-primary">
                070 729 0144
              </a>
              <span className="mx-3 text-primary-foreground/30">•</span>
              Airport pickups, tours, and transfers across the island.
            </motion.p>

            <motion.div
              className="mt-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <ArrowDown className="w-5 h-5 text-primary-foreground/25 mx-auto lg:mx-0 animate-bounce" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
