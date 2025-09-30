import React, { useState } from 'react';
import { Download, ExternalLink, Calendar, Award } from 'lucide-react';

const CertificateCard = ({ certificate }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
      {/* Certificate Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
        {certificate.image ? (
          <img 
            src={certificate.image} 
            alt={certificate.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <Award className="text-blue-600 mx-auto mb-2" size={48} />
              <div className="text-gray-600 font-medium">{certificate.title}</div>
            </div>
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
          {certificate.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Header */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">{certificate.title}</h3>
          <div className="text-blue-600 font-semibold text-sm">{certificate.issuer}</div>
        </div>

        {/* Date */}
        <div className="flex items-center gap-2 text-gray-600">
          <Calendar size={16} />
          <span className="text-sm">{certificate.date}</span>
        </div>

        {/* Description */}
        {certificate.description && (
          <p className="text-gray-600 text-sm leading-relaxed">{certificate.description}</p>
        )}

        {/* Skills */}
        {certificate.skills && (
          <div className="flex flex-wrap gap-2">
            {certificate.skills.map((skill, index) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-xs text-gray-500 font-medium">Verified Certificate</span>
          <div className="flex gap-2">
            {certificate.credentialUrl && (
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                title="View Credential"
              >
                <ExternalLink size={16} />
              </a>
            )}
            {certificate.downloadUrl && (
              <a
                href={certificate.downloadUrl}
                download
                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                title="Download Certificate"
              >
                <Download size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Certificates = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const certificates = [
    {
      id: 1,
      title: "Generative AI Mastermind",
      issuer: "Outskill",
      date: "September 2025",
      category: "AI/ML",
      description: "Comprehensive program covering generative AI technologies, LLM integration, and practical applications in business environments.",
      skills: ["Generative AI", "LLMs", "AI Applications", "Machine Learning"],
      credentialUrl: "#",
      downloadUrl: "https://customer-assets.emergentagent.com/job_pradhuman-tech/artifacts/ei858i3n_Pradhuman_Sharma_Certificate.pdf",
      image: "https://images.unsplash.com/photo-1677691820099-a6e8040aa077?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHw0fHxBSSUyMHdvcmtzcGFjZXxlbnwwfHx8fDE3NTkyNDYxOTB8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      id: 2,
      title: "Data Engineering on AWS - Foundations",
      issuer: "AWS",
      date: "September 2025",
      category: "Data Engineering",
      description: "Foundational knowledge in AWS data engineering services, data pipelines, and cloud-based analytics solutions.",
      skills: ["AWS", "Data Pipelines", "Cloud Computing", "ETL"],
      credentialUrl: "#"
    },
    {
      id: 3,
      title: "Software Testing Fundamentals",
      issuer: "Great Learning",
      date: "2024",
      category: "Software Development",
      description: "Comprehensive understanding of software testing methodologies, test automation, and quality assurance practices.",
      skills: ["Software Testing", "QA", "Test Automation", "Quality Assurance"]
    },
    {
      id: 4,
      title: "UI/UX Design Course",
      issuer: "Great Learning",
      date: "2024",
      category: "Design",
      description: "User experience design principles, interface design, and user-centered design methodologies.",
      skills: ["UI/UX Design", "User Research", "Prototyping", "Design Thinking"]
    },
    {
      id: 5,
      title: "Data Science & Analytics",
      issuer: "HP Life (HP Foundation)",
      date: "2024",
      category: "Data Science",
      description: "Fundamentals of data science, statistical analysis, and practical analytics applications.",
      skills: ["Data Science", "Analytics", "Statistics", "Data Visualization"]
    }
  ];
  
  const categories = ['All', 'AI/ML', 'Data Science', 'Data Engineering', 'Software Development', 'Design'];
  const filteredCertificates = activeFilter === 'All' 
    ? certificates 
    : certificates.filter(cert => cert.category === activeFilter);

  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Training</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Continuous learning through industry-recognized certifications and professional development programs
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{certificates.length}</div>
              <div className="text-gray-600">Certificates Earned</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{categories.length - 1}</div>
              <div className="text-gray-600">Skill Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">2025</div>
              <div className="text-gray-600">Latest Completion</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Completion Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
