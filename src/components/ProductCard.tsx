import { Heart, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { useWishlist } from "@/hooks/useWishlist";
import { useSiteSettings } from "@/hooks/useSiteSettings";
import { buildProductOrderMessage, buildWhatsAppLink, DEFAULT_WHATSAPP } from "@/lib/whatsapp";
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
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { settings } = useSiteSettings();
  const inWishlist = isInWishlist(id);

  const handleWishlistToggle = async () => {
    if (inWishlist) await removeFromWishlist(id);
    else await addToWishlist(id);
  };

  const waLink = buildWhatsAppLink(
    settings.contact.whatsapp || DEFAULT_WHATSAPP,
    buildProductOrderMessage(name, price)
  );

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card
        className="overflow-hidden group border-0 bg-card"
        style={{
          boxShadow: "0 10px 40px -15px hsl(333 71% 50% / 0.15)",
        }}
      >
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-primary/5 to-accent/30">
          {imageUrl && imageUrl !== "/placeholder.svg" ? (
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
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
            aria-label={inWishlist ? "Scoate din favorite" : "Adaugă la favorite"}
            className={`absolute top-3 right-3 rounded-full backdrop-blur-md bg-card/70 hover:bg-card shadow-md ${
              inWishlist ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <Heart className={`h-5 w-5 ${inWishlist ? "fill-current" : ""}`} />
          </Button>
        </div>
        <CardContent className="p-5 space-y-3">
          <div>
            <h3 className="font-serif text-lg text-foreground mb-1 line-clamp-1">{name}</h3>
            {description && (
              <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{description}</p>
            )}
          </div>
          <div className="flex items-center justify-between pt-1">
            <span className="text-2xl font-serif italic text-primary" style={{ fontFamily: "'Dancing Script', cursive" }}>
              {price} <span className="text-sm not-italic font-sans">RON</span>
            </span>
          </div>
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="block">
            <Button
              size="sm"
              className="w-full rounded-full font-medium shadow-md hover:shadow-lg transition-shadow"
              style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Comandă pe WhatsApp
            </Button>
          </a>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
