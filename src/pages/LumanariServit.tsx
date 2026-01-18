import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import largeCandles from "@/assets/large-candles.jpg";

const LumanariServit = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          title="Lumânări de Servit"
          description="Lumânări elegante pentru ceremonii și momente solemne"
          image={largeCandles}
        />
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-muted-foreground mb-8">
                Lumânările de servit sunt esențiale pentru ceremonia nunții și botezului. 
                Fiecare lumânare este decorată cu eleganță pentru a completa perfect 
                momentele speciale din viața ta.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="bg-card rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Lumânări Nuntă</h3>
                  <p className="text-muted-foreground">Pentru ceremonia religioasă</p>
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Lumânări Botez</h3>
                  <p className="text-muted-foreground">Pentru momentul sacru al botezului</p>
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Lumânări Cununie</h3>
                  <p className="text-muted-foreground">Elegante și personalizate</p>
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Seturi Complete</h3>
                  <p className="text-muted-foreground">Tot ce ai nevoie pentru ceremonie</p>
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

export default LumanariServit;
