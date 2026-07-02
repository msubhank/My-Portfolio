import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FolderGit2, ArrowUpRight, Github, ExternalLink, X } from 'lucide-react';
import { projects } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-[#0A0A0A] relative border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-12 text-left space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 text-white font-mono text-[10px] tracking-[0.25em] uppercase">
            <FolderGit2 className="w-3.5 h-3.5 opacity-70" />
            PORTFOLIO
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tighter uppercase leading-[0.9]">
            FEATURED<br />PROJECTS
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm uppercase tracking-widest font-bold max-w-xl">
            A comprehensive showcase of web apps, custom platforms, and production pipelines.
          </p>
        </div>

        {/* Project Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {projects.map((project: Project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                id={`project-card-${project.id}`}
                className="bg-[#121212] border border-white/10 rounded-none overflow-hidden hover:border-white/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="p-6 space-y-4">
                  {/* Category icon header */}
                  <div className="flex items-center justify-end">
                    <div className="flex items-center gap-2.5">
                      {project.codeUrl && (
                        <a
                          id={`proj-code-link-${project.id}`}
                          href={project.codeUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-white/50 hover:text-white transition-colors p-1"
                          aria-label="View Source Code"
                        >
                          <Github className="w-4.5 h-4.5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          id={`proj-live-link-${project.id}`}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-white/50 hover:text-white transition-colors p-1"
                          aria-label="View Live App"
                        >
                          <ExternalLink className="w-4.5 h-4.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white uppercase tracking-tight group-hover:text-neutral-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-neutral-300 font-sans text-xs leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Bullet Highlights */}
                  <ul className="space-y-1.5 pt-2">
                    {project.details.slice(0, 2).map((bullet, bIdx) => (
                      <li key={bIdx} className="text-neutral-400 text-[11px] font-sans flex items-start gap-2 line-clamp-2 leading-relaxed">
                        <span className="text-white font-bold select-none">—</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech tags and Details Trigger */}
                <div className="px-6 pb-6 pt-4 border-t border-white/5 flex flex-col gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-none text-[9px] font-mono text-neutral-400 uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-none text-[9px] font-mono text-neutral-500 uppercase tracking-wider">
                        +{project.technologies.length - 4} MORE
                      </span>
                    )}
                  </div>

                  <button
                    id={`view-details-${project.id}`}
                    onClick={() => setSelectedProject(project)}
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 bg-white/5 border border-white/10 hover:border-white hover:bg-white/10 text-white text-[10px] uppercase font-black tracking-widest font-mono transition-all duration-200"
                  >
                    DEMO & DETAILS
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Detailed deep-dive Modal */}
      <AnimatePresence>
          {selectedProject && (
            <div
              id="project-detail-modal"
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-sm overflow-y-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0A0A0A] border border-white/10 rounded-none max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl"
              >
                {/* Modal Header Bar - Fixed at the top */}
                <div className="flex items-center justify-between px-6 py-4 bg-[#121212] border-b border-white/10 flex-shrink-0 z-20">
                  <h3 className="font-display font-black text-sm sm:text-base text-white uppercase tracking-tight">
                    {selectedProject.title}
                  </h3>
                  <button
                    id="close-modal-btn"
                    onClick={() => setSelectedProject(null)}
                    className="p-2 bg-[#121212] hover:bg-[#1c1c1c] border border-white/10 text-white hover:border-white transition-colors rounded-none flex items-center justify-center"
                    aria-label="Close Modal"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Modal Scrollable Content Container */}
                <div className="overflow-y-auto flex-grow">
                  <div className="p-6 sm:p-8 md:p-10 space-y-6">
                    
                    {/* Overview */}
                    <div className="space-y-3">
                      <h4 className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Overview</h4>
                      <p className="text-neutral-300 font-sans text-sm leading-relaxed">
                        {selectedProject.longDescription || selectedProject.description}
                      </p>
                    </div>

                    {/* Full Bullet Points of impact */}
                    <div className="space-y-3">
                      <h4 className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Technical Contributions</h4>
                      <ul className="space-y-2.5">
                        {selectedProject.details.map((detail, idx) => (
                          <li key={idx} className="text-neutral-300 text-xs font-sans flex items-start gap-2.5 leading-relaxed">
                            <span className="text-white font-bold select-none">—</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Complete Tech badging */}
                    <div className="space-y-3">
                      <h4 className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Technologies & Libraries</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-none font-mono text-[10px] text-neutral-300 uppercase tracking-wider"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* External Actions row */}
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
                      {selectedProject.liveUrl && (
                        <a
                          id="modal-live-link"
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 bg-white text-black hover:bg-neutral-200 font-black text-xs uppercase tracking-widest transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Website
                        </a>
                      )}
                      {selectedProject.codeUrl && (
                        <a
                          id="modal-code-link"
                          href={selectedProject.codeUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 bg-transparent border border-white/25 hover:border-white text-white text-xs font-black uppercase tracking-widest transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>
  );
}
