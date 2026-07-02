import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-[#050505] border-t border-white/10 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Logo & copyright */}
          <div className="space-y-2">
            <h4 className="font-display font-black text-lg text-white uppercase tracking-tight">
              Muhammad Subhan Kashif
            </h4>
            <p className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest">
              © {new Date().getFullYear()} All Rights Reserved. Crafted with care.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            <a
              id="footer-linkedin"
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-none bg-white/5 border border-white/10 hover:border-white text-white transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              id="footer-github"
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-none bg-white/5 border border-white/10 hover:border-white text-white transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              id="footer-email"
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-none bg-white/5 border border-white/10 hover:border-white text-white transition-all"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Scroll to top */}
          <button
            id="scroll-to-top-btn"
            onClick={scrollToTop}
            className="p-3 rounded-none bg-white/5 border border-white/10 hover:border-white text-white transition-all group flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest font-black"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>

      </div>
    </footer>
  );
}
