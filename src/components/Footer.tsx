import React from 'react';
import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">Prestige University</span>
                <div className="text-xs text-gray-400">Excellence Since 1875</div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Shaping tomorrow's leaders through world-class education, groundbreaking research, and vibrant campus life.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Academics</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Undergraduate Programs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Graduate School</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Professional Schools</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Online Learning</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Campus Life</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Student Organizations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Athletics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Housing & Dining</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Events & Activities</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Visit Us</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>admissions@prestige.edu</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>1875 University Ave, Boston, MA</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Prestige University. All rights reserved. Inspiring excellence for 150 years.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;