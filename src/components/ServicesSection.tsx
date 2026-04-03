import { motion } from "framer-motion";
import { Plane, MapPin, Palmtree, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Airport Pickup",
    description: "Reliable pickup from Bandaranaike International Airport. We track your flight for timely arrival.",
    color: "from-primary to-gold-light",
  },
  {
    icon: Plane,
    title: "Airport Drop",
    description: "Comfortable, on-time drop-off to the airport with luggage assistance.",
    color: "from-accent to-primary",
  },
  {
    icon: MapPin,
    title: "Local Rides",
    description: "City transfers, office rides, and local travel anywhere in Sri Lanka.",
    color: "from-gold-dark to-primary",
  },
  {
    icon: Palmtree,
    title: "Tourist Travel",
    description: "Explore Sri Lanka's beauty with our guided tour packages in comfort.",
    color: "from-primary to-accent",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Our <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            From airport transfers to island-wide tours — we've got you covered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.a
              href="#booking"
              key={service.title}
              className="group bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-gold hover:border-primary/20 transition-all duration-300 block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground/40 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
