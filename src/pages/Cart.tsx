import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  // Placeholder cart - will be connected to state management later
  const cartItems: Array<{
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }> = [];

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        <PageHero
          title="Coșul Tău"
          description="Verifică produsele selectate și finalizează comanda"
        />

        <section className="py-16">
          <div className="container mx-auto px-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBag className="w-24 h-24 mx-auto text-muted-foreground/50 mb-6" />
                <h2 className="text-2xl font-serif text-foreground mb-4">
                  Coșul tău este gol
                </h2>
                <p className="text-muted-foreground mb-8">
                  Explorează colecția noastră și adaugă produse în coș
                </p>
                <Button asChild>
                  <Link to="/">Explorează Produsele</Link>
                </Button>
              </div>
            ) : (
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                  {cartItems.map((item) => (
                    <Card key={item.id}>
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-24 h-24 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="font-medium text-foreground">
                              {item.name}
                            </h3>
                            <p className="text-primary font-semibold">
                              {item.price} RON
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              <Button variant="outline" size="icon" className="h-8 w-8">
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <Button variant="outline" size="icon" className="h-8 w-8">
                                <Plus className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-destructive ml-auto"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-4">
                        Sumar Comandă
                      </h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-muted-foreground">
                          <span>Subtotal</span>
                          <span>{total} RON</span>
                        </div>
                        <div className="flex justify-between text-muted-foreground">
                          <span>Livrare</span>
                          <span>Gratuit</span>
                        </div>
                      </div>
                      <div className="border-t border-border pt-4 mb-6">
                        <div className="flex justify-between font-semibold text-foreground">
                          <span>Total</span>
                          <span>{total} RON</span>
                        </div>
                      </div>
                      <Button className="w-full">Finalizează Comanda</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
