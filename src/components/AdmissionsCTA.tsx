import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';

const AdmissionsCTA: React.FC = () => {
  return (
    <section id="admissions" className="py-20 bg-gradient-to-r from-blue-800 to-blue-900">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Join Our Community?
        </h2>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          Take the first step toward an extraordinary education. Our admissions team is here to guide you 
          through every step of the application process.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="bg-white text-blue-800 px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            Apply Now
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-800 transition-all duration-300">
            Schedule a Visit
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-6 text-white">
          <div className="flex items-center justify-center space-x-2">
            <Calendar className="w-5 h-5" />
            <span>Application Deadline: January 15</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Clock className="w-5 h-5" />
            <span>Rolling Admissions Available</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <User className="w-5 h-5" />
            <span>Need-Based Financial Aid</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsCTA;