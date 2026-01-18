import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import specialGifts from "@/assets/special-gifts.jpg";

const CadouriSpeciale = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          title="Cadouri Speciale"
          description="Seturi exclusive pentru momente de răsfăț și celebrare"
          image={specialGifts}
        />
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-muted-foreground mb-8">
                Oferă un cadou care încântă simțurile. Seturile noastre de cadouri 
                sunt perfecte pentru zile de naștere, sărbători sau pur și simplu 
                pentru a arăta cuiva că îți pasă.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="bg-card rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Seturi SPA</h3>
                  <p className="text-muted-foreground">Lumânări + produse relaxante</p>
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Cutii Cadou</h3>
                  <p className="text-muted-foreground">Prezentare elegantă</p>
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Seturi Tematice</h3>
                  <p className="text-muted-foreground">Pentru sărbători speciale</p>
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Cadouri Corporate</h3>
                  <p className="text-muted-foreground">Pentru parteneri și angajați</p>
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

export default CadouriSpeciale;
