import React from 'react';
import { Building, Users, Star } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const CampusLife: React.FC = () => {
  const { isVisible } = useIntersectionObserver();

  return (
    <section id="campus" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-animate id="campus-header">
          <h2 className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            isVisible['campus-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Campus Life & Experience
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible['campus-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Experience a vibrant community where learning extends far beyond the classroom.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">A Home Away From Home</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our beautiful 500-acre campus provides the perfect environment for academic growth and personal development. 
              From state-of-the-art facilities to historic buildings, every corner tells a story of excellence.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-xl">
                <Building className="w-8 h-8 text-blue-600 mb-2" />
                <h4 className="font-semibold text-gray-900">Modern Facilities</h4>
                <p className="text-sm text-gray-600">State-of-the-art labs and libraries</p>
              </div>
              <div className="bg-green-50 p-4 rounded-xl">
                <Users className="w-8 h-8 text-green-600 mb-2" />
                <h4 className="font-semibold text-gray-900">Student Organizations</h4>
                <p className="text-sm text-gray-600">500+ clubs and activities</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Campus Life"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-semibold">4.9/5 Student Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusLife;