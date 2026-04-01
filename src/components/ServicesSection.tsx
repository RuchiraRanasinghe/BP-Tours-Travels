import { motion } from "framer-motion";
import { Plane, PlaneLanding, MapPin, Compass } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: PlaneLanding,
    title: "Airport Pickup",
    description: "We track your flight and arrive early. Hassle-free pickup from Bandaranaike International.",
    tag: "Most popular",
  },
  {
    icon: Plane,
    title: "Airport Drop",
    description: "On-time drop-off with luggage assistance. Relax — we handle the logistics.",
  },
  {
    icon: MapPin,
    title: "Local Rides",
    description: "City transfers, office commutes, errands — comfortable rides anywhere in Sri Lanka.",
  },
  {
    icon: Compass,
    title: "Curated Tours",
    description: "Explore Sri Lanka's beauty with custom itineraries and experienced drivers.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container px-6">
        <motion.div
          className="max-w-xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium text-gold mb-3 tracking-wide uppercase">Services</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight mb-4">
            Everything you need for seamless travel
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From airport transfers to island-wide tours — reliable, comfortable, always on time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="relative bg-background rounded-2xl p-8 border border-border hover:border-foreground/20 hover:shadow-soft transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              {service.tag && (
                <span className="absolute top-6 right-6 text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">
                  {service.tag}
                </span>
              )}
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-foreground group-hover:text-background transition-colors">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3 font-body">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            to="/services"
            className="text-sm font-medium text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
          >
            View all services →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
