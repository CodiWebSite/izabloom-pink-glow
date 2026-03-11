import { useState, useEffect } from "react";
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
import { motion, AnimatePresence } from "framer-motion";

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
  const [scrolled, setScrolled] = useState(false);
  const { user, signOut } = useAuth();
  const { itemCount: cartCount } = useCart();
  const { itemCount: wishlistCount } = useWishlist();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-strong shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-xl transition-all duration-200"
            >
              Acasă
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-xl transition-all duration-200">
                Lumânări <ChevronDown className="w-3.5 h-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass-strong rounded-xl">
                {lumanariItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild className="rounded-lg">
                    <Link to={item.href}>{item.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-xl transition-all duration-200">
                Mărturii <ChevronDown className="w-3.5 h-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass-strong rounded-xl">
                {martiriiItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild className="rounded-lg">
                    <Link to={item.href}>{item.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/cadouri-speciale"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-xl transition-all duration-200"
            >
              Cadouri
            </Link>

            <Link
              to="/contact"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-xl transition-all duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* User Actions */}
          <div className="flex items-center gap-1">
            <Link to="/wishlist">
              <Button variant="ghost" size="icon" className="hidden sm:flex relative rounded-xl hover:bg-accent/50">
                <Heart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="hidden sm:flex relative rounded-xl hover:bg-accent/50">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
            {user ? (
              <Button variant="ghost" size="icon" className="hidden sm:flex rounded-xl hover:bg-accent/50" onClick={signOut}>
                <LogOut className="h-5 w-5" />
              </Button>
            ) : (
              <Link to="/auth">
                <Button variant="ghost" size="icon" className="hidden sm:flex rounded-xl hover:bg-accent/50">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            )}

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1">
                <Link to="/" className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-xl transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Acasă
                </Link>
                <div className="px-4 py-2 text-xs font-semibold text-primary uppercase tracking-wider">Lumânări</div>
                {lumanariItems.map((item) => (
                  <Link key={item.href} to={item.href} className="block px-6 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-xl transition-colors" onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                  </Link>
                ))}
                <div className="px-4 py-2 text-xs font-semibold text-primary uppercase tracking-wider">Mărturii</div>
                {martiriiItems.map((item) => (
                  <Link key={item.href} to={item.href} className="block px-6 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-xl transition-colors" onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                  </Link>
                ))}
                <Link to="/cadouri-speciale" className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-xl transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Cadouri Speciale
                </Link>
                <Link to="/contact" className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-xl transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
                <div className="border-t border-border/50 my-3" />
                <div className="flex gap-2 px-4">
                  <Link to="/wishlist" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" size="sm" className="rounded-xl"><Heart className="h-4 w-4 mr-2" />Favorite</Button>
                  </Link>
                  <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" size="sm" className="rounded-xl"><ShoppingCart className="h-4 w-4 mr-2" />Coș</Button>
                  </Link>
                  <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" size="sm" className="rounded-xl"><User className="h-4 w-4 mr-2" />Cont</Button>
                  </Link>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
