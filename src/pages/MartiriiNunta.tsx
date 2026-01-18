import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import weddingFavors from "@/assets/wedding-favors.jpg";

const MartiriiNunta = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          title="Mărturii Nuntă"
          description="Amintiri parfumate pentru invitații nunții tale de vis"
          image={weddingFavors}
        />
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-muted-foreground mb-8">
                Oferă invitaților tăi o amintire specială a nunții tale. 
                Mărturiile noastre sunt personalizate cu numele mirilor, 
                data nunții și mesaje de mulțumire.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="bg-card rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Lumânări în Cutie</h3>
                  <p className="text-muted-foreground">Elegante și gata de oferit</p>
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Lumânări cu Fundă</h3>
                  <p className="text-muted-foreground">Decorate cu panglici de satin</p>
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Seturi Personalizate</h3>
                  <p className="text-muted-foreground">Cu numele și data voastră</p>
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Design Tematic</h3>
                  <p className="text-muted-foreground">Asortat cu tema nunții</p>
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

export default MartiriiNunta;
