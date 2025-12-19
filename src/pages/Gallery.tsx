import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { X } from "lucide-react";
import heroImage from "@/assets/hero-truck.jpg";
import fleetImage from "@/assets/fleet-trucks.jpg";
import highwayImage from "@/assets/highway-cta.jpg";

const galleryImages = [
  {
    src: heroImage,
    alt: "Freight truck on Australian highway at sunset",
    category: "On-Road",
  },
  {
    src: fleetImage,
    alt: "Modern trucking fleet at depot",
    category: "Fleet",
  },
  {
    src: highwayImage,
    alt: "Interstate highway transport",
    category: "On-Road",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Fleet", "On-Road", "Operations"];
  const filteredImages = filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-foreground mb-6">Gallery</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Take a look at our fleet, operations, and interstate transport in action. 
              These images showcase our commitment to professional freight services.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2 rounded-lg font-medium transition-all duration-200 ${
                  filter === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-300 flex items-center justify-center">
                  <span className="text-primary-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Image
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary/80 text-primary-foreground text-sm px-3 py-1 rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-12 italic">
            Photos shown are representative examples. Contact us to see our current fleet.
          </p>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
          />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
