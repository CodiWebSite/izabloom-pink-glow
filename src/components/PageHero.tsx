import { motion } from "framer-motion";
import CrescentMoon from "./CrescentMoon";

interface PageHeroProps {
  title: string;
  description: string;
  image?: string;
}

const PageHero = ({ title, description, image }: PageHeroProps) => {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {image ? (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-accent/20 via-primary/5 to-background" />
      )}

      <div className="relative z-10 container mx-auto px-4 text-center pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-4"
        >
          <div className="flex justify-center mb-2">
            <CrescentMoon size={28} className="text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
