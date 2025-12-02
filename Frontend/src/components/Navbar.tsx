import { useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Product", hasDropdown: true },
    { label: "Pricing", hasDropdown: false },
    { label: "Docs", hasDropdown: false },
    { label: "Learn", hasDropdown: true },
    { label: "Customers", hasDropdown: false },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-bento-dark group-hover:bg-bento-lime transition-colors" />
              <div className="w-2 h-2 rounded-full bg-bento-dark group-hover:bg-bento-lime transition-colors delay-75" />
              <div className="w-2 h-2 rounded-full bg-bento-dark group-hover:bg-bento-lime transition-colors delay-150" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">BentoML</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                className="nav-link flex items-center gap-1 text-sm font-medium py-2"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="nav-link text-sm font-medium">Log In</button>
            <Button className="bg-bento-dark text-bento-cream hover:bg-bento-sage rounded-full px-5 py-2 text-sm font-semibold group">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className="flex items-center justify-between p-3 text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  <span className="font-medium">{item.label}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>
              ))}
              <div className="border-t border-border pt-4 mt-2 flex flex-col gap-2">
                <button className="p-3 text-foreground hover:bg-muted rounded-lg font-medium text-left">
                  Log In
                </button>
                <Button className="bg-bento-dark text-bento-cream hover:bg-bento-sage rounded-full py-6 font-semibold">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
