import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "United Kingdom",
    text: "Best airport pickup service in Sri Lanka. The driver was waiting for us even though our flight was delayed. Truly professional.",
    rating: 5,
  },
  {
    name: "Raj K.",
    location: "Colombo",
    text: "I use BP Tours for all my local rides. Always on time, clean vehicles, and friendly drivers. Highly recommend.",
    rating: 5,
  },
  {
    name: "Anna & Peter",
    location: "Germany",
    text: "We booked a 5-day tour of Sri Lanka. Everything was perfectly organized. The van was spacious and comfortable.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container px-6">
        <motion.div
          className="max-w-xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium text-gold mb-3 tracking-wide uppercase">Testimonials</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight">
            What travelers say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-background rounded-2xl p-8 border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 text-[15px]">"{t.text}"</p>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
