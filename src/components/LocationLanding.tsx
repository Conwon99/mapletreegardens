import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Phone, Clock, Award } from "lucide-react";
import type { locations } from "@/data/locations";

type Location = (typeof locations)[number];

interface LocationLandingProps {
  location: Location;
}

const LocationLanding = ({ location }: LocationLandingProps) => {
  const callHref = "tel:+447853224528";

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative py-20 px-4 text-white bg-cover bg-center bg-no-repeat min-h-[32rem] flex flex-col justify-center overflow-hidden"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1920&q=80)`,
        }}
      >
        <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl lg:text-6xl font-bold mb-6">
              {location.heroTitle}
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              {location.heroDescription}
            </p>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed mt-4">
              Expert{" "}
              <a href={`/${location.slug}/tree-surgery`} className="text-white hover:text-yellow-200 underline">tree surgery</a>,{" "}
              <a href={`/${location.slug}/lawn-mowing`} className="text-white hover:text-yellow-200 underline">lawn care</a>, and{" "}
              <a href={`/${location.slug}/hedge-cutting`} className="text-white hover:text-yellow-200 underline">hedge cutting</a> in {location.name}.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => { window.location.href = callHref; }}
              className="bg-white text-[hsl(var(--grass-green))] hover:bg-gray-100 text-lg px-8 py-4 h-auto rounded-full font-semibold"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call for {location.name} Garden Services
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

      {/* Why Choose */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[hsl(var(--asphalt-grey))] mb-6">
              {location.whyChooseTitle}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-[hsl(var(--asphalt-grey))] mb-3">
                Local {location.name} Knowledge
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                We understand {location.name}&apos;s conditions and local gardening challenges
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-[hsl(var(--asphalt-grey))] mb-3">
                20+ Years Experience
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                Fully qualified arborist with extensive experience serving {location.name} residents
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-[hsl(var(--asphalt-grey))] mb-3">
                Reliable Service
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                Consistent, professional service with regular maintenance schedules available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 px-4 bg-[hsl(var(--muted))]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[hsl(var(--asphalt-grey))] mb-6">
              {location.challengesTitle}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {location.challenges.map((ch, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                  {ch.title}
                </h3>
                <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-4">{ch.description}</p>
                <ul className="space-y-2 text-[hsl(var(--asphalt-grey))] opacity-80">
                  {ch.bullets.map((b, j) => (
                    <li key={j}>• {b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services in location */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[hsl(var(--asphalt-grey))] mb-6">
              {location.servicesSectionTitle}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {location.services.map((svc, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                  {svc.title}
                </h3>
                <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-4">{svc.description}</p>
                <ul className="space-y-2 text-[hsl(var(--asphalt-grey))] opacity-80">
                  {svc.bullets.map((b, j) => (
                    <li key={j}>• {b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-20 px-4 bg-[hsl(var(--muted))]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[hsl(var(--asphalt-grey))] mb-6">
              {location.neighborhoodsTitle}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {location.neighborhoods.map((n, i) => (
              <div key={i} className="text-center">
                <h3 className="font-display text-xl font-bold text-[hsl(var(--asphalt-grey))] mb-3">
                  {n.name}
                </h3>
                <p className="text-[hsl(var(--asphalt-grey))] opacity-80">{n.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local refs */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[hsl(var(--asphalt-grey))] mb-6">
              {location.localRefsTitle}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {location.localRefs.map((ref, i) => (
              <div key={i}>
                <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                  {ref.title}
                </h3>
                <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-4">{ref.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-[hsl(var(--grass-green))] text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
            {location.ctaTitle}
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {location.ctaDescription}
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

export default LocationLanding;
