import { Button } from "@/components/ui/button";
import { ArrowRight, Scissors, TreePine } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import { trackServiceClick } from "@/utils/analytics";

import { services as servicesData } from "@/data/services";

const ServicesGrid = () => {
  const services = [
    { ...servicesData[0], icon: Scissors, color: "grass-green" },
    { ...servicesData[1], icon: TreePine, color: "sky-blue" },
    { ...servicesData[2], icon: Scissors, color: "donut-pink" },
    { ...servicesData[3], icon: Scissors, color: "sunshine-yellow" },
  ].map((s) => ({
    ...s,
    title: s.title,
    description: s.shortDescription,
    features: s.features,
    image: s.image,
    fallbackImage: s.fallbackImage,
  }));

  const handleQuoteClick = (e: React.MouseEvent, serviceTitle: string) => {
    e.preventDefault();
    e.stopPropagation();
    trackServiceClick(serviceTitle, 'services_grid');
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-background to-[hsl(var(--muted))]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-[hsl(var(--asphalt-grey))] mb-6">
            What We Do in Troon & Ayrshire
          </h2>
          <p className="text-xl text-[hsl(var(--asphalt-grey))] max-w-3xl mx-auto">
            Whether you need a one-off tree job or someone to keep the lawn and hedges under control, we cover it. Tree surgeon and gardener services in Troon, Prestwick, Ayr, Dundonald and across Ayrshire. <a href="/tree-surgery" className="text-[hsl(var(--grass-green))] hover:underline font-semibold">Tree surgery</a>, <a href="/lawn-mowing" className="text-[hsl(var(--grass-green))] hover:underline font-semibold">lawn mowing</a>, <a href="/hedge-cutting" className="text-[hsl(var(--grass-green))] hover:underline font-semibold">hedge cutting</a>, and <a href="/garden-strimming" className="text-[hsl(var(--grass-green))] hover:underline font-semibold">garden strimming</a>. Free quotes, no obligation. <a href="/services" className="text-[hsl(var(--grass-green))] hover:underline font-semibold">See all services</a> or <a href="/troon" className="text-[hsl(var(--grass-green))] hover:underline font-semibold">Troon area info</a>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-service group">
              <a
                href={`/${service.slug}`}
                className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--grass-green))] focus-visible:ring-offset-2 rounded-2xl"
              >
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
                    <h2 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-2">
                      {service.title}
                    </h2>
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

                  <span className="inline-flex items-center gap-2 text-[hsl(var(--grass-green))] font-semibold group-hover:gap-3 transition-all">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </a>

              {/* Request a Quote - outside link so card link and button are separate */}
              <div className="mt-4">
                <Button
                  type="button"
                  onClick={(e) => handleQuoteClick(e, service.title)}
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