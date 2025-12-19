import { MapPin, Users, ShieldCheck, Calendar, DollarSign, HeartHandshake } from "lucide-react";

const benefits = [
  {
    icon: MapPin,
    title: "Australia-Wide Coverage",
    description: "Interstate freight transport connecting all major Australian cities and regional areas.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Compliance",
    description: "Professional operations with strict adherence to safety standards and regulatory compliance.",
  },
  {
    icon: Calendar,
    title: "Reliable Scheduling",
    description: "Consistent and dependable delivery timelines with proactive communication.",
  },
  {
    icon: Users,
    title: "Professional Team",
    description: "Experienced drivers and logistics coordinators committed to excellence.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "Fair and transparent pricing with no hidden fees or surprises.",
  },
  {
    icon: HeartHandshake,
    title: "Customer First",
    description: "Dedicated support and personalised service for every shipment.",
  },
];

export const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-foreground mb-4">Why Choose OFC?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're committed to delivering your freight safely, on time, and with complete peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="bg-card rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <benefit.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
