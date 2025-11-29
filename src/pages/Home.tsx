import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles, Home as HomeIcon, Building2, Key, CheckCircle2, Phone, Calendar, ThumbsUp, Leaf, Briefcase, ShoppingBag, Users } from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
  const services = [
    {
      icon: HomeIcon,
      title: "Domestic Cleaning",
      description: "Regular home cleaning services tailored to your household needs and schedule."
    },
    {
      icon: Building2,
      title: "Commercial Cleaning",
      description: "Professional office and business premises cleaning for a spotless workspace."
    },
    {
      icon: Key,
      title: "End of Tenancy Cleaning",
      description: "Comprehensive cleaning with deposit-back guarantee for tenants and landlords."
    },
    {
      icon: Sparkles,
      title: "Deep/One-Off Cleaning",
      description: "Thorough single-session cleaning for spring cleans or special occasions."
    },
    {
      icon: Users,
      title: "Move-In/Move-Out Cleaning",
      description: "Preparing properties for new occupants with complete turnover cleaning."
    },
    {
      icon: Briefcase,
      title: "Post-Construction Cleaning",
      description: "Removing dust and debris after builders, renovation, or construction work."
    },
    {
      icon: ShoppingBag,
      title: "Airbnb/Holiday Let Cleaning",
      description: "Quick turnaround cleaning between guests to maintain 5-star standards."
    },
    {
      icon: Building2,
      title: "Property Services",
      description: "Property management support including maintenance coordination and inspections."
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
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Broom & Bloom<br />
              <span className="text-primary">Cleaning & Property Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Professional, eco-friendly cleaning services across Leicestershire. Transforming homes and businesses with meticulous care and sustainable practices.
            </p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" asChild>
                <Link to="/quote">Get Your Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://wa.me/447541786867" target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
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
                <ServiceCard {...service} />
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
      <section className="py-16 md:py-24 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose Broom & Bloom?</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">DBS-Checked & Vetted Staff</h3>
                  <p className="text-muted-foreground">All our cleaning professionals are thoroughly background-checked and vetted for your peace of mind.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Fully Insured</h3>
                  <p className="text-muted-foreground">Comprehensive insurance coverage protects you, your property, and our team.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Infection-Control Trained</h3>
                  <p className="text-muted-foreground">Our team is professionally trained in infection control and prevention protocols.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Eco-Friendly Products</h3>
                  <p className="text-muted-foreground">100% environmentally friendly, biodegradable cleaning products safe for your family and pets.</p>
                </div>
              </div>
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
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Get your free, no-obligation quote today and discover why residents across Leicestershire trust Broom & Bloom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/quote">Get Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
