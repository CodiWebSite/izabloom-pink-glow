import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  index?: number;
}

const CategoryCard = ({ title, description, image, href, index = 0 }: CategoryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link to={href} className="block group relative">
        <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          
          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <div className="flex items-end justify-between">
              <div>
                <h3 className="text-xl font-serif font-bold text-primary-foreground mb-1">
                  {title}
                </h3>
                <p className="text-sm text-primary-foreground/70 line-clamp-2 max-w-[80%]">
                  {description}
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <ArrowUpRight className="w-5 h-5 text-primary-foreground group-hover:text-primary-foreground transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
