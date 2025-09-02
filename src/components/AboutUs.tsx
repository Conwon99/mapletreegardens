import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Leaf } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
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
                in Troon, Dundonald & Prestwick Since 2004
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 20 years of experience serving Troon, Dundonald, and Prestwick, 
                we're the trusted local experts for professional garden maintenance, tree surgery, 
                and landscaping services. We also provide tree work services in Ayr, though garden 
                maintenance is currently limited to our primary service areas. Our team combines 
                traditional gardening expertise with modern techniques to deliver exceptional results.
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
                  <h3 className="font-semibold text-foreground">Fully Qualified Arborist</h3>
                  <p className="text-sm text-muted-foreground">20+ years of professional tree surgery expertise</p>
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
                  <h3 className="font-semibold text-foreground">Fully Qualified Pesticide Pro</h3>
                  <p className="text-sm text-muted-foreground">PA1 & PA6 certified operator for safe pesticide applications</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Leaf className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">NPTC Qualified</h3>
                  <p className="text-sm text-muted-foreground">City & Guilds NPTC certified for professional standards</p>
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
          <div className="relative flex flex-col justify-start pt-8">
            <div className="relative">
              <img
                src="/aboutimg.png"
                alt="Gordon from Maple Tree & Gardening Services with his family"
                className="w-full h-auto max-h-[450px] object-contain rounded-2xl"
              />
              
              {/* Experience Badge */}
              <div className="absolute top-6 right-6 bg-primary text-primary-foreground rounded-xl px-4 py-3 shadow-lg">
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm">Years</div>
              </div>
            </div>

            {/* NPTC Qualification Image */}
            <div className="pt-8">
              <div className="bg-muted/20 rounded-lg p-6 text-center">
                <h3 className="font-semibold text-lg text-foreground mb-0">Professional Qualifications</h3>
                <img
                  src="/lovable-uploads/Lowe-Maintenance-City-Guilds-NPTC-Qualifications.jpg"
                  alt="NPTC City & Guilds Qualifications"
                  className="w-full max-w-md mx-auto h-auto rounded-lg mt-4"
                />
                <p className="text-sm text-muted-foreground mt-3">
                  NPTC certified for professional tree surgery and garden maintenance standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;