import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ctaImage from "@/assets/highway-cta.jpg";

export const CTASection = () => {
  return (
    <section className="relative py-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={ctaImage}
          alt="Australian highway at sunrise"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-primary-foreground mb-6">
          Need Interstate Freight Transport?
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
          Get a competitive quote for your freight needs. Our team is ready to help 
          you move your cargo safely across Australia.
        </p>
        <Button variant="hero" size="xl" asChild>
          <Link to="/contact" className="flex items-center gap-2">
            Get a Quote Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
};
