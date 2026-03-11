import { Heart, Leaf, Star } from "lucide-react";

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
    title: "Design Personalizat",
    description: "Personalizăm fiecare produs pentru a se potrivi perfect cu evenimentul tău",
  },
];

const About = () => {
  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            De Ce Să Alegi Izabloom?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Suntem dedicați creării unor produse care aduc lumină și parfum în cele mai importante momente din viața ta
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
