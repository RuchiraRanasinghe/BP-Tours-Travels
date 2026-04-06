import { motion } from "framer-motion";
import { AlertTriangle, HelpCircle, Phone } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { fadeUp } from "@/lib/animations";

const faqs = [
  {
    question: "How do I get 24/7 support?",
    answer: "Call either listed phone number or use the Contact Us section for immediate help at any time.",
  },
  {
    question: "What is the emergency contact process?",
    answer: "If your trip needs urgent attention, call the support line and we will route the request to a live operator.",
  },
  {
    question: "Can I send a booking inquiry instead of calling?",
    answer: "Yes. Use the inquiry form to store your request in the admin panel and trigger an email draft.",
  },
];

const SupportSection = () => {
  return (
    <section id="support" className="py-24 md:py-32 bg-background">
      <div className="container px-6">
        <span id="emergency-contact" className="block h-0 scroll-mt-24" aria-hidden="true" />
        <span id="faq" className="block h-0 scroll-mt-24" aria-hidden="true" />

        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={0}
        >
          <span className="text-sm font-semibold tracking-[0.15em] uppercase text-primary mb-3 block">Support</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">Help When You Need It</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Reach support, emergency help, and frequently asked answers from one place.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <motion.div
              className="rounded-2xl border border-border bg-card p-7 shadow-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={1}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground">24/7 Support</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Always available for trip changes, pickup help, and general questions.</p>
              <a href="#contact" className="mt-5 inline-flex text-sm font-semibold text-primary hover:underline">
                Contact us now
              </a>
            </motion.div>

            <motion.div
              className="rounded-2xl border border-border bg-card p-7 shadow-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={2}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground">Emergency Contact</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Use the hotline immediately if your trip needs urgent driver or booking support.</p>
              <a href="tel:+94707290144" className="mt-5 inline-flex text-sm font-semibold text-primary hover:underline">
                Call 070 729 0144
              </a>
            </motion.div>
          </div>

          <motion.div
            className="rounded-2xl border border-border bg-card p-7 shadow-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={3}
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <HelpCircle className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-display font-semibold text-foreground mb-4">FAQs</h3>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((item, index) => (
                <AccordionItem key={item.question} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-foreground hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;