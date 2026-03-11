import { Heart, Leaf, Star, Palette } from "lucide-react";
import { motion } from "framer-motion";
import CrescentMoon from "./CrescentMoon";

const features = [
  {
    icon: Heart,
    title: "Făcute cu Dragoste",
    description: "Fiecare lumânare este creată manual, cu atenție la cele mai mici detalii",
  },
  {
    icon: Leaf,
    title: "Ingrediente Naturale",
    description: "Folosim doar ceară naturală și uleiuri esențiale de cea mai înaltă calitate",
  },
  {
    icon: Star,
    title: "Design Unic",
    description: "Personalizăm fiecare produs pentru a se potrivi perfect cu evenimentul tău",
  },
  {
    icon: Palette,
    title: "Culori Vibrante",
    description: "Paleta noastră de culori adaugă eleganță oricărei ocazii speciale",
  },
];

const About = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <CrescentMoon size={32} className="text-primary" />
          </div>
          <span className="text-sm font-medium text-primary tracking-widest uppercase">De ce noi</span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mt-3 mb-5">
            De Ce Să Alegi Izabloom?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Suntem dedicați creării unor produse care aduc lumină și parfum în momentele importante
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
