import { motion } from "framer-motion";
import { Shield, Clock, ThumbsUp, Award } from "lucide-react";
import ElephantImage from "@/assets/oleksandrpidvalnyi-elephant-7112151_1920.jpg";
import MirisaImage from "@/assets/pmarciciak-mirissa-3287053_1920.jpg";
import NatureImg from "@/assets/kanishka_ranasinghe-sri-lanka-5061995_1920.jpg";

const highlights = [
  { icon: Shield, title: "Safe & Reliable", desc: "Licensed, insured vehicles with experienced professional drivers.", stat: "100%", statLabel: "Insured" },
  { icon: Clock, title: "Always On Time", desc: "We track flights and arrive early — every single time.", stat: "24/7", statLabel: "Available" },
  { icon: ThumbsUp, title: "Customer First", desc: "Thousands of happy travelers across Sri Lanka trust us.", stat: "5K+", statLabel: "Happy Rides" },
  { icon: Award, title: "Award Winning", desc: "Recognized for excellence in tourism and service quality.", stat: "10+", statLabel: "Years" },
];

import { fadeUp } from "@/lib/animations";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-to-b from-background via-primary/2 to-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container px-6 relative z-10">
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

        {/* Image + Highlights Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Images Side */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={1}
          >
            <motion.div
              className="rounded-2xl overflow-hidden shadow-lg h-64"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={ElephantImage} alt="Sri Lanka Wildlife" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              className="rounded-2xl overflow-hidden shadow-lg h-64 mt-8"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={MirisaImage} alt="Beautiful Beaches" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              className="rounded-2xl overflow-hidden shadow-lg h-64 col-span-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={NatureImg} alt="Nature Landscapes" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.slice(0, 4).map((h, i) => (
              <motion.div
                key={h.title}
                className="bg-card rounded-2xl border border-border/50 p-6 shadow-card hover:shadow-card-hover hover:border-primary/30 transition-all duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                custom={i + 2}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <h.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-3xl font-display font-bold text-gradient-blue mb-1">{h.stat}</p>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">{h.statLabel}</p>
                <h3 className="text-base font-display font-semibold text-foreground mb-1">{h.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Benefits Section */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 pt-8 border-t border-border"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          custom={6}
        >
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Professional drivers</h4>
            <p className="text-sm text-muted-foreground">Vetted, trained, and committed to excellent service</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 mb-4">
              <Clock className="w-8 h-8 text-secondary" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Flexible scheduling</h4>
            <p className="text-sm text-muted-foreground">Tailored tours and transfers for your convenience</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 mb-4">
              <ThumbsUp className="w-8 h-8 text-accent" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Customer satisfaction</h4>
            <p className="text-sm text-muted-foreground">5-star service with personalized attention</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
