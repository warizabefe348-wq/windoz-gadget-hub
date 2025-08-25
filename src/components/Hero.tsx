import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import heroImage from "@/assets/hero-tech.jpg";
import laptopHero from "@/assets/laptop-hero.jpg";
import smartphoneHero from "@/assets/smartphone-hero.jpg";
import accessoriesHero from "@/assets/accessories-hero.jpg";

export const Hero = () => {
  const slides = [
    {
      image: heroImage,
      title: "Your Trusted Partner in",
      highlight: "Technology & Gadgets",
      description: "Sales, repairs, and IT solutions you can rely on in Lagos"
    },
    {
      image: laptopHero,
      title: "Premium",
      highlight: "Laptops & Computers",
      description: "High-performance laptops and desktops from top brands"
    },
    {
      image: smartphoneHero,
      title: "Latest",
      highlight: "Smartphones & Devices",
      description: "Cutting-edge mobile technology at competitive prices"
    }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      <Carousel className="w-full h-screen" opts={{ loop: true, duration: 30 }}>
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative min-h-screen flex items-center justify-center">
                <div 
                  className="absolute inset-0 z-0"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <div className="absolute inset-0 hero-gradient opacity-80"></div>
                </div>
                
                <div className="relative z-10 container mx-auto px-4 text-center">
                  <div className="max-w-4xl mx-auto animate-fade-in">
                    <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
                      {slide.title} 
                      <span className="accent-gradient bg-clip-text text-transparent"> {slide.highlight}</span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
                      {slide.description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <Button 
                        size="lg" 
                        variant="secondary"
                        className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg glow"
                      >
                        <ShoppingCart className="mr-2 h-5 w-5" />
                        Shop Now
                      </Button>
                      
                      <Button 
                        size="lg" 
                        variant="outline"
                        className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-4 text-lg"
                      >
                        Contact Us
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-background/20 border-primary-foreground text-primary-foreground hover:bg-background/40" />
        <CarouselNext className="right-4 bg-background/20 border-primary-foreground text-primary-foreground hover:bg-background/40" />
      </Carousel>
    </section>
  );
};