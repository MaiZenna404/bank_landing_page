import { useState } from "react";
import { Button } from "@/components/ui/button";
export function Reviews() {

    // Reviews data

    interface Review {
        id: number;
        content: string;
        author: string;
        role: string;
        rating: number;
        image: string;
    }

    const reviews: Review[] = [
      {
        id: 1,
        content:
          "Switching to FinanceHub was the best financial decision I've ever made. The interface is intuitive, the customer service is exceptional, and I've actually started saving money!",
        author: "Sarah Johnson",
        role: "Small Business Owner",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 2,
        content:
          "As someone who travels frequently, having a bank that doesn't charge foreign transaction fees and offers real-time currency conversion has been a game changer.",
        author: "Michael Chen",
        role: "Digital Nomad",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 3,
        content:
          "The savings features and automated budgeting tools have helped me pay off my student loans two years earlier than expected. I couldn't be happier with this service!",
        author: "Priya Patel",
        role: "Software Engineer",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ];

    // Logique pour le carorusel : savoir quel est l'index de la review active (= qu'on voit), avancer et reculer selon la review active

        // Reveiw[0] par défaut
        const [activeIndex, setActiveIndex] = useState(0);
        // Fonction pour avancer d'une review
        const nextTestimonial = () => {
          setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        };
        // Fonction pour reculer d'une review
        const prevTestimonial = () => {
          setActiveIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };
    
    return (
      <>
        <section
          id="reviews"
          className="section bg-emerald-950/45 text-white pb-10 pt-10"
        >
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-white font-medium text-sm mb-4">
                Customers Reviews
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                What our customers say
              </h2>
              <p className="text-green-400 text-lg max-w-2xl mx-auto">
                Join thousands of satisfied customers who've transformed their
                banking experience with FinanceHub.
              </p>
            </div>

            {/* reviews Carousel */}
            <div className="relative max-w-4xl mx-auto px-6 lg:px-0">
              <div className="p-8 bg-black/15 rounded-2xl shadow-green-700 shadow-md border-gray-400/25 border-1">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Testimonial Image */}
                  <div className="w-24 h-24 md:w-32 md:h-32 mx-auto md:mx-0 flex-shrink-0">
                    <img
                      src={reviews[activeIndex].image}
                      alt={reviews[activeIndex].author}
                      className="w-full h-full object-cover rounded-full border-4 border-primary-100"
                    />
                  </div>

                  {/* Testimonial Content */}
                  <div className="flex-grow">
                    {/* Stars */}
                    <div className="flex mb-4">
                      {Array(reviews[activeIndex].rating)
                        .fill(null)
                        .map((_, i) => (
                          <i
                            key={i}
                            className="h-5 w-5 pi pi-star text-yellow-400 fill-yellow-400"
                          />
                        ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg md:text-xl font-medium mb-6">
                      "{reviews[activeIndex].content}"
                    </blockquote>

                    {/* Author */}
                    <div>
                      <h4 className="font-bold text-lg">
                        {reviews[activeIndex].author}
                      </h4>
                      <p className="text-gray-500">
                        {reviews[activeIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-center mt-8 space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30 items-center"
                  onClick={prevTestimonial}
                >
                  <i className="pi pi-arrow-left w-6" />
                  <span className="sr-only">Previous testimonial</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30 items-center"
                  onClick={nextTestimonial}
                >
                  <i className="pi pi-arrow-right w-6" />
                  <span className="sr-only">Next testimonial</span>
                </Button>
              </div>

              {/* Indicators */}
              <div className="flex justify-center mt-4 space-x-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      activeIndex === index ? "bg-emerald-400" : "bg-white/30"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </>
    );
}