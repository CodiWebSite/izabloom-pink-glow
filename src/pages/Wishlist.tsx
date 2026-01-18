import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useWishlist } from "@/hooks/useWishlist";
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/hooks/useAuth";
import CrescentMoon from "@/components/CrescentMoon";

const Wishlist = () => {
  const { wishlistItems, loading, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { user } = useAuth();

  const handleAddToCart = async (productId: string) => {
    await addToCart(productId);
    await removeFromWishlist(productId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-primary/5 via-accent/10 to-background">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        <PageHero
          title="Lista de Dorințe"
          description="Produsele tale preferate, salvate pentru mai târziu"
        />

        <section className="py-16">
          <div className="container mx-auto px-4">
            {!user ? (
              <div className="text-center py-16">
                <CrescentMoon size={80} className="mx-auto mb-6 opacity-50" />
                <h2 className="text-2xl font-serif text-foreground mb-4">
                  Trebuie să fii conectat
                </h2>
                <p className="text-muted-foreground mb-8">
                  Conectează-te pentru a vedea lista ta de dorințe
                </p>
                <Button asChild>
                  <Link to="/auth">Conectare</Link>
                </Button>
              </div>
            ) : loading ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground">Se încarcă...</p>
              </div>
            ) : wishlistItems.length === 0 ? (
              <div className="text-center py-16">
                <Heart className="w-24 h-24 mx-auto text-muted-foreground/50 mb-6" />
                <h2 className="text-2xl font-serif text-foreground mb-4">
                  Lista de dorințe este goală
                </h2>
                <p className="text-muted-foreground mb-8">
                  Salvează produsele preferate pentru a le găsi mai ușor
                </p>
                <Button asChild>
                  <Link to="/">Explorează Produsele</Link>
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {wishlistItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden group bg-card/80 backdrop-blur-sm">
                    <div className="relative aspect-square bg-gradient-to-br from-primary/10 to-accent/30">
                      {item.product.image_url && item.product.image_url !== "/placeholder.svg" ? (
                        <img
                          src={item.product.image_url}
                          alt={item.product.name}
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
                        className="absolute top-2 right-2 bg-card/80 hover:bg-destructive hover:text-destructive-foreground"
                        onClick={() => removeFromWishlist(item.product_id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium text-foreground mb-2">
                        {item.product.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-primary font-semibold">
                          {Number(item.product.price)} RON
                        </span>
                        <Button size="sm" onClick={() => handleAddToCart(item.product_id)}>
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Adaugă
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Wishlist;
