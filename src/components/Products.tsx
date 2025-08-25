import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/utils/whatsapp";

export const Products = () => {
  const productCategories = [
    {
      title: "Laptops",
      description: "Premium laptops from top brands",
      image: "/lovable-uploads/0dcc4a15-5159-467a-8d75-6a1abb2675ab.png",
      products: [
        { 
          name: "HP EliteBook 840 G5", 
          description: "Intel Core i5, 8GB RAM, 256GB SSD, Windows 11", 
          price: "Call for Price", 
          image: "/lovable-uploads/0dcc4a15-5159-467a-8d75-6a1abb2675ab.png" 
        },
        { 
          name: "HP Stream 11 Pro", 
          description: "Intel Celeron, 4GB RAM, 64GB eMMC, Aqua Blue", 
          price: "Call for Price", 
          image: "/lovable-uploads/1cb20b1d-6407-481d-bed6-7b6ddebfb1d3.png" 
        },
        { 
          name: "MacBook Air 13\"", 
          description: "Apple M1 chip, 8GB RAM, 256GB SSD, Silver", 
          price: "Call for Price", 
          image: "/lovable-uploads/e1cce7c9-87a0-40a4-9d05-0e0b7e9d2067.png" 
        },
        { 
          name: "HP ProBook 450 G7", 
          description: "Intel Core i7, 16GB RAM, 512GB SSD, Silver", 
          price: "Call for Price", 
          image: "/lovable-uploads/c15ed75d-ee7b-425a-bed2-210daceb6455.png" 
        },
        { 
          name: "HP EliteBook x360", 
          description: "Intel Core i5, 8GB RAM, 256GB SSD, Convertible", 
          price: "Call for Price", 
          image: "/lovable-uploads/cd4a1ed1-8959-4954-9c8f-0aa86b485500.png" 
        },
        { 
          name: "HP Laptop Silver", 
          description: "Intel Core i3, 4GB RAM, 1TB HDD, Silver", 
          price: "Call for Price", 
          image: "/lovable-uploads/ed795dbf-787a-43c8-ae82-b33317c0ee78.png" 
        }
      ]
    },
    {
      title: "Smartphones",
      description: "Latest smartphones and accessories",
      image: "/lovable-uploads/ee03ca51-7f64-45ed-bf7f-ecaf88369fd8.png",
      products: [
        { 
          name: "iPhone 12 Pro", 
          description: "128GB, Sierra Blue, ProRAW Camera", 
          price: "Call for Price", 
          image: "/lovable-uploads/ee03ca51-7f64-45ed-bf7f-ecaf88369fd8.png" 
        },
        { 
          name: "iPhone 14", 
          description: "128GB, Blue, iOS 16", 
          price: "Call for Price", 
          image: "/lovable-uploads/bac8453a-a012-4148-bb8b-7ef56b418219.png" 
        }
      ]
    },
    {
      title: "Accessories",
      description: "Essential tech accessories and gadgets",
      image: "/lovable-uploads/d8a78e1c-7af2-48fa-a696-3a4d24667784.png",
      products: [
        { 
          name: "Mini Wireless Keyboard K-03", 
          description: "Compact design, Bluetooth connectivity, White", 
          price: "Call for Price", 
          image: "/lovable-uploads/626ca002-fba4-4226-be5a-783d178998f6.png" 
        },
        { 
          name: "2.5G High Speed Network Card", 
          description: "USB 3.0, 2500 Mbps, Lightning Fast Internet", 
          price: "Call for Price", 
          image: "/lovable-uploads/d8a78e1c-7af2-48fa-a696-3a4d24667784.png" 
        },
        { 
          name: "M.2 SSD External Enclosure", 
          description: "USB 3.1, GHD-M6, High-speed data transfer", 
          price: "Call for Price", 
          image: "/lovable-uploads/f1c70230-8a0d-479e-a81d-f8b2338964b1.png" 
        }
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
    <section id="products" className="py-20 bg-background animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 stagger-children">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-scale-in">
            Our <span className="text-primary">Products</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
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
                    className="w-full h-64 object-contain bg-background rounded-lg shadow-lg hover-scale transition-all duration-300"
                  />
                </div>
                <div className="lg:w-2/3">
                  <h3 className="text-3xl font-bold text-foreground mb-4">{category.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
                {category.products.map((product, productIndex) => (
                  <Card key={productIndex} className="card-elevated hover:shadow-lg transition-all duration-300 hover-scale animate-fade-in group">
                    <div className="relative overflow-hidden rounded-t-lg bg-background p-4">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-48 object-contain group-hover:scale-105 transition-all duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">{product.name}</CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-semibold text-primary">{product.price}</span>
                      </div>
                      <div className="flex gap-2">
                         <Button 
                          size="sm" 
                          className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold transition-all duration-200 transform hover:scale-105 hover-scale"
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
                          className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-200 hover-scale"
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