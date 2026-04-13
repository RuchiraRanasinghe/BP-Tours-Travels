import { motion } from "framer-motion";
import { ArrowRight, MapPin, Camera } from "lucide-react";
import MirisaImage from "@/assets/pmarciciak-mirissa-3287053_1920.jpg";
import TempleImage from "@/assets/musthaqsms-temple-204803_1920.jpg";
import BoatsImage from "@/assets/boats.jpg";
import HarborImage from "@/assets/jeroenketelhaven-sri-lanka-2726045_1920.jpg";
import VesaksImage from "@/assets/kalyanayahaluwo-vesak-5391081_1920.jpg";
import NatureImg1 from "@/assets/kanishka_ranasinghe-sri-lanka-5061995_1920.jpg";
import NatureImg2 from "@/assets/kanishka_ranasinghe-sri-lanka-5062006_1920.jpg";
import NatureImg3 from "@/assets/kanishka_ranasinghe-sri-lanka-5062011_1920.jpg";
import GalleImage from "@/assets/karuvadgraphy-galle-4818528_1920.jpg";
import TrainImage from "@/assets/monamaria-train-4026825_1920.jpg";

const galleryItems = [
  {
    src: MirisaImage,
    title: "Beautiful Mirissa Beach",
    description: "Paradise coastline for whale watching",
    tag: "Beaches",
    category: "Nature",
    size: "large",
  },
  {
    src: TempleImage,
    title: "Sacred Temples",
    description: "Ancient spiritual landmarks across the island",
    tag: "Culture",
    category: "Culture",
    size: "large",
  },
  {
    src: BoatsImage,
    title: "Coastal Boats",
    description: "Traditional fishing vessels and water transport",
    tag: "Maritime",
    category: "Nature",
    size: "medium",
  },
  {
    src: HarborImage,
    title: "Jeroentehaven Harbor",
    description: "Picturesque harbor views of Sri Lanka",
    tag: "Scenic",
    category: "Nature",
    size: "medium",
  },
  {
    src: VesaksImage,
    title: "Vesak Celebrations",
    description: "Cultural spiritual moments and traditions",
    tag: "Culture",
    category: "Culture",
    size: "medium",
  },
  {
    src: NatureImg1,
    title: "Tropical Landscapes",
    description: "Lush green hills and valleys",
    tag: "Scenery",
    category: "Nature",
    size: "medium",
  },
  {
    src: NatureImg2,
    title: "Island Paradise",
    description: "Breathtaking natural beauty",
    tag: "Nature",
    category: "Nature",
    size: "medium",
  },
  {
    src: NatureImg3,
    title: "Mountain Views",
    description: "Stunning elevation and horizons",
    tag: "Adventure",
    category: "Adventure",
    size: "small",
  },
  {
    src: GalleImage,
    title: "Galle Fort",
    description: "Historic fortification and architecture",
    tag: "Heritage",
    category: "Culture",
    size: "large",
  },
  {
    src: TrainImage,
    title: "Historic Train Journey",
    description: "Experience scenic railway across the island",
    tag: "Transport",
    category: "Experience",
    size: "medium",
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

const imageHover = {
  hidden: { scale: 1 },
  hover: { scale: 1.08, transition: { duration: 0.4 } },
};

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-gradient-to-b from-background via-background/95 to-primary/5 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={0}
        >
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <Camera className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold tracking-[0.15em] uppercase text-primary">
              Visual Journey
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
            Explore Sri Lanka's Beauty
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Discover the stunning beauty, rich culture, and diverse experiences across Sri Lanka.
            From pristine beaches to ancient temples, witness the magic of the island.
          </p>
        </motion.div>

        {/* Gallery Masonry Grid */}
        <div className="grid gap-6 md:gap-8">
          {/* Row 1: Large + Medium */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {galleryItems.slice(0, 2).map((item, i) => (
              <motion.div
                key={item.title}
                className={`group relative rounded-3xl overflow-hidden bg-card shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  i === 0 ? "md:col-span-2" : "md:col-span-1"
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                custom={i + 1}
              >
                {/* Image Container */}
                <motion.div
                  className="relative h-80 md:h-96 overflow-hidden"
                  initial="hidden"
                  whileHover="hover"
                  variants={imageHover}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Tag Badge */}
                  <div className="absolute top-6 right-6 z-10">
                    <motion.span
                      className="inline-flex items-center gap-1 rounded-full bg-primary/90 backdrop-blur-md px-4 py-2 text-xs font-semibold text-primary-foreground shadow-lg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <MapPin className="w-3 h-3" />
                      {item.tag}
                    </motion.span>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="relative p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>

                  <motion.div
                    className="flex items-center gap-2 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ gap: 8 }}
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 2: Multiple Medium Items */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            {galleryItems.slice(2, 6).map((item, i) => (
              <motion.div
                key={item.title}
                className={`group relative rounded-2xl overflow-hidden bg-card shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  item.size === "large" ? "md:col-span-2" : "md:col-span-1"
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                custom={i + 3}
              >
                {/* Image Container */}
                <motion.div
                  className="relative h-64 md:h-72 overflow-hidden"
                  initial="hidden"
                  whileHover="hover"
                  variants={imageHover}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Category Tag */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-block rounded-lg bg-secondary/90 backdrop-blur-md px-3 py-1 text-xs font-semibold text-secondary-foreground">
                      {item.category}
                    </span>
                  </div>
                </motion.div>

                {/* Minimal Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-200">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 3: Remaining Items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {galleryItems.slice(6).map((item, i) => (
              <motion.div
                key={item.title}
                className={`group relative rounded-2xl overflow-hidden bg-card shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  item.size === "large" ? "md:col-span-2" : "md:col-span-1"
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                custom={i + 7}
              >
                {/* Image Container */}
                <motion.div
                  className="relative h-72 md:h-80 overflow-hidden"
                  initial="hidden"
                  whileHover="hover"
                  variants={imageHover}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1 rounded-full bg-accent/90 backdrop-blur-md px-3 py-1 text-xs font-semibold text-accent-foreground">
                      {item.tag}
                    </span>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="relative p-5">
                  <h4 className="text-lg font-bold text-foreground mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground line-clamp-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          custom={12}
        >
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 backdrop-blur-md">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Experience Sri Lanka?</h3>
            <a
              href="#booking"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
            >
              Plan Your Adventure
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
