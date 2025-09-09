import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Helmet } from "react-helmet-async";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How much does tree removal cost in Troon?",
      answer: "Tree removal costs in Troon vary depending on tree size, location, and complexity. Small trees typically cost £150-300, medium trees £300-600, and large trees £600-1200. We provide free, no-obligation quotes for all tree surgery work. Emergency tree removal may have additional costs due to urgency."
    },
    {
      question: "Do you provide emergency tree services?",
      answer: "Yes, we offer 24/7 emergency tree removal services across Troon, Ayr, Prestwick, and Ayrshire. Whether it's storm damage, fallen trees, or dangerous branches, our qualified arborist team can respond quickly to make your property safe. Call 07853 224528 for immediate assistance."
    },
    {
      question: "What areas of Ayrshire do you cover?",
      answer: "We provide tree surgery and garden services across Ayrshire, with our main service areas being Troon, Ayr, Prestwick, and Dundonald. We also cover surrounding areas including Irvine, Kilmarnock, and other parts of South Ayrshire. Contact us to confirm coverage for your specific location."
    },
    {
      question: "Are you fully qualified and insured?",
      answer: "Yes, we are fully qualified with PA1 and PA6 pesticide application certificates, NPTC City & Guilds qualifications, and 20+ years of professional experience. We carry full public liability insurance and are fully insured for all tree surgery and garden maintenance work."
    },
    {
      question: "How often should I have my lawn mowed?",
      answer: "Lawn mowing frequency depends on the season and grass growth. During peak growing season (spring/summer), we recommend weekly mowing for best results. In cooler months, fortnightly mowing is usually sufficient. We can create a custom lawn care schedule tailored to your garden's needs."
    },
    {
      question: "Do you provide hedge cutting services?",
      answer: "Yes, we offer professional hedge cutting and trimming services across Ayrshire. Our services include hedge shaping, height reduction, formal hedge maintenance, and garden boundary work. We can handle all types of hedges including privet, leylandii, and native species."
    },
    {
      question: "What is included in your garden maintenance service?",
      answer: "Our garden maintenance service includes lawn mowing, hedge cutting, garden edging, weed control, seasonal pruning, and general garden tidying. We can also provide seasonal treatments, pest control, and garden clearance services. All work is carried out by our qualified team."
    },
    {
      question: "Do you offer free quotes?",
      answer: "Yes, we provide completely free, no-obligation quotes for all our services. You can request a quote by calling 07853 224528, using our contact form, or messaging us on Facebook. We'll visit your property to assess the work and provide a detailed, transparent quote."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <section id="faq" className="py-20 px-4 bg-gradient-to-b from-background to-[hsl(var(--muted))]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[hsl(var(--asphalt-grey))] mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-[hsl(var(--asphalt-grey))] max-w-3xl mx-auto">
              Common questions about our tree surgery, garden maintenance, and lawn care services in Troon and Ayrshire
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-lg text-[hsl(var(--asphalt-grey))] pr-4">
                    {faq.question}
                  </h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-[hsl(var(--grass-green))] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[hsl(var(--grass-green))] flex-shrink-0" />
                  )}
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-[hsl(var(--asphalt-grey))] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-[hsl(var(--asphalt-grey))] mb-6">
              Still have questions? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+447853224528"
                className="inline-flex items-center justify-center px-6 py-3 bg-[hsl(var(--grass-green))] text-white rounded-full font-semibold hover:bg-[hsl(var(--grass-green))]/90 transition-colors"
              >
                Call 07853 224528
              </a>
              <button
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-[hsl(var(--grass-green))] text-[hsl(var(--grass-green))] rounded-full font-semibold hover:bg-[hsl(var(--grass-green))] hover:text-white transition-colors"
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
