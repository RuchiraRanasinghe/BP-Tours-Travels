import { motion } from "framer-motion";
import { Car, Users, Briefcase, ArrowRight } from "lucide-react";

const vehicles = [
  {
    name: "Premium Car",
    passengers: "1–4 Passengers",
    ideal: "Airport transfers, city rides, business travel",
    icon: Car,
    features: ["Air Conditioned", "Luggage Space", "Comfortable Seats"],
  },
  {
    name: "Spacious Van",
    passengers: "5–12 Passengers",
    ideal: "Group tours, family travel, events",
    icon: Users,
    features: ["Extra Legroom", "Large Cargo", "Group Friendly"],
  },
];

const VehiclesSection = () => {
  return (
    <section id="fleet" className="py-20 md:py-28 bg-cream">
      <div className="container px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Our <span className="text-gradient-gold">Fleet</span>
          </h2>
          <p className="text-muted-foreground text-lg">Choose the vehicle that fits your journey.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {vehicles.map((v, i) => (
            <motion.div
              key={v.name}
              className="bg-card rounded-2xl border border-border p-8 shadow-card hover:shadow-gold hover:border-primary/20 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <v.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-2">{v.name}</h3>
              <div className="flex items-center gap-2 text-muted-foreground mb-3">
                <Briefcase className="w-4 h-4 text-primary" />
                <span className="font-medium">{v.passengers}</span>
              </div>
              <p className="text-muted-foreground mb-5">{v.ideal}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {v.features.map((f) => (
                  <span key={f} className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary">
                    {f}
                  </span>
                ))}
              </div>
              <a href="#booking" className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:gap-3 transition-all">
                Book Now <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehiclesSection;
