import { Button } from "@/components/ui/button";
import { ArrowRight, Scissors, Phone, MapPin, Ruler } from "lucide-react";

const GardenStrimming = () => {
  const handleQuoteClick = () => {
    window.location.href = "tel:+447853224528";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative py-20 px-4 text-white min-h-[32rem] flex flex-col justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/uploads/garden1.webp)" }}
      >
        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl lg:text-6xl font-bold mb-6">
              Garden Strimming & Edging in Troon & Ayrshire
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Precision edging, strimming around obstacles, and professional finishing for your garden.
              We cover pathways, borders, and hard-to-reach areas.               Also{" "}
              <a href="/lawn-mowing" className="text-white hover:text-yellow-200 underline font-semibold">lawn mowing</a>,{" "}
              <a href="/hedge-cutting" className="text-white hover:text-yellow-200 underline font-semibold">hedge cutting</a>, and{" "}
              <a href="/troon" className="text-white hover:text-yellow-200 underline font-semibold">garden services in Troon</a>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleQuoteClick}
              className="bg-[hsl(var(--grass-green))] text-white hover:opacity-90 text-lg px-8 py-4 h-auto rounded-full font-semibold"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call for a Free Quote
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

      {/* Why Garden Strimming & Edging */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[hsl(var(--asphalt-grey))] mb-6">
              Why Choose Our Strimming & Edging?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[hsl(var(--sunshine-yellow))] rounded-full flex items-center justify-center mx-auto mb-4">
                <Ruler className="w-8 h-8 text-[hsl(var(--asphalt-grey))]" />
              </div>
              <h3 className="font-display text-xl font-bold text-[hsl(var(--asphalt-grey))] mb-3">
                Precision Edging
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                Clean, sharp edges along paths and borders for a polished, professional look
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[hsl(var(--sunshine-yellow))] rounded-full flex items-center justify-center mx-auto mb-4">
                <Scissors className="w-8 h-8 text-[hsl(var(--asphalt-grey))]" />
              </div>
              <h3 className="font-display text-xl font-bold text-[hsl(var(--asphalt-grey))] mb-3">
                Around Obstacles
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                Strimming around trees, fences, posts, and flower beds where mowers can't reach
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[hsl(var(--sunshine-yellow))] rounded-full flex items-center justify-center mx-auto mb-4">
                <Scissors className="w-8 h-8 text-[hsl(var(--asphalt-grey))]" />
              </div>
              <h3 className="font-display text-xl font-bold text-[hsl(var(--asphalt-grey))] mb-3">
                Professional Finish
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                We leave every job tidy with no missed patches or rough edges
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-20 px-4 bg-[hsl(var(--muted))]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[hsl(var(--asphalt-grey))] mb-6">
              Strimming & Edging Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                Pathway & Border Edging
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-4">
                Crisp edges along paths, driveways, and flower beds. Defines your lawn and keeps borders looking neat.
              </p>
              <ul className="space-y-2 text-[hsl(var(--asphalt-grey))] opacity-80">
                <li>• Path and driveway edges</li>
                <li>• Flower bed borders</li>
                <li>• Lawn edge definition</li>
                <li>• Regular or one-off edging</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                Around Garden Obstacles
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-4">
                Strimming around trees, fences, posts, sheds, and planters. We reach the spots your mower can't.
              </p>
              <ul className="space-y-2 text-[hsl(var(--asphalt-grey))] opacity-80">
                <li>• Around trees and shrubs</li>
                <li>• Along fences and walls</li>
                <li>• Beside sheds and structures</li>
                <li>• Tight corners and edges</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                Hard-to-Reach Areas
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-4">
                Slopes, narrow strips, and awkward corners. We bring strimmers and edgers to get a complete finish.
              </p>
              <ul className="space-y-2 text-[hsl(var(--asphalt-grey))] opacity-80">
                <li>• Slopes and banks</li>
                <li>• Narrow strips</li>
                <li>• Under hedges and borders</li>
                <li>• Full garden coverage</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                Combined with Lawn & Garden Care
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-4">
                Often booked together with our lawn mowing or hedge cutting for a full garden tidy.
              </p>
              <ul className="space-y-2 text-[hsl(var(--asphalt-grey))] opacity-80">
                <li>• After lawn mowing</li>
                <li>• With hedge cutting</li>
                <li>• One-off or regular</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[hsl(var(--asphalt-grey))] mb-6">
              Related Garden Services
            </h2>
            <p className="text-xl text-[hsl(var(--asphalt-grey))] max-w-3xl mx-auto">
              Pair strimming with our other services for a complete garden
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="font-display text-xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                Lawn Mowing
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-6">
                Lawn care and grass cutting across Troon and Ayrshire.
              </p>
              <a
                href="/lawn-mowing"
                className="inline-block bg-[hsl(var(--grass-green))] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                Lawn Care
              </a>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="font-display text-xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                Hedge Cutting
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-6">
                Hedge trimming and boundary maintenance.
              </p>
              <a
                href="/hedge-cutting"
                className="inline-block bg-[hsl(var(--grass-green))] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                Hedge Cutting
              </a>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="font-display text-xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                All Services
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-6">
                View our full range of garden and tree services.
              </p>
              <a
                href="/services"
                className="inline-block bg-[hsl(var(--grass-green))] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                View All Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-[hsl(var(--grass-green))] text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
            Contact Us for Garden Strimming & Edging
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Need edging or strimming in Troon or Ayrshire? Get in touch for a free quote.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              onClick={handleQuoteClick}
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
            <span>Serving Troon, Prestwick, Ayr, and across Ayrshire</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GardenStrimming;
