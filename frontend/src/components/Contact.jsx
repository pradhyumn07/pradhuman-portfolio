import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Calendar } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Contact = () => {
  const { personal } = portfolioData;

  const contactMethods = [
    {
      icon: <Mail className="text-blue-600" size={24} />,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
      description: 'Drop me a line anytime'
    },
    {
      icon: <Phone className="text-green-600" size={24} />,
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone}`,
      description: 'Available for calls'
    },
    {
      icon: <MapPin className="text-red-600" size={24} />,
      label: 'Location',
      value: personal.location,
      href: '#',
      description: 'Based in Indore, open to remote work'
    },
    {
      icon: <Github className="text-gray-800" size={24} />,
      label: 'GitHub',
      value: 'View Projects',
      href: personal.github,
      description: 'Check out my code repositories'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss data analysis opportunities, AI projects, or collaboration? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Get in Touch</h3>
              <p className="text-gray-600 leading-relaxed">
                I'm actively seeking opportunities in data analysis and AI engineering. Whether you're looking for someone to 
                join your team, collaborate on a project, or discuss innovative data solutions, I'm here to help.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target={method.label === 'GitHub' ? '_blank' : undefined}
                  rel={method.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                >
                  <div className="p-3 bg-white rounded-lg shadow-md group-hover:shadow-lg transition-shadow">
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-lg font-semibold text-gray-900">{method.label}</div>
                    <div className="text-blue-600 font-medium">{method.value}</div>
                    <div className="text-sm text-gray-600 mt-1">{method.description}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <Calendar className="text-blue-600 mt-1" size={20} />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Availability</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <span className="font-medium text-green-600">Available immediately</span> for data analyst and AI engineer positions. 
                    Open to full-time roles, contract work, and exciting project collaborations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Quick Info & CTA */}
          <div className="space-y-8">
            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Work With Me?</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">4+ years of hands-on operational experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Proven track record in process automation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Strong technical skills in Python, SQL, and AI</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Excellent communication and team collaboration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Bridge between technical and business teams</span>
                </div>
              </div>
            </div>

            {/* Current Focus */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Current Focus</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                I'm particularly interested in roles where I can leverage my unique combination of technical skills 
                and operational experience to drive data-informed decision making and AI implementation.
              </p>
              
              <div className="space-y-2">
                <div className="text-sm font-medium text-blue-600">Ideal Roles:</div>
                <div className="text-sm text-gray-600">• Data Analyst</div>
                <div className="text-sm text-gray-600">• AI Engineer</div>
                <div className="text-sm text-gray-600">• Business Intelligence Analyst</div>
                <div className="text-sm text-gray-600">• Operations Analyst</div>
              </div>
            </div>

            {/* Quick Contact CTA */}
            <div className="text-center">
              <a
                href={`mailto:${personal.email}?subject=Opportunity Discussion&body=Hi Pradhuman, I'd like to discuss a potential opportunity with you.`}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Mail size={20} />
                Send Quick Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;