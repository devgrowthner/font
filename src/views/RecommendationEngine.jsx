'use client';

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ThumbsUp,
  ShoppingCart,
  TrendingUp,
  Users,
  Sparkles,
  Target,
  Pause,
  Play,
  RotateCcw,
  Volume2,
  VolumeX,
  ChevronDown,
} from "lucide-react";
import ContactModal from "../components/ContactModal";
import Footer from "../components/Footer";
import RecommendationEngineProjects from "../components/projects/RecommendationEngineProjects";
import { useSeo } from "../hooks/useSeo";
import Schema from "../components/Schema";
import pythonImg from "../assets/Machine/python.png";
import nlpImg from "../assets/chatbot/nlp.png";

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

const RecommendationEngine = () => {
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
        "name": "How long does it take to develop a recommendation engine in Australia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on the complexity of your data and features. A basic MVP may take 6 to 10 weeks, while advanced AI-driven personalization systems can take several months, especially if they require real-time processing and large data integration."
        }
      },
      {
        "@type": "Question",
        "name": "What industries benefit most from working with a recommendation engine development company in Australia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "eCommerce platforms, streaming services, online education providers, fintech apps, healthcare platforms, and SaaS tools see strong results. Any business that wants to personalize user experience can benefit from recommendation engine development."
        }
      },
      {
        "@type": "Question",
        "name": "How do recommendation engine companies measure success after deployment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "They usually track metrics like click-through rate, conversion rate, average order value, session duration, and retention rate. The goal is not just to show recommendations but to improve measurable business outcomes."
        }
      },
      {
        "@type": "Question",
        "name": "Can a recommendation engine work in real time?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Advanced systems can process user actions instantly and adjust recommendations dynamically. This is especially useful for eCommerce, streaming platforms, and SaaS dashboards."
        }
      },
      {
        "@type": "Question",
        "name": "Will a recommendation engine still work if my business is small?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, but the approach may differ. A smaller business may start with a lightweight model and scale as user data grows. A good Australian development partner will design a solution that fits your current size and future growth."
        }
      },
      {
        "@type": "Question",
        "name": "Can recommendation engines be built for B2B platforms?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Many Australian companies build recommendation systems for B2B SaaS tools, marketplaces, and enterprise dashboards. These systems can suggest features, tools, suppliers, or relevant content based on user behavior."
        }
      },
      {
        "@type": "Question",
        "name": "Can recommendation engines work for startups, or are they only for large enterprises?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "They work for both. Startups may start with leaner AI models and scale as their user base grows. Many Australian firms offer phased development to match budget and growth stage."
        }
      }
    ]
  };

  useSeo({
    title: "Top Recommendation Engine Development Company in Australia",
    description:
      "Looking for the best Recommendation Engine Development Company in Australia? We deliver custom, high-performing AI recommendation solutions that boost engagement and revenue.",
      canonical: "https://zynextechnologies.com.au/recommendation-engine"
  });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      videoRef.current.volume = volume;
    }
  }, [isMuted, volume]);

  // useEffect(() => {
  //   document.title =
  //     "Top Recommendation Engine Development Company in Australia";
  //   const metaDescription = document.querySelector('meta[name="description"]');
  //   if (metaDescription) {
  //     metaDescription.setAttribute(
  //       "content",
  //       "Looking for the best Recommendation Engine Development Company in Australia? We deliver custom, high-performing AI recommendation solutions that boost engagement and revenue."
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
      icon: <ThumbsUp className="w-6 h-6" />,
      title: "Personalized Product Recommendations",
      description:
        "Increase conversions with AI-powered product suggestions tailored to each user's preferences, behavior, and purchase history.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative & Content-Based Filtering",
      description:
        "Combine multiple recommendation algorithms to deliver the most relevant suggestions using both user behavior and item attributes.",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Real-Time Recommendation Updates",
      description:
        "Adapt recommendations instantly as users interact, ensuring suggestions stay relevant throughout their journey.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Cross-Sell & Upsell Strategies",
      description:
        "Maximize revenue with intelligent product bundles, complementary item suggestions, and premium upgrade recommendations.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Behavioral Analysis & Profiling",
      description:
        "Build detailed user profiles from browsing patterns, clicks, purchases, and interactions to improve recommendation accuracy.",
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "A/B Testing & Optimization",
      description:
        "Continuously test and optimize recommendation strategies to maximize click-through rates, conversions, and revenue.",
    },
  ];

  const technologies = [
    {
      name: "Python",
      icon: pythonImg.src,
      color: "#3776AB",
    },
    {
      name: "NLP",
      icon: nlpImg.src,
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
            src="/work/engine.webp"
            alt="Recommendation Engine"
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm lg:text-lg font-medium mb-6 bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 text-teal-200"
            >
              <Target className="w-4 h-4" />
              Recommendation Engine Solutions
            </motion.div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-extrabold text-white mb-6 leading-tight">
              Recommendation Engine Development Company in{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-400">
                Australia
              </span>
            </h1>

            <p className="text-base sm:text-md md:text-lg lg:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              As a leading recommendation system development company in
              Australia, we build intelligent recommendation engines that
              deliver personalized user experiences, improve engagement, and
              drive higher conversions.
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
              className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 bg-white text-teal-600 border border-teal-300 hover:bg-teal-50 hover:border-teal-600"
            >
              Machine Learning
            </button>
            <button
              onClick={() => router.push("/chatbot")}
              className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 bg-white text-teal-600 border border-teal-300 hover:bg-teal-50 hover:border-teal-600"
            >
              Chat bot
            </button>
            <button
              onClick={() => router.push("/generative-ai")}
              className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 bg-white text-teal-600 border border-teal-300 hover:bg-teal-50 hover:border-teal-600"
            >
              Generative AI
            </button>
            <button
              onClick={() => router.push("/computer-vision")}
              className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 bg-white text-teal-600 border border-teal-300 hover:bg-teal-50 hover:border-teal-600"
            >
              Computer Vision
            </button>
            <button
              onClick={() => router.push("/recommendation-engine")}
              className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 bg-teal-50 text-teal-700 border-2 border-teal-600"
            >
              Recommendation Engine
            </button>
            <button
              onClick={() => router.push("/agentic-ai")}
              className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 bg-white text-teal-600 border border-teal-300 hover:bg-teal-50 hover:border-teal-600"
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-emerald-500">
                Recommendation Engines
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Recommendation engines power the personalized experiences users
              expect today. By analyzing behavior, preferences, and patterns,
              they deliver relevant suggestions that drive engagement and
              revenue.
            </p>

            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              We build custom recommendation systems using advanced machine
              learning—combining collaborative, content-based, and hybrid models
              to deliver real-time personalization at scale. Our solutions
              increase engagement, boost conversions, and turn data into
              measurable business growth.
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
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
                  <video
                    ref={videoRef}
                    className="w-full aspect-[16/9] bg-black object-contain"
                    autoPlay
                    loop
                    playsInline
                    muted={isMuted}
                  >
                    <source src="/videos/recommendation.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Custom Video Controls - Show on Hover */}
                  <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[90%] sm:w-auto flex justify-center">
                    <div className="flex items-center gap-2 sm:gap-3 bg-teal-600/80 backdrop-blur-md rounded-full px-3 sm:px-4 py-2 sm:py-3 shadow-lg">
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
            </div>Work
          </motion.div>
        </div>
      </section>

     

      {/* What We Deliver */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#f0fdfa]">
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-emerald-500">
                Deliver
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive recommendation capabilities to personalize
              experiences and maximize revenue
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
                className="group bg-white/90 backdrop-blur-sm border border-teal-100/50 rounded-2xl p-6 lg:p-8 hover:-translate-y-1 transition-all duration-500 hover:shadow-xl hover:shadow-teal-100/50"
              >
                <div className="mb-4">
                  <div className="inline-flex w-14 h-14 rounded-xl items-center justify-center bg-gradient-to-br from-teal-500/20 to-emerald-500/20 text-teal-600 group-hover:scale-110 transition-transform duration-300">
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

       {/* Recommendation Engine Projects Section */}
       <RecommendationEngineProjects />

      {/* Use Cases & Applications Section */}
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-emerald-500">
                Use Cases
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Intelligent recommendation systems that personalize experiences
              and maximize engagement.
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
              src="/recommendation/recommendation-use.webp"
              alt="Recommendation Use Cases"
              className="w-full h-80 object-contain"
            />
            <img
              src="/recommendation/agentic.webp"
              alt="Recommendation Applications"
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-emerald-500">
                Technologies
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Powered by advanced machine learning and AI frameworks.
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
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center p-2 sm:p-3 group-hover:shadow-lg group-hover:border-teal-500/30 group-hover:-translate-y-1 transition-all duration-300">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {/* Technology Name */}
                    <p className="mt-2 text-xs sm:text-sm font-medium text-gray-500 group-hover:text-teal-600 transition-colors duration-300 whitespace-nowrap">
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
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 via-emerald-50 to-green-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-teal-100/80 backdrop-blur-sm border border-teal-200/50 text-teal-700">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-gray-900 mb-4">
              Frequently Asked{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-600">
                Questions
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Common questions about Recommendation Engine development services in Australia
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
                question: "How long does it take to develop a recommendation engine in Australia?",
                answer: "It depends on the complexity of your data and features. A basic MVP may take 6 to 10 weeks, while advanced AI-driven personalization systems can take several months, especially if they require real-time processing and large data integration."
              },
              {
                question: "What industries benefit most from working with a recommendation engine development company in Australia?",
                answer: "eCommerce platforms, streaming services, online education providers, fintech apps, healthcare platforms, and SaaS tools see strong results. Any business that wants to personalize user experience can benefit from recommendation engine development."
              },
              {
                question: "How do recommendation engine companies measure success after deployment?",
                answer: "They usually track metrics like click-through rate, conversion rate, average order value, session duration, and retention rate. The goal is not just to show recommendations but to improve measurable business outcomes."
              },
              {
                question: "Can a recommendation engine work in real time?",
                answer: "Yes. Advanced systems can process user actions instantly and adjust recommendations dynamically. This is especially useful for eCommerce, streaming platforms, and SaaS dashboards."
              },
              {
                question: "Will a recommendation engine still work if my business is small?",
                answer: "Yes, but the approach may differ. A smaller business may start with a lightweight model and scale as user data grows. A good Australian development partner will design a solution that fits your current size and future growth."
              },
              {
                question: "Can recommendation engines be built for B2B platforms?",
                answer: "Yes. Many Australian companies build recommendation systems for B2B SaaS tools, marketplaces, and enterprise dashboards. These systems can suggest features, tools, suppliers, or relevant content based on user behavior."
              },
              {
                question: "Can recommendation engines work for startups, or are they only for large enterprises?",
                answer: "They work for both. Startups may start with leaner AI models and scale as their user base grows. Many Australian firms offer phased development to match budget and growth stage."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/80 backdrop-blur-sm border border-teal-100/50 rounded-2xl overflow-hidden hover:shadow-xl hover:border-teal-200/60 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-teal-50/30 transition-colors duration-200"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-teal-600 flex-shrink-0 transition-transform duration-300 ${
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
                  <p className="text-base text-gray-600 leading-relaxed px-6 pb-6 border-t border-teal-100/30">
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
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-emerald-500"></div>

            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-6">
                Ready to{" "}
                <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">
                  Get Started?
                </span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform user experiences with intelligent recommendation
                engines. Let’s build systems that personalize content, increase
                engagement, and drive higher conversions using data-driven AI.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-4 py-2.5 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(59,130,246,0.5)] shadow-lg w-full sm:w-auto min-h-[44px]"
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
                    className="w-5 h-5 text-teal-600 flex-shrink-0"
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
                    Personalized User Experiences
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg
                    className="w-5 h-5 text-teal-600 flex-shrink-0"
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
                    Scalable AI Recommendations
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 -z-10"></div>
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

export default RecommendationEngine;
