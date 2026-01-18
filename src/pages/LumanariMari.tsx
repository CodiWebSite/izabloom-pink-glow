import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import largeCandles from "@/assets/large-candles.jpg";

const LumanariMari = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          title="Lumânări Mari"
          description="Lumânări impunătoare pentru ocazii speciale și evenimente deosebite"
          image={largeCandles}
        />
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-muted-foreground mb-8">
                Lumânările noastre mari sunt piesele de rezistență pentru orice eveniment. 
                Elegante și impunătoare, acestea creează o atmosferă de vis pentru nunți, 
                botezuri și alte ocazii speciale.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="bg-card rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Lumânări Stâlp</h3>
                  <p className="text-muted-foreground">Perfecte pentru aranjamente centrale</p>
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Lumânări Decorative</h3>
                  <p className="text-muted-foreground">Cu sculpturi și design unic</p>
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Lumânări de Masă</h3>
                  <p className="text-muted-foreground">Elegante și rafinate</p>
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Lumânări Artistice</h3>
                  <p className="text-muted-foreground">Piese unicat pentru colecționari</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LumanariMari;
