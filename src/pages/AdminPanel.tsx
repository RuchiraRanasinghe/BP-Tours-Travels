import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Download, Pencil, Trash2 } from "lucide-react";
import {
  createId,
  readAdminData,
  updateAdminData,
  type RateItem,
  type Testimonial,
  type TourPackage,
} from "@/lib/adminStore";
import { useAdminData } from "@/hooks/useAdminData";
import { toast } from "sonner";

const inputClass =
  "w-full px-3 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm";

const cardClass = "bg-card rounded-2xl border border-border p-5 shadow-card";

const emptyPackage: Omit<TourPackage, "id"> = {
  name: "",
  duration: "",
  destinations: "",
  startingPrice: "",
  itinerary: "",
};

const emptyTestimonial: Omit<Testimonial, "id"> = {
  customerName: "",
  location: "",
  message: "",
};

const AdminPanel = () => {
  const data = useAdminData();

  const [packageDraft, setPackageDraft] = useState(emptyPackage);
  const [editingPackageId, setEditingPackageId] = useState<string | null>(null);

  const [testimonialDraft, setTestimonialDraft] = useState(emptyTestimonial);
  const [editingTestimonialId, setEditingTestimonialId] = useState<string | null>(null);

  const sortedInquiries = useMemo(
    () => [...data.inquiries].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
    [data.inquiries],
  );

  const savePackage = (event: React.FormEvent) => {
    event.preventDefault();

    if (editingPackageId) {
      updateAdminData((current) => ({
        ...current,
        packages: current.packages.map((pkg) =>
          pkg.id === editingPackageId ? { ...pkg, ...packageDraft } : pkg,
        ),
      }));
      toast.success("Package updated.");
    } else {
      updateAdminData((current) => ({
        ...current,
        packages: [{ id: createId("pkg"), ...packageDraft }, ...current.packages],
      }));
      toast.success("Package added.");
    }

    setEditingPackageId(null);
    setPackageDraft(emptyPackage);
  };

  const onEditPackage = (pkg: TourPackage) => {
    setEditingPackageId(pkg.id);
    setPackageDraft({
      name: pkg.name,
      duration: pkg.duration,
      destinations: pkg.destinations,
      startingPrice: pkg.startingPrice,
      itinerary: pkg.itinerary,
    });
  };

  const onDeletePackage = (id: string) => {
    updateAdminData((current) => ({
      ...current,
      packages: current.packages.filter((pkg) => pkg.id !== id),
    }));
    if (editingPackageId === id) {
      setEditingPackageId(null);
      setPackageDraft(emptyPackage);
    }
    toast.success("Package removed.");
  };

  const onRateChange = (id: string, field: keyof RateItem, value: string) => {
    updateAdminData((current) => ({
      ...current,
      rates: current.rates.map((rate) => (rate.id === id ? { ...rate, [field]: value } : rate)),
    }));
  };

  const saveTestimonial = (event: React.FormEvent) => {
    event.preventDefault();

    if (editingTestimonialId) {
      updateAdminData((current) => ({
        ...current,
        testimonials: current.testimonials.map((item) =>
          item.id === editingTestimonialId ? { ...item, ...testimonialDraft } : item,
        ),
      }));
      toast.success("Testimonial updated.");
    } else {
      updateAdminData((current) => ({
        ...current,
        testimonials: [{ id: createId("ts"), ...testimonialDraft }, ...current.testimonials],
      }));
      toast.success("Testimonial added.");
    }

    setEditingTestimonialId(null);
    setTestimonialDraft(emptyTestimonial);
  };

  const onEditTestimonial = (item: Testimonial) => {
    setEditingTestimonialId(item.id);
    setTestimonialDraft({
      customerName: item.customerName,
      location: item.location,
      message: item.message,
    });
  };

  const onDeleteTestimonial = (id: string) => {
    updateAdminData((current) => ({
      ...current,
      testimonials: current.testimonials.filter((item) => item.id !== id),
    }));
    if (editingTestimonialId === id) {
      setEditingTestimonialId(null);
      setTestimonialDraft(emptyTestimonial);
    }
    toast.success("Testimonial removed.");
  };

  const exportInquiries = () => {
    const latest = readAdminData().inquiries;

    const header = ["Created At", "Name", "Phone", "Email", "Service", "Message"];
    const rows = latest.map((inq) => [
      new Date(inq.createdAt).toLocaleString(),
      inq.name,
      inq.phone,
      inq.email,
      inq.service,
      inq.message.replace(/\n/g, " "),
    ]);

    const csv = [header, ...rows]
      .map((row) => row.map((value) => `"${String(value).replace(/"/g, '""')}"`).join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "bp-tours-inquiries.csv";
    anchor.click();
    URL.revokeObjectURL(url);
    toast.success("Inquiries exported as CSV (Excel compatible).");
  };

  return (
    <div className="min-h-screen bg-surface py-12">
      <div className="container px-6 space-y-8">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold tracking-[0.15em] uppercase text-primary">Admin Panel</p>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">BP Tours Management</h1>
          </div>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-blue px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-blue transition-all duration-300 hover:scale-105"
          >
            Back to Website
          </Link>
        </header>

        <section className={cardClass}>
          <h2 className="text-xl font-display font-semibold text-foreground mb-4">Add / Edit / Delete Tour Packages</h2>
          <form className="grid md:grid-cols-2 gap-3 mb-5" onSubmit={savePackage}>
            <input required className={inputClass} placeholder="Tour name" value={packageDraft.name} onChange={(event) => setPackageDraft((prev) => ({ ...prev, name: event.target.value }))} />
            <input required className={inputClass} placeholder="Duration" value={packageDraft.duration} onChange={(event) => setPackageDraft((prev) => ({ ...prev, duration: event.target.value }))} />
            <input required className={inputClass} placeholder="Destinations" value={packageDraft.destinations} onChange={(event) => setPackageDraft((prev) => ({ ...prev, destinations: event.target.value }))} />
            <input required className={inputClass} placeholder="Starting price" value={packageDraft.startingPrice} onChange={(event) => setPackageDraft((prev) => ({ ...prev, startingPrice: event.target.value }))} />
            <textarea required rows={3} className={`md:col-span-2 ${inputClass}`} placeholder="Itinerary" value={packageDraft.itinerary} onChange={(event) => setPackageDraft((prev) => ({ ...prev, itinerary: event.target.value }))} />
            <div className="md:col-span-2 flex gap-3">
              <button type="submit" className="bg-gradient-blue text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold shadow-blue">
                {editingPackageId ? "Update Package" : "Add Package"}
              </button>
              {editingPackageId && (
                <button
                  type="button"
                  className="border border-border px-5 py-2.5 rounded-full text-sm font-semibold text-foreground"
                  onClick={() => {
                    setEditingPackageId(null);
                    setPackageDraft(emptyPackage);
                  }}
                >
                  Cancel Edit
                </button>
              )}
            </div>
          </form>

          <div className="space-y-3">
            {data.packages.map((pkg) => (
              <div key={pkg.id} className="border border-border rounded-xl p-4 bg-background flex flex-col gap-3">
                <div>
                  <p className="font-semibold text-foreground">{pkg.name}</p>
                  <p className="text-sm text-muted-foreground">{pkg.duration} | {pkg.destinations} | {pkg.startingPrice}</p>
                </div>
                <div className="flex gap-3">
                  <button type="button" className="inline-flex items-center gap-1.5 text-sm text-primary" onClick={() => onEditPackage(pkg)}>
                    <Pencil className="w-4 h-4" /> Edit
                  </button>
                  <button type="button" className="inline-flex items-center gap-1.5 text-sm text-destructive" onClick={() => onDeletePackage(pkg.id)}>
                    <Trash2 className="w-4 h-4" /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={cardClass}>
          <h2 className="text-xl font-display font-semibold text-foreground mb-4">Update Rate Chart</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-sm">
              <thead>
                <tr className="bg-surface-alt">
                  <th className="px-3 py-2 text-left">Vehicle</th>
                  <th className="px-3 py-2 text-left">Airport Rate</th>
                  <th className="px-3 py-2 text-left">Day Rate (100km)</th>
                  <th className="px-3 py-2 text-left">Extra km Rate</th>
                </tr>
              </thead>
              <tbody>
                {data.rates.map((row) => (
                  <tr key={row.id} className="border-t border-border">
                    <td className="px-3 py-2 font-medium">{row.vehicleType}</td>
                    <td className="px-3 py-2"><input className={inputClass} value={row.airportRate} onChange={(event) => onRateChange(row.id, "airportRate", event.target.value)} /></td>
                    <td className="px-3 py-2"><input className={inputClass} value={row.dayRate100km} onChange={(event) => onRateChange(row.id, "dayRate100km", event.target.value)} /></td>
                    <td className="px-3 py-2"><input className={inputClass} value={row.extraKmRate} onChange={(event) => onRateChange(row.id, "extraKmRate", event.target.value)} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={cardClass}>
          <h2 className="text-xl font-display font-semibold text-foreground mb-4">Add / Edit / Delete Testimonials</h2>
          <form className="grid md:grid-cols-2 gap-3 mb-5" onSubmit={saveTestimonial}>
            <input required className={inputClass} placeholder="Customer name" value={testimonialDraft.customerName} onChange={(event) => setTestimonialDraft((prev) => ({ ...prev, customerName: event.target.value }))} />
            <input required className={inputClass} placeholder="Location" value={testimonialDraft.location} onChange={(event) => setTestimonialDraft((prev) => ({ ...prev, location: event.target.value }))} />
            <textarea required rows={3} className={`md:col-span-2 ${inputClass}`} placeholder="Testimonial message" value={testimonialDraft.message} onChange={(event) => setTestimonialDraft((prev) => ({ ...prev, message: event.target.value }))} />
            <div className="md:col-span-2 flex gap-3">
              <button type="submit" className="bg-gradient-blue text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold shadow-blue">
                {editingTestimonialId ? "Update Testimonial" : "Add Testimonial"}
              </button>
              {editingTestimonialId && (
                <button
                  type="button"
                  className="border border-border px-5 py-2.5 rounded-full text-sm font-semibold text-foreground"
                  onClick={() => {
                    setEditingTestimonialId(null);
                    setTestimonialDraft(emptyTestimonial);
                  }}
                >
                  Cancel Edit
                </button>
              )}
            </div>
          </form>

          <div className="space-y-3">
            {data.testimonials.map((item) => (
              <div key={item.id} className="border border-border rounded-xl p-4 bg-background flex flex-col gap-3">
                <div>
                  <p className="font-semibold text-foreground">{item.customerName} ({item.location})</p>
                  <p className="text-sm text-muted-foreground">{item.message}</p>
                </div>
                <div className="flex gap-3">
                  <button type="button" className="inline-flex items-center gap-1.5 text-sm text-primary" onClick={() => onEditTestimonial(item)}>
                    <Pencil className="w-4 h-4" /> Edit
                  </button>
                  <button type="button" className="inline-flex items-center gap-1.5 text-sm text-destructive" onClick={() => onDeleteTestimonial(item.id)}>
                    <Trash2 className="w-4 h-4" /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={cardClass}>
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <h2 className="text-xl font-display font-semibold text-foreground">Inquiry Inbox</h2>
            <button
              type="button"
              className="inline-flex items-center gap-2 bg-gradient-blue text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold shadow-blue"
              onClick={exportInquiries}
            >
              <Download className="w-4 h-4" />
              Export to Excel (CSV)
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[860px] text-sm">
              <thead>
                <tr className="bg-surface-alt">
                  <th className="px-3 py-2 text-left">Date</th>
                  <th className="px-3 py-2 text-left">Name</th>
                  <th className="px-3 py-2 text-left">Phone</th>
                  <th className="px-3 py-2 text-left">Email</th>
                  <th className="px-3 py-2 text-left">Service</th>
                  <th className="px-3 py-2 text-left">Message</th>
                </tr>
              </thead>
              <tbody>
                {sortedInquiries.map((inq) => (
                  <tr key={inq.id} className="border-t border-border">
                    <td className="px-3 py-2 text-muted-foreground">{new Date(inq.createdAt).toLocaleString()}</td>
                    <td className="px-3 py-2 text-foreground">{inq.name}</td>
                    <td className="px-3 py-2 text-muted-foreground">{inq.phone}</td>
                    <td className="px-3 py-2 text-muted-foreground">{inq.email}</td>
                    <td className="px-3 py-2 text-muted-foreground">{inq.service}</td>
                    <td className="px-3 py-2 text-muted-foreground max-w-[360px]">{inq.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminPanel;
