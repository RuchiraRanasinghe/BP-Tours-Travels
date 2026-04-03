import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { businessEmail, createId, updateAdminData, type TripType } from "@/lib/adminStore";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const InquirySection = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "airport-pickup" as TripType,
    message: "",
  });

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm";
  const labelClass = "block text-sm font-medium text-foreground mb-1.5";

  const update = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    updateAdminData((current) => ({
      ...current,
      inquiries: [
        {
          id: createId("inq"),
          createdAt: new Date().toISOString(),
          name: form.name,
          phone: form.phone,
          email: form.email,
          service: form.service,
          message: form.message,
        },
        ...current.inquiries,
      ],
    }));

    const subject = encodeURIComponent("New Inquiry - BP Tours & Travels");
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service}\n\nMessage:\n${form.message}`,
    );
    window.open(`mailto:${businessEmail}?subject=${subject}&body=${body}`, "_blank");

    toast.success("Inquiry saved and email draft opened.");
    setForm({ name: "", phone: "", email: "", service: "airport-pickup", message: "" });
  };

  return (
    <section id="inquiry" className="py-24 md:py-32 bg-background">
      <div className="container px-6">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <span className="text-sm font-semibold tracking-[0.15em] uppercase text-primary mb-3 block">Inquiry Form</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">Send Your Inquiry</h2>
          <p className="text-muted-foreground text-lg">Your inquiry is stored in the admin panel and prepared for email notification.</p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-card rounded-2xl border border-border p-7 md:p-10 shadow-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label className={labelClass}>Full Name</label>
              <input required className={inputClass} value={form.name} onChange={(event) => update("name", event.target.value)} />
            </div>
            <div>
              <label className={labelClass}>Phone</label>
              <input required className={inputClass} value={form.phone} onChange={(event) => update("phone", event.target.value)} />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label className={labelClass}>Email</label>
              <input required type="email" className={inputClass} value={form.email} onChange={(event) => update("email", event.target.value)} />
            </div>
            <div>
              <label className={labelClass}>Service Type</label>
              <select className={inputClass} value={form.service} onChange={(event) => update("service", event.target.value)}>
                <option value="airport-drop">Airport Drop</option>
                <option value="airport-pickup">Airport Pickup</option>
                <option value="local-tour">Local Tour</option>
                <option value="foreign-tour">Foreign Tour</option>
              </select>
            </div>
          </div>

          <div className="mb-7">
            <label className={labelClass}>Message</label>
            <textarea
              required
              rows={4}
              className={inputClass}
              value={form.message}
              onChange={(event) => update("message", event.target.value)}
              placeholder="Tell us your travel plan"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-blue text-primary-foreground font-semibold py-4 rounded-full text-lg shadow-blue hover:scale-105 active:scale-95 transition-transform duration-300"
          >
            Submit Inquiry
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default InquirySection;
