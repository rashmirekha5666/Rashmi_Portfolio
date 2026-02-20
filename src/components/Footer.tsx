import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8 px-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>© 2026 Rashmi Rekha Patra. All rights reserved.</p>
      <div className="flex items-center gap-6">
        <a href="#home" className="hover:text-foreground transition-colors">Home</a>
        <a href="#about" className="hover:text-foreground transition-colors">About</a>
        <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
        <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
      </div>
      <p className="flex items-center gap-1">
        Made with <Heart size={14} className="text-primary" /> by Rashmi
      </p>
    </div>
  </footer>
);

export default Footer;
