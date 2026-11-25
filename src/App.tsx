import { useState, useEffect } from 'react';
import {
  Mail, Code2, Database, Layout, Terminal, Server,
  ChevronRight, Moon, Sun, Download, Send,
  Cpu, ArrowUpRight, Globe,
  BarChart3, TrendingUp, Award, Phone
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

import drImage from './assets/DR.png';
import devproofImage from './assets/devproof.png';
import resumeParserImage from './assets/resumeParser.png';
import customerChurnImage from './assets/customerChurn.png';

interface Project {
  title: string;
  category: 'data-science' | 'ml-ai' | 'software';
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
  bullets?: string[];
}

const allProjects: Project[] = [
  {
    title: "Customer Churn Prediction & Business Analytics",
    category: "data-science",
    description: "End-to-end data science and business analytics project on 7,043 telecom customer records. Engineered reusable ETL cleaning, validated patterns with statistical hypothesis testing (Welch's t-test, Chi-Square), deployed balanced Logistic Regression (0.84 ROC-AUC, 78.6% recall) with odds ratios, and ran 10 SQL revenue cohort queries powering an interactive Streamlit dashboard.",
    image: customerChurnImage,
    tags: ["Python", "Pandas", "Scikit-Learn", "SQL", "Streamlit", "Hypothesis Testing", "EDA", "Seaborn"],
    github: "https://github.com/srivigneshwaran/Customer-Churn-Prediction-Business-Analytics",
    live: "https://customer-churn-prediction-business-analytics.streamlit.app/",
    badge: "Personal Project • Data Science & Analytics",
    accent: "from-cyan-500 to-blue-600",
    icon: BarChart3,
    highlight: "0.84 ROC-AUC • $139K Revenue Loss Quantified",
    metrics: "0.84 ROC-AUC / 78.6% Recall",
    bullets: [
      "Cleaned 7,043 customer records, resolving blank TotalCharges to zero-tenure accounts; built reusable ETL script",
      "Statistically validated churn patterns with Welch's t-test, Mann-Whitney U, and Chi-Square tests (p < 0.001)",
      "Trained balanced Logistic Regression with 0.84 ROC-AUC, demonstrating 2-year contracts reduce churn odds by 75%",
      "Wrote 10 SQL queries isolating $139K monthly revenue loss and prioritized high-risk customer retention outreach"
    ]
  },
  {
    title: "Diabetic Retinopathy Detection",
    category: "ml-ai",
    description: "Built an end-to-end computer vision classification and feature extraction workflow on eye fundus images, incorporating noise reduction and adaptive histogram equalization preprocessing to achieve 87% accuracy. Deployed an interactive Streamlit dashboard for real-time diagnostic predictions.",
    image: drImage,
    tags: ["Python", "Scikit-Learn", "Streamlit", "Deep Learning", "Fundus Imaging", "Image Preprocessing"],
    github: "https://github.com/srivigneshwaran/Diabetic_Retinopathy_using_RESNET",
    live: null,
    badge: "Final Year Project • Medical AI",
    accent: "from-emerald-500 to-teal-600",
    highlight: "87% Accuracy • Histogram Equalization Preprocessing",
    metrics: "87% Diagnostic Accuracy",
    bullets: [
      "Engineered automated feature extraction and image preprocessing pipeline with noise reduction and histogram equalization",
      "Achieved 87% clinical stage classification accuracy on retinal fundus scans",
      "Created an interactive Streamlit dashboard that delivers prediction probabilities and model outputs to users"
    ]
  },
  {
    title: "Healthcare Provider Fraud Detection Pipeline",
    category: "data-science",
    description: "End-to-end unsupervised and supervised ML pipeline detecting fraudulent billing patterns in healthcare insurance claims using Isolation Forest and XGBoost with audit-ready SHAP feature attribution explainability.",
    tags: ["Python", "Scikit-Learn", "XGBoost", "Isolation Forest", "SHAP", "EDA", "Anomaly Detection"],
    github: "https://github.com/srivigneshwaran/healthCare_fraud_detection",
    live: null,
    badge: "Healthcare ML & Anomaly Detection",
    accent: "from-rose-500 to-orange-600",
    icon: Database,
    highlight: "Audit-Ready SHAP Feature Attribution",
    metrics: "High Recall Anomaly Identification",
    bullets: [
      "Engineered anomaly scoring using Isolation Forest and supervised gradient boosting classification",
      "Integrated SHAP explainability for interpretable feature contribution on provider claim patterns"
    ]
  },
  {
    title: "DevProof AI — Autonomous Verification Agent",
    category: "software",
    description: "Developer workflow assistant orchestrating bug triage: ingests error traces, executes root-cause isolation, formulates a deterministic patch, and generates verification proofs before pull requests.",
    image: devproofImage,
    tags: ["Python", "FastAPI", "AI Workflow", "Next.js", "LLM Pipelines"],
    github: "https://github.com/srivigneshwaran/devproof-ai",
    live: "https://devproof-ai-kappa.vercel.app",
    badge: "AI Developer Tooling & Software Dev",
    accent: "from-purple-500 to-pink-600",
    icon: Terminal,
    highlight: "Automated Root Cause to Patch Verification",
    metrics: "Instant LLM Debug Loop"
  },
  {
    title: "NLP Resume Intelligence & Parser",
    category: "software",
    description: "Intelligent document parsing application extracting multi-format candidate resumes into clean structured schemas, analyzing entity tokens, competencies, and tenure timelines with interactive web visualization.",
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
    title: "Distributed Task Manager API & Worker Broker",
    category: "software",
    description: "High-throughput asynchronous task orchestrator powered by Django REST Framework, Celery background workers, Redis cache queues, and containerized Docker deployments.",
    tags: ["Python", "Django REST", "Celery", "Redis", "Docker", "PostgreSQL"],
    github: "https://github.com/srivigneshwaran/TaskMangerPY",
    live: null,
    badge: "Backend Software Systems",
    accent: "from-amber-500 to-yellow-600",
    icon: Server,
    highlight: "Non-blocking Asynchronous Queue Processing",
    metrics: "Celery + Redis Dockerized"
  },
  {
    title: "Neural Style Transfer Web Application",
    category: "ml-ai",
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
  const [activeTab, setActiveTab] = useState<'all' | 'data-science' | 'ml-ai' | 'software'>('all');
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

  // Scroll spy (excluding work experience)
  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'skills', 'education', 'contact'];
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
                Data Science & Software Dev
              </span>
            </div>
          </button>

          {/* Navigation Pill */}
          <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            {[
              { id: 'home', label: 'Index' },
              { id: 'about', label: 'About' },
              { id: 'projects', label: 'Projects' },
              { id: 'skills', label: 'Stack' },
              { id: 'education', label: 'Education & Certs' },
              { id: 'contact', label: 'Contact' },
            ].map(item => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${isActive
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
        {/* HERO SECTION: Data Science Identity + Software Engineering */}
        {/* ======================================================== */}
        <section id="home" className="relative min-h-[92vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 border-b border-white/5 overflow-hidden">
          {/* Ambient Lighting Background */}
          <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan-500/15 via-blue-600/15 to-purple-600/10 blur-[130px] rounded-full pointer-events-none"></div>

          <div className="max-w-7xl mx-auto w-full py-16 sm:py-24 space-y-10">

            {/* Live Availability Badge & Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center gap-3"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>DATA SCIENCE APPRENTICE &amp; ML</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>B.TECH AI &amp; DATA SCIENCE</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono">
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span>CHENNAI, INDIA • OPEN TO REMOTE / HYBRID</span>
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
                <span>[01 / DATA SCIENTIST &amp; DEVELOPER]</span>
                <span className="h-px w-16 bg-cyan-400/40 inline-block"></span>
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-syne font-black tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem] xl:text-[4.2rem] leading-[1.05] text-white"
              >
                SRIVIGNESHWARAN I
              </motion.h1>

              {/* Primary Role: Data Science & ML */}
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-syne font-black tracking-tighter text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-stroke uppercase"
              >
                DATA SCIENCE &amp; ML
              </motion.div>

              {/* Secondary Role Badge: Software Developer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="pt-2 flex items-center gap-3"
              >
                <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-cyan-300 font-mono text-xs tracking-wider uppercase">
                  + Software Developer
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Bridging analytical modeling with production deployment
                </span>
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
                B.Tech (AI &amp; Data Science) graduate with hands-on experience in <span className="text-cyan-400 font-semibold">Python, Pandas, NumPy, Scikit-Learn, and SQL</span>. Specialized in data cleaning, exploratory data analysis (EDA), statistical hypothesis testing, and predictive machine learning models with interactive Streamlit deployments.
              </p>

              {/* Quick Key Numbers Bar */}
              <div className="lg:col-span-5 grid grid-cols-3 gap-3">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-syne font-black text-cyan-400">0.84</div>
                  <div className="text-[11px] font-mono text-slate-400 mt-0.5 uppercase tracking-wide">ROC-AUC Churn</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-syne font-black text-blue-400">87%</div>
                  <div className="text-[11px] font-mono text-slate-400 mt-0.5 uppercase tracking-wide">DR Accuracy</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-syne font-black text-emerald-400">7K+</div>
                  <div className="text-[11px] font-mono text-slate-400 mt-0.5 uppercase tracking-wide">Records Analyzed</div>
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
                <span>EXPLORE PROJECTS</span>
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
        {/* ABOUT SECTION: Data Science Narrative & Resume Summary */}
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
              <span className="text-slate-300 font-medium">BIOGRAPHY &amp; METHODOLOGY</span>
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
                  EXTRACTING PATTERNS, VALIDATING HYPOTHESES, AND DELIVERING <span className="text-cyan-400">BUSINESS IMPACT</span>.
                </h2>

                <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 space-y-3 shadow-lg">
                  <div className="flex items-center gap-3 text-cyan-400 font-mono text-xs font-semibold uppercase">
                    <TrendingUp className="w-4 h-4 text-cyan-400" />
                    <span>Current Focus</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Data cleaning, statistical hypothesis testing (Welch's t-test, Chi-Square), predictive modeling (Scikit-Learn, Random Forest, Gradient Boosting), SQL cohort analytics, and full-stack interactive Streamlit dashboards.
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
                  I'm a <strong className="text-white font-semibold">B.Tech Artificial Intelligence and Data Science graduate</strong> with hands-on project experience in Python, Pandas, NumPy, Scikit-Learn, and SQL, covering the end-to-end data lifecycle: data cleaning, exploratory data analysis (EDA), statistical hypothesis testing, and predictive modeling.
                </p>
                <p>
                  I have built end-to-end data science projects including a <strong className="text-white font-semibold">customer churn prediction system (0.84 ROC-AUC, 78.6% recall)</strong> backed by deep SQL revenue analytics, statistical validation, and an interactive Streamlit app, as well as an eye fundus computer vision classifier reaching 87% accuracy.
                </p>
                <p>
                  I excel at explaining analytical findings and quantifiable business impact clearly to both technical and non-technical stakeholders. Complemented by software engineering fundamentals in REST APIs, modern web tooling, and Python services, I am eager to contribute and continuously learn as a <strong className="text-cyan-400 font-semibold">Data Science Apprentice</strong> alongside senior data scientists, engineers, and analysts.
                </p>

                {/* Mini Metric Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
                  <div>
                    <span className="block font-mono text-xs text-slate-400 uppercase">Degree</span>
                    <span className="font-syne font-bold text-white text-base">B.Tech AI &amp; DS</span>
                  </div>
                  <div>
                    <span className="block font-mono text-xs text-slate-400 uppercase">Primary Stack</span>
                    <span className="font-syne font-bold text-cyan-400 text-base">Python • SQL • ML</span>
                  </div>
                  <div>
                    <span className="block font-mono text-xs text-slate-400 uppercase">Target Role</span>
                    <span className="font-syne font-bold text-white text-base">Data Science / ML</span>
                  </div>
                </div>
              </motion.div>

            </div>
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
                  <span>[03 / PORTFOLIO]</span>
                  <span className="h-px w-12 bg-cyan-400/30"></span>
                  <span>DATA SCIENCE &amp; ENGINEERING</span>
                </div>
                <h2 className="font-syne font-black text-4xl sm:text-5xl text-white tracking-tight">
                  FEATURED WORK
                </h2>
              </div>

              {/* Filter Tabs: All, Data Science, ML/AI, Software */}
              <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                {[
                  { id: 'all', label: 'All Projects', count: allProjects.length },
                  { id: 'data-science', label: 'Data Science & Analytics', count: allProjects.filter(p => p.category === 'data-science').length },
                  { id: 'ml-ai', label: 'Machine Learning & AI', count: allProjects.filter(p => p.category === 'ml-ai').length },
                  { id: 'software', label: 'Software Development', count: allProjects.filter(p => p.category === 'software').length },
                ].map(tab => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-2 cursor-pointer ${isActive
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

            {/* Projects Grid */}
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
                      {/* Media Banner */}
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
                              {project.icon ? <project.icon className="w-6 h-6" /> : <BarChart3 className="w-6 h-6" />}
                            </div>
                            <span className="font-mono text-[11px] text-cyan-300 uppercase tracking-wider">
                              {project.badge}
                            </span>
                          </div>
                        )}

                        {/* Top Category Tag */}
                        <div className="absolute top-2.5 left-2.5">
                          <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider bg-black/75 backdrop-blur-md text-white border border-white/10">
                            {project.category.replace('-', ' ')}
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

                      {/* Content Body */}
                      <div className="p-5 space-y-3">
                        <h3 className="text-lg font-syne font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                          {project.title}
                        </h3>

                        <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                          {project.description}
                        </p>

                        {/* Bullets if available */}
                        {project.bullets && project.bullets.length > 0 && (
                          <ul className="space-y-1.5 pt-1 text-[11px] text-slate-300 font-sans border-t border-white/5">
                            {project.bullets.slice(0, 2).map((bullet, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-1.5">
                                <span className="text-cyan-400 font-bold mt-0.5">•</span>
                                <span className="line-clamp-2">{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}

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

                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-cyan-400 text-black hover:bg-cyan-300 transition-all shadow-md shadow-cyan-400/10"
                        >
                          <span>LIVE DEMO</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      ) : (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          <span>VIEW DETAILS</span>
                          <ChevronRight className="w-3 h-3" />
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
        {/* SKILLS SECTION: Data Science & Software Stack Matrix */}
        {/* ======================================================== */}
        <section id="skills" className="py-28 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto space-y-12">

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 font-mono text-xs text-cyan-400 uppercase tracking-widest mb-3">
                  <span>[04 / ARSENAL]</span>
                  <span className="h-px w-12 bg-cyan-400/30"></span>
                  <span>CORE SKILLS &amp; TOOLKIT</span>
                </div>
                <h2 className="font-syne font-black text-4xl sm:text-5xl text-white tracking-tight">
                  DATA SCIENCE &amp; TECH STACK
                </h2>
              </div>
              <p className="text-slate-400 font-mono text-xs uppercase max-w-sm">
                Statistical methods, predictive algorithms, database analytics, and software engineering.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

              {/* Category 1: Data Analysis & Statistics */}
              <div className="p-7 rounded-3xl bg-[#101218] border border-white/10 hover:border-cyan-400/40 transition-all space-y-6">
                <div className="flex items-center gap-3 text-cyan-400">
                  <div className="p-2.5 rounded-2xl bg-cyan-500/10 border border-cyan-400/20">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-syne font-bold text-lg text-white">Data Analysis &amp; Stats</h3>
                    <span className="font-mono text-xs text-slate-400">EDA &amp; Hypothesis Testing</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    'Pandas', 'NumPy', 'Data Cleaning', 'Data Preprocessing',
                    'EDA', 'Welch’s t-test', 'Mann-Whitney U', 'Chi-Square Test',
                    'Hypothesis Testing', 'P-values', 'Probability'
                  ].map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/5 space-y-2">
                  <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">Key Metrics</span>
                  <span className="text-xs text-cyan-300 font-mono block">Cramér's V • Point-Biserial • Odds Ratios</span>
                </div>
              </div>

              {/* Category 2: Machine Learning & Modeling */}
              <div className="p-7 rounded-3xl bg-[#101218] border border-white/10 hover:border-blue-400/40 transition-all space-y-6">
                <div className="flex items-center gap-3 text-blue-400">
                  <div className="p-2.5 rounded-2xl bg-blue-500/10 border border-blue-400/20">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-syne font-bold text-lg text-white">Machine Learning</h3>
                    <span className="font-mono text-xs text-slate-400">Algorithms &amp; Pipelines</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    'Scikit-Learn', 'Logistic Regression', 'Random Forest',
                    'Gradient Boosting', 'XGBoost', 'Model Evaluation',
                    'ROC-AUC', 'Recall Optimization', 'PyTorch', 'Computer Vision'
                  ].map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/5 space-y-2">
                  <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">Explainability</span>
                  <span className="text-xs text-blue-300 font-mono block">SHAP • Feature Importances • Cross-Val</span>
                </div>
              </div>

              {/* Category 3: Databases & Visualization */}
              <div className="p-7 rounded-3xl bg-[#101218] border border-white/10 hover:border-emerald-400/40 transition-all space-y-6">
                <div className="flex items-center gap-3 text-emerald-400">
                  <div className="p-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-400/20">
                    <Database className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-syne font-bold text-lg text-white">Database &amp; Viz</h3>
                    <span className="font-mono text-xs text-slate-400">SQL &amp; Dashboards</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    'MySQL', 'SQLite', 'PostgreSQL', 'SQL Joins',
                    'Window Functions', 'DENSE_RANK', 'Cohort Analysis',
                    'Aggregations', 'Streamlit', 'Matplotlib', 'Seaborn'
                  ].map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/5 space-y-2">
                  <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">Capabilities</span>
                  <span className="text-xs text-emerald-300 font-mono block">Revenue Cohorts • Interactive Streamlit UI</span>
                </div>
              </div>

              {/* Category 4: Software Dev & Tools */}
              <div className="p-7 rounded-3xl bg-[#101218] border border-white/10 hover:border-purple-400/40 transition-all space-y-6">
                <div className="flex items-center gap-3 text-purple-400">
                  <div className="p-2.5 rounded-2xl bg-purple-500/10 border border-purple-400/20">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-syne font-bold text-lg text-white">Software Dev &amp; Tools</h3>
                    <span className="font-mono text-xs text-slate-400">Development Workflow</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    'Python', 'SQL', 'TypeScript / JS', 'FastAPI / Django',
                    'REST APIs', 'Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Docker'
                  ].map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/5 space-y-2">
                  <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">Engineering</span>
                  <span className="text-xs text-purple-300 font-mono block">Clean Code • Modular Pipelines • Versioning</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* EDUCATION & CERTIFICATIONS: Academic Foundation & Credentials */}
        {/* ======================================================== */}
        <section id="education" className="py-28 px-4 sm:px-6 lg:px-8 border-b border-white/5 relative">
          <div className="max-w-7xl mx-auto space-y-12">

            <div className="flex items-center gap-3 font-mono text-xs text-cyan-400 uppercase tracking-widest mb-3">
              <span>[05 / CREDENTIALS]</span>
              <span className="h-px w-12 bg-cyan-400/30"></span>
              <span>ACADEMIC FOUNDATION &amp; CERTIFICATIONS</span>
            </div>

            {/* Degree Card */}
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-white/[0.04] to-transparent border border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">

              <div className="space-y-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono bg-cyan-400/10 border border-cyan-400/30 text-cyan-300">
                  ARTIFICIAL INTELLIGENCE &amp; DATA SCIENCE
                </span>
                <h3 className="font-syne font-black text-3xl sm:text-4xl text-white">
                  Bachelor of Technology (B.Tech)
                </h3>
                <p className="text-base text-slate-300 font-medium">
                  KPR Institute of Engineering and Technology <span className="text-cyan-400">•</span> Coimbatore, Tamil Nadu
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    'Data Science', 'Machine Learning', 'Probability & Statistics',
                    'Database Management Systems (DBMS)', 'Data Structures & Algorithms', 'Python'
                  ].map(c => (
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
                    7.1 / 10.0
                  </span>
                  <span className="block text-xs font-mono text-slate-400 mt-1">2021 — 2025</span>
                </div>
              </div>

            </div>

            {/* Certifications Grid */}
            <div className="space-y-6">
              <h4 className="font-syne font-bold text-xl text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-400" />
                <span>Professional Certifications</span>
              </h4>

              <div className="grid md:grid-cols-3 gap-6">

                <div className="p-6 rounded-2xl bg-[#101218] border border-white/10 hover:border-cyan-400/40 transition-all space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                      NPTEL
                    </span>
                    <Award className="w-4 h-4 text-cyan-400" />
                  </div>
                  <h5 className="font-syne font-bold text-white text-base">
                    Data Analytics with Python
                  </h5>
                  <p className="text-xs text-slate-400 font-mono">
                    NPTEL National Certification
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#101218] border border-white/10 hover:border-blue-400/40 transition-all space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-blue-400/10 text-blue-300 border border-blue-400/20">
                      NASSCOM
                    </span>
                    <Award className="w-4 h-4 text-blue-400" />
                  </div>
                  <h5 className="font-syne font-bold text-white text-base">
                    Acquiring Data
                  </h5>
                  <p className="text-xs text-slate-400 font-mono">
                    Nasscom FutureSkills Certification
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#101218] border border-white/10 hover:border-emerald-400/40 transition-all space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-emerald-400/10 text-emerald-300 border border-emerald-400/20">
                      GREAT LEARNING
                    </span>
                    <Award className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h5 className="font-syne font-bold text-white text-base">
                    Data Science Projects
                  </h5>
                  <p className="text-xs text-slate-400 font-mono">
                    Great Learning Academy
                  </p>
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
                <span>[06 / OUTREACH]</span>
                <span className="h-px w-12 bg-cyan-400/30"></span>
                <span>GET IN TOUCH</span>
              </div>
              <h2 className="font-syne font-black text-5xl sm:text-6xl text-white tracking-tight">
                LET'S TALK <span className="text-stroke">DATA &amp; CODE</span>.
              </h2>
              <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
                Seeking a Data Science Apprentice or looking to build impactful machine learning solutions? Reach out directly.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-[#101218] border border-white/10 space-y-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

                {/* Email */}
                <a
                  href="mailto:srivigneshwaran7103@gmail.com"
                  className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-4 transition-all hover:border-cyan-400/40 group"
                >
                  <div className="p-3 rounded-xl bg-cyan-400/10 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="font-mono text-[11px] text-slate-400 uppercase block">Direct Email</span>
                    <span className="text-white font-syne font-bold text-xs truncate block" title="srivigneshwaran7103@gmail.com">
                      srivigneshwaran7103@gmail.com
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+917708129324"
                  className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-4 transition-all hover:border-emerald-400/40 group"
                >
                  <div className="p-3 rounded-xl bg-emerald-400/10 text-emerald-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-slate-400 uppercase block">Phone / Mobile</span>
                    <span className="text-white font-syne font-bold text-xs block">
                      +91 7708129324
                    </span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/srivigneshwaran-i-115163229"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-4 transition-all hover:border-blue-400/40 group sm:col-span-2 lg:col-span-1"
                >
                  <div className="p-3 rounded-xl bg-blue-400/10 text-blue-400 group-hover:scale-110 transition-transform">
                    <FaLinkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-slate-400 uppercase block">Connect on LinkedIn</span>
                    <span className="text-white font-syne font-bold text-xs block">
                      srivigneshwaran-i
                    </span>
                  </div>
                </a>
              </div>

              <div className="pt-6 border-t border-white/10 text-center">
                <a
                  href="mailto:srivigneshwaran7103@gmail.com?subject=Data%20Science%20Opportunity"
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
            © {new Date().getFullYear()} SRIVIGNESHWARAN I • DATA SCIENCE &amp; SOFTWARE DEV.
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
