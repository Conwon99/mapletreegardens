import { Button } from "@/components/ui/button";
import { ArrowRight, Scissors, Phone, MapPin, Layers } from "lucide-react";

const HedgeCutting = () => {
  const handleQuoteClick = () => {
    window.location.href = "tel:+447853224528";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative py-20 px-4 text-white min-h-[32rem] flex flex-col justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/uploads/hedge2.webp)" }}
      >
        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl lg:text-6xl font-bold mb-6">
              Professional Hedge Cutting & Trimming in Troon & Ayrshire
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Expert hedge cutting, shaping, and maintenance across Troon, Prestwick, and Ayrshire.
              Keep your boundaries tidy and your garden looking its best. We also provide{" "}
              <a href="/lawn-mowing" className="text-white hover:text-yellow-200 underline">lawn care</a>,{" "}
              <a href="/tree-surgery" className="text-white hover:text-yellow-200 underline">tree surgery</a>, and{" "}
              <a href="/troon" className="text-white hover:text-yellow-200 underline">garden services in Troon</a>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleQuoteClick}
              className="bg-white text-[hsl(var(--grass-green))] hover:bg-gray-100 text-lg px-8 py-4 h-auto rounded-full font-semibold"
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

      {/* Why Choose Our Hedge Cutting */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[hsl(var(--asphalt-grey))] mb-6">
              Why Choose Our Hedge Cutting Services?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[hsl(var(--donut-pink))] rounded-full flex items-center justify-center mx-auto mb-4">
                <Scissors className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-[hsl(var(--asphalt-grey))] mb-3">
                Professional Equipment
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                We use professional hedge trimmers and tools for clean, even cuts and lasting results
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[hsl(var(--donut-pink))] rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-[hsl(var(--asphalt-grey))] mb-3">
                Shaping & Maintenance
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                From simple trimming to formal shapes and height reduction, we tailor the work to your garden
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[hsl(var(--donut-pink))] rounded-full flex items-center justify-center mx-auto mb-4">
                <Scissors className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-[hsl(var(--asphalt-grey))] mb-3">
                Tidy Cleanup
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                We remove all clippings and debris, leaving your garden clean and tidy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hedge Cutting Services We Offer */}
      <section className="py-20 px-4 bg-[hsl(var(--muted))]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[hsl(var(--asphalt-grey))] mb-6">
              Hedge Cutting Services We Offer
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                Professional Hedge Cutting
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-4">
                Regular hedge cutting to keep boundaries neat and healthy. We work on all hedge types including leylandii, laurel, beech, and privet.
              </p>
              <ul className="space-y-2 text-[hsl(var(--asphalt-grey))] opacity-80">
                <li>• All hedge types and sizes</li>
                <li>• Regular or one-off cuts</li>
                <li>• Sides and tops</li>
                <li>• Clean, even finish</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                Hedge Shaping & Height Reduction
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-4">
                Overgrown hedges brought back under control. We can reduce height and width safely while maintaining hedge health.
              </p>
              <ul className="space-y-2 text-[hsl(var(--asphalt-grey))] opacity-80">
                <li>• Height reduction</li>
                <li>• Width trimming</li>
                <li>• Formal or natural shapes</li>
                <li>• Rejuvenation of neglected hedges</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                Garden Debris Removal
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-4">
                We collect and dispose of all hedge clippings so your garden is left clean and ready to enjoy.
              </p>
              <ul className="space-y-2 text-[hsl(var(--asphalt-grey))] opacity-80">
                <li>• Clipping collection</li>
                <li>• Disposal included</li>
                <li>• Site left tidy</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                Boundary & Garden Hedges
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-4">
                Front and back garden hedges, boundary hedges, and screening. We work in Troon, Prestwick, Ayr, Dundonald, and across Ayrshire.
              </p>
              <ul className="space-y-2 text-[hsl(var(--asphalt-grey))] opacity-80">
                <li>• Residential and commercial</li>
                <li>• Boundary hedges</li>
                <li>• Privacy and screening</li>
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
              Complete your garden care with our other professional services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="font-display text-xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                Lawn Mowing
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-6">
                Professional lawn care and grass cutting across Ayrshire.
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
                Tree Surgery
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-6">
                Tree removal, pruning, and stump grinding.
              </p>
              <a
                href="/tree-surgery"
                className="inline-block bg-[hsl(var(--grass-green))] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                Tree Surgery
              </a>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="font-display text-xl font-bold text-[hsl(var(--asphalt-grey))] mb-4">
                Garden Strimming
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-6">
                Edging, strimming, and precision garden finishing.
              </p>
              <a
                href="/garden-strimming"
                className="inline-block bg-[hsl(var(--grass-green))] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                Strimming & Edging
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-[hsl(var(--grass-green))] text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
            Contact Us for Hedge Cutting in Troon & Ayrshire
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Ready for a tidy hedge? Contact us today for a free quote. We serve Troon, Prestwick, Ayr, and across Ayrshire.
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

export default HedgeCutting;
