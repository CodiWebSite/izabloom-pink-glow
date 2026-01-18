import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { Button } from "./ui/button";

const menuItems = [
  { name: "Acasă", href: "#acasa" },
  { name: "Lumânări Mici", href: "#lumanari-mici" },
  { name: "Lumânări Mari", href: "#lumanari-mari" },
  { name: "Lumânări Delicioase", href: "#lumanari-delicioase" },
  { name: "Lumânări de Servit", href: "#lumanari-servit" },
  { name: "Mărturii Nuntă", href: "#marturii-nunta" },
  { name: "Mărturii Botez", href: "#marturii-botez" },
  { name: "Cadouri Speciale", href: "#cadouri" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {menuItems.slice(0, 4).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
