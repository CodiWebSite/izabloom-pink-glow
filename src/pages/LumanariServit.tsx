import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";
import heroCandles from "@/assets/hero-candles.jpg";

const LumanariServit = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          title="Lumânări de Servit"
          description="Lumânări tradiționale pentru ceremonii religioase și momente sacre"
          image={heroCandles}
        />
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-lg text-muted-foreground">
                Lumânările noastre de servit sunt create cu grijă pentru cele mai importante 
                momente din viață: botezuri, nunți și alte ceremonii religioase.
              </p>
            </div>
            <ProductGrid category="lumanari-servit" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LumanariServit;
