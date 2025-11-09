import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'projects', 'contact'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="bg-slate-950 text-gray-100 min-h-screen">
      <Navigation
        activeSection={activeSection}
        scrolled={scrolled}
        scrollToSection={scrollToSection}
      />
      {/* <Hero scrollToSection={scrollToSection} />
      <About />
      <Projects />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
