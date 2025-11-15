import { useState } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import Resume from '../assets/resume/Maksudur_Rahman_Resume.pdf';

const Navigation = ({ activeSection, scrolled, scrollToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    scrollToSection(section);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/95 backdrop-blur-sm border-b border-slate-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          onClick={() => scrollToSection('home')}
          className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform"
        >
          {'<MRP/>'}
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-8 items-center">
          {['home', 'about', 'projects', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`capitalize transition-colors ${
                activeSection === section
                  ? 'text-cyan-400'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {section}
            </button>
          ))}

          {/* Resume Link in Desktop Nav */}
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            download="Maksudur_Rahman_Resume.pdf"
            className="text-gray-400 hover:text-cyan-400 transition-colors font-medium"
          >
            Resume
          </a>
        </div>

        {/* Desktop Hire Me Button */}
        <a
          href="#contact"
          className="hidden md:block px-4 py-2 bg-cyan-500 text-slate-950 rounded-lg font-semibold hover:bg-cyan-400 transition-colors"
        >
          Hire Me
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-400 hover:text-cyan-400 transition-colors"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/98 backdrop-blur-sm border-b border-slate-800">
          <div className="px-6 py-4 space-y-4">
            {['home', 'about', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`block w-full text-left capitalize transition-colors py-2 ${
                  activeSection === section
                    ? 'text-cyan-400 font-medium'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {section}
              </button>
            ))}

            {/* Resume Link in Mobile Menu */}
            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              download="Maksudur_Rahman_Resume.pdf"
              className="flex items-center gap-2 w-full text-left text-gray-400 hover:text-cyan-400 transition-colors py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>

            {/* Mobile Hire Me Button */}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-4 py-3 bg-cyan-500 text-slate-950 rounded-lg font-semibold hover:bg-cyan-400 transition-colors mt-4"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
