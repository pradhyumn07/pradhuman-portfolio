import React from 'react';
import { portfolioData } from '../data/mock';

const SkillBar = ({ skill }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
        <span className="text-sm text-blue-600 font-semibold">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const { skills } = portfolioData;

  const categoryColors = {
    'Data Analysis': 'from-blue-500 to-cyan-500',
    'AI/ML': 'from-purple-500 to-pink-500', 
    'Development': 'from-green-500 to-teal-500',
    'Business Operations': 'from-orange-500 to-red-500'
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for data analysis, AI development, and business operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* Category Header */}
              <div className="mb-6">
                <div className={`w-full h-1 bg-gradient-to-r ${categoryColors[category.category]} rounded-full mb-4`}></div>
                <h3 className="text-lg font-bold text-gray-900">{category.category}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">Continuous Learning</h3>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I'm constantly expanding my skillset through hands-on projects, certifications, and staying updated 
              with the latest trends in data science and AI. My goal is to combine technical expertise with 
              practical business applications.
            </p>
            
            {/* Recent Certifications */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {portfolioData.certifications.slice(0, 3).map((cert, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <div className="text-sm text-blue-800 font-medium">{cert}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;