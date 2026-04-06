import { motion } from "framer-motion";
import { MapPinned, Share2, Smartphone } from "lucide-react";

import { fadeUp } from "@/lib/animations";

const trackingItems = [
  {
    title: "Live Tracking",
    description: "See your driver movement in real time from pickup to drop-off.",
    icon: MapPinned,
  },
  {
    title: "Share Trip Progress",
    description: "Share your journey status with family, friends, or colleagues.",
    icon: Share2,
  },
  {
    title: "Mobile Updates",
    description: "Receive trip updates and arrival alerts on your phone.",
    icon: Smartphone,
  },
];

const TrackingSection = () => {
  return (
    <section id="track-ride" className="py-24 md:py-32 bg-surface-alt">
      <div className="container px-6">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={0}
        >
          <span className="text-sm font-semibold tracking-[0.15em] uppercase text-primary mb-3 block">Tracking</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">Stay Updated on Every Ride</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Track the vehicle, share the trip, and keep passengers informed from pickup to arrival.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {trackingItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="rounded-2xl border border-border bg-card p-7 shadow-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={index + 1}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-primary/15 bg-primary/5 p-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">Need a live update?</p>
          <p className="mt-2 text-foreground/80">Use the Contact section for immediate driver assistance or ride status help.</p>
          <a
            href="#contact"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-gradient-blue px-6 py-3 text-sm font-semibold text-primary-foreground shadow-blue transition-transform duration-300 hover:scale-105"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrackingSection;