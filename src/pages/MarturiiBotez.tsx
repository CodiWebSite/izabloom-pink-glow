import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import baptismFavors from "@/assets/baptism-favors.jpg";

const MarturiiBotez = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          title="Mărturii Botez"
          description="Cadouri delicate pentru celebrarea celor mici"
          image={baptismFavors}
        />
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-muted-foreground mb-8">
                Celebrează venirea pe lume a celui mic cu mărturii speciale. 
                Fiecare mărturie este creată cu grijă și poate fi personalizată 
                cu numele bebelușului și data botezului.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="bg-card rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Mărturii Fetiță</h3>
                  <p className="text-muted-foreground">În nuanțe de roz delicat</p>
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Mărturii Băiețel</h3>
                  <p className="text-muted-foreground">În nuanțe de albastru blând</p>
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Design cu Îngerași</h3>
                  <p className="text-muted-foreground">Tematică celestială</p>
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Seturi Complete</h3>
                  <p className="text-muted-foreground">Mărturii + lumânare botez</p>
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

export default MarturiiBotez;
