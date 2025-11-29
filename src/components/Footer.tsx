import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Leaf } from "lucide-react";
import logo from "@/assets/BroomAndBloomLogo.jpeg";
const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Broom & Bloom Logo" className="h-12 w-12 rounded-full" />
              <div>
                <h3 className="text-lg font-bold leading-tight">Broom & Bloom</h3>
                <p className="text-xs opacity-80">Cleaning & Property Services</p>
              </div>
            </div>
            <p className="text-sm opacity-90">
              Professional cleaning services with an eco-friendly touch. Making your space sparkle while caring for our
              planet.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="opacity-90 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="opacity-90 hover:opacity-100 transition-opacity">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="opacity-90 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/quote" className="opacity-90 hover:opacity-100 transition-opacity">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Domestic Cleaning</li>
              <li>Commercial Cleaning</li>
              <li>End of Tenancy</li>
              <li>Deep/One-Off Cleaning</li>
              <li>Move-In</li>
              <li>Post-Construction</li>
              <li>Airbnb</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+447541786867" className="opacity-90 hover:opacity-100 transition-opacity">
                  +44 7541 786867
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:hello@broomandbloom.co.uk" className="opacity-90 hover:opacity-100 transition-opacity">
                  Hello@broomandbloom.co.uk
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span className="opacity-90">Serving Melton Mowbray & Surrounding Areas</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Eco Promise Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Leaf className="h-5 w-5" />
              <h4 className="font-semibold text-lg">Eco Promise</h4>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Where possible, we choose eco-friendly products that are gentle on your home and kinder to the planet. We
              prioritise low-impact alternatives, reusable materials, and fragrance-sensitive options — always aiming
              for excellent results with a lighter environmental footprint.
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>&copy; {new Date().getFullYear()} Broom & Bloom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
