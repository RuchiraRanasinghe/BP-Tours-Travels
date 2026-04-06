import { useState, useEffect } from "react";
import { Menu, X, Car, LogIn } from "lucide-react";
import NavbarMegaMenu from "@/components/MegaMenu";

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
      className="fixed top-3 left-0 right-0 z-50"
    >
      <div
        className="container flex h-16 items-center gap-4 px-6 md:gap-8"
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

        {/* Desktop mega menu */}
        <div className="hidden md:flex flex-1 items-center justify-center">
          <NavbarMegaMenu scrolled={scrolled} />
        </div>

        {/* Right-aligned CTAs */}
        <div className="hidden md:flex items-center flex-shrink-0 gap-3">
          <a
            href="#login"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
              scrolled
                ? "border-border hover:bg-muted/50 text-foreground"
                : "border-white/30 hover:bg-white/10 text-primary-foreground"
            }`}
          >
            <LogIn className="w-4 h-4" />
            <span className="text-sm font-semibold">Login</span>
          </a>
          <a
            href="#booking-now"
            className="inline-flex items-center justify-center rounded-full bg-gradient-blue px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-blue transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
          >
            Ride Now
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
          {/* Booking Section */}
          <div className="border-b border-border/50 py-4">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Booking</p>
            <a
              href="#booking-now"
              onClick={() => setOpen(false)}
              className="block py-2.5 text-foreground font-medium hover:text-primary transition-colors"
            >
              🚗 Ride Now (Instant)
            </a>
            <a
              href="#booking-schedule"
              onClick={() => setOpen(false)}
              className="block py-2.5 text-foreground font-medium hover:text-primary transition-colors"
            >
              📅 Schedule Ride
            </a>
            <a
              href="#airport-transfer"
              onClick={() => setOpen(false)}
              className="block py-2.5 text-foreground font-medium hover:text-primary transition-colors"
            >
              ✈️ Airport Transfer
            </a>
            <a
              href="#multi-stop"
              onClick={() => setOpen(false)}
              className="block py-2.5 text-foreground font-medium hover:text-primary transition-colors"
            >
              🗺️ Multi-Stop/Round Trip
            </a>
          </div>

          {/* Services Section */}
          <div className="border-b border-border/50 py-4">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Services</p>
            <a
              href="#fare-estimator"
              onClick={() => setOpen(false)}
              className="block py-2.5 text-foreground font-medium hover:text-primary transition-colors"
            >
              💰 Fare Estimator
            </a>
            <a
              href="#fleet"
              onClick={() => setOpen(false)}
              className="block py-2.5 text-foreground font-medium hover:text-primary transition-colors"
            >
              🚙 Our Fleet
            </a>
            <a
              href="#track-ride"
              onClick={() => setOpen(false)}
              className="block py-2.5 text-foreground font-medium hover:text-primary transition-colors"
            >
              📍 Track Ride
            </a>
          </div>

          {/* Account & Support Section */}
          <div className="border-b border-border/50 py-4">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Account</p>
            <a
              href="#my-rides"
              onClick={() => setOpen(false)}
              className="block py-2.5 text-foreground font-medium hover:text-primary transition-colors"
            >
              📋 My Rides
            </a>
            <a
              href="#saved-places"
              onClick={() => setOpen(false)}
              className="block py-2.5 text-foreground font-medium hover:text-primary transition-colors"
            >
              ⭐ Saved Places
            </a>
            <a
              href="#corporate"
              onClick={() => setOpen(false)}
              className="block py-2.5 text-foreground font-medium hover:text-primary transition-colors"
            >
              💼 Corporate Booking
            </a>
          </div>

          {/* Support & More Section */}
          <div className="border-b border-border/50 py-4">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Support</p>
            <a
              href="#support"
              onClick={() => setOpen(false)}
              className="block py-2.5 text-foreground font-medium hover:text-primary transition-colors"
            >
              🆘 24/7 Support
            </a>
            <a
              href="#safety"
              onClick={() => setOpen(false)}
              className="block py-2.5 text-foreground font-medium hover:text-primary transition-colors"
            >
              🛡️ Safety Info
            </a>
            <a
              href="#promotions"
              onClick={() => setOpen(false)}
              className="block py-2.5 text-foreground font-medium hover:text-primary transition-colors"
            >
              🎁 Offers & Loyalty
            </a>
            <a
              href="#driver"
              onClick={() => setOpen(false)}
              className="block py-2.5 text-foreground font-medium hover:text-primary transition-colors"
            >
              🚗 Become a Driver
            </a>
          </div>

          {/* Auth Section */}
          <div className="flex items-center gap-3 mt-4">
            <a
              href="#login"
              onClick={() => setOpen(false)}
              className="flex-1 text-center inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-primary text-primary font-semibold hover:bg-primary/10 transition-colors"
            >
              <LogIn className="w-4 h-4" />
              Login
            </a>
            <a
              href="#booking-now"
              onClick={() => setOpen(false)}
              className="flex-1 text-center bg-gradient-blue text-primary-foreground font-semibold py-2.5 rounded-full shadow-blue transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
