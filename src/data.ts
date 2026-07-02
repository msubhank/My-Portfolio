import { Project, Experience, Skill, Education } from './types';

export const personalInfo = {
  name: 'Muhammad Subhan Kashif',
  title: 'Full-Stack Developer & Software Engineer',
  subtitle: 'BS Software Engineering Graduate (2022 - 2026)',
  email: 'msubhank123@gmail.com',
  phone: '+923018289892',
  linkedin: 'https://linkedin.com/in/msubhank',
  github: 'https://github.com/msubhank',
  location: 'Lahore, Pakistan',
  summary: 'Software Engineering graduate with hands-on experience in full-stack web development. Proficient in JavaScript, React, Next.js, Node.js, and SQL databases. Demonstrated ability to deliver responsive & user-friendly web applications through internship experience and personal projects.',
  stats: [
    { label: 'Years of Experience', value: '1+' },
    { label: 'Completed Projects', value: '8+' },
    { label: 'Internships Done', value: '1' },
    { label: 'Core Tech Stack', value: '12+' }
  ]
};

export const experiences: Experience[] = [
  {
    id: 'exp1',
    role: 'Frontend Development Intern',
    company: 'BytesFort',
    location: 'Lahore, Pakistan (Hybrid)',
    period: 'Summer Internship',
    type: 'Internship',
    details: [
      'Developed responsive web pages focusing on UI/UX best practices, ensuring cross-browser compatibility and optimal performance.',
      'Collaborated with designers to translate high-fidelity mockups into functional, visually appealing interfaces.',
      'Contributed to improving front-end code quality, component reusability, and repository consistency.'
    ],
    technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'Git', 'GitHub']
  }
];

export const projects: Project[] = [
  {
    id: 'proj1',
    title: 'Evalify',
    description: 'A robust full-stack coding assessment platform featuring a Monaco Editor IDE and live judge integration.',
    longDescription: 'Evalify is a complete Evaluation Driven Learning & Assessment Platform. It enables teachers to create real-time coding challenges and assessments, while students can write, compile, and execute code within the browser. It features standard role-based access control, secure JWT-based authorization, and real-time execution safety.',
    details: [
      'Built a full-stack secure coding assessment platform with role-based access (Student, Teacher, Admin), JWT authentication, and a Monaco Editor-based in-browser IDE powered by the Judge0 API.',
      'Designed RESTful APIs with Node.js/Express.js and PostgreSQL/Supabase for managing submissions, grades, attendance logs, and session data.',
      'Optimized compilation response times and handled sandbox execution errors elegantly in the UI.'
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Supabase', 'Judge0 API', 'Monaco Editor', 'Tailwind CSS'],
    category: 'fullstack',
    codeUrl: 'https://github.com/msubhank/Evalify',
    featured: true
  },
  {
    id: 'proj2',
    title: 'The Salah Time',
    description: 'An Islamic Prayer Times Web Application delivering location-accurate prayer times worldwide.',
    longDescription: 'The Salah Time is a modern web application designed to help Muslims easily track daily prayers. It detects the user location to fetch highly accurate geographical coordinates, calculates prayer timings using international calculation models, and provides clean countdowns to the next prayer.',
    details: [
      'Developed the frontend of a prayer times application that provides accurate Salah schedules based on user location, integrating external APIs for real-time prayer time data across global cities.',
      'Implemented local caching strategies to store daily timings, reducing API request overhead and enabling offline-friendly viewings.',
      'Designed a minimal, distraction-free aesthetic with automatic theme transitioning corresponding to the time of day.'
    ],
    technologies: ['Next.js', 'REST APIs', 'Tailwind CSS', 'Geolocation API', 'Local Storage'],
    category: 'frontend',
    liveUrl: 'https://thesalahtime.com/',
    featured: true
  },
  {
    id: 'proj3',
    title: 'Bytesfort – Corporate Website',
    description: 'The official professional corporate website for Bytesfort, showcasing services and portfolios.',
    longDescription: 'Developed during the internship at Bytesfort, this project represents the company\'s online identity. It provides smooth scrolling interactions, custom contact pipelines, services lists, and responsive design systems that represent the brand beautifully.',
    details: [
      'Built and maintained the official company website for Bytesfort during the internship, implementing responsive layouts and interactive UI components.',
      'Ensured full cross-browser compatibility and optimized asset delivery for superior Core Web Vitals scores.',
      'Integrated contact forms with rich submission state feedback.'
    ],
    technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'Framer Motion'],
    category: 'frontend',
    liveUrl: 'https://bytesfort.com/',
    featured: true
  },
  {
    id: 'proj4',
    title: 'Get Weather App',
    description: 'A fast, real-time meteorological weather lookup application supporting worldwide search.',
    longDescription: 'A responsive weather dashboard allowing users to query temperatures, wind speeds, humidity index, and meteorological forecasts for cities around the globe using robust third-party APIs.',
    details: [
      'Built a weather application that fetches real-time weather data for cities worldwide using a public REST API.',
      'Implemented custom visual weather state indicators (sun, rain, snow, clouds) dynamically responding to query results.',
      'Optimized search input with debouncing to prevent excessive API calling and rate limit triggers.'
    ],
    technologies: ['JavaScript', 'REST API', 'Tailwind CSS', 'HTML5', 'CSS3'],
    category: 'frontend',
    codeUrl: 'https://github.com/msubhank/Get-Weather-App',
    featured: false
  }
];

