import {
  Code,
  Database,
  Server,
  Layers,
  MapPin,
  Briefcase,
} from 'lucide-react';
import { useEffect, useState } from 'react';
const About = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true); // start loading
    fetch(
      'https://raw.githubusercontent.com/prio12/maksudur-portfolio-data/refs/heads/main/skills.json'
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setSkills(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!loading && error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[150px] p-4 bg-red-50 border border-red-300 rounded-md text-red-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 mb-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M12 2a10 10 0 11-0 20 10 10 0 010-20z"
          />
        </svg>
        <p className="text-center text-lg font-medium">
          Oops! Something went wrong.
        </p>
        {error && <p className="text-center text-sm mt-1">{error}</p>}
      </div>
    );
  }
  return (
    <section id="about" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          I’m a Full-Stack Developer specializing in the MERN stack. I love
          building efficient, scalable, and visually engaging web applications —
          with a strong focus on clean code, smooth user experience, and
          real-world performance.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="text-cyan-400" size={28} />
              <h3 className="text-2xl font-bold">Location & Availability</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Based in{' '}
              <span className="text-cyan-400 font-semibold">Bangladesh</span>,
              and open to collaborating on global, remote projects.
            </p>
            <p className="text-gray-400">
              Available for full-time roles, contract-based work, or freelance
              opportunities — wherever great ideas need solid execution.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-cyan-400" size={28} />
              <h3 className="text-2xl font-bold">What I Do</h3>
            </div>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>
                  Develop end-to-end full-stack web applications using the MERN
                  stack
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>
                  Design and deploy RESTful APIs with secure, scalable backend
                  architecture
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>
                  Build responsive, accessible, and modern user interfaces with
                  React and Tailwind CSS
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-8">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Code className="text-cyan-400" size={28} />
              <h3 className="text-2xl font-bold">Frontend Development</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills?.frontend?.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-gray-300 hover:border-cyan-500 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Server className="text-blue-400" size={28} />
              <h3 className="text-2xl font-bold">Backend Development</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills?.backend?.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-gray-300 hover:border-blue-500 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Database className="text-purple-400" size={28} />
                <h3 className="text-2xl font-bold">Database</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills?.database?.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-gray-300 hover:border-purple-500 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Layers className="text-green-400" size={28} />
                <h3 className="text-2xl font-bold">Tools & Deployment</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills?.tools?.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-gray-300 hover:border-green-500 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
