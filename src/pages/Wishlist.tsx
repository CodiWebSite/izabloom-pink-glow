import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const Wishlist = () => {
  // Placeholder wishlist - will be connected to state management later
  const wishlistItems: Array<{
    id: number;
    name: string;
    price: number;
    image: string;
  }> = [];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        <PageHero
          title="Lista de Dorințe"
          description="Produsele tale preferate, salvate pentru mai târziu"
        />

        <section className="py-16">
          <div className="container mx-auto px-4">
            {wishlistItems.length === 0 ? (
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
                  <Card key={item.id} className="overflow-hidden group">
                    <div className="relative aspect-square">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 bg-card/80 hover:bg-destructive hover:text-destructive-foreground"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium text-foreground mb-2">
                        {item.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-primary font-semibold">
                          {item.price} RON
                        </span>
                        <Button size="sm" variant="outline">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Adaugă în coș
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
