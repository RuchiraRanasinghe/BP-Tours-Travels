export type TripType = "airport-drop" | "airport-pickup" | "local-tour" | "foreign-tour";

export type TourPackage = {
  id: string;
  name: string;
  duration: string;
  destinations: string;
  startingPrice: string;
  itinerary: string;
};

export type RateItem = {
  id: string;
  vehicleType: "Car" | "Van" | "Mini Bus" | "Luxury";
  airportRate: string;
  dayRate100km: string;
  extraKmRate: string;
};

export type Testimonial = {
  id: string;
  customerName: string;
  location: string;
  message: string;
};

export type Inquiry = {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
  email: string;
  service: TripType;
  message: string;
};

export type AdminData = {
  packages: TourPackage[];
  rates: RateItem[];
  testimonials: Testimonial[];
  inquiries: Inquiry[];
};

const STORAGE_KEY = "bp_tours_admin_data_v1";

const defaultData: AdminData = {
  packages: [
    {
      id: "pkg-1",
      name: "Cultural Triangle Highlights",
      duration: "3 Days / 2 Nights",
      destinations: "Dambulla, Sigiriya, Kandy",
      startingPrice: "LKR 48,000",
      itinerary: "Day 1: Dambulla Cave Temple and Sigiriya village tour. Day 2: Sigiriya Rock Fortress and spice garden. Day 3: Kandy city and Temple of the Tooth.",
    },
    {
      id: "pkg-2",
      name: "South Coast Escape",
      duration: "2 Days / 1 Night",
      destinations: "Galle, Bentota, Hikkaduwa",
      startingPrice: "LKR 36,500",
      itinerary: "Day 1: Bentota river safari and beach sunset. Day 2: Galle fort walk and Hikkaduwa marine stop.",
    },
    {
      id: "pkg-3",
      name: "Badulla Mountain Retreat",
      duration: "2 Days / 1 Night",
      destinations: "Badulla, Ella, Demodara",
      startingPrice: "LKR 39,500",
      itinerary: "Day 1: Scenic drive to Badulla with waterfall stops and Ella sightseeing. Day 2: Nine Arches Bridge, Demodara Loop, and return journey.",
    },
  ],
  rates: [
    { id: "rate-1", vehicleType: "Car", airportRate: "LKR 7,500", dayRate100km: "LKR 11,500", extraKmRate: "LKR 120" },
    { id: "rate-2", vehicleType: "Van", airportRate: "LKR 10,500", dayRate100km: "LKR 15,500", extraKmRate: "LKR 150" },
    { id: "rate-3", vehicleType: "Mini Bus", airportRate: "LKR 16,000", dayRate100km: "LKR 22,500", extraKmRate: "LKR 220" },
    { id: "rate-4", vehicleType: "Luxury", airportRate: "LKR 20,500", dayRate100km: "LKR 28,500", extraKmRate: "LKR 280" },
  ],
  testimonials: [
    {
      id: "ts-1",
      customerName: "Nimali",
      location: "Colombo",
      message: "Perfect airport pickup and very professional service.",
    },
    {
      id: "ts-2",
      customerName: "Asanka",
      location: "Kandy",
      message: "Great local tour coordination. Vehicle was clean and comfortable.",
    },
  ],
  inquiries: [],
};

const notifyStoreChanged = () => {
  window.dispatchEvent(new Event("bp-admin-store-updated"));
};

const mergePackages = (packages: TourPackage[] | undefined) => {
  const currentPackages = packages ?? [];
  const missingPackages = defaultData.packages.filter(
    (defaultPackage) => !currentPackages.some((pkg) => pkg.id === defaultPackage.id),
  );

  return [...currentPackages, ...missingPackages];
};

export const readAdminData = (): AdminData => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData));
      return defaultData;
    }

    const parsed = JSON.parse(raw) as Partial<AdminData>;
    const packages = mergePackages(parsed.packages);

    if (!parsed.packages || packages.length !== parsed.packages.length) {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          ...defaultData,
          ...parsed,
          packages,
        }),
      );
    }

    return {
      packages,
      rates: parsed.rates ?? defaultData.rates,
      testimonials: parsed.testimonials ?? defaultData.testimonials,
      inquiries: parsed.inquiries ?? defaultData.inquiries,
    };
  } catch {
    return defaultData;
  }
};

export const writeAdminData = (nextData: AdminData) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(nextData));
  notifyStoreChanged();
};

export const updateAdminData = (updater: (current: AdminData) => AdminData) => {
  const current = readAdminData();
  const next = updater(current);
  writeAdminData(next);
};

export const subscribeAdminData = (callback: () => void) => {
  const handler = () => callback();
  window.addEventListener("bp-admin-store-updated", handler);
  return () => window.removeEventListener("bp-admin-store-updated", handler);
};

export const createId = (prefix: string) => `${prefix}-${Math.random().toString(36).slice(2, 9)}`;

export const serviceAreaSuggestions = [
  "Colombo",
  "Negombo",
  "Bandaranaike International Airport",
  "Kandy",
  "Galle",
  "Bentota",
];

export const phoneNumbers = ["070 729 0144", "077 173 9144"];
export const phoneNumbersIntl = ["94707290144", "94771739144"];
export const businessEmail = "bandarapremathilaka.tours@gmail.com";
