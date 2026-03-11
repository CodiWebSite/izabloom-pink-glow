import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";
import largeCandles from "@/assets/large-candles.jpg";

const LumanariMari = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          title="Lumânări Mari"
          description="Lumânări maiestuoase pentru evenimente deosebite și decoruri spectaculoase"
          image={largeCandles}
        />
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-lg text-muted-foreground">
                Lumânările noastre mari adaugă un element dramatic și elegant oricărui spațiu. 
                Ideale pentru nunți, botezuri și evenimente speciale.
              </p>
            </div>
            <ProductGrid category="lumanari-mari" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LumanariMari;
