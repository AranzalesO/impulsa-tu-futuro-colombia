import React from 'react';
import { Star } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  major: string;
}

const Testimonials: React.FC = () => {
  const { isVisible } = useIntersectionObserver();

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Chen",
      role: "Computer Science Senior",
      content: "The research opportunities here are incredible. I've published two papers and landed an internship at Google thanks to my professors' mentorship.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      major: "Computer Science"
    },
    {
      name: "Marcus Johnson",
      role: "MBA Graduate '23",
      content: "The business school's global perspective and networking opportunities opened doors I never imagined. Now I'm leading a startup in Silicon Valley.",
      rating: 5,
      image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      major: "Business Administration"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Medical School Alumna",
      content: "The medical program's emphasis on both clinical excellence and research prepared me perfectly for my residency at Johns Hopkins.",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      major: "Medicine"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-animate id="testimonials-header">
          <h2 className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            isVisible['testimonials-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Student Success Stories
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible['testimonials-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Hear from our students and alumni who are making their mark in the world.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-animate
              id={`testimonial-${index}`}
              className={`bg-gray-50 p-8 rounded-2xl shadow-lg transition-all duration-700 hover:shadow-xl hover:-translate-y-1 ${
                isVisible[`testimonial-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-blue-600 text-sm font-medium">{testimonial.major}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;