import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";
import scentedCandles from "@/assets/scented-candles.jpg";

const LumanariDelicioase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-accent/10 to-background">
      <Header />
      <main>
        <PageHero
          title="Lumânări Delicioase"
          description="Parfumuri irezistibile care îți vor încânta simțurile"
          image={scentedCandles}
        />
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-lg text-muted-foreground">
                Descoperă colecția noastră de lumânări parfumate cu arome delicioase: 
                ciocolată, vanilie, cafea și multe altele care îți vor transforma casa într-un paradis olfactiv.
              </p>
            </div>
            <ProductGrid category="lumanari-delicioase" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LumanariDelicioase;
