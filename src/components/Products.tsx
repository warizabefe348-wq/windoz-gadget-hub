import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, MessageCircle } from "lucide-react";
import laptopImage from "@/assets/laptop-hero.jpg";
import smartphoneImage from "@/assets/smartphone-hero.jpg";
import accessoriesImage from "@/assets/accessories-hero.jpg";

export const Products = () => {
  const productCategories = [
    {
      title: "Laptops",
      description: "Premium laptops from top brands",
      image: laptopImage,
      products: [
        { name: "HP Pavilion 15", description: "Intel Core i5, 8GB RAM, 512GB SSD", price: "Call for Price" },
        { name: "Dell Inspiron 14", description: "AMD Ryzen 7, 16GB RAM, 1TB SSD", price: "Call for Price" },
        { name: "Lenovo ThinkPad E15", description: "Intel Core i7, 16GB RAM, 512GB SSD", price: "Call for Price" },
        { name: "MacBook Air M2", description: "Apple M2 chip, 8GB RAM, 256GB SSD", price: "Call for Price" }
      ]
    },
    {
      title: "Smartphones",
      description: "Latest smartphones and accessories",
      image: smartphoneImage,
      products: [
        { name: "iPhone 15 Pro", description: "128GB, Titan Natural finish", price: "Call for Price" },
        { name: "Samsung Galaxy S24", description: "256GB, Phantom Black", price: "Call for Price" },
        { name: "Infinix Note 40", description: "128GB, Force Black", price: "Call for Price" },
        { name: "Tecno Phantom V", description: "256GB, Obsidian Black", price: "Call for Price" }
      ]
    },
    {
      title: "Accessories",
      description: "Essential tech accessories",
      image: accessoriesImage,
      products: [
        { name: "Wireless Keyboard & Mouse", description: "Ergonomic design, long battery life", price: "Call for Price" },
        { name: "External Hard Drive 2TB", description: "USB 3.0, portable storage", price: "Call for Price" },
        { name: "Universal Laptop Charger", description: "Compatible with major brands", price: "Call for Price" },
        { name: "Wireless Printer", description: "All-in-one, WiFi enabled", price: "Call for Price" }
      ]
    }
  ];

  const handleWhatsAppContact = (productName: string) => {
    const message = `Hi! I'm interested in buying the ${productName}. Can you provide more information about price and availability?`;
    const phoneNumber = "2348139316493";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Products</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our wide range of quality tech products from trusted brands
          </p>
        </div>

        <div className="space-y-16">
          {productCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex flex-col lg:flex-row items-center gap-12 mb-8">
                <div className="lg:w-1/3">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="lg:w-2/3">
                  <h3 className="text-3xl font-bold text-foreground mb-4">{category.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.products.map((product, productIndex) => (
                  <Card key={productIndex} className="card-elevated hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-semibold text-primary">{product.price}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          className="flex-1 bg-primary hover:bg-primary/90"
                          onClick={() => handleWhatsAppContact(product.name)}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Buy Now
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleWhatsAppContact(product.name)}
                        >
                          <MessageCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};