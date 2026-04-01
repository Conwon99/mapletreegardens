import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MapPin } from "lucide-react";
import type { locations } from "@/data/locations";
import type { services } from "@/data/services";

type Location = (typeof locations)[number];
type Service = (typeof services)[number];
type FaqItem = { question: string; answer: string };

interface LocationServicePageProps {
  location: Location;
  service: Service;
  faqs: FaqItem[];
}

const LocationServicePage = ({ location, service, faqs }: LocationServicePageProps) => {
  const callHref = "tel:+447853224528";

  const serviceNoun =
    service.slug === "tree-surgery"
      ? "tree work"
      : service.slug === "lawn-mowing"
        ? "lawn care"
        : service.slug === "hedge-cutting"
          ? "hedge cutting"
          : "garden maintenance";

  const nearby = location.neighborhoods?.slice(0, 3).map((n) => n.name).join(", ");

  return (
    <div className="min-h-screen bg-background">
      <section
        className="relative py-20 px-4 text-white bg-cover bg-center bg-no-repeat min-h-[32rem] flex flex-col justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(var(--grass-green) / 0.88) 0%, hsl(var(--sky-blue) / 0.82) 100%), url(${service.fallbackImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/25" aria-hidden="true" />
        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl lg:text-6xl font-bold mb-6">
              {service.title} in {location.name}
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              {service.description} We cover {location.name}
              {nearby ? ` (${nearby} and nearby)` : ""} and the wider Ayrshire area.
              Free, no-obligation quotes and tidy, reliable work.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => { window.location.href = callHref; }}
              className="bg-white text-[hsl(var(--grass-green))] hover:bg-gray-100 text-lg px-8 py-4 h-auto rounded-full font-semibold"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call for a Quote
            </Button>
            <a
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[hsl(var(--grass-green))] text-lg px-8 py-4 h-auto rounded-full font-semibold transition-colors"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-[hsl(var(--asphalt-grey))] mb-8 text-center">
            What We Offer in {location.name}
          </h2>
          <div className="max-w-3xl mx-auto space-y-5 text-[hsl(var(--asphalt-grey))] opacity-90 leading-relaxed">
            <p>
              If you want {serviceNoun} done properly in {location.name}, we focus on safe work, a tidy finish, and clear communication.
              Whether it’s a one-off job or regular maintenance, we’ll recommend what’s best for your garden and your budget.
            </p>
            <p>
              {location.slug === "troon"
                ? "Coastal wind and salt can be tough on trees, hedges and lawns. We’re used to working in exposed gardens and planning jobs around the weather."
                : location.slug === "prestwick"
                  ? "Prestwick’s exposure and coastal conditions can take a toll on boundaries and lawns. We tailor the approach so it looks good and stays manageable."
                  : "Ayr’s mix of town and coastal gardens means every job is a little different. We’ll assess access, safety, and the best way to get a clean result."}
            </p>
          </div>

          <ul className="space-y-4 max-w-2xl mx-auto mt-10">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-[hsl(var(--asphalt-grey))]">
                <span className="w-2 h-2 bg-[hsl(var(--grass-green))] rounded-full mt-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-14 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-border">
              <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                What affects the price?
              </h3>
              <ul className="space-y-3 text-[hsl(var(--asphalt-grey))] opacity-90">
                <li className="flex items-start gap-3"><span className="w-2 h-2 bg-[hsl(var(--grass-green))] rounded-full mt-2 flex-shrink-0" />Size and scope of the job</li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 bg-[hsl(var(--grass-green))] rounded-full mt-2 flex-shrink-0" />Access (rear gardens, narrow paths, parking)</li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 bg-[hsl(var(--grass-green))] rounded-full mt-2 flex-shrink-0" />Waste removal and disposal requirements</li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 bg-[hsl(var(--grass-green))] rounded-full mt-2 flex-shrink-0" />Urgency and weather constraints</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-border">
              <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                What to expect
              </h3>
              <ol className="space-y-3 text-[hsl(var(--asphalt-grey))] opacity-90 list-decimal list-inside">
                <li>Send details (and photos if possible) for a fast quote.</li>
                <li>We agree a time that works for you.</li>
                <li>We do the work safely and leave the area tidy.</li>
                <li>If you want ongoing help, we can set a simple schedule.</li>
              </ol>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-[hsl(var(--asphalt-grey))] mb-6">
              Free, no-obligation quotes for {location.name} and the surrounding area — and we’ll always tell you the simplest, most cost-effective option.
            </p>
            <a
              href={`/${location.slug}`}
              className="inline-flex items-center gap-2 text-[hsl(var(--grass-green))] font-semibold hover:underline"
            >
              View all services in {location.name}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[hsl(var(--muted))]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-[hsl(var(--asphalt-grey))] mb-10 text-center">
            FAQs: {service.title} in {location.name}
          </h2>
          <div className="max-w-4xl mx-auto grid gap-6">
            {faqs.map((f, idx) => (
              <details key={idx} className="bg-white rounded-2xl shadow-lg border border-border p-6">
                <summary className="cursor-pointer font-semibold text-[hsl(var(--asphalt-grey))] text-lg">
                  {f.question}
                </summary>
                <p className="mt-3 text-[hsl(var(--asphalt-grey))] opacity-90 leading-relaxed">
                  {f.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[hsl(var(--grass-green))] text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
            Get a Free Quote for {service.title} in {location.name}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today. We serve {location.name} and across Ayrshire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              onClick={() => { window.location.href = callHref; }}
              className="bg-white text-[hsl(var(--grass-green))] hover:bg-gray-100 text-lg px-8 py-4 h-auto rounded-full font-semibold"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: 07853 224528
            </Button>
            <a
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[hsl(var(--grass-green))] text-lg px-8 py-4 h-auto rounded-full font-semibold transition-colors"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 text-white">
            <MapPin className="w-5 h-5" />
            <span>{location.ctaServing}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationServicePage;
