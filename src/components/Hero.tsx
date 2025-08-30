import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-garden.jpg";

const Hero = () => {
  const handleCallClick = () => {
    window.location.href = "tel:+447853224528";
  };

  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/447853224528?text=Hi%20Gordon,%20I'd%20like%20a%20free%20quote%20for%20my%20garden";
  };

  const handleQuoteClick = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="bg-background min-h-screen flex items-center py-20 px-4 pt-32">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-left space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-primary">
                <span className="text-2xl">🌳</span>
                <span className="font-semibold text-sm tracking-wide uppercase">
                  Welcome to Maple Tree & Gardening Services
                </span>
              </div>
              
              <h1 className="font-display font-bold text-5xl lg:text-6xl text-foreground leading-tight">
                Professional{" "}
                <span className="text-primary">Garden Services</span>{" "}
                in Troon & Ayrshire
              </h1>
              
              <p className="text-xl text-muted-foreground font-medium max-w-lg leading-relaxed">
                Expert tree surgery, garden maintenance, hedge cutting, and landscaping services 
                across Troon, Ayr, Prestwick, and Ayrshire. Free quotes, Fully Qualified Arborist, 15+ years experience.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={handleQuoteClick}
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-6 h-auto rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Get Free Quote
              </Button>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="space-y-2">
                <div className="text-4xl lg:text-5xl font-bold text-primary">15+</div>
                <div className="text-muted-foreground font-medium">Years Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl lg:text-5xl font-bold text-primary">500+</div>
                <div className="text-muted-foreground font-medium">Happy Customers</div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
              <Button 
                onClick={handleCallClick}
                variant="ghost" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg px-4 py-3 justify-start"
              >
                <Phone className="w-5 h-5" />
                Call: 07853 224528
              </Button>
              <Button 
                onClick={handleWhatsAppClick}
                variant="ghost" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg px-4 py-3 justify-start"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Hero Images */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/hero window.png"
              alt="Professional tree and gardening services in Troon, Ayrshire"
              className="w-full max-w-4xl h-[800px] lg:h-[900px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;