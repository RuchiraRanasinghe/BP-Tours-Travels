import { motion } from "framer-motion";
import { Shield, Clock, ThumbsUp } from "lucide-react";

const highlights = [
  { icon: Shield, title: "Safe & Reliable", desc: "Licensed, insured vehicles with experienced drivers." },
  { icon: Clock, title: "On-Time Service", desc: "We track flights and arrive early — always." },
  { icon: ThumbsUp, title: "Customer First", desc: "Thousands of happy travelers trust us." },
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

        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center mx-auto mb-4">
                <h.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">{h.title}</h3>
              <p className="text-muted-foreground">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
