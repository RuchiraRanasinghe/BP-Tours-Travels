import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Clock3, Plane } from "lucide-react";
import { toast } from "sonner";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const getTodayDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = `${now.getMonth() + 1}`.padStart(2, "0");
  const day = `${now.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const AirportTransferSection = () => {
  const [arrivalForm, setArrivalForm] = useState({
    flightNumber: "",
    landingDate: "",
    landingTime: "",
    hotelName: "",
  });

  const [departureForm, setDepartureForm] = useState({
    pickupAddress: "",
    flightDate: "",
    flightTime: "",
  });

  const autoPickupTime = useMemo(() => {
    if (!departureForm.flightDate || !departureForm.flightTime) {
      return "";
    }

    const flightDateTime = new Date(`${departureForm.flightDate}T${departureForm.flightTime}:00`);
    const pickup = new Date(flightDateTime.getTime() - 3 * 60 * 60 * 1000);

    const year = pickup.getFullYear();
    const month = `${pickup.getMonth() + 1}`.padStart(2, "0");
    const day = `${pickup.getDate()}`.padStart(2, "0");
    const hours = `${pickup.getHours()}`.padStart(2, "0");
    const minutes = `${pickup.getMinutes()}`.padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}`;
  }, [departureForm.flightDate, departureForm.flightTime]);

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm";
  const labelClass = "block text-sm font-medium text-foreground mb-1.5";

  const onArrivalSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    toast.success("Airport to hotel request captured.");
  };

  const onDepartureSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    toast.success("Hotel to airport request captured.");
  };

  return (
    <section id="airport-transfer" className="py-24 md:py-32 bg-background">
      <div className="container px-6">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <span className="text-sm font-semibold tracking-[0.15em] uppercase text-primary mb-3 block">Airport Transfer</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">Dedicated Airport Transfer Forms</h2>
          <p className="text-muted-foreground text-lg">Handle arrivals and departures with accurate flight timing.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <motion.form
            id="airport-to-hotel-form"
            onSubmit={onArrivalSubmit}
            className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-2 mb-5">
              <Plane className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-display font-semibold text-foreground">Airport to Hotel</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className={labelClass}>Flight Number</label>
                <input
                  required
                  value={arrivalForm.flightNumber}
                  onChange={(event) => setArrivalForm((prev) => ({ ...prev, flightNumber: event.target.value }))}
                  className={inputClass}
                  placeholder="e.g. UL 225"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Landing Date</label>
                  <input
                    required
                    type="date"
                    min={getTodayDate()}
                    value={arrivalForm.landingDate}
                    onChange={(event) => setArrivalForm((prev) => ({ ...prev, landingDate: event.target.value }))}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Landing Time</label>
                  <input
                    required
                    type="time"
                    value={arrivalForm.landingTime}
                    onChange={(event) => setArrivalForm((prev) => ({ ...prev, landingTime: event.target.value }))}
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label className={labelClass}>Hotel Name / Address</label>
                <input
                  required
                  value={arrivalForm.hotelName}
                  onChange={(event) => setArrivalForm((prev) => ({ ...prev, hotelName: event.target.value }))}
                  className={inputClass}
                  placeholder="Enter destination hotel"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-gradient-blue text-primary-foreground font-semibold py-3.5 rounded-full text-sm shadow-blue hover:scale-105 active:scale-95 transition-transform duration-300"
            >
              Save Airport to Hotel Request
            </button>
          </motion.form>

          <motion.form
            id="hotel-to-airport-form"
            onSubmit={onDepartureSubmit}
            className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-2 mb-5">
              <Clock3 className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-display font-semibold text-foreground">Hotel to Airport</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className={labelClass}>Pickup Address</label>
                <input
                  required
                  value={departureForm.pickupAddress}
                  onChange={(event) => setDepartureForm((prev) => ({ ...prev, pickupAddress: event.target.value }))}
                  className={inputClass}
                  placeholder="Hotel or home address"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Flight Date</label>
                  <input
                    required
                    type="date"
                    min={getTodayDate()}
                    value={departureForm.flightDate}
                    onChange={(event) => setDepartureForm((prev) => ({ ...prev, flightDate: event.target.value }))}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Flight Time</label>
                  <input
                    required
                    type="time"
                    value={departureForm.flightTime}
                    onChange={(event) => setDepartureForm((prev) => ({ ...prev, flightTime: event.target.value }))}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="rounded-xl bg-surface px-4 py-3 border border-border">
                <p className="text-sm text-muted-foreground">Suggested pickup time (3 hours before flight):</p>
                <p className="text-base font-semibold text-foreground mt-1">{autoPickupTime || "Select flight date and time"}</p>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-gradient-blue text-primary-foreground font-semibold py-3.5 rounded-full text-sm shadow-blue hover:scale-105 active:scale-95 transition-transform duration-300"
            >
              Save Hotel to Airport Request
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default AirportTransferSection;
