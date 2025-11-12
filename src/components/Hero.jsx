import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import Image from '../assets/image/portfolioImage.png';

const Hero = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <div className="mb-8 inline-block">
          <img
            src={Image}
            alt="Portfolio Profile"
            className="w-32 h-32 rounded-full object-cover shadow-2xl shadow-cyan-500/50 border-4 border-cyan-500/30 hover:scale-105 transition-transform duration-300"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            MERN Stack Developer
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-6">
          Building scalable full-stack web applications
        </p>

        <p className="text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
          I’m a MERN Stack Developer focused on building scalable, real-time,
          and user-centric web experiences. With expertise in React, Node.js,
          Express, and MongoDB, I bring ideas to life through elegant UI, robust
          backend logic, and seamless performance across every layer of the
          stack.
        </p>

        {/* Social Links */}
        <div className="flex gap-4 justify-center mb-12">
          <a
            href="mailto:maksudurrahmanprio@gmail.com"
            className="p-3 bg-slate-900 border border-slate-800 rounded-lg hover:border-cyan-500 hover:scale-110 transition-all"
            aria-label="Email Contact"
          >
            <Mail size={24} />
          </a>

          <a
            href="https://github.com/prio12"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-900 border border-slate-800 rounded-lg hover:border-cyan-500 hover:scale-110 transition-all"
            aria-label="GitHub Profile"
          >
            <Github size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/maksudur-rahman-full-stack-developer/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-900 border border-slate-800 rounded-lg hover:border-cyan-500 hover:scale-110 transition-all"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-cyan-500 text-slate-950 rounded-lg font-semibold hover:bg-cyan-400 hover:scale-105 transition-all hover:shadow-xl hover:shadow-cyan-500/50"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 bg-slate-900 border border-slate-800 rounded-lg font-semibold hover:border-cyan-500 hover:scale-105 transition-all"
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <ChevronDown className="mx-auto text-gray-600" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
