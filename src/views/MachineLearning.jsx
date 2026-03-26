'use client';

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Check,
  Code,
  Database,
  Brain,
  Zap,
  TrendingUp,
  Shield,
  Pause,
  Play,
  RotateCcw,
  Volume2,
  VolumeX,
  ChevronDown,
} from "lucide-react";
import ContactModal from "../components/ContactModal";
import Footer from "../components/Footer";
import MLProjects from "../components/projects/MLProjects";
import { useSeo } from "../hooks/useSeo";
import Schema from "../components/Schema";
import pythonImg from "../assets/Machine/python.png";
import awsImg from "../assets/Machine/aws.png";
import deepImg from "../assets/Machine/deep.png";
import pytorchImg from "../assets/Machine/pytorch.png";
import scikitImg from "../assets/Machine/scikit.png";
import llmImg from "../assets/Machine/llm.jpeg";
import modelImg from "../assets/Machine/model.jpeg";
import ml1Img from "../assets/Machine/ml4.webp";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const MachineLearning = () => {
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
        "name": "How do I know if my business actually needs machine learning, or just automation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many Australian businesses start with automation, but machine learning becomes relevant when you need systems that learn from data, improve predictions over time, or handle complex decision-making like forecasting, personalization, or anomaly detection."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need large datasets before starting a machine learning project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not always. While larger datasets improve accuracy, many ML projects start with moderate data volumes. The key factor is data quality and structure, not just size"
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between AI and machine learning services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Machine learning is a subset of AI focused on systems that learn from data. AI services may also include rule-based systems, NLP, computer vision, and automation. ML specifically focuses on training models to make predictions or decisions based on patterns."
        }
      },
      {
        "@type": "Question",
        "name": "How much does machine learning development cost in Australia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Costs vary based on complexity. A small proof of concept may start from AUD 15,000–30,000, while enterprise-grade solutions with ongoing optimization can exceed AUD 100,000. Clear scope and defined objectives help control budgets."
        }
      },
      {
        "@type": "Question",
        "name": "What happens after the model is deployed? Is ongoing support required?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Machine learning models require monitoring, retraining, and performance tuning over time. Data patterns change, so ongoing maintenance ensures accuracy and reliability."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to develop a custom machine learning solution?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Timelines depend on data readiness and project scope. A proof of concept may take 4–8 weeks, while a production-ready ML solution can take 3–6 months, including data preparation, model training, and deployment."
        }
      }
    ]
  };

  useSeo({
    title: "Machine Learning Development Services in Australia",
    description:
      "Explore expert machine learning development services in Australia. Build custom ML solutions to automate workflows, improve decisions, and scale faster.",
    canonical: "https://zynextechnologies.com.au/machine-learning"
  });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      videoRef.current.volume = volume;
    }
  }, [isMuted, volume]);

  // useEffect(() => {
  //   document.title = "Machine Learning Development Services in Australia";
  //   const metaDescription = document.querySelector('meta[name="description"]');
  //   if (metaDescription) {
  //     metaDescription.setAttribute(
  //       "content",
  //       "Explore expert machine learning development services in Australia. Build custom ML solutions to automate workflows, improve decisions, and scale faster."
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
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Predictive Analytics & Forecasting",
      description:
        "Build models that predict future trends, customer behavior, sales patterns, and market movements with high accuracy using time-series analysis and advanced forecasting techniques.",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Classification & Regression Models",
      description:
        "Develop sophisticated algorithms for customer segmentation, fraud detection, risk assessment, price optimization, and automated decision-making systems.",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Feature Engineering & Data Processing",
      description:
        "Transform raw data into powerful predictive features through advanced preprocessing, dimensionality reduction, and automated feature selection techniques.",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Custom Model Training & Optimization",
      description:
        "Design and train custom ML models tailored to your specific use case with hyperparameter tuning, cross-validation, and ensemble methods for optimal performance.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Model Deployment & Monitoring",
      description:
        "Deploy ML models to production with robust MLOps pipelines, real-time monitoring, automated retraining, and comprehensive performance tracking.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Inference & Scaling",
      description:
        "Build high-performance inference systems that handle millions of predictions per day with low latency, automatic scaling, and fault tolerance.",
    },
  ];

  const useCases = [
    {
      title: "Customer Churn Prediction",
      description:
        "Identify customers at risk of leaving before they go, enabling proactive retention strategies that reduce churn by up to 25%.",
      metric: "25% Reduction",
    },
    {
      title: "Demand Forecasting",
      description:
        "Optimize inventory and resource allocation with accurate demand predictions, reducing waste and improving supply chain efficiency.",
      metric: "30% Optimization",
    },
    {
      title: "Fraud Detection",
      description:
        "Detect fraudulent transactions in real-time with advanced anomaly detection, saving millions in potential losses.",
      metric: "99.5% Accuracy",
    },
    {
      title: "Price Optimization",
      description:
        "Maximize revenue with dynamic pricing models that adapt to market conditions, competitor pricing, and customer willingness to pay.",
      metric: "15-20% Revenue",
    },
    {
      title: "Quality Control",
      description:
        "Automate defect detection in manufacturing with computer vision and ML, reducing errors and improving product quality.",
      metric: "98% Detection",
    },
    {
      title: "Customer Lifetime Value",
      description:
        "Predict customer lifetime value to optimize marketing spend and focus on high-value customer segments.",
      metric: "3x ROI",
    },
  ];

  const technologies = [
    {
      name: "Python",
      icon: pythonImg.src,
      color: "#3776AB",
    },
    {
      name: "AWS Bedrock",
      icon: awsImg.src,
      color: "#FF6F00",
    },
    {
      name: "Deep Learning",
      icon: deepImg.src,
      color: "#EE4C2C",
    },
    {
      name: "pyTorch",
      icon: pytorchImg.src,
      color: "#F7931E",
    },
    {
      name: "Scikit-Learn",
      icon: scikitImg.src,
      color: "#FF9900",
    },
    {
      name: "LLM Fine-Tuning",
      icon: llmImg.src,
      color: "#0078D4",
    },
    {
      name: "Model Training",
      icon: modelImg.src,
      color: "#2496ED",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Problem Definition & Data Assessment",
      description:
        "We start by understanding your business challenge and evaluating your data quality, quantity, and availability. This includes identifying the right success metrics and ensuring ML is the right solution.",
    },
    {
      number: "02",
      title: "Data Preparation & Feature Engineering",
      description:
        "Clean, transform, and prepare your data for modeling. We perform exploratory data analysis, handle missing values, engineer relevant features, and create training/validation datasets.",
    },
    {
      number: "03",
      title: "Model Development & Training",
      description:
        "Experiment with multiple algorithms, train candidate models, perform hyperparameter tuning, and select the best performing model based on your business metrics.",
    },
    {
      number: "04",
      title: "Validation & Testing",
      description:
        "Rigorously validate model performance using cross-validation, test on unseen data, check for bias and fairness, and ensure the model generalizes well to production scenarios.",
    },
    {
      number: "05",
      title: "Deployment & Integration",
      description:
        "Deploy the model to production with proper infrastructure, create APIs for predictions, integrate with your existing systems, and set up monitoring dashboards.",
    },
    {
      number: "06",
      title: "Monitoring & Continuous Improvement",
      description:
        "Monitor model performance, detect data drift, automate retraining pipelines, and continuously optimize the model based on real-world feedback and new data.",
    },
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Data-Driven Decisions",
      description:
        "Make confident decisions backed by predictive insights rather than intuition, reducing risk and improving outcomes.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automation & Efficiency",
      description:
        "Automate repetitive decision-making processes, freeing up your team to focus on strategic initiatives and creative work.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Risk Reduction",
      description:
        "Identify potential risks, fraud, and anomalies before they become costly problems, protecting your business and customers.",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Personalization at Scale",
      description:
        "Deliver personalized experiences to millions of customers simultaneously with ML-powered recommendation and targeting systems.",
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
            src="/work/ml.webp"
            alt="Machine Learning"
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
              <Brain className="w-4 h-4" />
              Machine Learning Solutions
            </motion.div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-extrabold text-white mb-6 leading-tight">
              Machine Learning Development Services &amp; Solutions in{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                Australia
              </span>
            </h1>

            <p className="text-base sm:text-md md:text-lg lg:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Build smarter, data-driven systems with custom machine learning
              solutions designed for real-world business challenges. We develop,
              train, and deploy intelligent models that automate decisions,
              uncover patterns, and help Australian businesses scale with
              confidence.
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
              className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 bg-blue-50 text-blue-700 border-2 border-blue-600"
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
              className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 bg-white text-blue-600 border border-blue-300 hover:bg-blue-50 hover:border-blue-600"
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
                Machine Learning
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Machine learning is no longer futuristic it’s shaping how
              businesses operate today. From intelligent automation to
              data-driven decision-making, ML enables smarter operations, better
              customer experiences, and faster growth.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              We design custom machine learning solutions that turn raw data
              into actionable insights helping you predict outcomes, automate
              complexity, and unlock new revenue opportunities with confidence.
            </p>
            <div className="mt-10">
              <div className="max-w-5xl mx-auto">
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
                    <source src="/videos/ml.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Custom Video Controls - Show on Hover */}
                  <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[90%] sm:w-auto flex justify-center">
                    <div className="flex items-center gap-2 sm:gap-3 bg-blue-600/80 backdrop-blur-md rounded-full px-3 sm:px-4 py-2 sm:py-3 shadow-lg">
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
            {/* <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              Whether you're looking to optimize operations, enhance customer experiences, or unlock new revenue streams, 
              our ML expertise transforms raw data into actionable intelligence that drives measurable business impact.
            </p> */}
          </motion.div>
        </div>
      </section>

     
      {/* What We Deliver - Bullet Points */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#eff6ff]">
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
                Deliver
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive ML capabilities to solve your most challenging
              business problems
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
                  <div className="inline-flex w-14 h-14 rounded-xl items-center justify-center bg-gradient-to-br from-blue-500/20 to-cyan-500/20 text-blue-600 group-hover:scale-110 transition-transform duration-300">
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

       {/* ML Projects Section */}
       <MLProjects />


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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
                Use Cases
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Proven machine learning applications that drive measurable
              business results
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
              src={ml1Img.src}
              alt="Machine Learning Applications"
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
              Core{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
                Technologies
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Powered by industry-leading frameworks and tools for building
              robust ML solutions.
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
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-blue-100/80 backdrop-blur-sm border border-blue-200/50 text-blue-700">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-gray-900 mb-4">
              Frequently Asked{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
                Questions
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Common questions about machine learning development services in Australia
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
                question: "How do I know if my business actually needs machine learning, or just automation?",
                answer: "Many Australian businesses start with automation, but machine learning becomes relevant when you need systems that learn from data, improve predictions over time, or handle complex decision-making like forecasting, personalization, or anomaly detection."
              },
              {
                question: "Do I need large datasets before starting a machine learning project?",
                answer: "Not always. While larger datasets improve accuracy, many ML projects start with moderate data volumes. The key factor is data quality and structure, not just size."
              },
              {
                question: "What is the difference between AI and machine learning services?",
                answer: "Machine learning is a subset of AI focused on systems that learn from data. AI services may also include rule-based systems, NLP, computer vision, and automation. ML specifically focuses on training models to make predictions or decisions based on patterns."
              },
              {
                question: "How much does machine learning development cost in Australia?",
                answer: "Costs vary based on complexity. A small proof of concept may start from AUD 15,000–30,000, while enterprise-grade solutions with ongoing optimization can exceed AUD 100,000. Clear scope and defined objectives help control budgets."
              },
              {
                question: "What happens after the model is deployed? Is ongoing support required?",
                answer: "Yes. Machine learning models require monitoring, retraining, and performance tuning over time. Data patterns change, so ongoing maintenance ensures accuracy and reliability."
              },
              {
                question: "How long does it take to develop a custom machine learning solution?",
                answer: "Timelines depend on data readiness and project scope. A proof of concept may take 4–8 weeks, while a production-ready ML solution can take 3–6 months, including data preparation, model training, and deployment."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/80 backdrop-blur-sm border border-blue-100/50 rounded-2xl overflow-hidden hover:shadow-xl hover:border-blue-200/60 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-blue-50/30 transition-colors duration-200"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
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
                  <p className="text-base text-gray-600 leading-relaxed px-6 pb-6 border-t border-blue-100/30">
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
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>

            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-6">
                Ready to{" "}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Get Started?
                </span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform your business with custom machine learning solutions.
                Let&apos;s discuss how we can help you unlock insights, automate
                processes, and drive data-driven decision making.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2.5 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(59,130,246,0.5)] shadow-lg w-full sm:w-auto min-h-[44px]"
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
                    className="w-5 h-5 text-blue-600 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">Data-Driven Insights</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg
                    className="w-5 h-5 text-blue-600 flex-shrink-0"
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

export default MachineLearning;
