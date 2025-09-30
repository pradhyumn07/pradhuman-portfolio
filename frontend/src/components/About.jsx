import React from 'react';
import { CheckCircle, Target, Users, Zap } from 'lucide-react';
import { portfolioData } from '../data/mock';

const About = () => {
  const { about, personal } = portfolioData;

  const highlights = [
    {
      icon: <Target className="text-blue-600" size={24} />,
      title: "Problem Solver",
      description: "4+ years of identifying and solving complex operational challenges"
    },
    {
      icon: <Zap className="text-indigo-600" size={24} />,
      title: "Process Optimizer",
      description: "Automated reports saving 3+ hours weekly, improving efficiency"
    },
    {
      icon: <Users className="text-green-600" size={24} />,
      title: "Team Leader",
      description: "Managed large-scale events and coordinated cross-functional teams"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about turning data into insights and technology into solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {about.summary}
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                My journey spans from hands-on technical work in production environments to strategic operations management. 
                This unique combination gives me a deep understanding of both the technical challenges and business requirements 
                that modern companies face.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Achievements</h3>
              {about.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>

            {/* What I Bring */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What I Bring to Your Team</h3>
              <p className="text-gray-700 leading-relaxed">
                I excel at bridging the gap between technical teams and business stakeholders. My experience in 
                operations management, combined with strong technical skills in data analysis and AI, makes me 
                uniquely positioned to translate complex data insights into actionable business strategies.
              </p>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-lg shadow-md">
                    {highlight.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Education */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Education</h3>
              <div className="space-y-2">
                <div className="text-gray-700">
                  <span className="font-medium">B.Tech Computer Science (IT)</span>
                </div>
                <div className="text-gray-600">IPS Academy, Indore • 2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;