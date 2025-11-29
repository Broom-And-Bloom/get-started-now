import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles, Home as HomeIcon, Building2, Hammer, Wind, Droplet, Key, CheckCircle2, Phone, Calendar, ThumbsUp, Leaf } from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Regular Cleaning",
      description: "Weekly or bi-weekly cleaning to keep your space fresh and tidy."
    },
    {
      icon: HomeIcon,
      title: "Deep Cleaning",
      description: "Thorough top-to-bottom cleaning for every corner of your home."
    },
    {
      icon: Key,
      title: "End of Tenancy",
      description: "Professional cleaning to ensure your deposit back guarantee."
    },
    {
      icon: Hammer,
      title: "After Builders Cleaning",
      description: "Remove dust and debris after renovation or construction work."
    },
    {
      icon: Wind,
      title: "Carpet Cleaning",
      description: "Deep steam cleaning to refresh and sanitize your carpets."
    },
    {
      icon: Droplet,
      title: "Window Cleaning",
      description: "Sparkling clean windows inside and out for maximum light."
    },
    {
      icon: Building2,
      title: "Commercial Cleaning",
      description: "Professional office and commercial space cleaning services."
    },
    {
      icon: Building2,
      title: "Property Services",
      description: "Full property management support including maintenance coordination."
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
              Professional Cleaning<br />
              <span className="text-primary">with an Eco-Friendly Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Bringing sparkle to your space while caring for our planet. Expert cleaning services across London & surrounding areas.
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

      {/* Eco Promise */}
      <section className="py-16 md:py-24 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Leaf className="h-12 w-12 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Eco Promise</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  We're committed to protecting the environment while delivering exceptional cleaning results. All our products are eco-friendly, biodegradable, and safe for your family, pets, and the planet.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <span>100% eco-friendly cleaning products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <span>Sustainable cleaning practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <span>Safe for children and pets</span>
                  </li>
                </ul>
              </div>
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
            Get your free, no-obligation quote today and discover why homeowners across London trust Broom & Bloom.
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
