
import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO, SKILLS, EXPERIENCES, PROJECTS, CERTIFICATIONS } from './data';
import AIChatAssistant from './components/AIChatAssistant';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'certifications'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <span className="text-cyan-500 font-mono text-xl font-bold">&lt;Dharmik /&gt;</span>
            </div>
            <div className="hidden md:flex gap-8">
              {['Home', 'About', 'Skills', 'Experience', 'Projects'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                    activeSection === item.toLowerCase() ? 'text-cyan-500' : 'text-slate-400'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
            <a 
              href="mailto:pateldharmik922@gmail.com" 
              className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 flex items-center justify-center min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05),transparent_70%)]"></div>
        <div className="max-w-4xl text-center z-10">
          <h2 className="text-cyan-500 font-mono mb-4 text-lg">Hi, my name is</h2>
          <h1 className="text-6xl sm:text-7xl font-extrabold text-white mb-6 tracking-tight">
            {PERSONAL_INFO.name}.
          </h1>
          <p className="text-4xl sm:text-5xl font-bold text-slate-400 mb-8">
            I build data-driven systems.
          </p>
          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            I'm a <span className="text-white font-medium">Data Scientist and System Developer</span> specializing in building real-time analytics platforms and scalable software architectures.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#projects" className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-cyan-900/20">
              View My Work
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:-translate-y-1 border border-slate-700">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-white whitespace-nowrap">01. About Me</h2>
            <div className="h-[1px] bg-slate-800 w-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 text-slate-400 space-y-4 text-lg">
              <p>
                Hello! My name is Dharmik and I enjoy creating things that live on the internet, 
                specifically things that involve complex data processing and real-time visualization.
              </p>
              <p>
                My journey started in Information Technology and led me to the fascinating world 
                of <span className="text-cyan-400">Data Analytics</span> and <span className="text-cyan-400">Systems Development</span>. 
                I've had the privilege of working with organizations like <span className="text-white">ISRO</span> and 
                large university housing systems.
              </p>
              <p>
                I'm currently pursuing my <span className="text-white">Master of Applied Computing</span> at the University of Windsor, 
                focusing on advanced software engineering and data science.
              </p>
            </div>
            <div className="relative group">
              <div className="aspect-square bg-cyan-500/10 border-2 border-cyan-500 rounded-2xl relative z-10 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/dharmik/400/400" 
                  alt="Dharmik Patel" 
                  className="grayscale hover:grayscale-0 transition-all duration-300 w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 border-2 border-cyan-500 translate-x-4 translate-y-4 rounded-2xl group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-white whitespace-nowrap">02. Technical Arsenal</h2>
            <div className="h-[1px] bg-slate-800 w-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((skill, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-cyan-500/50 transition-all group">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-cyan-500 font-mono font-bold">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span key={i} className="text-xs font-mono px-2 py-1 bg-slate-800 text-slate-300 rounded border border-slate-700">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-white whitespace-nowrap">03. Experience</h2>
            <div className="h-[1px] bg-slate-800 w-full"></div>
          </div>
          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative pl-8 border-l-2 border-slate-800 hover:border-cyan-500 transition-colors">
                <div className="absolute w-4 h-4 bg-cyan-600 rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                <div className="mb-2">
                  <h3 className="text-2xl font-bold text-white">
                    {exp.title} <span className="text-cyan-500">@ {exp.company}</span>
                  </h3>
                  <div className="flex flex-wrap gap-x-4 text-slate-400 font-mono text-sm mt-1">
                    <span>{exp.period}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.tech.map((t, i) => (
                    <span key={i} className="text-xs font-mono text-cyan-400 bg-cyan-950/30 px-2 py-0.5 rounded border border-cyan-800/30">
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="space-y-3">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex gap-3 text-slate-400 leading-relaxed">
                      <span className="text-cyan-500 mt-1.5 text-xs">▹</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-white whitespace-nowrap">04. Featured Projects</h2>
            <div className="h-[1px] bg-slate-800 w-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, idx) => (
              <div key={idx} className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all flex flex-col">
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-cyan-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                      </svg>
                    </div>
                    {project.github && (
                      <a href={project.github} target="_blank" className="text-slate-400 hover:text-white transition-colors">
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </svg>
                      </a>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 font-mono">{project.period}</p>
                  <ul className="space-y-3 mb-6 flex-1">
                    {project.description.map((point, i) => (
                      <li key={i} className="text-slate-400 text-sm leading-relaxed flex gap-2">
                        <span className="text-cyan-500">▹</span> {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto p-8 pt-0 flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-mono text-cyan-500 bg-cyan-950/20 px-2 py-1 rounded border border-cyan-800/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Footer */}
      <footer className="py-20 px-4 bg-slate-950">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {CERTIFICATIONS.map((cert, idx) => (
              <div key={idx} className="flex items-center gap-3 text-left bg-slate-900 p-4 rounded-xl border border-slate-800">
                <div className="w-10 h-10 bg-cyan-600/20 rounded flex items-center justify-center text-cyan-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{cert.name}</h4>
                  <p className="text-slate-500 text-xs">{cert.issuer} • {cert.date}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-slate-400 max-w-lg mx-auto mb-10">
              I'm currently looking for new opportunities in Data Science and System Development. 
              Whether you have a question or just want to say hi, my inbox is always open!
            </p>
            <a 
              href={`mailto:${PERSONAL_INFO.email}`} 
              className="inline-block border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 px-10 py-4 rounded-xl font-bold transition-all"
            >
              Say Hello
            </a>
          </div>

          <div className="pt-20 pb-10 border-t border-slate-900">
            <div className="flex justify-center gap-6 mb-6">
              <a href={PERSONAL_INFO.github} className="text-slate-500 hover:text-cyan-500 transition-colors">GitHub</a>
              <a href={PERSONAL_INFO.linkedin} className="text-slate-500 hover:text-cyan-500 transition-colors">LinkedIn</a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-500 hover:text-cyan-500 transition-colors">Email</a>
            </div>
            <p className="text-slate-600 font-mono text-xs">
              Designed & Built by {PERSONAL_INFO.name} &copy; 2024
            </p>
          </div>
        </div>
      </footer>

      {/* AI Assistant */}
      <AIChatAssistant />
    </div>
  );
};

export default App;
