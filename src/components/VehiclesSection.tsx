import { motion } from "framer-motion";
import carImg from "@/assets/car-service.jpg";
import vanImg from "@/assets/van-service.jpg";
import { Users, Briefcase, ArrowRight, Check } from "lucide-react";

const vehicles = [
  {
    name: "Premium Car",
    image: carImg,
    passengers: "1–4 Passengers",
    ideal: "Airport transfers, city rides, business travel",
    icon: Briefcase,
    features: ["Air Conditioned", "Luggage Space", "Comfortable Seats", "Licensed Driver"],
  },
  {
    name: "Spacious Van",
    image: vanImg,
    passengers: "5–12 Passengers",
    ideal: "Group tours, family travel, events & weddings",
    icon: Users,
    features: ["Extra Legroom", "Large Cargo Area", "Group Friendly", "Licensed Driver"],
  },
];

import { fadeUp } from "@/lib/animations";

const VehiclesSection = () => {
  return (
    <section id="fleet" className="py-24 md:py-32 bg-surface">
      <div className="container px-6">
        <span id="sedan-suv-hatchback" className="block h-0 scroll-mt-24" aria-hidden="true" />
        <span id="luggage-capacity" className="block h-0 scroll-mt-24" aria-hidden="true" />

        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={0}
        >
          <span className="text-sm font-semibold tracking-[0.15em] uppercase text-primary mb-3 block">Our Vehicles</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Choose Your Ride
          </h2>
          <p className="text-muted-foreground text-lg">Pick the vehicle that fits your journey perfectly.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {vehicles.map((v, i) => (
            <motion.div
              key={v.name}
              className="bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-card-hover transition-shadow duration-300 group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={i + 1}
            >
              <div className="relative overflow-hidden bg-muted">
                <img
                  src={v.image}
                  alt={v.name}
                  loading="lazy"
                  width={960}
                  height={640}
                  className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-700 cursor-pointer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="bg-foreground/80 text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                    {v.passengers}
                  </span>
                </div>
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">{v.name}</h3>
                <p className="text-muted-foreground text-sm mb-5">{v.ideal}</p>
                <div className="grid grid-cols-2 gap-2.5 mb-6">
                  {v.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="#booking"
                  className="inline-flex items-center justify-center gap-2 w-full bg-gradient-blue text-primary-foreground font-semibold px-6 py-3 rounded-full text-sm shadow-blue hover:scale-105 active:scale-95 transition-transform duration-300"
                >
                  Book This Vehicle <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehiclesSection;
