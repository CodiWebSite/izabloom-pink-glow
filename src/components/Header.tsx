import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ShoppingCart, Heart, User, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
import { useUserRole } from "@/hooks/useUserRole";
import { Shield } from "lucide-react";

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

const NavItem = ({ to, children, onClick, index = 0 }: { to: string; children: React.ReactNode; onClick?: () => void; index?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: -8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
  >
    <Link
      to={to}
      onClick={onClick}
      className="relative text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
    </Link>
  </motion.div>
);

const dropdownItemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.25, delay: i * 0.05, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const DropdownNavMenu = ({
  label,
  items,
  index = 0,
}: {
  label: string;
  items: { name: string; href: string }[];
  index?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: -8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
  >
    <DropdownMenu>
      <DropdownMenuTrigger className="relative flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 group outline-none">
        {label}{" "}
        <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
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
        asChild
      >
        <motion.div
          initial={{ opacity: 0, y: -6, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {items.map((item, i) => (
            <motion.div
              key={item.href}
              custom={i}
              variants={dropdownItemVariants}
              initial="hidden"
              animate="visible"
            >
              <DropdownMenuItem
                asChild
                className="cursor-pointer rounded-xl px-4 py-2.5 text-sm font-medium text-foreground transition-all duration-200 focus:bg-[hsla(var(--nav-hover))] hover:bg-[hsla(var(--nav-hover))] focus:text-primary"
              >
                <Link to={item.href}>{item.name}</Link>
              </DropdownMenuItem>
            </motion.div>
          ))}
        </motion.div>
      </DropdownMenuContent>
    </DropdownMenu>
  </motion.div>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { itemCount: cartCount } = useCart();
  const { itemCount: wishlistCount } = useWishlist();
  const { isAdmin } = useUserRole();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link to="/">
              <Logo />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavItem to="/" index={0}>Acasă</NavItem>
            <DropdownNavMenu label="Lumânări" items={lumanariItems} index={1} />
            <DropdownNavMenu label="Mărturii" items={martiriiItems} index={2} />
            <NavItem to="/cadouri-speciale" index={3}>Cadouri Speciale</NavItem>
            <NavItem to="/contact" index={4}>Contact</NavItem>
          </nav>

          {/* User Actions */}
          <motion.div
            className="flex items-center gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Link to="/wishlist">
              <Button variant="ghost" size="icon" className="hidden sm:flex relative rounded-full hover:bg-[hsla(var(--nav-hover))] transition-all duration-300">
                <Heart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 20 }}
                    className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center"
                  >
                    {wishlistCount}
                  </motion.span>
                )}
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="hidden sm:flex relative rounded-full hover:bg-[hsla(var(--nav-hover))] transition-all duration-300">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 20 }}
                    className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </Button>
            </Link>
            {isAdmin && (
              <Link to="/admin">
                <Button variant="ghost" size="icon" className="hidden sm:flex rounded-full hover:bg-[hsla(var(--nav-hover))] transition-all duration-300" aria-label="Admin">
                  <Shield className="h-5 w-5 text-primary" />
                </Button>
              </Link>
            )}
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
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lg:hidden overflow-hidden border-t"
              style={{ borderColor: "hsla(var(--glass-border))" }}
            >
              <div className="flex flex-col gap-1 py-4">
                {[
                  { to: "/", label: "Acasă" },
                ].map((item, i) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <Link
                      to={item.to}
                      className="px-4 py-2.5 block text-sm font-medium text-muted-foreground hover:text-primary hover:bg-[hsla(var(--nav-hover))] rounded-xl transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="px-4 py-2 text-xs font-semibold text-primary uppercase tracking-wider"
                >
                  Lumânări
                </motion.div>
                {lumanariItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      to={item.href}
                      className="px-6 py-2.5 block text-sm font-medium text-muted-foreground hover:text-primary hover:bg-[hsla(var(--nav-hover))] rounded-xl transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="px-4 py-2 text-xs font-semibold text-primary uppercase tracking-wider"
                >
                  Mărturii
                </motion.div>
                {martiriiItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.35 + i * 0.05 }}
                  >
                    <Link
                      to={item.href}
                      className="px-6 py-2.5 block text-sm font-medium text-muted-foreground hover:text-primary hover:bg-[hsla(var(--nav-hover))] rounded-xl transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                {[
                  { to: "/cadouri-speciale", label: "Cadouri Speciale" },
                  { to: "/contact", label: "Contact" },
                ].map((item, i) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.45 + i * 0.05 }}
                  >
                    <Link
                      to={item.to}
                      className="px-4 py-2.5 block text-sm font-medium text-muted-foreground hover:text-primary hover:bg-[hsla(var(--nav-hover))] rounded-xl transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.55 }}
                  className="border-t my-2"
                  style={{ borderColor: "hsla(var(--glass-border))" }}
                />

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  className="flex gap-2 px-4"
                >
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
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
