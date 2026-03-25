'use client';

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Eye,
  Camera,
  Scan,
  FileSearch,
  Shield,
  Video,
  Pause,
  Play,
  RotateCcw,
  Volume2,
  VolumeX,
  ChevronDown,
} from "lucide-react";
import ContactModal from "../components/ContactModal";
import Footer from "../components/Footer";
import ComputerVisionProjects from "../components/projects/ComputerVisionProjects";
import { useSeo } from "../hooks/useSeo";
import Schema from "../components/Schema";
import pythonImg from "../assets/Machine/python.png";
import tensorflowImg from "../assets/generativeai/tenser.png";
import opencvImg from "../assets/computervision/OpenCV.webp";
import azureImg from "../assets/computervision/azure.png";
import ocrImg from "../assets/computervision/ocr.png";
import amazonImg from "../assets/computervision/amazon.png";

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

const ComputerVision = () => {
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
        "name": "How do I choose the right computer vision development company in Australia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Look for a company with proven experience in real-world deployments, not just prototypes. Check their expertise in AI model training, data labeling, edge deployment, and integration with existing systems. Australian compliance knowledge and industry-specific experience also matter."
        }
      },
      {
        "@type": "Question",
        "name": "Can an Australian computer vision development company build industry-specific solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Many companies specialize in sectors like healthcare, retail, manufacturing, agriculture, logistics, and smart cities. Solutions are usually tailored based on compliance requirements and operational needs of the industry."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to develop a custom computer vision solution?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A proof of concept can take a few weeks, while a fully deployed solution may take several months. Timelines depend on data availability, model complexity, and system integration requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Can a computer vision development company integrate AI into existing business systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Most services include API development, cloud integration, ERP or CRM integration, and compatibility with existing software infrastructure."
        }
      },
      {
        "@type": "Question",
        "name": "Do Australian computer vision companies build real-time video analytics systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Many specialize in real-time monitoring systems for surveillance, manufacturing lines, retail stores, and traffic management using edge AI and cloud processing."
        }
      },
      {
        "@type": "Question",
        "name": "Are custom computer vision services better than off-the-shelf AI tools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Custom solutions are designed around your specific workflows and data, which often results in higher accuracy and better long-term performance compared to generic tools."
        }
      }
    ]
  };

  useSeo({
    title: "Computer Vision Development Company Australia",
    description:
      "Leading Computer Vision Development Company Australia delivering AI-powered vision solutions for automation, analytics, and real-time image processing.",
    canonical: "https://zynextechnologies.com.au/computer-vision"
  });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      videoRef.current.volume = volume;
    }
  }, [isMuted, volume]);

  // useEffect(() => {
  //   document.title = "Computer Vision Development Company Australia";
  //   const metaDescription = document.querySelector('meta[name="description"]');
  //   if (metaDescription) {
  //     metaDescription.setAttribute(
  //       "content",
  //       "Leading Computer Vision Development Company Australia delivering AI-powered vision solutions for automation, analytics, and real-time image processing."
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
      icon: <Eye className="w-6 h-6" />,
      title: "Object Detection & Recognition",
      description:
        "Identify and classify objects in images and videos with high accuracy using advanced deep learning models for real-world applications.",
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Image & Video Analysis",
      description:
        "Extract meaningful insights from visual data, analyze patterns, detect anomalies, and understand complex scenes automatically.",
    },
    {
      icon: <Scan className="w-6 h-6" />,
      title: "Facial Recognition & Biometrics",
      description:
        "Secure authentication, access control, and identity verification using state-of-the-art facial recognition technology.",
    },
    {
      icon: <FileSearch className="w-6 h-6" />,
      title: "Optical Character Recognition",
      description:
        "Convert images of text into machine-readable data with high accuracy across multiple languages and document types.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Inspection & Defect Detection",
      description:
        "Automate manufacturing quality control with AI-powered visual inspection that detects defects with superhuman precision.",
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Real-Time Video Processing",
      description:
        "Process and analyze video streams in real-time for surveillance, monitoring, traffic analysis, and safety applications.",
    },
  ];

  const technologies = [
    {
      name: "Python",
      icon: pythonImg.src,
      color: "#3776AB",
    },
    {
      name: "TensorFlow",
      icon: tensorflowImg.src,
      color: "#FF6F00",
    },
    {
      name: "OpenCV",
      icon: opencvImg.src,
      color: "#5C3EE8",
    },
    {
      name: "Microsoft Azure",
      icon: azureImg.src,
      color: "#00FFFF",
    },
    {
      name: "OCR",
      icon: ocrImg.src,
      color: "#3B82F6",
    },
    {
      name: "Amazon Rekognition",
      icon: amazonImg.src,
      color: "#4285F4",
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
            src="/work/vision.webp"
            alt="Computer Vision"
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-base lg:text-lg font-medium mb-6 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 text-cyan-200"
            >
              <Eye className="w-4 h-4" />
              Computer Vision Solutions
            </motion.div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-extrabold text-white mb-6 leading-tight">
              Computer Vision Development Company and Services in{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                Australia
              </span>
            </h1>

            <p className="text-base sm:text-md md:text-lg lg:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              As a leading Computer Vision Development Company and Services in
              Australia, we build intelligent vision-powered systems that
              analyze images and video in real time. Our team designs scalable
              computer vision solutions that help businesses automate
              inspections, improve operational accuracy, and turn visual data
              into measurable business outcomes.
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
              className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 bg-white text-cyan-600 border border-cyan-300 hover:bg-cyan-50 hover:border-cyan-600"
            >
              Machine Learning
            </button>
            <button
              onClick={() => router.push("/chatbot")}
              className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 bg-white text-cyan-600 border border-cyan-300 hover:bg-cyan-50 hover:border-cyan-600"
            >
              Chat bot
            </button>
            <button
              onClick={() => router.push("/generative-ai")}
              className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 bg-white text-cyan-600 border border-cyan-300 hover:bg-cyan-50 hover:border-cyan-600"
            >
              Generative AI
            </button>
            <button
              onClick={() => router.push("/computer-vision")}
              className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 bg-cyan-50 text-cyan-700 border-2 border-cyan-600"
            >
              Computer Vision
            </button>
            <button
              onClick={() => router.push("/recommendation-engine")}
              className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 bg-white text-cyan-600 border border-cyan-300 hover:bg-cyan-50 hover:border-cyan-600"
            >
              Recommendation Engine
            </button>
            <button
              onClick={() => router.push("/agentic-ai")}
              className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 bg-white text-cyan-600 border border-cyan-300 hover:bg-cyan-50 hover:border-cyan-600"
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
                Computer Vision
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Computer vision enables machines to understand and act on visual
              data. From object detection and facial recognition to real-time
              video analysis, it helps businesses make faster, smarter decisions
              with exceptional accuracy.
            </p>

            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              We build custom computer vision solutions using advanced deep
              learning automating inspection, analytics, document processing,
              and surveillance across industries. Our systems transform images
              and video into actionable insights, delivering scalable,
              enterprise-grade performance in the cloud or at the edge.
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
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
                  <video
                    ref={videoRef}
                    className="w-full aspect-[16/9] bg-black object-contain"
                    autoPlay
                    loop
                    playsInline
                    muted={isMuted}
                  >
                    <source src="/videos/computer.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Custom Video Controls - Show on Hover */}
                  <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[90%] sm:w-auto flex justify-center">
                    <div className="flex items-center gap-2 sm:gap-3 bg-cyan-600/80 backdrop-blur-md rounded-full px-3 sm:px-4 py-2 sm:py-3 shadow-lg">
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
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#ecfeff]">
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
                Deliver
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive computer vision capabilities to automate visual
              tasks and extract insights
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
                className="group bg-white/90 backdrop-blur-sm border border-cyan-100/50 rounded-2xl p-6 lg:p-8 hover:-translate-y-1 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-100/50"
              >
                <div className="mb-4">
                  <div className="inline-flex w-14 h-14 rounded-xl items-center justify-center bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-600 group-hover:scale-110 transition-transform duration-300">
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

      {/* Computer Vision Projects Section */}
      <ComputerVisionProjects />

      {/* use case section */}
      <section className="py-8 sm:py-10 lg:py-12 px-2 sm:px-4 lg:px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-3">
              Real-World{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
                Use Cases
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Computer Vision Solutions Driving Visual Intelligence
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
              src="/computer/first1.jpeg"
              alt="Computer Vision Applications"
              className="w-full h-[400px] object-contain"
            />
            <img
              src="/computer/Diverse.webp"
              alt="Computer Vision Use Cases"
              className="w-full h-96 object-contain"
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
                Technologies
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Powered by advanced computer vision frameworks and platforms.
            </p>
          </motion.div>

          {/* Technologies Container */}
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
              <div className="flex gap-4 sm:gap-5 lg:gap-6">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex flex-col items-center justify-center group"
                  >
                    {/* Logo Container - Circular */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center p-2 sm:p-3 group-hover:shadow-lg group-hover:border-cyan-500/30 group-hover:-translate-y-1 transition-all duration-300">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {/* Technology Name */}
                    <p className="mt-2 text-xs sm:text-sm font-medium text-gray-500 group-hover:text-cyan-600 transition-colors duration-300 whitespace-nowrap">
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
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-cyan-100/80 backdrop-blur-sm border border-cyan-200/50 text-cyan-700">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-gray-900 mb-4">
              Frequently Asked{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">
                Questions
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Common questions about Computer Vision development services in Australia
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
                question: "How do I choose the right computer vision development company in Australia?",
                answer: "Look for a company with proven experience in real-world deployments, not just prototypes. Check their expertise in AI model training, data labeling, edge deployment, and integration with existing systems. Australian compliance knowledge and industry-specific experience also matter."
              },
              {
                question: "Can an Australian computer vision development company build industry-specific solutions?",
                answer: "Yes. Many companies specialize in sectors like healthcare, retail, manufacturing, agriculture, logistics, and smart cities. Solutions are usually tailored based on compliance requirements and operational needs of the industry."
              },
              {
                question: "How long does it take to develop a custom computer vision solution?",
                answer: "A proof of concept can take a few weeks, while a fully deployed solution may take several months. Timelines depend on data availability, model complexity, and system integration requirements."
              },
              {
                question: "Can a computer vision development company integrate AI into existing business systems?",
                answer: "Yes. Most services include API development, cloud integration, ERP or CRM integration, and compatibility with existing software infrastructure."
              },
              {
                question: "Do Australian computer vision companies build real-time video analytics systems?",
                answer: "Yes. Many specialize in real-time monitoring systems for surveillance, manufacturing lines, retail stores, and traffic management using edge AI and cloud processing."
              },
              {
                question: "Are custom computer vision services better than off-the-shelf AI tools?",
                answer: "Custom solutions are designed around your specific workflows and data, which often results in higher accuracy and better long-term performance compared to generic tools."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/80 backdrop-blur-sm border border-cyan-100/50 rounded-2xl overflow-hidden hover:shadow-xl hover:border-cyan-200/60 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-cyan-50/30 transition-colors duration-200"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-cyan-600 flex-shrink-0 transition-transform duration-300 ${
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
                  <p className="text-base text-gray-600 leading-relaxed px-6 pb-6 border-t border-cyan-100/30">
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
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>

            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-6">
                Ready to{" "}
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  Get Started?
                </span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform your visual data into actionable insights with
                cutting-edge computer vision solutions. Let&apos;s discuss how we can
                help you automate visual tasks and unlock new possibilities.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2.5 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(6,182,212,0.5)] shadow-lg w-full sm:w-auto min-h-[44px]"
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
                    className="w-5 h-5 text-cyan-600 flex-shrink-0"
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
                    Enterprise-Grade Solutions
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg
                    className="w-5 h-5 text-cyan-600 flex-shrink-0"
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

            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 -z-10"></div>
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

export default ComputerVision;
