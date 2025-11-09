import React from 'react';

const Navigation = ({ activeSection, scrolled, scrollToSection }) => {
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/95 backdrop-blur-sm border-b border-slate-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          {'<Dev/>'}
        </div>
        <div className="hidden md:flex gap-8">
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
        </div>
        <a
          href="#contact"
          className="px-4 py-2 bg-cyan-500 text-slate-950 rounded-lg font-semibold hover:bg-cyan-400 transition-colors"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
