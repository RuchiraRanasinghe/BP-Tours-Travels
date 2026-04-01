import logo from "@/assets/bp-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="BP Tours" className="w-12 h-12 rounded-lg object-cover" />
            <div>
              <p className="font-display font-bold text-background text-lg">BP Tours & Travels</p>
              <p className="text-background/60 text-sm">Bandara Premathilaka</p>
            </div>
          </div>

          <div className="text-center md:text-right text-background/60 text-sm space-y-1">
            <p>📞 070 739 9144 &nbsp;|&nbsp; 💬 077 139 9144</p>
            <p>© {new Date().getFullYear()} BP Tours & Travels. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
