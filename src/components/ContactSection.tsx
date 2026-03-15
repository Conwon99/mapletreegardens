import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Clock, MapPin } from "lucide-react";
import { trackPhoneCall, trackQuoteRequest, trackFormInteraction } from "@/utils/analytics";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    postcode: '',
    services: [] as string[],
    message: ''
  });
  const { toast } = useToast();

  const serviceOptions = [
    'Gardening',
    'Tree Work', 
    'Fencing/Decking',
    'Garden Clear-outs'
  ];

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/xwvrkwvl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          postcode: formData.postcode,
          services: formData.services.join(', '),
          message: formData.message,
          _subject: 'Free Quote Request from Website'
        }),
      });

      if (response.ok) {
        // Track successful form submission
        trackQuoteRequest('contact_form', formData.services);
        trackFormInteraction('quote_form', 'submit_success');
        
        toast({
          title: "Quote request sent!",
          description: "Thank you for your request. We'll respond within 24 hours.",
        });
        
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          postcode: '',
          services: [],
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      trackFormInteraction('quote_form', 'submit_error');
      toast({
        title: "Error sending request",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  const handleCallClick = () => {
    trackPhoneCall('contact_section');
    window.location.href = "tel:+447853224528";
  };

  return (
    <section id="contact-form" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[hsl(var(--muted))]">
      <div className="container mx-auto max-w-6xl overflow-x-hidden">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-[hsl(var(--asphalt-grey))]">
            Contact Us
          </h2>
        </div>

        {/* Contact form – centred */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="card-service">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-[hsl(var(--asphalt-grey))] font-semibold">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                    className="mt-2 rounded-xl border-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-[hsl(var(--asphalt-grey))] font-semibold">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    required
                    className="mt-2 rounded-xl border-2"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email" className="text-[hsl(var(--asphalt-grey))] font-semibold">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                    className="mt-2 rounded-xl border-2"
                  />
                </div>
                <div>
                  <Label htmlFor="postcode" className="text-[hsl(var(--asphalt-grey))] font-semibold">Postcode</Label>
                  <Input
                    id="postcode"
                    value={formData.postcode}
                    onChange={(e) => setFormData(prev => ({ ...prev, postcode: e.target.value }))}
                    required
                    className="mt-2 rounded-xl border-2"
                  />
                </div>
              </div>

              <div>
                <Label className="text-[hsl(var(--asphalt-grey))] font-semibold">Services Needed</Label>
                <div className="grid grid-cols-2 gap-3 mt-3">
                  {serviceOptions.map(service => (
                    <Button
                      key={service}
                      type="button"
                      variant={formData.services.includes(service) ? "default" : "outline"}
                      onClick={() => handleServiceToggle(service)}
                      className={`rounded-xl ${
                        formData.services.includes(service)
                          ? 'bg-[hsl(var(--grass-green))] text-white'
                          : 'border-2 text-[hsl(var(--asphalt-grey))]'
                      }`}
                    >
                      {service}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="text-[hsl(var(--asphalt-grey))] font-semibold">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Tell us about your garden needs..."
                  className="mt-2 rounded-xl border-2 min-h-[100px]"
                />
              </div>

              <Button type="submit" className="w-full btn-hero">
                Send Quote Request ✨
              </Button>
            </form>
          </div>
        </div>

        {/* Contact info – underneath the form */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Button 
              onClick={handleCallClick}
              className="w-full sm:w-auto justify-center gap-3 px-8 py-6 h-auto bg-[hsl(var(--sky-blue))] hover:bg-[hsl(var(--sky-blue))] hover:opacity-90 text-[hsl(var(--asphalt-grey))] rounded-2xl font-semibold"
            >
              <Phone className="w-6 h-6" />
              <span>Call Gordon: 07853 224528</span>
            </Button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 text-[hsl(var(--asphalt-grey))]">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[hsl(var(--grass-green))]" />
              <span className="text-sm sm:text-base">Troon, Ayr, Prestwick, Dundonald & Ayrshire</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[hsl(var(--grass-green))]" />
              <span className="text-sm sm:text-base">Usually within a week for quotes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;