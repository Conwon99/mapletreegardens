import { Phone, Mail, MapPin, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(var(--grass-green))] text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-2xl font-bold text-[hsl(var(--sunshine-yellow))] mb-4">
                Maple Tree & Gardening Services
              </h3>
              <p className="text-white leading-relaxed">
                Friendly, reliable gardening & tree work across Troon & Ayrshire. 
                Professional service with a personal touch.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[hsl(var(--sunshine-yellow))]" />
                <span className="text-white">+44 7853 224528</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[hsl(var(--sunshine-yellow))]" />
                <span className="text-white">mapletreeayshire@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[hsl(var(--sunshine-yellow))]" />
                <span className="text-white">Troon & Ayrshire, Scotland</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-xl font-bold text-[hsl(var(--sunshine-yellow))] mb-6">
              Our Services
            </h4>
            <ul className="space-y-3 text-white">
              <li>• Lawn Care & Maintenance</li>
              <li>• Hedge Trimming & Pruning</li>
              <li>• Tree Work & Removals</li>
              <li>• Fencing & Decking</li>
              <li>• Garden Clear-outs</li>
              <li>• Seasonal Tidy-ups</li>
            </ul>
          </div>

          {/* About Gordon */}
          <div>
            <h4 className="font-display text-xl font-bold text-[hsl(var(--sunshine-yellow))] mb-6">
              About Gordon
            </h4>
            <p className="text-white leading-relaxed mb-6">
              Hi, I'm Gordon—your local, friendly gardener in Troon. I care about tidy work, 
              fair prices and leaving every job cleaner than I found it. If you're staring at 
              brambles or sky-high hedges, I've got you.
            </p>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://www.facebook.com/profile.php?id=100085773295610" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[hsl(var(--sunshine-yellow))] hover:text-[hsl(var(--donut-pink))] transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span>Follow us on Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[hsl(var(--sunshine-yellow))] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[hsl(var(--sunshine-yellow))] text-sm">
              © {currentYear} Maple Tree & Gardening Services. All rights reserved.
            </div>
            <div className="text-[hsl(var(--sunshine-yellow))] text-sm text-center">
              Simpsons-inspired color palette & vibe; no copyrighted characters used.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;