import heroImage from "@/assets/hero-candles.jpg";
import { Button } from "./ui/button";
import CrescentMoon from "./CrescentMoon";

const Hero = () => {
  return (
    <section id="acasa" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Logo Icon */}
          <div className="flex justify-center mb-4">
            <CrescentMoon size={64} glow />
          </div>

          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-serif italic text-foreground"
            style={{ fontFamily: "'Dancing Script', 'Merriweather', cursive" }}
          >
            Izabloom
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Lumânări artizanale & Mărturii personalizate
          </p>
          
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Creăm momente magice pentru cele mai speciale evenimente din viața ta. 
            Fiecare lumânare este făcută cu dragoste și atenție la detalii.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="text-lg px-8">
              Vezi Colecția
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-card/50 backdrop-blur-sm">
              Contactează-ne
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
