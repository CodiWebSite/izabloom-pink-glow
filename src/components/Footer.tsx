import { Link } from "react-router-dom";
import Logo from "./Logo";
import CrescentMoon from "./CrescentMoon";

const Footer = () => {
  return (
    <footer className="relative py-16 border-t border-border/50">
      <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1 space-y-4">
            <Link to="/">
              <Logo />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Lumânări artizanale create cu dragoste pentru cele mai speciale momente.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
              <CrescentMoon size={14} className="text-primary" />
              Lumânări
            </h4>
            <nav className="flex flex-col gap-2.5">
              <Link to="/lumanari-mici" className="text-sm text-muted-foreground hover:text-primary transition-colors">Lumânări Mici</Link>
              <Link to="/lumanari-mari" className="text-sm text-muted-foreground hover:text-primary transition-colors">Lumânări Mari</Link>
              <Link to="/lumanari-delicioase" className="text-sm text-muted-foreground hover:text-primary transition-colors">Lumânări Delicioase</Link>
              <Link to="/lumanari-servit" className="text-sm text-muted-foreground hover:text-primary transition-colors">Lumânări de Servit</Link>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
              <CrescentMoon size={14} className="text-primary" />
              Mărturii & Cadouri
            </h4>
            <nav className="flex flex-col gap-2.5">
              <Link to="/marturii-nunta" className="text-sm text-muted-foreground hover:text-primary transition-colors">Mărturii Nuntă</Link>
              <Link to="/marturii-botez" className="text-sm text-muted-foreground hover:text-primary transition-colors">Mărturii Botez</Link>
              <Link to="/cadouri-speciale" className="text-sm text-muted-foreground hover:text-primary transition-colors">Cadouri Speciale</Link>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
              <CrescentMoon size={14} className="text-primary" />
              Navigare
            </h4>
            <nav className="flex flex-col gap-2.5">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Acasă</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
              <Link to="/auth" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contul Meu</Link>
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Izabloom. Toate drepturile rezervate.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CrescentMoon size={14} className="text-primary" />
            <span>Făcut cu dragoste în România</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
