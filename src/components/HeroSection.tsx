import { motion } from "framer-motion";
import { ArrowDown, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import heroMainBg from "@/assets/Gemini_Generated_Image_k6w2u2k6w2u2k6w2.png";

const HeroSection = () => {
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
              <span className="text-gradient-hero">with Comfort</span>
            </motion.h1>

            <motion.p
              className="text-primary-foreground/70 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
            >
              Airport transfers, local rides & island-wide tours.
              Cars & vans — available 24/7.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <button
                onClick={scrollToBooking}
                className="inline-flex items-center justify-center rounded-full bg-gradient-blue px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-blue transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
              >
                Book Now
              </button>
              <Link
                to="/admin"
                className="border-2 border-primary-foreground/20 text-primary-foreground font-semibold px-8 py-3.5 rounded-full text-base hover:border-primary-foreground/40 hover:bg-primary-foreground/5 transition-all duration-300"
              >
                Admin Panel
              </Link>
            </motion.div>

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
            <div className="relative overflow-hidden rounded-[2rem] border border-white/25 bg-[#f8fafc] shadow-2xl">
              <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-white/95 via-white/55 to-transparent" />
              <div className="relative px-4 pb-4 pt-20 md:px-6 md:pb-6 md:pt-24">
                <img
                  src={heroBg}
                  alt="Premium travel in Sri Lanka"
                  width={1280}
                  height={960}
                  className="w-full h-auto object-contain object-center"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />

              <div className="absolute left-4 top-4 flex flex-col gap-3 md:left-6 md:top-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 text-sm font-semibold text-foreground shadow-lg backdrop-blur">
                  <MapPin className="h-4 w-4 text-primary" />
                  Sri Lanka Routes
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-foreground/85 px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg backdrop-blur">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  Safe and reliable
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 grid gap-3 md:bottom-6 md:left-6 md:right-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/70 bg-white/92 p-4 shadow-lg backdrop-blur">
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <Sparkles className="h-4 w-4 text-primary" />
                    Premium comfort
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Clean cars, friendly drivers, and scenic island travel.
                  </p>
                </div>
                <div className="rounded-2xl bg-foreground/92 p-4 shadow-lg backdrop-blur">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                    Available 24/7
                  </p>
                  <p className="mt-2 text-sm text-primary-foreground/80">
                    Airport pickups, tours, and long-distance transfers.
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
