import { Button } from "./ui/button";
import CrescentMoon from "./CrescentMoon";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSiteSettings } from "@/hooks/useSiteSettings";
import { buildWhatsAppLink, DEFAULT_WHATSAPP } from "@/lib/whatsapp";
import heroCandles from "@/assets/hero-candles.jpg";

const Hero = () => {
  const { settings } = useSiteSettings();
  const waLink = buildWhatsAppLink(
    settings.contact.whatsapp || DEFAULT_WHATSAPP,
    "Bună! Aș dori mai multe informații despre lumânările Izabloom."
  );

  return (
    <section
      id="acasa"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        background:
          "radial-gradient(ellipse at top, hsl(340 60% 94%) 0%, hsl(340 40% 97%) 60%, hsl(340 40% 97%) 100%)",
      }}
    >
      {/* Hero background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroCandles}
          alt="Lumânări artizanale Izabloom"
          className="w-full h-full object-cover opacity-40"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, hsl(340 40% 97% / 0.7) 0%, hsl(340 40% 97% / 0.85) 60%, hsl(340 40% 97%) 100%)",
          }}
        />
      </div>

      {/* Decorative blobs */}
      <div
        className="absolute top-20 -left-20 w-96 h-96 rounded-full opacity-40 blur-3xl z-0"
        style={{ background: "radial-gradient(circle, hsl(333 71% 80%), transparent 70%)" }}
      />
      <div
        className="absolute bottom-10 -right-20 w-[28rem] h-[28rem] rounded-full opacity-30 blur-3xl z-0"
        style={{ background: "radial-gradient(circle, hsl(340 80% 85%), transparent 70%)" }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <motion.div
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
            className="flex justify-center mb-2"
          >
            <CrescentMoon size={80} glow />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-[0.2em] uppercase"
          >
            {settings.hero.subtitle}
          </motion.div>

          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-serif italic text-foreground leading-none"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            {settings.hero.title.split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.6 }}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            {settings.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-3 justify-center pt-4"
          >
            <Link to="/marturii-botez">
              <Button size="lg" className="rounded-full px-8 shadow-lg hover:shadow-xl transition-shadow">
                Vezi Colecția
              </Button>
            </Link>
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 backdrop-blur-sm bg-card/60"
              >
                Scrie-ne pe WhatsApp
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-[1]"
        style={{ background: "linear-gradient(to top, hsl(340 40% 97%), transparent)" }}
      />
    </section>
  );
};

export default Hero;
