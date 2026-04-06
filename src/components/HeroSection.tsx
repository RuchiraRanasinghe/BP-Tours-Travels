import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, MapPin, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroMainBg from "@/assets/Gemini_Generated_Image_k6w2u2k6w2u2k6w2.png";

const HeroSection = () => {
  const whatsappUrl = "https://wa.me/94707290144";
  const phoneNumber = "+94707290144";

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroMainBg} alt="Airport taxi service in Sri Lanka" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/75 via-foreground/55 to-foreground/85" />
      </div>

      <div className="relative z-10 container px-6 py-24 md:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
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

            <motion.div
              className="mt-3 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
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

          <motion.div
            className="relative mx-auto w-full max-w-xl lg:max-w-none"
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-primary/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/40 bg-white shadow-2xl">
              <div className="relative px-3 pb-3 pt-3 md:px-4 md:pb-4 md:pt-4 h-[22rem] md:h-[30rem] flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
                <img
                  src={heroBg}
                  alt="Premium travel in Sri Lanka"
                  width={1280}
                  height={960}
                  className="w-full h-full object-cover object-center rounded-xl"
                />
                <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
              </div>
              <div className="absolute left-3 top-3 flex flex-col gap-2 md:left-4 md:top-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-background/95 px-3 py-1.5 text-xs md:text-sm font-semibold text-foreground shadow-lg backdrop-blur-sm">
                  <MapPin className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary flex-shrink-0" />
                  Sri Lanka Routes
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-foreground/90 px-3 py-1.5 text-xs md:text-sm font-semibold text-primary-foreground shadow-lg backdrop-blur-sm">
                  <ShieldCheck className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary-foreground flex-shrink-0" />
                  Safe & reliable
                </div>
              </div>

              <div className="absolute bottom-3 left-3 right-3 grid gap-2 md:bottom-4 md:left-4 md:right-4 sm:grid-cols-2 hidden md:grid">
                <div className="rounded-xl border border-primary/20 bg-white p-3 md:p-4 shadow-lg">
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <Sparkles className="h-4 w-4 text-primary flex-shrink-0" />
                    Premium comfort
                  </div>
                  <p className="mt-2 text-xs md:text-sm text-foreground/70 font-medium leading-snug">
                    Clean cars, friendly drivers, scenic travel.
                  </p>
                </div>
                <div className="rounded-xl border border-primary-foreground/20 bg-foreground p-3 md:p-4 shadow-lg">
                  <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.15em] text-primary">
                    From $25 / trip
                  </p>
                  <p className="mt-2 text-xs md:text-sm text-primary-foreground/90 font-medium leading-snug">
                    Airport pickups, tours, and transfers.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
