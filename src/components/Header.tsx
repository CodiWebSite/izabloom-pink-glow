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

const NavItem = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) => (
  <Link
    to={to}
    onClick={onClick}
    className="relative text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 group"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
  </Link>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { itemCount: cartCount } = useCart();
  const { itemCount: wishlistCount } = useWishlist();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300"
      style={{
        background: "hsla(var(--glass-bg))",
        backdropFilter: "blur(20px) saturate(1.8)",
        WebkitBackdropFilter: "blur(20px) saturate(1.8)",
        borderColor: "hsla(var(--glass-border))",
        boxShadow: "var(--glass-shadow)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavItem to="/">Acasă</NavItem>

            <DropdownMenu>
              <DropdownMenuTrigger className="relative flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 group outline-none">
                Lumânări <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="min-w-[200px] p-2 rounded-2xl border"
                style={{
                  background: "hsla(var(--glass-dropdown-bg))",
                  backdropFilter: "blur(24px) saturate(1.8)",
                  WebkitBackdropFilter: "blur(24px) saturate(1.8)",
                  borderColor: "hsla(var(--glass-dropdown-border))",
                  boxShadow: "0 12px 40px 0 hsla(333, 71%, 50%, 0.1), 0 0 0 1px hsla(340, 60%, 90%, 0.3)",
                }}
              >
                {lumanariItems.map((item) => (
                  <DropdownMenuItem
                    key={item.href}
                    asChild
                    className="cursor-pointer rounded-xl px-4 py-2.5 text-sm font-medium text-foreground transition-all duration-200 focus:bg-[hsla(var(--nav-hover))] hover:bg-[hsla(var(--nav-hover))] focus:text-primary"
                  >
                    <Link to={item.href}>{item.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="relative flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 group outline-none">
                Mărturii <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="min-w-[200px] p-2 rounded-2xl border"
                style={{
                  background: "hsla(var(--glass-dropdown-bg))",
                  backdropFilter: "blur(24px) saturate(1.8)",
                  WebkitBackdropFilter: "blur(24px) saturate(1.8)",
                  borderColor: "hsla(var(--glass-dropdown-border))",
                  boxShadow: "0 12px 40px 0 hsla(333, 71%, 50%, 0.1), 0 0 0 1px hsla(340, 60%, 90%, 0.3)",
                }}
              >
                {martiriiItems.map((item) => (
                  <DropdownMenuItem
                    key={item.href}
                    asChild
                    className="cursor-pointer rounded-xl px-4 py-2.5 text-sm font-medium text-foreground transition-all duration-200 focus:bg-[hsla(var(--nav-hover))] hover:bg-[hsla(var(--nav-hover))] focus:text-primary"
                  >
                    <Link to={item.href}>{item.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <NavItem to="/cadouri-speciale">Cadouri Speciale</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </nav>

          {/* User Actions */}
          <div className="flex items-center gap-1">
            <Link to="/wishlist">
              <Button variant="ghost" size="icon" className="hidden sm:flex relative rounded-full hover:bg-[hsla(var(--nav-hover))] transition-all duration-300">
                <Heart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center animate-in zoom-in-50">
                    {wishlistCount}
                  </span>
                )}
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="hidden sm:flex relative rounded-full hover:bg-[hsla(var(--nav-hover))] transition-all duration-300">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center animate-in zoom-in-50">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
            {user ? (
              <Button variant="ghost" size="icon" className="hidden sm:flex rounded-full hover:bg-[hsla(var(--nav-hover))] transition-all duration-300" onClick={signOut}>
                <LogOut className="h-5 w-5" />
              </Button>
            ) : (
              <Link to="/auth">
                <Button variant="ghost" size="icon" className="hidden sm:flex rounded-full hover:bg-[hsla(var(--nav-hover))] transition-all duration-300">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            className="lg:hidden py-4 border-t animate-in slide-in-from-top-2 duration-300"
            style={{ borderColor: "hsla(var(--glass-border))" }}
          >
            <div className="flex flex-col gap-1">
              <Link
                to="/"
                className="px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-[hsla(var(--nav-hover))] rounded-xl transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Acasă
              </Link>

              <div className="px-4 py-2 text-xs font-semibold text-primary uppercase tracking-wider">
                Lumânări
              </div>
              {lumanariItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="px-6 py-2.5 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-[hsla(var(--nav-hover))] rounded-xl transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="px-4 py-2 text-xs font-semibold text-primary uppercase tracking-wider">
                Mărturii
              </div>
              {martiriiItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="px-6 py-2.5 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-[hsla(var(--nav-hover))] rounded-xl transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <Link
                to="/cadouri-speciale"
                className="px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-[hsla(var(--nav-hover))] rounded-xl transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Cadouri Speciale
              </Link>

              <Link
                to="/contact"
                className="px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-[hsla(var(--nav-hover))] rounded-xl transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="border-t my-2" style={{ borderColor: "hsla(var(--glass-border))" }} />

              <div className="flex gap-2 px-4">
                <Link to="/wishlist" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" size="sm" className="rounded-full">
                    <Heart className="h-4 w-4 mr-2" />
                    Favorite
                  </Button>
                </Link>
                <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" size="sm" className="rounded-full">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Coș
                  </Button>
                </Link>
                <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" size="sm" className="rounded-full">
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
