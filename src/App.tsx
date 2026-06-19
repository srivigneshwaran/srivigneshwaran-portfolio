import { useState, useEffect } from 'react';
import { Mail, ExternalLink, Code2, Database, Layout, Terminal, Server, Award, ChevronRight, Moon, Sun, Download, User, Trophy, MessageSquare, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-indigo-500 selection:text-white transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Srivigneshwaran I
          </span>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all hover:scale-105">About</a>
            <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')} className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all hover:scale-105">Experience</a>
            <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all hover:scale-105">Projects</a>
            <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all hover:scale-105">Skills</a>
          </div>

          <div className="flex gap-4 items-center">
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors focus:outline-none">
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a href="https://github.com/srivigneshwaran" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hidden sm:block">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/srivigneshwaran-i-115163229" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hidden sm:block">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <button onClick={(e) => scrollToSection(e, 'contact')} className="hidden sm:flex text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Mail className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-12">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Srivigneshwaran</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Software Developer specializing in building robust, scalable web applications and backend systems, with a foundational background in AI and data science.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <button onClick={(e) => scrollToSection(e, 'contact')} className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-indigo-200 dark:shadow-none flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" /> Get In Touch
              </button>
              <a href="/resume.pdf" download className="w-full sm:w-auto bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 shadow-md border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-2">
                <Download className="w-4 h-4" /> Download Resume
              </a>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-white dark:bg-slate-900 py-24 border-y border-slate-200 dark:border-slate-800 scroll-mt-16 transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-8">
              <User className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">About Me</h2>
            </div>
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed space-y-6"
            >
              <p>
                I am a highly motivated Software Developer with a strong foundation in Artificial Intelligence and Data Science. My passion lies in architecting robust backend systems, building intuitive frontend interfaces, and leveraging data-driven approaches to solve complex problems.
              </p>
              <p>
                Throughout my academic and professional journey, I have cultivated a deep understanding of modern web development, cloud infrastructure, and machine learning. I thrive in dynamic environments where I can continuously learn and apply emerging technologies to create impactful solutions.
              </p>

            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 scroll-mt-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-12"
            >
              <div className="flex items-center gap-4 mb-12">
                <Terminal className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Experience</h2>
              </div>

              <motion.div variants={fadeInUp} className="relative pl-8 md:pl-0">
                <div className="md:grid md:grid-cols-4 md:gap-8 border-l-2 border-indigo-100 dark:border-indigo-900/50 md:border-l-0">
                  <div className="md:text-right pb-4 md:pb-0 relative">
                    <div className="hidden md:block absolute right-[-21px] top-1 w-4 h-4 rounded-full bg-indigo-600 border-4 border-slate-50 dark:border-slate-950" />
                    <div className="md:hidden absolute left-[-41px] top-1 w-4 h-4 rounded-full bg-indigo-600 border-4 border-slate-50 dark:border-slate-950" />
                    <p className="text-indigo-600 dark:text-indigo-400 font-semibold">Jul 2025 – Present</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Coimbatore, India</p>
                  </div>
                  <div className="md:col-span-3 md:border-l-2 md:border-indigo-100 dark:border-indigo-900/50 md:pl-8">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Software Developer</h3>
                    <h4 className="text-lg font-medium text-slate-700 dark:text-slate-300">Tenext Technologies</h4>
                    <p className="text-sm font-medium text-indigo-500 dark:text-indigo-400 mb-4">CLIENT: FRIENDBUY, USA — REFERRAL & LOYALTY SaaS PLATFORM</p>
                    <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5" />
                        <span>Architected and optimized scalable backend services using <strong className="text-slate-800 dark:text-slate-200">Node.js</strong> and <strong className="text-slate-800 dark:text-slate-200">Express.js</strong> for a US-based SaaS referral and loyalty platform, improving API response times by 30% and supporting 500K+ daily requests.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5" />
                        <span>Engineered a high-volume CSV bulk rewards processing pipeline handling 1M+ records with robust validation, asynchronous processing, and DynamoDB updates, reducing processing time by 40%.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5" />
                        <span>Enforced role-based access control (RBAC) across 3 distinct user roles and architected auto-scaling workloads on AWS ECS, achieving 99.9% uptime and handling traffic surges up to 3x without performance degradation.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5" />
                        <span>Spearheaded integration of AWS DynamoDB, S3, and CloudWatch alongside Elasticsearch and Kibana for high-throughput data persistence, real-time monitoring, and full-stack observability, reducing incident resolution time by 35%.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5" />
                        <span>Engineered a dynamic announcement and notification system with scheduling, lifecycle controls, and event-driven analytics tracking impressions, clicks, and CTR across 10K+ active merchant campaigns, driving a 25% increase in user engagement and improving conversion rates by 20%.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-white dark:bg-slate-900 py-24 border-y border-slate-200 dark:border-slate-800 scroll-mt-16 transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-12">
              <Code2 className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Featured Projects</h2>
            </div>

            <div className="flex flex-col gap-12">
              {/* Project 1 */}
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-slate-50 dark:bg-[#111827] rounded-2xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 grid md:grid-cols-2 transition-all hover:shadow-xl dark:hover:shadow-indigo-900/20 hover:border-indigo-200 dark:hover:border-indigo-800 group"
              >
                {/* Image Placeholder */}
                <div className="bg-slate-200 dark:bg-slate-800/50 min-h-[250px] md:min-h-full flex items-center justify-center p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 mix-blend-overlay"></div>
                  <Code2 className="w-16 h-16 text-slate-400 dark:text-slate-600 opacity-50 group-hover:scale-110 transition-transform duration-500" />
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">DSA Visualizer & Python Playground</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                    A full-stack educational platform featuring structured algorithm roadmaps, an interactive DSA Visualizer for dynamic animations, and an integrated Python Playground for live in-browser coding.
                  </p>
                  <div className="flex items-center gap-6 mt-auto">
                    <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      <FaGithub className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Project 2 */}
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-slate-50 dark:bg-[#111827] rounded-2xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 grid md:grid-cols-2 transition-all hover:shadow-xl dark:hover:shadow-indigo-900/20 hover:border-indigo-200 dark:hover:border-indigo-800 group"
              >
                {/* Content - Comes first in HTML, but order-2 on mobile, order-1 on desktop */}
                <div className="p-8 md:p-10 flex flex-col justify-center order-2 md:order-1">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Diabetic Retinopathy Detection</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                    A machine learning-powered web application that automates the screening of diabetic retinopathy from eye fundus images, providing immediate, staged diagnostic predictions.
                  </p>
                  <div className="flex items-center gap-6 mt-auto">
                    <a href="https://github.com/srivigneshwaran/Diabetic_Retinopathy_using_RESNET" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      <FaGithub className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>

                {/* Image Placeholder - order-1 on mobile, order-2 on desktop */}
                <div className="bg-slate-200 dark:bg-slate-800/50 min-h-[250px] md:min-h-full flex items-center justify-center p-8 relative overflow-hidden order-1 md:order-2 border-b md:border-b-0 md:border-l border-slate-200 dark:border-slate-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 mix-blend-overlay"></div>
                  <Database className="w-16 h-16 text-slate-400 dark:text-slate-600 opacity-50 group-hover:scale-110 transition-transform duration-500" />
                </div>
              </motion.div>

              {/* Project 3 */}
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-slate-50 dark:bg-[#111827] rounded-2xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 grid md:grid-cols-2 transition-all hover:shadow-xl dark:hover:shadow-indigo-900/20 hover:border-indigo-200 dark:hover:border-indigo-800 group"
              >
                {/* Image Container */}
                <div className="bg-slate-200 dark:bg-slate-800/50 min-h-[250px] md:min-h-full flex items-center justify-center relative overflow-hidden border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800">
                  <img src="/srimurugan.png" alt="Sri Murugan Tapes Corporate Website" className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Sri Murugan Tapes Corporate Website</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                    A responsive, component-based corporate website for a manufacturing business built with React, Vite, and Tailwind CSS. Features a premium design system with CSS micro-animations and smooth scrolling.
                  </p>
                  <div className="flex items-center gap-6 mt-auto">
                    <a href="https://github.com/srivigneshwaran/sriMuruganTapes-portfolio" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      <FaGithub className="w-6 h-6" />
                    </a>
                    <a href="https://srimurugantapes.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-slate-900 dark:bg-slate-950 border-y border-slate-800 text-white py-24 scroll-mt-16 transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-16">
              <Database className="w-8 h-8 text-indigo-400" />
              <h2 className="text-3xl font-bold">Technical Expertise</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {/* Column 1 */}
              <div className="space-y-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-indigo-400 mb-4">
                    <Code2 className="w-6 h-6" />
                    <h3 className="text-xl font-semibold text-white">Languages</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL'].map((skill) => (
                      <span key={skill} className="px-4 py-2 bg-slate-800/50 rounded-lg text-slate-300 font-medium hover:bg-indigo-500/20 hover:text-indigo-300 transition-colors cursor-default border border-slate-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-indigo-400 mb-4">
                    <Layout className="w-6 h-6" />
                    <h3 className="text-xl font-semibold text-white">Frontend</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {['HTML5', 'CSS3', 'Tailwind CSS', 'React', 'Component Libraries', 'UI Frameworks'].map((skill) => (
                      <span key={skill} className="px-4 py-2 bg-slate-800/50 rounded-lg text-slate-300 font-medium hover:bg-indigo-500/20 hover:text-indigo-300 transition-colors cursor-default border border-slate-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-indigo-400 mb-4">
                    <Server className="w-6 h-6" />
                    <h3 className="text-xl font-semibold text-white">Backend</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {['Node.js', 'Express.js', 'RESTful API Design', 'Authentication', 'Authorization'].map((skill) => (
                      <span key={skill} className="px-4 py-2 bg-slate-800/50 rounded-lg text-slate-300 font-medium hover:bg-indigo-500/20 hover:text-indigo-300 transition-colors cursor-default border border-slate-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-indigo-400 mb-4">
                    <Database className="w-6 h-6" />
                    <h3 className="text-xl font-semibold text-white">Databases</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {['MongoDB', 'DynamoDB'].map((skill) => (
                      <span key={skill} className="px-4 py-2 bg-slate-800/50 rounded-lg text-slate-300 font-medium hover:bg-indigo-500/20 hover:text-indigo-300 transition-colors cursor-default border border-slate-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Column 3 */}
              <div className="space-y-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-indigo-400 mb-4">
                    <Award className="w-6 h-6" />
                    <h3 className="text-xl font-semibold text-white">Cloud & DevOps</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {['AWS (EC2, S3, ECS, CloudWatch)', 'Docker', 'GitHub Actions', 'CircleCI'].map((skill) => (
                      <span key={skill} className="px-4 py-2 bg-slate-800/50 rounded-lg text-slate-300 font-medium hover:bg-indigo-500/20 hover:text-indigo-300 transition-colors cursor-default border border-slate-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex flex-col gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-indigo-400 mb-3">Monitoring & Logging</h3>
                      <div className="flex flex-wrap gap-3">
                        {['ELK Stack', 'OpenSearch'].map((skill) => (
                          <span key={skill} className="px-4 py-2 bg-slate-800/50 rounded-lg text-slate-300 font-medium hover:bg-indigo-500/20 hover:text-indigo-300 transition-colors cursor-default border border-slate-700">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-indigo-400 mb-3">Development Practices</h3>
                      <div className="flex flex-wrap gap-3">
                        {['Git', 'Agile (Scrum)', 'Code Reviews', 'MVC Architecture'].map((skill) => (
                          <span key={skill} className="px-4 py-2 bg-slate-800/50 rounded-lg text-slate-300 font-medium hover:bg-indigo-500/20 hover:text-indigo-300 transition-colors cursor-default border border-slate-700">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Coursework & Education Section */}
        <section id="education" className="bg-white dark:bg-slate-900 py-24 border-y border-slate-200 dark:border-slate-800 scroll-mt-16 transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Coursework</h2>
              <div className="flex flex-wrap gap-4">
                {['Data Structures & Algorithms', 'Full Stack Web Development', 'Object-Oriented Programming'].map((course) => (
                  <div key={course} className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-6 py-3 rounded-full font-medium border border-indigo-100 dark:border-indigo-800 transition-colors">
                    {course}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Education</h2>
              <div className="bg-slate-50 dark:bg-slate-950 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-800 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Bachelor of Technology (B.Tech)</h3>
                    <p className="text-slate-700 dark:text-slate-300 mt-2">KPR Institution of Engineering and Technology</p>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="text-slate-900 dark:text-slate-100 font-bold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-lg inline-block">CGPA 7.0</p>
                    <p className="text-slate-500 dark:text-slate-400 mt-2">2021 - 2025 | Coimbatore, Tamil Nadu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-24 scroll-mt-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <MessageSquare className="w-10 h-10 text-indigo-600 dark:text-indigo-400 mx-auto" />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Let's Connect</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Have a question or want to work together? Leave a message below.
              </p>
            </div>

            <form className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-800 space-y-6 transition-colors duration-300">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors resize-none" placeholder="Your message here..."></textarea>
              </div>
              <button type="button" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            © {new Date().getFullYear()} Srivigneshwaran I. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/srivigneshwaran" className="text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium">GitHub</a>
            <a href="https://www.linkedin.com/in/srivigneshwaran-i-115163229" className="text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
