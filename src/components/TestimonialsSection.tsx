import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useAdminData } from "@/hooks/useAdminData";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const TestimonialsSection = () => {
  const { testimonials } = useAdminData();

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-surface-alt">
      <div className="container px-6">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={0}
        >
          <span className="text-sm font-semibold tracking-[0.15em] uppercase text-primary mb-3 block">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">What Customers Say</h2>
          <p className="text-muted-foreground text-lg">Editable from your admin panel.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.id}
              className="bg-card rounded-2xl border border-border p-7 shadow-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={index + 1}
            >
              <Quote className="w-6 h-6 text-primary mb-4" />
              <p className="text-muted-foreground leading-relaxed">{item.message}</p>
              <p className="mt-4 text-sm font-semibold text-foreground">{item.customerName}</p>
              <p className="text-xs text-muted-foreground">{item.location}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
