import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Users, 
  Trophy, 
  Star, 
  Play, 
  ChevronRight, 
  CheckCircle, 
  Award,
  Globe,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Building,
  Calendar,
  Clock,
  User,
  Heart,
  Microscope,
  Palette,
  Calculator,
  Briefcase,
  FlaskConical,
  BookOpenCheck,
  Target,
  TrendingUp
} from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const Counter = ({ end, duration = 2000, prefix = '', suffix = '' }) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
      if (!hasStarted) return;
      
      const startTime = Date.now();
      const endTime = startTime + duration;
      
      const updateCount = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const currentCount = Math.floor(progress * end);
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };
      
      updateCount();
    }, [hasStarted, end, duration]);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        },
        { threshold: 0.5 }
      );

      const element = document.getElementById(`counter-${end}`);
      if (element) observer.observe(element);

      return () => observer.disconnect();
    }, [end, hasStarted]);

    return (
      <span id={`counter-${end}`}>
        {prefix}{count.toLocaleString()}{suffix}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
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

      {/* Hero Section */}
      <section className="pt-16 pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  <Trophy className="w-4 h-4" />
                  <span>Impulsa tu Futuro Colombia</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  ¡Tu sueño profesional
                  <span className="block bg-gradient-to-r from-blue-800 to-indigo-700 bg-clip-text text-transparent">
                    en 16 meses!
                  </span>
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed max-w-lg">
                  Más de 15 programas de pregrado y posgrado con asesoría personalizada, modalidades flexibles y financiamiento disponible.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-blue-800 to-blue-900 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Agenda tu asesoría</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group border-2 border-blue-800 text-blue-800 px-8 py-4 rounded-full font-semibold hover:bg-blue-800 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Ver Programas</span>
                </button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-900">15+</div>
                  <div className="text-sm text-gray-600">Programas de estudio</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-900">121+</div>
                  <div className="text-sm text-gray-600">Egresados</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-900">95%</div>
                  <div className="text-sm text-gray-600">Empleabilidad y satisfacción</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Asesoría Personalizada</h3>
                    <p className="text-gray-600 text-sm">Te acompañamos desde la elección de tu carrera hasta el proceso de inscripción</p>
                  </div>
                  <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform duration-300 mt-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Trayectoria Reconocida</h3>
                    <p className="text-gray-600 text-sm">Somos un equipo de profesionales apasionados que han vivido de primera mano cómo la educación puede cambiar vidas.</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">	Modalidades Flexibles</h3>
                    <p className="text-gray-600 text-sm">Horarios diurno, nocturno y fines de semana</p>
                  </div>
                  <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Financiamiento Disponible</h3>
                    <p className="text-gray-600 text-sm">Planes de pago y becas para tu tranquilidad.</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">
                <Counter end={25000} suffix="+" />
              </div>
              <p className="text-blue-100">Students Enrolled</p>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">
                <Counter end={2800} suffix="+" />
              </div>
              <p className="text-blue-100">Faculty Members</p>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">
                <Counter end={150} suffix="+" />
              </div>
              <p className="text-blue-100">Academic Programs</p>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">
                <Counter end={200000} suffix="+" />
              </div>
              <p className="text-blue-100">Alumni Worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs Section */}
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
            {[
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
            ].map((program, index) => (
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

      {/* Postgraduate Studies Section */}
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

          {/* Graduate Programs Grid */}
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
                  {[
                    "MBA", "MS Computer Science", "MA Education", "MS Engineering",
                    "MA Psychology", "MS Data Science", "MA International Relations", "MS Finance"
                  ].map((program, index) => (
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
                  {[
                    "PhD Computer Science", "PhD Medicine", "PhD Engineering", "PhD Psychology",
                    "PhD Business", "PhD Education", "PhD Biology", "PhD Physics"
                  ].map((program, index) => (
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

          {/* Research & Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
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
            ].map((feature, index) => (
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

          {/* Graduate Admissions CTA */}
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

      {/* Campus Life Section */}
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

      {/* Student Testimonials */}
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
            {[
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
            ].map((testimonial, index) => (
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

      {/* Admissions CTA */}
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

      {/* Footer */}
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
    </div>
  );
}

export default App;