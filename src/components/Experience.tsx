import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, Milestone, ArrowUpRight } from 'lucide-react';
import { experiences } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#0A0A0A] relative border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-left mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 text-white font-mono text-[10px] tracking-[0.25em] uppercase">
            <Briefcase className="w-3.5 h-3.5 opacity-70" />
            TIMELINE
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tighter uppercase leading-[0.9]">
            WORK EXPERIENCE
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm uppercase tracking-widest font-bold max-w-xl">
            My industry internship details, responsibilities, and professional milestones.
          </p>
        </div>

        {/* Timeline Structure */}
        <div className="relative max-w-3xl mx-auto md:mx-0">
          
          {/* Vertical central path line */}
          <div className="absolute left-4 md:left-8 top-2 bottom-2 w-0.5 bg-white/10" />

          {experiences.map((exp, idx) => (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              key={exp.id}
              className="relative pl-12 md:pl-20 pb-12 last:pb-0"
            >
              
              {/* Timeline Bullet Node */}
              <div className="absolute left-1.5 md:left-5 top-1 w-6.5 h-6.5 rounded-none bg-[#0A0A0A] border border-white/30 flex items-center justify-center z-10 transition-transform">
                <Briefcase className="w-3 h-3 text-white" />
              </div>

              {/* Main Content Card */}
              <div
                id={`experience-card-${exp.id}`}
                className="bg-[#121212] border border-white/10 rounded-none p-6 md:p-8 hover:border-white/30 transition-all duration-300 relative group"
              >
                {/* Card Title & Meta Info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-display font-bold text-lg tracking-tight uppercase text-white group-hover:text-neutral-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400 uppercase tracking-wider mt-1.5">
                      <span className="font-bold text-white">{exp.company}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <span className="font-mono text-[10px] text-white bg-white/5 border border-white/10 px-3 py-1.5 rounded-none flex items-center gap-2 self-start md:self-auto uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                </div>

                {/* Experience Details List */}
                <ul className="space-y-3 mb-8">
                  {exp.details.map((detail, dIdx) => (
                    <li
                      key={dIdx}
                      className="text-neutral-300 text-xs sm:text-sm font-sans flex items-start gap-3 leading-relaxed"
                    >
                      <span className="text-white text-base font-bold mt-px select-none">—</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badge List */}
                <div className="pt-6 border-t border-white/10">
                  <span className="text-[10px] font-mono text-neutral-500 block mb-3 uppercase tracking-widest">Technologies Used</span>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-none font-mono text-[10px] text-neutral-300 hover:text-white hover:border-white/30 transition-colors uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
