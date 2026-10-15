import { useState, useEffect } from 'react';
import { Mail, ExternalLink, Code2, Database, Layout, Terminal, Server, Award, ChevronRight, ChevronLeft, Moon, Sun, Download, User, MessageSquare, Send, Pause, Play, Sparkles, Briefcase, GraduationCap } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

import drImage from './assets/DR.png';
import smtImage from './assets/SMT.png';
import pyDsaImage from './assets/pyDSA.png';

const fadeInUp = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const }
};

const scrollScale = {
  initial: { opacity: 0, scale: 0.92, y: 30 },
  whileInView: { opacity: 1, scale: 1, y: 0 },
  viewport: { once: true, margin: "-70px" },
  transition: { duration: 0.7, ease: "easeOut" as const }
};

const scrollSlideLeft = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: "easeOut" as const }
};

const projectsData = [
  {
    title: "DSA Visualizer & Python Playground",
    description: "A full-stack educational platform featuring structured algorithm roadmaps, an interactive DSA Visualizer for dynamic animations, and an integrated Python Playground for live in-browser coding.",
    image: pyDsaImage,
    tags: ["React", "TypeScript", "Algorithms", "Python Playground"],
    github: "https://github.com/srivigneshwaran/pythonAndDsa",
    live: "https://masterpythonanddsa.vercel.app/",
    badge: "Interactive Educational Platform",
    accent: "indigo"
  },
  {
    title: "Diabetic Retinopathy Detection",
    description: "A machine learning-powered web application that automates the screening of diabetic retinopathy from eye fundus images, providing immediate, staged diagnostic predictions.",
    image: drImage,
    tags: ["Deep Learning", "ResNet", "Computer Vision", "Python"],
    github: "https://github.com/srivigneshwaran/Diabetic_Retinopathy_using_RESNET",
    live: null,
    badge: "Medical AI Diagnostics",
    accent: "blue"
  },
  {
    title: "Sri Murugan Tapes Corporate Website",
    description: "A responsive, component-based corporate website for a manufacturing business built with React, Vite, and Tailwind CSS. Features a premium design system with CSS micro-animations and smooth scrolling.",
    image: smtImage,
    tags: ["React", "Vite", "Tailwind CSS", "Design System"],
    github: "https://github.com/srivigneshwaran/sriMuruganTapes-portfolio",
    live: "https://srimurugantapes.vercel.app/",
    badge: "Enterprise Web App",
    accent: "indigo"
  },
  {
    title: "DevProof AI",
    description: "An AI-powered developer workflow assistant that guides engineers from bug report → root cause analysis → proposed patch → human approval → automated test verification and final proof.",
    tags: ["Python", "FastAPI", "AI Workflow", "Next.js"],
    github: "https://github.com/srivigneshwaran/devproof-ai",
    live: "https://devproof-ai-kappa.vercel.app",
    badge: "AI Developer Tooling",
    accent: "purple",
    icon: Terminal,
    bannerTitle: "Automated Bug Verification",
    bannerSubtitle: "Root Cause • Automated Fix • Verification Proof"
  },
  {
    title: "NLP-Powered Resume Parser",
    description: "An intelligent web application that parses unstructured resumes in PDF/document formats, extracting key skills, education, and work history into structured candidate profiles.",
    tags: ["TypeScript", "NLP", "React", "Tailwind CSS"],
    github: "https://github.com/srivigneshwaran/resume_parser",
    live: "https://resume-parser-seven-khaki.vercel.app",
    badge: "NLP & Entity Extraction",
    accent: "teal",
    icon: Layout,
    bannerTitle: "NLP Resume Intelligence",
    bannerSubtitle: "PDF Parsing • Entity Extraction • JSON Schema"
  },
  {
    title: "Full-Stack Online Shopping System",
    description: "A comprehensive e-commerce platform built with React, Vite, and Tailwind on the frontend and Django REST Framework with PostgreSQL on the backend, featuring cart management, order checkout, and product cataloging.",
    tags: ["React", "Django REST", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/srivigneshwaran/Online_Shopping_System",
    live: null,
    badge: "Full-Stack E-Commerce",
    accent: "blue",
    icon: Database,
    bannerTitle: "E-Commerce Architecture",
    bannerSubtitle: "Cart & Checkout • Product Catalog • PostgreSQL"
  },
  {
    title: "Distributed Task Manager API",
    description: "A robust Django REST Framework backend for asynchronous task management. Implements Celery workers backed by Redis for background notification queues and comes fully containerized via Docker.",
    tags: ["Django REST", "Celery", "Redis", "Docker"],
    github: "https://github.com/srivigneshwaran/TaskMangerPY",
    live: null,
    badge: "Distributed Systems & Queues",
    accent: "amber",
    icon: Server,
    bannerTitle: "Distributed Task Queues",
    bannerSubtitle: "Celery Workers • Redis Broker • Dockerized"
  },
  {
    title: "Healthcare Provider Fraud Detection",
    description: "An end-to-end machine learning pipeline identifying anomalous and fraudulent billing patterns. Combines unsupervised Isolation Forest and supervised XGBoost ensembles with SHAP explainability for regulatory audits.",
    tags: ["Python", "XGBoost", "Isolation Forest", "SHAP"],
    github: "https://github.com/srivigneshwaran/healthCare_fraud_detection",
    live: null,
    badge: "Healthcare ML Pipeline",
    accent: "rose",
    icon: Database,
    bannerTitle: "ML Anomaly Detection",
    bannerSubtitle: "Ensemble Modeling • SHAP Auditing • Fraud Analytics"
  },
  {
    title: "Neural Style Transfer Web App",
    description: "An interactive Streamlit application utilizing a deep VGG-19 convolutional network to blend artistic style representations with source imagery, optimized with CUDA acceleration and custom style weights.",
    tags: ["PyTorch", "Streamlit", "VGG-19", "CUDA"],
    github: "https://github.com/srivigneshwaran/Nueral_style_transfer",
    live: null,
    badge: "Computer Vision & Deep Learning",
    accent: "purple",
    icon: Code2,
    bannerTitle: "Deep Learning & Vision",
    bannerSubtitle: "VGG-19 CNN • CUDA GPU • Feature Blending"
  }
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextProject = () => {
    setDirection(1);
    setCurrentProject((prev) => (prev + 1) % projectsData.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentProject((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  const goToProject = (index: number) => {
    setDirection(index > currentProject ? 1 : -1);
    setCurrentProject(index);
  };

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentProject((prev) => (prev + 1) % projectsData.length);
    }, 3500); // 3.5s auto-slide delay
    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, currentProject]);

  useEffect(() => {
    // Check system preference on load
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 64; // Navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const startPosition = window.pageYOffset;
      const targetPosition = elementPosition + startPosition - offset;
      const distance = targetPosition - startPosition;
      const duration = 1200; // 1.2 seconds for a slow, premium feel
      let start: number | null = null;

      // Easing function: easeInOutQuart
      const ease = (time: number, start: number, change: number, duration: number) => {
        time /= duration / 2;
        if (time < 1) return change / 2 * time * time * time * time + start;
        time -= 2;
        return -change / 2 * (time * time * time * time - 2) + start;
      };

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const nextPosition = ease(timeElapsed, startPosition, distance, duration);

        window.scrollTo(0, nextPosition);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        } else {
          window.scrollTo(0, targetPosition);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[#f6f8fa] dark:bg-[#0d1117] text-[#1f2328] dark:text-[#e6edf3] font-sans selection:bg-cyan-500 selection:text-black transition-colors duration-300">
      {/* Scroll-Triggered Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/85 dark:bg-[#0d1117]/85 backdrop-blur-md z-50 border-b border-slate-200 dark:border-[#30363d]/70 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Srivigneshwaran I
          </span>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-sm font-medium text-slate-600 dark:text-[#8d96a0] hover:text-cyan-600 dark:hover:text-cyan-400 transition-all hover:scale-105">About</a>
            <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')} className="text-sm font-medium text-slate-600 dark:text-[#8d96a0] hover:text-cyan-600 dark:hover:text-cyan-400 transition-all hover:scale-105">Experience</a>
            <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="text-sm font-medium text-slate-600 dark:text-[#8d96a0] hover:text-cyan-600 dark:hover:text-cyan-400 transition-all hover:scale-105">Projects</a>
            <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="text-sm font-medium text-slate-600 dark:text-[#8d96a0] hover:text-cyan-600 dark:hover:text-cyan-400 transition-all hover:scale-105">Skills</a>
          </div>

          <div className="flex gap-4 items-center">
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-[#21262d] text-slate-500 dark:text-[#8d96a0] hover:text-slate-900 dark:hover:text-white transition-colors focus:outline-none">
              {isDarkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>
            <a href="https://github.com/srivigneshwaran" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-[#8d96a0] hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors hidden sm:block">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/srivigneshwaran-i-115163229" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-[#8d96a0] hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors hidden sm:block">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <button onClick={(e) => scrollToSection(e, 'contact')} className="hidden sm:flex text-slate-500 dark:text-[#8d96a0] hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              <Mail className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-12 overflow-hidden">
        {/* Hero Section */}
        <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-28 md:pt-24 md:pb-36">
          {/* Ambient Glowing Blobs & Tech Grid Background */}
          <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-60"></div>
          <div className="absolute -top-20 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-cyan-500/15 dark:bg-cyan-500/20 rounded-full blur-3xl pointer-events-none animate-float-slow -z-10"></div>
          <div className="absolute top-1/3 right-10 w-64 h-64 md:w-80 md:h-80 bg-purple-500/15 dark:bg-purple-600/20 rounded-full blur-3xl pointer-events-none animate-float-reverse -z-10"></div>
          <div className="absolute bottom-0 left-1/3 w-60 h-60 bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow -z-10"></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center space-y-8 relative z-10"
          >
            {/* Live Status Pill */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50/80 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800/60 backdrop-blur-md shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Available for Opportunities</span>
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
              Hi, I'm{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
                  Srivigneshwaran
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full opacity-60"></span>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
              Software Developer specializing in building <span className="font-semibold text-indigo-600 dark:text-indigo-400">robust, scalable web applications</span> and high-throughput backend services, powered by AI and data intelligence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={(e) => scrollToSection(e, 'contact')}
                className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-8 py-3.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform" /> Get In Touch
              </button>
              <a
                href="https://drive.google.com/file/d/1YpLOe402JcyR5mwES-Jie9k8DxgW_Kk4/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white/80 dark:bg-slate-900/80 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 px-8 py-3.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-md border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" /> Download Resume
              </a>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-white dark:bg-[#161b22] py-24 border-y border-slate-200 dark:border-[#30363d]/80 scroll-mt-16 transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              {...scrollSlideLeft}
              className="flex items-center gap-4 mb-8"
            >
              <div className="p-2.5 rounded-2xl bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800/60">
                <User className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">About Me</h2>
                <p className="text-sm text-slate-500 dark:text-[#8d96a0] mt-0.5">Background & Core Philosophy</p>
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-[#c9d1d9] leading-relaxed space-y-6"
            >
              <p>
                I am a highly motivated Software Developer with a strong foundation in Artificial Intelligence and Data Science. My passion lies in architecting robust backend systems, building intuitive frontend interfaces, and leveraging data-driven approaches to solve complex problems.
              </p>
              <p>
                Throughout my academic and professional journey, I have cultivated a deep understanding of modern web development, cloud infrastructure, and machine learning. I thrive in dynamic environments where I can continuously learn and apply emerging technologies to create impactful solutions.
              </p>
            </motion.div>

            {/* Scroll-Triggered Stat Callouts */}
            <motion.div
              {...scrollScale}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-200 dark:border-[#30363d]"
            >
              {[
                { number: "500K+", label: "Daily API Requests Supported" },
                { number: "1M+", label: "Records Processed Asynchronously" },
                { number: "99.9%", label: "Cloud Uptime Maintained" },
                { number: "9+", label: "Shipped Projects & Models" }
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0d1117] border border-slate-200/80 dark:border-[#30363d] text-center hover:border-cyan-500/50 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  <p className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">
                    {stat.number}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-[#8d96a0] font-medium mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 scroll-mt-16 bg-[#f6f8fa] dark:bg-[#0d1117] transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              {...fadeInUp}
              className="space-y-12"
            >
              <div className="flex items-center gap-4 mb-12">
                <div className="p-2.5 rounded-2xl bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800/60 shadow-sm">
                  <Briefcase className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Experience</h2>
                  <p className="text-sm text-slate-500 dark:text-[#8d96a0] mt-1">Professional Journey & Impact</p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/90 dark:bg-[#161b22] backdrop-blur-md rounded-3xl p-8 md:p-10 border border-slate-200 dark:border-[#30363d] shadow-xl dark:shadow-black/40 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl">
                  <div className="md:grid md:grid-cols-4 md:gap-8">
                    <div className="md:text-right pb-4 md:pb-0 md:pr-4 md:border-r border-slate-200 dark:border-[#30363d]">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 text-xs font-bold mb-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Current Role
                      </div>
                      <p className="text-cyan-600 dark:text-cyan-400 font-bold text-base">Jul 2025 – Present</p>
                      <p className="text-slate-500 dark:text-[#8d96a0] text-sm mt-1">Coimbatore, India</p>
                    </div>

                    <div className="md:col-span-3 md:pl-4 space-y-4">
                      <div>
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Software Developer</h3>
                          <span className="px-3 py-1 rounded-lg bg-cyan-50 dark:bg-cyan-950/50 text-cyan-600 dark:text-cyan-400 text-xs font-semibold border border-cyan-200 dark:border-cyan-800/60">
                            Full-Time
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300">Tenext Technologies</h4>
                        <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 tracking-wide mt-1 uppercase">CLIENT: FRIENDBUY, USA — REFERRAL & LOYALTY SaaS PLATFORM</p>
                      </div>

                      <ul className="space-y-3.5 text-slate-600 dark:text-[#c9d1d9] text-sm md:text-base leading-relaxed">
                        <li className="flex items-start gap-3 group">
                          <div className="p-1 rounded-full bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 mt-1 shrink-0 group-hover:scale-125 transition-transform">
                            <ChevronRight className="w-4 h-4" />
                          </div>
                          <span>Architected and optimized scalable backend services using <strong className="text-slate-900 dark:text-white font-semibold">Node.js</strong> and <strong className="text-slate-900 dark:text-white font-semibold">Express.js</strong> for a US-based SaaS referral and loyalty platform, improving API response times by 30% and supporting 500K+ daily requests.</span>
                        </li>
                        <li className="flex items-start gap-3 group">
                          <div className="p-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 mt-1 shrink-0 group-hover:scale-125 transition-transform">
                            <ChevronRight className="w-4 h-4" />
                          </div>
                          <span>Engineered a high-volume CSV bulk rewards processing pipeline handling 1M+ records with robust validation, asynchronous processing, and DynamoDB updates, reducing processing time by 40%.</span>
                        </li>
                        <li className="flex items-start gap-3 group">
                          <div className="p-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 mt-1 shrink-0 group-hover:scale-125 transition-transform">
                            <ChevronRight className="w-4 h-4" />
                          </div>
                          <span>Enforced role-based access control (RBAC) across 3 distinct user roles and architected auto-scaling workloads on AWS ECS, achieving 99.9% uptime and handling traffic surges up to 3x without performance degradation.</span>
                        </li>
                        <li className="flex items-start gap-3 group">
                          <div className="p-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 mt-1 shrink-0 group-hover:scale-125 transition-transform">
                            <ChevronRight className="w-4 h-4" />
                          </div>
                          <span>Spearheaded integration of AWS DynamoDB, S3, and CloudWatch alongside Elasticsearch and Kibana for high-throughput data persistence, real-time monitoring, and full-stack observability, reducing incident resolution time by 35%.</span>
                        </li>
                        <li className="flex items-start gap-3 group">
                          <div className="p-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 mt-1 shrink-0 group-hover:scale-125 transition-transform">
                            <ChevronRight className="w-4 h-4" />
                          </div>
                          <span>Engineered a dynamic announcement and notification system with scheduling, lifecycle controls, and event-driven analytics tracking impressions, clicks, and CTR across 10K+ active merchant campaigns, driving a 25% increase in user engagement and improving conversion rates by 20%.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section - Interactive 3D Card Rotation Carousel */}
        <section id="projects" className="bg-white dark:bg-[#161b22] py-24 border-y border-slate-200 dark:border-[#30363d]/80 scroll-mt-16 transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header with Navigation Controls */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-2xl bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800/60">
                  <Code2 className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Featured Projects</h2>
                  <p className="text-sm text-slate-500 dark:text-[#8d96a0] mt-1">
                    Rotating Showcase • Project {currentProject + 1} of {projectsData.length}
                  </p>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                {/* Auto-play toggle */}
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className={`p-2.5 rounded-xl border text-sm flex items-center gap-2 transition-all ${
                    isAutoPlaying
                      ? 'bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800/60'
                      : 'bg-slate-100 dark:bg-[#21262d] text-slate-500 dark:text-[#8d96a0] border-slate-200 dark:border-[#30363d]'
                  }`}
                  title={isAutoPlaying ? "Pause Auto-Rotation" : "Start Auto-Rotation"}
                >
                  {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span className="text-xs font-medium hidden md:inline">{isAutoPlaying ? "Auto" : "Paused"}</span>
                </button>

                {/* Prev Button */}
                <button
                  onClick={prevProject}
                  aria-label="Previous Project"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#21262d] hover:bg-cyan-50 dark:hover:bg-cyan-950/40 hover:text-cyan-600 dark:hover:text-cyan-400 text-slate-700 dark:text-[#c9d1d9] border border-slate-200 dark:border-[#30363d] transition-all hover:scale-105"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Next Button */}
                <button
                  onClick={nextProject}
                  aria-label="Next Project"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#21262d] hover:bg-cyan-50 dark:hover:bg-cyan-950/40 hover:text-cyan-600 dark:hover:text-cyan-400 text-slate-700 dark:text-[#c9d1d9] border border-slate-200 dark:border-[#30363d] transition-all hover:scale-105"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* 3D Rotating Card Display Container */}
            <div
              className="relative [perspective:1200px] overflow-hidden min-h-[520px] md:min-h-[460px] flex items-center justify-center py-4"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentProject}
                  custom={direction}
                  initial={{
                    opacity: 0,
                    rotateY: direction > 0 ? 45 : -45,
                    scale: 0.9,
                    x: direction > 0 ? 120 : -120
                  }}
                  animate={{
                    opacity: 1,
                    rotateY: 0,
                    scale: 1,
                    x: 0,
                    transition: {
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1]
                    }
                  }}
                  exit={{
                    opacity: 0,
                    rotateY: direction > 0 ? -45 : 45,
                    scale: 0.9,
                    x: direction > 0 ? -120 : 120,
                    transition: {
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1]
                    }
                  }}
                  className="w-full bg-slate-50 dark:bg-[#0d1117] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-[#30363d] grid md:grid-cols-2 group [transform-style:preserve-3d] hover:border-cyan-500/50 transition-colors"
                >
                  {/* Left: Visual Media or Dynamic Architectural Banner */}
                  <div className="min-h-[260px] md:min-h-full flex items-center justify-center relative overflow-hidden border-b md:border-b-0 md:border-r border-slate-200 dark:border-[#30363d] bg-slate-900/5 dark:bg-[#161b22]/50">
                    {projectsData[currentProject].image ? (
                      <>
                        <img
                          src={projectsData[currentProject].image}
                          alt={projectsData[currentProject].title}
                          className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                      </>
                    ) : (
                      <div className="w-full h-full min-h-[260px] flex flex-col items-center justify-center p-8 text-center relative overflow-hidden bg-gradient-to-br from-[#161b22] via-[#0d1117] to-[#090d13]">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),transparent_65%)]"></div>
                        <div className="relative z-10 flex flex-col items-center space-y-4">
                          <div className="w-20 h-20 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shadow-xl group-hover:scale-110 transition-transform duration-300">
                            {(() => {
                              const IconComponent = projectsData[currentProject].icon || Code2;
                              return <IconComponent className="w-10 h-10" />;
                            })()}
                          </div>
                          <span className="font-mono text-sm font-semibold tracking-wider text-cyan-300 uppercase">
                            {projectsData[currentProject].bannerTitle || projectsData[currentProject].badge}
                          </span>
                          <span className="text-xs text-slate-400 max-w-xs">
                            {projectsData[currentProject].bannerSubtitle || projectsData[currentProject].description.slice(0, 80) + '...'}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Badge Pill */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md bg-white/90 dark:bg-[#161b22]/90 text-slate-800 dark:text-[#c9d1d9] border border-slate-200/60 dark:border-[#30363d] shadow-sm">
                        {projectsData[currentProject].badge}
                      </span>
                    </div>
                  </div>

                  {/* Right: Project Information & Actions */}
                  <div className="p-8 md:p-12 flex flex-col justify-between">
                    <div>
                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {projectsData[currentProject].tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-semibold px-2.5 py-1 rounded-md bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-4 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {projectsData[currentProject].title}
                      </h3>

                      <p className="text-slate-600 dark:text-[#c9d1d9] text-base md:text-lg leading-relaxed mb-8">
                        {projectsData[currentProject].description}
                      </p>
                    </div>

                    {/* Links & CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-[#30363d] mt-auto">
                      <div className="flex items-center gap-4">
                        <a
                          href={projectsData[currentProject].github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 dark:bg-[#21262d] hover:dark:bg-cyan-950/60 text-white text-sm font-medium hover:border-cyan-500/50 border border-transparent dark:border-[#30363d] transition-all hover:scale-105 shadow-md"
                        >
                          <FaGithub className="w-4 h-4" />
                          <span>Code Repository</span>
                        </a>

                        {projectsData[currentProject].live && (
                          <a
                            href={projectsData[currentProject].live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-black font-semibold text-sm transition-all hover:scale-105 shadow-md shadow-cyan-500/20"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>

                      <span className="text-xs font-mono text-slate-400 dark:text-[#8d96a0]">
                        {String(currentProject + 1).padStart(2, '0')} / {String(projectsData.length).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Dot Indicators & Quick Selector */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
              {projectsData.map((project, idx) => (
                <button
                  key={project.title}
                  onClick={() => goToProject(idx)}
                  aria-label={`Jump to ${project.title}`}
                  className={`transition-all duration-300 rounded-full ${
                    idx === currentProject
                      ? 'w-10 h-3 bg-gradient-to-r from-cyan-400 to-indigo-500 shadow-md shadow-cyan-500/30'
                      : 'w-3 h-3 bg-slate-300 dark:bg-[#30363d] hover:bg-slate-400 dark:hover:bg-[#484f58]'
                  }`}
                  title={`${idx + 1}. ${project.title}`}
                />
              ))}
            </div>

            {/* Quick Project Mini Tabs */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2">
              {projectsData.map((project, idx) => (
                <button
                  key={project.title}
                  onClick={() => goToProject(idx)}
                  className={`p-2 rounded-lg text-left text-xs transition-all border truncate ${
                    idx === currentProject
                      ? 'bg-cyan-50 dark:bg-cyan-950/50 border-cyan-500 text-cyan-700 dark:text-cyan-300 font-semibold shadow-sm'
                      : 'bg-slate-50/60 dark:bg-[#0d1117] border-slate-200 dark:border-[#30363d] text-slate-600 dark:text-[#8d96a0] hover:border-cyan-400 dark:hover:border-cyan-700'
                  }`}
                  title={project.title}
                >
                  <span className="block opacity-60 text-[10px]">0{idx + 1}</span>
                  <span className="truncate block">{project.title.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-[#f6f8fa] dark:bg-[#0d1117] border-y border-slate-200 dark:border-[#30363d] py-24 scroll-mt-16 transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="flex items-center gap-4 mb-16">
              <div className="p-3 rounded-2xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/20 text-cyan-600 dark:text-cyan-400 shadow-sm">
                <Database className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-[#e6edf3]">Technical Expertise</h2>
                <p className="text-slate-500 dark:text-[#8d96a0] text-sm mt-1">Core languages, cloud architecture, and development toolkits</p>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Column 1 */}
              <motion.div {...fadeInUp} className="space-y-8">
                <div className="p-6 rounded-2xl bg-white dark:bg-[#161b22] border border-slate-200 dark:border-[#30363d] hover:border-cyan-500/40 dark:hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20 space-y-5">
                  <div className="flex items-center gap-3 text-cyan-600 dark:text-cyan-400 mb-2">
                    <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-[#e6edf3]">Languages</h3>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3.5 py-1.5 bg-slate-50 dark:bg-[#21262d] rounded-lg text-slate-700 dark:text-[#c9d1d9] text-sm font-medium hover:bg-gradient-to-r hover:from-cyan-500 hover:to-indigo-500 hover:text-white dark:hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 cursor-default border border-slate-200 dark:border-[#30363d] shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-[#161b22] border border-slate-200 dark:border-[#30363d] hover:border-cyan-500/40 dark:hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20 space-y-5">
                  <div className="flex items-center gap-3 text-cyan-600 dark:text-cyan-400 mb-2">
                    <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                      <Layout className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-[#e6edf3]">Frontend</h3>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {['HTML5', 'CSS3', 'Tailwind CSS', 'React', 'Component Libraries', 'UI Frameworks'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3.5 py-1.5 bg-slate-50 dark:bg-[#21262d] rounded-lg text-slate-700 dark:text-[#c9d1d9] text-sm font-medium hover:bg-gradient-to-r hover:from-cyan-500 hover:to-indigo-500 hover:text-white dark:hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 cursor-default border border-slate-200 dark:border-[#30363d] shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Column 2 */}
              <motion.div {...fadeInUp} className="space-y-8">
                <div className="p-6 rounded-2xl bg-white dark:bg-[#161b22] border border-slate-200 dark:border-[#30363d] hover:border-cyan-500/40 dark:hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20 space-y-5">
                  <div className="flex items-center gap-3 text-cyan-600 dark:text-cyan-400 mb-2">
                    <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                      <Server className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-[#e6edf3]">Backend</h3>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {['Node.js', 'Express.js', 'RESTful API Design', 'Authentication', 'Authorization'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3.5 py-1.5 bg-slate-50 dark:bg-[#21262d] rounded-lg text-slate-700 dark:text-[#c9d1d9] text-sm font-medium hover:bg-gradient-to-r hover:from-cyan-500 hover:to-indigo-500 hover:text-white dark:hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 cursor-default border border-slate-200 dark:border-[#30363d] shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-[#161b22] border border-slate-200 dark:border-[#30363d] hover:border-cyan-500/40 dark:hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20 space-y-5">
                  <div className="flex items-center gap-3 text-cyan-600 dark:text-cyan-400 mb-2">
                    <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                      <Database className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-[#e6edf3]">Databases</h3>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {['MongoDB', 'DynamoDB', 'PostgreSQL', 'Redis'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3.5 py-1.5 bg-slate-50 dark:bg-[#21262d] rounded-lg text-slate-700 dark:text-[#c9d1d9] text-sm font-medium hover:bg-gradient-to-r hover:from-cyan-500 hover:to-indigo-500 hover:text-white dark:hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 cursor-default border border-slate-200 dark:border-[#30363d] shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Column 3 */}
              <motion.div {...fadeInUp} className="space-y-8">
                <div className="p-6 rounded-2xl bg-white dark:bg-[#161b22] border border-slate-200 dark:border-[#30363d] hover:border-cyan-500/40 dark:hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20 space-y-5">
                  <div className="flex items-center gap-3 text-cyan-600 dark:text-cyan-400 mb-2">
                    <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                      <Award className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-[#e6edf3]">Cloud & DevOps</h3>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {['AWS (EC2, S3, ECS, CloudWatch)', 'Docker', 'GitHub Actions', 'CircleCI'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3.5 py-1.5 bg-slate-50 dark:bg-[#21262d] rounded-lg text-slate-700 dark:text-[#c9d1d9] text-sm font-medium hover:bg-gradient-to-r hover:from-cyan-500 hover:to-indigo-500 hover:text-white dark:hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 cursor-default border border-slate-200 dark:border-[#30363d] shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-[#161b22] border border-slate-200 dark:border-[#30363d] hover:border-cyan-500/40 dark:hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20 space-y-5">
                  <div>
                    <h3 className="text-xs font-bold text-cyan-600 dark:text-cyan-400 tracking-wider uppercase mb-3">Monitoring & Observability</h3>
                    <div className="flex flex-wrap gap-2.5 mb-5">
                      {['ELK Stack', 'OpenSearch', 'CloudWatch'].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-slate-50 dark:bg-[#21262d] rounded-lg text-slate-700 dark:text-[#c9d1d9] text-xs font-medium hover:bg-gradient-to-r hover:from-cyan-500 hover:to-indigo-500 hover:text-white dark:hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 cursor-default border border-slate-200 dark:border-[#30363d]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-cyan-600 dark:text-cyan-400 tracking-wider uppercase mb-3">Development Practices</h3>
                    <div className="flex flex-wrap gap-2.5">
                      {['Git', 'Agile (Scrum)', 'Code Reviews', 'MVC Architecture'].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-slate-50 dark:bg-[#21262d] rounded-lg text-slate-700 dark:text-[#c9d1d9] text-xs font-medium hover:bg-gradient-to-r hover:from-cyan-500 hover:to-indigo-500 hover:text-white dark:hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 cursor-default border border-slate-200 dark:border-[#30363d]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>


        {/* Coursework & Education Section */}
        <section id="education" className="bg-white dark:bg-[#161b22] py-24 border-y border-slate-200 dark:border-[#30363d] scroll-mt-16 transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <motion.div {...fadeInUp}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-2xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/20 text-cyan-600 dark:text-cyan-400">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-[#e6edf3]">Coursework & Foundations</h2>
                  <p className="text-slate-500 dark:text-[#8d96a0] text-sm mt-1">Specialized engineering disciplines</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: 'Data Structures & Algorithms', tag: 'Core' },
                  { name: 'Full Stack Web Development', tag: 'Production' },
                  { name: 'Object-Oriented Programming', tag: 'Architecture' },
                  { name: 'Database Management Systems', tag: 'Data' },
                  { name: 'Cloud Computing & Distributed Systems', tag: 'Infra' }
                ].map((course) => (
                  <div
                    key={course.name}
                    className="flex items-center gap-2 bg-[#f6f8fa] dark:bg-[#0d1117] text-slate-800 dark:text-[#c9d1d9] px-5 py-2.5 rounded-2xl font-medium border border-slate-200 dark:border-[#30363d] shadow-sm hover:border-cyan-500/40 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    <span>{course.name}</span>
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-md bg-cyan-50 dark:bg-[#21262d] text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/30">
                      {course.tag}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...scrollScale}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-2xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/20 text-cyan-600 dark:text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-[#e6edf3]">Education</h2>
                  <p className="text-slate-500 dark:text-[#8d96a0] text-sm mt-1">Academic foundation & degree</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-cyan-50/20 dark:from-[#0d1117] dark:to-[#161b22] rounded-3xl p-8 md:p-10 shadow-lg border border-slate-200 dark:border-[#30363d] hover:border-cyan-500/40 transition-all duration-500 hover:shadow-2xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/30 mb-3">
                      Artificial Intelligence & Data Science
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-[#e6edf3]">Bachelor of Technology (B.Tech)</h3>
                    <p className="text-slate-700 dark:text-[#c9d1d9] font-medium text-base mt-2 flex items-center gap-2">
                      <span>KPR Institute of Engineering and Technology</span>
                    </p>
                    <p className="text-slate-500 dark:text-[#8d96a0] text-sm mt-1">Coimbatore, Tamil Nadu, India</p>
                  </div>
                  <div className="text-left md:text-right">
                    <div className="inline-block bg-white dark:bg-[#161b22] border border-cyan-200 dark:border-[#30363d] px-5 py-2.5 rounded-2xl shadow-sm">
                      <span className="text-xs text-slate-500 dark:text-[#8d96a0] uppercase tracking-wider block font-semibold">Cumulative GPA</span>
                      <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">7.0 / 10.0</span>
                    </div>
                    <p className="text-slate-500 dark:text-[#8d96a0] font-medium text-sm mt-2">2021 – 2025</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-24 scroll-mt-16 bg-[#f6f8fa] dark:bg-[#0d1117] transition-colors duration-300">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              {...fadeInUp}
              className="text-center space-y-4 mb-12"
            >
              <div className="w-16 h-16 rounded-2xl bg-cyan-50 dark:bg-[#161b22] border border-cyan-200 dark:border-[#30363d] flex items-center justify-center text-cyan-600 dark:text-cyan-400 mx-auto shadow-sm">
                <MessageSquare className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-[#e6edf3]">Let's Connect</h2>
              <p className="text-lg text-slate-600 dark:text-[#8d96a0]">
                Have a question, collaboration idea, or want to work together? Leave a message below.
              </p>
            </motion.div>

            <motion.form
              {...scrollScale}
              className="bg-white/90 dark:bg-[#161b22] backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-xl border border-slate-200 dark:border-[#30363d] space-y-6 transition-colors duration-300 hover:border-cyan-500/40"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-[#c9d1d9]">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-[#30363d] bg-slate-50 dark:bg-[#0d1117] text-slate-900 dark:text-[#e6edf3] focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-[#c9d1d9]">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-[#30363d] bg-slate-50 dark:bg-[#0d1117] text-slate-900 dark:text-[#e6edf3] focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-[#c9d1d9]">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-[#30363d] bg-slate-50 dark:bg-[#0d1117] text-slate-900 dark:text-[#e6edf3] focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-colors resize-none" placeholder="Your message here..."></textarea>
              </div>
              <button type="button" className="w-full bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:via-indigo-500 hover:to-purple-500 text-white font-medium py-3.5 rounded-xl transition-all transform hover:scale-[1.01] shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 cursor-pointer">
                <Send className="w-4 h-4" /> Send Message
              </button>
            </motion.form>
          </div>
        </section>
      </main>

      <footer className="bg-white dark:bg-[#0d1117] border-t border-slate-200 dark:border-[#30363d] py-12 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 dark:text-[#8d96a0] font-medium">
            © {new Date().getFullYear()} Srivigneshwaran I. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/srivigneshwaran" className="text-slate-400 dark:text-[#8d96a0] hover:text-cyan-400 transition-colors font-medium">GitHub</a>
            <a href="https://www.linkedin.com/in/srivigneshwaran-i-115163229" className="text-slate-400 dark:text-[#8d96a0] hover:text-cyan-400 transition-colors font-medium">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
