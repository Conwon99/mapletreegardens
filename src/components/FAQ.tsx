import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

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
      answer: "It depends on the size of the tree, where it is, and how tricky the access is. Rough guide: small trees often £150–300, medium £300–600, large trees £600–1200. We give free quotes so you know the cost before we start. Emergency call-outs can cost a bit more because of the urgency."
    },
    {
      question: "What do I do if a tree falls in my garden?",
      answer: "Stay clear of the tree and any power lines. Call us on 07853 224528. We do emergency tree removal across Troon, Ayr, Prestwick and Ayrshire. We’ll make the site safe and clear the debris. Storm damage is something we deal with a lot on the coast."
    },
    {
      question: "What areas do you cover?",
      answer: "We’re based in Troon and work across Troon, Barassie, Fullarton, Loans, Prestwick, Ayr, Dundonald and the rest of Ayrshire. If you’re not sure, give us a call and we’ll say if we can get to you."
    },
    {
      question: "Are you qualified and insured?",
      answer: "Yes. We have PA1 and PA6 (pesticide use), NPTC tree work qualifications, and over 20 years’ experience. We’re fully insured for tree surgery and garden work, including public liability."
    },
    {
      question: "How often should my lawn be mowed?",
      answer: "In spring and summer, most lawns do best with a cut every week. In autumn and when it’s cooler, every two weeks is often enough. We can set up a regular schedule that suits your garden and your budget."
    },
    {
      question: "Do you cut hedges?",
      answer: "Yes. We do hedge cutting and trimming across Troon and Ayrshire—shaping, height reduction, and boundary hedges. We work on privet, leylandii, laurel and other common hedges. Clippings are taken away and the site left tidy."
    },
    {
      question: "What’s included in garden maintenance?",
      answer: "Lawn mowing, hedge cutting, edging, weeding, pruning when needed, and general tidying. We can also do seasonal treatments and clear-outs. Tell us what you need and we’ll quote for it."
    },
    {
      question: "Do you give free quotes?",
      answer: "Yes. Free, no-obligation quotes for all our work. Call 07853 224528, use the form on this site, or message us. We’ll come and look, then give you a clear price."
    }
  ];

  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
      }))
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <section id="faq" className="py-20 px-4 bg-gradient-to-b from-background to-[hsl(var(--muted))]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[hsl(var(--asphalt-grey))] mb-6">
              Questions We Get Asked
            </h2>
            <p className="text-xl text-[hsl(var(--asphalt-grey))] max-w-3xl mx-auto">
              Real questions from people in Troon and Ayrshire about tree surgery, lawn care, and garden work
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
              Something else you need to know? Call or send a message.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+447853224528"
                className="inline-flex items-center justify-center px-6 py-3 bg-[hsl(var(--grass-green))] text-white rounded-full font-semibold hover:bg-[hsl(var(--grass-green))]/90 transition-colors"
              >
                Call 07853 224528
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-[hsl(var(--grass-green))] text-[hsl(var(--grass-green))] rounded-full font-semibold hover:bg-[hsl(var(--grass-green))] hover:text-white transition-colors"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
    </section>
  );
};

export default FAQ;
