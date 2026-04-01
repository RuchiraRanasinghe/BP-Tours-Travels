import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/bp-logo.jpg";

const links = [
  { label: "Services", href: "#services" },
  { label: "Fleet", href: "#fleet" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="BP Tours" className="w-10 h-10 rounded-lg object-cover" />
          <span className="font-display font-bold text-lg text-foreground">BP Tours</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-muted-foreground hover:text-foreground font-medium transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#booking" className="bg-gradient-gold text-primary-foreground font-semibold px-5 py-2.5 rounded-xl shadow-gold hover:scale-105 transition-transform text-sm">
            Book Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-foreground font-medium border-b border-border last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a href="#booking" onClick={() => setOpen(false)} className="block mt-4 text-center bg-gradient-gold text-primary-foreground font-semibold py-3 rounded-xl shadow-gold">
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
