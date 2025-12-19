import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Target, ShieldCheck, Users, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import fleetImage from "@/assets/fleet-trucks.jpg";

const values = [
  {
    icon: ShieldCheck,
    title: "Safety & Compliance",
    description: "We prioritise safety in every aspect of our operations, ensuring regulatory compliance and protecting your cargo.",
  },
  {
    icon: Target,
    title: "Reliability & Trust",
    description: "Our clients count on us for consistent, on-time deliveries. We build trust through dependable service.",
  },
  {
    icon: Users,
    title: "Professional Team",
    description: "Experienced drivers and coordinators who understand the importance of your freight.",
  },
  {
    icon: Handshake,
    title: "Customer Partnerships",
    description: "We believe in building long-term relationships with our clients, not just completing transactions.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-foreground mb-6">About OFC</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Overall Freight Carrier Pty. Ltd. is a professional interstate freight transport 
              company committed to delivering reliable, safe, and efficient logistics solutions 
              across Australia.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-foreground mb-6">Who We Are</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Founded on principles of reliability and professionalism, OFC provides interstate 
                freight transportation services for businesses and individuals across Australia. 
                Under the leadership of <strong>Sandip Singh Tathe</strong>, our team is dedicated 
                to excellence in every shipment.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We understand that your cargo is critical to your business operations. That's why 
                we treat every load with the utmost care, ensuring safe handling and timely delivery 
                to its destination.
              </p>
              <Button variant="accent" size="lg" asChild>
                <Link to="/services" className="flex items-center gap-2">
                  Explore Our Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={fleetImage}
                alt="OFC professional trucking fleet"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-foreground mb-4">Our Mission & Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              To provide Australia with reliable, compliant, and professional freight transport 
              services that businesses can depend on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-primary-foreground mb-6">Ready to Work Together?</h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Contact us today to discuss your freight transport requirements.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact" className="flex items-center gap-2">
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
