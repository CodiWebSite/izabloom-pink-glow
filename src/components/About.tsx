import { Heart, Leaf, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useSiteSettings } from "@/hooks/useSiteSettings";

const features = [
  {
    icon: Heart,
    title: "Făcute cu Dragoste",
    description: "Fiecare lumânare este creată manual, cu atenție la cele mai mici detalii",
  },
  {
    icon: Leaf,
    title: "Ingrediente Naturale",
    description: "Folosim doar ceară naturală și parfumuri de cea mai înaltă calitate",
  },
  {
    icon: Sparkles,
    title: "Design Personalizat",
    description: "Personalizăm fiecare produs pentru a se potrivi perfect cu evenimentul tău",
  },
];

const About = () => {
  const { settings } = useSiteSettings();

  return (
    <section className="py-24" style={{ background: "hsl(340 40% 97%)" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3">
            Despre noi
          </p>
          <h2
            className="text-4xl md:text-5xl font-serif italic text-foreground mb-4"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            {settings.about.title}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {settings.about.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card rounded-3xl p-8 text-center transition-all hover:-translate-y-1"
              style={{ boxShadow: "0 10px 40px -15px hsl(333 71% 50% / 0.15)" }}
            >
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full text-primary mb-5"
                style={{ background: "linear-gradient(135deg, hsl(340 60% 92%), hsl(340 40% 97%))" }}
              >
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-serif italic text-foreground mb-3" style={{ fontFamily: "'Dancing Script', cursive" }}>
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
