import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, MessageCircle } from "lucide-react";
import laptopImage from "@/assets/laptop-hero.jpg";
import smartphoneImage from "@/assets/smartphone-hero.jpg";
import accessoriesImage from "@/assets/accessories-hero.jpg";
import { openWhatsApp } from "@/utils/whatsapp";

export const Products = () => {
  const productCategories = [
    {
      title: "Laptops",
      description: "Premium laptops from top brands",
      image: laptopImage,
      products: [
        { name: "HP Pavilion 15-dy5855wm", description: "Intel Core i5, 8GB RAM, 512GB SSD, Windows 11", price: "Call for Price" },
        { name: "MacBook Air M2", description: "Apple M2 chip, 8GB RAM, 256GB SSD, Silver", price: "Call for Price" },
        { name: "MacBook Pro 13\"", description: "Apple M1 chip, 8GB RAM, 256GB SSD, Space Gray", price: "Call for Price" },
        { name: "HP EliteBook", description: "Intel Core i7, 16GB RAM, 512GB SSD, Business Grade", price: "Call for Price" },
        { name: "Lenovo ThinkPad", description: "Intel Core i5, 8GB RAM, 256GB SSD, Black", price: "Call for Price" },
        { name: "MacBook Air 13\"", description: "Apple M1 chip, 8GB RAM, 512GB SSD, Gold", price: "Call for Price" }
      ]
    },
    {
      title: "Smartphones",
      description: "Latest smartphones and accessories",
      image: smartphoneImage,
      products: [
        { name: "iPhone 15 Pro Max", description: "256GB, Blue Titanium, A17 Pro chip", price: "Call for Price" },
        { name: "iPhone 14", description: "128GB, Blue, iOS 16", price: "Call for Price" },
        { name: "Samsung Galaxy Z Fold 5", description: "256GB, Phantom Black, Foldable Display", price: "Call for Price" },
        { name: "Samsung Galaxy S24", description: "256GB, Phantom Black, AI Camera", price: "Call for Price" },
        { name: "iPhone 13 Pro", description: "128GB, Sierra Blue, ProRAW Camera", price: "Call for Price" },
        { name: "Samsung Galaxy Note", description: "256GB, Mystic Bronze, S Pen included", price: "Call for Price" }
      ]
    },
    {
      title: "Accessories",
      description: "Essential tech accessories and gadgets",
      image: accessoriesImage,
      products: [
        { name: "Mini Wireless Keyboard K-03", description: "Compact design, Bluetooth connectivity, White", price: "Call for Price" },
        { name: "USB GPS Module U-blox7", description: "GPS/GLONASS navigation, Automotive & Marine use", price: "Call for Price" },
        { name: "Wireless Mouse & Keyboard Set", description: "Ergonomic design, long battery life", price: "Call for Price" },
        { name: "External Hard Drive 2TB", description: "USB 3.0, portable storage, Black", price: "Call for Price" },
        { name: "Universal Laptop Charger", description: "Compatible with HP, Dell, Lenovo", price: "Call for Price" },
        { name: "Laptop Cooling Pad", description: "LED fans, adjustable height, USB powered", price: "Call for Price" }
      ]
    }
  ];

  const handleWhatsAppContact = (productName: string) => {
    const message = `Hi! I'm interested in buying the ${productName}. Can you provide more information about price and availability?`;
    const phoneNumber = "2348139316493";
    console.log(`Opening WhatsApp for ${productName} with number: ${phoneNumber}`);
    openWhatsApp(phoneNumber, message);
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
                          className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold transition-all duration-200 transform hover:scale-105"
                          onClick={() => {
                            console.log(`Attempting to contact WhatsApp for ${product.name}`);
                            handleWhatsAppContact(product.name);
                          }}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Buy Now
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-200"
                          onClick={() => {
                            console.log(`Attempting to contact WhatsApp for ${product.name}`);
                            handleWhatsAppContact(product.name);
                          }}
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