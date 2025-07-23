import React from "react";
import { testimonials } from "@/data/testimonials";
import { SectionTitle } from "../ui/Titles";

const TestimonialsSection = () => {
  return (
<section className="py-8 bg-gradient-to-br from-amber-50 via-stone-100 to-neutral-200">      <div className="container mx-auto text-center">
        <SectionTitle title="What People Say" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-white rounded-lg shadow-md p-6"
            >
              <div>
                <div className="text-yellow-500 mb-3">
                  {"\u2605".repeat(testimonial.rating)}
                </div>
                <p className="text-gray-700 mb-4">{testimonial.text}</p>
              </div>
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium">- {testimonial.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
