import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";
import CrescentMoon from "./CrescentMoon";
import { motion } from "framer-motion";

interface ProductCardProps {
  id: string;
  name: string;
  description: string | null;
  price: number;
  imageUrl: string | null;
}

const ProductCard = ({ id, name, description, price, imageUrl }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(id);

  const handleWishlistToggle = async () => {
    if (inWishlist) {
      await removeFromWishlist(id);
    } else {
      await addToWishlist(id);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group glass rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative aspect-square bg-gradient-to-br from-accent/50 to-primary/10">
        {imageUrl && imageUrl !== "/placeholder.svg" ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <CrescentMoon size={64} className="opacity-20" />
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={handleWishlistToggle}
          className={`absolute top-3 right-3 glass-strong rounded-xl ${
            inWishlist ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <Heart className={`h-5 w-5 ${inWishlist ? "fill-current" : ""}`} />
        </Button>
      </div>
      <div className="p-5">
        <h3 className="font-medium text-foreground mb-1 line-clamp-1">{name}</h3>
        {description && (
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
        )}
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">{price} RON</span>
          <Button size="sm" className="rounded-xl glow-sm" onClick={() => addToCart(id)}>
            <ShoppingCart className="h-4 w-4 mr-2" />
            Adaugă
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
