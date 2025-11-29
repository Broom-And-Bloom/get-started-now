import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const quoteSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(1, "Phone is required").max(20),
  address: z.string().trim().min(1, "Address is required").max(200),
  propertyType: z.string().min(1, "Property type is required"),
  bedrooms: z.string().min(1, "Number of bedrooms is required"),
  services: z.array(z.string()).min(1, "Select at least one service"),
  additionalInfo: z.string().trim().max(500).optional(),
});

const Quote = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    propertyType: "",
    bedrooms: "",
    services: [] as string[],
    additionalInfo: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = [
    "Domestic Cleaning",
    "Commercial Cleaning",
    "End of Tenancy Cleaning",
    "Deep/One-Off Cleaning",
    "Move-In/Move-Out Cleaning",
    "Post-Construction Cleaning",
    "Airbnb/Holiday Let Cleaning",
    "Property Services"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validated = quoteSchema.parse(formData);
      
      const whatsappMessage = encodeURIComponent(
        `New Quote Request:\n\n` +
        `Name: ${validated.name}\n` +
        `Email: ${validated.email}\n` +
        `Phone: ${validated.phone}\n` +
        `Address: ${validated.address}\n` +
        `Property Type: ${validated.propertyType}\n` +
        `Bedrooms: ${validated.bedrooms}\n` +
        `Services: ${validated.services.join(", ")}\n` +
        `Additional Info: ${validated.additionalInfo || "N/A"}`
      );
      
      window.open(`https://wa.me/447541786867?text=${whatsappMessage}`, '_blank');
      
      toast({
        title: "Quote Request Sent!",
        description: "We'll get back to you with a personalized quote soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        propertyType: "",
        bedrooms: "",
        services: [],
        additionalInfo: ""
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Your Free Quote</h1>
              <p className="text-lg text-muted-foreground">
                Tell us about your cleaning needs and we'll provide a personalized quote within 24 hours.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Quote Request Form</CardTitle>
                <CardDescription>All fields marked with * are required</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        required
                        maxLength={100}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        required
                        maxLength={20}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                      maxLength={255}
                    />
                  </div>

                  {/* Property Information */}
                  <div>
                    <Label htmlFor="address">Property Address *</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                      placeholder="Full address including postcode"
                      required
                      maxLength={200}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="propertyType">Property Type *</Label>
                      <Select
                        value={formData.propertyType}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, propertyType: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="flat">Flat/Apartment</SelectItem>
                          <SelectItem value="house">House</SelectItem>
                          <SelectItem value="office">Office</SelectItem>
                          <SelectItem value="commercial">Commercial Space</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="bedrooms">Number of Bedrooms *</Label>
                      <Select
                        value={formData.bedrooms}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, bedrooms: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select bedrooms" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="studio">Studio</SelectItem>
                          <SelectItem value="1">1 Bedroom</SelectItem>
                          <SelectItem value="2">2 Bedrooms</SelectItem>
                          <SelectItem value="3">3 Bedrooms</SelectItem>
                          <SelectItem value="4">4 Bedrooms</SelectItem>
                          <SelectItem value="5+">5+ Bedrooms</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Services Selection */}
                  <div>
                    <Label className="mb-3 block">Services Required *</Label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {serviceOptions.map((service) => (
                        <div key={service} className="flex items-center space-x-2">
                          <Checkbox
                            id={service}
                            checked={formData.services.includes(service)}
                            onCheckedChange={() => handleServiceToggle(service)}
                          />
                          <label
                            htmlFor={service}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                          >
                            {service}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="additionalInfo">Additional Information</Label>
                    <Textarea
                      id="additionalInfo"
                      rows={4}
                      value={formData.additionalInfo}
                      onChange={(e) => setFormData(prev => ({ ...prev, additionalInfo: e.target.value }))}
                      placeholder="Any specific requirements, preferred dates, or questions..."
                      maxLength={500}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Get My Free Quote"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to be contacted about our services. We respect your privacy and won't share your information.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quote;
