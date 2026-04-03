import { motion } from "framer-motion";
import { Plane, MapPin, Palmtree, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Airport Pickup",
    description: "We track your flight and ensure timely pickup from Bandaranaike International Airport.",
  },
  {
    icon: Plane,
    title: "Airport Drop",
    description: "On-time airport drop-off with full luggage assistance and comfort.",
  },
  {
    icon: MapPin,
    title: "Local Rides",
    description: "City transfers, office commutes, and rides anywhere across Sri Lanka.",
  },
  {
    icon: Palmtree,
    title: "Tourist Travel",
    description: "Explore Sri Lanka's scenic beauty with curated tour packages.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={0}
        >
          <span className="text-sm font-semibold tracking-[0.15em] uppercase text-primary mb-3 block">What We Offer</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            From airport transfers to island-wide tours — we've got you covered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.a
              href="#booking"
              key={service.title}
              className="group bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-card-hover hover:border-primary/20 transition-all duration-300 block flex flex-col"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={i + 1}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-gold group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm mb-5 text-center flex-grow">
                {service.description}
              </p>
              <span className="flex items-center justify-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-3 transition-all mt-auto">
                Book Now <ArrowRight className="w-4 h-4" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
