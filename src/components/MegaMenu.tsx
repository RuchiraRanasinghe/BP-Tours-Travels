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
    // 1. Quick Booking & 2. Scheduled Booking
    booking: [
      {
        title: "Quick Booking",
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
            label: "Plan Trip",
            href: "#booking-schedule",
            description: "Arrange rides in advance",
            icon: <Map className="w-4 h-4" />,
          },
        ],
      },
      {
        title: "Multi-Stop Options",
        items: [
          {
            label: "Round Trip",
            href: "#multi-stop",
            description: "Return journey booking",
            icon: <Navigation className="w-4 h-4" />,
          },
          {
            label: "Add Stop",
            href: "#multi-stop",
            description: "Multiple pickups & drops",
            icon: <MapPin className="w-4 h-4" />,
          },
        ],
      },
    ],

    // 3. Airport Transfer
    airport: [
      {
        title: "Airport Services",
        items: [
          {
            label: "Airport Pickup",
            href: "#airport-transfer",
            description: "Flight tracking & timely arrival",
            icon: <Plane className="w-4 h-4" />,
          },
          {
            label: "Airport Drop",
            href: "#airport-transfer",
            description: "Luggage assistance & comfort",
            icon: <MapPin className="w-4 h-4" />,
          },
          {
            label: "Meet & Greet",
            href: "#airport-transfer",
            description: "Personal greeting service",
            icon: <Users className="w-4 h-4" />,
          },
          {
            label: "Flight-Based Booking",
            href: "#airport-transfer",
            description: "Sync with your flight time",
            icon: <Clock className="w-4 h-4" />,
          },
        ],
      },
    ],

    // 5. Pricing & Fare & 6. Ride Type / Vehicle
    services: [
      {
        title: "Pricing & Fare",
        items: [
          {
            label: "Fare Estimator",
            href: "#fare-estimator",
            description: "Check trip costs before booking",
            icon: <DollarSign className="w-4 h-4" />,
          },
          {
            label: "Price Calculator",
            href: "#fare-estimator",
            description: "Transparent pricing",
            icon: <DollarSign className="w-4 h-4" />,
          },
          {
            label: "See Rates",
            href: "#rate-chart",
            description: "View all pricing options",
            icon: <Map className="w-4 h-4" />,
          },
        ],
      },
      {
        title: "Fleet & Vehicle Choice",
        items: [
          {
            label: "Our Vehicles",
            href: "#fleet",
            description: "See all available options",
            icon: <Car className="w-4 h-4" />,
          },
          {
            label: "Choose Ride Type",
            href: "#fleet",
            description: "Sedan, SUV, Hatchback, Bike",
            icon: <Car className="w-4 h-4" />,
          },
          {
            label: "Luggage Capacity",
            href: "#fleet",
            description: "Vehicle space & amenities",
            icon: <Zap className="w-4 h-4" />,
          },
        ],
      },
    ],

    // 7. Tracking & 4. More Services
    tracking: [
      {
        title: "Live Tracking",
        items: [
          {
            label: "Live Tracking",
            href: "#track-ride",
            description: "Real-time driver location",
            icon: <Navigation className="w-4 h-4" />,
          },
          {
            label: "Trip Status",
            href: "#track-ride",
            description: "Monitor your ride live",
            icon: <Zap className="w-4 h-4" />,
          },
          {
            label: "Share Ride Progress",
            href: "#track-ride",
            description: "Send tracking link to others",
            icon: <Share2 className="w-4 h-4" />,
          },
        ],
      },
      {
        title: "Tour & Transfer",
        items: [
          {
            label: "Island Tours",
            href: "#services",
            description: "Multi-day sightseeing",
            icon: <Map className="w-4 h-4" />,
          },
          {
            label: "Local Rides",
            href: "#services",
            description: "City transfers & tours",
            icon: <Navigation className="w-4 h-4" />,
          },
          {
            label: "24/7 Availability",
            href: "#services",
            description: "Round-the-clock service",
            icon: <Clock className="w-4 h-4" />,
          },
        ],
      },
    ],

    // 8. Corporate, 9. Safety, 10. Account
    account: [
      {
        title: "Corporate & Business",
        items: [
          {
            label: "Corporate Booking",
            href: "#corporate",
            description: "Business travel solutions",
            icon: <Briefcase className="w-4 h-4" />,
          },
          {
            label: "Business Account",
            href: "#corporate",
            description: "Team & company accounts",
            icon: <Users className="w-4 h-4" />,
          },
          {
            label: "Monthly Billing",
            href: "#corporate",
            description: "Invoice & payment plans",
            icon: <DollarSign className="w-4 h-4" />,
          },
        ],
      },
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
            description: "Home, Work, Favorites",
            icon: <MapPin className="w-4 h-4" />,
          },
          {
            label: "Payment Methods",
            href: "#account",
            description: "Manage cards & wallets",
            icon: <DollarSign className="w-4 h-4" />,
          },
        ],
      },
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
            label: "Ride Safety",
            href: "#safety",
            description: "Safety features & info",
            icon: <Shield className="w-4 h-4" />,
          },
          {
            label: "Emergency Contact",
            href: "#support",
            description: "Emergency assistance",
            icon: <Phone className="w-4 h-4" />,
          },
        ],
      },
    ],

    // 11. Driver/Partner & 12. Promotions
    more: [
      {
        title: "Opportunities",
        items: [
          {
            label: "Become a Driver",
            href: "#driver-signup",
            description: "Join our driver network",
            icon: <Car className="w-4 h-4" />,
          },
          {
            label: "Partner With Us",
            href: "#partner",
            description: "Business partnerships",
            icon: <Briefcase className="w-4 h-4" />,
          },
          {
            label: "Driver Login",
            href: "#driver-login",
            description: "Partner portal access",
            icon: <LogIn className="w-4 h-4" />,
          },
        ],
      },
      {
        title: "Rewards & Deals",
        items: [
          {
            label: "Offers",
            href: "#promotions",
            description: "Current deals & discounts",
            icon: <Gift className="w-4 h-4" />,
          },
          {
            label: "Refer & Earn",
            href: "#referral",
            description: "Get rewards for referrals",
            icon: <Users className="w-4 h-4" />,
          },
          {
            label: "Ride Pass",
            href: "#membership",
            description: "Monthly subscription plans",
            icon: <Gift className="w-4 h-4" />,
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
            label: "About Us",
            href: "#about",
            description: "Our story & team",
            icon: <Users className="w-4 h-4" />,
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
  };

  return (
    <div
      className={`inline-flex items-center rounded-full border px-2 py-1.5 backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? "border-border/80 bg-background/90 shadow-[0_10px_30px_rgba(15,23,42,0.12)]"
          : "border-white/25 bg-background/20 shadow-[0_10px_30px_rgba(15,23,42,0.1)]"
      }`}
    >
      <MegaMenuItem label="Book Ride" sections={menuStructure.booking} scrolled={scrolled} />
      <MegaMenuItem label="Airport" sections={menuStructure.airport} scrolled={scrolled} />
      <MegaMenuItem label="Services" sections={menuStructure.services} scrolled={scrolled} />
      <MegaMenuItem label="Track & Tour" sections={menuStructure.tracking} scrolled={scrolled} />
      <MegaMenuItem label="Account" sections={menuStructure.account} scrolled={scrolled} />
      <MegaMenuItem label="More" sections={menuStructure.more} scrolled={scrolled} />
    </div>
  );
};

export default NavbarMegaMenu;
