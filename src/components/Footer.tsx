import { Link } from "react-router-dom";
import logo from "@/assets/bp-logo.jpg";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16 bg-background">
      <div className="container px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="BP Tours" className="w-9 h-9 rounded-lg object-cover" />
              <span className="font-display font-bold text-lg text-foreground">BP Tours</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Premium travel services across Sri Lanka. Airport transfers, local rides, and curated tours.
            </p>
          </div>

          <div>
            <p className="font-semibold text-foreground text-sm mb-4">Quick Links</p>
            <div className="space-y-3">
              {[
                { label: "Services", to: "/services" },
                { label: "Book a Ride", to: "/booking" },
                { label: "Contact", to: "/contact" },
              ].map((l) => (
                <Link key={l.label} to={l.to} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold text-foreground text-sm mb-4">Contact</p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📞 070 739 9144</p>
              <p>💬 077 139 9144</p>
              <p>📍 Sri Lanka</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} BP Tours & Travels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
