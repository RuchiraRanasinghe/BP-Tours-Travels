import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Send } from "lucide-react";

type ServiceType = "airport-pickup" | "airport-drop" | "local-ride" | "custom-tour";
type VehicleType = "car" | "van";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

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
    "w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm";
  const labelClass = "block text-sm font-medium text-foreground mb-1.5";

  return (
    <section id="booking" className="py-24 md:py-32 bg-cream">
      <div className="container px-6">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <span className="text-sm font-semibold tracking-[0.15em] uppercase text-primary mb-3 block">Easy Booking</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Book Your Ride
          </h2>
          <p className="text-muted-foreground text-lg">Fill in details and we'll confirm via WhatsApp instantly.</p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-card rounded-2xl border border-border p-7 md:p-10 shadow-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label className={labelClass}>Full Name</label>
              <input required placeholder="John Doe" value={form.name} onChange={(e) => update("name", e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Phone Number</label>
              <input required placeholder="+94 7X XXX XXXX" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={inputClass} />
            </div>
          </div>

          <div className="mb-5">
            <label className={labelClass}>WhatsApp Number <span className="text-muted-foreground font-normal">(if different)</span></label>
            <input placeholder="+94 7X XXX XXXX" value={form.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} className={inputClass} />
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label className={labelClass}>Service Type</label>
              <select value={form.service} onChange={(e) => update("service", e.target.value)} className={inputClass}>
                <option value="airport-pickup">Airport Pickup</option>
                <option value="airport-drop">Airport Drop</option>
                <option value="local-ride">Local Ride</option>
                <option value="custom-tour">Custom Tour</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Vehicle Type</label>
              <select value={form.vehicle} onChange={(e) => update("vehicle", e.target.value)} className={inputClass}>
                <option value="car">Car (1–4 pax)</option>
                <option value="van">Van (5–12 pax)</option>
              </select>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label className={labelClass}>Pickup Location</label>
              <input required placeholder="e.g. Colombo Airport" value={form.pickup} onChange={(e) => update("pickup", e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Drop Location</label>
              <input required placeholder="e.g. Kandy City Centre" value={form.drop} onChange={(e) => update("drop", e.target.value)} className={inputClass} />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div>
              <label className={labelClass}>Date</label>
              <input required type="date" value={form.date} onChange={(e) => update("date", e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Time</label>
              <input required type="time" value={form.time} onChange={(e) => update("time", e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Passengers</label>
              <input type="number" min="1" max="15" placeholder="1" value={form.passengers} onChange={(e) => update("passengers", e.target.value)} className={inputClass} />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-gold text-primary-foreground font-semibold py-4 rounded-full text-lg shadow-gold hover:scale-105 active:scale-95 transition-transform duration-300 flex items-center justify-center gap-2.5"
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
