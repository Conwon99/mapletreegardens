import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import { trackPhoneCall, trackQuoteRequest } from "@/utils/analytics";

const Hero = () => {
  const handleCallClick = () => {
    trackPhoneCall('hero_section');
    window.location.href = "tel:+447853224528";
  };

  const handleQuoteClick = () => {
    trackQuoteRequest('scroll_to_form', []);
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="bg-background min-h-screen flex items-center py-8 px-4 pt-24 sm:py-12 sm:pt-28 md:py-16 md:pt-28 lg:py-20 lg:pt-32">
      <div className="container mx-auto max-w-7xl overflow-x-hidden">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content – on mobile: welcome, h1, CTA (above fold), then rest */}
          <div className="text-left space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="flex items-center gap-2 text-primary">
              <span className="text-xl sm:text-2xl">🌳</span>
              <span className="font-semibold text-xs sm:text-sm tracking-wide uppercase">
                Welcome to Maple Tree & Gardening Services
              </span>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
              Professional{" "}
              <span className="text-primary">Tree Surgeon & Gardener</span>{" "}
              in Troon & Ayrshire
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground font-medium max-w-lg leading-relaxed">
              Fully qualified arborist with 20+ years experience. Expert <a href="/tree-surgery" className="text-primary hover:underline font-semibold">tree surgery</a>, garden maintenance, 
              <a href="/lawn-mowing" className="text-primary hover:underline font-semibold"> lawn care</a>, and hedge cutting services in Troon, Dundonald, Prestwick & across Ayrshire. Emergency tree removal and tree work also available in Ayr. Free quotes, fully insured.
            </p>

            {/* CTA – under the subtext */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                onClick={handleQuoteClick}
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg px-8 py-5 sm:px-10 sm:py-6 h-auto rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-h-[48px] touch-manipulation"
              >
                Get Free Quote
              </Button>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-6 sm:gap-8 pt-6 sm:pt-8">
              <div className="space-y-1 sm:space-y-2">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">20+</div>
                <div className="text-muted-foreground font-medium text-sm sm:text-base">Years Experience</div>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">500+</div>
                <div className="text-muted-foreground font-medium text-sm sm:text-base">Happy Customers</div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-border">
              <Button 
                onClick={handleCallClick}
                variant="ghost" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg px-4 py-3 justify-start"
              >
                <Phone className="w-5 h-5" />
                Call: 07853 224528
              </Button>
            </div>
          </div>

          {/* Hero Images – smaller on mobile so text + CTA stay above fold */}
          <div className="flex justify-center lg:justify-end -mt-8 sm:-mt-12 lg:-mt-16">
            <LazyImage
              src="/hero window.webp"
              alt="Professional tree surgeon Gordon cutting large oak tree in Troon garden with hedge trimming and lawn care services in Ayrshire"
              className="w-full max-w-4xl h-[220px] sm:h-[320px] md:h-[420px] lg:h-[700px] xl:h-[850px] object-contain"
              fallbackSrc="/hero window.png"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;