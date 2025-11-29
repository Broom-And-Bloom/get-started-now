import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sparkles, Home as HomeIcon, Building2, Key, CheckCircle2, Briefcase, ShoppingBag, Users } from "lucide-react";
import heroImage from "@/assets/hero-cleaning.jpg";
import domesticImage from "@/assets/domestic-cleaning.jpg";
import commercialImage from "@/assets/commercial-cleaning.jpg";
import tenancyImage from "@/assets/end-of-tenancy.jpg";
import deepCleanImage from "@/assets/deep-cleaning.jpg";
import moveImage from "@/assets/move-in-out.jpg";
import constructionImage from "@/assets/post-construction.jpg";
import airbnbImage from "@/assets/airbnb-cleaning.jpg";
import propertyImage from "@/assets/property-services.jpg";

const Services = () => {
  const services = [
    {
      icon: HomeIcon,
      title: "Domestic Cleaning",
      description: "Regular home cleaning services designed to maintain a consistently fresh and tidy living environment. Customizable schedules to fit your lifestyle.",
      features: ["Weekly or bi-weekly visits", "Consistent professional team", "Eco-friendly products", "Tailored cleaning plans"],
      image: domesticImage,
    },
    {
      icon: Building2,
      title: "Commercial Cleaning",
      description: "Keep your business premises spotless and professional. Flexible scheduling including after-hours service to minimize disruption.",
      features: ["Office cleaning", "Retail space maintenance", "After-hours available", "Industry-certified staff"],
      image: commercialImage,
    },
    {
      icon: Key,
      title: "End of Tenancy Cleaning",
      description: "Comprehensive deep clean meeting landlord and letting agent standards. Our deposit-back guarantee ensures peace of mind.",
      features: ["Deposit-back guarantee", "Full property checklist", "Professional equipment", "Certified cleaning team"],
      image: tenancyImage,
    },
    {
      icon: Sparkles,
      title: "Deep/One-Off Cleaning",
      description: "Thorough single-session cleaning perfect for spring cleans, special occasions, or when your property needs extra attention.",
      features: ["Top-to-bottom cleaning", "Behind appliances", "Inside cabinets", "Baseboards and fixtures"],
      image: deepCleanImage,
    },
    {
      icon: Users,
      title: "Move-In/Move-Out Cleaning",
      description: "Preparing properties for new occupants with complete turnover cleaning. Making transitions smooth for tenants and landlords.",
      features: ["Full property preparation", "Kitchen deep clean", "Bathroom sanitization", "Floor and surface cleaning"],
      image: moveImage,
    },
    {
      icon: Briefcase,
      title: "Post-Construction Cleaning",
      description: "Specialized cleaning after building work, renovation, or refurbishment. Removing dust, debris, and residue to restore your space.",
      features: ["Construction dust removal", "Paint splash cleanup", "Window and frame cleaning", "Floor polishing and sealing"],
      image: constructionImage,
    },
    {
      icon: ShoppingBag,
      title: "Airbnb/Holiday Let Cleaning",
      description: "Fast turnaround cleaning between guests to maintain your property's 5-star rating. Reliable service you can count on.",
      features: ["Quick turnaround", "Linen changes", "Welcome presentation", "Quality inspection"],
      image: airbnbImage,
    }
  ];

  const faqs = [
    {
      question: "Do you bring your own cleaning supplies?",
      answer: "Yes! We bring all necessary cleaning supplies and equipment. All our products are eco-friendly and safe for your family and pets. If you prefer us to use your specific products, just let us know."
    },
    {
      question: "Are you insured?",
      answer: "Absolutely. We carry full liability insurance and all our cleaners are vetted, trained, and insured for your peace of mind."
    },
    {
      question: "What if I'm not satisfied with the cleaning?",
      answer: "Your satisfaction is our priority. If you're not completely happy, contact us within 24 hours and we'll return to address any concerns at no extra charge."
    },
    {
      question: "How do I book a service?",
      answer: "You can book through our website quote form, call us directly, or message us on WhatsApp. We'll confirm your appointment and send a reminder before we arrive."
    },
    {
      question: "Do I need to be home during the cleaning?",
      answer: "Not necessarily. Many of our clients provide access and go about their day. We're happy to work around your schedule and preferences."
    },
    {
      question: "What areas do you serve?",
      answer: "We proudly serve the Melton Mowbray area and surrounding locations. Contact us to confirm if we cover your specific location."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Our Services</h1>
            <p className="text-lg md:text-xl text-foreground/80">
              Comprehensive cleaning solutions tailored to your needs. From regular maintenance to specialized deep cleans.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/quote">Get Your Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
