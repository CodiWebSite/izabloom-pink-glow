import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo />
          
          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#acasa" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Acasă
            </a>
            <a href="#lumanari-mici" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Lumânări
            </a>
            <a href="#marturii-nunta" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Mărturii
            </a>
            <a href="#cadouri" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cadouri
            </a>
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
