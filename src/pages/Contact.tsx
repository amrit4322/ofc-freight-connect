import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Phone, Mail, MapPin, Send, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Quote Request Received!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-foreground mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to discuss your freight requirements? Get in touch with our team 
              for a competitive quote or any enquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-foreground mb-8">Get in Touch</h2>
              
              <div className="space-y-6 mb-10">
                <a
                  href="tel:+61000000000"
                  className="flex items-start gap-4 p-4 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Phone className="w-6 h-6 text-accent group-hover:text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Call Us</p>
                    <p className="text-muted-foreground">+61 000 000 000</p>
                    <p className="text-sm text-accent mt-1">Click to call</p>
                  </div>
                </a>

                <a
                  href="mailto:sandip@ofclogistics.com.au"
                  className="flex items-start gap-4 p-4 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Mail className="w-6 h-6 text-accent group-hover:text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Email Us</p>
                    <p className="text-muted-foreground">sandip@ofclogistics.com.au</p>
                    <p className="text-sm text-accent mt-1">Click to email</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Service Area</p>
                    <p className="text-muted-foreground">Australia-wide Interstate</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Response Time</p>
                    <p className="text-muted-foreground">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                <h2 className="text-2xl font-bold text-foreground mb-2">Request a Quote</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll provide a competitive quote for your freight needs.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Your name"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company
                      </label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Company name (optional)"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="Your phone number"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="pickup" className="block text-sm font-medium text-foreground mb-2">
                        Pickup Location *
                      </label>
                      <Input
                        id="pickup"
                        name="pickup"
                        required
                        placeholder="Suburb, State"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="delivery" className="block text-sm font-medium text-foreground mb-2">
                        Delivery Location *
                      </label>
                      <Input
                        id="delivery"
                        name="delivery"
                        required
                        placeholder="Suburb, State"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="loadType" className="block text-sm font-medium text-foreground mb-2">
                        Load Type *
                      </label>
                      <Input
                        id="loadType"
                        name="loadType"
                        required
                        placeholder="e.g., Pallets, General Freight"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="pickupDate" className="block text-sm font-medium text-foreground mb-2">
                        Preferred Pickup Date
                      </label>
                      <Input
                        id="pickupDate"
                        name="pickupDate"
                        type="date"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="weight" className="block text-sm font-medium text-foreground mb-2">
                      Approximate Weight/Size
                    </label>
                    <Input
                      id="weight"
                      name="weight"
                      placeholder="e.g., 500kg, 2 pallets"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Additional Details
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your freight requirements..."
                      rows={4}
                    />
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>We typically respond within 24 hours</span>
                  </div>

                  <Button
                    type="submit"
                    variant="accent"
                    size="xl"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Quote Request
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-foreground text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "How do I get a quote?",
                a: "Fill out our contact form above or call us directly. We'll provide a competitive quote within 24 hours.",
              },
              {
                q: "What can be transported?",
                a: "We transport general freight, palletised goods, and full truckloads across interstate routes.",
              },
              {
                q: "Is my cargo insured?",
                a: "Yes, we maintain comprehensive insurance for all freight transported with OFC.",
              },
              {
                q: "How do I track my delivery?",
                a: "We provide regular updates via phone or email. GPS tracking is available on request.",
              },
              {
                q: "What are your payment terms?",
                a: "We offer flexible payment options including credit accounts for regular clients.",
              },
              {
                q: "How far in advance should I book?",
                a: "We recommend booking 2-3 days ahead for standard freight, though we accommodate urgent requests when possible.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-lg font-bold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
