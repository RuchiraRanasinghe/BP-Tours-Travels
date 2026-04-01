import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 md:py-32 bg-foreground">
      <div className="container px-6">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-background leading-tight mb-6">
            Ready to book your next ride?
          </h2>
          <p className="text-background/60 text-lg mb-10 leading-relaxed">
            Book online in seconds or chat with us directly on WhatsApp. We'll confirm your ride instantly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-2 bg-background text-foreground font-medium px-8 py-4 rounded-full text-base hover:bg-background/90 transition-colors"
            >
              Book online
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/94771399144"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-background/20 text-background font-medium px-8 py-4 rounded-full text-base hover:bg-background/10 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
