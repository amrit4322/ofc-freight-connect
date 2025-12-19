import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "OFC delivered our freight on time with great communication throughout the journey. Highly reliable interstate service that we depend on for our operations.",
    author: "Michael T.",
    role: "Operations Manager",
    company: "Logistics Client",
  },
  {
    quote: "Professional team from start to finish. They handled our time-sensitive cargo with care and delivered ahead of schedule. Will definitely use again.",
    author: "Sarah L.",
    role: "Business Owner",
    company: "Retail Business",
  },
  {
    quote: "We've been using OFC for our interstate freight needs for over a year now. Consistent, reliable, and great customer service every time.",
    author: "David K.",
    role: "Supply Chain Manager",
    company: "Manufacturing Company",
  },
  {
    quote: "Competitive pricing without compromising on service quality. The driver was professional and kept us informed about the delivery status.",
    author: "Amanda R.",
    role: "Office Manager",
    company: "Distribution Company",
  },
  {
    quote: "Finally found a freight company that understands the importance of on-time delivery. OFC has become our go-to for all interstate transport.",
    author: "James W.",
    role: "Director",
    company: "Import Business",
  },
  {
    quote: "Excellent communication and tracking. We always know where our freight is. The team goes above and beyond to ensure smooth delivery.",
    author: "Lisa M.",
    role: "Procurement Manager",
    company: "Construction Firm",
  },
];

const Testimonials = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-foreground mb-6">What Our Clients Say</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Don't just take our word for it. Here's what businesses across Australia 
              say about our freight transport services.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-all duration-300 relative"
              >
                <Quote className="w-10 h-10 text-accent/20 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-primary-foreground mb-6">Experience the OFC Difference</h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Join our satisfied clients and experience professional freight transport.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact" className="flex items-center gap-2">
              Get Your Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
