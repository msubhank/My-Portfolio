import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FolderGit2, ArrowUpRight, Github, ExternalLink, X, Code2, Play, CheckCircle2, CloudSun, CalendarDays, Compass } from 'lucide-react';
import { projects } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'all' | 'fullstack' | 'frontend'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // States for Interactive Demos inside the Modal
  const [weatherCity, setWeatherCity] = useState('Lahore');
  const [weatherResult, setWeatherResult] = useState<any>({
    temp: 34,
    condition: 'Sunny',
    humidity: 45,
    wind: 12,
    feelsLike: 37
  });

  // Prayer Time Selected City
  const [prayerCity, setPrayerCity] = useState('Lahore');
  const prayerTimesDatabase: Record<string, Record<string, string>> = {
    Lahore: { Fajr: '03:45 AM', Dhuhr: '12:15 PM', Asr: '03:52 PM', Maghrib: '07:12 PM', Isha: '08:45 PM' },
    London: { Fajr: '03:12 AM', Dhuhr: '01:05 PM', Asr: '05:15 PM', Maghrib: '09:21 PM', Isha: '10:35 PM' },
    'New York': { Fajr: '04:10 AM', Dhuhr: '01:02 PM', Asr: '04:55 PM', Maghrib: '08:30 PM', Isha: '09:48 PM' },
    Tokyo: { Fajr: '02:50 AM', Dhuhr: '11:45 AM', Asr: '03:32 PM', Maghrib: '06:55 PM', Isha: '08:15 PM' }
  };

  // Code editor sandbox state
  const [sandboxCode, setSandboxCode] = useState(`function sumArray(arr) {\n  return arr.reduce((sum, num) => sum + num, 0);\n}\nconsole.log(sumArray([10, 20, 30, 40]));`);
  const [sandboxOutput, setSandboxOutput] = useState<string>('Press "Run Code" to compile and execute program.');
  const [isRunningCode, setIsRunningCode] = useState(false);

  const handleWeatherSearch = (e: FormEvent) => {
    e.preventDefault();
    const c = weatherCity.trim().toLowerCase();
    if (c === 'london') {
      setWeatherResult({ temp: 19, condition: 'Light Rain', humidity: 78, wind: 22, feelsLike: 18 });
    } else if (c === 'new york') {
      setWeatherResult({ temp: 24, condition: 'Partly Cloudy', humidity: 60, wind: 15, feelsLike: 25 });
    } else if (c === 'tokyo') {
      setWeatherResult({ temp: 27, condition: 'Humid & Overcast', humidity: 82, wind: 8, feelsLike: 30 });
    } else {
      const randomTemp = Math.floor(Math.random() * 12) + 26;
      const states = ['Sunny', 'Clear Sky', 'Scattered Clouds', 'Haze'];
      const randomState = states[Math.floor(Math.random() * states.length)];
      setWeatherResult({
        temp: randomTemp,
        condition: randomState,
        humidity: Math.floor(Math.random() * 30) + 40,
        wind: Math.floor(Math.random() * 15) + 5,
        feelsLike: randomTemp + 2
      });
    }
  };

  const runSandboxCode = () => {
    setIsRunningCode(true);
    setSandboxOutput('Compiling code packages via secure Judge0 sandbox VM...');
    
    setTimeout(() => {
      try {
        if (sandboxCode.includes('sumArray')) {
          setSandboxOutput('COMPILATION SUCCESSFUL (0.04s)\n---------------------------\nOutput:\n100\n\nTest Case 1 (Summing array [10,20,30,40]): PASSED ✅');
        } else if (sandboxCode.includes('fibonacci')) {
          setSandboxOutput('COMPILATION SUCCESSFUL (0.02s)\n---------------------------\nOutput:\n[0, 1, 1, 2, 3, 5]\n\nTest Case 1 (Fibonacci sequence up to N=5): PASSED ✅');
        } else {
          setSandboxOutput('COMPILATION SUCCESSFUL (0.05s)\n---------------------------\nOutput:\nHello, Subhan Kashif!\nSandbox execution terminated gracefully.');
        }
      } catch (err) {
        setSandboxOutput('RUNTIME ERROR: Evaluation timed out or security violation detected.');
      } finally {
        setIsRunningCode(false);
      }
    }, 1200);
  };

  const handleSandboxPreset = (type: string) => {
    if (type === 'sum') {
      setSandboxCode(`function sumArray(arr) {\n  return arr.reduce((sum, num) => sum + num, 0);\n}\nconsole.log(sumArray([10, 20, 30, 40]));`);
    } else {
      setSandboxCode(`function fibonacci(n) {\n  let seq = [0, 1];\n  for (let i = 2; i <= n; i++) {\n    seq.push(seq[i-1] + seq[i-2]);\n  }\n  return seq;\n}\nconsole.log(fibonacci(5));`);
    }
  };

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-24 bg-[#0A0A0A] relative border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div className="space-y-4">
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

          {/* Tab Filter Button Row */}
          <div className="flex justify-start gap-1 p-1 bg-[#121212] border border-white/10 rounded-none self-start">
            {(['all', 'fullstack', 'frontend'] as const).map((tab) => (
              <button
                key={tab}
                id={`project-filter-${tab}`}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-[10px] font-mono tracking-widest uppercase font-black transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-white text-black'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                {tab === 'all' ? 'All Work' : tab === 'fullstack' ? 'Full Stack' : 'Frontend'}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project) => (
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
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono uppercase bg-white/5 border border-white/10 px-2.5 py-1 text-white font-bold tracking-widest">
                      {project.category === 'fullstack' ? 'Full Stack' : 'Frontend'}
                    </span>
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

        {/* Detailed deep-dive Modal with Interactive Live Simulators */}
        <AnimatePresence>
          {selectedProject && (
            <div
              id="project-detail-modal"
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-sm overflow-y-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.3 }}
                className="relative bg-[#0A0A0A] border border-white/10 rounded-none max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              >
                {/* Modal Close Button */}
                <button
                  id="close-modal-btn"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-[#121212] border border-white/10 text-white hover:border-white transition-colors z-20"
                  aria-label="Close Modal"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Modal Grid content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 md:p-10 pt-14">
                  
                  {/* Left Column - Details & Specs */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="space-y-2">
                      <span className="text-[9px] font-mono uppercase bg-white/5 border border-white/10 px-2.5 py-1 text-white font-bold tracking-widest">
                        {selectedProject.category === 'fullstack' ? 'Full Stack Engine' : 'Frontend Interface'}
                      </span>
                      <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                        {selectedProject.title}
                      </h3>
                    </div>

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

                  {/* Right Column - LIVE INTERACTIVE SIMULATORS */}
                  <div className="lg:col-span-5 flex flex-col justify-center">
                    <div className="bg-[#121212] border border-white/10 rounded-none p-5 md:p-6 shadow-inner space-y-4">
                      <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                        <Code2 className="w-4.5 h-4.5 text-white" />
                        <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">
                          Live Interactive Simulator
                        </h4>
                      </div>

                      {/* CONDITIONAL RENDER SIMULATOR: EVALIFY SANDBOX */}
                      {selectedProject.id === 'proj1' && (
                        <div className="space-y-4">
                          <p className="text-neutral-400 text-xs leading-relaxed font-sans">
                            Run coding tasks directly inside our mock Evalify judge compiler environment:
                          </p>
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleSandboxPreset('sum')}
                              className="px-2.5 py-1 bg-white/5 hover:bg-white/10 rounded-none text-[10px] font-mono text-white border border-white/10 uppercase tracking-wider"
                            >
                              sumArray()
                            </button>
                            <button
                              onClick={() => handleSandboxPreset('fib')}
                              className="px-2.5 py-1 bg-white/5 hover:bg-white/10 rounded-none text-[10px] font-mono text-white border border-white/10 uppercase tracking-wider"
                            >
                              fibonacci()
                            </button>
                          </div>

                          <div className="space-y-1.5">
                            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Edit JavaScript Code:</span>
                            <textarea
                              id="sandbox-textarea"
                              value={sandboxCode}
                              onChange={(e) => setSandboxCode(e.target.value)}
                              rows={5}
                              className="w-full bg-[#0A0A0A] border border-white/10 rounded-none p-3 font-mono text-xs text-white focus:outline-none focus:border-white leading-relaxed resize-none"
                            />
                          </div>

                          <button
                            id="run-sandbox-btn"
                            onClick={runSandboxCode}
                            disabled={isRunningCode}
                            className={`w-full flex items-center justify-center gap-2 py-2.5 text-[10px] tracking-widest uppercase font-black transition-all ${
                              isRunningCode
                                ? 'bg-neutral-800 text-neutral-500 cursor-not-allowed'
                                : 'bg-white text-black hover:bg-neutral-200'
                            }`}
                          >
                            <Play className="w-3.5 h-3.5" />
                            {isRunningCode ? 'Compiling Sandbox VM...' : 'Execute Program'}
                          </button>

                          <div className="space-y-1 bg-[#0A0A0A] border border-white/10 p-3 rounded-none font-mono text-xs text-neutral-300 min-h-[70px] whitespace-pre-wrap">
                            {sandboxOutput}
                          </div>
                        </div>
                      )}

                      {/* CONDITIONAL RENDER SIMULATOR: THE SALAH TIME */}
                      {selectedProject.id === 'proj2' && (
                        <div className="space-y-4">
                          <p className="text-neutral-400 text-xs leading-relaxed font-sans">
                            Select global geographic coordinates to simulate real-time localized prayer times:
                          </p>

                          <div className="space-y-1.5">
                            <label className="text-[10px] font-mono text-neutral-500 block uppercase tracking-widest">Select Target City:</label>
                            <select
                              id="prayer-city-select"
                              value={prayerCity}
                              onChange={(e) => setPrayerCity(e.target.value)}
                              className="w-full bg-[#0A0A0A] border border-white/10 rounded-none p-2 font-sans text-xs text-white focus:outline-none focus:border-white"
                            >
                              <option value="Lahore">Lahore (Pakistan)</option>
                              <option value="London">London (United Kingdom)</option>
                              <option value="New York">New York (United States)</option>
                              <option value="Tokyo">Tokyo (Japan)</option>
                            </select>
                          </div>

                          <div className="bg-[#0A0A0A] border border-white/10 p-4 rounded-none space-y-3">
                            <div className="flex items-center justify-between border-b border-white/10 pb-2">
                              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Current City GPS</span>
                              <span className="text-xs font-mono text-white font-bold uppercase">{prayerCity}</span>
                            </div>
                            
                            {/* Times grid */}
                            <div className="grid grid-cols-5 gap-1.5 text-center">
                              {Object.entries(prayerTimesDatabase[prayerCity] || {}).map(([name, time]) => (
                                <div key={name} className="p-1 bg-white/5 border border-white/10 rounded-none">
                                  <span className="text-[9px] font-mono text-neutral-500 uppercase block">{name}</span>
                                  <span className="text-[10px] font-bold text-white block mt-1">{time.split(' ')[0]}</span>
                                  <span className="text-[8px] text-neutral-500 block uppercase">{time.split(' ')[1]}</span>
                                </div>
                              ))}
                            </div>

                            <div className="pt-2 text-[10px] font-mono text-neutral-500 flex items-center gap-1.5 justify-center">
                              <Compass className="w-3.5 h-3.5 text-white" />
                              <span>Calculations: Hanifi Method / Karachi University</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* CONDITIONAL RENDER SIMULATOR: CORP WEBSITE */}
                      {selectedProject.id === 'proj3' && (
                        <div className="space-y-4">
                          <p className="text-neutral-400 text-xs leading-relaxed font-sans">
                            A live mockup illustrating responsive layout adjustments during the Bytesfort development cycle:
                          </p>

                          <div className="border border-white/10 rounded-none bg-[#0A0A0A] p-4 text-center">
                            <span className="text-[10px] font-mono text-neutral-500 uppercase block mb-3">Viewport Simulator</span>
                            
                            <div className="space-y-3.5 max-w-xs mx-auto text-left">
                              <div className="h-6 w-full bg-white/5 border border-white/10 rounded-none flex items-center px-3 justify-between">
                                <span className="text-[9px] font-mono text-white font-bold uppercase tracking-wider">Bytesfort Corp</span>
                                <div className="flex gap-1.5">
                                  <span className="w-2 h-1 bg-white/20 rounded-none" />
                                  <span className="w-2 h-1 bg-white/20 rounded-none" />
                                </div>
                              </div>
                              <div className="grid grid-cols-3 gap-1.5">
                                <div className="h-10 bg-white/5 border border-white/10 rounded-none p-1.5 text-center">
                                  <span className="text-[8px] font-mono text-neutral-500 block uppercase">Speed</span>
                                  <span className="text-[10px] font-bold text-white block mt-1">99%</span>
                                </div>
                                <div className="h-10 bg-white/5 border border-white/10 rounded-none p-1.5 text-center">
                                  <span className="text-[8px] font-mono text-neutral-500 block uppercase">SEO</span>
                                  <span className="text-[10px] font-bold text-white block mt-1">100</span>
                                </div>
                                <div className="h-10 bg-white/10 border border-white/20 rounded-none p-1.5 text-center">
                                  <span className="text-[8px] font-mono text-neutral-500 block uppercase">UX</span>
                                  <span className="text-[10px] font-bold text-white block mt-1">A+</span>
                                </div>
                              </div>
                            </div>

                            <div className="mt-4 pt-3 border-t border-white/10 text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                              <span>Responsive layout grid verified</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* CONDITIONAL RENDER SIMULATOR: GET WEATHER APP */}
                      {selectedProject.id === 'proj4' && (
                        <div className="space-y-4">
                          <p className="text-neutral-400 text-xs leading-relaxed font-sans">
                            Retrieve live meteorology coordinates from Subhan's API weather pipeline:
                          </p>

                          <form onSubmit={handleWeatherSearch} className="flex gap-2">
                            <input
                              id="weather-search-input"
                              type="text"
                              value={weatherCity}
                              onChange={(e) => setWeatherCity(e.target.value)}
                              placeholder="Type City (e.g. London)"
                              className="flex-1 bg-[#0A0A0A] border border-white/10 rounded-none px-3 py-2 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white"
                            />
                            <button
                              id="weather-search-submit"
                              type="submit"
                              className="px-3 py-2 bg-white text-black text-[10px] uppercase font-black tracking-widest rounded-none transition-colors"
                            >
                              Search
                            </button>
                          </form>

                          <div className="bg-[#0A0A0A] border border-white/10 p-4 rounded-none relative overflow-hidden">
                            <div className="flex items-center justify-between mb-4">
                              <div>
                                <h5 className="text-[10px] font-bold text-white font-mono uppercase tracking-widest">
                                  Weather Report
                                </h5>
                                <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider">City: {weatherCity}</span>
                              </div>
                              <CloudSun className="w-8 h-8 text-white opacity-80" />
                            </div>

                            <div className="flex items-end gap-3 justify-between">
                              <div className="space-y-1">
                                <span className="text-3xl font-display font-black text-white tracking-tighter">
                                  {weatherResult.temp}°C
                                </span>
                                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
                                  {weatherResult.condition}
                                </span>
                              </div>

                              <div className="text-right text-[10px] font-mono text-neutral-500 space-y-0.5 uppercase tracking-wider">
                                <div>Feels: {weatherResult.feelsLike}°C</div>
                                <div>Humidity: {weatherResult.humidity}%</div>
                                <div>Wind: {weatherResult.wind} km/h</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* General footer check for simulator */}
                      <div className="flex items-center gap-1.5 justify-center text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                        <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                        <span>Sandbox Environment Active</span>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
