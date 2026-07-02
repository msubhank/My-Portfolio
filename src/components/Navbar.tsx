import { useState, useEffect } from 'react';
import { Menu, X, FileText, Linkedin, Github } from 'lucide-react';
import { personalInfo } from '../data';

interface NavbarProps {
  onOpenResume: () => void;
  activeSection: string;
}

export default function Navbar({ onOpenResume, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              id="nav-logo"
              href="#home"
              className="font-display text-xs tracking-[0.3em] font-bold uppercase border-l-2 border-white pl-3 text-white flex items-center transition-all duration-300 hover:opacity-80"
            >
              M. SUBHAN KASHIF / 2026
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            <div className="flex space-x-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.name}
                    id={`nav-link-${link.name.toLowerCase()}`}
                    href={link.href}
                    className={`font-display text-[10px] tracking-[0.2em] uppercase font-bold transition-all duration-200 ${
                      isActive ? 'text-white opacity-100 border-b border-white pb-1' : 'text-white opacity-50 hover:opacity-100'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* Socials & Resume */}
            <div className="flex items-center space-x-6 border-l border-white/10 pl-6">
              <a
                id="social-linkedin-nav"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-white/60 hover:text-white transition-colors duration-150"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                id="social-github-nav"
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="text-white/60 hover:text-white transition-colors duration-150"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <button
                id="nav-resume-btn"
                onClick={onOpenResume}
                className="flex items-center gap-2 text-[10px] tracking-widest uppercase font-black bg-white hover:bg-transparent text-black hover:text-white border border-white px-4 py-2 transition-all duration-300"
              >
                <FileText className="w-3.5 h-3.5" />
                Resume
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 text-white hover:bg-white/5 focus:outline-none transition-colors duration-200"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute top-20 left-0 right-0 bg-[#0A0A0A] border-b border-white/10 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen py-4 opacity-100 shadow-2xl' : 'max-h-0 py-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-3 space-y-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.name}
                id={`mobile-nav-link-${link.name.toLowerCase()}`}
                href={link.href}
                onClick={handleLinkClick}
                className={`block px-3 py-2.5 font-display text-[11px] tracking-widest uppercase font-bold transition-colors ${
                  isActive
                    ? 'bg-white/5 text-white border-l-2 border-white'
                    : 'text-white/60 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3 px-3">
            <div className="flex items-center gap-6">
              <a
                id="mobile-linkedin-nav"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-white"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-[11px] tracking-wider uppercase font-bold">LinkedIn</span>
              </a>
              <a
                id="mobile-github-nav"
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-white"
              >
                <Github className="w-4 h-4" />
                <span className="text-[11px] tracking-wider uppercase font-bold">GitHub</span>
              </a>
            </div>
            <button
              id="mobile-resume-btn"
              onClick={() => {
                handleLinkClick();
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 font-black text-[10px] tracking-widest uppercase bg-white text-black hover:bg-transparent hover:text-white border border-white py-3 transition-colors duration-200"
            >
              <FileText className="w-3.5 h-3.5" />
              View Resume
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
