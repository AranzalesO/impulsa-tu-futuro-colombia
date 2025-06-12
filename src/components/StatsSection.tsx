import React from 'react';
import Counter from './Counter';

const StatsSection: React.FC = () => {
  return (
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
  );
};

export default StatsSection;