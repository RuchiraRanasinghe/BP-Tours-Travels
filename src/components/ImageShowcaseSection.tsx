import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

// Import all gallery images
import BoatsImage from "@/assets/boats.jpg";
import HarborImage from "@/assets/jeroenketelhaven-sri-lanka-2726045_1920.jpg";
import VesaksImage from "@/assets/kalyanayahaluwo-vesak-5391081_1920.jpg";
import NatureImg1 from "@/assets/kanishka_ranasinghe-sri-lanka-5061995_1920.jpg";
import NatureImg2 from "@/assets/kanishka_ranasinghe-sri-lanka-5062006_1920.jpg";
import NatureImg3 from "@/assets/kanishka_ranasinghe-sri-lanka-5062011_1920.jpg";
import GalleImage from "@/assets/karuvadgraphy-galle-4818528_1920.jpg";
import TrainImage from "@/assets/monamaria-train-4026825_1920.jpg";

const showcaseItems = [
  {
    src: NatureImg1,
    title: "Tropical Paradise",
    description: "Experience the lush green landscapes",
  },
  {
    src: HarborImage,
    title: "Coastal Serenity",
    description: "Beautiful harbors and waterfront views",
  },
  {
    src: TrainImage,
    title: "Scenic Railways",
    description: "Historic train journeys across the island",
  },
  {
    src: GalleImage,
    title: "Historic Fortresses",
    description: "Ancient architecture and heritage sites",
  },
  {
    src: VesaksImage,
    title: "Cultural Events",
    description: "Spiritual celebrations and traditions",
  },
  {
    src: BoatsImage,
    title: "Maritime Beauty",
    description: "Traditional boats and coastal charm",
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

const imageHover = {
  hidden: { scale: 1, rotateY: 0 },
  hover: { scale: 1.1, rotateY: 5 },
};

const ImageShowcaseSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-primary/5 via-background to-secondary/5 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl"></div>

      <div className="container px-6 relative z-10">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={0}
        >
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold tracking-[0.15em] uppercase text-primary">
              Destination Highlights
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Discover Sri Lanka's Wonders
          </h2>
        </motion.div>

        {/* Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcaseItems.map((item, i) => (
            <motion.div
              key={item.title}
              className="group relative rounded-2xl overflow-hidden bg-card shadow-lg hover:shadow-2xl transition-all duration-300 h-72"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={i + 1}
            >
              {/* Image Background */}
              <motion.img
                src={item.src}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
                initial="hidden"
                whileHover="hover"
                variants={imageHover}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
