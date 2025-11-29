import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sparkles, Home as HomeIcon, Building2, Hammer, Wind, Droplet, Key, CheckCircle2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Regular Cleaning",
      description: "Weekly or bi-weekly visits to maintain a consistently clean and fresh home. We handle dusting, vacuuming, mopping, and sanitizing all living spaces.",
      features: ["Customizable schedule", "Consistent team", "Eco-friendly products", "Satisfaction guaranteed"]
    },
    {
      icon: HomeIcon,
      title: "Deep Cleaning",
      description: "Comprehensive top-to-bottom cleaning that reaches every corner. Perfect for seasonal refreshes or preparing for special events.",
      features: ["Behind appliances", "Inside cabinets", "Baseboards and moldings", "Light fixtures and ceiling fans"]
    },
    {
      icon: Key,
      title: "End of Tenancy Cleaning",
      description: "Professional cleaning to meet landlord standards and maximize your deposit return. Comprehensive checklist included.",
      features: ["Deposit-back guarantee", "Full property coverage", "Professional equipment", "Certified cleaning team"]
    },
    {
      icon: Hammer,
      title: "After Builders Cleaning",
      description: "Remove construction dust, debris, and residue after renovation work. Restore your space to move-in condition.",
      features: ["Dust removal", "Paint splash cleanup", "Window and frame cleaning", "Floor polishing"]
    },
    {
      icon: Wind,
      title: "Carpet Cleaning",
      description: "Professional steam cleaning and stain removal to refresh and sanitize your carpets, removing allergens and odors.",
      features: ["Deep steam cleaning", "Stain treatment", "Pet odor removal", "Fast drying"]
    },
    {
      icon: Droplet,
      title: "Window Cleaning",
      description: "Crystal-clear windows inside and out, including frames and sills. Available for residential and commercial properties.",
      features: ["Interior and exterior", "Frame and sill cleaning", "Streak-free finish", "Safety certified"]
    },
    {
      icon: Building2,
      title: "Commercial Cleaning",
      description: "Maintain a professional environment with our reliable office and commercial space cleaning services.",
      features: ["Flexible scheduling", "After-hours service", "Industry-certified", "Custom cleaning plans"]
    },
    {
      icon: Building2,
      title: "Property Management Services",
      description: "Comprehensive property care including cleaning coordination, maintenance scheduling, and quality inspections.",
      features: ["Regular inspections", "Maintenance coordination", "Tenant turnover cleaning", "Emergency response"]
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
      answer: "We serve London and surrounding areas. Contact us to confirm if we cover your specific location."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
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
              <div key={index} className="grid md:grid-cols-3 gap-6 items-start">
                <div className="md:col-span-1">
                  <ServiceCard 
                    icon={service.icon}
                    title={service.title}
                    description=""
                  />
                </div>
                <div className="md:col-span-2">
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
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
