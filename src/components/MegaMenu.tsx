import { useState } from "react";
import { ChevronDown, MapPin, Users, Phone, MessageCircle, Car, Plane, Map, Zap } from "lucide-react";

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
                            <p className="text-xs text-muted-foreground group-hover/item:text-muted-foreground/80 mt-0.5">
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
    services: [
      {
        title: "Core Services",
        items: [
          {
            label: "Airport Pickup",
            href: "#services",
            description: "Flight tracking & timely arrival",
            icon: <Plane className="w-4 h-4" />,
          },
          {
            label: "Airport Drop",
            href: "#services",
            description: "Luggage assistance & comfort",
            icon: <MapPin className="w-4 h-4" />,
          },
          {
            label: "Local Rides",
            href: "#services",
            description: "City tours & short transfers",
            icon: <Car className="w-4 h-4" />,
          },
          {
            label: "Island Tours",
            href: "#services",
            description: "Multi-day sightseeing packages",
            icon: <Map className="w-4 h-4" />,
          },
        ],
      },
      {
        title: "Special Services",
        items: [
          {
            label: "Corporate Travel",
            href: "#services",
            description: "Business & team transfers",
            icon: <Users className="w-4 h-4" />,
          },
          {
            label: "24/7 Availability",
            href: "#services",
            description: "Round-the-clock operations",
            icon: <Zap className="w-4 h-4" />,
          },
        ],
      },
    ],
    fleet: [
      {
        title: "Vehicle Types",
        items: [
          {
            label: "Economy Cars",
            href: "#fleet",
            description: "Fuel-efficient & comfortable",
            icon: <Car className="w-4 h-4" />,
          },
          {
            label: "Luxury Vehicles",
            href: "#fleet",
            description: "Premium travel experience",
            icon: <Car className="w-4 h-4" />,
          },
          {
            label: "Passenger Vans",
            href: "#fleet",
            description: "Groups & families",
            icon: <Car className="w-4 h-4" />,
          },
          {
            label: "Tour Coaches",
            href: "#fleet",
            description: "Large group tours",
            icon: <Car className="w-4 h-4" />,
          },
        ],
      },
      {
        title: "What You Get",
        items: [
          {
            label: "Professional Drivers",
            href: "#fleet",
            description: "Trained & experienced",
            icon: <Users className="w-4 h-4" />,
          },
          {
            label: "Well-Maintained",
            href: "#fleet",
            description: "Regular servicing & checks",
            icon: <Zap className="w-4 h-4" />,
          },
        ],
      },
    ],
    about: [
      {
        title: "Company",
        items: [
          {
            label: "Our Story",
            href: "#about",
            description: "Founded by Bandara Premathilaka",
            icon: <MapPin className="w-4 h-4" />,
          },
          {
            label: "Our Team",
            href: "#about",
            description: "Meet our dedicated staff",
            icon: <Users className="w-4 h-4" />,
          },
          {
            label: "Why Choose Us",
            href: "#about",
            description: "Quality & reliability",
            icon: <Car className="w-4 h-4" />,
          },
          {
            label: "Testimonials",
            href: "#about",
            description: "What our guests say",
            icon: <Users className="w-4 h-4" />,
          },
        ],
      },
      {
        title: "Resources",
        items: [
          {
            label: "Blog & Updates",
            href: "#about",
            description: "Travel tips & news",
            icon: <Map className="w-4 h-4" />,
          },
          {
            label: "FAQs",
            href: "#about",
            description: "Common questions answered",
            icon: <MessageCircle className="w-4 h-4" />,
          },
        ],
      },
    ],
    contact: [
      {
        title: "Get in Touch",
        items: [
          {
            label: "Phone",
            href: "tel:+94771399144",
            description: "+94 771 399 144",
            icon: <Phone className="w-4 h-4" />,
          },
          {
            label: "WhatsApp",
            href: "https://wa.me/94771399144",
            description: "Quick messaging support",
            icon: <MessageCircle className="w-4 h-4" />,
          },
          {
            label: "Email Support",
            href: "mailto:info@bptours.lk",
            description: "info@bptours.lk",
            icon: <MapPin className="w-4 h-4" />,
          },
          {
            label: "Contact Form",
            href: "#contact",
            description: "Send us a message",
            icon: <MessageCircle className="w-4 h-4" />,
          },
        ],
      },
      {
        title: "Follow Us",
        items: [
          {
            label: "Social Media",
            href: "#contact",
            description: "Connect on social",
            icon: <Users className="w-4 h-4" />,
          },
          {
            label: "Booking Status",
            href: "#contact",
            description: "Track your reservation",
            icon: <Car className="w-4 h-4" />,
          },
        ],
      },
    ],
  };

  return (
    <div className="hidden md:flex items-center justify-center gap-0">
      <div
        className={`flex items-center justify-center gap-0 rounded-full px-1 py-1.5 transition-all ${
          scrolled
            ? "bg-card/90 backdrop-blur-xl ring-1 ring-border shadow-card"
            : "bg-black/20 backdrop-blur-md ring-1 ring-white/10"
        }`}
      >
        <MegaMenuItem label="Services" sections={menuStructure.services} scrolled={scrolled} />
        <MegaMenuItem label="Fleet" sections={menuStructure.fleet} scrolled={scrolled} />
        <MegaMenuItem label="About" sections={menuStructure.about} scrolled={scrolled} />
        <MegaMenuItem label="Contact" sections={menuStructure.contact} scrolled={scrolled} />
      </div>
      <a
        href="#booking"
        className="bg-gradient-gold text-primary-foreground font-semibold px-6 py-2.5 rounded-lg shadow-gold hover:shadow-lg hover:scale-105 transition-all text-sm whitespace-nowrap ml-4"
      >
        Book Now
      </a>
    </div>
  );
};

export default NavbarMegaMenu;
