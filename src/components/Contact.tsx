import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Store",
      details: "Tele/Oraimo Plaza, No. 5 Saka Tinubu Street, Victoria Island, Lagos, Nigeria",
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+234 705 978 1334 (Call) | +234 813 931 6493 (WhatsApp)",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "Windozosynachi1@gmail.com",
      action: "Send Email"
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", href: "#" },
    { icon: Instagram, name: "Instagram", href: "#" },
    { icon: MessageCircle, name: "WhatsApp", href: "https://wa.me/2348139316493" }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to upgrade your tech? Contact us today for expert advice and premium products
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="card-elevated hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <info.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4 leading-relaxed">
                  {info.details}
                </CardDescription>
                <Button variant="outline" className="w-full">
                  {info.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-6">Follow Us</h3>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="outline"
                size="lg"
                className="w-14 h-14 rounded-full p-0"
                asChild
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.name}</span>
                </a>
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-16 p-8 bg-primary/5 rounded-lg text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-4">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-6">
            Visit our showroom in Victoria Island or contact us for personalized recommendations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <MapPin className="mr-2 h-5 w-5" />
              Visit Showroom
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open('https://wa.me/2348139316493', '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};