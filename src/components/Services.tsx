import { Laptop, Smartphone, Wrench, Monitor, HeadphonesIcon, Car } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      icon: Laptop,
      title: "Laptop Sales",
      description: "All major brands: HP, Dell, Lenovo, MacBook, and more. New and refurbished options available.",
      features: ["HP Pavilion Series", "Dell Inspiron & XPS", "Lenovo ThinkPad", "Apple MacBook Air & Pro"]
    },
    {
      icon: Smartphone,
      title: "Smartphones & Accessories",
      description: "Latest smartphones and essential accessories from trusted brands.",
      features: ["iPhone latest models", "Samsung Galaxy Series", "Infinix & Tecno Phones", "Chargers, cases, headsets"]
    },
    {
      icon: Wrench,
      title: "Computer Repairs & Support",
      description: "Professional hardware and software repair services with quick turnaround.",
      features: ["Hardware diagnostics", "Software troubleshooting", "Data recovery", "System optimization"]
    },
    {
      icon: Monitor,
      title: "Windows & macOS Upgrades",
      description: "Keep your systems updated with the latest operating system versions.",
      features: ["OS installation", "System migration", "Driver updates", "Performance optimization"]
    },
    {
      icon: HeadphonesIcon,
      title: "IT Consultancy & Support",
      description: "Professional IT consulting for businesses and individuals.",
      features: ["Network setup", "Security audits", "System planning", "Ongoing support"]
    },
    {
      icon: Car,
      title: "Auto Dealership",
      description: "Expanding our services to include automotive solutions.",
      features: ["Vehicle consultation", "Auto financing", "Trade-in services", "Maintenance referrals"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to meet your personal and business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-elevated hover:shadow-lg transition-shadow group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};