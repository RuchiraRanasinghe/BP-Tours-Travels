import { motion } from "framer-motion";
import { useAdminData } from "@/hooks/useAdminData";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const RatesSection = () => {
  const { rates } = useAdminData();

  return (
    <section id="rate-chart" className="py-24 md:py-32 bg-background">
      <div className="container px-6">
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
