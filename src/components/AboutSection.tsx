import { motion } from "framer-motion";
import { Shield, Clock, ThumbsUp } from "lucide-react";

const highlights = [
  { icon: Shield, title: "Safe & Reliable", desc: "Licensed, insured vehicles with experienced professional drivers.", stat: "100%", statLabel: "Insured" },
  { icon: Clock, title: "Always On Time", desc: "We track flights and arrive early — every single time.", stat: "24/7", statLabel: "Available" },
  { icon: ThumbsUp, title: "Customer First", desc: "Thousands of happy travelers across Sri Lanka trust us.", stat: "5K+", statLabel: "Happy Rides" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" as const },
  }),
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={0}
        >
          <span className="text-sm font-semibold tracking-[0.15em] uppercase text-primary mb-3 block">Why BP Tours</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Founded by Bandara Premathilaka with one goal — making every journey effortless and comfortable.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              className="bg-card rounded-2xl border border-border p-8 text-center shadow-card hover:shadow-card-hover hover:border-primary/20 transition-all duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={i + 1}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <h.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-4xl font-display font-bold text-gradient-blue mb-1">{h.stat}</p>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-5">{h.statLabel}</p>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">{h.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
