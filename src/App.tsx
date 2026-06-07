
import { Mail, ExternalLink, Code2, Database, Layout, Terminal, Server, Award, ChevronRight } from 'lucide-react';
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
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
            Srivigneshwaran I
          </span>
          <div className="flex gap-4">
            <a href="https://github.com/SRIVIGNESHWARAN" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-600 transition-colors">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/SRIVIGNESHWARANI" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-600 transition-colors">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="mailto:srivigneshwaran7103@gmail.com" className="text-slate-500 hover:text-indigo-600 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
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
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Srivigneshwaran</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Software Developer & Data Science Enthusiast. I build scalable web applications and explore the realms of machine learning and deep learning.
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <a href="mailto:srivigneshwaran7103@gmail.com" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-indigo-200 flex items-center gap-2">
                <Mail className="w-4 h-4" /> Get In Touch
              </a>
              <a href="https://dharaneesh.vercel.app" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-slate-50 text-slate-700 px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 shadow-md border border-slate-200 flex items-center gap-2">
                <ExternalLink className="w-4 h-4" /> View Portfolio
              </a>
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section className="bg-white py-24 border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-12"
            >
              <div className="flex items-center gap-4 mb-12">
                <Terminal className="w-8 h-8 text-indigo-600" />
                <h2 className="text-3xl font-bold text-slate-900">Experience</h2>
              </div>

              <motion.div variants={fadeInUp} className="relative pl-8 md:pl-0">
                <div className="md:grid md:grid-cols-4 md:gap-8 border-l-2 border-indigo-100 md:border-l-0">
                  <div className="md:text-right pb-4 md:pb-0 relative">
                    <div className="hidden md:block absolute right-[-21px] top-1 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white" />
                    <div className="md:hidden absolute left-[-41px] top-1 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white" />
                    <p className="text-indigo-600 font-semibold">June 2025 – May 2026</p>
                    <p className="text-slate-500 text-sm">Coimbatore, India</p>
                  </div>
                  <div className="md:col-span-3 md:border-l-2 md:border-indigo-100 md:pl-8">
                    <h3 className="text-xl font-bold text-slate-900">Software Developer</h3>
                    <h4 className="text-lg font-medium text-slate-700 mb-4">Tenext Technologies</h4>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                        <span>Architected and optimized scalable backend services using <strong>Node.js</strong> and <strong>Express.js</strong> for a US-based SaaS referral platform, improving API response times by 30%.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                        <span>Engineered a high-volume CSV bulk rewards processing pipeline handling 1M+ records with DynamoDB, reducing processing time by 40%.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                        <span>Spearheaded integration of <strong>AWS DynamoDB, S3, CloudWatch</strong> alongside Elasticsearch and Kibana for high-throughput data persistence and real-time monitoring.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="relative pl-8 md:pl-0">
                <div className="md:grid md:grid-cols-4 md:gap-8 border-l-2 border-indigo-100 md:border-l-0">
                  <div className="md:text-right pb-4 md:pb-0 relative">
                    <div className="hidden md:block absolute right-[-21px] top-1 w-4 h-4 rounded-full bg-slate-300 border-4 border-white" />
                    <div className="md:hidden absolute left-[-41px] top-1 w-4 h-4 rounded-full bg-slate-300 border-4 border-white" />
                    <p className="text-slate-600 font-semibold">Jun 2023</p>
                  </div>
                  <div className="md:col-span-3 md:border-l-2 md:border-indigo-100 md:pl-8">
                    <h3 className="text-xl font-bold text-slate-900">App Development Intern</h3>
                    <h4 className="text-lg font-medium text-slate-700 mb-4">Accent Techno Soft</h4>
                    <p className="text-slate-600">
                      Gained valuable experience in the field of app development and cross-platform mobile application creation using <strong>Flutter</strong>.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-12">
              <Code2 className="w-8 h-8 text-indigo-600" />
              <h2 className="text-3xl font-bold text-slate-900">Featured Projects</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-indigo-200 transition-all group"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">DSA Visualizer & Python Playground</h3>
                <p className="text-indigo-600 font-medium mb-4">Full Stack Educational Platform</p>
                <p className="text-slate-600 mb-6">
                  Designed and built a full-stack educational platform featuring structured algorithm roadmaps, interactive study guides, and persistent progress tracking. Integrated dynamic algorithm animations and live in-browser Python coding.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">React</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">Node.js</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">Python</span>
                </div>
              </motion.div>

              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-indigo-200 transition-all group"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">Diabetic Retinopathy Detection</h3>
                <p className="text-indigo-600 font-medium mb-4">Machine Learning Web Application</p>
                <p className="text-slate-600 mb-6">
                  Developed a machine learning-powered web application that automates the screening of diabetic retinopathy from eye fundus images. Designed a user-friendly interface for immediate diagnostic predictions.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">Python</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">Machine Learning</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">Streamlit</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="bg-slate-900 text-white py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-16">
              <Database className="w-8 h-8 text-indigo-400" />
              <h2 className="text-3xl font-bold">Technical Expertise</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-indigo-400 mb-4">
                  <Layout className="w-6 h-6" />
                  <h3 className="text-xl font-semibold text-white">Frontend & Languages</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['Python', 'JavaScript', 'TypeScript', 'Java', 'React', 'Tailwind CSS', 'HTML5', 'CSS3'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-slate-800 rounded-lg text-slate-300 font-medium hover:bg-slate-700 hover:text-white transition-colors cursor-default border border-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3 text-indigo-400 mb-4">
                  <Server className="w-6 h-6" />
                  <h3 className="text-xl font-semibold text-white">Backend & Database</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['Node.js', 'Express.js', 'RESTful APIs', 'MongoDB', 'DynamoDB', 'SQL'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-slate-800 rounded-lg text-slate-300 font-medium hover:bg-slate-700 hover:text-white transition-colors cursor-default border border-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3 text-indigo-400 mb-4">
                  <Award className="w-6 h-6" />
                  <h3 className="text-xl font-semibold text-white">Cloud & DevOps</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['AWS (EC2, S3, ECS)', 'Docker', 'GitHub Actions', 'CircleCI', 'ELK Stack', 'Git'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-slate-800 rounded-lg text-slate-300 font-medium hover:bg-slate-700 hover:text-white transition-colors cursor-default border border-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Education</h2>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Bachelor of Technology (B.Tech)</h3>
                  <p className="text-indigo-600 font-medium">Artificial Intelligence and Data Science</p>
                  <p className="text-slate-700 mt-2">KPR Institute of Engineering and Technology</p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-slate-900 font-bold bg-slate-100 px-4 py-2 rounded-lg inline-block">CGPA 7.0</p>
                  <p className="text-slate-500 mt-2">2021 - 2025 | Coimbatore</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 font-medium">
            © {new Date().getFullYear()} Srivigneshwaran I. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/SRIVIGNESHWARAN" className="text-slate-400 hover:text-indigo-600 transition-colors font-medium">GitHub</a>
            <a href="https://www.linkedin.com/in/srivigneshwaran-i-115163229/" className="text-slate-400 hover:text-indigo-600 transition-colors font-medium">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
