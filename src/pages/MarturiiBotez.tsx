import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";
import baptismFavors from "@/assets/baptism-favors.jpg";

const MarturiiBotez = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          title="Mărturii Botez"
          description="Daruri delicate pentru momentele sfinte ale micuțului tău"
          image={baptismFavors}
        />
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-lg text-muted-foreground">
                Celebrează botezul copilului tău cu mărturii speciale care vor rămâne 
                în amintirea tuturor invitaților.
              </p>
            </div>
            <ProductGrid category="marturii-botez" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MarturiiBotez;
