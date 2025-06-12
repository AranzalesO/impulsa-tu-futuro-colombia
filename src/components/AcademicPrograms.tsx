import React from 'react';
import { Calculator, Briefcase, Heart, Palette, Microscope, Globe, CheckCircle } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const AcademicPrograms: React.FC = () => {
  const { isVisible } = useIntersectionObserver();

  const programs = [
    {
      icon: Calculator,
      title: "Engineering & Technology",
      description: "Cutting-edge programs in computer science, electrical, mechanical, and biomedical engineering.",
      color: "from-blue-500 to-blue-600",
      programs: ["Computer Science", "Electrical Engineering", "Biomedical Engineering"]
    },
    {
      icon: Briefcase,
      title: "Business & Economics",
      description: "Top-ranked undergraduate business programs with global perspective and practical experience.",
      color: "from-green-500 to-green-600",
      programs: ["Business Administration", "Finance", "International Business"]
    },
    {
      icon: Heart,
      title: "Medicine & Health Sciences",
      description: "Pre-medical and health science programs with direct pathways to medical school.",
      color: "from-red-500 to-red-600",
      programs: ["Pre-Medicine", "Nursing", "Public Health"]
    },
    {
      icon: Palette,
      title: "Arts & Humanities",
      description: "Creative and critical thinking programs that shape cultural understanding.",
      color: "from-purple-500 to-purple-600",
      programs: ["Fine Arts", "Literature", "Philosophy"]
    },
    {
      icon: Microscope,
      title: "Sciences & Research",
      description: "Groundbreaking research opportunities in natural and physical sciences.",
      color: "from-indigo-500 to-indigo-600",
      programs: ["Biology", "Chemistry", "Physics"]
    },
    {
      icon: Globe,
      title: "Social Sciences",
      description: "Understanding society, culture, and human behavior through rigorous study.",
      color: "from-orange-500 to-orange-600",
      programs: ["Psychology", "Sociology", "Political Science"]
    }
  ];

  return (
    <section id="academics" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-animate id="academics-header">
          <h2 className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            isVisible['academics-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Undergraduate Excellence
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible['academics-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Discover world-renowned undergraduate programs across diverse fields of study, taught by distinguished faculty.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              data-animate
              id={`program-${index}`}
              className={`group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible[`program-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <program.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{program.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{program.description}</p>
              <div className="space-y-2">
                {program.programs.map((prog, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-700">{prog}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicPrograms;