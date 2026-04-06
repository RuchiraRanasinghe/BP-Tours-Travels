import { motion } from "framer-motion";
import { CreditCard, MapPin, Route, UserRound } from "lucide-react";

import { fadeUp } from "@/lib/animations";

const accountCards = [
  {
    id: "my-rides",
    title: "My Rides",
    description: "Review recent trips, pickup details, and past ride activity.",
    icon: Route,
    action: "Book again",
    href: "#booking-now",
  },
  {
    id: "saved-places",
    title: "Saved Places",
    description: "Keep common destinations like home, work, hotels, and airports handy.",
    icon: MapPin,
    action: "Plan a route",
    href: "#booking-schedule",
  },
  {
    id: "payment-methods",
    title: "Payment Methods",
    description: "Manage preferred payment options for faster booking and checkout.",
    icon: CreditCard,
    action: "Contact billing",
    href: "#contact",
  },
];

const AccountSection = () => {
  return (
    <section id="account" className="py-24 md:py-32 bg-surface">
      <div className="container px-6">
        <span id="my-rides" className="block h-0 scroll-mt-24" aria-hidden="true" />
        <span id="saved-places" className="block h-0 scroll-mt-24" aria-hidden="true" />
        <span id="payment-methods" className="block h-0 scroll-mt-24" aria-hidden="true" />

        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={0}
        >
          <span className="text-sm font-semibold tracking-[0.15em] uppercase text-primary mb-3 block">My Account</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">Manage Your Travel Profile</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Keep the places, rides, and payment preferences you use most often in one place.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {accountCards.map((card, index) => (
            <motion.div
              key={card.title}
              className="rounded-2xl border border-border bg-card p-7 shadow-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={index + 1}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <card.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.description}</p>
              <a href={card.href} className="mt-5 inline-flex text-sm font-semibold text-primary hover:underline">
                {card.action}
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-primary/15 bg-primary/5 p-6 text-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <UserRound className="h-5 w-5" />
          </div>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.15em] text-primary">Account access</p>
          <p className="mt-2 text-foreground/80">Account tools are currently handled through direct support while the app stays frontend-only.</p>
        </div>
      </div>
    </section>
  );
};

export default AccountSection;