import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(1, "Phone is required").max(20),
  message: z.string().trim().min(1, "Message is required").max(1000)
});
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const validated = contactSchema.parse(formData);

      // Encode data for WhatsApp
      const whatsappMessage = encodeURIComponent(`New Contact Form Submission:\n\nName: ${validated.name}\nEmail: ${validated.email}\nPhone: ${validated.phone}\nMessage: ${validated.message}`);

      // Open WhatsApp
      const whatsappUrl = `https://wa.me/447541786867?text=${whatsappMessage}`;
      const popup = window.open(whatsappUrl, '_blank');
      if (!popup || popup.closed || typeof popup.closed === 'undefined') {
        toast({
          title: "Opening WhatsApp...",
          description: <div className="space-y-2">
              <p>If WhatsApp doesn't open automatically, click below:</p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-primary underline font-medium">
                Open WhatsApp
              </a>
              <p className="text-xs mt-2">Or call us: 07541 786867</p>
            </div>,
          duration: 10000
        });
      } else {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you as soon as possible."
        });
      }
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
              <p className="text-lg text-muted-foreground">
                Have questions? We'd love to hear from you. Choose your preferred contact method below.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>Fill out the form and we'll respond within 24 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} required maxLength={100} />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required maxLength={255} />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone *</Label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required maxLength={20} />
                    </div>
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required maxLength={1000} />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info & WhatsApp */}
              <div className="space-y-6">
                <Card className="bg-primary text-primary-foreground">
                  <CardHeader>
                    <CardTitle>Quick Contact via WhatsApp</CardTitle>
                    <CardDescription className="text-primary-foreground/80">
                      Get instant responses to your questions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="secondary" size="lg" className="w-full" asChild>
                      <a href="https://wa.me/447541786867" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Chat on WhatsApp
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <a href="tel:+447541786867" className="text-muted-foreground hover:text-primary">
                          +44 7541 786867
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:info@broomandbloom.co.uk" className="text-muted-foreground hover:text-primary">
                          info@broomandbloom.co.uk
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Service Area</p>
                        <p className="text-muted-foreground">
                          Melton Mowbray & Surrounding Areas
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-accent/20">
                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground">Business Hours:
Monday - Friday: 8:00 AM - 6:00 PM
                    <strong>Business Hours:</strong><br />
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      ​<br />
                      Sunday: Closed
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Contact;