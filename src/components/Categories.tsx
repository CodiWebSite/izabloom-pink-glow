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
    <section className="py-20" style={{ background: "hsl(340 40% 97%)" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            Descoperă Colecțiile Noastre
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fiecare produs este creat cu grijă și pasiune, folosind cele mai fine ingrediente naturale
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
