import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import fleetImage from "@/assets/fleet-trucks.jpg";

const capabilities = [
  "Modern trucking fleet",
  "General and full truck loads",
  "Interstate capability",
  "GPS tracking available",
  "Fully insured operations",
  "Flexible scheduling",
];

export const FleetSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src={fleetImage}
              alt="OFC modern trucking fleet"
              className="w-full h-[400px] lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-foreground mb-6">Our Fleet & Capability</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At OFC, we maintain a modern fleet of well-serviced vehicles ready for interstate 
              freight transport. Our focus is on efficiency, compliance, and delivering your cargo 
              safely across Australia.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {capabilities.map((capability) => (
                <div key={capability} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{capability}</span>
                </div>
              ))}
            </div>

            <Button variant="accent" size="lg" asChild>
              <Link to="/services" className="flex items-center gap-2">
                View Our Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
