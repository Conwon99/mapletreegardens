import { Phone, Mail, MapPin, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative text-white py-16 px-4" style={{ backgroundImage: 'url(/footer2.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-2xl font-bold text-[hsl(var(--sunshine-yellow))] mb-4">
                Maple Tree & Gardens
              </h3>
              <p className="text-white leading-relaxed">
                Friendly, reliable tree surgeon & gardener across Troon, Ayr, Prestwick, Dundonald & Ayrshire. 
                Professional tree surgery, garden maintenance, hedge cutting & lawn care with a personal touch.
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
              <li>
                <a href="/tree-surgery" className="hover:text-[hsl(var(--sunshine-yellow))] transition-colors">
                  • Tree Surgery & Tree Removal
                </a>
              </li>
              <li>
                <a href="/lawn-mowing" className="hover:text-[hsl(var(--sunshine-yellow))] transition-colors">
                  • Garden Maintenance & Lawn Care
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[hsl(var(--sunshine-yellow))] transition-colors">
                  • Hedge Cutting & Hedge Trimming
                </a>
              </li>
              <li>
                <a href="/tree-surgery" className="hover:text-[hsl(var(--sunshine-yellow))] transition-colors">
                  • Emergency Tree Removal
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[hsl(var(--sunshine-yellow))] transition-colors">
                  • Garden Clear-outs & Cleanup
                </a>
              </li>
              <li>
                <a href="/tree-surgery" className="hover:text-[hsl(var(--sunshine-yellow))] transition-colors">
                  • Tree Pruning & Tree Work
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-display text-xl font-bold text-[hsl(var(--sunshine-yellow))] mb-6">
              Service Areas
            </h4>
            <ul className="space-y-3 text-white">
              <li>
                <a href="/troon" className="hover:text-[hsl(var(--sunshine-yellow))] transition-colors">
                  • Tree Surgery in Troon
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[hsl(var(--sunshine-yellow))] transition-colors">
                  • Garden Services in Prestwick
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[hsl(var(--sunshine-yellow))] transition-colors">
                  • Lawn Care in Ayrshire
                </a>
              </li>
              <li>
                <a href="/troon" className="hover:text-[hsl(var(--sunshine-yellow))] transition-colors">
                  • Hedge Cutting in Troon
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[hsl(var(--sunshine-yellow))] transition-colors">
                  • Tree Work in Ayr
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[hsl(var(--sunshine-yellow))] transition-colors">
                  • Garden Maintenance Ayrshire
                </a>
              </li>
            </ul>
          </div>

          {/* About Gordon */}
          <div>
            <h4 className="font-display text-xl font-bold text-[hsl(var(--sunshine-yellow))] mb-6">
              About Gordon
            </h4>
            <p className="text-white leading-relaxed mb-6">
              Hi, I'm Gordon—your local, friendly tree surgeon & qualified gardener in Troon. I care about tidy work, 
              fair prices and leaving every job cleaner than I found it. If you're staring at 
              brambles, sky-high hedges, or need emergency tree removal, I've got you.
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
              © {currentYear} Maple Tree & Gardens. All rights reserved.
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