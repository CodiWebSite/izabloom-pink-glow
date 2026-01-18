import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";
import smallCandles from "@/assets/small-candles.jpg";

const LumanariMici = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-accent/10 to-background">
      <Header />
      <main>
        <PageHero
          title="Lumânări Mici"
          description="Lumânări delicate perfecte pentru decoruri intime și cadouri speciale"
          image={smallCandles}
        />
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-lg text-muted-foreground">
                Lumânările noastre mici sunt ideale pentru a adăuga o notă de eleganță și căldură 
                în orice spațiu. Perfecte pentru decorarea meselor, cadouri sau pentru a crea o 
                atmosferă relaxantă acasă.
              </p>
            </div>
            <ProductGrid category="lumanari-mici" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LumanariMici;
