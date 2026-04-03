import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container px-6">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={0}
        >
          <span className="text-sm font-semibold tracking-[0.15em] uppercase text-primary mb-3 block">Reach Us</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg">We're available 24/7 for your travel needs.</p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <motion.a
            href="tel:+94707399144"
            className="bg-card rounded-2xl border border-border p-8 text-center shadow-card hover:shadow-card-hover hover:border-primary/20 transition-all duration-300 group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={1}
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-gold group-hover:scale-105 transition-all duration-300">
              <Phone className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <p className="font-semibold text-foreground text-lg">Call Us</p>
            <p className="text-muted-foreground text-sm mt-1">070 739 9144</p>
          </motion.a>

          <motion.a
            href="https://wa.me/94771399144"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card rounded-2xl border border-border p-8 text-center shadow-card hover:shadow-card-hover hover:border-primary/20 transition-all duration-300 group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={2}
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-gold group-hover:scale-105 transition-all duration-300">
              <MessageCircle className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <p className="font-semibold text-foreground text-lg">WhatsApp</p>
            <p className="text-muted-foreground text-sm mt-1">077 139 9144</p>
          </motion.a>

          <motion.div
            className="bg-card rounded-2xl border border-border p-8 text-center shadow-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={3}
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-7 h-7 text-primary" />
            </div>
            <p className="font-semibold text-foreground text-lg">Location</p>
            <p className="text-muted-foreground text-sm mt-1">Sri Lanka</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
