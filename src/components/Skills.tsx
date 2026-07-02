import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Database, Layers, Terminal, Sparkles, SlidersHorizontal } from 'lucide-react';
import { skills } from '../data';
import { Skill } from '../types';

export default function Skills() {
  const [activeTab, setActiveTab] = useState<'All' | 'Languages' | 'Frameworks & Libraries' | 'Databases' | 'Tools'>('All');

  const tabs: ('All' | 'Languages' | 'Frameworks & Libraries' | 'Databases' | 'Tools')[] = [
    'All',
    'Languages',
    'Frameworks & Libraries',
    'Databases',
    'Tools',
  ];

  const filteredSkills = activeTab === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);

  // Return the best icon representing a category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Languages':
        return <Code2 className="w-4 h-4 text-white" />;
      case 'Frameworks & Libraries':
        return <Layers className="w-4 h-4 text-white" />;
      case 'Databases':
        return <Database className="w-4 h-4 text-white" />;
      case 'Tools':
        return <Terminal className="w-4 h-4 text-white" />;
      default:
        return <Code2 className="w-4 h-4 text-white" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#0A0A0A] relative border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 text-white font-mono text-[10px] tracking-[0.25em] uppercase">
              <SlidersHorizontal className="w-3.5 h-3.5 opacity-70" />
              PROFICIENCIES
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tighter uppercase leading-[0.9]">
              TECHNICAL<br />SKILLSET
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm uppercase tracking-widest font-bold max-w-xl">
              Curated languages, frameworks, databases, and development tooling.
            </p>
          </div>

          {/* Quick interactive badge */}
          <div className="hidden lg:flex items-center gap-2 px-4 py-2.5 bg-[#121212] border border-white/10 rounded-none text-neutral-400 font-mono text-[10px] uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-white" />
            <span>Click categories below to filter competencies</span>
          </div>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-start gap-2 mb-10 pb-2 border-b border-white/10">
          {tabs.map((tab) => (
            <button
              key={tab}
              id={`skill-tab-${tab.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-mono text-[10px] tracking-wider uppercase font-black transition-all duration-200 border-t border-x border-b-2 ${
                activeTab === tab
                  ? 'text-black bg-white border-white border-b-white'
                  : 'text-white/50 bg-transparent border-transparent border-b-transparent hover:text-white hover:border-white/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid with Entry Animations */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill: Skill) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                key={skill.name}
                id={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-[#121212] border border-white/10 rounded-none p-5 hover:border-white/40 transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Header info */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/5 border border-white/10 group-hover:border-white/30 transition-colors">
                      {getCategoryIcon(skill.category)}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm sm:text-base text-white uppercase tracking-tight group-hover:text-neutral-300 transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Level Percentage Bar */}
                <div className="mt-6 space-y-1.5">
                  <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-wider">
                    <span className="text-neutral-500">Proficiency</span>
                    <span className="text-white font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-1 w-full bg-white/10 rounded-none overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      className="h-full bg-white"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
      </div>
    </section>
  );
}
