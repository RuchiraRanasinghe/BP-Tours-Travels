import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Calculator, DollarSign, SlidersHorizontal } from "lucide-react";
import { useAdminData } from "@/hooks/useAdminData";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const RatesSection = () => {
  const { rates } = useAdminData();
  const [vehicleType, setVehicleType] = useState(rates[0]?.vehicleType ?? "Car");
  const [tripType, setTripType] = useState<"airport" | "day">("airport");
  const [distanceKm, setDistanceKm] = useState("100");

  const parseAmount = (value: string) => Number(value.replace(/[^0-9]/g, ""));

  const selectedRate = rates.find((row) => row.vehicleType === vehicleType) ?? rates[0];

  const estimate = useMemo(() => {
    if (!selectedRate) {
      return 0;
    }

    const distance = Number(distanceKm) || 0;
    const baseAmount = tripType === "airport"
      ? parseAmount(selectedRate.airportRate)
      : parseAmount(selectedRate.dayRate100km);

    if (tripType === "airport") {
      return baseAmount;
    }

    const includedDistance = 100;
    const extraDistance = Math.max(0, distance - includedDistance);
    return baseAmount + extraDistance * parseAmount(selectedRate.extraKmRate);
  }, [distanceKm, selectedRate, tripType]);

  return (
    <section id="fare-estimator" className="py-24 md:py-32 bg-background">
      <div className="container px-6">
        <span id="price-calculator" className="block h-0 scroll-mt-24" aria-hidden="true" />

        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <span className="text-sm font-semibold tracking-[0.15em] uppercase text-primary mb-3 block">Rates</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">Pricing Table</h2>
          <p className="text-muted-foreground text-lg">This chart is editable from the admin panel.</p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] mb-10">
          <motion.div
            className="rounded-2xl border border-border bg-card p-6 shadow-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-2 mb-4">
              <Calculator className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-display font-semibold text-foreground">Price Calculator</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-foreground">
                <span>Vehicle Type</span>
                <select
                  value={vehicleType}
                  onChange={(event) => setVehicleType(event.target.value)}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  {rates.map((row) => (
                    <option key={row.id} value={row.vehicleType}>
                      {row.vehicleType}
                    </option>
                  ))}
                </select>
              </label>

              <label className="space-y-2 text-sm font-medium text-foreground">
                <span>Trip Type</span>
                <select
                  value={tripType}
                  onChange={(event) => setTripType(event.target.value as "airport" | "day")}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  <option value="airport">Airport Transfer</option>
                  <option value="day">Day Trip (100 km)</option>
                </select>
              </label>

              <label className="space-y-2 text-sm font-medium text-foreground sm:col-span-2">
                <span>Distance (km)</span>
                <input
                  type="number"
                  min="1"
                  value={distanceKm}
                  onChange={(event) => setDistanceKm(event.target.value)}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </label>
            </div>

            <div className="mt-5 rounded-2xl bg-surface px-5 py-4 border border-border">
              <p className="text-sm text-muted-foreground">Estimated Fare</p>
              <p className="mt-1 text-3xl font-display font-bold text-foreground">
                LKR {estimate.toLocaleString()}
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Based on the current {selectedRate?.vehicleType ?? "selected"} rate and the selected trip type.
              </p>
            </div>
          </motion.div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <div className="flex items-center gap-2 mb-4">
              <SlidersHorizontal className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-display font-semibold text-foreground">Rate Summary</h3>
            </div>
            <div className="space-y-3">
              {rates.map((row) => (
                <div key={row.id} className="rounded-xl border border-border bg-background p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold text-foreground">{row.vehicleType}</p>
                    <DollarSign className="h-4 w-4 text-primary" />
                  </div>
                  <div className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-3">
                    <p>Airport: {row.airportRate}</p>
                    <p>Day 100km: {row.dayRate100km}</p>
                    <p>Extra km: {row.extraKmRate}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-card">
          <table className="w-full min-w-[720px] text-sm">
            <thead className="bg-surface-alt">
              <tr>
                <th className="text-left px-5 py-4 font-semibold text-foreground">Vehicle Type</th>
                <th className="text-left px-5 py-4 font-semibold text-foreground">Airport Rate</th>
                <th className="text-left px-5 py-4 font-semibold text-foreground">Day Rate (100km)</th>
                <th className="text-left px-5 py-4 font-semibold text-foreground">Extra km Rate</th>
              </tr>
            </thead>
            <tbody>
              {rates.map((row) => (
                <tr key={row.id} className="border-t border-border">
                  <td className="px-5 py-4 text-foreground font-medium">{row.vehicleType}</td>
                  <td className="px-5 py-4 text-muted-foreground">{row.airportRate}</td>
                  <td className="px-5 py-4 text-muted-foreground">{row.dayRate100km}</td>
                  <td className="px-5 py-4 text-muted-foreground">{row.extraKmRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default RatesSection;
