import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";

const contacts = [
  {
    icon: Phone,
    title: "Call us",
    value: "070 739 9144",
    href: "tel:+94707399144",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "077 139 9144",
    href: "https://wa.me/94771399144",
    external: true,
  },
  {
    icon: MapPin,
    title: "Based in",
    value: "Sri Lanka",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container px-6">
        <motion.div
          className="max-w-xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium text-gold mb-3 tracking-wide uppercase">Contact</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight mb-4">
            Get in touch
          </h2>
          <p className="text-muted-foreground text-lg">
            Available 24/7. Reach us via call or WhatsApp.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl">
          {contacts.map((c, i) => {
            const Wrapper = c.href ? "a" : "div";
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Wrapper
                  {...(c.href
                    ? {
                        href: c.href,
                        ...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {}),
                      }
                    : {})}
                  className="block rounded-2xl border border-border p-8 hover:border-foreground/20 hover:shadow-soft transition-all group"
                >
                  <c.icon className="w-6 h-6 text-foreground mb-4 group-hover:text-gold transition-colors" />
                  <p className="font-semibold text-foreground text-sm mb-1">{c.title}</p>
                  <p className="text-muted-foreground text-sm">{c.value}</p>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
