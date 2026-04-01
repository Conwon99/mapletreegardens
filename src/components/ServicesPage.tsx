import { ArrowRight } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import { services } from "@/data/services";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-br from-[hsl(var(--grass-green))] to-[hsl(var(--sky-blue))] text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="font-display text-4xl lg:text-6xl font-bold mb-6">
            Tree Surgery, Lawn Care & Garden Services in Troon
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            From one-off tree jobs to regular lawn and hedge work, we cover it. Pick a service below for more detail and a free quote. Troon, Prestwick, Ayr and across Ayrshire.
          </p>
        </div>
      </section>

      {/* Services grid - links to each service page */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-[hsl(var(--muted))]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <a
                key={service.slug}
                href={`/${service.slug}`}
                className="card-service group block"
              >
                <div className="relative mb-6 rounded-2xl overflow-hidden">
                  <LazyImage
                    src={service.image}
                    alt={`${service.title} in Troon & Ayrshire`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    fallbackSrc={service.fallbackImage}
                  />
                </div>
                <div className="space-y-4">
                  <h2 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))]">
                    {service.title}
                  </h2>
                  <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                    {service.shortDescription}
                  </p>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-[hsl(var(--asphalt-grey))]"
                      >
                        <span className="w-1.5 h-1.5 bg-[hsl(var(--grass-green))] rounded-full mt-2 flex-shrink-0" />
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
            ))}
          </div>
        </div>
      </section>

      {/* Helpful content (reduce “thin content” and improve relevance) */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-5">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[hsl(var(--asphalt-grey))]">
                How to choose the right service
              </h2>
              <div className="text-[hsl(var(--asphalt-grey))] opacity-90 leading-relaxed space-y-4">
                <p>
                  If you’re not sure where to start, tell us what you want the end result to look like. We’ll recommend the simplest option and quote clearly.
                  A lot of jobs overlap — for example, a hedge cut often needs strimming and edging after, and tree work can open up more light for a healthier lawn.
                </p>
                <p>
                  We work across Troon, Prestwick, Ayr and the wider Ayrshire area. Expect a tidy finish, clear communication, and free, no-obligation quotes.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg border border-border p-8">
              <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                What affects the price?
              </h3>
              <ul className="space-y-3 text-[hsl(var(--asphalt-grey))] opacity-90">
                <li className="flex items-start gap-3"><span className="w-2 h-2 bg-[hsl(var(--grass-green))] rounded-full mt-2 flex-shrink-0" />Size and scope of the job</li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 bg-[hsl(var(--grass-green))] rounded-full mt-2 flex-shrink-0" />Access (rear gardens, narrow paths, parking)</li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 bg-[hsl(var(--grass-green))] rounded-full mt-2 flex-shrink-0" />Waste removal and disposal</li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 bg-[hsl(var(--grass-green))] rounded-full mt-2 flex-shrink-0" />Whether you want a one-off job or regular visits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Get a free quote */}
      <section className="py-20 px-4 bg-gradient-to-br from-[hsl(var(--grass-green))] to-[hsl(var(--sky-blue))] text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
            Get a Free Quote
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to get started? Contact us for a free, no-obligation quote. We serve Troon, Prestwick, Ayr, and across Ayrshire.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-[hsl(var(--grass-green))] hover:bg-gray-100 text-lg px-8 py-4 h-auto rounded-full font-semibold transition-colors shadow-lg"
          >
            Get a free quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
