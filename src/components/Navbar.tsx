import { useState, useEffect } from "react";
import { Menu, X, Car } from "lucide-react";

const links = [
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background border-b border-border shadow-card"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-gold flex items-center justify-center">
            <Car className="w-5 h-5 text-primary-foreground" />
          </div>
          <span
            className={`font-display font-bold text-lg tracking-tight transition-colors ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            BP Tours
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`font-medium transition-colors text-sm ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#booking"
            className="bg-gradient-gold text-primary-foreground font-semibold px-5 py-2.5 rounded-full shadow-gold hover:scale-105 transition-transform text-sm"
          >
            Book Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-6 shadow-card">
          {links.map((l) => (
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
            className="block mt-4 text-center bg-gradient-gold text-primary-foreground font-semibold py-3.5 rounded-full shadow-gold"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
