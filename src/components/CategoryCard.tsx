import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import CrescentMoon from "./CrescentMoon";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

const CategoryCard = ({ title, description, image, href }: CategoryCardProps) => {
  return (
    <Link to={href} className="block group">
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Card
          className="overflow-hidden border-0 bg-card relative"
          style={{ boxShadow: "0 10px 40px -15px hsl(333 71% 50% / 0.15)" }}
        >
          <div className="aspect-[4/5] overflow-hidden relative bg-gradient-to-br from-primary/10 to-accent/30">
            {image ? (
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <CrescentMoon size={80} className="opacity-30" />
              </div>
            )}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "linear-gradient(to top, hsl(333 71% 30% / 0.5), transparent 50%)",
              }}
            />
          </div>
          <CardContent className="p-6 text-center">
            <h3
              className="text-2xl font-serif italic text-foreground mb-2 group-hover:text-primary transition-colors"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              {title}
            </h3>
            <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{description}</p>
            <div className="inline-flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:gap-2">
              Descoperă <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
};

export default CategoryCard;
