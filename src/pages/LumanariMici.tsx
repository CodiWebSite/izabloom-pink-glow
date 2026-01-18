import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import smallCandles from "@/assets/small-candles.jpg";

const LumanariMici = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          title="Lumânări Mici"
          description="Lumânări delicate perfecte pentru decoruri intime și cadouri speciale"
          image={smallCandles}
        />
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-muted-foreground mb-8">
                Lumânările noastre mici sunt ideale pentru a adăuga o notă de eleganță și căldură 
                în orice spațiu. Perfecte pentru decorarea meselor, cadouri sau pentru a crea o 
                atmosferă relaxantă acasă.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="bg-card rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Lumânări Votive</h3>
                  <p className="text-muted-foreground">Perfecte pentru aranjamente în grup</p>
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Lumânări Tealight</h3>
                  <p className="text-muted-foreground">Ideale pentru suporturi decorative</p>
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Lumânări în Borcan Mic</h3>
                  <p className="text-muted-foreground">Cu parfumuri delicate și relaxante</p>
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Lumânări Florale</h3>
                  <p className="text-muted-foreground">Decoruri în formă de flori</p>
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

export default LumanariMici;
