import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="py-12 border-t" style={{ background: "hsl(340 40% 97%)", borderColor: "hsl(340 50% 92%)" }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/">
            <Logo />
          </Link>

          <nav className="flex flex-wrap justify-center gap-6">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Acasă
            </Link>
            <Link to="/lumanari-mici" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Lumânări
            </Link>
            <Link to="/marturii-nunta" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Mărturii
            </Link>
            <Link to="/cadouri-speciale" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cadouri
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <p className="text-sm text-muted-foreground">
            © 2024 Izabloom. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
