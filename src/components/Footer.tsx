import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useSiteSettings } from "@/hooks/useSiteSettings";
import { MessageCircle, Phone, MapPin } from "lucide-react";
import { buildWhatsAppLink, DEFAULT_WHATSAPP } from "@/lib/whatsapp";

const Footer = () => {
  const { settings } = useSiteSettings();
  const wa = settings.contact.whatsapp || DEFAULT_WHATSAPP;
  const waLink = buildWhatsAppLink(wa, "Bună! Aș dori mai multe informații.");

  return (
    <footer
      className="pt-16 pb-8 border-t"
      style={{ background: "hsl(340 25% 92%)", borderColor: "hsl(340 30% 85%)" }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div className="space-y-4">
            <Link to="/">
              <Logo />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Lumânări artizanale și mărturii personalizate, lucrate manual cu pasiune.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Navigare
            </h4>
            <nav className="grid grid-cols-2 gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Acasă</Link>
              <Link to="/marturii-botez" className="text-sm text-muted-foreground hover:text-primary transition-colors">Mărturii Botez</Link>
              <Link to="/marturii-nunta" className="text-sm text-muted-foreground hover:text-primary transition-colors">Mărturii Nuntă</Link>
              <Link to="/lumanari-mici" className="text-sm text-muted-foreground hover:text-primary transition-colors">Lumânări Mici</Link>
              <Link to="/lumanari-mari" className="text-sm text-muted-foreground hover:text-primary transition-colors">Lumânări Mari</Link>
              <Link to="/cadouri-speciale" className="text-sm text-muted-foreground hover:text-primary transition-colors">Cadouri</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp: {wa}
              </a>
              <a
                href={`tel:${(settings.contact.phone || DEFAULT_WHATSAPP).replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                {settings.contact.phone}
              </a>
              <p className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                {settings.contact.location} — {settings.contact.delivery}
              </p>
            </div>
          </div>
        </div>

        <div
          className="pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-3"
          style={{ borderColor: "hsl(340 30% 85%)" }}
        >
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Izabloom by Izabela. Toate drepturile rezervate.
          </p>
          <p className="text-xs text-muted-foreground">Lucrat cu ❤️ în România</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
