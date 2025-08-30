import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/utils/whatsapp";

export const Products = () => {
  const productCategories = [
    {
      title: "Premium Laptops",
      description: "🚀 High-Performance Laptops - Ready to Ship Today!",
      image: "/lovable-uploads/1f04fb43-babc-4bfe-b215-695737a2d0e1.png",
      badge: "🔥 BEST SELLERS",
      products: [
        { 
          name: "HP EliteBook 840 G5 ⚡", 
          description: "✅ Intel Core i5 • 8GB RAM • 256GB SSD • Windows 11 Pro", 
          price: "💰 Best Price Guaranteed!", 
          image: "/lovable-uploads/6cb55a77-8649-43ed-a326-0e6a367f71e7.png",
          badge: "💼 BUSINESS READY"
        },
        { 
          name: "MacBook Pro M4 🍎", 
          description: "✨ Apple M4 Chip • Ultra-Fast Performance • Brand New in Box", 
          price: "🎯 Special Offer Available!", 
          image: "/lovable-uploads/d82f6f9b-efd6-4924-a601-ba1a8ff5dc3e.png",
          badge: "🆕 LATEST MODEL"
        },
        { 
          name: "Dell Gaming Laptop 🎮", 
          description: "🔥 High-End Gaming • Dedicated Graphics • Perfect for Gamers", 
          price: "💎 Premium Gaming Experience!", 
          image: "/lovable-uploads/3507a5e6-f03c-4078-a150-80cdd2d1ac38.png",
          badge: "🎮 GAMING BEAST"
        },
        { 
          name: "HP Premium Collection 💎", 
          description: "📦 Multiple Units Available • Bulk Discounts • Enterprise Ready", 
          price: "💵 Volume Pricing Available!", 
          image: "/lovable-uploads/f32c8963-b8ec-4b8d-845a-887c5744e43f.png",
          badge: "📦 BULK DEALS"
        },
        { 
          name: "HP 14 inch Laptop PC 💻", 
          description: "📦 Brand New in Box • Latest Model • Full Warranty • Business Ready", 
          price: "🎯 Unbeatable Value!", 
          image: "/lovable-uploads/39271500-3d4b-425d-a533-9a96547d0f72.png",
          badge: "📦 NEW SEALED"
        },
        { 
          name: "HP ENVY x360 Collection ⚡", 
          description: "🔄 2-in-1 Design • Touch Screen • Premium Build • Multiple Units", 
          price: "✨ Convertible Excellence!", 
          image: "/lovable-uploads/3a1695e9-67e1-40a5-9998-8681ac96781c.png",
          badge: "🔄 CONVERTIBLE"
        },
        { 
          name: "HP Elite Laptop Stack 💼", 
          description: "📚 Bulk Professional Laptops • Enterprise Grade • Volume Discounts", 
          price: "💼 Business Volume Deals!", 
          image: "/lovable-uploads/5a90c3d8-3d42-4cc6-ad01-23952e61ae16.png",
          badge: "💼 ENTERPRISE"
        },
        { 
          name: "MacBook Air M1 💙", 
          description: "🍎 Apple M1 Chip • 8GB RAM • 256GB SSD • Stunning Blue Finish • Like New", 
          price: "🌟 Premium Apple Experience!", 
          image: "/lovable-uploads/d43f25cc-41c0-40cd-9132-f2f2f97144f6.png",
          badge: "🍎 M1 CHIP"
        },
        { 
          name: "MacBook Air Silver Edition ⚡", 
          description: "✨ Latest macOS • Retina Display • All Day Battery • Perfect Condition", 
          price: "🚀 Lightning Fast Performance!", 
          image: "/lovable-uploads/20c2789a-8f1b-47e5-a148-99072adc5c93.png",
          badge: "⚡ RETINA"
        },
        { 
          name: "MacBook Brand New Sealed 📦", 
          description: "🆕 Factory Sealed • Original Packaging • Full Warranty • Space Gray", 
          price: "🎁 Brand New Guarantee!", 
          image: "/lovable-uploads/be4e9e66-7963-48e2-bcf8-0aab3e2f1f4b.png",
          badge: "🆕 SEALED"
        },
        { 
          name: "MacBook Pro 14-inch 🖥️", 
          description: "💎 Professional Grade • M1 Pro/Max • Liquid Retina XDR • Studio Quality", 
          price: "🏆 Pro Performance Beast!", 
          image: "/lovable-uploads/056de4da-b48e-480b-a7c9-0981544b6f9e.png",
          badge: "💎 PRO MAX"
        }
      ]
    },
    {
      title: "Latest Smartphones",
      description: "📱 Genuine iPhones - Sealed Box with Full Warranty!",
      image: "/lovable-uploads/72e83adb-e9c1-4cf5-a1aa-7aa7496061af.png",
      badge: "📱 GENUINE APPLE",
      products: [
        { 
          name: "iPhone 12 Pro Blue 💙", 
          description: "📦 Brand New Sealed • 128GB Storage • ProRAW Camera System", 
          price: "🎁 Unbeatable Price + Free Case!", 
          image: "/lovable-uploads/72e83adb-e9c1-4cf5-a1aa-7aa7496061af.png",
          badge: "💙 SIERRA BLUE"
        },
        { 
          name: "iPhone 14 Series 🌟", 
          description: "✨ Latest iOS • Advanced Camera • 5G Ready • Full Warranty", 
          price: "🔥 Limited Time Offer!", 
          image: "/lovable-uploads/bac8453a-a012-4148-bb8b-7ef56b418219.png",
          badge: "🌟 HOT DEAL"
        },
        { 
          name: "Samsung Galaxy Z Fold 📱", 
          description: "🔥 Foldable Display • Latest Technology • Premium Design • Like New", 
          price: "💎 Exclusive Foldable Experience!", 
          image: "/lovable-uploads/9cc98078-76e8-4251-baeb-0c672465f81c.png",
          badge: "🔄 FOLDABLE"
        }
      ]
    },
    {
      title: "Tech Accessories & Parts",
      description: "⚙️ Professional Grade Components - Enhance Your Setup!",
      image: "/lovable-uploads/7db2a7ee-43c3-491f-b4c5-a48086e0e291.png",
      badge: "⚙️ PREMIUM PARTS",
      products: [
        { 
          name: "Laptop Cooling System 🌬️", 
          description: "❄️ Professional Grade Fans • Keep Your Laptop Cool • Easy Installation", 
          price: "💨 Cool Performance Guaranteed!", 
          image: "/lovable-uploads/7db2a7ee-43c3-491f-b4c5-a48086e0e291.png",
          badge: "❄️ COOLING EXPERT"
        },
        { 
          name: "Mini Wireless Keyboard K-03 ⌨️", 
          description: "🎯 Ultra-Compact Design • Bluetooth 5.0 • Perfect for Travel", 
          price: "⚡ Instant Productivity Boost!", 
          image: "/lovable-uploads/626ca002-fba4-4226-be5a-783d178998f6.png",
          badge: "⌨️ PORTABLE"
        },
        { 
          name: "High-Speed Network Card 🚀", 
          description: "🌐 2.5G Speed • USB 3.0 • Lightning Fast Internet • Plug & Play", 
          price: "🏃‍♂️ Speed Up Your Connection!", 
          image: "/lovable-uploads/d8a78e1c-7af2-48fa-a696-3a4d24667784.png",
          badge: "🚀 SPEED BOOST"
        },
        { 
          name: "M.2 SSD Enclosure 💾", 
          description: "⚡ USB 3.1 Super Speed • External Storage Solution • Data Transfer Pro", 
          price: "💽 Expand Your Storage Now!", 
          image: "/lovable-uploads/f1c70230-8a0d-479e-a81d-f8b2338964b1.png",
          badge: "💾 STORAGE PRO"
        },
        { 
          name: "Amazon Fire TV Stick 📺", 
          description: "🎬 4K Streaming • Voice Remote • All Apps • Perfect Entertainment", 
          price: "🍿 Stream Everything Now!", 
          image: "/lovable-uploads/73359e0c-afc0-48b8-a3b5-cc9ce6df74db.png",
          badge: "📺 STREAMING"
        },
        { 
          name: "Laptop Parts & Components 🔧", 
          description: "⚙️ Professional Grade Parts • RAM, Storage, Components • Bulk Available", 
          price: "🔧 Upgrade Your System!", 
          image: "/lovable-uploads/bca99ab1-c3a0-4724-988e-bc9cfb975f6b.png",
          badge: "⚙️ COMPONENTS"
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
            🛍️ <span className="text-primary">Premium Tech Store</span> 🛍️
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto animate-fade-in-up mb-6">
            ⚡ <strong>GENUINE PRODUCTS • BEST PRICES • INSTANT DELIVERY • FULL WARRANTY</strong> ⚡
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
              ✅ 100% Authentic Products
            </div>
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
              🚚 Same Day Delivery
            </div>
            <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
              💎 Premium Quality Guaranteed
            </div>
            <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold">
              🔥 Unbeatable Prices
            </div>
          </div>
        </div>

        <div className="space-y-16">
          {productCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex flex-col lg:flex-row items-center gap-12 mb-8 relative">
                <div className="absolute -top-4 -right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse z-10">
                  {category.badge}
                </div>
                <div className="lg:w-1/3 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-xl"></div>
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="relative w-full h-64 object-contain bg-background rounded-lg shadow-2xl hover-scale transition-all duration-300 border-2 border-primary/20"
                  />
                </div>
                <div className="lg:w-2/3">
                  <h3 className="text-3xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {category.title}
                  </h3>
                  <p className="text-xl text-muted-foreground mb-6 font-medium">{category.description}</p>
                  <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    🛒 Shop {category.title} Now!
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
                {category.products.map((product, productIndex) => (
                  <Card key={productIndex} className="card-elevated hover:shadow-2xl transition-all duration-300 hover-scale animate-fade-in group relative overflow-hidden border-2 border-primary/10 hover:border-primary/30">
                    <div className="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse z-10">
                      {product.badge}
                    </div>
                    <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-br from-background to-secondary/10 p-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="relative w-full h-48 object-contain group-hover:scale-110 transition-all duration-500 filter group-hover:brightness-110"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors font-bold bg-gradient-to-r from-foreground to-primary/80 bg-clip-text">
                        {product.name}
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed">{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-2">
                      <div className="mb-4">
                        <span className="text-lg font-bold text-green-600 bg-green-50 px-3 py-2 rounded-lg block text-center animate-pulse">
                          {product.price}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <Button 
                          className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
                          onClick={() => {
                            console.log(`Attempting to contact WhatsApp for ${product.name}`);
                            handleWhatsAppContact(product.name);
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                          <ShoppingCart className="h-5 w-5 mr-2" />
                          🛒 BUY NOW - WhatsApp Us!
                        </Button>
                        <Button 
                          variant="outline"
                          className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 font-semibold py-2 rounded-lg hover:shadow-lg"
                          onClick={() => {
                            console.log(`Attempting to contact WhatsApp for ${product.name}`);
                            handleWhatsAppContact(product.name);
                          }}
                        >
                          <MessageCircle className="h-4 w-4 mr-2" />
                          💬 Ask Questions
                        </Button>
                      </div>
                      <div className="mt-3 text-center">
                        <p className="text-xs text-muted-foreground">
                          ✅ Genuine Product • 🚚 Fast Delivery • 🔒 Secure Payment
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Professional Repair Services Section */}
        <div className="mt-20 bg-gradient-to-br from-primary/5 to-secondary/10 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-4 right-4 bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
            🔧 EXPERT REPAIR SERVICES
          </div>
          
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              🛠️ Professional Laptop Repair Services 🛠️
            </h3>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-medium mb-8">
              ⚡ Expert motherboard repairs • Component-level diagnostics • Data recovery • Hardware upgrades ⚡
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                🔬 Microscopic Precision Repairs
              </div>
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                ⚡ Same Day Turnaround
              </div>
              <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
                💾 Data Recovery Specialists
              </div>
              <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold">
                🛡️ 6-Month Warranty
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Repair Service Cards */}
            <Card className="card-elevated hover:shadow-2xl transition-all duration-300 hover-scale bg-white/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/50">
              <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-br from-background to-secondary/10 p-6">
                <img 
                  src="/lovable-uploads/a16e0419-656b-4e54-bded-e41cd7c8fa0a.png" 
                  alt="Motherboard Repair Service"
                  className="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-110 transition-all duration-500"
                />
                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                  🔬 MICRO REPAIRS
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg font-bold bg-gradient-to-r from-foreground to-primary/80 bg-clip-text">
                  🔧 Motherboard Repair Specialist
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  ✅ Component-level repairs • IC replacement • Circuit tracing • Power delivery fixes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3"
                  onClick={() => handleWhatsAppContact("Motherboard Repair Service")}
                >
                  🔬 Get Expert Diagnosis
                </Button>
              </CardContent>
            </Card>

            <Card className="card-elevated hover:shadow-2xl transition-all duration-300 hover-scale bg-white/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/50">
              <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-br from-background to-secondary/10 p-6">
                <img 
                  src="/lovable-uploads/ac73be9b-e85a-4e7a-9b2e-8f6e654f3c8b.png" 
                  alt="Professional Repair Workstation"
                  className="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-110 transition-all duration-500"
                />
                <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                  ⚡ PROFESSIONAL
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg font-bold bg-gradient-to-r from-foreground to-primary/80 bg-clip-text">
                  🏭 Professional Workstation Setup
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  🔬 Advanced diagnostic tools • Clean room environment • ESD-safe procedures
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3"
                  onClick={() => handleWhatsAppContact("Professional Repair Service")}
                >
                  🏭 Book Professional Service
                </Button>
              </CardContent>
            </Card>

            <Card className="card-elevated hover:shadow-2xl transition-all duration-300 hover-scale bg-white/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/50">
              <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-br from-background to-secondary/10 p-6">
                <img 
                  src="/lovable-uploads/3ce31378-0201-4bd9-a951-c8e21d97c739.png" 
                  alt="HP EliteBook 840 G2 Repair"
                  className="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-110 transition-all duration-500"
                />
                <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                  💼 BUSINESS
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg font-bold bg-gradient-to-r from-foreground to-primary/80 bg-clip-text">
                  💼 Business Laptop Specialists
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  🚀 HP EliteBook • Dell Latitude • Lenovo ThinkPad • Enterprise-grade repairs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-3"
                  onClick={() => handleWhatsAppContact("Business Laptop Repair")}
                >
                  💼 Enterprise Support
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Additional Repair Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="card-elevated hover:shadow-2xl transition-all duration-300 hover-scale bg-white/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/50">
              <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-br from-background to-secondary/10 p-6">
                <img 
                  src="/lovable-uploads/6a934679-7118-4dc6-aea6-4da7fdfc23cb.png" 
                  alt="Motherboard Component Repair"
                  className="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-110 transition-all duration-500"
                />
                <div className="absolute top-2 right-2 bg-cyan-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                  🔬 MICRO-LEVEL
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg font-bold bg-gradient-to-r from-foreground to-primary/80 bg-clip-text">
                  🔬 Advanced Component Repair
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  ⚡ Micro-level repairs • BGA reballing • Component replacement • Circuit diagnostics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white font-bold py-3"
                  onClick={() => handleWhatsAppContact("Advanced Component Repair")}
                >
                  🔬 Micro Repair Service
                </Button>
              </CardContent>
            </Card>

            <Card className="card-elevated hover:shadow-2xl transition-all duration-300 hover-scale bg-white/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/50">
              <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-br from-background to-secondary/10 p-6">
                <img 
                  src="/lovable-uploads/0a17b30c-e447-4d85-b220-588b276fdfea.png" 
                  alt="Motherboard Memory Repair"
                  className="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-110 transition-all duration-500"
                />
                <div className="absolute top-2 right-2 bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                  💚 MEMORY
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg font-bold bg-gradient-to-r from-foreground to-primary/80 bg-clip-text">
                  💚 Memory & Storage Repair
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  📦 RAM slot repair • Storage controller fixes • Data recovery • Performance optimization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold py-3"
                  onClick={() => handleWhatsAppContact("Memory Storage Repair")}
                >
                  💚 Memory Repair Service
                </Button>
              </CardContent>
            </Card>

            <Card className="card-elevated hover:shadow-2xl transition-all duration-300 hover-scale bg-white/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/50">
              <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-br from-background to-secondary/10 p-6">
                <img 
                  src="/lovable-uploads/7ce5c41c-df7c-444f-bd6e-f5ec16f6317a.png" 
                  alt="Dell Laptop Internal Repair"
                  className="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-110 transition-all duration-500"
                />
                <div className="absolute top-2 right-2 bg-indigo-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                  🔋 INTERNAL
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg font-bold bg-gradient-to-r from-foreground to-primary/80 bg-clip-text">
                  🔋 Internal Component Service
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  🔧 Battery replacement • Internal cleaning • Thermal management • Complete overhaul
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold py-3"
                  onClick={() => handleWhatsAppContact("Internal Component Service")}
                >
                  🔋 Internal Service
                </Button>
              </CardContent>
            </Card>

            <Card className="card-elevated hover:shadow-2xl transition-all duration-300 hover-scale bg-white/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/50">
              <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-br from-background to-secondary/10 p-6">
                <img 
                  src="/lovable-uploads/92f39cad-902c-475b-925a-9e882609b31d.png" 
                  alt="HP ENVY Premium Repair"
                  className="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-110 transition-all duration-500"
                />
                <div className="absolute top-2 right-2 bg-rose-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                  ✨ PREMIUM
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg font-bold bg-gradient-to-r from-foreground to-primary/80 bg-clip-text">
                  ✨ Premium Laptop Service
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  💎 High-end laptop repairs • ENVY series • Premium care • White glove service
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white font-bold py-3"
                  onClick={() => handleWhatsAppContact("Premium Laptop Service")}
                >
                  ✨ Premium Service
                </Button>
              </CardContent>
            </Card>

            <Card className="card-elevated hover:shadow-2xl transition-all duration-300 hover-scale bg-white/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/50">
              <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-br from-background to-secondary/10 p-6">
                <img 
                  src="/lovable-uploads/72d9cb5d-07b7-4b43-9ef5-c00c5f8c2c8c.png" 
                  alt="HP Laptop Professional Repair"
                  className="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-110 transition-all duration-500"
                />
                <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                  🔧 REPAIR
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg font-bold bg-gradient-to-r from-foreground to-primary/80 bg-clip-text">
                  🔧 HP Professional Repair
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  🛠️ Complete disassembly • Component diagnostics • HP specialist service • Full restoration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white font-bold py-3"
                  onClick={() => handleWhatsAppContact("HP Professional Repair")}
                >
                  🔧 HP Repair Service
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h4 className="text-2xl font-bold text-foreground mb-4">🏆 Why Choose Our Repair Services? 🏆</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border-2 border-primary/20">
                <div className="text-3xl mb-2">🔬</div>
                <h5 className="font-bold text-foreground mb-2">Microscopic Precision</h5>
                <p className="text-sm text-muted-foreground">Component-level repairs with professional equipment</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border-2 border-primary/20">
                <div className="text-3xl mb-2">⚡</div>
                <h5 className="font-bold text-foreground mb-2">Lightning Fast</h5>
                <p className="text-sm text-muted-foreground">Most repairs completed same day</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border-2 border-primary/20">
                <div className="text-3xl mb-2">🛡️</div>
                <h5 className="font-bold text-foreground mb-2">6-Month Warranty</h5>
                <p className="text-sm text-muted-foreground">Full warranty on all repair work</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border-2 border-primary/20">
                <div className="text-3xl mb-2">💾</div>
                <h5 className="font-bold text-foreground mb-2">Data Recovery</h5>
                <p className="text-sm text-muted-foreground">Specialized in recovering important data</p>
              </div>
            </div>
            
            <Button 
              className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold px-12 py-4 text-lg rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              onClick={() => handleWhatsAppContact("Repair Services Consultation")}
            >
              🚨 GET INSTANT REPAIR QUOTE! 🚨
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};