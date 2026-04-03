import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Send } from "lucide-react";

type ServiceType = "airport-pickup" | "airport-drop" | "local-ride" | "custom-tour";
type VehicleType = "car" | "van";

const BookingForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    whatsapp: "",
    service: "airport-pickup" as ServiceType,
    vehicle: "car" as VehicleType,
    pickup: "",
    drop: "",
    date: "",
    time: "",
    passengers: "1",
  });

  const update = (key: string, value: string) => setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `🚗 *New Booking Request*%0A%0A👤 Name: ${form.name}%0A📞 Phone: ${form.phone}%0A🛎 Service: ${form.service}%0A🚘 Vehicle: ${form.vehicle}%0A📍 Pickup: ${form.pickup}%0A📍 Drop: ${form.drop}%0A📅 Date: ${form.date}%0A⏰ Time: ${form.time}%0A👥 Passengers: ${form.passengers}`;
    window.open(`https://wa.me/94771399144?text=${msg}`, "_blank");
    toast.success("Booking sent via WhatsApp! We'll confirm shortly.");
  };

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm";

  return (
    <section id="booking" className="py-20 md:py-28 bg-background">
      <div className="container px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Book Your <span className="text-gradient-gold">Ride</span>
          </h2>
          <p className="text-muted-foreground text-lg">Fill in details and we'll confirm via WhatsApp instantly.</p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-card rounded-2xl border border-border p-6 md:p-10 shadow-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <input required placeholder="Your Name" value={form.name} onChange={(e) => update("name", e.target.value)} className={inputClass} />
            <input required placeholder="Phone Number" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={inputClass} />
          </div>

          <input placeholder="WhatsApp Number (if different)" value={form.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} className={`${inputClass} mb-4`} />

          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <select value={form.service} onChange={(e) => update("service", e.target.value)} className={inputClass}>
              <option value="airport-pickup">Airport Pickup</option>
              <option value="airport-drop">Airport Drop</option>
              <option value="local-ride">Local Ride</option>
              <option value="custom-tour">Custom Tour</option>
            </select>
            <select value={form.vehicle} onChange={(e) => update("vehicle", e.target.value)} className={inputClass}>
              <option value="car">Car (1–4 pax)</option>
              <option value="van">Van (5–12 pax)</option>
            </select>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <input required placeholder="Pickup Location" value={form.pickup} onChange={(e) => update("pickup", e.target.value)} className={inputClass} />
            <input required placeholder="Drop Location" value={form.drop} onChange={(e) => update("drop", e.target.value)} className={inputClass} />
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <input required type="date" value={form.date} onChange={(e) => update("date", e.target.value)} className={inputClass} />
            <input required type="time" value={form.time} onChange={(e) => update("time", e.target.value)} className={inputClass} />
            <input type="number" min="1" max="15" placeholder="Pax" value={form.passengers} onChange={(e) => update("passengers", e.target.value)} className={inputClass} />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-gold text-primary-foreground font-semibold py-4 rounded-xl text-lg shadow-gold hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            Send Booking via WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingForm;
