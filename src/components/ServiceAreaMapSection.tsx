import { motion } from "framer-motion";
import { serviceAreaSuggestions } from "@/lib/adminStore";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const ServiceAreaMapSection = () => {
  return (
    <section id="service-area" className="py-24 md:py-32 bg-surface">
      <div className="container px-6">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <span className="text-sm font-semibold tracking-[0.15em] uppercase text-primary mb-3 block">Service Area</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">Coverage Across Key Cities</h2>
          <p className="text-muted-foreground text-lg">Colombo, Negombo, Airport, Kandy, Galle, and Bentota.</p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <div className="rounded-2xl border border-border overflow-hidden shadow-card bg-card">
            <iframe
              title="BP Tours service area map"
              src="https://www.google.com/maps?q=Sri+Lanka&output=embed"
              loading="lazy"
              className="w-full h-[360px] md:h-[460px]"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="bg-card rounded-2xl border border-border p-6 shadow-card">
            <h3 className="text-xl font-display font-semibold text-foreground mb-4">Locations Served</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {serviceAreaSuggestions.map((location) => (
                <a
                  key={location}
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location + ", Sri Lanka")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground hover:border-primary/40 transition-colors"
                >
                  {location}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceAreaMapSection;
