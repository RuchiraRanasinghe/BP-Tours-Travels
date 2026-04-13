import { motion } from "framer-motion";
import { Heart, Zap, Trophy, Compass } from "lucide-react";
import BeachImage from "@/assets/pmarciciak-mirissa-3287053_1920.jpg";
import TempleImage from "@/assets/musthaqsms-temple-204803_1920.jpg";
import HarborImage from "@/assets/jeroenketelhaven-sri-lanka-2726045_1920.jpg";
import ElephantImage from "@/assets/oleksandrpidvalnyi-elephant-7112151_1920.jpg";

const reasons = [
  {
    icon: Heart,
    title: "Unforgettable Experiences",
    description: "Create memories that last a lifetime with diverse attractions and activities",
    image: BeachImage,
    accent: "from-rose-500/20",
  },
  {
    icon: Trophy,
    title: "World-Class Hospitality",
    description: "Experience warm welcomes and professional service everywhere you go",
    image: TempleImage,
    accent: "from-amber-500/20",
  },
  {
    icon: Compass,
    title: "Diverse Destinations",
    description: "From beaches to mountains to temples - all in one magical island",
    image: HarborImage,
    accent: "from-blue-500/20",
  },
  {
    icon: Zap,
    title: "Adventure Awaits",
    description: "Thrilling experiences, wildlife encounters, and outdoor activities",
    image: ElephantImage,
    accent: "from-green-500/20",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" as const },
  }),
};

const WhySriLankaSection = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-secondary/5 via-background to-primary/5 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-secondary/3 rounded-full blur-3xl opacity-40"></div>

      <div className="container px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={0}
        >
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <Trophy className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold tracking-[0.15em] uppercase text-primary">
              Why Choose
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            The Pearl of the Indian Ocean
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Sri Lanka isn't just a destination—it's a complete experience. Discover why travelers from around the world
            fall in love with our island.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-64"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={i + 1}
            >
              {/* Image Background */}
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Gradient Overlays */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.accent} to-transparent opacity-60`}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="flex items-start justify-between mb-3">
                  <motion.div
                    className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <reason.icon className="w-6 h-6 text-white" />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {reason.description}
                  </p>
                </motion.div>
              </div>

              {/* Bottom Border Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          custom={5}
        >
          <div className="inline-block">
            <p className="text-muted-foreground mb-4">Ready to start your Sri Lanka adventure?</p>
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-10 py-4 text-base font-semibold text-primary-foreground shadow-lg hover:shadow-2xl hover:scale-105 transition-all active:scale-95"
            >
              <Heart className="w-5 h-5" />
              Book Your Journey Today
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhySriLankaSection;
