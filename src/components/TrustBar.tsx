import { Shield, MapPin, Star, Phone } from "lucide-react";

const TrustBar = () => {
  const trustItems = [
    {
      icon: MapPin,
      text: "Local"
    },
    {
      icon: Shield,
      text: "Fully Qualified Arborist"
    },
    {
      icon: Phone,
      text: "18 Years Experience"
    },
    {
      icon: Star,
      text: "5★ Recommended"
    }
  ];

  return (
    <section className="py-8 bg-[hsl(var(--trust-bg))]">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="flex justify-center items-center gap-4 md:gap-6 lg:gap-8 overflow-x-auto">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-[hsl(var(--trust-foreground))] flex-shrink-0">
              <item.icon className="w-5 h-5" />
              <span className="font-semibold text-base whitespace-nowrap">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;