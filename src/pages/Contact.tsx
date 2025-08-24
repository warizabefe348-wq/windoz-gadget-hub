import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="animate-fade-in">
      <Navbar />
      <main className="min-h-screen pt-16">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;