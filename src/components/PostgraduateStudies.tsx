import React from 'react';
import { BookOpenCheck, FlaskConical, Target, Users, TrendingUp, Award, GraduationCap } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const PostgraduateStudies: React.FC = () => {
  const { isVisible } = useIntersectionObserver();

  const masterPrograms = [
    "MBA", "MS Computer Science", "MA Education", "MS Engineering",
    "MA Psychology", "MS Data Science", "MA International Relations", "MS Finance"
  ];

  const doctoralPrograms = [
    "PhD Computer Science", "PhD Medicine", "PhD Engineering", "PhD Psychology",
    "PhD Business", "PhD Education", "PhD Biology", "PhD Physics"
  ];

  const features = [
    {
      icon: Target,
      title: "Research Excellence",
      description: "Join groundbreaking research projects with $500M+ annual funding across all disciplines.",
      stats: "500+ Active Research Projects",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Work closely with world-renowned faculty, including Nobel laureates and industry leaders.",
      stats: "1:4 Graduate Student-Faculty Ratio",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Career Outcomes",
      description: "95% of graduates secure positions in top companies or continue to prestigious postdocs.",
      stats: "95% Employment Rate",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="postgraduate" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-animate id="postgraduate-header">
          <h2 className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            isVisible['postgraduate-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Graduate & Postgraduate Studies
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible['postgraduate-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Advance your expertise with our world-class graduate programs, cutting-edge research opportunities, and distinguished faculty mentorship.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div data-animate id="masters-programs" className={`transition-all duration-1000 ${
              isVisible['masters-programs'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center">
                  <BookOpenCheck className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Master's Programs</h3>
                  <p className="text-gray-600">Advanced degrees for career advancement</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {masterPrograms.map((program, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:bg-blue-100 transition-colors">
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-gray-800">{program}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div data-animate id="doctoral-programs" className={`transition-all duration-1000 delay-200 ${
              isVisible['doctoral-programs'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center">
                  <FlaskConical className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Doctoral Programs</h3>
                  <p className="text-gray-600">Research-focused advanced degrees</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {doctoralPrograms.map((program, index) => (
                  <div key={index} className="bg-purple-50 p-4 rounded-xl border border-purple-100 hover:bg-purple-100 transition-colors">
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="w-4 h-4 text-purple-600" />
                      <span className="text-sm font-medium text-gray-800">{program}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              data-animate
              id={`grad-feature-${index}`}
              className={`group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 ${
                isVisible[`grad-feature-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
              <div className="bg-gradient-to-r from-gray-100 to-gray-50 p-3 rounded-lg">
                <p className="text-sm font-semibold text-gray-800">{feature.stats}</p>
              </div>
            </div>
          ))}
        </div>

        <div data-animate id="grad-cta" className={`bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white transition-all duration-1000 ${
          isVisible['grad-cta'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <h3 className="text-3xl font-bold mb-4">Ready to Advance Your Career?</h3>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join our community of graduate scholars and researchers. Applications for Fall 2025 are now open.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              Apply for Graduate Programs
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
              Graduate School Info Session
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostgraduateStudies;