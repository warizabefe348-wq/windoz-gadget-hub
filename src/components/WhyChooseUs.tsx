import { Shield, Award, DollarSign, Headphones } from "lucide-react";

export const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Wide Range of Gadgets",
      description: "Extensive selection from trusted brands like HP, Dell, Apple, Samsung, and more"
    },
    {
      icon: Award,
      title: "Professional Expertise",
      description: "Certified IT consultants and experienced technicians at your service"
    },
    {
      icon: DollarSign,
      title: "Affordable Prices",
      description: "Competitive pricing with warranty protection on all products"
    },
    {
      icon: Headphones,
      title: "Fast Customer Support",
      description: "Reliable and quick customer support whenever you need assistance"
    }
  ];

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="text-primary">Windoz Tech</span>?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We're committed to providing exceptional service and quality products that exceed your expectations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group">
              <div className="mx-auto w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors glow">
                <reason.icon className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};