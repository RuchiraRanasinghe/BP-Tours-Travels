import { useRef } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Send, MapPin, Calendar, Clock } from "lucide-react";
import { serviceAreaSuggestions } from "@/lib/adminStore";

const toDateInputValue = (date: Date) => {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const toTimeInputValue = (date: Date) => {
  const hours = `${date.getHours()}`.padStart(2, "0");
  const minutes = `${date.getMinutes()}`.padStart(2, "0");
  return `${hours}:${minutes}`;
};

const HeroBookingWidget = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const pickupRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const timeRef = useRef<HTMLInputElement>(null);

  const today = new Date();
  const minDate = toDateInputValue(today);
  const fourHoursFromNow = new Date(Date.now() + 4 * 60 * 60 * 1000);
  const minTime = toTimeInputValue(fourHoursFromNow);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const tripDate = dateRef.current?.value;
    const tripTime = timeRef.current?.value;
    const pickupLocation = pickupRef.current?.value;

    if (!pickupLocation || !tripDate || !tripTime) {
      toast.error("Please fill in all fields");
      return;
    }

    const isToday = tripDate === minDate;
    if (isToday && tripTime < minTime) {
      toast.error("Please pick a time at least 4 hours from now.");
      return;
    }

    toast.success("Quote request sent! We'll contact you shortly.");
    formRef.current?.reset();
  };

  const inputClass =
    "w-full px-3 py-2.5 rounded-lg border border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm backdrop-blur-sm";
  const labelClass = "block text-xs font-semibold text-white/80 mb-1.5 uppercase tracking-wide";

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      className="w-full sm:w-96 bg-slate-950/80 backdrop-blur-lg rounded-2xl border border-white/10 p-6 md:p-7 shadow-2xl relative"
      initial={{ opacity: 0, x: 50, y: 0 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: 0.6, duration: 0.7 }}
      whileHover={{ boxShadow: "0 25px 50px rgba(0, 0, 0, 0.4)" }}
    >
      {/* Header */}
      <div className="mb-6">
        <motion.span
          className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.1em] uppercase text-primary mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          Easy Booking
        </motion.span>
        <motion.h3
          className="text-xl md:text-2xl font-display font-bold text-white mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
        >
          Instant Quote
        </motion.h3>
        <motion.p
          className="text-xs text-white/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Get your booking in seconds
        </motion.p>
      </div>

      {/* Trip Type */}
      <motion.div
        className="mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85 }}
      >
        <label className={labelClass}>Trip Type</label>
        <select
          defaultValue="airport-pickup"
          className={inputClass}
        >
          <option value="airport-pickup">Airport Pickup</option>
          <option value="airport-drop">Airport Drop</option>
          <option value="local-tour">Local Tour</option>
          <option value="foreign-tour">Foreign Tour</option>
        </select>
      </motion.div>

      {/* Pickup Location */}
      <motion.div
        className="mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <label className={labelClass}>
          <MapPin className="w-3 h-3 inline mr-1" />
          Pickup Location
        </label>
        <input
          ref={pickupRef}
          required
          list="hero-pickup-suggestions"
          placeholder="Enter location"
          className={inputClass}
        />
        <datalist id="hero-pickup-suggestions">
          {serviceAreaSuggestions.map((item) => (
            <option key={item} value={item} />
          ))}
        </datalist>
      </motion.div>

      {/* Date & Time Row */}
      <motion.div
        className="grid grid-cols-2 gap-3 mb-5"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.95 }}
      >
        <div>
          <label className={labelClass}>
            <Calendar className="w-3 h-3 inline mr-1" />
            Date
          </label>
          <input
            ref={dateRef}
            required
            type="date"
            min={minDate}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>
            <Clock className="w-3 h-3 inline mr-1" />
            Time
          </label>
          <input
            ref={timeRef}
            required
            type="time"
            className={inputClass}
          />
        </div>
      </motion.div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        className="w-full bg-gradient-blue text-primary-foreground font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.05 }}
      >
        <Send className="w-4 h-4" />
        Get Quote
      </motion.button>

      {/* Accent Line */}
      <motion.div
        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent rounded-t-2xl"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ delay: 0.7, duration: 0.8 }}
      ></motion.div>
    </motion.form>
  );
};

export default HeroBookingWidget;
