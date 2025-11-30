import { Button } from "@/components/ui/button";
import { ArrowRight, Scissors, TreePine, Hammer, Trash2 } from "lucide-react";
import gardeningImage from "@/assets/service-gardening.jpg";
import treeWorkImage from "@/assets/service-tree-work.jpg";
import fencingImage from "@/assets/service-fencing.jpg";
import clearoutsImage from "@/assets/service-clearouts.jpg";

const ServicesGrid = () => {
  const services = [
    {
      title: "Grass Cutting",
      description: "Professional lawn maintenance and care",
      features: ["Regular lawn cuts", "Edging & treatments", "Strimming services", "Seasonal maintenance"],
      image: gardeningImage,
      icon: Scissors,
      color: "grass-green"
    },
    {
      title: "Tree Removal", 
      description: "Professional tree care and removal services",
      features: ["Safe tree removals", "Storm clean-ups", "Pruning & crown lifts", "Stump arrangements"],
      image: treeWorkImage,
      icon: TreePine,
      color: "sky-blue"
    },
    {
      title: "Hedge Cutting",
      description: "Expert hedge trimming and maintenance",
      features: ["Hedge trimming", "Hedge reductions", "Shaping & maintenance", "Professional finish"],
      image: fencingImage,
      icon: Hammer,
      color: "donut-pink"
    },
    {
      title: "Strimming",
      description: "Precise strimming and edge work",
      features: ["Precision strimming", "Edge work", "Hard to reach areas", "Professional finish"],
      image: clearoutsImage,
      icon: Trash2,
      color: "sunshine-yellow"
    }
  ];

  const handleQuoteClick = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-[hsl(var(--asphalt-grey))] mb-6">
            Our Services
          </h2>
          <p className="text-xl text-[hsl(var(--asphalt-grey))] max-w-3xl mx-auto">
            From one-off tidy-ups to regular maintenance and small tree jobs, Maple Tree & Gardening Services keeps your outdoor space looking its best—without the stress.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-service group">
              {/* Service Image */}
              <div className="relative mb-6 rounded-2xl overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} service in Troon and Ayrshire`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
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
                  onClick={handleQuoteClick}
                  className={`w-full bg-[hsl(var(--${service.color}))] hover:bg-[hsl(var(--${service.color}))] hover:opacity-90 text-[hsl(var(--asphalt-grey))] font-semibold rounded-full group/button`}
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