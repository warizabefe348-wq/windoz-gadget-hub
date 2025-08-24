import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Products } from "@/components/Products";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="animate-fade-in">
      <Navbar />
      <main className="min-h-screen pt-16">
        <Hero />
        <About />
        <Services />
        <Products />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;