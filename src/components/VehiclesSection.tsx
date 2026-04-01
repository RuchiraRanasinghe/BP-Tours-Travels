import { motion } from "framer-motion";
import carImg from "@/assets/car-service.jpg";
import vanImg from "@/assets/van-service.jpg";
import { Users, Briefcase } from "lucide-react";

const vehicles = [
  {
    name: "Premium Car",
    image: carImg,
    passengers: "1–4 Passengers",
    ideal: "Airport transfers, city rides",
    icon: Briefcase,
  },
  {
    name: "Spacious Van",
    image: vanImg,
    passengers: "5–12 Passengers",
    ideal: "Group tours, family travel",
    icon: Users,
  },
];

const VehiclesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-cream">
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
              className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-gold transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <img src={v.image} alt={v.name} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">{v.name}</h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <v.icon className="w-4 h-4 text-gold" />
                  <span>{v.passengers}</span>
                </div>
                <p className="text-muted-foreground">Ideal for: {v.ideal}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehiclesSection;
