import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { openWhatsApp } from "@/utils/whatsapp";

export const Footer = () => {
  const handleCall = () => {
    window.open('tel:+2347059781334', '_self');
  };

  const handleWhatsApp = () => {
    const message = "Hi! I would like to know more about your services.";
    openWhatsApp('2348139316493', message);
  };

  const handleEmail = () => {
    window.open('mailto:info@windoztech.com', '_self');
  };

  return (
    <footer className="bg-card border-t animate-fade-in">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/f140baa2-b5bd-42f0-90e4-ba9c518a9342.png" 
                alt="Windoz Tech Global Gadgets" 
                className="h-12 w-auto hover-scale"
              />
              <div>
                <h3 className="text-lg font-bold text-primary">Windoz Tech</h3>
                <p className="text-sm text-muted-foreground">Global Gadgets</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for premium tech products and professional services. 
              Quality guaranteed, customer satisfaction is our priority.
            </p>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="p-2">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="p-2">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="p-2">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="p-2">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors story-link">Home</a></li>
              <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors story-link">About Us</a></li>
              <li><a href="/services" className="text-muted-foreground hover:text-primary transition-colors story-link">Services</a></li>
              <li><a href="/products" className="text-muted-foreground hover:text-primary transition-colors story-link">Products</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors story-link">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Our Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Computer Sales & Repair</li>
              <li>Mobile Phone Services</li>
              <li>Data Recovery</li>
              <li>Software Installation</li>
              <li>Network Setup</li>
              <li>Tech Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">+234 705 978 1334</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">+234 813 931 6493</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">info@windoztech.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span className="text-sm text-muted-foreground">Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">Mon - Sat: 9AM - 6PM</span>
              </div>
            </div>
            
            <div className="flex gap-2 pt-2">
              <Button size="sm" onClick={handleCall} className="flex-1">
                <Phone className="h-4 w-4 mr-2" />
                Call
              </Button>
              <Button size="sm" variant="outline" onClick={handleWhatsApp} className="flex-1">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Windoz Tech Global Gadgets. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};