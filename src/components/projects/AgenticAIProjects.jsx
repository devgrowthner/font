'use client';

import React, { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, CheckCircle2, Code, Target, Briefcase, Award } from 'lucide-react';

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 20 : -20, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir < 0 ? 20 : -20, opacity: 0 }),
};

const AgenticAIProjects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [direction, setDirection] = useState(0);
  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState(0);
  const [activeSection, setActiveSection] = useState(0); // 0: Story, 1: Images, 2: Tech, 3: Areas
  const [isHovering, setIsHovering] = useState(false);

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
      logo: "/projectslogos/coreliaOS.jpeg"
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
      screenshots: ["/projectss/opporture.png", "/projectss/opporture1.png"]
    }
  ];

  const slideTo = (newIndex) => {
    setDirection(newIndex > activeProject ? 1 : -1);
    setActiveProject(newIndex);
    setActiveSection(0);
  };

  const currentProject = projects[activeProject];
  const screenshotImages = currentProject.screenshots || (currentProject.screenshot ? [currentProject.screenshot] : []);

  const projectSections = screenshotImages.length > 0
    ? ['screens', 'story', 'techAreas']
    : ['story', 'techAreas'];

  useEffect(() => {
    if (screenshotImages.length <= 1) return;
    const interval = setInterval(() => {
      if (!isHovering) {
        setActiveScreenshotIndex((prev) => (prev + 1) % screenshotImages.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [screenshotImages.length, activeProject, isHovering]);

  useEffect(() => {
    const id = setTimeout(() => setActiveScreenshotIndex(0), 0);
    return () => clearTimeout(id);
  }, [activeProject]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setActiveSection((prev) => (prev + 1) % projectSections.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [activeProject, projectSections.length, isHovering]);

  const nextSection = () => {
    setActiveSection((prev) => (prev + 1) % projectSections.length);
  };

  const prevSection = () => {
    setActiveSection((prev) => (prev - 1 + projectSections.length) % projectSections.length);
  };

  return (
    <section className="py-6 sm:py-10 lg:py-12 px-3 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#ede9fe] overflow-x-hidden">
      <div className="container mx-auto max-w-7xl w-full">
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-blue-50 backdrop-blur-sm border border-blue-200/60 text-xs sm:text-sm font-semibold mb-3 sm:mb-5 shadow-sm text-blue-700">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            Agentic AI Projects
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-3 sm:mb-6 leading-tight px-1">
            Our Latest{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
              Agentic AI Solutions
            </span>
          </h2>
          <p className="text-sm sm:text-lg md:text-xl text-muted-foreground leading-relaxed font-body px-1">
            Autonomous AI agents that work intelligently to accomplish complex tasks
          </p>
        </div>

        <div className="mb-4 sm:mb-8 overflow-x-auto scrollbar-hide px-1 sm:px-2 -mx-1 sm:mx-0">
          <div className="flex justify-center min-w-0">
            <div className="inline-flex gap-1.5 sm:gap-3 p-1.5 sm:p-2 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/60">
              {projects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => slideTo(index)}
                  className={`px-2.5 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                    activeProject === index ? 'text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  style={activeProject === index ? { backgroundColor: projects[index].accentColor } : {}}
                >
                  {project.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project content */}
        <div className="relative max-w-6xl mx-auto w-full min-w-0">
          <div className="overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <Motion.div
              key={activeProject}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'tween', duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-full min-w-0"
            >
          {/* Project Name Above Card */}
          <div className="mb-3 sm:mb-4 px-2 sm:px-4 md:px-6 lg:px-10">
            {currentProject.logo && currentProject.name === "Arosys" ? (
              <div className="flex items-center gap-3 sm:gap-4">
                <img src={currentProject.logo} alt={currentProject.name} className="h-10 sm:h-16 md:h-20 object-contain flex-shrink-0" />
              </div>
            ) : currentProject.logo ? (
              <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                <img src={currentProject.logo} alt={currentProject.name} className="h-10 sm:h-16 md:h-20 object-contain flex-shrink-0" />
                <div className="min-w-0">
                  <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-foreground mb-0.5 sm:mb-1 break-words">{currentProject.name}</h3>
                  <p className="text-sm sm:text-lg md:text-xl font-semibold break-words" style={{ color: currentProject.accentColor }}>{currentProject.tagline}</p>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1 sm:mb-2 break-words">{currentProject.name}</h3>
                <p className="text-sm sm:text-lg md:text-xl font-semibold break-words" style={{ color: currentProject.accentColor }}>{currentProject.tagline}</p>
              </div>
            )}
          </div>

          {/* Inner section carousel: Story → Screenshots → Tech + Areas */}
          <div className="mt-3 sm:mt-6 relative px-0 sm:px-2 md:px-4 lg:px-8">
            <div className="px-0 sm:px-2">
              <AnimatePresence initial={false} mode="wait">
                <Motion.div
                  key={projectSections[activeSection]}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="cursor-pointer"
                >
                  <div className="relative min-h-[320px] sm:min-h-[400px] md:min-h-[440px] flex flex-col">
                    {projectSections[activeSection] === 'story' && (
                      <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-gray-200/80 flex flex-col flex-1 min-h-0 overflow-hidden">
                        <div className="space-y-3 sm:space-y-4 overflow-y-auto flex-1 min-h-0 pr-1 -mr-1">
                          <div>
                            <div className="flex items-center gap-2 mb-0.5 sm:mb-1">
                              <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" style={{ color: currentProject.accentColor }} />
                              <h4 className="text-sm sm:text-lg font-heading font-bold text-gray-900">Situation</h4>
                            </div>
                            <p className="text-[10px] sm:text-xs text-gray-500 mb-0.5 sm:mb-1">The business challenge we addressed.</p>
                            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-body">{currentProject.situation}</p>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-0.5 sm:mb-1">
                              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" style={{ color: currentProject.accentColor }} />
                              <h4 className="text-sm sm:text-lg font-heading font-bold text-gray-900">Task / Goal</h4>
                            </div>
                            <p className="text-[10px] sm:text-xs text-gray-500 mb-0.5 sm:mb-1">The objective we set out to achieve.</p>
                            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-body">{currentProject.task}</p>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-0.5 sm:mb-1">
                              <Code className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" style={{ color: currentProject.accentColor }} />
                              <h4 className="text-sm sm:text-lg font-heading font-bold text-gray-900">Work (Action Taken)</h4>
                            </div>
                            <p className="text-[10px] sm:text-xs text-gray-500 mb-0.5 sm:mb-1">How we designed and built the solution.</p>
                            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-body">{currentProject.work}</p>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-0.5 sm:mb-1">
                              <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" style={{ color: currentProject.accentColor }} />
                              <h4 className="text-sm sm:text-lg font-heading font-bold text-gray-900">Solution / Result</h4>
                            </div>
                            <p className="text-[10px] sm:text-xs text-gray-500 mb-0.5 sm:mb-1">The outcome and impact delivered.</p>
                            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-body">{currentProject.solution}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {projectSections[activeSection] === 'screens' && screenshotImages.length > 0 && (
                      <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.08)] bg-white relative flex-1 min-h-[260px] sm:min-h-[320px] flex flex-col">
                        <AnimatePresence initial={false} mode="wait">
                          <Motion.img
                            key={activeScreenshotIndex}
                            src={screenshotImages[activeScreenshotIndex]}
                            alt={`${currentProject.name} screenshot ${activeScreenshotIndex + 1}`}
                            className="w-full h-auto max-h-[220px] sm:max-h-[300px] md:max-h-[380px] object-cover object-top block flex-1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                          />
                        </AnimatePresence>
                        {screenshotImages.length > 1 && (
                          <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                            {screenshotImages.map((_, i) => (
                              <span
                                key={i}
                                className={`h-1.5 rounded-full transition-all duration-300 ${i === activeScreenshotIndex ? 'w-5 bg-white/95' : 'w-1.5 bg-white/50'}`}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {projectSections[activeSection] === 'techAreas' && (
                      <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-gray-200/60 flex-1 min-h-0 overflow-y-auto flex flex-col">
                        <div className="mb-4 sm:mb-5">
                          <h4 className="text-base sm:text-xl font-bold text-foreground mb-2 sm:mb-4 flex items-center gap-2">
                            <Code className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: currentProject.accentColor }} /> Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {currentProject.techStack.map((tech, index) => (
                              <span
                                key={index}
                                className="px-2.5 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-sm border"
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

                        <div className="flex-1 min-w-0">
                          <h4 className="text-base sm:text-xl font-bold text-foreground mb-2 sm:mb-4 flex items-center gap-2">
                            <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: currentProject.accentColor }} /> Areas of Work
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                            {currentProject.areasOfWork.map((area, index) => (
                              <div key={index} className="flex items-center gap-2 text-gray-700 min-w-0">
                                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" style={{ color: currentProject.accentColor }} />
                                <span className="text-xs sm:text-sm font-medium truncate">{area}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Section nav arrows: inside card on mobile, outside on larger screens */}
                    <button
                      type="button"
                      onClick={prevSection}
                      className="absolute left-1 sm:-left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-gray-300 shadow-lg hover:shadow-xl hover:border-gray-400 hover:scale-110 transition-all duration-200"
                      style={{ backgroundColor: 'white' }}
                      aria-label="Previous section"
                    >
                      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700" />
                    </button>
                    <button
                      type="button"
                      onClick={nextSection}
                      className="absolute right-1 sm:-right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20 inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-gray-300 shadow-lg hover:shadow-xl hover:border-gray-400 hover:scale-110 transition-all duration-200"
                      style={{ backgroundColor: 'white' }}
                      aria-label="Next section"
                    >
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700" />
                    </button>

                  </div>
                </Motion.div>
              </AnimatePresence>
            </div>
          </div>
            </Motion.div>
          </AnimatePresence>
          </div>

          {/* Dots for current project's sections */}
          <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8 flex-shrink-0">
            {projectSections.map((sectionKey, index) => (
              <button
                key={sectionKey}
                type="button"
                onClick={() => setActiveSection(index)}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 flex-shrink-0 ${
                  index === activeSection ? 'w-6 sm:w-8' : 'w-1.5 sm:w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                style={index === activeSection ? { backgroundColor: currentProject.accentColor } : {}}
                aria-label={`Go to section ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgenticAIProjects;
