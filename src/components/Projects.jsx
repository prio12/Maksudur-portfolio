import { useEffect, useState } from 'react';
import {
  Code,
  Github,
  ExternalLink,
  Zap,
  Target,
  TrendingUp,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [githubDropdown, setGithubDropdown] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const toggleExpand = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  const toggleGithubDropdown = (id) => {
    setGithubDropdown(githubDropdown === id ? null : id);
  };

  useEffect(() => {
    setLoading(true); // start loading
    fetch(
      'https://raw.githubusercontent.com/prio12/maksudur-portfolio-data/refs/heads/main/projects.json'
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data, 'from projects');
        setProjects(data);
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
    <section id="projects" className="py-20 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4">
            <Code className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">
              Featured Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Projects That Solve Real Problems
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Full-stack applications demonstrating technical depth and
            user-centered design
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects?.map((project) => (
            <div
              key={project.id}
              className={`group relative bg-slate-900/50 backdrop-blur-sm border rounded-2xl overflow-hidden transition-all duration-500 ${
                project.highlight
                  ? 'border-cyan-500/30 shadow-lg shadow-cyan-500/10'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Featured Badge */}
              {project.highlight && (
                <div className="absolute top-6 right-6 z-10">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg shadow-cyan-500/50">
                    <Zap className="w-4 h-4 text-white" fill="currentColor" />
                    <span className="text-white text-sm font-bold">
                      Featured Project
                    </span>
                  </div>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Section - Fixed aspect ratio and positioning */}
                <div className="relative overflow-hidden bg-slate-800 h-64 md:h-auto md:min-h-[500px]">
                  <img
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-50" />

                  {/* Floating Tech Stack - Hidden on mobile to not obscure image */}
                  <div className="hidden md:flex absolute bottom-4 left-4 right-4 flex-wrap gap-2">
                    {[...project.tech.frontend, ...project.tech.backend]
                      .slice(0, 4)
                      .map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-slate-950/90 backdrop-blur-sm border border-cyan-500/30 text-cyan-400 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    {[...project.tech.frontend, ...project.tech.backend]
                      .length > 4 && (
                      <span className="px-3 py-1 bg-slate-950/90 backdrop-blur-sm border border-slate-700 text-gray-400 text-xs font-medium rounded-full">
                        +
                        {[...project.tech.frontend, ...project.tech.backend]
                          .length - 4}{' '}
                        more
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 flex flex-col">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-cyan-400 font-medium mb-3">
                      {project.tagline}
                    </p>
                    <p className="text-gray-400 text-sm">{project.role}</p>
                  </div>

                  {/* Problem → Solution → Impact */}
                  <div className="space-y-4 mb-6">
                    <div className="flex gap-3">
                      <Target className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-semibold text-red-400 mb-1">
                          Problem
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {project.problem}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Code className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-semibold text-blue-400 mb-1">
                          Solution
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <TrendingUp className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-semibold text-green-400 mb-1">
                          Impact
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {project.impact}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Details */}
                  <div className="mt-auto">
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors mb-4"
                    >
                      {expandedProject === project.id ? (
                        <>
                          <ChevronUp className="w-4 h-4" />
                          Show Less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4" />
                          View Technical Details
                        </>
                      )}
                    </button>

                    {expandedProject === project.id && (
                      <div className="space-y-4 pb-4 animate-in fade-in slide-in-from-top-2 duration-300">
                        {/* Key Features */}
                        <div>
                          <h4 className="text-sm font-semibold text-white mb-2">
                            Key Features
                          </h4>
                          <div className="grid grid-cols-1 gap-2">
                            {project.features.map((feature, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-2 text-gray-400 text-sm"
                              >
                                <span className="text-cyan-400 mt-1">•</span>
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Key Achievements */}
                        <div>
                          <h4 className="text-sm font-semibold text-white mb-2">
                            Key Achievements
                          </h4>
                          <div className="space-y-1.5">
                            {project.keyAchievements.map((achievement, i) => (
                              <p key={i} className="text-gray-400 text-sm">
                                <span className="text-green-400">✓</span>{' '}
                                {achievement}
                              </p>
                            ))}
                          </div>
                        </div>

                        {/* Tech Stack Detailed */}
                        <div>
                          <h4 className="text-sm font-semibold text-white mb-2">
                            Full Tech Stack
                          </h4>
                          <div className="space-y-2">
                            <div>
                              <span className="text-xs text-gray-500 font-medium">
                                Frontend:
                              </span>
                              <div className="flex flex-wrap gap-1.5 mt-1">
                                {project.tech.frontend.map((tech, i) => (
                                  <span
                                    key={i}
                                    className="px-2 py-0.5 bg-blue-500/10 text-blue-400 text-xs rounded"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <span className="text-xs text-gray-500 font-medium">
                                Backend:
                              </span>
                              <div className="flex flex-wrap gap-1.5 mt-1">
                                {project.tech.backend.map((tech, i) => (
                                  <span
                                    key={i}
                                    className="px-2 py-0.5 bg-green-500/10 text-green-400 text-xs rounded"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Action Buttons - Fixed to show both repos */}
                    <div className="flex gap-3 pt-4 border-t border-slate-800">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-medium rounded-lg transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="hidden sm:inline">Live Demo</span>
                        <span className="sm:hidden">Demo</span>
                      </a>

                      {/* GitHub Dropdown Button */}
                      <div className="relative">
                        <button
                          onClick={() => toggleGithubDropdown(project.id)}
                          className="flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          <span className="hidden sm:inline">Code</span>
                          <ChevronDown
                            className={`w-3 h-3 transition-transform ${
                              githubDropdown === project.id ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {/* Dropdown Menu */}
                        {githubDropdown === project.id && (
                          <div className="absolute right-5 bottom-12 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-20 overflow-hidden">
                            <a
                              href={project.github.frontend}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 px-4 py-3 hover:bg-slate-700 transition-colors text-white text-sm"
                            >
                              <Code className="w-4 h-4 text-blue-400" />
                              <span>Frontend Code</span>
                            </a>
                            <a
                              href={project.github.backend}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 px-4 py-3 hover:bg-slate-700 transition-colors text-white text-sm border-t border-slate-700"
                            >
                              <Code className="w-4 h-4 text-green-400" />
                              <span>Backend Code</span>
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
