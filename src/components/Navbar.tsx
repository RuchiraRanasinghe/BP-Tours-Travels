import { useState, useEffect } from "react";
import { Menu, X, Car } from "lucide-react";
import NavbarMegaMenu from "./MegaMenu";

const mobileLinks = [
  { label: "Services", href: "#services" },
  { label: "Fleet", href: "#fleet" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/70 shadow-card"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="flex h-16 w-full items-center px-4 py-4 sm:px-6 lg:px-10">
        {/* Left - Logo */}
        <a
          href="#"
          className={`flex items-center gap-3 rounded-full px-3.5 py-2 transition-all flex-shrink-0 ${
            scrolled
              ? "bg-card/90 text-foreground ring-1 ring-border shadow-card"
              : "bg-black/20 text-primary-foreground ring-1 ring-white/10 backdrop-blur-md"
          }`}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-gold shadow-gold">
            <Car className="w-5 h-5 text-primary-foreground" />
          </div>
          <span
            className={`font-display font-bold text-lg tracking-tight transition-colors hidden sm:inline ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            BP Tours
          </span>
        </a>

        {/* Center - Desktop Navigation Menu */}
        <div className="hidden md:flex flex-1 items-center justify-center">
          <NavbarMegaMenu scrolled={scrolled} />
        </div>

        {/* Right - Contact & Book Button */}
        <div className="hidden md:flex items-center gap-4 ml-auto flex-shrink-0">
          <a
            href="#contact"
            className={`text-sm font-medium transition-colors ${
              scrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-primary-foreground/75 hover:text-primary-foreground"
            }`}
          >
            Contact
          </a>
          <a
            href="#booking"
            className="bg-gradient-gold text-primary-foreground font-semibold px-6 py-2.5 rounded-full text-sm shadow-gold hover:scale-105 active:scale-95 transition-transform duration-300"
          >
            Book Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden ml-auto transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden w-full bg-background/95 backdrop-blur-xl border-b border-border px-4 sm:px-6 pb-6 shadow-card">
          {mobileLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3.5 text-foreground font-medium border-b border-border/50 last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setOpen(false)}
            className="block mt-4 text-center bg-gradient-gold text-primary-foreground font-semibold py-3.5 rounded-full shadow-gold hover:scale-105 active:scale-95 transition-transform duration-300"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