export const skills: Skill[] = [
  // Languages
  { name: 'JavaScript', category: 'Languages', level: 90, iconName: 'Code2' },
  { name: 'HTML5 & CSS3', category: 'Languages', level: 95, iconName: 'FileHtml' },
  { name: 'SQL', category: 'Languages', level: 85, iconName: 'Database' },
  { name: 'Python', category: 'Languages', level: 75, iconName: 'Terminal' },
  { name: 'C/C++', category: 'Languages', level: 80, iconName: 'Cpu' },
  
  // Frameworks & Libraries
  { name: 'React', category: 'Frameworks & Libraries', level: 90, iconName: 'Atom' },
  { name: 'Next.js', category: 'Frameworks & Libraries', level: 85, iconName: 'Layers' },
  { name: 'Node.js', category: 'Frameworks & Libraries', level: 85, iconName: 'Server' },
  { name: 'Express.js', category: 'Frameworks & Libraries', level: 85, iconName: 'Network' },
  { name: 'Tailwind CSS', category: 'Frameworks & Libraries', level: 95, iconName: 'Palette' },
  
  // Databases
  { name: 'PostgreSQL', category: 'Databases', level: 85, iconName: 'DatabaseBackup' },
  { name: 'Supabase', category: 'Databases', level: 80, iconName: 'DatabaseIcon' },
  { name: 'MySQL', category: 'Databases', level: 85, iconName: 'HardDrive' },
  { name: 'SQLite', category: 'Databases', level: 75, iconName: 'FolderClosed' },
  
  // Tools
  { name: 'Git & GitHub', category: 'Tools', level: 90, iconName: 'GitBranch' },
  { name: 'VS Code & Cursor', category: 'Tools', level: 95, iconName: 'FileCode' },
  { name: 'pgAdmin4 & Workbench', category: 'Tools', level: 80, iconName: 'Binary' },
  { name: 'Vercel', category: 'Tools', level: 85, iconName: 'ExternalLink' },
  { name: 'Ubuntu (Linux)', category: 'Tools', level: 80, iconName: 'TerminalSquare' }
];

export const education: Education[] = [
  {
    institution: 'Lahore Garrison University',
    degree: 'Bachelor of Science in Software Engineering',
    period: '2022 – 2026',
    details: [
      'Graduated with a focus on core software engineering principles, architectural patterns, data structures, and database management.',
      'Active participant in technical workshops, software speed-programming hackathons, and web application design events.',
      'Successfully completed senior design project integrating real-time sandbox compiler with role-based dashboard architectures.'
    ]
  }
];

export const certifications = [
  {
    title: 'Certificate of Internship (Summer Internship)',
    issuer: 'BytesFort',
    date: 'Summer 2025',
    link: '#',
    description: 'Awarded for excellent contribution and dedication to front-end development, UX refinement, and professional project delivery during the intern tenure.'
  }
];
