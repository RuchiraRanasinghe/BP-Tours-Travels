import { motion } from "framer-motion";
import { Shield, Clock, ThumbsUp, Star } from "lucide-react";

const highlights = [
  { icon: Shield, title: "Safe & Reliable", desc: "Licensed, insured vehicles with experienced drivers.", stat: "100%", statLabel: "Insured" },
  { icon: Clock, title: "On-Time Service", desc: "We track flights and arrive early — always.", stat: "24/7", statLabel: "Available" },
  { icon: ThumbsUp, title: "Customer First", desc: "Thousands of happy travelers trust us.", stat: "5K+", statLabel: "Rides" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-cream">
      <div className="container px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Why <span className="text-gradient-gold">Choose Us</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Bandara Premathilaka founded BP Tours & Travels with one goal — making travel effortless and comfortable for everyone.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              className="bg-card rounded-2xl border border-border p-8 text-center shadow-card hover:shadow-gold hover:border-primary/20 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <h.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <p className="text-3xl font-display font-bold text-gradient-gold mb-1">{h.stat}</p>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">{h.statLabel}</p>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">{h.title}</h3>
              <p className="text-muted-foreground text-sm">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
