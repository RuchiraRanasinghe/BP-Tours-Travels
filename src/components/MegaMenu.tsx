import { useState } from "react";
import {
  ChevronDown,
  MapPin,
  Users,
  Phone,
  MessageCircle,
  Car,
  Plane,
  Map,
  Zap,
  Mail,
  Clock,
  DollarSign,
  Navigation,
  Briefcase,
  Shield,
  User,
  Gift,
  LogIn,
  Share2,
} from "lucide-react";

interface MenuSection {
  title: string;
  items: Array<{
    label: string;
    href: string;
    description?: string;
    icon?: React.ReactNode;
  }>;
}

interface MegaMenuItemProps {
  label: string;
  sections: MenuSection[];
  scrolled: boolean;
}

const MegaMenuItem = ({ label, sections, scrolled }: MegaMenuItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={`flex items-center gap-1.5 rounded-lg px-4 py-2 font-medium text-sm whitespace-nowrap transition-all ${
          scrolled
            ? "text-muted-foreground hover:text-foreground hover:bg-muted/70"
            : "text-primary-foreground/75 hover:text-primary-foreground hover:bg-white/15"
        } ${open ? (scrolled ? "bg-muted/70 text-foreground" : "bg-white/15 text-primary-foreground") : ""}`}
      >
        {label}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Mega Menu Dropdown */}
      <div
        className={`absolute top-full left-0 mt-0 w-screen max-w-6xl translate-x-[-50%] left-1/2 transition-all duration-200 pointer-events-none ${
          open
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible translate-y-2"
        }`}
      >
        <div
          className={`mt-2 rounded-xl shadow-lg ring-1 transition-all ${
            scrolled
              ? "bg-background/95 backdrop-blur-xl ring-border/70 shadow-card"
              : "bg-background/90 backdrop-blur-xl ring-white/20 shadow-card"
          } pointer-events-auto`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
            {sections.map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-4 text-foreground/70">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="group/item flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-muted/50"
                      >
                        {item.icon && (
                          <span className="mt-0.5 text-primary group-hover/item:text-primary/80 transition-colors">
                            {item.icon}
                          </span>
                        )}
                        <div className="flex-1">
                          <p className="font-medium text-sm text-foreground group-hover/item:text-primary transition-colors">
                            {item.label}
                          </p>
                          {item.description && (
                            <p className="text-xs text-muted-foreground group-hover/item:text-muted-foreground/80 mt-0.5 break-all leading-relaxed">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface NavbarMegaMenuProps {
  scrolled: boolean;
}

const NavbarMegaMenu = ({ scrolled }: NavbarMegaMenuProps) => {
  const menuStructure = {
    // 1. Airport Transfer - PRIMARY FOCUS
    airport: [
      {
        title: "Airport Services",
        items: [
          {
            label: "Airport Pickup",
            href: "#airport-pickup",
            description: "Flight tracking & timely arrival",
            icon: <Plane className="w-4 h-4" />,
          },
          {
            label: "Airport Drop",
            href: "#airport-drop",
            description: "Luggage assistance & comfort",
            icon: <MapPin className="w-4 h-4" />,
          },
          {
            label: "Meet & Greet",
            href: "#meet-greet",
            description: "Personal greeting service",
            icon: <Users className="w-4 h-4" />,
          },
          {
            label: "Flight-Based Booking",
            href: "#flight-based-booking",
            description: "Sync with your flight time",
            icon: <Clock className="w-4 h-4" />,
          },
        ],
      },
    ],

    // 2. Book Ride - Local Transport
    booking: [
      {
        title: "Instant Booking",
        items: [
          {
            label: "Ride Now",
            href: "#booking-now",
            description: "Instant pickup - book immediately",
            icon: <Zap className="w-4 h-4" />,
          },
          {
            label: "Request Pickup",
            href: "#booking-now",
            description: "Get a ride right away",
            icon: <Car className="w-4 h-4" />,
          },
        ],
      },
      {
        title: "Scheduled Booking",
        items: [
          {
            label: "Schedule a Ride",
            href: "#booking-schedule",
            description: "Book for a future time",
            icon: <Clock className="w-4 h-4" />,
          },
          {
            label: "Local Transport",
            href: "#services",
            description: "City transfers & tours",
            icon: <Navigation className="w-4 h-4" />,
          },
        ],
      },
      {
        title: "Multi-Stop Options",
        items: [
          {
            label: "Round Trip",
            href: "#round-trip",
            description: "Return journey booking",
            icon: <Navigation className="w-4 h-4" />,
          },
          {
            label: "Add Stop",
            href: "#add-stop",
            description: "Multiple pickups & drops",
            icon: <MapPin className="w-4 h-4" />,
          },
        ],
      },
    ],

    // 3. Pricing
    pricing: [
      {
        title: "Fare & Pricing",
        items: [
          {
            label: "Fare Estimator",
            href: "#fare-estimator",
            description: "Check trip costs before booking",
            icon: <DollarSign className="w-4 h-4" />,
          },
          {
            label: "Price Calculator",
            href: "#price-calculator",
            description: "Transparent pricing",
            icon: <DollarSign className="w-4 h-4" />,
          },
        ],
      },
    ],

    // 4. Vehicles
    vehicles: [
      {
        title: "Choose Your Ride",
        items: [
          {
            label: "Sedan / SUV / Hatchback",
            href: "#fleet",
            description: "Sedan, SUV, Hatchback",
            icon: <Car className="w-4 h-4" />,
          },
          {
            label: "Luggage Capacity",
            href: "#luggage-capacity",
            description: "Vehicle space & amenities",
            icon: <Zap className="w-4 h-4" />,
          },
          {
            label: "Live Tracking",
            href: "#track-ride",
            description: "Real-time driver location",
            icon: <Navigation className="w-4 h-4" />,
          },
          {
            label: "Share Trip Progress",
            href: "#track-ride",
            description: "Send tracking link to others",
            icon: <Share2 className="w-4 h-4" />,
          },
        ],
      },
    ],

    // 5. Support
    support: [
      {
        title: "Safety & Support",
        items: [
          {
            label: "24/7 Support",
            href: "#support",
            description: "Get help anytime",
            icon: <MessageCircle className="w-4 h-4" />,
          },
          {
            label: "Emergency Contact",
            href: "#emergency-contact",
            description: "Emergency assistance",
            icon: <Phone className="w-4 h-4" />,
          },
          {
            label: "Ride Safety",
            href: "#support",
            description: "Safety features & info",
            icon: <Shield className="w-4 h-4" />,
          },
        ],
      },
      {
        title: "Company",
        items: [
          {
            label: "Contact Us",
            href: "#contact",
            description: "Get in touch with us",
            icon: <Phone className="w-4 h-4" />,
          },
          {
            label: "FAQs",
            href: "#faq",
            description: "Common questions answered",
            icon: <MessageCircle className="w-4 h-4" />,
          },
        ],
      },
    ],

    // 6. Account
    account: [
      {
        title: "My Account",
        items: [
          {
            label: "My Rides",
            href: "#my-rides",
            description: "View ride history",
            icon: <Car className="w-4 h-4" />,
          },
          {
            label: "Saved Places",
            href: "#saved-places",
            description: "Home, Work, Airports, Hotels",
            icon: <MapPin className="w-4 h-4" />,
          },
          {
            label: "Payment Methods",
            href: "#payment-methods",
            description: "Manage cards & wallets",
            icon: <DollarSign className="w-4 h-4" />,
          },
        ],
      },
      {
        title: "Loyalty",
        items: [
          {
            label: "Refer & Earn",
            href: "#referral",
            description: "Get rewards for referrals",
            icon: <Gift className="w-4 h-4" />,
          },
        ],
      },
    ],
  };

  return (
    <div
      className={`inline-flex items-center rounded-full border px-2 py-1.5 backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? "border-border/80 bg-background/90 shadow-[0_10px_30px_rgba(15,23,42,0.12)]"
          : "border-white/25 bg-background/20 shadow-[0_10px_30px_rgba(15,23,42,0.1)]"
      }`}
    >
      <MegaMenuItem label="Airport" sections={menuStructure.airport} scrolled={scrolled} />
      <MegaMenuItem label="Book Ride" sections={menuStructure.booking} scrolled={scrolled} />
      <MegaMenuItem label="Pricing" sections={menuStructure.pricing} scrolled={scrolled} />
      <MegaMenuItem label="Vehicles" sections={menuStructure.vehicles} scrolled={scrolled} />
      <MegaMenuItem label="Support" sections={menuStructure.support} scrolled={scrolled} />
      <MegaMenuItem label="Account" sections={menuStructure.account} scrolled={scrolled} />
    </div>
  );
};

export default NavbarMegaMenu;
