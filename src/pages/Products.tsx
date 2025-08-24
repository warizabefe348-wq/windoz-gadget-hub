import { Products } from "@/components/Products";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const ProductsPage = () => {
  return (
    <div className="animate-fade-in">
      <Navbar />
      <main className="min-h-screen pt-16">
        <Products />
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;