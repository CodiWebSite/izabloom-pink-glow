import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";
import weddingFavors from "@/assets/wedding-favors.jpg";

const MartiriiNunta = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          title="Mărturii Nuntă"
          description="Amintiri parfumate pentru cea mai importantă zi din viața ta"
          image={weddingFavors}
        />
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-lg text-muted-foreground">
                Oferă invitaților tăi un cadou special pe care să îl păstreze ca amintire. 
                Mărturiile noastre sunt personalizabile și create cu drag.
              </p>
            </div>
            <ProductGrid category="marturii-nunta" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MartiriiNunta;
