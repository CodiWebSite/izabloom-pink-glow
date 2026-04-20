import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import PromoBanner from "@/components/PromoBanner";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ background: "hsl(340 40% 97%)" }}>
      <Header />
      <main>
        <Hero />
        <Categories />
        <PromoBanner />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
