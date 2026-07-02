import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Linkedin, Github, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitState, setSubmitState] = useState<'idle' | 'sending' | 'success'>('idle');

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'Full Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Message text is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitState('sending');

    // Simulate sending message
    setTimeout(() => {
      setSubmitState('success');
    }, 1800);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setSubmitState('idle');
  };

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

        {/* Main Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Meta Information Cards (5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="bg-[#121212] border border-white/10 rounded-none p-6 sm:p-8 space-y-6">
              <h3 className="font-display font-bold text-lg text-white uppercase tracking-tight">
                CONTACT INFORMATION
              </h3>
              
              <div className="space-y-4">
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

            {/* Quick Social Deck */}
            <div className="bg-[#121212] border border-white/10 rounded-none p-6 sm:p-8 space-y-4">
              <h4 className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">SOCIAL CHANNELS</h4>
              <div className="flex gap-4">
                <a
                  id="contact-social-linkedin"
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#0A0A0A] border border-white/10 hover:border-white text-white transition-all font-mono text-[10px] uppercase tracking-widest"
                >
                  <Linkedin className="w-4 h-4 text-white" />
                  LinkedIn
                </a>
                <a
                  id="contact-social-github"
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#0A0A0A] border border-white/10 hover:border-white text-white transition-all font-mono text-[10px] uppercase tracking-widest"
                >
                  <Github className="w-4 h-4 text-white" />
                  GitHub
                </a>
              </div>
            </div>

          </div>

          {/* Right Column - Interactive Form & Success Slate (7 columns) */}
          <div className="lg:col-span-7 bg-[#121212] border border-white/10 rounded-none p-6 sm:p-8 min-h-[460px] flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              
              {/* IDLE state or FILLING state */}
              {submitState === 'idle' && (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name input */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Your Name</label>
                      <input
                        id="contact-form-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className={`w-full bg-[#0A0A0A] border ${
                          errors.name ? 'border-white' : 'border-white/10 focus:border-white'
                        } rounded-none px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none transition-all`}
                      />
                      {errors.name && (
                        <span className="text-[10px] font-mono text-white flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email input */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Email Address</label>
                      <input
                        id="contact-form-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className={`w-full bg-[#0A0A0A] border ${
                          errors.email ? 'border-white' : 'border-white/10 focus:border-white'
                        } rounded-none px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none transition-all`}
                      />
                      {errors.email && (
                        <span className="text-[10px] font-mono text-white flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Subject input */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Subject</label>
                    <input
                      id="contact-form-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Opportunity or Collaboration query"
                      className={`w-full bg-[#0A0A0A] border ${
                        errors.subject ? 'border-white' : 'border-white/10 focus:border-white'
                      } rounded-none px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none transition-all`}
                    />
                    {errors.subject && (
                      <span className="text-[10px] font-mono text-white flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.subject}
                      </span>
                    )}
                  </div>

                  {/* Message input */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Message</label>
                    <textarea
                      id="contact-form-message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Write your message here..."
                      rows={5}
                      className={`w-full bg-[#0A0A0A] border ${
                        errors.message ? 'border-white' : 'border-white/10 focus:border-white'
                      } rounded-none px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none transition-all resize-none`}
                    />
                    {errors.message && (
                      <span className="text-[10px] font-mono text-white flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </span>
                    )}
                  </div>

                  <button
                    id="contact-form-submit-btn"
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-white hover:bg-neutral-200 text-black font-black text-xs uppercase tracking-widest rounded-none transition-all"
                  >
                    <Send className="w-4 h-4" />
                    SEND MESSAGE
                  </button>
                </motion.form>
              )}

              {/* SENDING state */}
              {submitState === 'sending' && (
                <motion.div
                  key="sending-loader"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center p-8 space-y-4"
                >
                  <div className="relative w-12 h-12">
                    <div className="absolute inset-0 border-2 border-white/10 rounded-full" />
                    <div className="absolute inset-0 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-white uppercase tracking-tight">Transmitting Message</h4>
                  <p className="text-neutral-500 text-[10px] font-mono uppercase tracking-widest">
                    Connecting to secure mail pipelines...
                  </p>
                </motion.div>
              )}

              {/* SUCCESS state */}
              {submitState === 'success' && (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center p-6 space-y-6"
                >
                  <div className="p-4 bg-white/5 border border-white/10 rounded-none text-white animate-bounce">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-display font-black text-2xl text-white uppercase tracking-tighter">MESSAGE TRANSMITTED!</h4>
                    <p className="text-neutral-300 text-xs sm:text-sm max-w-md font-sans leading-relaxed">
                      Thank you, <strong className="text-white">{formData.name}</strong>. Your message on <strong className="italic text-white">"{formData.subject}"</strong> was logged successfully.
                    </p>
                    <p className="text-neutral-500 text-[10px] font-mono uppercase tracking-widest">
                      Subhan will respond to you shortly at <strong className="text-white">{formData.email}</strong>
                    </p>
                  </div>

                  <button
                    id="contact-reset-btn"
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-transparent border border-white/20 hover:border-white text-white font-bold text-[10px] uppercase tracking-widest rounded-none transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
