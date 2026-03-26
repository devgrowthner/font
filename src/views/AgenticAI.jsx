'use client';

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Bot,
  Brain,
  Cpu,
  Workflow,
  Zap,
  CheckCircle,
  Pause,
  Play,
  RotateCcw,
  Volume2,
  VolumeX,
  ChevronDown,
} from "lucide-react";
import ContactModal from "../components/ContactModal";
import Footer from "../components/Footer";
import AgenticAIProjects from "../components/projects/AgenticAIProjects";
import { useSeo } from "../hooks/useSeo";
import Schema from "../components/Schema";
import pythonImg from "../assets/Machine/python.png";
import langchainImg from "../assets/generativeai/langchain.png";
import kafkaImg from "../assets/agenticai/kafka.png";
import nodejsImg from "../assets/agenticai/nodejs.svg";
import solidityImg from "../assets/agenticai/solidity.png";
import saasImg from "../assets/agenticai/sass.png";
import metamaskImg from "../assets/agenticai/metamask.png";
import rabbitmqImg from "../assets/agenticai/RabbitMQ.png";
import autogenImg from "../assets/agenticai/autogen.jpeg";
import crewaiImg from "../assets/agenticai/crewai.png";
import promptsImg from "../assets/generativeai/prompt.jpeg";
import webhooksImg from "../assets/agenticai/webhooks.png";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const AgenticAI = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(1);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does an Agentic AI development company in Australia actually build?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An Agentic AI development company in Australia builds autonomous AI systems that can make decisions, take actions, and complete multi-step tasks without constant human input. This includes AI agents for workflow automation, customer support, lead qualification, document processing, DevOps support, and internal business operations."
        }
      },
      {
        "@type": "Question",
        "name": "How is Agentic AI different from traditional AI solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Traditional AI usually responds to prompts or analyzes data. Agentic AI goes further. It can plan tasks, make decisions based on goals, interact with tools or APIs, and adapt based on feedback. Instead of just answering questions, it acts on them."
        }
      },
      {
        "@type": "Question",
        "name": "What industries in Australia benefit most from Agentic AI development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Industries seeing strong results include: SaaS and tech companies, Financial services and fintech, Healthcare and medical systems, eCommerce and retail, Logistics and supply chain, Real estate and property tech. These sectors benefit from automation, predictive decision-making, and workflow optimization."
        }
      },
      {
        "@type": "Question",
        "name": "Can Agentic AI integrate with our existing business systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Most Agentic AI development services in Australia focus on integrating with CRMs, ERPs, internal dashboards, cloud platforms, APIs, and third-party tools. Proper integration ensures the AI agent can act, not just analyze."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to develop an Agentic AI solution?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Development timelines vary. A basic AI agent may take a few weeks, while complex enterprise-level systems may take several months. Timeline depends on customization, integrations, training data, and testing requirements."
        }
      },
      {
        "@type": "Question",
        "name": "What should we look for in an Agentic AI development company in Australia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Look for: Experience with autonomous AI systems, Strong technical architecture capabilities, Experience with LLMs and AI agent frameworks, Clear security standards, Transparent development process, Ongoing support and optimization services."
        }
      }
    ]
  };

  useSeo({
    title: "Agentic AI Development Company in Australia",
    description:
      "Leading Agentic AI Development Company in Australia offering custom autonomous AI agents and intelligent automation solutions for modern businesses.",
      canonical: "https://zynextechnologies.com.au/agentic-ai"
  });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      videoRef.current.volume = volume;
    }
  }, [isMuted, volume]);

  // useEffect(() => {
  //   document.title = "Agentic AI Development Company in Australia";
  //   const metaDescription = document.querySelector('meta[name="description"]');
  //   if (metaDescription) {
  //     metaDescription.setAttribute(
  //       "content",
  //       "Leading Agentic AI Development Company in Australia offering custom autonomous AI agents and intelligent automation solutions for modern businesses."
  //     );
  //   }
  // }, []);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const handleVolumeChange = (val) => {
    const v = Number(val);
    setVolume(v);
    if (videoRef.current) videoRef.current.volume = v;
    if (v === 0) setIsMuted(true);
    else if (isMuted) setIsMuted(false);
  };

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Autonomous Decision-Making Agents",
      description:
        "AI systems that reason, plan, and execute complex tasks independently, making intelligent decisions without constant human oversight.",
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Multi-Agent Systems & Orchestration",
      description:
        "Coordinate multiple AI agents working together, each specializing in different tasks to solve complex business problems.",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Goal-Oriented Task Automation",
      description:
        "Define high-level goals and let AI agents figure out the steps, tools, and actions needed to achieve them automatically.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Adaptive Learning & Self-Improvement",
      description:
        "Agents that learn from every interaction, continuously improving their performance and adapting to changing environments.",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Complex Workflow Automation",
      description:
        "Automate end-to-end business processes that require reasoning, tool usage, and adaptive decision-making at each step.",
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "System & Tool Integration",
      description:
        "Agents that seamlessly interact with existing tools, APIs, databases, and systems to execute tasks across your tech stack.",
    },
  ];

  const technologies = [
    {
      name: "Python",
      icon: pythonImg.src,
      color: "#FF6B6B",
    },
    {
      name: "LangChain",
      icon: langchainImg.src,
      color: "#1C3C3C",
    },
    {
      name: "Kafka",
      icon: kafkaImg.src,
      color: "#10A37F",
    },
    {
      name: "Node.js",
      icon: nodejsImg.src,
      color: "#10A37F",
    },
    {
      name: "Solidity",
      icon: solidityImg.src,
      color: "#D97706",
    },
    {
      name: "SAAS",
      icon: saasImg.src,
      color: "#3776AB",
    },
    {
      name: "MetaMask",
      icon: metamaskImg.src,
      color: "#6366F1",
    },
    {
      name: "RabbitMQ",
      icon: rabbitmqImg.src,
      color: "#DC382D",
    },
    {
      name: "Autogen",
      icon: autogenImg.src,
      color: "#009688",
    },
    {
      name: "CrewAI",
      icon: crewaiImg.src,
      color: "#2496ED",
    },
    {
      name: "Prompts",
      icon: promptsImg.src,
      color: "#326CE5",
    },
    {
      name: "Webhooks",
      icon: webhooksImg.src,
      color: "#FF9900",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fefdfb]">
      {/* Add Schema for FAQ */}
      <Schema schema={faqSchema} />
      
      {/* Hero Section with Background Image */}
      <section className="relative pt-20 sm:pt-24 pb-48 sm:pb-56 lg:pb-64 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/work/agentic1.webp"
            alt="Agentic AI"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Back Button */}
          <div className="mb-8 sm:mb-12">
            <button
              onClick={() => router.back()}
              className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors duration-300 font-medium text-sm sm:text-base group"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:-translate-x-1" />
              <span>Back</span>
            </button>
          </div>

          {/* Hero Content */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-base lg:text-lg font-medium mb-6 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-200"
            >
              <Bot className="w-4 h-4" />
              Agentic AI Solutions
            </motion.div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-extrabold text-white mb-6 leading-tight">
              Agentic AI Development Company and Services in{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
                Australia
              </span>
            </h1>

            <p className="text-base sm:text-md md:text-lg lg:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              As a leading Agentic AI Development Company and Services provider
              in Australia, we build intelligent AI agents that can plan,
              reason, and execute complex tasks with minimal human input. Our
              solutions help businesses automate operations, improve
              decision-making, and deploy scalable autonomous systems tailored
              to real-world use cases.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Related Area Of Works Section */}
      <section className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f8fafb] via-[#f5f7f9] to-[#f0f4f8]">
        <div className="container mx-auto max-w-7xl">
          <h3 className="text-lg sm:text-xl font-heading font-bold text-gray-900 mb-6">
            Related Area Of Works
          </h3>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4">
            <button
              onClick={() => router.push("/machine-learning")}
              className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 bg-white text-blue-600 border border-blue-300 hover:bg-blue-50 hover:border-blue-600"
            >
              Machine Learning
            </button>
            <button
              onClick={() => router.push("/chatbot")}
              className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 bg-white text-blue-600 border border-blue-300 hover:bg-blue-50 hover:border-blue-600"
            >
              Chat bot
            </button>
            <button
              onClick={() => router.push("/generative-ai")}
              className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 bg-white text-blue-600 border border-blue-300 hover:bg-blue-50 hover:border-blue-600"
            >
              Generative AI
            </button>
            <button
              onClick={() => router.push("/computer-vision")}
              className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 bg-white text-blue-600 border border-blue-300 hover:bg-blue-50 hover:border-blue-600"
            >
              Computer Vision
            </button>
            <button
              onClick={() => router.push("/recommendation-engine")}
              className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 bg-white text-blue-600 border border-blue-300 hover:bg-blue-50 hover:border-blue-600"
            >
              Recommendation Engine
            </button>
            <button
              onClick={() => router.push("/agentic-ai")}
              className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 bg-blue-50 text-blue-700 border-2 border-blue-600"
            >
              Agentic AI
            </button>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-2 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-8 text-center">
              About{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
                Agentic AI
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Agentic AI enables intelligent systems that think, plan, and act
              autonomously to achieve goals—going beyond simple responses to
              execute complex, multi-step tasks.
            </p>

            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              We build agentic AI solutions that automate end-to-end workflows
              using tool-enabled, multi-agent systems. From research and
              operations to customer service and optimization, our agents scale
              reliably, reduce costs, and deliver faster, more accurate outcomes
              across your business.
            </p>
            <div className="mt-10">
              <div className="w-full max-w-full sm:max-w-5xl mx-auto">
                <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-3">
                  Solution Explainer
                </h3>
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp}
                  className="relative rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-gray-200/50 group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
                  <video
                    ref={videoRef}
                    className="w-full aspect-[16/9] bg-black object-contain"
                    autoPlay
                    loop
                    playsInline
                    muted={isMuted}
                  >
                    <source src="/videos/agentic.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Custom Video Controls - Show on Hover */}
                  <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[90%] sm:w-auto flex justify-center">
                    <div className="flex items-center gap-2 sm:gap-3 bg-blue-600/80 backdrop-blur-md rounded-full px-3 sm:px-4 py-2 sm:py-3 shadow-lg">
                      {/* Play/Pause Button */}
                      <button
                        onClick={togglePlayPause}
                        className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 border border-white/30 flex-shrink-0"
                        aria-label={isPlaying ? "Pause" : "Play"}
                      >
                        {isPlaying ? (
                          <Pause
                            className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                            strokeWidth={2.5}
                          />
                        ) : (
                          <Play
                            className="w-4 h-4 sm:w-5 sm:h-5 text-white ml-0.5"
                            strokeWidth={2.5}
                          />
                        )}
                      </button>

                      {/* Replay Button */}
                      <button
                        onClick={handleReplay}
                        className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 border border-white/30 flex-shrink-0"
                        aria-label="Replay"
                      >
                        <RotateCcw
                          className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                          strokeWidth={2.5}
                        />
                      </button>

                      {/* Mute / Volume */}
                      <button
                        onClick={toggleMute}
                        className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 border border-white/30 flex-shrink-0"
                        aria-label={isMuted ? "Unmute" : "Mute"}
                      >
                        {isMuted ? (
                          <VolumeX
                            className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                            strokeWidth={2.5}
                          />
                        ) : (
                          <Volume2
                            className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                            strokeWidth={2.5}
                          />
                        )}
                      </button>

                      {/* Volume Slider - Hidden on very small screens */}
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={(e) => handleVolumeChange(e.target.value)}
                        className="hidden sm:block w-20 md:w-28 h-1 rounded-lg bg-white/30 accent-white flex-shrink-0"
                        aria-label="Volume"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#ede9fe]">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-4">
              What We{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
                Deliver
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive agentic AI capabilities to automate complex
              workflows and decision-making
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-white/90 backdrop-blur-sm border border-blue-100/50 rounded-2xl p-6 lg:p-8 hover:-translate-y-1 transition-all duration-500 hover:shadow-xl hover:shadow-blue-100/50"
              >
                <div className="mb-4">
                  <div className="inline-flex w-14 h-14 rounded-xl items-center justify-center bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Agentic AI Projects Section */}
      <AgenticAIProjects />

      {/* use case section */}
      <section className="py-8 sm:py-10 lg:py-12 px-2 sm:px-4 lg:px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-3">
              Real-World{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
                Use Cases
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Agentic AI Solutions Powering Autonomous Intelligence
            </p>
          </motion.div>

          {/* Two Images Side by Side */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto"
          >
            <img
              src="/agentic/agentic.webp"
              alt="Agentic AI Applications"
              className="w-full h-80 object-contain"
            />
            <img
              src="/agentic/agentic-ai.webp"
              alt="Agentic AI Use Cases"
              className="w-full h-80 object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-8 sm:py-10 lg:py-12 overflow-hidden bg-gradient-to-b from-[#f8fafb] via-[#f5f7f9] to-[#f0f4f8]">
        <div className="w-full">
          {/* Header */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-6 sm:mb-8 px-4 sm:px-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-gray-900 mb-4">
              Core{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
                Technologies
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Powered by advanced agentic AI frameworks and orchestration tools.
            </p>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative px-2 sm:px-4">
            {/* Gradient Fade Left */}
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#f8fafb] to-transparent z-10 pointer-events-none"></div>

            {/* Gradient Fade Right */}
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#f0f4f8] to-transparent z-10 pointer-events-none"></div>

            {/* Scrolling Container */}
            <div className="flex overflow-hidden">
              <div className="partners-carousel flex gap-4 sm:gap-5 lg:gap-6">
                {[...technologies, ...technologies].map((tech, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex flex-col items-center justify-center group"
                  >
                    {/* Logo Container - Circular */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center p-2 sm:p-3 group-hover:shadow-lg group-hover:border-blue-500/30 group-hover:-translate-y-1 transition-all duration-300">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {/* Technology Name */}
                    <p className="mt-2 text-xs sm:text-sm font-medium text-gray-500 group-hover:text-blue-600 transition-colors duration-300 whitespace-nowrap">
                      {tech.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-indigo-100/80 backdrop-blur-sm border border-indigo-200/50 text-indigo-700">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-gray-900 mb-4">
              Frequently Asked{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                Questions
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Common questions about Agentic AI development services in Australia
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {[
              {
                question: "What does an Agentic AI development company in Australia actually build?",
                answer: "An Agentic AI development company in Australia builds autonomous AI systems that can make decisions, take actions, and complete multi-step tasks without constant human input. This includes AI agents for workflow automation, customer support, lead qualification, document processing, DevOps support, and internal business operations."
              },
              {
                question: "How is Agentic AI different from traditional AI solutions?",
                answer: "Traditional AI usually responds to prompts or analyzes data. Agentic AI goes further. It can plan tasks, make decisions based on goals, interact with tools or APIs, and adapt based on feedback. Instead of just answering questions, it acts on them."
              },
              {
                question: "What industries in Australia benefit most from Agentic AI development?",
                answer: (
                  <div>
                    <p className="mb-3">Industries seeing strong results include:</p>
                    <ul className="list-disc list-inside space-y-2 mb-3 ml-2">
                      <li>SaaS and tech companies</li>
                      <li>Financial services and fintech</li>
                      <li>Healthcare and medical systems</li>
                      <li>eCommerce and retail</li>
                      <li>Logistics and supply chain</li>
                      <li>Real estate and property tech</li>
                    </ul>
                    <p>These sectors benefit from automation, predictive decision-making, and workflow optimization.</p>
                  </div>
                )
              },
              {
                question: "Can Agentic AI integrate with our existing business systems?",
                answer: "Yes. Most Agentic AI development services in Australia focus on integrating with CRMs, ERPs, internal dashboards, cloud platforms, APIs, and third-party tools. Proper integration ensures the AI agent can act, not just analyze."
              },
              {
                question: "How long does it take to develop an Agentic AI solution?",
                answer: "Development timelines vary. A basic AI agent may take a few weeks, while complex enterprise-level systems may take several months. Timeline depends on customization, integrations, training data, and testing requirements."
              },
              {
                question: "What should we look for in an Agentic AI development company in Australia?",
                answer: "Look for: Experience with autonomous AI systems, Strong technical architecture capabilities, Experience with LLMs and AI agent frameworks, Clear security standards, Transparent development process, Ongoing support and optimization services."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/80 backdrop-blur-sm border border-indigo-100/50 rounded-2xl overflow-hidden hover:shadow-xl hover:border-indigo-200/60 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-indigo-50/30 transition-colors duration-200"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 flex-shrink-0 transition-transform duration-300 ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaqIndex === index ? 'auto' : 0,
                    opacity: openFaqIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="text-base text-gray-600 leading-relaxed px-6 pb-6 border-t border-indigo-100/30">
                    {typeof faq.answer === 'string' ? faq.answer : faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Connect With Us Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="relative bg-white/90 backdrop-blur-xl border border-border/30 rounded-3xl overflow-hidden shadow-lg p-8 lg:p-12"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-violet-500"></div>

            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-6">
                Ready to{" "}
                <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                  Get Started?
                </span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Unlock the power of autonomous AI agents that think, plan, and
                execute complex tasks.
                Let's discuss how we can help you build intelligent systems that
                work independently to achieve your goals.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-violet-500 text-white px-4 py-2.5 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(99,102,241,0.5)] shadow-lg w-full sm:w-auto min-h-[44px]"
                >
                  <span>Connect with us</span>
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M7.5 15L12.5 10L7.5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-border/50 mt-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg
                    className="w-5 h-5 text-violet-600 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">Autonomous Solutions</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg
                    className="w-5 h-5 text-violet-600 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">Free Consultation</span>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-violet-500/5 -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <Footer />
    </div>
  );
};

export default AgenticAI;
