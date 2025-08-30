import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCallClick = () => {
    window.location.href = "tel:+447853224528";
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Home", onClick: () => scrollToSection("hero") },
    { label: "Services", onClick: () => scrollToSection("services") },
    { label: "Gallery", onClick: () => scrollToSection("gallery") },
    { label: "Reviews", onClick: () => scrollToSection("reviews") },
    { label: "Contact", onClick: () => scrollToSection("contact-form") },
  ];

  return (
    <nav className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm border-b border-primary z-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🍁</span>
            <span className="font-display font-bold text-xl text-primary-foreground">
              Maple Tree Services
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={item.onClick}
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={handleCallClick}
              variant="ghost"
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground"
            >
              <Phone className="w-4 h-4" />
              07853 224528
            </Button>
            <Button
              onClick={() => scrollToSection("contact-form")}
              className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary px-6 py-2 rounded-full font-semibold"
            >
              Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-primary-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-primary-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-primary border-t border-primary-foreground/20">
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className="block w-full text-left px-4 py-2 text-primary-foreground hover:text-primary-foreground/80 hover:bg-primary-foreground/10 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-4 border-t border-primary-foreground/20 space-y-3">
                <Button
                  onClick={handleCallClick}
                  variant="ghost"
                  className="w-full justify-start flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/80"
                >
                  <Phone className="w-4 h-4" />
                  Call: 07853 224528
                </Button>
                <Button
                  onClick={() => scrollToSection("contact-form")}
                  className="w-full bg-primary-foreground hover:bg-primary-foreground/90 text-primary"
                >
                  Get Free Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;