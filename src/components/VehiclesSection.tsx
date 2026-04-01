import { motion } from "framer-motion";
import carImg from "@/assets/car-service.jpg";
import vanImg from "@/assets/van-service.jpg";
import { Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const vehicles = [
  {
    name: "Premium Car",
    image: carImg,
    passengers: "1–4 passengers",
    features: ["Airport transfers", "City rides", "AC & comfortable"],
  },
  {
    name: "Spacious Van",
    image: vanImg,
    passengers: "5–12 passengers",
    features: ["Group tours", "Family travel", "Extra luggage space"],
  },
];

const VehiclesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-subtle">
      <div className="container px-6">
        <motion.div
          className="max-w-xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium text-gold mb-3 tracking-wide uppercase">Our Fleet</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight mb-4">
            Choose your ride
          </h2>
          <p className="text-muted-foreground text-lg">
            Well-maintained vehicles for every journey size.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
          {vehicles.map((v, i) => (
            <motion.div
              key={v.name}
              className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-soft transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={v.image}
                  alt={v.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-display font-bold text-foreground">{v.name}</h3>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    {v.passengers}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {v.features.map((f) => (
                    <span key={f} className="text-xs font-medium text-muted-foreground bg-secondary px-3 py-1.5 rounded-full">
                      {f}
                    </span>
                  ))}
                </div>
                <Link
                  to="/booking"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-gold transition-colors"
                >
                  Book this vehicle <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehiclesSection;
