import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Get in <span className="text-gradient-gold">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">We're available 24/7 for your travel needs.</p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <motion.a
            href="tel:+94707399144"
            className="bg-card rounded-2xl border border-border p-8 text-center hover:shadow-gold hover:border-gold/30 transition-all group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Phone className="w-10 h-10 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <p className="font-semibold text-foreground text-lg">Call Us</p>
            <p className="text-muted-foreground">070 739 9144</p>
          </motion.a>

          <motion.a
            href="https://wa.me/94771399144"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card rounded-2xl border border-border p-8 text-center hover:shadow-gold hover:border-gold/30 transition-all group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <MessageCircle className="w-10 h-10 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <p className="font-semibold text-foreground text-lg">WhatsApp</p>
            <p className="text-muted-foreground">077 139 9144</p>
          </motion.a>

          <motion.div
            className="bg-card rounded-2xl border border-border p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <MapPin className="w-10 h-10 text-gold mx-auto mb-4" />
            <p className="font-semibold text-foreground text-lg">Location</p>
            <p className="text-muted-foreground">Sri Lanka</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
