import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Truck, Package, Calendar, Boxes, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Truck,
    title: "Interstate Freight Transport",
    description: "Reliable freight transport services connecting all Australian states. From Sydney to Perth, Melbourne to Brisbane - we've got you covered.",
    features: ["Door-to-door delivery", "Major city routes", "Regional coverage"],
  },
  {
    icon: Package,
    title: "Full Truckload (FTL)",
    description: "Dedicated truck solutions for large loads. Your cargo travels directly from pickup to delivery without any stops.",
    features: ["Dedicated vehicle", "Direct transport", "Maximum efficiency"],
  },
  {
    icon: Calendar,
    title: "Scheduled Deliveries",
    description: "Time-sensitive freight movements with planned pickup and delivery windows. Perfect for regular shipments.",
    features: ["Flexible scheduling", "Regular routes", "Planned deliveries"],
  },
  {
    icon: Boxes,
    title: "General Freight & Pallets",
    description: "Flexible transport solutions for various load sizes. Whether it's palletised goods or general freight, we handle it.",
    features: ["Various load sizes", "Pallet handling", "Flexible options"],
  },
  {
    icon: Settings,
    title: "Logistics Coordination",
    description: "End-to-end transport assistance and coordination. We help manage your freight logistics from start to finish.",
    features: ["Transport planning", "Coordination support", "Communication updates"],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-foreground mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive freight transport solutions tailored to your business needs. 
              From interstate freight to logistics coordination, we deliver.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-foreground mb-4">Service Areas</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We provide interstate freight transport across all major Australian routes.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {["New South Wales", "Victoria", "Queensland", "Western Australia", "South Australia", "Tasmania", "Northern Territory", "ACT"].map((state) => (
              <div
                key={state}
                className="bg-card rounded-lg p-4 text-center border border-border"
              >
                <span className="text-foreground font-medium">{state}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-primary-foreground mb-6">Get a Quote in 60 Seconds</h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Tell us about your freight requirements and we'll provide a competitive quote.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact" className="flex items-center gap-2">
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
