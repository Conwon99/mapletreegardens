import { Button } from "@/components/ui/button";
import { ArrowRight, Scissors, TreePine, Hammer, Trash2 } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import { trackServiceClick } from "@/utils/analytics";

const ServicesGrid = () => {
  const services = [
    {
      title: "Lawn Mowing & Grass Cutting",
      description: "Professional lawn care and garden maintenance in Troon & Ayrshire",
      features: ["Regular lawn mowing service", "Garden edge trimming", "Grass collection & disposal", "Seasonal lawn treatments"],
      image: "/lovable-uploads/lawnmower.webp",
      fallbackImage: "/lovable-uploads/lawnmower.jpg",
      icon: Scissors,
      color: "grass-green"
    },
    {
      title: "Tree Surgery & Removal", 
      description: "Safe tree cutting, pruning and removal services across Ayrshire",
      features: ["Professional tree removal", "Storm damage tree work", "Stump grinding service", "Complete site cleanup"],
      image: "/lovable-uploads/treecutting.webp",
      fallbackImage: "/lovable-uploads/treecutting.jpg",
      icon: TreePine,
      color: "sky-blue"
    },
    {
      title: "Hedge Cutting & Trimming",
      description: "Expert hedge maintenance and garden boundary work",
      features: ["Professional hedge cutting", "Hedge shaping & maintenance", "Height reduction service", "Garden debris removal"],
      image: "/lovable-uploads/hedge2.webp",
      fallbackImage: "/lovable-uploads/hedge2.jpg",
      icon: Scissors,
      color: "donut-pink"
    },
    {
      title: "Garden Strimming & Edging",
      description: "Detailed garden maintenance and precision edge work",
      features: ["Pathway & border edging", "Around garden obstacles", "Hard-to-reach areas", "Professional finishing"],
      image: "/lovable-uploads/garden1.webp",
      fallbackImage: "/lovable-uploads/garden1.jpg",
      icon: Scissors,
      color: "sunshine-yellow"
    }
  ];

  const handleQuoteClick = (serviceTitle: string) => {
    trackServiceClick(serviceTitle, 'services_grid');
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-background to-[hsl(var(--muted))]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-[hsl(var(--asphalt-grey))] mb-6">
            Our Services
          </h2>
          <p className="text-xl text-[hsl(var(--asphalt-grey))] max-w-3xl mx-auto">
            Professional <a href="/tree-surgery" className="text-[hsl(var(--grass-green))] hover:underline font-semibold">tree surgery</a>, garden maintenance, <a href="/lawn-mowing" className="text-[hsl(var(--grass-green))] hover:underline font-semibold">hedge cutting</a>, and <a href="/lawn-mowing" className="text-[hsl(var(--grass-green))] hover:underline font-semibold">lawn care services</a> in Troon, Ayr, Prestwick, Dundonald, and across Ayrshire. From regular lawn mowing and tree pruning to emergency tree removal and storm damage cleanup, we provide reliable, qualified garden care with free quotes. <a href="/troon" className="text-[hsl(var(--grass-green))] hover:underline font-semibold">Learn more about our Troon services</a>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-service group">
              {/* Service Image */}
              <div className="relative mb-6 rounded-2xl overflow-hidden">
                <LazyImage
                  src={service.image}
                  alt={`Professional ${service.title.toLowerCase()} service in Troon, Ayrshire - expert garden maintenance and tree surgery`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  fallbackSrc={service.fallbackImage}
                />
                <div className={`absolute top-4 left-4 w-12 h-12 bg-[hsl(var(--${service.color}))] rounded-full flex items-center justify-center shadow-lg`}>
                  <service.icon className="w-6 h-6 text-[hsl(var(--asphalt-grey))]" />
                </div>
              </div>

              {/* Service Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm text-[hsl(var(--asphalt-grey))]">
                      <div className="w-1.5 h-1.5 bg-[hsl(var(--grass-green))] rounded-full mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  onClick={() => handleQuoteClick(service.title)}
                  className="w-full bg-[hsl(var(--grass-green))] hover:bg-[hsl(var(--grass-green))] hover:opacity-90 text-white font-semibold rounded-full group/button"
                >
                  Request a Quote
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;