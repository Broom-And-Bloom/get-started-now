import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/BroomAndBloomLogo.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-24 items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Broom & Bloom Logo" className="h-16 w-16 rounded-full" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary leading-tight">Broom & Bloom</span>
              <span className="text-sm text-muted-foreground">Cleaning & Property Services</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild>
              <Link to="/quote">Get a Quote</Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://wa.me/447541786867" target="_blank" rel="noopener noreferrer">
                <Phone className="h-4 w-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 text-sm font-medium ${
                  isActive(link.path) ? "text-primary" : "text-foreground/80"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full">
              <Link to="/quote" onClick={() => setIsMenuOpen(false)}>
                Get a Quote
              </Link>
            </Button>
            <Button variant="outline" asChild className="w-full">
              <a href="https://wa.me/447541786867" target="_blank" rel="noopener noreferrer">
                <Phone className="h-4 w-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
