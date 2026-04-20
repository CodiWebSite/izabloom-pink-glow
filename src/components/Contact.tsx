import { MessageCircle, Phone, MapPin, Truck, Instagram, Facebook } from "lucide-react";
import { Button } from "./ui/button";
import { useSiteSettings } from "@/hooks/useSiteSettings";
import { buildWhatsAppLink, DEFAULT_WHATSAPP } from "@/lib/whatsapp";

const Contact = () => {
  const { settings } = useSiteSettings();
  const phone = settings.contact.phone || DEFAULT_WHATSAPP;
  const wa = settings.contact.whatsapp || DEFAULT_WHATSAPP;
  const waLink = buildWhatsAppLink(wa, "Bună! Aș dori să comand de la Izabloom.");

  return (
    <section className="py-24" style={{ background: "hsl(340 40% 97%)" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3">
              Contact
            </p>
            <h2
              className="text-4xl md:text-5xl font-serif italic text-foreground mb-4"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Hai să Creăm Împreună
            </h2>
            <p className="text-muted-foreground text-lg">
              Comenzile se plasează direct prin WhatsApp pentru o experiență personalizată
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="block group">
              <div
                className="relative overflow-hidden rounded-3xl p-10 h-full text-white text-center flex flex-col items-center justify-center gap-4 transition-transform hover:-translate-y-1"
                style={{
                  background: "linear-gradient(135deg, #25D366, #128C7E)",
                  boxShadow: "0 20px 50px -15px rgba(37, 211, 102, 0.45)",
                }}
              >
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <MessageCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-serif italic" style={{ fontFamily: "'Dancing Script', cursive" }}>
                  Comandă pe WhatsApp
                </h3>
                <p className="text-white/90 text-sm max-w-xs">
                  Răspundem rapid și personalizăm comanda exact cum îți dorești
                </p>
                <span className="font-medium text-lg tracking-wide">{wa}</span>
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-full mt-2 bg-white text-emerald-700 hover:bg-white/90"
                >
                  Deschide chat
                </Button>
              </div>
            </a>

            <div className="space-y-4">
              <div
                className="bg-card rounded-3xl p-6 flex items-start gap-4"
                style={{ boxShadow: "0 10px 40px -15px hsl(333 71% 50% / 0.15)" }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-1">
                    Telefon
                  </p>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="text-foreground font-medium hover:text-primary transition-colors"
                  >
                    {phone}
                  </a>
                </div>
              </div>

              <div
                className="bg-card rounded-3xl p-6 flex items-start gap-4"
                style={{ boxShadow: "0 10px 40px -15px hsl(333 71% 50% / 0.15)" }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-1">
                    Locație
                  </p>
                  <p className="text-foreground font-medium">{settings.contact.location}</p>
                </div>
              </div>

              <div
                className="bg-card rounded-3xl p-6 flex items-start gap-4"
                style={{ boxShadow: "0 10px 40px -15px hsl(333 71% 50% / 0.15)" }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-1">
                    Livrare
                  </p>
                  <p className="text-foreground font-medium">{settings.contact.delivery}</p>
                </div>
              </div>

              <div className="flex justify-center gap-3 pt-2">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-card text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  style={{ boxShadow: "0 6px 20px -8px hsl(333 71% 50% / 0.3)" }}
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-card text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  style={{ boxShadow: "0 6px 20px -8px hsl(333 71% 50% / 0.3)" }}
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
