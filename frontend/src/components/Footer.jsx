import React from 'react';
import { Mail, Phone, Github, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Footer = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Section - About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-blue-400">PS</span>
              <span className="text-xl font-semibold">{personal.name}</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Data Analyst & AI Engineer passionate about transforming complex data into actionable insights. 
              Ready to contribute to your team's success.
            </p>
            <div className="text-sm text-gray-400">
              {personal.location}
            </div>
          </div>

          {/* Center Section - Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <nav className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Experience', href: '#experience' },
                { name: 'Projects', href: '#projects' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-300 hover:text-blue-400 transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Right Section - Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
            <div className="space-y-3">
              <a 
                href={`mailto:${personal.email}`}
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors group"
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm">{personal.email}</span>
              </a>
              
              <a 
                href={`tel:${personal.phone}`}
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors group"
              >
                <Phone size={18} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm">{personal.phone}</span>
              </a>
              
              <a 
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors group"
              >
                <Github size={18} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm">GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} {personal.name}. Built with React & Tailwind CSS.
            </div>

            {/* Status */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-300">Available for opportunities</span>
              </div>
              
              {/* Back to top button */}
              <button
                onClick={scrollToTop}
                className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-all duration-300 hover:scale-110"
                aria-label="Back to top"
              >
                <ArrowUp size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;