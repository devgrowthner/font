'use client';

import React, { useState } from 'react';
import { ChevronRight, CheckCircle2, Code, Target, Briefcase, Award, ArrowDown, Sparkles, Boxes } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('AI');
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      name: "CoreliaOS",
      tagline: "Multi-Agent AI System",
      situation: "Teams struggled to find critical information scattered across emails, drives, and documents.",
      task: "Design an AI assistant that connects to Gmail and Google Drive to organize, search, and brief users automatically.",
      work: "Built a full‑stack multi‑agent platform with specialized legal, finance, recruitment, and email automation agents on top of React, Django, and modern AI tooling.",
      solution: "CoreliaOS centralizes knowledge and automates email workflows, giving teams faster access to answers and higher productivity.",
      techStack: ["React.js", "Django", "Qdrant", "AgnoAI", "OpenAI", "LangGraph", "Google Auth", "Tailwind CSS"],
      areasOfWork: [
        "Multi-Agent AI Development",
        "Email Automation",
        "Knowledge Base Integration",
        "Full-Stack Development",
        "UI/UX Design"
      ],
      gradient: "from-[#719334] to-[#5a7429]",
      accentColor: "#719334",
      logo: "/projectslogos/coreliaOS.jpeg",
      category: "AI"
    },
    {
      name: "Opporture",
      tagline: "AI-Driven Unbiased News Platform",
      situation: "Readers lacked a single place to consume news synthesized without political or editorial bias.",
      task: "Create an AI platform that aggregates news, analyzes sentiment, and generates balanced, multi‑source summaries.",
      work: "Developed a React and Node.js solution with News APIs, OpenAI content generation, NLP sentiment analysis, and AWS deployment for scalable processing.",
      solution: "Opporture delivers moderated, unbiased news feeds that help users quickly understand complex stories from multiple perspectives.",
      techStack: ["React", "Node.js", "Express.js", "MongoDB", "Python", "Docker", "AWS EC2", "ActiveMQ", "OpenAI", "NLP", "ChromaDB"],
      areasOfWork: [
        "AI Content Generation",
        "Sentiment Analysis",
        "Content Moderation",
        "Data Aggregation & Processing",
        "Full-Stack Development",
        "Cloud Deployment"
      ],
      gradient: "from-purple-600 to-blue-600",
      accentColor: "#9333ea",
      category: "AI"
    },
    {
      name: "Smart Aleck",
      tagline: "RAG-Based Legal Assistant",
      situation: "Citizens and legal professionals needed quick access to trusted Georgian law without navigating complex government sites.",
      task: "Build a legal assistant that ingests official laws and answers questions with reliable, up‑to‑date references.",
      work: "Implemented a LangChain and Python RAG pipeline that scrapes, embeds, and retrieves legal texts for LLM‑powered, law‑aligned answers.",
      solution: "Smart Aleck provides fast, authoritative responses that reduce research time and improve access to compliant legal information.",
      techStack: ["LangChain", "OpenAI", "Python", "RAG", "Web Scraping", "Vector Embeddings"],
      areasOfWork: [
        "RAG Development",
        "Legal AI",
        "Web Scraping & Ingestion",
        "Natural Language Processing",
        "Knowledge Base Architecture",
        "AI Chatbot Development"
      ],
      gradient: "from-indigo-600 to-purple-600",
      accentColor: "#6366f1",
      logo: "/projectslogos/smart-alek.jpeg",
      category: "AI"
    },
    {
      name: "Arosys",
      tagline: "LeadAngel Documentation Assistant",
      situation: "LeadAngel users struggled to quickly find answers buried inside long‑form product documentation.",
      task: "Create a documentation assistant that surfaces precise answers and relevant visuals directly from official docs.",
      work: "Built a LangChain‑based RAG system that ingests docs.leadangel.com, builds embeddings, and serves LLM‑backed responses with contextual snippets and images.",
      solution: "Arosys turns static documentation into an interactive assistant, lowering support load and improving user self‑service.",
      techStack: ["LangChain", "OpenAI", "Python", "RAG", "Web Scraping", "Vector Embeddings", "Image Processing"],
      areasOfWork: [
        "RAG Development",
        "Documentation AI",
        "Web Scraping & Ingestion",
        "Conversational AI",
        "Knowledge Base Architecture",
        "Multi-Modal AI"
      ],
      gradient: "from-cyan-600 to-blue-600",
      accentColor: "#0891b2",
      logo: "/projectslogos/arusos.png",
      category: "AI"
    },
    {
      name: "Prediction Analysis",
      tagline: "AI-Powered Stock Prediction Platform",
      situation: "Traders needed clearer, data‑driven signals instead of manual, time‑consuming stock analysis.",
      task: "Develop a platform that forecasts stock prices and visualizes trends using historical market data.",
      work: "Created a Django and Python web app with LSTM models in TensorFlow, interactive charts, and a containerized deployment for reliable performance.",
      solution: "Prediction Analysis delivers daily ML‑based forecasts and clean visualizations, helping users make more confident investment decisions.",
      techStack: ["Django", "Python", "TensorFlow", "LSTM", "Bootstrap", "Docker", "Machine Learning", "Data Visualization"],
      areasOfWork: [
        "Machine Learning Development",
        "Time-Series Prediction",
        "Stock Market Analysis",
        "Data Visualization",
        "Full-Stack Development",
        "Docker Containerization"
      ],
      gradient: "from-emerald-600 to-teal-600",
      accentColor: "#10b981",
      category: "AI"
    },

    // ==========================================================
    // ERP PROJECTS
    // ==========================================================
    {
      name: "Swees",
      tagline: "Customization Odoo Swees",
      situation: "A leading food manufacturing company needed a robust system to track inventory, manage orders, monitor sales, and calculate sales commissions.",
      task: "Build a scalable system for real-time data tracking, automate manual workflows to reduce errors, and provide tools for accurate sales commissions.",
      work: "Cloned Odoo Community source code, installed and configured PostgreSQL, tailored the application for business workflows, and ensured server security.",
      solution: "Real-time access to inventory, order tracking, and sales data with an automated commission system that ensures transparency and boosts employee satisfaction.",
      techStack: ["Odoo Community", "PostgreSQL", "Pycharm IDE", "Fail2ban"],
      areasOfWork: [
        "Odoo Implementation",
        "Inventory Tracking",
        "Order Management",
        "Sales Commission",
        "Workflow Automation"
      ],
      gradient: "from-amber-600 to-orange-600",
      accentColor: "#d97706",
      logo: "/projectslogos/CustomizationOdooSwees.webp",
      category: "ERP",
      erpTechnology: "Odoo"
    },
    {
      name: "LYWO",
      tagline: "Enterprise Recruitment iERP",
      situation: "A consulting firm specializing in recruitment processes needed an application to streamline workflows, enhance user experience, and support their mission of improving hiring efficiency.",
      task: "Develop a comprehensive web and mobile application for four key personas: Candidates, Recruiters, Evaluators, and Product Admins.",
      work: "Developed responsive interfaces using ReactJS, scalable REST APIs using NodeJS, microservices using Spring Boot, integrated PostgreSQL for database, and Kafka for real-time streaming.",
      solution: "Successfully streamlined recruitment workflows, enhanced user experience with real-time features, and improved overall hiring efficiency.",
      techStack: ["Node.js", "Kafka", "Spring Boot", "PostgreSQL", "ReactJS", "Redis", "Kubernetes"],
      areasOfWork: [
        "iERP",
        "Web & Mobile Development",
        "Workflow Automation",
        "API Development",
        "Microservices Architecture"
      ],
      gradient: "from-slate-600 to-zinc-700",
      accentColor: "#475569",
      category: "ERP",
      erpTechnology: "Custom iERP"
    },
    {
      name: "Thales",
      tagline: "Enterprise Planning Solutions",
      situation: "A global leader in Aeronautics & Space and Cybersecurity needed a scalable and flexible application infrastructure to integrate with existing systems.",
      task: "Develop, test, and deploy a robust application on an on-premise server over the Cloud with extensible APIs for flexible infrastructure.",
      work: "Built a Spring Boot application with an Angular X front-end, optimized decision-making with OptaPlanner, and implemented PL SQL for efficient data handling.",
      solution: "Delivered a highly secure, scalable application with extensible APIs for seamless integration and complex optimization problem solving.",
      techStack: ["Java", "Spring Boot", "OptaPlanner", "Angular X", "PL SQL"],
      areasOfWork: [
        "iERP",
        "Planning Solutions",
        "Application Development",
        "Database Management",
        "On-Premise Deployment"
      ],
      gradient: "from-lime-600 to-green-700",
      accentColor: "#65a30d",
      logo: "/projectslogos/Thales.webp",
      category: "ERP",
      hideNameText: true,
      erpTechnology: "OptaPlanner / Custom ERP"
    },
    {
      name: "SecureNow",
      tagline: "Enterprise ERP Web Application",
      situation: "An insurance specialist needed ERP software to solve challenges with location-enabled attendance, leave management, and multiple insurer API integration.",
      task: "Deliver a customized web and mobile application to improve operational efficiency and integrate multiple insurers onto a single platform.",
      work: "Developed a custom web/mobile app using Angular.js, Node.js, and MongoDB, integrating location-based attendance, leave management, and an insurer API calculator feature.",
      solution: "Improved operational efficiency and business performance with a customized platform that successfully met all client requirements.",
      techStack: ["Angular", "DevOps", "Node.js", "MongoDB", "MySQL", "Java", "Groovy & Grails"],
      areasOfWork: [
        "Web Development",
        "Amazon Cloud",
        "iERP",
        "Chat bot",
        "Customer Relationship Management",
        "Hybrid Apps"
      ],
      gradient: "from-cyan-600 to-blue-600",
      accentColor: "#0891b2",
      logo: "/projectslogos/SecureNow.webp",
      category: "ERP",
      hideNameText: true,
      erpTechnology: "Custom Insurance ERP"
    }
  ];

  // Filter projects by the active category (AI / ERP)
  const filteredProjects = projects.filter((p) => p.category === activeCategory);
  const currentProject = filteredProjects[activeProject] || filteredProjects[0];

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setActiveProject(0);
  };

  return (
    <section className="py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-gray-50 to-slate-50 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200/60 text-xs sm:text-sm font-semibold mb-4 sm:mb-5 shadow-sm text-brand-green">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            Feature Projects
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-foreground mb-4 sm:mb-6 leading-tight">
            Our Latest{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(to right, #719334, #719334, #719334)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              AI Innovations
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed font-body">
            Proven pathways to AI and ERP-powered business transformation
          </p>
        </div>

        {/* Category Toggle: AI / ERP */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-flex gap-1.5 p-1.5 bg-white rounded-full shadow-lg border border-gray-200/60">
            <button
              onClick={() => handleCategoryChange('AI')}
              className={`inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                activeCategory === 'AI'
                  ? 'bg-[#719334] text-white shadow-md'
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              AI
            </button>
            <button
              onClick={() => handleCategoryChange('ERP')}
              className={`inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                activeCategory === 'ERP'
                  ? 'bg-[#719334] text-white shadow-md'
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              <Boxes className="w-4 h-4" />
              ERP
            </button>
          </div>
        </div>

        {/* Project Navigation Tabs (filtered by category) */}
        <div className="mb-6 sm:mb-8 overflow-x-auto scrollbar-hide px-2">
          <div className="flex justify-start sm:justify-center">
            <div className="inline-flex gap-2 sm:gap-3 p-1.5 sm:p-2 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/60">
              {filteredProjects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                    activeProject === index
                      ? 'bg-[#719334] text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {project.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project Content */}
        {currentProject && (
          <div className="max-w-6xl mx-auto">
            {/* Project Name Above Card */}
            <div className="mb-4 px-2">
                  {currentProject.logo && currentProject.name === "Arosys" ? (
                    <div className="flex items-center gap-4">
                      <img
                        src={currentProject.logo}
                        alt={currentProject.name}
                        className="h-12 sm:h-16 md:h-20 object-contain"
                      />
                    </div>
                  ) : currentProject.logo ? (
                    <div>
                      <div className="flex items-center gap-4">
                        <img
                          src={currentProject.logo}
                          alt={currentProject.name}
                          className="h-12 sm:h-16 md:h-20 object-contain"
                        />
                        {!currentProject.hideNameText && (
                          <div>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1">
                              {currentProject.name}
                            </h3>
                            <p
                              className="text-base sm:text-lg md:text-xl font-semibold"
                              style={{ color: currentProject.accentColor }}
                            >
                              {currentProject.tagline}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
                        {currentProject.name}
                      </h3>
                      <p
                        className="text-base sm:text-lg md:text-xl font-semibold"
                        style={{ color: currentProject.accentColor }}
                      >
                        {currentProject.tagline}
                      </p>
                    </div>
                  )}
            </div>

            {/* Project Story Cards (Situation, Task, Work, Solution) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {/* Card 01: Situation */}
              <div className="relative bg-white rounded-2xl p-5 sm:p-6 border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-500 hover:shadow-[0_12px_40px_rgba(15,23,42,0.12)] hover:-translate-y-1 h-full flex flex-col group overflow-hidden">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full text-xs font-semibold text-white shadow-md"
                    style={{ background: currentProject.accentColor }}
                  >
                    01
                  </div>
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: `${currentProject.accentColor}15`, color: currentProject.accentColor }}
                  >
                    <Target className="w-5 h-5" />
                  </div>
                </div>
                <h4 className="text-lg sm:text-xl font-heading font-bold text-gray-900 mb-2">
                  Situation
                </h4>
                <p className="text-xs text-gray-500 mb-3">
                  The business challenge we addressed.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed font-body flex-1">
                  {currentProject.situation}
                </p>
              </div>

              {/* Card 02: Task / Goal */}
              <div className="relative bg-white rounded-2xl p-5 sm:p-6 border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-500 hover:shadow-[0_12px_40px_rgba(15,23,42,0.12)] hover:-translate-y-1 h-full flex flex-col group overflow-hidden">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full text-xs font-semibold text-white shadow-md"
                    style={{ background: currentProject.accentColor }}
                  >
                    02
                  </div>
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: `${currentProject.accentColor}15`, color: currentProject.accentColor }}
                  >
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
                <h4 className="text-lg sm:text-xl font-heading font-bold text-gray-900 mb-2">
                  Task / Goal
                </h4>
                <p className="text-xs text-gray-500 mb-3">
                  The objective we set out to achieve.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed font-body flex-1">
                  {currentProject.task}
                </p>
              </div>

              {/* Card 03: Work (Action Taken) */}
              <div className="relative bg-white rounded-2xl p-5 sm:p-6 border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-500 hover:shadow-[0_12px_40px_rgba(15,23,42,0.12)] hover:-translate-y-1 h-full flex flex-col group overflow-hidden">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full text-xs font-semibold text-white shadow-md"
                    style={{ background: currentProject.accentColor }}
                  >
                    03
                  </div>
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: `${currentProject.accentColor}15`, color: currentProject.accentColor }}
                  >
                    <Code className="w-5 h-5" />
                  </div>
                </div>
                <h4 className="text-lg sm:text-xl font-heading font-bold text-gray-900 mb-2">
                  Work (Action Taken)
                </h4>
                <p className="text-xs text-gray-500 mb-3">
                  How we designed and built the solution.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed font-body flex-1">
                  {currentProject.work}
                </p>
              </div>

              {/* Card 04: Solution / Result */}
              <div className="relative bg-white rounded-2xl p-5 sm:p-6 border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-500 hover:shadow-[0_12px_40px_rgba(15,23,42,0.12)] hover:-translate-y-1 h-full flex flex-col group overflow-hidden">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full text-xs font-semibold text-white shadow-md"
                    style={{ background: currentProject.accentColor }}
                  >
                    04
                  </div>
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: `${currentProject.accentColor}15`, color: currentProject.accentColor }}
                  >
                    <Award className="w-5 h-5" />
                  </div>
                </div>
                <h4 className="text-lg sm:text-xl font-heading font-bold text-gray-900 mb-2">
                  Solution / Result
                </h4>
                <p className="text-xs text-gray-500 mb-3">
                  The outcome and impact delivered.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed font-body flex-1">
                  {currentProject.solution}
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-gray-200/60 mt-4 sm:mt-6 mb-4 sm:mb-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 gap-4">
                <h4 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2">
                  <Code className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: currentProject.accentColor }} />
                  Tech Stack
                </h4>
                
                {/* ERP Technology label - moved here */}
                {currentProject.erpTechnology && (
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold shrink-0"
                    style={{
                      backgroundColor: `${currentProject.accentColor}15`,
                      color: currentProject.accentColor,
                      border: `1px solid ${currentProject.accentColor}30`,
                    }}
                  >
                    <Boxes className="w-3.5 h-3.5" />
                    ERP Technology: {currentProject.erpTechnology}
                  </div>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {currentProject.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-sm border"
                    style={{
                      backgroundColor: `${currentProject.accentColor}15`,
                      borderColor: `${currentProject.accentColor}30`,
                      color: currentProject.accentColor
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Areas of Work */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-gray-200/60">
              <h4 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: currentProject.accentColor }} />
                Areas of Work
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                {currentProject.areasOfWork.map((area, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-700">
                    <ChevronRight className="w-4 h-4 flex-shrink-0" style={{ color: currentProject.accentColor }} />
                    <span className="text-xs sm:text-sm font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;