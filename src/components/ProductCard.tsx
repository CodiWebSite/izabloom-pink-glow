import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";
import CrescentMoon from "./CrescentMoon";

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
    <Card className="overflow-hidden group bg-card/80 backdrop-blur-sm border-border/50">
      <div className="relative aspect-square bg-gradient-to-br from-primary/10 to-accent/30">
        {imageUrl && imageUrl !== "/placeholder.svg" ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <CrescentMoon size={64} className="opacity-30" />
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={handleWishlistToggle}
          className={`absolute top-2 right-2 bg-card/80 hover:bg-card ${
            inWishlist ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <Heart className={`h-5 w-5 ${inWishlist ? "fill-current" : ""}`} />
        </Button>
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium text-foreground mb-1 line-clamp-1">{name}</h3>
        {description && (
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>
        )}
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-primary">{price} RON</span>
          <Button size="sm" onClick={() => addToCart(id)}>
            <ShoppingCart className="h-4 w-4 mr-2" />
            Adaugă
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
