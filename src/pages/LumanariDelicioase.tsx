import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import scentedCandles from "@/assets/scented-candles.jpg";

const LumanariDelicioase = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          title="Lumânări Delicioase"
          description="Parfumuri îmbietoare care transformă orice spațiu într-o oază de relaxare"
          image={scentedCandles}
        />
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-muted-foreground mb-8">
                Lumânările noastre parfumate sunt create cu uleiuri esențiale naturale 
                pentru a aduce arome delicioase în casa ta. De la vanilie la lavandă, 
                fiecare parfum este ales cu grijă.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-card rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Vanilie</h3>
                  <p className="text-muted-foreground">Cald și reconfortant</p>
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Lavandă</h3>
                  <p className="text-muted-foreground">Relaxant și liniștitor</p>
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Trandafir</h3>
                  <p className="text-muted-foreground">Romantic și elegant</p>
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Scorțișoară</h3>
                  <p className="text-muted-foreground">Cald și condimentat</p>
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Citrice</h3>
                  <p className="text-muted-foreground">Fresh și energizant</p>
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Iasomie</h3>
                  <p className="text-muted-foreground">Delicat și floral</p>
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

export default LumanariDelicioase;
