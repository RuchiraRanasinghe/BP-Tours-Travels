import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpDown, Clock3, Plane } from "lucide-react";
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

type TransferDirection = "airport-to-hotel" | "hotel-to-airport";

const AirportTransferSection = () => {
  const [direction, setDirection] = useState<TransferDirection>("airport-to-hotel");
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

  useEffect(() => {
    const applyHashMode = () => {
      if (window.location.hash === "#hotel-to-airport-form") {
        setDirection("hotel-to-airport");
      }
      if (window.location.hash === "#airport-to-hotel-form") {
        setDirection("airport-to-hotel");
      }
    };

    applyHashMode();
    window.addEventListener("hashchange", applyHashMode);
    return () => window.removeEventListener("hashchange", applyHashMode);
  }, []);

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
  const isAirportToHotel = direction === "airport-to-hotel";
  const leftMode = isAirportToHotel ? "airport" : "hotel";
  const rightMode = isAirportToHotel ? "hotel" : "airport";

  const toDirection = (mode: "airport" | "hotel") => (mode === "airport" ? "airport-to-hotel" : "hotel-to-airport");

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (isAirportToHotel) {
      toast.success("Airport to hotel request captured.");
      return;
    }

    toast.success("Hotel to airport request captured.");
  };

  const onSwapDirection = () => {
    setDirection((current) => (current === "airport-to-hotel" ? "hotel-to-airport" : "airport-to-hotel"));
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
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">Smart Airport Transfer Form</h2>
          <p className="text-muted-foreground text-lg">Swap between arrival and departure in one form for a faster booking flow.</p>
        </motion.div>

        <motion.form
          id="airport-transfer-form"
          onSubmit={onSubmit}
          className="max-w-3xl mx-auto bg-card rounded-2xl border border-border p-6 md:p-8 shadow-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <span id="airport-to-hotel-form" className="block h-0" aria-hidden="true" />
          <span id="hotel-to-airport-form" className="block h-0" aria-hidden="true" />

          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.12em] uppercase text-primary">Selected Transfer</p>
              <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mt-1">
                {isAirportToHotel ? "Arrival Transfer" : "Departure Transfer"}
              </h3>
            </div>

            <div className="sm:text-right rounded-xl border border-border bg-surface px-3 py-2">
              <p className="text-sm text-foreground font-medium">{isAirportToHotel ? "Airport -> Hotel" : "Hotel -> Airport"}</p>
              <p className="text-xs text-muted-foreground mt-1">Hint: Click the swap arrow to switch transfer direction.</p>
            </div>
          </div>

          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-3 mb-6">
            <button
              type="button"
              onClick={() => setDirection(toDirection(leftMode))}
              className={`inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                direction === toDirection(leftMode)
                  ? "bg-gradient-blue text-primary-foreground shadow-blue"
                  : "bg-surface text-foreground border border-border hover:border-primary/50"
              }`}
            >
              {leftMode === "airport" ? <Plane className="w-4 h-4" /> : <Clock3 className="w-4 h-4" />}
              {leftMode === "airport" ? "Airport" : "Hotel"}
            </button>

            <button
              type="button"
              onClick={onSwapDirection}
              className="h-11 w-11 rounded-full border border-primary/40 text-primary bg-background hover:bg-surface transition-colors inline-flex items-center justify-center"
              aria-label="Swap transfer direction"
            >
              <ArrowUpDown className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setDirection(toDirection(rightMode))}
              className={`inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                direction === toDirection(rightMode)
                  ? "bg-gradient-blue text-primary-foreground shadow-blue"
                  : "bg-surface text-foreground border border-border hover:border-primary/50"
              }`}
            >
              {rightMode === "airport" ? <Plane className="w-4 h-4" /> : <Clock3 className="w-4 h-4" />}
              {rightMode === "airport" ? "Airport" : "Hotel"}
            </button>
          </div>

          <div className="space-y-4">
            {isAirportToHotel ? (
              <>
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
              </>
            ) : (
              <>
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
              </>
            )}
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-gradient-blue text-primary-foreground font-semibold py-3.5 rounded-full text-sm shadow-blue hover:scale-105 active:scale-95 transition-transform duration-300"
          >
            {isAirportToHotel ? "Save Airport to Hotel Request" : "Save Hotel to Airport Request"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default AirportTransferSection;
