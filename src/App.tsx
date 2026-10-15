import { useState, useEffect } from 'react';
import { 
  Mail, Code2, Database, Layout, Terminal, Server, 
  ChevronRight, Moon, Sun, Download, Send, 
  Cpu, ArrowUpRight, CheckCircle2, Globe, Flame
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

import drImage from './assets/DR.png';
import smtImage from './assets/SMT.png';
import pyDsaImage from './assets/pyDSA.png';
import devproofImage from './assets/devproof.png';
import resumeParserImage from './assets/resumeParser.png';

interface Project {
  title: string;
  category: 'web' | 'ai' | 'systems';
  description: string;
  image?: string;
  tags: string[];
  github: string;
  live: string | null;
  badge: string;
  accent: string;
  icon?: any;
  highlight?: string;
  metrics?: string;
}

const allProjects: Project[] = [
  {
    title: "DSA Visualizer & Python Playground",
    category: "web",
    description: "A full-stack interactive educational environment featuring structured algorithm roadmaps, real-time dynamic visualizer, and an integrated in-browser Python playground compiler.",
    image: pyDsaImage,
    tags: ["React", "TypeScript", "Algorithms", "Python Playground", "Vite"],
    github: "https://github.com/srivigneshwaran/pythonAndDsa",
    live: "https://masterpythonanddsa.vercel.app/",
    badge: "Interactive Educational Platform",
    accent: "from-cyan-500 to-blue-600",
    highlight: "Live Dynamic Animations & Web Playground",
    metrics: "20+ Visualized Algorithms"
  },
  {
    title: "DevProof AI — Autonomous Verification Agent",
    category: "ai",
    description: "Developer workflow assistant orchestrating bug triage: ingests error traces, executes root-cause isolation, formulates a deterministic patch, and generates verification proofs before pull requests.",
    image: devproofImage,
    tags: ["Python", "FastAPI", "AI Workflow", "Next.js", "LLM Pipelines"],
    github: "https://github.com/srivigneshwaran/devproof-ai",
    live: "https://devproof-ai-kappa.vercel.app",
    badge: "AI Developer Tooling",
    accent: "from-purple-500 to-pink-600",
    icon: Terminal,
    highlight: "Automated Root Cause to Patch Verification",
    metrics: "Instant LLM Debug Loop"
  },
  {
    title: "NLP Resume Intelligence & Parser",
    category: "ai",
    description: "Intelligent document parsing application extracting multi-format candidate resumes into clean structured JSON schemas, analyzing entity tokens, competencies, and tenure timelines.",
    image: resumeParserImage,
    tags: ["TypeScript", "NLP", "React", "Entity Extraction", "Tailwind CSS"],
    github: "https://github.com/srivigneshwaran/resume_parser",
    live: "https://resume-parser-seven-khaki.vercel.app",
    badge: "NLP & Entity Extraction",
    accent: "from-teal-500 to-cyan-600",
    icon: Layout,
    highlight: "Structured Extraction from PDF/DOCX",
    metrics: "Automated Candidate Schema"
  },
  {
    title: "Sri Murugan Tapes Corporate Web Application",
    category: "web",
    description: "Modern production-grade corporate website engineered for an industrial manufacturing business. Employs micro-animations, fast component hydration, and mobile-first responsive architecture.",
    image: smtImage,
    tags: ["React", "Vite", "Tailwind CSS", "Design System", "Framer Motion"],
    github: "https://github.com/srivigneshwaran/sriMuruganTapes-portfolio",
    live: "https://srimurugantapes.vercel.app/",
    badge: "Enterprise Web App",
    accent: "from-blue-500 to-indigo-600",
    highlight: "Custom Component Design System",
    metrics: "99+ Mobile Lighthouse Score"
  },
  {
    title: "Diabetic Retinopathy Detection",
    category: "ai",
    description: "Deep learning automated diagnostic screening system evaluating retinal fundus imagery. Uses a customized deep ResNet architecture to classify severity levels into five clinical stages.",
    image: drImage,
    tags: ["Deep Learning", "ResNet", "Computer Vision", "PyTorch", "Python"],
    github: "https://github.com/srivigneshwaran/Diabetic_Retinopathy_using_RESNET",
    live: null,
    badge: "Medical AI Diagnostics",
    accent: "from-emerald-500 to-teal-600",
    highlight: "Multi-stage Clinical Image Classification",
    metrics: "High Precision Fundus Analysis"
  },
  {
    title: "Healthcare Provider Fraud Detection Pipeline",
    category: "ai",
    description: "End-to-end unsupervised and supervised ML pipeline detecting fraudulent billing patterns in healthcare insurance claims using Isolation Forest and XGBoost with SHAP explainability.",
    tags: ["Python", "XGBoost", "Isolation Forest", "SHAP", "Scikit-Learn"],
    github: "https://github.com/srivigneshwaran/healthCare_fraud_detection",
    live: null,
    badge: "Healthcare ML Pipeline",
    accent: "from-rose-500 to-orange-600",
    icon: Database,
    highlight: "Audit-Ready SHAP Feature Attribution",
    metrics: "High Recall Anomaly Identification"
  },
  {
    title: "Distributed Task Manager API & Worker Broker",
    category: "systems",
    description: "High-throughput asynchronous task orchestrator powered by Django REST Framework, Celery background workers, Redis cache queues, and containerized Docker deployments.",
    tags: ["Django REST", "Celery", "Redis", "Docker", "PostgreSQL"],
    github: "https://github.com/srivigneshwaran/TaskMangerPY",
    live: null,
    badge: "Distributed Systems & Queues",
    accent: "from-amber-500 to-yellow-600",
    icon: Server,
    highlight: "Non-blocking Asynchronous Queue Processing",
    metrics: "Celery + Redis Dockerized"
  },
  {
    title: "Full-Stack Online Shopping System",
    category: "web",
    description: "Multi-vendor e-commerce application integrating React frontend with robust Django REST Framework endpoints, dynamic shopping carts, order status lifecycle, and relational database modeling.",
    tags: ["React", "Django REST", "PostgreSQL", "Tailwind CSS", "JWT Auth"],
    github: "https://github.com/srivigneshwaran/Online_Shopping_System",
    live: null,
    badge: "Full-Stack E-Commerce",
    accent: "from-blue-600 to-cyan-500",
    icon: Database,
    highlight: "Relational Modeling with Django & PostgreSQL",
    metrics: "Secure RESTful Architecture"
  },
  {
    title: "Neural Style Transfer Web Application",
    category: "ai",
    description: "Interactive neural art synthesiser utilizing a pre-trained VGG-19 convolutional network to separate and recombine content and style representations in real time with CUDA GPU acceleration.",
    tags: ["PyTorch", "Streamlit", "VGG-19", "CUDA", "Computer Vision"],
    github: "https://github.com/srivigneshwaran/Nueral_style_transfer",
    live: null,
    badge: "Computer Vision & Deep Learning",
    accent: "from-violet-500 to-purple-600",
    icon: Code2,
    highlight: "Deep VGG-19 Gram Matrix Feature Blending",
    metrics: "Real-time CUDA Acceleration"
  }
];

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState<'all' | 'web' | 'ai' | 'systems'>('all');
  const [activeSection, setActiveSection] = useState('home');

  // Dark mode init
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return next;
    });
  };

  // Scroll spy
  useEffect(() => {
    const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001
  });

  const filteredProjects = activeTab === 'all' 
    ? allProjects 
    : allProjects.filter(p => p.category === activeTab);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-[#08090d] text-[#e2e8f0]' : 'bg-[#f8fafc] text-[#0f172a]'} font-sans selection:bg-cyan-400 selection:text-black transition-colors duration-300 relative`}>
      
      {/* Top Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Floating Modern Header */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-[#08090d]/80 dark:bg-[#08090d]/85 border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <button 
            onClick={() => scrollTo('home')}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-syne font-black text-black text-lg shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              S
            </div>
            <div>
              <span className="font-syne font-bold text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors block leading-tight">
                SRIVIGNESHWARAN
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                Software & AI Developer
              </span>
            </div>
          </button>

          {/* Navigation Pill */}
          <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            {[
              { id: 'home', label: 'Index' },
              { id: 'about', label: 'About' },
              { id: 'experience', label: 'Experience' },
              { id: 'projects', label: 'Projects' },
              { id: 'skills', label: 'Stack' },
              { id: 'education', label: 'Education' },
              { id: 'contact', label: 'Contact' },
            ].map(item => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                    isActive 
                      ? 'text-white' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBadge"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/40"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Group */}
          <div className="flex items-center gap-3">
            <a 
              href="https://drive.google.com/file/d/1YpLOe402JcyR5mwES-Jie9k8DxgW_Kk4/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all hover:border-cyan-400/50"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume</span>
            </a>

            <button
              onClick={() => scrollTo('contact')}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-cyan-400 hover:bg-cyan-300 text-black shadow-lg shadow-cyan-400/20 transition-all transform hover:scale-105 cursor-pointer"
            >
              Let's Talk
            </button>

            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-colors"
              title="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-cyan-400" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 pt-20">

        {/* ======================================================== */}
        {/* HERO SECTION: Editorial Brutalist & Giant Impact Typography */}
        {/* ======================================================== */}
        <section id="home" className="relative min-h-[92vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 border-b border-white/5 overflow-hidden">
          {/* Ambient Lighting Background */}
          <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan-500/15 via-blue-600/15 to-purple-600/10 blur-[130px] rounded-full pointer-events-none"></div>

          <div className="max-w-7xl mx-auto w-full py-16 sm:py-24 space-y-10">
            
            {/* Live Availability Badge & Location */}
            {/* Live Availability Badge & Location */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center gap-3"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>AVAILABLE FOR FULL-TIME ROLES</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>IMMEDIATE JOINER</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono">
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span>TIRUPUR • OPEN TO REMOTE / HYBRID</span>
              </div>
            </motion.div>

            {/* Giant Typographic Statement */}
            <div className="space-y-1 sm:space-y-2">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="font-mono text-xs sm:text-sm tracking-widest text-cyan-400 uppercase flex items-center gap-3"
              >
                <span>[01 / CREATIVE ENGINEER]</span>
                <span className="h-px w-16 bg-cyan-400/40 inline-block"></span>
              </motion.div>

              {/* Name - Scaled comfortably so it never gets cut, while preserving Software Developer sizing */}
              <motion.h1 
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-syne font-black tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem] xl:text-[4.2rem] leading-[1.05] text-white"
              >
                SRIVIGNESHWARAN
              </motion.h1>

              <motion.div 
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-syne font-black tracking-tighter text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-stroke uppercase"
              >
                SOFTWARE DEVELOPER
              </motion.div>
            </div>

            {/* Impact Tagline & Metrics Banner */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="grid lg:grid-cols-12 gap-8 pt-4 items-end"
            >
              <p className="lg:col-span-7 text-lg sm:text-xl text-slate-300 font-normal leading-relaxed">
                Specialized in architecting <span className="text-white font-semibold">high-concurrency web systems</span>, high-performance distributed backends, and applied <span className="text-cyan-400 font-semibold">Artificial Intelligence models</span> that reliably scale under production pressure.
              </p>

              {/* Quick Key Numbers Bar */}
              <div className="lg:col-span-5 grid grid-cols-3 gap-3">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-syne font-black text-cyan-400">500K+</div>
                  <div className="text-[11px] font-mono text-slate-400 mt-0.5 uppercase tracking-wide">Daily Req</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-syne font-black text-blue-400">1M+</div>
                  <div className="text-[11px] font-mono text-slate-400 mt-0.5 uppercase tracking-wide">Batch Records</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-syne font-black text-emerald-400">99.9%</div>
                  <div className="text-[11px] font-mono text-slate-400 mt-0.5 uppercase tracking-wide">Uptime</div>
                </div>
              </div>
            </motion.div>

            {/* Social Link Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <button 
                onClick={() => scrollTo('projects')}
                className="px-6 py-3.5 rounded-full bg-white text-black font-syne font-extrabold text-sm flex items-center gap-2 hover:bg-cyan-400 transition-all transform hover:scale-105 shadow-xl shadow-cyan-400/10 cursor-pointer"
              >
                <span>EXPLORE WORK</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <a 
                href="https://github.com/srivigneshwaran" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs flex items-center gap-2.5 transition-all hover:border-cyan-400/40"
              >
                <FaGithub className="w-4 h-4 text-cyan-400" />
                <span>GITHUB / SRIVIGNESHWARAN</span>
              </a>

              <a 
                href="https://www.linkedin.com/in/srivigneshwaran-i-115163229" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs flex items-center gap-2.5 transition-all hover:border-blue-400/40"
              >
                <FaLinkedin className="w-4 h-4 text-blue-400" />
                <span>LINKEDIN</span>
              </a>
            </motion.div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* ABOUT SECTION: Dedicated Story & Core Philosophy */}
        {/* ======================================================== */}
        <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-white/5 relative bg-[#08090d]/60">
          <div className="max-w-7xl mx-auto">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center gap-3 font-mono text-xs text-cyan-400 uppercase tracking-widest mb-8"
            >
              <span>[02 / STORY]</span>
              <span className="h-px w-12 bg-cyan-400/40"></span>
              <span className="text-slate-300 font-medium">BIOGRAPHY &amp; BACKGROUND</span>
            </motion.div>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              
              {/* Left Column: Heading */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-5 space-y-6"
              >
                <h2 className="font-syne font-black text-2xl sm:text-3xl lg:text-[2.35rem] text-white tracking-tight leading-[1.2]">
                  ENGINEERING AT THE INTERSECTION OF <span className="text-cyan-400">SCALE</span> AND <span className="text-blue-400">INTELLIGENCE</span>.
                </h2>
                
                <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 space-y-3 shadow-lg">
                  <div className="flex items-center gap-3 text-cyan-400 font-mono text-xs font-semibold uppercase">
                    <Flame className="w-4 h-4 text-cyan-400" />
                    <span>Current Focus</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Building fault-tolerant microservices, resilient event pipelines (Redis/Celery), and enterprise APIs supporting 500K+ requests every single day.
                  </p>
                </div>
              </motion.div>

              {/* Right Column: Detailed Bio & Highlights */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed"
              >
                <p>
                  I'm a Software Developer with a background in <strong className="text-white font-semibold">Artificial Intelligence & Data Science</strong>. My career spans architecting cloud backends on AWS, building high-throughput data processing workflows, and crafting interactive frontends that delight users.
                </p>
                <p>
                  At <strong className="text-white font-semibold">Tenext Technologies</strong>, I serve as a primary backend engineer for Friendbuy USA, a premier referral & loyalty SaaS platform. Here, I've had the thrill of tuning API response times by 30%, processing millions of customer rewards asynchronously, and maintaining 99.9% uptime on containerized AWS ECS clusters.
                </p>
                <p>
                  When I'm not tuning query latency or configuring Celery workers, I explore machine learning architectures, develop interactive educational web tools like DSA Visualizers, and experiment with next-gen autonomous agent workflows.
                </p>

                {/* Mini Metric Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
                  <div>
                    <span className="block font-mono text-xs text-slate-400 uppercase">Degree</span>
                    <span className="font-syne font-bold text-white text-base">B.Tech in AI & DS</span>
                  </div>
                  <div>
                    <span className="block font-mono text-xs text-slate-400 uppercase">Production Work</span>
                    <span className="font-syne font-bold text-cyan-400 text-base">500K+ Req / Day</span>
                  </div>
                  <div>
                    <span className="block font-mono text-xs text-slate-400 uppercase">Location</span>
                    <span className="font-syne font-bold text-white text-base">India • Open Remote</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* EXPERIENCE SECTION: Career Journey & Concrete Production Impact */}
        {/* ======================================================== */}
        <section id="experience" className="py-28 px-4 sm:px-6 lg:px-8 border-b border-white/5 relative bg-white/[0.01]">
          <div className="max-w-7xl mx-auto space-y-12">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 font-mono text-xs text-cyan-400 uppercase tracking-widest mb-3">
                  <span>[03 / CAREER]</span>
                  <span className="h-px w-12 bg-cyan-400/30"></span>
                  <span>PRODUCTION TRACK RECORD</span>
                </div>
                <h2 className="font-syne font-black text-4xl sm:text-5xl text-white tracking-tight">
                  WORK EXPERIENCE
                </h2>
              </div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                Jul 2025 — Present
              </span>
            </div>

            {/* Experience Card */}
            <motion.div 
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 p-8 sm:p-12 space-y-8 relative overflow-hidden group hover:border-cyan-400/40 transition-all"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all"></div>

              {/* Title & Organization Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    <span>FULL-TIME • CURRENT ROLE</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-syne font-black text-white">
                    Software Developer
                  </h3>
                  <div className="text-base text-slate-300 font-medium mt-1">
                    Tenext Technologies <span className="text-cyan-400">•</span> Coimbatore, India
                  </div>
                </div>

                <div className="lg:text-right">
                  <span className="inline-block px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-300 uppercase">
                    Client: Friendbuy (USA) — Referral & Loyalty SaaS
                  </span>
                </div>
              </div>

              {/* Impact Bullet Points */}
              <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-300 leading-relaxed">
                
                <div className="p-6 rounded-2xl bg-black/40 border border-white/5 space-y-2 hover:border-cyan-500/30 transition-all">
                  <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>Performance & Throughput</span>
                  </div>
                  <p>
                    Architected and optimized backend microservices using <strong className="text-white">Node.js</strong> and <strong className="text-white">Express.js</strong>, boosting overall API response latency by <strong className="text-cyan-400">30%</strong> while reliably serving <strong>500K+ daily requests</strong>.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-black/40 border border-white/5 space-y-2 hover:border-cyan-500/30 transition-all">
                  <div className="flex items-center gap-2 text-blue-400 font-mono text-xs font-bold uppercase">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    <span>Asynchronous Bulk Processing</span>
                  </div>
                  <p>
                    Engineered an asynchronous CSV reward ingestion pipeline capable of parsing and updating <strong className="text-white">1M+ records</strong> directly in <strong className="text-white">AWS DynamoDB</strong>, dropping batch processing runtime by <strong className="text-blue-400">40%</strong>.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-black/40 border border-white/5 space-y-2 hover:border-cyan-500/30 transition-all">
                  <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-bold uppercase">
                    <CheckCircle2 className="w-4 h-4 text-purple-400" />
                    <span>Cloud Architecture & Uptime</span>
                  </div>
                  <p>
                    Implemented Role-Based Access Control (RBAC) across 3 distinct tiers, deploying autoscale workloads on <strong className="text-white">AWS ECS</strong> to preserve a strict <strong className="text-purple-400">99.9% uptime</strong> through 3x traffic surges.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-black/40 border border-white/5 space-y-2 hover:border-cyan-500/30 transition-all">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Observability & Engagement</span>
                  </div>
                  <p>
                    Integrated Elasticsearch, Kibana, S3, and CloudWatch to slash incident diagnosis time by <strong className="text-emerald-400">35%</strong>. Shipped campaign lifecycle notifications driving a <strong className="text-white">25% increase</strong> in merchant engagement.
                  </p>
                </div>

              </div>
            </motion.div>

          </div>
        </section>

        {/* ======================================================== */}
        {/* PROJECTS SECTION: Categorized Multi-Section Showcase */}
        {/* ======================================================== */}
        <section id="projects" className="py-28 px-4 sm:px-6 lg:px-8 border-b border-white/5 relative">
          <div className="max-w-7xl mx-auto space-y-12">
            
            {/* Header + Tabs */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 font-mono text-xs text-cyan-400 uppercase tracking-widest mb-3">
                  <span>[04 / PORTFOLIO]</span>
                  <span className="h-px w-12 bg-cyan-400/30"></span>
                  <span>CURATED INVENTIONS</span>
                </div>
                <h2 className="font-syne font-black text-4xl sm:text-5xl text-white tracking-tight">
                  FEATURED WORK
                </h2>
              </div>

              {/* Filter Tabs: All, Web, AI, Systems */}
              <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                {[
                  { id: 'all', label: 'All Projects', count: allProjects.length },
                  { id: 'web', label: 'Full-Stack & Web', count: allProjects.filter(p => p.category === 'web').length },
                  { id: 'ai', label: 'AI & Machine Learning', count: allProjects.filter(p => p.category === 'ai').length },
                  { id: 'systems', label: 'Systems & Backend', count: allProjects.filter(p => p.category === 'systems').length },
                ].map(tab => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                        isActive
                          ? 'bg-cyan-400 text-black shadow-lg shadow-cyan-400/20'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span>{tab.label}</span>
                      <span className={`px-1.5 py-0.5 rounded-md text-[10px] ${isActive ? 'bg-black/20 text-black' : 'bg-white/10 text-slate-400'}`}>
                        {tab.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Projects Grid - Reduced card size by 10% for crisp density */}
            <motion.div 
              layout 
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence>
                {filteredProjects.map((project, idx) => (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    className="flex flex-col justify-between rounded-2xl bg-[#101218] border border-white/10 overflow-hidden hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group"
                  >
                    <div>
                      {/* Media Banner - Scaled down 10% from h-52 to h-44 */}
                      <div className="relative h-44 w-full overflow-hidden border-b border-white/10 bg-black/60">
                        {project.image ? (
                          <>
                            <img 
                              src={project.image} 
                              alt={project.title} 
                              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#101218] via-transparent to-transparent"></div>
                          </>
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center p-5 text-center bg-gradient-to-br from-[#121520] to-[#090b10] relative">
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 mb-2 group-hover:scale-110 transition-transform">
                              {project.icon ? <project.icon className="w-6 h-6" /> : <Code2 className="w-6 h-6" />}
                            </div>
                            <span className="font-mono text-[11px] text-cyan-300 uppercase tracking-wider">
                              {project.badge}
                            </span>
                          </div>
                        )}

                        {/* Top Category Tag */}
                        <div className="absolute top-2.5 left-2.5">
                          <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider bg-black/75 backdrop-blur-md text-white border border-white/10">
                            {project.category}
                          </span>
                        </div>

                        {/* Metrics or Highlight pill */}
                        {project.metrics && (
                          <div className="absolute top-2.5 right-2.5">
                            <span className="px-2 py-0.5 rounded-full text-[9px] font-mono bg-cyan-400/20 border border-cyan-400/30 text-cyan-300 backdrop-blur-md">
                              {project.metrics}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content Body - Compacted 10% */}
                      <div className="p-5 space-y-3">
                        <h3 className="text-lg font-syne font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                          {project.title}
                        </h3>

                        <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 pt-1">
                          {project.tags.map(tag => (
                            <span 
                              key={tag}
                              className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/5 text-slate-300 border border-white/5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="p-5 pt-0 flex items-center justify-between border-t border-white/5 mt-3">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium text-slate-300 hover:text-white transition-colors"
                      >
                        <FaGithub className="w-3.5 h-3.5 text-cyan-400" />
                        <span>SOURCE CODE</span>
                      </a>

                      {project.live && (
                        <a 
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-cyan-400 text-black hover:bg-cyan-300 transition-all shadow-md shadow-cyan-400/10"
                        >
                          <span>LIVE DEMO</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

          </div>
        </section>

        {/* ======================================================== */}
        {/* SKILLS / ARSENAL SECTION: Categorized Tech Matrix */}
        {/* ======================================================== */}
        <section id="skills" className="py-28 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto space-y-12">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 font-mono text-xs text-cyan-400 uppercase tracking-widest mb-3">
                  <span>[05 / ARSENAL]</span>
                  <span className="h-px w-12 bg-cyan-400/30"></span>
                  <span>CORE COMPETENCIES</span>
                </div>
                <h2 className="font-syne font-black text-4xl sm:text-5xl text-white tracking-tight">
                  TECH STACK MATRIX
                </h2>
              </div>
              <p className="text-slate-400 font-mono text-xs uppercase max-w-sm">
                A hardened engineering arsenal built for resilience, velocity, and scale.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              
              {/* Category 1: Languages & Core */}
              <div className="p-8 rounded-3xl bg-[#101218] border border-white/10 hover:border-cyan-400/40 transition-all space-y-6">
                <div className="flex items-center gap-3 text-cyan-400">
                  <div className="p-2.5 rounded-2xl bg-cyan-500/10 border border-cyan-400/20">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-syne font-bold text-xl text-white">Languages</h3>
                    <span className="font-mono text-xs text-slate-400">Foundational Syntax</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL'].map(skill => (
                    <span 
                      key={skill}
                      className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/5 space-y-3">
                  <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">Specializations</span>
                  <div className="flex flex-wrap gap-2">
                    {['Data Structures & Algorithms', 'Object-Oriented Design', 'Async Architecture'].map(item => (
                      <span key={item} className="px-3 py-1 rounded-lg bg-cyan-400/10 text-cyan-300 text-[11px] font-mono border border-cyan-400/20">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Category 2: Backend & Distributed */}
              <div className="p-8 rounded-3xl bg-[#101218] border border-white/10 hover:border-blue-400/40 transition-all space-y-6">
                <div className="flex items-center gap-3 text-blue-400">
                  <div className="p-2.5 rounded-2xl bg-blue-500/10 border border-blue-400/20">
                    <Server className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-syne font-bold text-xl text-white">Backend & Queues</h3>
                    <span className="font-mono text-xs text-slate-400">High-Concurrency</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express.js', 'Django REST', 'Celery', 'Redis', 'RESTful APIs', 'RBAC'].map(skill => (
                    <span 
                      key={skill}
                      className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/5 space-y-3">
                  <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">Databases & Storage</span>
                  <div className="flex flex-wrap gap-2">
                    {['PostgreSQL', 'DynamoDB', 'MongoDB', 'AWS S3'].map(item => (
                      <span key={item} className="px-3 py-1 rounded-lg bg-blue-400/10 text-blue-300 text-[11px] font-mono border border-blue-400/20">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Category 3: Cloud, AI & DevOps */}
              <div className="p-8 rounded-3xl bg-[#101218] border border-white/10 hover:border-purple-400/40 transition-all space-y-6">
                <div className="flex items-center gap-3 text-purple-400">
                  <div className="p-2.5 rounded-2xl bg-purple-500/10 border border-purple-400/20">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-syne font-bold text-xl text-white">Cloud & AI Systems</h3>
                    <span className="font-mono text-xs text-slate-400">Infra & Machine Learning</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['AWS ECS & EC2', 'Docker', 'CloudWatch', 'Elasticsearch', 'Kibana', 'PyTorch', 'XGBoost', 'VGG-19', 'SHAP'].map(skill => (
                    <span 
                      key={skill}
                      className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/5 space-y-3">
                  <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">Frontend Capabilities</span>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'Tailwind CSS', 'Vite', 'Framer Motion'].map(item => (
                      <span key={item} className="px-3 py-1 rounded-lg bg-purple-400/10 text-purple-300 text-[11px] font-mono border border-purple-400/20">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* EDUCATION & COURSEWORK SECTION: Academic Credential */}
        {/* ======================================================== */}
        <section id="education" className="py-28 px-4 sm:px-6 lg:px-8 border-b border-white/5 relative">
          <div className="max-w-7xl mx-auto space-y-12">
            
            <div className="flex items-center gap-3 font-mono text-xs text-cyan-400 uppercase tracking-widest mb-3">
              <span>[06 / EDUCATION]</span>
              <span className="h-px w-12 bg-cyan-400/30"></span>
              <span>ACADEMIC FOUNDATION</span>
            </div>

            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-white/[0.04] to-transparent border border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              
              <div className="space-y-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono bg-cyan-400/10 border border-cyan-400/30 text-cyan-300">
                  ARTIFICIAL INTELLIGENCE & DATA SCIENCE
                </span>
                <h3 className="font-syne font-black text-3xl sm:text-4xl text-white">
                  Bachelor of Technology (B.Tech)
                </h3>
                <p className="text-base text-slate-300 font-medium">
                  KPR Institute of Engineering and Technology <span className="text-cyan-400">•</span> Coimbatore, Tamil Nadu
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Data Structures & Algorithms', 'Full Stack Development', 'OOP', 'DBMS', 'Distributed Systems'].map(c => (
                    <span key={c} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:text-right shrink-0">
                <div className="inline-block p-6 rounded-2xl bg-black/60 border border-white/10 text-left lg:text-right">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block">Cumulative GPA</span>
                  <span className="font-syne font-black text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                    7.0 / 10.0
                  </span>
                  <span className="block text-xs font-mono text-slate-400 mt-1">2021 — 2025</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* CONTACT SECTION: Dedicated High-Impact Terminal / Outreach */}
        {/* ======================================================== */}
        <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 relative bg-white/[0.01]">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-widest">
                <span>[07 / OUTREACH]</span>
                <span className="h-px w-12 bg-cyan-400/30"></span>
                <span>GET IN TOUCH</span>
              </div>
              <h2 className="font-syne font-black text-5xl sm:text-6xl text-white tracking-tight">
                LET'S BUILD SOMETHING <span className="text-stroke">EXCEPTIONAL</span>.
              </h2>
              <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
                Have a challenging project, an open role, or an architecture problem? My inbox is always open.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-[#101218] border border-white/10 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <a 
                  href="mailto:srivigneshwaran.i@gmail.com"
                  className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-4 transition-all hover:border-cyan-400/40 group"
                >
                  <div className="p-3 rounded-xl bg-cyan-400/10 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-slate-400 uppercase block">Direct Email</span>
                    <span className="text-white font-syne font-bold text-sm truncate block">
                      srivigneshwaran.i@gmail.com
                    </span>
                  </div>
                </a>

                <a 
                  href="https://www.linkedin.com/in/srivigneshwaran-i-115163229"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-4 transition-all hover:border-blue-400/40 group"
                >
                  <div className="p-3 rounded-xl bg-blue-400/10 text-blue-400 group-hover:scale-110 transition-transform">
                    <FaLinkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-slate-400 uppercase block">Connect on LinkedIn</span>
                    <span className="text-white font-syne font-bold text-sm block">
                      srivigneshwaran-i
                    </span>
                  </div>
                </a>
              </div>

              <div className="pt-6 border-t border-white/10 text-center">
                <a 
                  href="mailto:srivigneshwaran.i@gmail.com?subject=Opportunity%20Discussion"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-syne font-black text-sm tracking-wide transition-all transform hover:scale-105 shadow-xl shadow-cyan-400/20 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>START A CONVERSATION</span>
                </a>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Modern Minimalist Editorial Footer */}
      <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8 bg-[#06070a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} SRIVIGNESHWARAN I. ENGINEERED WITH PRECISION.
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/srivigneshwaran" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              GITHUB
            </a>
            <a href="https://www.linkedin.com/in/srivigneshwaran-i-115163229" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              LINKEDIN
            </a>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-cyan-400 transition-colors uppercase">
              BACK TO TOP ↑
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}
