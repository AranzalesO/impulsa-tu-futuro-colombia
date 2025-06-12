import React from 'react';
import { GraduationCap } from 'lucide-react';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-800 to-blue-900 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-blue-900">Prestige University</span>
              <div className="text-xs text-gray-600 -mt-1">Excellence in Education Since 1875</div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#academics" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">Academics</a>
            <a href="#postgraduate" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">Graduate Studies</a>
            <a href="#admissions" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">Admissions</a>
            <a href="#campus" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">Campus Life</a>
            <a href="#research" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">Research</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">Visit</a>
            <button className="bg-gradient-to-r from-blue-800 to-blue-900 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 font-medium">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;