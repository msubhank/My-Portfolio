import { motion } from 'motion/react';
import { X, Printer, Mail, Phone, Linkedin, Github, FileText } from 'lucide-react';
import { personalInfo, experiences, projects, education, certifications } from '../data';

interface ResumeModalProps {
  onClose: () => void;
}

export default function ResumeModal({ onClose }: ResumeModalProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm overflow-y-auto"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.3 }}
        className="bg-[#0A0A0A] border border-white/10 rounded-none w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden shadow-2xl print:border-none print:bg-white print:p-0 print:shadow-none"
      >
        {/* Modal Controls Bar (Hidden on print) */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#121212] border-b border-white/10 print:hidden flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-white" />
            <h3 className="font-display font-black text-sm uppercase tracking-wider text-white">CURRICULUM VITAE</h3>
          </div>
          <div className="flex items-center gap-3">
            <button
              id="resume-print-btn"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-neutral-200 text-black text-xs font-black uppercase tracking-widest transition-all rounded-none"
            >
              <Printer className="w-3.5 h-3.5" />
              PRINT / SAVE PDF
            </button>
            <button
              id="resume-close-btn"
              onClick={onClose}
              className="p-2 bg-[#121212] hover:bg-[#1c1c1c] border border-white/10 text-white hover:border-white transition-colors rounded-none"
              aria-label="Close CV Modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable/Scrollable Resume Sheet Wrapper */}
        <div className="p-6 md:p-10 overflow-y-auto bg-[#0A0A0A] print:bg-white print:overflow-visible print:p-0">
          
          <div 
            id="resume-printable-sheet"
            className="bg-[#0A0A0A] border border-white/10 p-6 sm:p-10 rounded-none space-y-8 text-left max-w-3xl mx-auto print:border-none print:bg-white print:p-0 print:text-black print:space-y-6"
          >
            {/* 1. Header Contact block */}
            <div className="text-center space-y-4 border-b border-white/10 pb-6 print:border-slate-300 print:pb-4">
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white print:text-slate-900 tracking-tighter uppercase leading-none">
                {personalInfo.name}
              </h2>
              <p className="text-white font-mono text-xs tracking-widest uppercase print:text-neutral-700">
                {personalInfo.title}
              </p>

              {/* Contact meta pills */}
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] font-mono uppercase tracking-widest text-neutral-400 print:text-slate-600">
                <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-1.5 hover:text-white print:hover:text-slate-600">
                  <Phone className="w-3.5 h-3.5 text-white" />
                  <span>{personalInfo.phone}</span>
                </a>
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1.5 hover:text-white print:hover:text-slate-600">
                  <Mail className="w-3.5 h-3.5 text-white" />
                  <span>{personalInfo.email}</span>
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white print:hover:text-slate-600">
                  <Linkedin className="w-3.5 h-3.5 text-white" />
                  <span>linkedin.com/in/msubhank</span>
                </a>
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white print:hover:text-slate-600">
                  <Github className="w-3.5 h-3.5 text-white" />
                  <span>github.com/msubhank</span>
                </a>
              </div>
            </div>

            {/* 2. Professional Summary */}
            <div className="space-y-3">
              <h4 className="font-display font-black text-xs uppercase tracking-[0.2em] text-white border-l-2 border-white pl-3 print:text-slate-900 print:border-black">
                PROFESSIONAL SUMMARY
              </h4>
              <p className="text-neutral-300 print:text-neutral-700 font-sans text-sm leading-relaxed">
                {personalInfo.summary}
              </p>
            </div>

            {/* 3. Experience */}
            <div className="space-y-4">
              <h4 className="font-display font-black text-xs uppercase tracking-[0.2em] text-white border-l-2 border-white pl-3 print:text-slate-900 print:border-black">
                PROFESSIONAL EXPERIENCE
              </h4>

              {experiences.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h5 className="font-display font-bold text-sm sm:text-base text-white uppercase tracking-tight print:text-slate-900">
                      {exp.role} <span className="text-neutral-500 font-normal">| {exp.company}</span>
                    </h5>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-white bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-none print:bg-transparent print:p-0 print:text-black">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5 pl-4 list-disc text-xs sm:text-sm text-neutral-300 print:text-neutral-700 font-sans">
                    {exp.details.map((detail, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* 4. Projects */}
            <div className="space-y-4">
              <h4 className="font-display font-black text-xs uppercase tracking-[0.2em] text-white border-l-2 border-white pl-3 print:text-slate-900 print:border-black">
                KEY PROJECTS
              </h4>

              <div className="space-y-3">
                {projects.map((proj) => (
                  <div key={proj.id} className="space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h5 className="font-display font-bold text-sm text-white uppercase tracking-tight print:text-slate-900">
                        {proj.title}{' '}
                        <span className="text-xs font-mono text-neutral-500 uppercase tracking-normal">
                          ({proj.category})
                        </span>
                      </h5>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-500 max-w-[200px] truncate text-right">
                        {proj.technologies.slice(0, 4).join(', ')}
                      </span>
                    </div>
                    <p className="text-neutral-300 print:text-neutral-700 font-sans text-xs leading-relaxed">
                      {proj.details[0] || proj.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Technical Skills */}
            <div className="space-y-4">
              <h4 className="font-display font-black text-xs uppercase tracking-[0.2em] text-white border-l-2 border-white pl-3 print:text-slate-900 print:border-black">
                TECHNICAL SKILLS
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="space-y-1.5">
                  <span className="font-bold text-white print:text-slate-900 font-mono block uppercase text-[9px] tracking-widest text-neutral-500">
                    Languages & DBs
                  </span>
                  <p className="text-neutral-300 print:text-neutral-700 font-sans">
                    JavaScript, C/C++, Python, SQL, HTML5, CSS3, PostgreSQL, MySQL, Supabase, SQLite
                  </p>
                </div>

                <div className="space-y-1.5">
                  <span className="font-bold text-white print:text-slate-900 font-mono block uppercase text-[9px] tracking-widest text-neutral-500">
                    Frameworks & Tools
                  </span>
                  <p className="text-neutral-300 print:text-neutral-700 font-sans">
                    React, Next.js, Node.js, Express.js, Tailwind CSS, Git, GitHub, VS Code, Vercel, Linux
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Education */}
            <div className="space-y-3">
              <h4 className="font-display font-black text-xs uppercase tracking-[0.2em] text-white border-l-2 border-white pl-3 print:text-slate-900 print:border-black">
                ACADEMIC BACKGROUND
              </h4>

              {education.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div>
                    <h5 className="font-display font-bold text-sm text-white uppercase tracking-tight print:text-slate-900">
                      {edu.institution}
                    </h5>
                    <p className="text-neutral-300 print:text-neutral-700 font-sans mt-0.5">{edu.degree}</p>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-white bg-white/5 border border-white/10 px-2 py-0.5 rounded-none print:bg-transparent print:p-0 print:text-black self-start sm:self-auto">
                    {edu.period}
                  </span>
                </div>
              ))}
            </div>

            {/* 7. Certifications */}
            <div className="space-y-3 pb-2">
              <h4 className="font-display font-black text-xs uppercase tracking-[0.2em] text-white border-l-2 border-white pl-3 print:text-slate-900 print:border-black">
                CERTIFICATIONS
              </h4>

              {certifications.map((cert, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div>
                    <h5 className="font-display font-bold text-sm text-white uppercase tracking-tight print:text-slate-900">
                      {cert.title}
                    </h5>
                    <p className="text-neutral-300 print:text-neutral-700 font-sans mt-0.5">{cert.issuer}</p>
                  </div>
                  <span className="font-mono text-neutral-500 self-start sm:self-auto uppercase text-[10px] tracking-wider">{cert.date}</span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </motion.div>
    </div>
  );
}
