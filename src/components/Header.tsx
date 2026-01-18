import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ShoppingCart, Heart, User, LogOut } from "lucide-react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";

const lumanariItems = [
  { name: "Lumânări Mici", href: "/lumanari-mici" },
  { name: "Lumânări Mari", href: "/lumanari-mari" },
  { name: "Lumânări Delicioase", href: "/lumanari-delicioase" },
  { name: "Lumânări de Servit", href: "/lumanari-servit" },
];

const martiriiItems = [
  { name: "Mărturii Nuntă", href: "/marturii-nunta" },
  { name: "Mărturii Botez", href: "/marturii-botez" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { itemCount: cartCount } = useCart();
  const { itemCount: wishlistCount } = useWishlist();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/5 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link
              to="/"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Acasă
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Lumânări <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {lumanariItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link to={item.href}>{item.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Mărturii <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {martiriiItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link to={item.href}>{item.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/cadouri-speciale"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Cadouri Speciale
            </Link>

            <Link
              to="/contact"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* User Actions */}
          <div className="flex items-center gap-1">
            <Link to="/wishlist">
              <Button variant="ghost" size="icon" className="hidden sm:flex relative">
                <Heart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="hidden sm:flex relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
            {user ? (
              <Button variant="ghost" size="icon" className="hidden sm:flex" onClick={signOut}>
                <LogOut className="h-5 w-5" />
              </Button>
            ) : (
              <Link to="/auth">
                <Button variant="ghost" size="icon" className="hidden sm:flex">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            )}

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
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Acasă
              </Link>

              <div className="px-4 py-2 text-xs font-semibold text-primary uppercase tracking-wide">
                Lumânări
              </div>
              {lumanariItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="px-6 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="px-4 py-2 text-xs font-semibold text-primary uppercase tracking-wide">
                Mărturii
              </div>
              {martiriiItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="px-6 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <Link
                to="/cadouri-speciale"
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Cadouri Speciale
              </Link>

              <Link
                to="/contact"
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="border-t border-border/50 my-2" />

              <div className="flex gap-2 px-4">
                <Link to="/wishlist" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" size="sm">
                    <Heart className="h-4 w-4 mr-2" />
                    Favorite
                  </Button>
                </Link>
                <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" size="sm">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Coș
                  </Button>
                </Link>
                <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" size="sm">
                    <User className="h-4 w-4 mr-2" />
                    Cont
                  </Button>
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
