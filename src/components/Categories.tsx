import { motion } from "framer-motion";
import CategoryCard from "./CategoryCard";
import smallCandles from "@/assets/small-candles.jpg";
import largeCandles from "@/assets/large-candles.jpg";
import scentedCandles from "@/assets/scented-candles.jpg";
import weddingFavors from "@/assets/wedding-favors.jpg";
import baptismFavors from "@/assets/baptism-favors.jpg";
import specialGifts from "@/assets/special-gifts.jpg";

const categories = [
  {
    title: "Lumânări Mici",
    description: "Lumânări delicate perfecte pentru decoruri intime și cadouri speciale",
    image: smallCandles,
    href: "/lumanari-mici",
  },
  {
    title: "Lumânări Mari",
    description: "Lumânări impunătoare pentru ocazii speciale și evenimente deosebite",
    image: largeCandles,
    href: "/lumanari-mari",
  },
  {
    title: "Lumânări Delicioase",
    description: "Parfumuri îmbietoare care transformă orice spațiu într-o oază de relaxare",
    image: scentedCandles,
    href: "/lumanari-delicioase",
  },
  {
    title: "Mărturii Nuntă",
    description: "Amintiri parfumate pentru invitații nunții tale de vis",
    image: weddingFavors,
    href: "/marturii-nunta",
  },
  {
    title: "Mărturii Botez",
    description: "Cadouri delicate pentru celebrarea celor mici",
    image: baptismFavors,
    href: "/marturii-botez",
  },
  {
    title: "Cadouri Speciale",
    description: "Seturi exclusive pentru momente de răsfăț și celebrare",
    image: specialGifts,
    href: "/cadouri-speciale",
  },
];

const Categories = () => {
  return (
    <section className="py-24 relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/30 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase">Colecții</span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mt-3 mb-5">
            Descoperă Lumea Izabloom
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Fiecare produs este creat cu grijă și pasiune, folosind cele mai fine ingrediente naturale
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={category.title} {...category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
