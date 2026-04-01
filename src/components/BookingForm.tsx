import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { MapPin, Calendar, Clock, Users, ArrowRight } from "lucide-react";

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
    const msg = `🚗 *New Booking Request*%0A%0A👤 Name: ${encodeURIComponent(form.name)}%0A📞 Phone: ${encodeURIComponent(form.phone)}%0A🛎 Service: ${form.service}%0A🚘 Vehicle: ${form.vehicle}%0A📍 Pickup: ${encodeURIComponent(form.pickup)}%0A📍 Drop: ${encodeURIComponent(form.drop)}%0A📅 Date: ${form.date}%0A⏰ Time: ${form.time}%0A👥 Passengers: ${form.passengers}`;
    window.open(`https://wa.me/94771399144?text=${msg}`, "_blank");
    toast.success("Booking sent via WhatsApp! We'll confirm shortly.");
  };

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/30 transition text-sm";

  const labelClass = "block text-sm font-medium text-foreground mb-2";

  return (
    <section id="booking" className="py-24 md:py-32 bg-background">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <p className="text-sm font-medium text-gold mb-3 tracking-wide uppercase">Book a ride</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight mb-6">
              Your journey starts here
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Fill in your details and we'll confirm your booking instantly via WhatsApp. It takes less than 30 seconds.
            </p>

            <div className="space-y-4">
              {[
                { icon: MapPin, text: "Enter pickup & drop locations" },
                { icon: Calendar, text: "Pick your preferred date & time" },
                { icon: Users, text: "Choose vehicle type & passengers" },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <step.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground">{step.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-background rounded-2xl border border-border p-8 md:p-10 shadow-soft"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className={labelClass}>Full Name</label>
                <input required placeholder="Your name" value={form.name} onChange={(e) => update("name", e.target.value)} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Phone Number</label>
                <input required placeholder="+94 7XX XXX XXX" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={inputClass} />
              </div>
            </div>

            <div className="mb-5">
              <label className={labelClass}>WhatsApp Number <span className="text-muted-foreground font-normal">(if different)</span></label>
              <input placeholder="+94 7XX XXX XXX" value={form.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} className={inputClass} />
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
                <input required placeholder="e.g. Kandy" value={form.drop} onChange={(e) => update("drop", e.target.value)} className={inputClass} />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-5 mb-8">
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
              className="w-full inline-flex items-center justify-center gap-2 bg-foreground text-background font-medium py-4 rounded-full text-base hover:bg-foreground/90 transition-colors"
            >
              Send Booking via WhatsApp
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
