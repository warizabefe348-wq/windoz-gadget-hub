import { About } from "@/components/About";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="animate-fade-in">
      <Navbar />
      <main className="min-h-screen pt-16">
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;