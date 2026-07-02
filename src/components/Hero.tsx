import { motion } from 'motion/react';
import { ArrowUpRight, Github, Linkedin, Mail, FileText, Sparkles, Terminal } from 'lucide-react';
import { personalInfo } from '../data';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#0A0A0A]"
    >
      {/* Background elegant grid pattern with zero colored glow nodes */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Main Hero Intro Text - spans 7 columns */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-8">

            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 text-white font-mono text-[10px] font-bold tracking-[0.25em] uppercase"
            >
              <Sparkles className="w-3.5 h-3.5 opacity-70" />
              SOFTWARE ENGINEERING GRADUATE
            </motion.div>

            {/* Main Greeting and Name */}
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-mono text-white/50 text-xs tracking-[0.3em] uppercase block"
              >
                HI, MY NAME IS
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                id="hero-name"
                className="font-display font-black text-6xl sm:text-7xl md:text-8xl tracking-tighter text-white leading-[0.85] uppercase"
              >
                {personalInfo.name.split(' ').map((part, i) => (
                  <span key={i} className="block">
                    {part}
                  </span>
                ))}
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-display font-bold text-lg sm:text-xl md:text-2xl text-white/70 tracking-widest uppercase mt-4"
              >
                I CRAFT HIGH-PERFORMANCE WEB APPLICATIONS.
              </motion.h2>
            </div>

            {/* Quick summary snippet */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-neutral-400 font-sans text-sm sm:text-base max-w-xl leading-relaxed"
            >
              {personalInfo.summary}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-2 w-full sm:w-auto"
            >
              <a
                id="hero-view-projects-cta"
                href="#projects"
                className="group flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-black text-[10px] tracking-widest uppercase font-black hover:bg-neutral-200 transition-all duration-300 w-full sm:w-auto"
              >
                EXPLORE PROJECTS
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <button
                id="hero-view-resume-cta"
                onClick={onOpenResume}
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border border-white/20 hover:border-white text-white text-[10px] tracking-widest uppercase font-black transition-all duration-200 w-full sm:w-auto"
              >
                <FileText className="w-4 h-4" />
                VIEW RESUME
              </button>

              <a
                id="hero-contact-cta"
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 border border-white/10 hover:bg-white/10 text-white text-[10px] tracking-widest uppercase font-black transition-all duration-200 w-full sm:w-auto"
              >
                <Mail className="w-4 h-4" />
                GET IN TOUCH
              </a>
            </motion.div>

            {/* Quick Profile Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-5 pt-6 border-t border-white/10 w-full"
            >
              <span className="text-white/40 font-mono text-[10px] tracking-widest uppercase">CONNECT</span>
              <div className="flex gap-3">
                <a
                  id="hero-social-linkedin"
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 border border-white/10 hover:border-white/50 text-white/50 hover:text-white transition-all duration-150"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  id="hero-social-github"
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 border border-white/10 hover:border-white/50 text-white/50 hover:text-white transition-all duration-150"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  id="hero-social-email"
                  href={`mailto:${personalInfo.email}`}
                  className="p-2 border border-white/10 hover:border-white/50 text-white/50 hover:text-white transition-all duration-150"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

          </div>

          {/* Interactive Modern Code Editor - spans 5 columns */}
          <div className="lg:col-span-5 h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="w-full max-w-lg bg-[#121212] border border-white/10 rounded-none overflow-hidden shadow-2xl relative"
            >
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#181818] border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                </div>
                <div className="flex items-center gap-1.5 text-white/40 font-mono text-[10px] uppercase tracking-wider">
                  <Terminal className="w-3 h-3 text-white/40" />
                  <span>subhan-kashif.ts</span>
                </div>
                <div className="w-12" /> {/* spacer */}
              </div>

              {/* Code lines */}
              <div className="p-6 font-mono text-xs overflow-x-auto space-y-1.5 text-neutral-300 leading-relaxed selection:bg-white/20">
                <div>
                  <span className="text-white font-bold">const</span>{' '}
                  <span className="text-neutral-200">developer</span>{' '}
                  <span className="text-neutral-500">=</span>{' '}
                  <span className="text-neutral-500">{'{'}</span>
                </div>
                <div className="pl-4">
                  <span className="text-neutral-400">name:</span>{' '}
                  <span className="text-white">'{personalInfo.name}'</span>
                  <span className="text-neutral-500">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-neutral-400">role:</span>{' '}
                  <span className="text-white">'Full Stack Web Developer'</span>
                  <span className="text-neutral-500">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-neutral-400">education:</span>{' '}
                  <span className="text-white">'{personalInfo.subtitle}'</span>
                  <span className="text-neutral-500">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-neutral-400">skills:</span>{' '}
                  <span className="text-neutral-500">['</span>
                  <span className="text-white">React</span>
                  <span className="text-neutral-500">', '</span>
                  <span className="text-white">NextJS</span>
                  <span className="text-neutral-500">', '</span>
                  <span className="text-white">NodeJS</span>
                  <span className="text-neutral-500">']</span>
                  <span className="text-neutral-500">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-neutral-400">databases:</span>{' '}
                  <span className="text-neutral-500">['</span>
                  <span className="text-white">PostgreSQL</span>
                  <span className="text-neutral-500">', '</span>
                  <span className="text-white">Supabase</span>
                  <span className="text-neutral-500">']</span>
                  <span className="text-neutral-500">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-neutral-400">availableForHire:</span>{' '}
                  <span className="text-neutral-200 font-bold">true</span>
                  <span className="text-neutral-500">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-neutral-400">passionateAbout:</span>{' '}
                  <span className="text-white">'Building Scalable Web Applications'</span>
                </div>
                <div>
                  <span className="text-neutral-500">{'};'}</span>
                </div>

                <div className="pt-4 border-t border-white/5 text-neutral-500">
                  <span>// Executing function checkAvailability()</span>
                </div>
                <div>
                  <span className="text-white font-bold">if</span>{' '}
                  <span className="text-neutral-500">(</span>
                  <span className="text-neutral-200">developer</span>
                  <span className="text-neutral-500">.</span>
                  <span className="text-neutral-400">availableForHire</span>
                  <span className="text-neutral-500">) {'{'}</span>
                </div>
                <div className="pl-4 text-white font-bold">
                  <span className="text-neutral-300">console</span>
                  <span className="text-neutral-500">.</span>
                  <span className="text-neutral-300">log</span>
                  <span className="text-neutral-500">(</span>
                  <span>"Ready for outstanding opportunities!"</span>
                  <span className="text-neutral-500">);</span>
                </div>
                <div>
                  <span className="text-neutral-500">{'}'}</span>
                </div>
              </div>

              {/* Run Terminal Bar */}
              <div className="bg-[#181818] px-4 py-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                <span>STATUS: ACTIVE</span>
                <span className="text-white font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  LIVE RUNNER
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
