import React from 'react';
import { Trophy, Play, ChevronRight, BookOpen, Globe, Microscope, Heart } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-16 pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                <Trophy className="w-4 h-4" />
                <span>Ranked #1 Private University</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Shape Your
                <span className="block bg-gradient-to-r from-blue-800 to-indigo-700 bg-clip-text text-transparent">
                  Future Here
                </span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed max-w-lg">
                Join a community of scholars, innovators, and leaders. Discover your passion, 
                pursue excellence, and make your mark on the world at Prestige University.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-blue-800 to-blue-900 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Start Your Application</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-blue-800 text-blue-800 px-8 py-4 rounded-full font-semibold hover:bg-blue-800 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Virtual Campus Tour</span>
              </button>
            </div>
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-900">150+</div>
                <div className="text-sm text-gray-600">Academic Programs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-900">12:1</div>
                <div className="text-sm text-gray-600">Student-Faculty Ratio</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-900">98%</div>
                <div className="text-sm text-gray-600">Employment Rate</div>
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
                  <h3 className="font-semibold text-gray-900 mb-2">World-Class Faculty</h3>
                  <p className="text-gray-600 text-sm">Learn from Nobel laureates and industry leaders</p>
                </div>
                <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform duration-300 mt-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Global Network</h3>
                  <p className="text-gray-600 text-sm">Connect with alumni in 150+ countries</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <Microscope className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Cutting-Edge Research</h3>
                  <p className="text-gray-600 text-sm">$500M+ in annual research funding</p>
                </div>
                <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Vibrant Campus</h3>
                  <p className="text-gray-600 text-sm">500+ student organizations and clubs</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;