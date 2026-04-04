import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { useAdminData } from "@/hooks/useAdminData";

import { fadeUp } from "@/lib/animations";

const TourPackagesSection = () => {
  const { packages } = useAdminData();

  return (
    <section id="tour-packages" className="py-24 md:py-32 bg-surface">
      <div className="container px-6">
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={0}
        >
          <span className="text-sm font-semibold tracking-[0.15em] uppercase text-primary mb-3 block">Tour Packages</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">Ready-Made Sri Lanka Tours</h2>
          <p className="text-muted-foreground text-lg">All cards are pulled from your admin-managed data.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <motion.article
              key={pkg.id}
              className="bg-card rounded-2xl border border-border p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={index + 1}
            >
              <p className="text-sm font-semibold tracking-wide uppercase text-primary mb-2">{pkg.duration}</p>
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">{pkg.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">Destinations: {pkg.destinations}</p>
              <p className="text-sm text-muted-foreground mb-6">Starting from <span className="font-semibold text-foreground">{pkg.startingPrice}</span></p>

              <details className="group">
                <summary className="list-none cursor-pointer inline-flex items-center gap-2 bg-gradient-blue text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold shadow-blue hover:scale-105 transition-transform">
                  <Eye className="w-4 h-4" />
                  View Itinerary
                </summary>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{pkg.itinerary}</p>
              </details>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourPackagesSection;
