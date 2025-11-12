import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Let's Build Something
          </span>
        </h2>
        <p className="text-gray-400 mb-12 text-lg max-w-2xl mx-auto">
          I'm currently open to full-time opportunities, freelance projects, and
          collaborations. Whether you have a project in mind or just want to
          connect, feel free to reach out!
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Email Card */}
          <a
            href="mailto:maksudurrahmanprio@gmail.com"
            className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500 transition-colors group"
          >
            <Mail
              className="mx-auto mb-4 text-cyan-400 group-hover:scale-110 transition-transform"
              size={32}
            />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-gray-400 text-sm">
              maksudurrahmanprio@gmail.com
            </p>
          </a>

          {/* GitHub Card */}
          <a
            href="https://github.com/prio12"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500 transition-colors group"
          >
            <Github
              className="mx-auto mb-4 text-cyan-400 group-hover:scale-110 transition-transform"
              size={32}
            />
            <h3 className="font-semibold mb-2">GitHub</h3>
            <p className="text-gray-400 text-sm">github.com/prio12</p>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/maksudur-rahman-full-stack-developer/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500 transition-colors group"
          >
            <Linkedin
              className="mx-auto mb-4 text-cyan-400 group-hover:scale-110 transition-transform"
              size={32}
            />
            <h3 className="font-semibold mb-2">LinkedIn</h3>
            <p className="text-gray-400 text-sm break-all">
              linkedin.com/in/maksudur-rahman...
            </p>
          </a>
        </div>

        {/* Dual CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Primary: Native Email */}
          <a
            href="mailto:maksudurrahmanprio@gmail.com"
            className="px-10 py-4 bg-cyan-500 text-slate-950 rounded-lg font-semibold text-lg hover:bg-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-500/50"
          >
            Send Email
          </a>

          {/* Secondary: Gmail Web */}
          <a
            href="https://mail.google.com/mail/?view=cm&to=maksudurrahmanprio@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-slate-900 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-slate-800 transition-all flex items-center gap-2"
          >
            Open Gmail <ExternalLink size={18} />
          </a>
        </div>

        {/* Helper Text */}
        <p className="text-gray-500 text-sm mt-6">
          Or copy my email:{' '}
          <span className="text-cyan-400 font-mono">
            maksudurrahmanprio@gmail.com
          </span>
        </p>
      </div>
    </section>
  );
};

export default Contact;
