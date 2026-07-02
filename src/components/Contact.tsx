import { Mail, Phone, MapPin, Linkedin, Github, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0A0A0A] relative border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="text-left mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 text-white font-mono text-[10px] tracking-[0.25em] uppercase">
            <MessageSquare className="w-3.5 h-3.5 opacity-70" />
            CONNECT
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tighter uppercase leading-[0.9]">
            GET IN TOUCH
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm uppercase tracking-widest font-bold max-w-xl">
            Ready to build together? Drop me a line, shoot an email, or connect via socials.
          </p>
        </div>

        {/* Centered Main Deck */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

          {/* Quick Contact Cards */}
          <div className="bg-[#121212] border border-white/10 rounded-none p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            <h3 className="font-display font-bold text-lg text-white uppercase tracking-tight">
              CONTACT INFORMATION
            </h3>

            <div className="space-y-4 flex-grow flex flex-col justify-center">
              {/* Email item */}
              <a
                id="contact-info-email"
                href={`mailto:${personalInfo.email}`}
                className="flex items-start gap-4 p-4 rounded-none bg-[#0A0A0A] border border-white/10 hover:border-white transition-all group"
              >
                <div className="p-3 bg-white/5 border border-white/10 text-white group-hover:bg-white group-hover:text-black transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block mb-1">SEND AN EMAIL</span>
                  <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-neutral-300 transition-colors">
                    {personalInfo.email}
                  </span>
                </div>
              </a>

              {/* Phone item */}
              <a
                id="contact-info-phone"
                href={`tel:${personalInfo.phone}`}
                className="flex items-start gap-4 p-4 rounded-none bg-[#0A0A0A] border border-white/10 hover:border-white transition-all group"
              >
                <div className="p-3 bg-white/5 border border-white/10 text-white group-hover:bg-white group-hover:text-black transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block mb-1">CALL DIRECTLY</span>
                  <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-neutral-300 transition-colors">
                    {personalInfo.phone}
                  </span>
                </div>
              </a>

              {/* Location item */}
              <div className="flex items-start gap-4 p-4 rounded-none bg-[#0A0A0A] border border-white/10">
                <div className="p-3 bg-white/5 border border-white/10 text-white">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block mb-1">CURRENT LOCATION</span>
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Social Deck
          <div className="bg-[#121212] border border-white/10 rounded-none p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="font-display font-bold text-lg text-white uppercase tracking-tight">
                SOCIAL DECK
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                Feel free to connect on professional networks. I am active on LinkedIn for professional inquiries and showcase all my repositories open-source on GitHub.
              </p>
            </div>

            <div className="space-y-4">
              <a
                id="contact-social-linkedin"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 py-4 bg-[#0A0A0A] border border-white/10 hover:border-white text-white transition-all font-mono text-xs uppercase tracking-widest group"
              >
                <Linkedin className="w-4.5 h-4.5 text-white group-hover:scale-110 transition-transform" />
                LINKEDIN PROFILE
              </a>
              <a
                id="contact-social-github"
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 py-4 bg-[#0A0A0A] border border-white/10 hover:border-white text-white transition-all font-mono text-xs uppercase tracking-widest group"
              >
                <Github className="w-4.5 h-4.5 text-white group-hover:scale-110 transition-transform" />
                GITHUB PROFILE
              </a>
            </div>
          </div> */}

        </div>
      </div>
    </section>
  );
}
