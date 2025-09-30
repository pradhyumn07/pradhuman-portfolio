(import React, { useState } from 'react';
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
  
  // Certificate data - directly in component
  const certificates = [...]);
  
  const categories = ['All', 'AI/ML', 'Data Science', 'Data Engineering', 'Software Development', 'Design'];
  const filteredCertificates = activeFilter === 'All' 
    ? certificates 
    : certificates.filter(cert => cert.category === activeFilter);

  return (
    <section id="certificates" className="py-20 bg-gray-50">
      ...
          {filteredCertificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>
        ...
    </section>
  );
};

export default Certificates;
