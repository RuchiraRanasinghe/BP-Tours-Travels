import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { serviceAreaSuggestions, type TripType } from "@/lib/adminStore";

import { fadeUpSimple } from "@/lib/animations";

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

const BookingForm = () => {
  const today = new Date();
  const [form, setForm] = useState({
    tripType: "airport-pickup" as TripType,
    pickupLocation: "",
    tripDate: "",
    tripTime: "",
    passengers: "1",
    luggage: "0",
  });

  const update = (key: string, value: string) => setForm((f) => ({ ...f, [key]: value }));

  const minDate = toDateInputValue(today);
  const fourHoursFromNow = new Date(Date.now() + 4 * 60 * 60 * 1000);
  const isToday = form.tripDate === minDate;
  const minTime = isToday ? toTimeInputValue(fourHoursFromNow) : "00:00";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isToday && form.tripTime < minTime) {
      toast.error("Please pick a time at least 4 hours from now.");
      return;
    }

    toast.success("Quote request captured. We will contact you shortly.");
  };

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm";
  const labelClass = "block text-sm font-medium text-foreground mb-1.5";

  return (
    <section id="booking" className="py-24 md:py-32 bg-surface-alt">
      <div className="container px-6">
        <span id="booking-now" className="block h-0 scroll-mt-24" aria-hidden="true" />
        <span id="booking-schedule" className="block h-0 scroll-mt-24" aria-hidden="true" />
        <span id="round-trip" className="block h-0 scroll-mt-24" aria-hidden="true" />
        <span id="add-stop" className="block h-0 scroll-mt-24" aria-hidden="true" />

        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpSimple}
        >
          <span className="text-sm font-semibold tracking-[0.15em] uppercase text-primary mb-3 block">Easy Booking</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Instant Booking Quote
          </h2>
          <p className="text-muted-foreground text-lg">Select trip details and get your instant quote request.</p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-card rounded-2xl border border-border p-7 md:p-10 shadow-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUpSimple}
        >
          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label className={labelClass}>Trip Type</label>
              <select value={form.tripType} onChange={(e) => update("tripType", e.target.value)} className={inputClass}>
                <option value="airport-drop">Airport Drop</option>
                <option value="airport-pickup">Airport Pickup</option>
                <option value="local-tour">Local Tour</option>
                <option value="foreign-tour">Foreign Tour</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Pickup Location (Map Autosuggest)</label>
              <input
                required
                list="pickup-suggestions"
                placeholder="Type pickup location"
                value={form.pickupLocation}
                onChange={(e) => update("pickupLocation", e.target.value)}
                className={inputClass}
              />
              <datalist id="pickup-suggestions">
                {serviceAreaSuggestions.map((item) => (
                  <option key={item} value={item} />
                ))}
              </datalist>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label className={labelClass}>Date</label>
              <input required type="date" min={minDate} value={form.tripDate} onChange={(e) => update("tripDate", e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Time</label>
              <input required type="time" min={minTime} value={form.tripTime} onChange={(e) => update("tripTime", e.target.value)} className={inputClass} />
              {isToday && (
                <p className="text-xs text-muted-foreground mt-1">Times before {minTime} are disabled due to the 4-hour advance rule.</p>
              )}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mb-8">
            <div>
              <label className={labelClass}>Passenger Count</label>
              <input type="number" min="1" max="50" value={form.passengers} onChange={(e) => update("passengers", e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Luggage Count</label>
              <input type="number" min="0" max="50" value={form.luggage} onChange={(e) => update("luggage", e.target.value)} className={inputClass} />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-blue text-primary-foreground font-semibold py-4 rounded-full text-lg shadow-blue hover:scale-105 active:scale-95 transition-transform duration-300 flex items-center justify-center gap-2.5"
          >
            <Send className="w-5 h-5" />
            Get Quote
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingForm;
