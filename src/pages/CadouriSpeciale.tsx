import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";
import specialGifts from "@/assets/special-gifts.jpg";

const CadouriSpeciale = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-accent/10 to-background">
      <Header />
      <main>
        <PageHero
          title="Cadouri Speciale"
          description="Seturi cadou atent pregătite pentru persoanele dragi"
          image={specialGifts}
        />
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-lg text-muted-foreground">
                Oferă cadouri memorabile cu seturile noastre speciale, perfecte pentru orice ocazie: 
                zile de naștere, sărbători sau pur și simplu pentru a arăta cuiva cât de mult îți pasă.
              </p>
            </div>
            <ProductGrid category="cadouri-speciale" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CadouriSpeciale;
