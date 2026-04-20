import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import promoImg from "@/assets/promo-banner.jpg";
import { useSiteSettings } from "@/hooks/useSiteSettings";
import { buildWhatsAppLink, DEFAULT_WHATSAPP } from "@/lib/whatsapp";
import { Button } from "./ui/button";

const PromoBanner = () => {
  const { settings } = useSiteSettings();
  if (!settings.promo.enabled) return null;

  const waLink = buildWhatsAppLink(
    settings.contact.whatsapp || DEFAULT_WHATSAPP,
    `Bună! Sunt interesat(ă) de oferta: ${settings.promo.title} — ${settings.promo.description}`
  );

  return (
    <section className="py-16" style={{ background: "hsl(340 40% 97%)" }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl shadow-2xl"
          style={{
            background: "linear-gradient(135deg, hsl(340 60% 92%), hsl(340 40% 97%))",
            boxShadow: "0 20px 60px -15px hsl(333 71% 50% / 0.25)",
          }}
        >
          <div className="grid md:grid-cols-2 gap-0 items-center">
            <div
              className="aspect-[4/3] md:aspect-auto md:h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${promoImg})` }}
            />
            <div className="p-8 md:p-12 text-center md:text-left space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                Promoție limitată
              </div>
              <h2
                className="text-4xl md:text-5xl font-serif italic text-primary"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                {settings.promo.title}
              </h2>
              <p className="text-xl md:text-2xl text-foreground font-light leading-snug">
                {settings.promo.description}
              </p>
              <div className="pt-2">
                <a href={waLink} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="rounded-full px-8 shadow-lg">
                    Comandă pe WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PromoBanner;
