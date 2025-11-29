import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles, Home as HomeIcon, Building2, Key, CheckCircle2, Phone, Calendar, ThumbsUp, Leaf, Briefcase, ShoppingBag, Users, Shield, Award } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-cleaning.jpg";
import logoImage from "@/assets/BroomAndBloomLogo.jpeg";
import domesticImage from "@/assets/domestic-cleaning.jpg";
import commercialImage from "@/assets/commercial-cleaning.jpg";
import tenancyImage from "@/assets/end-of-tenancy.jpg";
import deepCleanImage from "@/assets/deep-cleaning.jpg";
import moveImage from "@/assets/move-in-out.jpg";
import constructionImage from "@/assets/post-construction.jpg";
import airbnbImage from "@/assets/airbnb-cleaning.jpg";
import propertyImage from "@/assets/property-services.jpg";
import whyChooseImage from "@/assets/why-choose-us.jpg";

const Home = () => {
  const services = [
    {
      icon: HomeIcon,
      title: "Domestic Cleaning",
      description: "Regular home cleaning services tailored to your household needs and schedule.",
      image: domesticImage,
    },
    {
      icon: Building2,
      title: "Commercial Cleaning",
      description: "Professional office and business premises cleaning for a spotless workspace.",
      image: commercialImage,
    },
    {
      icon: Key,
      title: "End of Tenancy Cleaning",
      description: "Comprehensive cleaning with deposit-back guarantee for tenants and landlords.",
      image: tenancyImage,
    },
    {
      icon: Sparkles,
      title: "Deep/One-Off Cleaning",
      description: "Thorough single-session cleaning for spring cleans or special occasions.",
      image: deepCleanImage,
    },
    {
      icon: Users,
      title: "Move-In/Move-Out Cleaning",
      description: "Preparing properties for new occupants with complete turnover cleaning.",
      image: moveImage,
    },
    {
      icon: Briefcase,
      title: "Post-Construction Cleaning",
      description: "Removing dust and debris after builders, renovation, or construction work.",
      image: constructionImage,
    },
    {
      icon: ShoppingBag,
      title: "Airbnb/Holiday Let Cleaning",
      description: "Quick turnaround cleaning between guests to maintain 5-star standards.",
      image: airbnbImage,
    },
    {
      icon: Building2,
      title: "Property Services",
      description: "Property management support including maintenance coordination and inspections.",
      image: propertyImage,
    }
  ];

  const howItWorks = [
    {
      icon: Phone,
      title: "Get in Touch",
      description: "Contact us via phone, WhatsApp, or our quote form"
    },
    {
      icon: Calendar,
      title: "Schedule Service",
      description: "Choose a time that works best for your schedule"
    },
    {
      icon: Sparkles,
      title: "We Clean",
      description: "Our professional team arrives and delivers exceptional results"
    },
    {
      icon: ThumbsUp,
      title: "Enjoy Your Space",
      description: "Relax in your spotless, fresh-smelling environment"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${logoImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto px-4 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Broom & Bloom<br />
            <span className="text-primary">Cleaning & Property Services</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-foreground/80">
            Professional, eco-friendly cleaning services across Leicestershire. Transforming homes and businesses with meticulous care and sustainable practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="text-lg">
              <Link to="/quote">Get Your Free Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg">
              <a href="https://wa.me/447541786867" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive cleaning solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <ServiceCard {...service} image={service.image} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Trust Signals */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Broom & Bloom?</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We're more than just a cleaning company. We're your trusted partner for creating healthy, spotless spaces across Leicestershire. Our commitment to excellence, sustainability, and customer satisfaction sets us apart.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">DBS-Checked & Vetted Staff</h4>
                      <p className="text-muted-foreground">All team members are thoroughly vetted and background-checked for your peace of mind.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Fully Insured</h4>
                      <p className="text-muted-foreground">Comprehensive insurance coverage protects your property.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Infection-Control Trained</h4>
                      <p className="text-muted-foreground">Professional training in hygiene and infection control protocols.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Leaf className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Eco-Friendly Products</h4>
                      <p className="text-muted-foreground">100% biodegradable products safe for your family, pets, and the environment.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative h-[500px] rounded-lg overflow-hidden shadow-xl"
              >
                <img 
                  src={whyChooseImage} 
                  alt="Professional cleaning supplies and tools" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
            
            <div className="bg-muted/50 p-6 rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                <strong>Professional Collaboration:</strong> We work alongside trusted third-party specialists for specialized services. While we coordinate these partnerships, we are not responsible for the services provided by external contractors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">Simple, straightforward, and stress-free</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">{index + 1}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${deepCleanImage})` }}
        >
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Get your free, no-obligation quote today and discover why residents across Leicestershire trust Broom & Bloom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link to="/quote">Get Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
