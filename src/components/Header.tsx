import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart, User, LogOut, Flame, Gift, Church, Baby, Sparkles, Home, Mail } from "lucide-react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";
import { motion } from "framer-motion";

const lumanariItems = [
  { name: "Lumânări Mici", href: "/lumanari-mici", icon: Flame },
  { name: "Lumânări Mari", href: "/lumanari-mari", icon: Flame },
  { name: "Lumânări Delicioase", href: "/lumanari-delicioase", icon: Sparkles },
  { name: "Lumânări de Servit", href: "/lumanari-servit", icon: Flame },
];

const martiriiItems = [
  { name: "Mărturii Nuntă", href: "/marturii-nunta", icon: Church },
  { name: "Mărturii Botez", href: "/marturii-botez", icon: Baby },
];

const HamburgerButton = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-accent/50 transition-colors"
    aria-label="Menu"
  >
    <div className="w-5 h-4 flex flex-col justify-between">
      <motion.span
        animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
        className="block h-0.5 w-full bg-foreground rounded-full origin-center"
      />
      <motion.span
        animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.2 }}
        className="block h-0.5 w-full bg-foreground rounded-full"
      />
      <motion.span
        animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
        className="block h-0.5 w-full bg-foreground rounded-full origin-center"
      />
    </div>
  </button>
);

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

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-primary/80 backdrop-blur-xl shadow-md py-2" : "bg-primary/40 backdrop-blur-sm py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Logo />
            </Link>

            <div className="flex items-center gap-1">
              <Link to="/wishlist">
                <Button variant="ghost" size="icon" className="relative rounded-xl hover:bg-accent/50">
                  <Heart className="h-5 w-5" />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                      {wishlistCount}
                    </span>
                  )}
                </Button>
              </Link>
              <Link to="/cart">
                <Button variant="ghost" size="icon" className="relative rounded-xl hover:bg-accent/50">
                  <ShoppingCart className="h-5 w-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Button>
              </Link>
              {user ? (
                <Button variant="ghost" size="icon" className="rounded-xl hover:bg-accent/50" onClick={signOut}>
                  <LogOut className="h-5 w-5" />
                </Button>
              ) : (
                <Link to="/auth">
                  <Button variant="ghost" size="icon" className="rounded-xl hover:bg-accent/50">
                    <User className="h-5 w-5" />
                  </Button>
                </Link>
              )}

              <HamburgerButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
            </div>
          </div>
        </div>
      </motion.header>

      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetContent side="right" className="w-80 bg-primary/90 backdrop-blur-2xl border-l border-border/30 p-0">
          <SheetHeader className="p-6 pb-2">
            <SheetTitle className="font-serif text-xl text-foreground">Navigare</SheetTitle>
          </SheetHeader>

          <nav className="flex flex-col px-4 pb-6 space-y-1">
            <Link to="/" onClick={closeMenu} className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-foreground hover:bg-accent/50 rounded-xl transition-colors">
              <Home className="w-4 h-4 text-accent-foreground" />
              Acasă
            </Link>

            <div className="px-4 pt-4 pb-1 text-xs font-semibold text-accent-foreground uppercase tracking-widest">
              Lumânări
            </div>
            {lumanariItems.map((item) => (
              <Link key={item.href} to={item.href} onClick={closeMenu} className="flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-accent/50 rounded-xl transition-colors">
                <item.icon className="w-4 h-4 text-accent-foreground" />
                {item.name}
              </Link>
            ))}

            <div className="px-4 pt-4 pb-1 text-xs font-semibold text-accent-foreground uppercase tracking-widest">
              Mărturii
            </div>
            {martiriiItems.map((item) => (
              <Link key={item.href} to={item.href} onClick={closeMenu} className="flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-accent/50 rounded-xl transition-colors">
                <item.icon className="w-4 h-4 text-accent-foreground" />
                {item.name}
              </Link>
            ))}

            <div className="border-t border-border/40 my-3" />

            <Link to="/cadouri-speciale" onClick={closeMenu} className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-foreground hover:bg-accent/50 rounded-xl transition-colors">
              <Gift className="w-4 h-4 text-accent-foreground" />
              Cadouri Speciale
            </Link>

            <Link to="/contact" onClick={closeMenu} className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-foreground hover:bg-accent/50 rounded-xl transition-colors">
              <Mail className="w-4 h-4 text-accent-foreground" />
              Contact
            </Link>

            <div className="border-t border-border/40 my-3" />

            <div className="flex gap-2 px-4">
              <Link to="/wishlist" onClick={closeMenu} className="flex-1">
                <Button variant="outline" size="sm" className="w-full rounded-xl border-border/50">
                  <Heart className="h-4 w-4 mr-2" />Favorite
                </Button>
              </Link>
              <Link to="/cart" onClick={closeMenu} className="flex-1">
                <Button variant="outline" size="sm" className="w-full rounded-xl border-border/50">
                  <ShoppingCart className="h-4 w-4 mr-2" />Coș
                </Button>
              </Link>
            </div>

            {user ? (
              <Button variant="outline" size="sm" className="mx-4 rounded-xl border-border/50" onClick={() => { signOut(); closeMenu(); }}>
                <LogOut className="h-4 w-4 mr-2" />Deconectare
              </Button>
            ) : (
              <Link to="/auth" onClick={closeMenu} className="mx-4">
                <Button variant="outline" size="sm" className="w-full rounded-xl border-border/50">
                  <User className="h-4 w-4 mr-2" />Cont
                </Button>
              </Link>
            )}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Header;
