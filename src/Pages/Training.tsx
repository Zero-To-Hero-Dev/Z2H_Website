import React from 'react';
import { CheckCircle, ChevronRight, Clock, Calendar, DollarSign } from 'lucide-react';
import SectionHeader from '../componentts/common/SectionHeader';
import Button from '../componentts/common/Button';
import { trainings } from '../data';

const Training: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Current Training Programs" 
          subtitle="Practical, hands-on learning for real-world skills"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainings.map((training, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className={`bg-gradient-to-r ${training.color} p-6 text-white text-center`}>
                <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform">
                  {training.icon}
                </div>
                <h3 className="text-xl font-bold">{training.title}</h3>
              </div>
              <div className="p-6">
                {'ageGroup' in training && training.ageGroup && (
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <UsersIcon className="w-4 h-4 text-gray-500" />
                      <span><strong>Age Group:</strong> {training.ageGroup}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span><strong>Duration:</strong> {training.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span><strong>Period:</strong> {training.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <DollarSign className="w-4 h-4 text-gray-500" />
                      <span><strong>Fee:</strong> {training.fee}</span>
                    </div>
                  </div>
                )}
                
                {'includes' in training && training.includes && (
                  <div className="mb-4">
                    <strong className="block mb-2 text-indigo-600">✓ What's Included:</strong>
                    <ul className="space-y-2">
                      {training.includes.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {'topics' in training && training.topics && (
                  <div className="mb-4">
                    <strong className="block mb-2 text-indigo-600">📚 What You'll Learn:</strong>
                    <ul className="space-y-2">
                      {training.topics.map((topic, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <ChevronRight className="w-4 h-4 text-indigo-500" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <Button className="w-full mt-4 justify-center">Enroll Now</Button>
              </div>
            </div>
          ))}
        </div>

        {/* Training Benefits */}
        <div className="mt-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Why Train With Us?</h3>
            <p className="text-indigo-100">Hands-on experience from industry experts</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🎓", title: "Expert Trainers", desc: "Learn from industry professionals" },
              { icon: "💻", title: "Hands-on Projects", desc: "Real-world practical experience" },
              { icon: "📜", title: "Certificate", desc: "Get certified upon completion" },
              { icon: "🎯", title: "Career Support", desc: "Guidance for your future" }
            ].map((benefit, idx) => (
              <div key={idx} className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h4 className="font-bold mb-2">{benefit.title}</h4>
                <p className="text-sm text-indigo-100">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper component
const UsersIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

export default Training;