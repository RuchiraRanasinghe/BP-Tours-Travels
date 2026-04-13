import { motion } from "framer-motion";
import { MapPin, Globe } from "lucide-react";
import TempleImage from "@/assets/musthaqsms-temple-204803_1920.jpg";
import MirisaImage from "@/assets/pmarciciak-mirissa-3287053_1920.jpg";
import TrainImage from "@/assets/monamaria-train-4026825_1920.jpg";
import GalleImage from "@/assets/karuvadgraphy-galle-4818528_1920.jpg";
import VesaksImage from "@/assets/kalyanayahaluwo-vesak-5391081_1920.jpg";
import ElephantImage from "@/assets/oleksandrpidvalnyi-elephant-7112151_1920.jpg";

const destinations = [
  {
    name: "Ancient Temples",
    image: TempleImage,
    description: "Spiritual heritage and ancient architecture",
    region: "Central Highlands",
  },
  {
    name: "Mirissa Beach",
    image: MirisaImage,
    description: "Perfect for whale watching and relaxation",
    region: "Southern Coast",
  },
  {
    name: "Historic Railways",
    image: TrainImage,
    description: "Scenic journeys through mountains and valleys",
    region: "Central Province",
  },
  {
    name: "Galle Fort",
    image: GalleImage,
    description: "UNESCO heritage with ocean views",
    region: "Western Province",
  },
  {
    name: "Vesak Celebrations",
    image: VesaksImage,
    description: "Cultural spiritual festivals and traditions",
    region: "Island-wide",
  },
  {
    name: "Safari Adventures",
    image: ElephantImage,
    description: "Wildlife encounters in natural habitats",
    region: "National Parks",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" as const },
  }),
};

const DestinationsSpotlightSection = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background via-secondary/3 to-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/2 -left-96 w-96 h-96 bg-primary/3 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute top-1/2 -right-96 w-96 h-96 bg-secondary/3 rounded-full blur-3xl -translate-y-1/2"></div>

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
            <Globe className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold tracking-[0.15em] uppercase text-primary">
              Popular Destinations
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Where to Visit
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore Sri Lanka's most captivating destinations with our premium transportation and tour services.
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.name}
              className="group relative rounded-3xl overflow-hidden bg-card shadow-lg hover:shadow-2xl transition-all duration-300 h-80 cursor-pointer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={i + 1}
            >
              {/* Image Background */}
              <motion.img
                src={dest.image}
                alt={dest.name}
                className="absolute inset-0 w-full h-full object-cover"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.4 }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Decorative Corner Accent */}
              <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-br-3xl"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                {/* Region Tag */}
                <motion.div
                  className="inline-flex items-center gap-1.5 w-fit mb-3 rounded-full bg-primary/20 backdrop-blur-md px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <MapPin className="w-3 h-3 text-primary" />
                  <span className="text-xs font-semibold text-primary">{dest.region}</span>
                </motion.div>

                {/* Title & Description */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <h3 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-primary transition-colors">
                    {dest.name}
                  </h3>
                  <p className="text-sm text-gray-200 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {dest.description}
                  </p>
                </motion.div>
              </div>

              {/* Bottom Border Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          custom={7}
        >
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 backdrop-blur-md">
            <p className="text-muted-foreground mb-4">Not sure where to go?</p>
            <a
              href="#inquiry"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-8 py-3 text-base font-semibold text-primary-foreground shadow-lg hover:shadow-2xl hover:scale-105 transition-all active:scale-95"
            >
              Plan Your Tour
              <Globe className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationsSpotlightSection;
