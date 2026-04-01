import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/bp-logo.jpg";

const links = [
  { label: "Services", href: "/services" },
  { label: "Booking", href: "/booking" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-xl shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container px-6 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="BP Tours" className="w-9 h-9 rounded-lg object-cover" />
          <span className="font-display font-bold text-lg text-foreground tracking-tight">
            BP Tours
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className={`text-sm font-medium transition-colors ${
                location.pathname === l.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/booking"
            className="bg-foreground text-background font-medium px-5 py-2.5 rounded-full text-sm hover:bg-foreground/90 transition-colors"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 pb-6 animate-fade-in">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              onClick={() => setOpen(false)}
              className="block py-4 text-foreground font-medium border-b border-border last:border-0 text-sm"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/booking"
            onClick={() => setOpen(false)}
            className="block mt-4 text-center bg-foreground text-background font-medium py-3 rounded-full text-sm"
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
