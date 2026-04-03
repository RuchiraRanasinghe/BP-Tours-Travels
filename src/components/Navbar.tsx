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
      className="fixed top-3 left-0 right-0 z-50 px-3 md:px-6"
    >
      <div
        className={`mx-auto flex h-16 max-w-7xl items-center gap-4 rounded-[1.5rem] border transition-all duration-300 md:gap-8 md:rounded-full md:px-6 ${
          scrolled
            ? "border-border/70 bg-background/92 shadow-[0_18px_50px_rgba(15,23,42,0.14)] backdrop-blur-xl"
            : "border-white/20 bg-background/72 shadow-[0_18px_50px_rgba(15,23,42,0.1)] backdrop-blur-xl"
        }`}
      >
        <a href="#" className="flex items-center gap-2.5 flex-shrink-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-blue flex items-center justify-center shadow-blue">
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

        {/* Desktop center navigation */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`relative font-medium transition-colors text-sm px-1 py-2 after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:rounded-full after:bg-gradient-blue after:transition-transform hover:after:scale-x-100 ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-primary-foreground/75 hover:text-primary-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right-aligned CTA */}
        <div className="hidden md:flex items-center flex-shrink-0">
          <a
            href="#booking"
            className="inline-flex items-center justify-center rounded-full bg-gradient-blue px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-blue transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
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
        <div className="md:hidden mt-3 rounded-[1.5rem] border border-border bg-background/96 px-6 pb-6 shadow-card backdrop-blur-xl">
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
            className="block mt-4 text-center bg-gradient-blue text-primary-foreground font-semibold py-3.5 rounded-full shadow-blue transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
