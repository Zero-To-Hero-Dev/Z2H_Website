import React from 'react';
import { Rocket, Eye, Users, Heart, Star, Award, Target, Zap } from 'lucide-react';
import SectionHeader from '../componentts/common/SectionHeader';
import { values } from '../data';

const About: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeader title="About Z2H DEV LTD" />
        
        <div className="max-w-4xl mx-auto">
          {/* Main Description */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-2xl mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Z2H DEV LTD is a technology and digital solutions company dedicated to empowering individuals, students, and businesses through practical digital skills, innovation, and creative technology solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe technology should be accessible, practical, and impactful. Our goal is to help people learn, create, and grow using modern digital tools and hands-on experiences.
            </p>
          </div>
          
          {/* Mission and Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-indigo-800 mb-3">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower businesses and future innovators through technology, creativity, and practical digital skills.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Eye className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-purple-800 mb-3">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To become a leading technology and innovation company inspiring future digital creators and problem solvers.
              </p>
            </div>
          </div>

          {/* Values */}
          <h3 className="text-3xl font-bold text-center mb-8">Our Core Values</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {values.map((value, idx) => {
              const icons = [
                <Star className="w-5 h-5" />,
                <Heart className="w-5 h-5" />,
                <Users className="w-5 h-5" />,
                <Zap className="w-5 h-5" />,
                <Award className="w-5 h-5" />,
                <Rocket className="w-5 h-5" />
              ];
              const colors = [
                "from-yellow-500 to-orange-500",
                "from-red-500 to-pink-500",
                "from-blue-500 to-cyan-500",
                "from-green-500 to-emerald-500",
                "from-purple-500 to-indigo-500",
                "from-pink-500 to-rose-500"
              ];
              return (
                <div 
                  key={value} 
                  className={`bg-gradient-to-r ${colors[idx]} p-4 rounded-xl text-white transform hover:scale-105 transition-all duration-300 cursor-pointer`}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      {icons[idx]}
                    </div>
                    <span className="font-semibold">{value}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Our Team / Culture */}
          <div className="bg-gray-50 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">Why Partner With Us?</h3>
            <p className="text-gray-700 leading-relaxed">
              At Z2H DEV LTD, we combine technical expertise with a passion for teaching and innovation. 
              Whether you're a business looking for digital solutions or an individual seeking to learn new skills, 
              we provide the guidance, support, and expertise you need to succeed in today's digital world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;