import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { portfolioData } from '../data/mock';

const ExperienceCard = ({ experience, index }) => {
  return (
    <div className={`relative ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
      {/* Timeline dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10 lg:block hidden"></div>
      
      <div className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 ${
        index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
      }`}>
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Briefcase className="text-blue-600" size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{experience.title}</h3>
              <div className="text-blue-600 font-semibold">{experience.company}</div>
            </div>
          </div>
          <div className="bg-blue-50 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
            {experience.type}
          </div>
        </div>

        {/* Period */}
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <Calendar size={16} />
          <span className="text-sm">{experience.period}</span>
        </div>

        {/* Achievements */}
        <div className="space-y-2">
          {experience.achievements.map((achievement, achievementIndex) => (
            <div key={achievementIndex} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700 text-sm leading-relaxed">{achievement}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building expertise through hands-on experience in operations, technology, and team leadership
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gray-300 hidden lg:block"></div>
          
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <ExperienceCard key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </div>

        {/* Additional Context */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">Beyond Professional Experience</h3>
            <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
              My 4+ years in event management, including TEDx events and world record attempts, has shaped my 
              ability to work under pressure, coordinate complex logistics, and lead diverse teams. These experiences 
              complement my technical skills and provide a unique perspective on project management and stakeholder coordination.
            </p>
            
            {/* Key Skills from Experience */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-sm text-gray-600">Events Managed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">4+</div>
                <div className="text-sm text-gray-600">Years Leadership</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-sm text-gray-600">Process Improvements</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;