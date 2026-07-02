import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, Milestone } from 'lucide-react';
import { personalInfo, education, certifications } from '../data';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0A0A0A] relative border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-left mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 text-white font-mono text-[10px] tracking-[0.25em] uppercase">
            <Milestone className="w-3.5 h-3.5 opacity-70" />
            BACKGROUND
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tighter uppercase leading-[0.9]">
            ABOUT ME &<br />EDUCATION
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm uppercase tracking-widest font-bold max-w-xl">
            My engineering foundations, academic accomplishments, and high-level milestones.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Main Biography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-[#121212] border border-white/10 rounded-none p-6 sm:p-8 flex flex-col justify-between hover:border-white/30 transition-all duration-300 relative group overflow-hidden"
          >
            <div className="space-y-4 relative z-10">
              <h3 className="font-display font-black text-lg tracking-wider uppercase text-white flex items-center gap-2">
                <span className="w-2 h-2 bg-white" />
                MY PHILOSOPHY
              </h3>
              <p className="text-neutral-300 font-sans text-sm leading-relaxed">
                As a Software Engineering graduate, I believe that building application interfaces is both a science and an art. I enjoy bridge-building between solid back-end architecture and fluid, delightful front-end UX.
              </p>
              <p className="text-neutral-300 font-sans text-sm leading-relaxed">
                During my internship at <strong className="text-white font-bold">BytesFort</strong>, I collaborated with multidisciplinary teams, learning how to structure production-level code, optimize bundle delivery, and ensure pixel-perfect fidelity. I design applications with clean, decoupled APIs, sturdy SQL databases, and robust auth guards.
              </p>
            </div>

            {/* Quick metadata details */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4 relative z-10">
              <div className="flex items-center gap-2.5 text-neutral-400">
                <MapPin className="w-4 h-4 text-white" />
                <span className="text-[11px] font-mono uppercase tracking-wider">{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2.5 text-neutral-400">
                <BookOpen className="w-4 h-4 text-white" />
                <span className="text-[11px] font-mono uppercase tracking-wider">Software Engineering</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Interactive Stats Deck */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4 w-full"
          >
            {personalInfo.stats.map((stat, i) => (
              <div
                key={stat.label}
                className="bg-[#121212] border border-white/10 rounded-none p-5 flex flex-col justify-center items-center text-center hover:border-white/30 transition-all duration-300 group"
              >
                <span className="font-display font-black text-4xl sm:text-5xl text-white group-hover:scale-105 transition-transform duration-300 tracking-tighter">
                  {stat.value}
                </span>
                <span className="text-[9px] tracking-[0.2em] text-neutral-400 font-mono mt-3 uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Card 3: Academic Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 bg-[#121212] border border-white/10 rounded-none p-6 sm:p-8 hover:border-white/30 transition-all duration-300 relative group overflow-hidden"
          >
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-black text-lg tracking-wider uppercase text-white flex items-center gap-2.5">
                  <GraduationCap className="w-5 h-5 text-white" />
                  EDUCATION HISTORY
                </h3>
              </div>

              {education.map((edu, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h4 className="font-display font-bold text-base tracking-tight text-white uppercase">
                      {edu.institution}
                    </h4>
                    <span className="font-mono text-[10px] text-white bg-white/5 px-2.5 py-1 rounded-none border border-white/10 flex items-center gap-1.5 self-start sm:self-auto uppercase tracking-wider">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-neutral-400 text-xs font-bold uppercase tracking-wide">{edu.degree}</p>
                  
                  <ul className="space-y-2 pt-2">
                    {edu.details.map((detail, dIdx) => (
                      <li key={dIdx} className="text-neutral-300 text-xs font-sans flex items-start gap-2.5 leading-relaxed">
                        <span className="text-white font-bold text-sm mt-px">—</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 4: Certifications & Recognition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-5 bg-[#121212] border border-white/10 rounded-none p-6 sm:p-8 hover:border-white/30 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between"
          >
            <div className="space-y-6 relative z-10">
              <h3 className="font-display font-black text-lg tracking-wider uppercase text-white flex items-center gap-2.5">
                <Award className="w-5 h-5 text-white" />
                CERTIFICATIONS
              </h3>

              {certifications.map((cert, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="font-display font-bold text-sm uppercase tracking-tight text-white hover:text-neutral-300 transition-colors">
                    {cert.title}
                  </h4>
                  <div className="flex items-center gap-3 text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                    <span>{cert.issuer}</span>
                    <span>•</span>
                    <span>{cert.date}</span>
                  </div>
                  <p className="text-neutral-400 text-xs font-sans leading-relaxed pt-1">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10 mt-6 relative z-10 flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">BYTESFORT VERIFIED</span>
              <span className="font-mono text-[9px] tracking-widest bg-white text-black px-1.5 py-0.5 font-bold uppercase">
                [ VERIFIED ]
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
