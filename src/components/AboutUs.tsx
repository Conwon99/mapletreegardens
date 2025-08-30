import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Leaf } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-primary">
                <Leaf className="w-6 h-6" />
                <span className="font-semibold text-sm tracking-wide uppercase">
                  About Maple Tree & Gardening Services
                </span>
              </div>
              
              <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground leading-tight">
                Trusted{" "}
                <span className="text-primary">Garden Services</span>{" "}
                in Ayrshire Since 2009
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 15 years of experience serving Troon, Ayr, Prestwick, and across Ayrshire, 
                we're the trusted local experts for professional garden maintenance, tree surgery, 
                and landscaping services. Our team combines traditional gardening expertise with 
                modern techniques to deliver exceptional results.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                From regular lawn mowing and hedge cutting to emergency tree removal and complete 
                garden transformations, we take pride in our attention to detail and commitment 
                to exceeding expectations. Every project is approached with the same level of 
                care and professionalism.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">15+ Years Experience</h3>
                  <p className="text-sm text-muted-foreground">Proven expertise in all aspects of gardening</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">500+ Happy Customers</h3>
                  <p className="text-sm text-muted-foreground">Trusted by families across Ayrshire</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Reliable Service</h3>
                  <p className="text-sm text-muted-foreground">On-time, professional, and dependable</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Leaf className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Eco-Friendly</h3>
                  <p className="text-sm text-muted-foreground">Sustainable practices for a greener future</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button 
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Learn More About Our Services
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="/lovable-uploads/5314906b-f385-471d-9ac6-f3b6a8c923f5.png"
              alt="Gordon from Maple Tree & Gardening Services with his family"
              className="w-full h-[350px] lg:h-[450px] object-contain"
            />
            
            {/* Experience Badge */}
            <div className="absolute top-6 right-6 bg-primary text-primary-foreground rounded-xl px-4 py-3 shadow-lg">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm">Years</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;