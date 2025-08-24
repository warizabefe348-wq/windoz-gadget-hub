import { Services } from "@/components/Services";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const ServicesPage = () => {
  return (
    <div className="animate-fade-in">
      <Navbar />
      <main className="min-h-screen pt-16">
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;