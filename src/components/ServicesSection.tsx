import { motion } from "framer-motion";
import { Plane, MapPin, Palmtree, ArrowRight, Zap } from "lucide-react";
import serviceImage from "../assets/image.png";
import TempleImage from "@/assets/musthaqsms-temple-204803_1920.jpg";
import TrainImage from "@/assets/monamaria-train-4026825_1920.jpg";
import BoatsImage from "@/assets/boats.jpg";
import NatureImage from "@/assets/kanishka_ranasinghe-sri-lanka-5061995_1920.jpg";

const services = [
  {
    icon: Plane,
    title: "Airport Pickup",
    description: "We track your flight and ensure timely pickup from Bandaranaike International Airport.",
    image: TempleImage,
    color: "from-primary",
  },
  {
    icon: Plane,
    title: "Airport Drop",
    description: "On-time airport drop-off with full luggage assistance and comfort.",
    image: TrainImage,
    color: "from-secondary",
  },
  {
    icon: MapPin,
    title: "Local Rides",
    description: "City transfers, office commutes, and rides anywhere across Sri Lanka.",
    image: BoatsImage,
    color: "from-accent",
  },
  {
    icon: Palmtree,
    title: "Tourist Travel",
    description: "Explore Sri Lanka's scenic beauty with curated tour packages.",
    image: NatureImage,
    color: "from-violet-500",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-gradient-to-b from-background via-background to-secondary/5 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={0}
        >
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold tracking-[0.15em] uppercase text-primary">What We Offer</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From airport transfers to island-wide tours — we've got you covered with premium service.
          </p>
        </motion.div>

        <motion.div
          className="mb-16 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={1}
        >
          <motion.div 
            className="rounded-3xl overflow-hidden shadow-2xl max-w-3xl w-full h-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={serviceImage} 
              alt="Our Services" 
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Enhanced Services Grid with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group relative rounded-2xl overflow-hidden bg-card shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-border/50 hover:border-primary/20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={i + 2}
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="relative p-6 flex flex-col h-full">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} to-transparent opacity-20 group-hover:opacity-40 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110`}>
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-sm mb-6 flex-grow">
                  {service.description}
                </p>

                {/* CTA */}
                <motion.a
                  href="#booking"
                  className="flex items-center justify-center gap-2 text-primary font-semibold text-sm rounded-lg px-4 py-2 bg-primary/5 group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                  whileHover={{ gap: 8 }}
                >
                  Book Now <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>

              {/* Top Border Accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
