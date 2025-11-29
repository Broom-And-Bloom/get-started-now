import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Sparkles,
  Home as HomeIcon,
  Building2,
  Key,
  CheckCircle2,
  Briefcase,
  ShoppingBag,
  Users,
  ArrowRight,
  Clock,
  Shield,
  Star,
  HelpCircle,
} from "lucide-react";
import heroImage from "@/assets/hero-cleaning.jpg";
import domesticImage from "@/assets/domestic-cleaning.jpg";
import commercialImage from "@/assets/commercial-cleaning.jpg";
import tenancyImage from "@/assets/end-of-tenancy.jpg";
import deepCleanImage from "@/assets/deep-cleaning.jpg";
import moveImage from "@/assets/move-in-out.jpg";
import constructionImage from "@/assets/post-construction-new.jpg";
import airbnbImage from "@/assets/airbnb-cleaning.jpg";
import propertyImage from "@/assets/property-services.jpg";
const Services = () => {
  const services = [
    {
      icon: HomeIcon,
      title: "Domestic Cleaning",
      description: "Thoughtful, consistent home cleaning designed entirely around your routine.",
      features: [
        "Weekly or fortnightly visits",
        "Consistent professional team",
        "Tailored cleaning plans",
        "Where possible we aim to use eco-friendly products",
      ],
      image: domesticImage,
    },
    {
      icon: Building2,
      title: "Commercial Cleaning",
      description: "Professional, discreet workplace cleaning that keeps your environment welcoming and productive.",
      features: ["Office cleaning", "Retail space maintenance"],
      image: commercialImage,
    },
    {
      icon: Key,
      title: "End of Tenancy Cleaning",
      description: "A complete, top-to-bottom clean to help make moving out smooth and stress-free.",
      features: ["Full property checklist", "Professional equipment"],
      image: tenancyImage,
    },
    {
      icon: Sparkles,
      title: "Deep/One-Off Cleaning",
      description:
        "An intensive clean ideal for seasonal refreshes, special occasions, or whenever you need an extra hand.",
      features: ["Top-to-bottom cleaning", "Behind appliances", "Inside cabinets", "Baseboards and fixtures"],
      image: deepCleanImage,
    },
    {
      icon: Users,
      title: "Move-In Cleaning",
      description: "Start fresh in your new home with a beautifully prepared and hygienic space before you unpack.",
      features: [
        "Full property preparation",
        "Kitchen deep clean",
        "Bathroom sanitisation",
        "Floor and surface cleaning",
      ],
      image: moveImage,
    },
    {
      icon: Briefcase,
      title: "Post-Construction Cleaning",
      description:
        "We remove fine dust, debris, and renovation residue so you can enjoy the finished results of your project.",
      features: ["Construction dust removal", "Window and frame cleaning"],
      image: constructionImage,
    },
    {
      icon: ShoppingBag,
      title: "Airbnb Cleaning",
      description:
        "Reliable, quick-turnaround cleans tailored for Airbnb hosts and holiday-let owners. We reset your property between guests, refresh linens (if provided), restock essentials, and ensure your space is spotless, welcoming, and ready for the next arrival.",
      features: ["Quick turnaround", "Linen changes"],
      image: airbnbImage,
    },
  ];
  const faqs = [
    {
      question: "Do you bring your own cleaning supplies?",
      answer:
        "Yes! We bring all necessary cleaning supplies and equipment. All our products are eco-friendly and safe for your family and pets. If you prefer us to use your specific products, just let us know.",
    },
    {
      question: "Are you insured?",
      answer:
        "Absolutely. We carry full liability insurance and all our cleaners are vetted, trained, and insured for your peace of mind.",
    },
    {
      question: "How do I book a service?",
      answer:
        "You can book through our website quote form, call us directly, or message us on WhatsApp. We'll confirm your appointment and send a reminder before we arrive.",
    },
    {
      question: "Do I need to be home during the cleaning?",
      answer:
        "Not necessarily. Many of our clients provide access and go about their day. We're happy to work around your schedule and preferences.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We proudly serve the Melton Mowbray area and surrounding locations. Contact us to confirm if we cover your specific location.",
    },
  ];
  const scrollToServices = () => {
    document.getElementById("services-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Our Services</h1>
              <p className="text-lg md:text-xl text-foreground/80 mb-8">
                Comprehensive cleaning solutions tailored to your needs. From regular maintenance to specialised deep
                cleans.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/quote">
                    Get Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" onClick={scrollToServices}>
                  View All Services
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section id="services-section" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-16 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="relative group h-64 md:h-80 rounded-lg overflow-hidden shadow-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center text-primary-foreground font-bold text-lg">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 text-base leading-relaxed">{service.description}</p>
                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                      >
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/90">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  <Button variant="outline" asChild className="group">
                    <Link to="/quote">
                      Get Quote for This Service
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-primary/5 border-y">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join hundreds of satisfied customers in the Melton Mowbray area
              </p>
              <div className="flex flex-wrap justify-center gap-8 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold">Fast Response</div>
                    <div className="text-sm text-muted-foreground">Quick quotes</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold">Fully Insured</div>
                    <div className="text-sm text-muted-foreground">Peace of mind</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold">5-Star Service</div>
                    <div className="text-sm text-muted-foreground">Rated excellent</div>
                  </div>
                </div>
              </div>
              <Button size="lg" asChild>
                <Link to="/quote">
                  Get Your Free Quote Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <HelpCircle className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Frequently Asked Questions</h2>
                <p className="text-muted-foreground">Everything you need to know about our services</p>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border rounded-lg px-6 bg-background shadow-sm hover:shadow-md transition-shadow"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default Services;
