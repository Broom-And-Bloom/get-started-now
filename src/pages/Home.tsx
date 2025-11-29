import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles, CheckCircle2, Phone, Calendar, Leaf, Shield } from "lucide-react";
import { motion } from "framer-motion";
import logoImage from "@/assets/BroomAndBloomLogo.jpeg";
import deepCleanImage from "@/assets/deep-cleaning.jpg";
import whyChooseImage from "@/assets/cleaning-bathroom.jpg";
const Home = () => {
  const howItWorks = [{
    icon: Phone,
    title: "Get in Touch",
    description: "Contact us via phone, WhatsApp, or our quote form to discuss your needs"
  }, {
    icon: Sparkles,
    title: "Free Property Visit",
    description: "We'll visit your property to assess the job and provide an accurate quote"
  }, {
    icon: Calendar,
    title: "Book Your Clean",
    description: "Once you're happy with the quote, we'll schedule a convenient time"
  }, {
    icon: CheckCircle2,
    title: "Enjoy Your Space",
    description: "Our professional team delivers exceptional results every time"
  }];
  return <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-[#2D2E2B]">
        <div className="absolute inset-0 bg-contain bg-center bg-no-repeat" style={{
        backgroundImage: `url(${logoImage})`
      }}>
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        </div>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="relative z-10 max-w-4xl mx-auto px-4 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Broom & Bloom
Cleaning and Property Services<br />
            
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

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Broom & Bloom</h2>
            <div className="text-lg text-muted-foreground space-y-4">
              <p>
                Welcome to Broom & Bloom, your trusted partner for professional cleaning services across Leicestershire. 
                We're dedicated to transforming homes and businesses with meticulous care, attention to detail, and a commitment to sustainable practices.
              </p>
              <p>
                Our experienced team takes pride in delivering exceptional results every time. Whether you need regular maintenance cleaning, 
                a thorough deep clean, or specialized services like end-of-tenancy cleaning, we have the expertise to exceed your expectations.
              </p>
              <p>
                What sets us apart is our dedication to using eco-friendly products wherever possible, ensuring a safe and healthy environment 
                for your family, pets, and employees. All our staff are DBS-checked, fully insured, and professionally trained to deliver 
                the highest standards of service.
              </p>
            </div>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Trust Signals */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.6
            }} viewport={{
              once: true
            }}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Broom & Bloom?</h2>
                <p className="text-lg text-muted-foreground mb-6">We're more than just a cleaning company. We're your trusted partner for creating healthy, spotless spaces across Leicestershire. Our commitment to excellence, sustainability, and customer satisfaction sets us apart.</p>
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
                    <Leaf className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Eco-Friendly Products *</h4>
                      <p className="text-muted-foreground">We aim where possible to use eco friendly products in your home.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.6
            }} viewport={{
              once: true
            }} className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <img src={whyChooseImage} alt="Professional cleaning supplies and tools" className="w-full h-full object-cover" />
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
            {howItWorks.map((step, index) => <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">{index + 1}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${deepCleanImage})`
      }}>
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }} className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">Get your free, no-obligation quote today and discover why residents across the Melton Mowbray area trust Broom & Bloom.</p>
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
    </div>;
};
export default Home;