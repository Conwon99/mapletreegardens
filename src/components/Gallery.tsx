import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "/lovable-uploads/garden1.jpg",
      alt: "Professional garden strimming and edging work in Troon",
      title: "Garden Strimming & Edging",
      location: "Troon"
    },
    {
      src: "/lovable-uploads/treecutting.jpg", 
      alt: "Professional tree surgery and removal services in Ayrshire",
      title: "Tree Surgery & Removal",
      location: "Ayr"
    },
    {
      src: "/lovable-uploads/hedge.jpg",
      alt: "Hedge trimming and garden maintenance in Prestwick",
      title: "Hedge Trimming", 
      location: "Prestwick"
    },
    {
      src: "/lovable-uploads/lawnmower.jpg",
      alt: "Lawn care and grass cutting services",
      title: "Lawn Care",
      location: "Troon"
    },
    {
      src: "/lovable-uploads/hedge2.jpg",
      alt: "Additional hedge cutting and garden maintenance work",
      title: "Hedge Maintenance",
      location: "Ayr"
    },
    {
      src: "/lovable-uploads/hero.jpg",
      alt: "Professional garden services and landscaping in Ayrshire",
      title: "Garden Services",
      location: "Prestwick"
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-4">
            Our <span className="text-primary">Work</span> Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take a look at some of our recent projects across Troon, Ayr, and Prestwick
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => openLightbox(index)}
            >
              <div className="relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold text-lg">{image.title}</h3>
                  <p className="text-sm text-white/80">{image.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="max-w-4xl max-h-full">
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <div className="text-center mt-4 text-white">
                <h3 className="font-semibold text-xl">{galleryImages[selectedImage].title}</h3>
                <p className="text-white/80">{galleryImages[selectedImage].location}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;