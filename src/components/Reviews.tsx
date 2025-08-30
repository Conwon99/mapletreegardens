import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Mitchell",
      location: "Troon",
      rating: 5,
      text: "Gordon transformed our overgrown garden into a beautiful space. His attention to detail and professionalism is outstanding. Highly recommend!",
      service: "Garden Makeover"
    },
    {
      name: "James Robertson",
      location: "Prestwick", 
      rating: 5,
      text: "Excellent tree work services. Gordon safely removed two large trees and cleaned up perfectly. Will definitely use again.",
      service: "Tree Removal"
    },
    {
      name: "Margaret Wilson",
      location: "Ayr",
      rating: 5,
      text: "Regular garden maintenance for over a year now. Always reliable, professional, and reasonably priced. Garden looks amazing year-round.",
      service: "Garden Maintenance"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-accent fill-current" : "text-muted-foreground/30"
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-4">
            What Our <span className="text-primary">Customers</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers across Troon & Ayrshire
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="card-service bg-background p-8 text-center"
            >
              <div className="flex justify-center mb-4">
                {renderStars(review.rating)}
              </div>
              
              <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                "{review.text}"
              </blockquote>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground text-lg">
                  {review.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {review.location} • {review.service}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-primary/10 rounded-full px-8 py-4">
            <div className="flex items-center gap-1">
              {renderStars(5)}
            </div>
            <div className="text-foreground font-semibold">
              5.0 out of 5 stars from 50+ reviews
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;