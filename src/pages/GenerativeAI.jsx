'use client';

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Sparkles,
  Image,
  FileText,
  Code,
  Video,
  Music,
  Pause,
  Play,
  RotateCcw,
  Volume2,
  VolumeX,
  ChevronDown,
} from "lucide-react";
import ContactModal from "../components/ContactModal";
import Footer from "../components/Footer";
import GenerativeAIProjects from "../components/projects/GenerativeAIProjects";
import { useSeo } from "../hooks/useSeo";
import Schema from "../components/Schema";
import pythonImg from "../assets/Machine/python.png";
import chatgptImg from "../assets/chatbot/chatgpt.png";
import langchainImg from "../assets/generativeai/langchain.png";
import djangoImg from "../assets/generativeai/dj.png";
import claudeImg from "../assets/chatbot/claude.jpeg";
import databaseImg from "../assets/generativeai/database.png";
import tensorflowImg from "../assets/generativeai/tenser.png";
import microsoftImg from "../assets/generativeai/microsoft.jpeg";
import nlpImg from "../assets/chatbot/nlp.png";
import deepImg from "../assets/Machine/deep.png";
import promptImg from "../assets/generativeai/prompt.jpeg";

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

const GenerativeAI = () => {
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
        "name": "What does a Generative AI development company in Australia actually build?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Generative AI development company in Australia typically builds AI-powered tools that can create content, code, designs, chat responses, synthetic data, and automation workflows. This includes custom AI chatbots, content generation systems, AI copilots, document automation tools, and industry-specific AI applications tailored to business needs."
        }
      },
      {
        "@type": "Question",
        "name": "Is it better to use pre-built AI tools or hire a Generative AI development company in Australia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pre-built tools are great for simple use cases. But if you need secure data handling, integration with internal systems, advanced workflows, or industry-specific customization, hiring a Generative AI development company in Australia is usually the better long-term solution."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to develop a Generative AI solution in Australia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A simple AI MVP may take a few weeks, while enterprise-level AI platforms can take several months depending on integrations, compliance requirements, and model training complexity."
        }
      },
      {
        "@type": "Question",
        "name": "Are Generative AI development companies in Australia compliant with data privacy regulations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Reputable companies follow Australian data protection regulations and global standards like GDPR when required. Always confirm how your data will be stored, processed, and secured before starting a project."
        }
      },
      {
        "@type": "Question",
        "name": "Can a Generative AI development company in Australia help turn my idea into a working AI product?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. If you have an AI product idea, a Generative AI development company in Australia can help validate the use case, design the architecture, choose the right model, and build a scalable product ready for launch."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between AI development services and Generative AI development services in Australia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Traditional AI focuses on prediction and analytics. Generative AI development services in Australia focus on creating new content such as text, images, code, synthetic data, and automated responses based on prompts and context."
        }
      }
    ]
  };

  useSeo({
    title: "Generative AI Development Company and Services in Australia",
    description:
      "Looking for a Generative AI Development Company in Australia? We build custom AI solutions to automate workflows, create content, and scale your business.",
    canonical: "https://zynextechnologies.com.au/generative-ai"
  });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      videoRef.current.volume = volume;
    }
  }, [isMuted, volume]);

  // useEffect(() => {
  //   document.title =
  //     "Generative AI Development Company and Services in Australia";
  //   const metaDescription = document.querySelector('meta[name="description"]');
  //   if (metaDescription) {
  //     metaDescription.setAttribute(
  //       "content",
  //       "Looking for a Generative AI Development Company in Australia? We build custom AI solutions to automate workflows, create content, and scale your business."
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
    setIsMuted(prev => !prev);
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
      icon: <FileText className="w-6 h-6" />,
      title: "Content Generation & Automation",
      description:
        "Create high-quality marketing copy, product descriptions, articles, and documentation at scale using advanced language models.",
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: "Image & Visual Generation",
      description:
        "Generate stunning visuals, product mockups, marketing materials, and custom artwork using state-of-the-art diffusion models.",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Code Generation & Assistance",
      description:
        "Accelerate development with AI-powered code generation, bug fixing, documentation, and test creation across multiple languages.",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Custom Model Fine-Tuning",
      description:
        "Adapt foundation models to your specific domain, brand voice, and requirements for superior, tailored results.",
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Multi-Modal AI Applications",
      description:
        "Build applications that combine text, images, audio, and video generation for rich, interactive experiences.",
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "Creative Workflow Automation",
      description:
        "Automate repetitive creative tasks, generate variations, and explore creative possibilities at unprecedented speed.",
    },
  ];

  const technologies = [
    {
      name: "Python",
      icon: pythonImg.src,
      color: "#10A37F",
    },
    {
      name: "ChatGPT",
      icon: chatgptImg.src,
      color: "#FF6B6B",
    },
    {
      name: "Langchain",
      icon: langchainImg.src,
      color: "#7C3AED",
    },
    {
      name: "Django",
      icon: djangoImg.src,
      color: "#F59E0B",
    },
    {
      name: "Claude",
      icon: claudeImg.src,
      color: "#D97706",
    },
    {
      name: "DataBase Management",
      icon: databaseImg.src,
      color: "#FFD21E",
    },
    {
      name: "TensorFlow",
      icon: tensorflowImg.src,
      color: "#10A37F",
    },
    {
      name: "Microsoft Azure",
      icon: microsoftImg.src,
      color: "#3776AB",
    },
    {
      name: "NLP",
      icon: nlpImg.src,
      color: "#6366F1",
    },
    {
      name: "Deep Learning",
      icon: deepImg.src,
      color: "#EE4C2C",
    },
    {
      name: "Prompt Engineering",
      icon: promptImg.src,
      color: "#FF9900",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fefdfb]">
      {/* Add Schema for FAQ */}
      <Schema schema={faqSchema} />
      
      {/* Hero Section with Background Image */}
      <section className="relative pt-20 sm:pt-24 pb-48 sm:pb-52 lg:pb-60 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/work/gen.webp"
            alt="Generative AI"
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-base lg:text-lg font-medium mb-6 bg-indigo-500/20 backdrop-blur-sm border border-indigo-400/30 text-indigo-200"
            >
              <Sparkles className="w-4 h-4" />
              Generative AI Solutions
            </motion.div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-extrabold text-white mb-6 leading-tight">
              Generative AI Development Company in{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                Australia
              </span>
            </h1>

            <p className="text-base sm:text-md md:text-lg lg:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Build intelligent generative AI solutions tailored to your
              business goals. As a leading Generative AI Development Company in
              Australia, we design and deploy advanced AI systems that create
              content, automate workflows, enhance customer interactions, and
              unlock new growth opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Related Area Of Works Section */}
      <section className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#faf8fd] via-[#f7f5fc] to-[#f3f0fb]">
        <div className="container mx-auto max-w-7xl">
          <h3 className="text-lg sm:text-xl font-heading font-bold text-gray-900 mb-6">
            Related Area Of Works
          </h3>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4">
            <button
              onClick={() => router.push("/machine-learning")}
              className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 bg-white text-indigo-600 border border-indigo-300 hover:bg-indigo-50 hover:border-indigo-600"
            >
              Machine Learning
            </button>
            <button
              onClick={() => router.push("/chatbot")}
              className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 bg-white text-indigo-600 border border-indigo-300 hover:bg-indigo-50 hover:border-indigo-600"
            >
              Chat bot
            </button>
            <button
              onClick={() => router.push("/generative-ai")}
              className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 bg-indigo-50 text-indigo-700 border-2 border-indigo-600"
            >
              Generative AI
            </button>
            <button
              onClick={() => router.push("/computer-vision")}
              className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 bg-white text-indigo-600 border border-indigo-300 hover:bg-indigo-50 hover:border-indigo-600"
            >
              Computer Vision
            </button>
            <button
              onClick={() => router.push("/recommendation-engine")}
              className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 bg-white text-indigo-600 border border-indigo-300 hover:bg-indigo-50 hover:border-indigo-600"
            >
              Recommendation Engine
            </button>
            <button
              onClick={() => router.push("/agentic-ai")}
              className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 bg-white text-indigo-600 border border-indigo-300 hover:bg-indigo-50 hover:border-indigo-600"
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
                Generative AI
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Generative AI is transforming creativity and innovation. From
              content and design to code, it enables faster creation, deeper
              personalization, and consistent brand experiences at scale.
            </p>

            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              We build custom generative AI solutions using leading foundation
              models—automating workflows, accelerating development, and
              delivering high-quality, multi-modal experiences across text,
              images, and code that drive real business impact.
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
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
                  <video
                    ref={videoRef}
                    className="w-full aspect-[16/9] bg-black object-contain"
                    autoPlay
                    loop
                    playsInline
                    muted={isMuted}
                  >
                    <source src="/videos/genai.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Custom Video Controls - Show on Hover */}
                  <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[90%] sm:w-auto flex justify-center">
                    <div className="flex items-center gap-2 sm:gap-3 bg-indigo-600/80 backdrop-blur-md rounded-full px-3 sm:px-4 py-2 sm:py-3 shadow-lg">
                      {/* Play/Pause Button */}
                      <button
                        onClick={togglePlayPause}
                        className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 border border-white/30 flex-shrink-0"
                        aria-label={isPlaying ? 'Pause' : 'Play'}
                      >
                        {isPlaying ? (
                          <Pause className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={2.5} />
                        ) : (
                          <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white ml-0.5" strokeWidth={2.5} />
                        )}
                      </button>

                      {/* Replay Button */}
                      <button
                        onClick={handleReplay}
                        className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 border border-white/30 flex-shrink-0"
                        aria-label="Replay"
                      >
                        <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={2.5} />
                      </button>

                      {/* Mute / Volume */}
                      <button
                        onClick={toggleMute}
                        className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 border border-white/30 flex-shrink-0"
                        aria-label={isMuted ? 'Unmute' : 'Mute'}
                      >
                        {isMuted ? (
                          <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={2.5} />
                        ) : (
                          <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={2.5} />
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
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#eef2ff]">
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
                Deliver
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive generative AI capabilities to transform your
              creative workflows
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
                className="group bg-white/90 backdrop-blur-sm border border-indigo-100/50 rounded-2xl p-6 lg:p-8 hover:-translate-y-1 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-100/50"
              >
                <div className="mb-4">
                  <div className="inline-flex w-14 h-14 rounded-xl items-center justify-center bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-indigo-600 group-hover:scale-110 transition-transform duration-300">
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


      {/* Generative AI Projects Section */}
      <GenerativeAIProjects />

      {/* Use Cases & Applications Section */}
      <section className="py-6 sm:py-8 lg:py-10 px-2 sm:px-4 lg:px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-8 sm:mb-10"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-4">
              Real-World{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
                Use Cases
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Proven generative AI applications that drive measurable business
              results
            </p>
          </motion.div>

          {/* Centered Image */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex justify-center"
          >
            <img
              src="/generative/Generative-Ai.webp"
              alt="Generative AI Applications"
              className="w-full max-w-4xl h-96 object-contain"
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
              Core{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
                Technologies
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Powered by leading generative AI models and frameworks.
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
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center p-2 sm:p-3 group-hover:shadow-lg group-hover:border-indigo-500/30 group-hover:-translate-y-1 transition-all duration-300">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {/* Technology Name */}
                    <p className="mt-2 text-xs sm:text-sm font-medium text-gray-500 group-hover:text-indigo-600 transition-colors duration-300 whitespace-nowrap">
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
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-violet-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-purple-100/80 backdrop-blur-sm border border-purple-200/50 text-purple-700">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-gray-900 mb-4">
              Frequently Asked{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Questions
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Common questions about Generative AI development services in Australia
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
                question: "What does a Generative AI development company in Australia actually build?",
                answer: "A Generative AI development company in Australia typically builds AI-powered tools that can create content, code, designs, chat responses, synthetic data, and automation workflows. This includes custom AI chatbots, content generation systems, AI copilots, document automation tools, and industry-specific AI applications tailored to business needs."
              },
              {
                question: "Is it better to use pre-built AI tools or hire a Generative AI development company in Australia?",
                answer: "Pre-built tools are great for simple use cases. But if you need secure data handling, integration with internal systems, advanced workflows, or industry-specific customization, hiring a Generative AI development company in Australia is usually the better long-term solution."
              },
              {
                question: "How long does it take to develop a Generative AI solution in Australia?",
                answer: "A simple AI MVP may take a few weeks, while enterprise-level AI platforms can take several months depending on integrations, compliance requirements, and model training complexity."
              },
              {
                question: "Are Generative AI development companies in Australia compliant with data privacy regulations?",
                answer: "Reputable companies follow Australian data protection regulations and global standards like GDPR when required. Always confirm how your data will be stored, processed, and secured before starting a project."
              },
              {
                question: "Can a Generative AI development company in Australia help turn my idea into a working AI product?",
                answer: "Yes. If you have an AI product idea, a Generative AI development company in Australia can help validate the use case, design the architecture, choose the right model, and build a scalable product ready for launch."
              },
              {
                question: "What's the difference between AI development services and Generative AI development services in Australia?",
                answer: "Traditional AI focuses on prediction and analytics. Generative AI development services in Australia focus on creating new content such as text, images, code, synthetic data, and automated responses based on prompts and context."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/80 backdrop-blur-sm border border-purple-100/50 rounded-2xl overflow-hidden hover:shadow-xl hover:border-purple-200/60 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-purple-50/30 transition-colors duration-200"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-purple-600 flex-shrink-0 transition-transform duration-300 ${
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
                  <p className="text-base text-gray-600 leading-relaxed px-6 pb-6 border-t border-purple-100/30">
                    {faq.answer}
                  </p>
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
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>

            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-6">
                Ready to{" "}
                <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                  Get Started?
                </span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform your creative workflows with generative AI solutions.
                Let&apos;s discuss how we can help you unlock new possibilities and accelerate innovation.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2.5 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(99,102,241,0.5)] shadow-lg w-full sm:w-auto min-h-[44px]"
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
                    className="w-5 h-5 text-indigo-600 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">Creative Solutions</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg
                    className="w-5 h-5 text-indigo-600 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">
                    Free Consultation
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 -z-10"></div>
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

export default GenerativeAI;
