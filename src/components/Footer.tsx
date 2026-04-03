import { Car } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-14">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-blue flex items-center justify-center">
              <Car className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <p className="font-display font-bold text-background text-lg">BP Tours & Travels</p>
              <p className="text-background/50 text-sm">Bandara Premathilaka</p>
            </div>
          </div>

          <div className="text-center md:text-right text-background/50 text-sm space-y-1">
            <p>📞 070 739 9144 &nbsp;|&nbsp; 💬 077 139 9144</p>
            <p>© {new Date().getFullYear()} BP Tours & Travels. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
