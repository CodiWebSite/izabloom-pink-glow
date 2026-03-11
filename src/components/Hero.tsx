import heroImage from "@/assets/hero-candles.jpg";
import { Button } from "./ui/button";

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
            <svg
              width="64"
              height="64"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary animate-pulse"
            >
              <path
                d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14c1.5 0 2.942-.235 4.297-.668C15.31 27.59 12 23.186 12 18c0-5.186 3.31-9.59 8.297-11.332A13.955 13.955 0 0016 2z"
                fill="currentColor"
              />
            </svg>
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
