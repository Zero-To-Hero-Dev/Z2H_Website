import React from 'react';
import {
  CheckCircle,
  ChevronRight,
  Clock,
  Calendar,
  DollarSign
} from 'lucide-react';

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

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">

          {trainings.map((training, idx) => (

            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >

              {/* HEADER */}
              <div
                className={`bg-gradient-to-r ${training.color} p-6 text-white text-center`}
              >
                <div className="flex justify-center mb-4">
                  {training.icon}
                </div>

                <h3 className="text-xl font-bold">
                  {training.title}
                </h3>
              </div>

              {/* BODY */}
              <div className="p-6">

                {/* BASIC INFO */}
                {(training.ageGroup ||
                  training.duration ||
                  training.period ||
                  training.fee) && (

                  <div className="space-y-3 mb-5">

                    {training.ageGroup && (
                      <div className="flex items-center gap-2 text-sm">
                        <UsersIcon className="w-4 h-4 text-gray-500" />

                        <span>
                          <strong>Age Group:</strong>{' '}
                          {training.ageGroup}
                        </span>
                      </div>
                    )}

                    {training.duration && (
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-gray-500" />

                        <span>
                          <strong>Duration:</strong>{' '}
                          {training.duration}
                        </span>
                      </div>
                    )}

                    {training.period && (
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-gray-500" />

                        <span>
                          <strong>Period:</strong>{' '}
                          {training.period}
                        </span>
                      </div>
                    )}

                    {training.fee && (
                      <div className="flex items-center gap-2 text-sm">
                        <DollarSign className="w-4 h-4 text-gray-500" />

                        <span>
                          <strong>Fee:</strong>{' '}
                          {training.fee}
                        </span>
                      </div>
                    )}

                  </div>
                )}

                {/* PRICING */}
                {training.pricing && (
                  <div className="mb-5">

                    <strong className="block mb-2 text-indigo-600">
                      💰 Pricing
                    </strong>

                    <div className="space-y-2 text-sm">

                      <p>
                        <strong>Weekday Program:</strong>{' '}
                        {training.pricing.weekdayProgram}
                      </p>

                      <p>
                        <strong>Weekend Program:</strong>{' '}
                        {training.pricing.weekendProgram}
                      </p>

                    </div>
                  </div>
                )}

                {/* TRAINING FORMAT */}
                {training.trainingFormat && (
                  <div className="mb-5">

                    <strong className="block mb-2 text-indigo-600">
                      🛠 Training Format
                    </strong>

                    <ul className="space-y-2">

                      {training.trainingFormat.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />

                          <span>{item}</span>
                        </li>
                      ))}

                    </ul>
                  </div>
                )}

                {/* WHAT'S INCLUDED */}
                {training.includes && (
                  <div className="mb-5">

                    <strong className="block mb-2 text-indigo-600">
                      ✓ What's Included
                    </strong>

                    <ul className="space-y-2">

                      {training.includes.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500" />

                          <span>{item}</span>
                        </li>
                      ))}

                    </ul>
                  </div>
                )}

                {/* TOPICS */}
                {training.topics && (
                  <div className="mb-5">

                    <strong className="block mb-2 text-indigo-600">
                      📚 What You'll Learn
                    </strong>

                    <ul className="space-y-2">

                      {training.topics.map((topic, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm"
                        >
                          <ChevronRight className="w-4 h-4 text-indigo-500" />

                          <span>{topic}</span>
                        </li>
                      ))}

                    </ul>
                  </div>
                )}

                {/* PHASES */}
                {training.phases && (
                  <div className="mb-5">

                    <strong className="block mb-3 text-indigo-600">
                      📘 Training Phases
                    </strong>

                    <div className="space-y-4">

                      {training.phases.map((phase, i) => (

                        <div
                          key={i}
                          className="border rounded-xl p-4 bg-gray-50"
                        >

                          <h4 className="font-semibold text-indigo-700">
                            {phase.phase}
                          </h4>

                          <p className="text-sm text-gray-600 mb-2">
                            Duration: {phase.duration}
                          </p>

                          <ul className="space-y-1">

                            {phase.focus.map((item, j) => (
                              <li
                                key={j}
                                className="flex items-center gap-2 text-sm"
                              >
                                <CheckCircle className="w-4 h-4 text-green-500" />

                                <span>{item}</span>
                              </li>
                            ))}

                          </ul>

                          <p className="text-sm mt-3 font-medium text-indigo-600">
                            🎓 {phase.certificate}
                          </p>

                        </div>

                      ))}

                    </div>
                  </div>
                )}

                {/* SCHOOL COLLABORATION */}
                {training.collaboration && (
                  <div className="mb-5">

                    <strong className="block mb-2 text-indigo-600">
                      🏫 School Collaboration
                    </strong>

                    <ul className="space-y-2">

                      {training.collaboration.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm"
                        >
                          <ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5" />

                          <span>{item}</span>
                        </li>
                      ))}

                    </ul>
                  </div>
                )}

                {/* BUTTON */}
                <Button className="w-full mt-4 justify-center">
                  Enroll Now
                </Button>

              </div>
            </div>

          ))}

        </div>

        {/* BENEFITS */}
        <div className="mt-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">

          <div className="text-center mb-8">

            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Why Train With Us?
            </h3>

            <p className="text-indigo-100">
              Hands-on experience from industry experts
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                icon: "🎓",
                title: "Expert Trainers",
                desc: "Learn from industry professionals"
              },

              {
                icon: "💻",
                title: "Hands-on Projects",
                desc: "Real-world practical experience"
              },

              {
                icon: "📜",
                title: "Certificate",
                desc: "Get certified upon completion"
              },

              {
                icon: "🎯",
                title: "Career Support",
                desc: "Guidance for your future"
              }

            ].map((benefit, idx) => (

              <div
                key={idx}
                className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm"
              >

                <div className="text-4xl mb-3">
                  {benefit.icon}
                </div>

                <h4 className="font-bold mb-2">
                  {benefit.title}
                </h4>

                <p className="text-sm text-indigo-100">
                  {benefit.desc}
                </p>

              </div>

            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

// USERS ICON
const UsersIcon: React.FC<{ className?: string }> = ({
  className
}) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

export default Training;