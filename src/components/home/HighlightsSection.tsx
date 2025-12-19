import { Truck, Clock, Shield, Award } from "lucide-react";

const highlights = [
  {
    icon: Truck,
    title: "Interstate Transport",
    description: "Australia-wide coverage",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Reliable scheduling",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Compliant operations",
  },
  {
    icon: Award,
    title: "Trusted Service",
    description: "Professional team",
  },
];

export const HighlightsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="bg-secondary rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
