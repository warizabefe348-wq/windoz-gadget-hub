import { Building2, Users, Award, Wrench } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Building2,
      title: "Victoria Island Location",
      description: "Conveniently located in the heart of Lagos business district"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Professional IT consultants and certified technicians"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Top-quality technology solutions with warranty"
    },
    {
      icon: Wrench,
      title: "Complete Service",
      description: "Sales, repairs, upgrades, and ongoing support"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">Windoz Tech Global Gadgets</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Windoz Tech Global Gadgets is a leading electronics and IT service company located in Victoria Island, Lagos. 
            We specialize in the sales of laptops, smartphones, and accessories, as well as offering professional IT consulting, 
            software upgrades, and hardware repairs. Our mission is to provide customers with affordable, reliable, 
            and top-quality technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center group">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <highlight.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{highlight.title}</h3>
              <p className="text-muted-foreground">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};