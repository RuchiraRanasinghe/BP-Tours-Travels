import { motion } from "framer-motion";
import { Shield, Clock, CreditCard, Headphones } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "Always on time",
    description: "We track flights, monitor traffic, and arrive early. Every single time.",
  },
  {
    icon: Shield,
    title: "Safe & licensed",
    description: "Fully insured vehicles with experienced, background-checked drivers.",
  },
  {
    icon: CreditCard,
    title: "Transparent pricing",
    description: "No hidden fees, no surge pricing. You know the cost before you book.",
  },
  {
    icon: Headphones,
    title: "24/7 support",
    description: "Reach us anytime via WhatsApp or phone. We're always here for you.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-subtle">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium text-gold mb-3 tracking-wide uppercase">Why BP Tours</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight mb-6">
              Built on trust, driven by service
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Founded by Bandara Premathilaka, BP Tours & Travels has one mission — making travel
              effortless, comfortable, and reliable for every traveler in Sri Lanka.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="w-10 h-10 rounded-lg bg-foreground text-background flex items-center justify-center mb-4">
                  <r.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2 font-body">{r.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{r.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
