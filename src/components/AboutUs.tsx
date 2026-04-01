import { Award, Users, Clock, Leaf } from "lucide-react";
import LazyImage from "@/components/LazyImage";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-primary">
              <Leaf className="w-6 h-6" />
              <span className="font-semibold text-sm tracking-wide uppercase">
                About Maple Tree & Gardens
              </span>
            </div>

            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground leading-tight">
              Tree Surgeon & Gardener in Troon Since 2004
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We've been doing tree surgery and garden work in Troon and Ayrshire for over 20 years. That means we know the coastal wind, the soil in Barassie and Loans, and when the leylandii usually need a cut. We do <a href="/tree-surgery" className="text-primary hover:underline font-semibold">tree surgery</a>, <a href="/lawn-mowing" className="text-primary hover:underline font-semibold">lawn care</a>, hedge cutting, and general garden maintenance across Troon, Dundonald, Prestwick and Ayr. Storm damage? We can help with emergency tree removal too. <a href="/troon" className="text-primary hover:underline font-semibold">See what we do in Troon</a>.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Fully Qualified Arborist</h3>
                  <p className="text-sm text-muted-foreground">20+ years tree surgery expertise</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">500+ Happy Customers</h3>
                  <p className="text-sm text-muted-foreground">Regulars across Troon and Ayrshire</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">PA1 & PA6 Certified</h3>
                  <p className="text-sm text-muted-foreground">Safe pesticide application</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Leaf className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">NPTC Qualified</h3>
                  <p className="text-sm text-muted-foreground">City & Guilds certified</p>
                </div>
              </div>
            </div>

            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-2 font-medium transition-colors"
            >
              Get a Free Quote
            </a>
          </div>

          {/* Image */}
          <div className="relative flex flex-col justify-start pt-8">
            <div className="relative">
              <LazyImage
                src="/aboutimg.webp"
                alt="Gordon, tree surgeon and gardener in Troon, Maple Tree & Gardens"
                className="w-full h-auto max-h-[450px] object-contain rounded-2xl"
                fallbackSrc="/aboutimg.png"
              />
              <div className="absolute top-6 right-6 bg-primary text-primary-foreground rounded-xl px-4 py-3 shadow-lg">
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;