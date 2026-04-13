import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useColorExtraction } from "@/hooks/useColorExtraction";
import GeminiImage from "@/assets/Gemini_Generated_Image_8ht2sf8ht2sf8ht2.png";
import LotusImage from "@/assets/Lotus_Tower.jpg";
import GalleImage from "@/assets/karuvadgraphy-galle-4818528_1920.jpg";

const images = [
  {
    src: GeminiImage,
    title: "Premium Travel Experience",
    description: "Your trusted journey across Sri Lanka",
  },
  {
    src: LotusImage,
    title: "Colombo's Iconic Lotus Tower",
    description: "Modern marvel of Sri Lankan architecture",
  },
  {
    src: GalleImage,
    title: "Historic Galle Fort",
    description: "UNESCO World Heritage site with stunning views",
  },
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Apply color extraction only to the hero section, not globally
  useColorExtraction(images[currentIndex].src, true, "hero-carousel");

  useEffect(() => {
    if (!autoplay) return;

    // Autoplay interval for carousel
    const delay = 5500;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, delay);

    return () => clearInterval(interval);
  }, [autoplay, currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setAutoplay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setAutoplay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setAutoplay(false);
  };

  return (
    <div
      id="hero-carousel"
      className="relative w-full h-full overflow-hidden rounded-none"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={false}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: currentIndex === 0 ? 0.8 : 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].title}
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        </motion.div>
      </AnimatePresence>

      {/* Caption */}
      <motion.div
        className="absolute bottom-12 left-6 md:left-12 text-white z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        key={currentIndex}
      >
        <h3 className="text-2xl md:text-4xl font-bold mb-2">{images[currentIndex].title}</h3>
        <p className="text-sm md:text-lg text-white/80">{images[currentIndex].description}</p>
      </motion.div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 md:p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 md:p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/80 w-2"
            }`}
            whileHover={{ scale: 1.2 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
