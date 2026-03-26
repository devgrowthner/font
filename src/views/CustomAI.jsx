'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronDown } from 'lucide-react';
const bg2 = '/bg2.webp';
import ContactModal from '../components/ContactModal';
import Footer from '../components/Footer';
import MachineLearningModal from '../components/areaofwork/MachineLearningModal';
import ChatbotModal from '../components/areaofwork/ChatbotModal';
import GenerativeAIModal from '../components/areaofwork/GenerativeAIModal';
import ComputerVisionModal from '../components/areaofwork/ComputerVisionModal';
import RecommendationEngineModal from '../components/areaofwork/RecommendationEngineModal';
import AgenticAIModal from '../components/areaofwork/AgenticAIModal';
import { useSeo } from '../hooks/useSeo';
import Schema from '../components/Schema';

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

const CustomAI = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does a custom AI development company in Australia do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A custom AI development company in Australia builds AI solutions designed specifically for a business instead of using ready-made software. These solutions may include AI automation, machine learning models, AI chatbots, predictive analytics, and workflow automation to improve efficiency and solve real business problems."
        }
      },
      {
        "@type": "Question",
        "name": "How do I choose the right custom AI development company in Australia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When choosing a company, look for proven experience in AI technologies, a clear development process, and knowledge of your industry. It is also important that the company can build scalable AI systems and understands your business goals."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost to hire a custom AI development company in Australia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost depends on the complexity of the project, the AI technology used, the amount of data required, and system integrations. Simple AI automation projects may cost less, while advanced machine learning platforms usually require a higher investment."
        }
      },
      {
        "@type": "Question",
        "name": "Can small businesses in Australia benefit from custom AI development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Small and medium businesses can use AI to automate repetitive tasks, improve customer support, analyze data, and improve overall productivity. Custom AI solutions help businesses implement technology that fits their specific operations."
        }
      },
      {
        "@type": "Question",
        "name": "Do custom AI development companies in Australia offer AI consulting services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Many companies also provide AI consulting where they evaluate your business processes, identify areas where AI can help, assess feasibility, and create a roadmap for implementing AI solutions."
        }
      },
      {
        "@type": "Question",
        "name": "Are AI solutions developed by these companies secure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Most professional AI development companies follow strict security practices, including encrypted systems, controlled data access, and secure data handling to ensure sensitive business information remains protected."
        }
      }
    ]
  };

  useSeo({
    title: "Custom AI Development Company in Australia | Zynex Technologies",
    description: "Looking for a custom AI development company in Australia? Zynex Technologies builds AI automation, machine learning solutions, and tailored AI systems for businesses.",
    canonical: "https://zynextechnologies.com.au/custom-ai"
  });

  const openModal = (modalName) => {
    setActiveModal(modalName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const services = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "AI Consulting",
      description:
        "We evaluate your business processes, identify areas where AI can help, assess feasibility, and create a roadmap for implementing AI solutions that align with your business goals."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Machine Learning Development",
      description:
        "Build custom machine learning models for predictive analytics, classification, regression, and automation. We design and train models tailored to your specific business requirements and data."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "AI Chatbot Development",
      description:
        "Develop intelligent conversational AI systems that automate customer support, improve engagement, and handle complex queries with natural language understanding."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: "Computer Vision Development",
      description:
        "Create AI systems that analyze and interpret visual data for quality control, object detection, facial recognition, and automated inspection processes."
    }
  ];

  const benefits = [
    {
      metric: "95%",
      label: "Success Rate on Deployed Projects"
    },
    {
      metric: "3-6 weeks",
      label: "Average Time to Deployment"
    },
    {
      metric: "300%",
      label: "Average ROI in Year 1"
    },
    {
      metric: "24/7",
      label: "Post-Launch Support"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We begin by understanding your business requirements, goals, and the problem you want to solve. This stage helps define the right AI use case, project scope, and expected outcome before development starts."
    },
    {
      number: "02",
      title: "Data Preparation",
      description: "Once the use case is clear, we collect, review, and prepare the data required to train and support the AI model. Clean and well-structured data is a key part of building a reliable solution."
    },
    {
      number: "03",
      title: "Model Development",
      description: "Our engineers design and train AI and machine learning models using modern frameworks and development practices. We focus on performance, relevance, and practical business application during this stage."
    },
    {
      number: "04",
      title: "Deployment",
      description: "After development and testing, the AI solution is deployed and integrated with your existing systems. This ensures the solution works effectively within your current workflows and supports day-to-day operations."
    }
  ];

  const whyChooseUs = [
    {
      title: "Custom AI Solutions Built for Your Business",
      description: "We design AI systems specifically for your workflows, business goals, and data. This ensures the solution fits naturally into your operations rather than forcing you to adjust your processes."
    },
    {
      title: "End-to-End Development Support",
      description: "From initial planning and feasibility analysis to development and deployment, we support the complete AI development process. Our team works closely with you at every stage of the project."
    },
    {
      title: "Scalable and Future-Ready Architecture",
      description: "Our AI solutions are designed to scale with your business. As your data grows and your requirements evolve, the system can expand without major changes to the underlying infrastructure."
    },
    {
      title: "Integration with Existing Systems",
      description: "We ensure that your AI solutions integrate smoothly with your existing software, tools, and databases so that your team can use them without disrupting current workflows."
    },
    {
      title: "Focus on Practical Business Outcomes",
      description: "Our goal is not just to build AI models but to deliver systems that improve efficiency, automate tasks, and create measurable value for your business."
    },
    {
      title: "Experienced AI Development Team",
      description: "Our team brings expertise in machine learning, AI automation, and intelligent system design, helping businesses implement advanced technology in a structured and reliable way."
    },
    {
      title: "Long-Term Support and Optimization",
      description: "After deployment, we continue to support the system by monitoring performance, improving models, and ensuring the solution continues to deliver consistent results."
    }
  ];

  const faqs = [
    {
      question: "What does a custom AI development company in Australia do?",
      answer: "A custom AI development company in Australia builds AI solutions designed specifically for a business instead of using ready-made software. These solutions may include AI automation, machine learning models, AI chatbots, predictive analytics, and workflow automation to improve efficiency and solve real business problems."
    },
    {
      question: "How do I choose the right custom AI development company in Australia?",
      answer: "When choosing a company, look for proven experience in AI technologies, a clear development process, and knowledge of your industry. It is also important that the company can build scalable AI systems and understands your business goals."
    },
    {
      question: "How much does it cost to hire a custom AI development company in Australia?",
      answer: "The cost depends on the complexity of the project, the AI technology used, the amount of data required, and system integrations. Simple AI automation projects may cost less, while advanced machine learning platforms usually require a higher investment."
    },
    {
      question: "Can small businesses in Australia benefit from custom AI development?",
      answer: "Yes. Small and medium businesses can use AI to automate repetitive tasks, improve customer support, analyze data, and improve overall productivity. Custom AI solutions help businesses implement technology that fits their specific operations."
    },
    {
      question: "Do custom AI development companies in Australia offer AI consulting services?",
      answer: "Yes. Many companies also provide AI consulting where they evaluate your business processes, identify areas where AI can help, assess feasibility, and create a roadmap for implementing AI solutions."
    },
    {
      question: "Are AI solutions developed by these companies secure?",
      answer: "Yes. Most professional AI development companies follow strict security practices, including encrypted systems, controlled data access, and secure data handling to ensure sensitive business information remains protected."
    }
  ];

  const areasOfExpertise = [
    { name: "Machine Learning", route: "/machine-learning" },
    { name: "Chat bot", route: "/chatbot" },
    { name: "Generative AI", route: "/generative-ai" },
    { name: "Computer Vision", route: "/computer-vision" },
    { name: "Recommendation Engine", route: "/recommendation-engine" },
    { name: "Agentic AI", route: "/agentic-ai" },
    { name: "AI Automation", route: "/ai-automation" },
    { name: "AI Feasibility Analysis", route: "/ai-feasibility-analysis" }

  ];

  return (
    <div className="min-h-screen bg-[#fefdfb]">
      {/* Add Schema for FAQ */}
      <Schema schema={faqSchema} />
      
      {/* Hero Section with Image */}
      <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#f0fdf4] via-[#fefdfb] to-[#ecfdf5]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(122,130,80,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(122,130,80,0.08),transparent_50%)]"></div>
        <div className="absolute top-20 left-1/4 w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl animate-float hidden sm:block" style={{ backgroundColor: 'rgba(113, 147, 52, 0.08)' }}></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl animate-float hidden sm:block" style={{ backgroundColor: 'rgba(113, 147, 52, 0.08)', animationDelay: '2s' }}></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Back Button */}
          <div className="mb-8 sm:mb-12">
            <button
              onClick={() => router.push('/')}
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors duration-300 font-medium text-sm sm:text-base group hover:text-brand-green"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:-translate-x-1" />
            </button>
          </div>

          {/* Hero Content with Image */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInLeft}
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
                style={{ backgroundColor: 'rgba(113, 147, 52, 0.1)', borderColor: 'rgba(113, 147, 52, 0.3)', borderWidth: '1px', color: '#719334' }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                Custom AI Development
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-foreground mb-6 leading-tight">
                Custom AI Development Company in{' '}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Australia
                </span>
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
                As a Custom AI Development Company in Australia, Zynex Technologies builds AI solutions tailored to your business needs. We develop AI systems that automate processes, improve decision-making, and turn business data into real value.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
                Our team creates scalable AI applications, machine learning models, and automation tools that integrate smoothly with your existing systems and support long-term business growth.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center justify-center gap-2 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg w-full sm:w-auto min-h-[44px]"
                  style={{ background: 'linear-gradient(to right, #719334, #719334)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(to right, #5a7529, #5a7529)';
                    e.currentTarget.style.boxShadow = '0 12px 35px rgba(113, 147, 52, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(to right, #719334, #719334)';
                    e.currentTarget.style.boxShadow = '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)';
                  }}
                >
                  <span>Get Started</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="none">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto min-h-[44px] border-2"
                  style={{ 
                    borderColor: 'rgba(113, 147, 52, 0.6)',
                    color: '#719334',
                    backgroundColor: 'white'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#719334';
                    e.currentTarget.style.backgroundColor = 'rgba(113, 147, 52, 0.05)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(113, 147, 52, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(113, 147, 52, 0.6)';
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.boxShadow = '';
                  }}
                >
                  <span>Contact Our Team</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="none">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInRight}
              className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)]"
            >
              <img
                src={bg2}
                alt="Custom AI Development"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom right, rgba(113, 147, 52, 0.3), rgba(113, 147, 52, 0.3))' }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </motion.div>
          </div>

          {/* Benefits Grid */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/80 backdrop-blur-sm border rounded-xl p-5 text-center transition-all duration-300"
                style={{ borderColor: 'rgba(113, 147, 52, 0.6)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(113, 147, 52, 0.7)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(113, 147, 52, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(113, 147, 52, 0.6)';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <div className="text-2xl sm:text-3xl font-heading font-extrabold bg-clip-text text-transparent mb-2" style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334)' }}>
                  {benefit.metric}
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground font-body">
                  {benefit.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Areas of Expertise Section */}
      <section className="py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f5f5f5] via-[#f0f0f0] to-[#ebebeb] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(113,147,52,0.02),transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px" style={{ backgroundImage: 'linear-gradient(to right, transparent, rgba(113, 147, 52, 0.5), transparent)' }}></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-4">
              Areas of{' '}
              <span className="relative inline-block">
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Expertise
                </span>
                {/* <span className="absolute bottom-0 left-0 w-full h-1" style={{ background: 'linear-gradient(to right, #719334, #719334)' }}></span> */}
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 max-w-5xl mx-auto"
          >
            {areasOfExpertise.map((area, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 transition-all duration-300 cursor-pointer"
                style={{ 
                  borderColor: 'rgba(113, 147, 52, 0.4)',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)'
                }}
                onClick={() => router.push(area.route)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(113, 147, 52, 0.7)';
                  e.currentTarget.style.backgroundColor = 'rgba(113, 147, 52, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(113, 147, 52, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(113, 147, 52, 0.4)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <span className="text-base sm:text-lg font-medium text-foreground font-body">
                  {area.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#f0fdf4] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(122,130,80,0.05),transparent_60%)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-px" style={{ backgroundImage: 'linear-gradient(to right, transparent, rgba(113, 147, 52, 0.5), transparent)' }}></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-4">
                Our{' '}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Development Process
                </span>
              </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              A structured approach to building AI solutions from concept to deployment
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-white/90 backdrop-blur-sm border rounded-2xl p-6 hover:-translate-y-1 transition-all duration-500"
                style={{ borderColor: 'rgba(113, 147, 52, 0.5)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(113, 147, 52, 0.6)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(113, 147, 52, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(113, 147, 52, 0.5)';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <div className="text-5xl font-heading font-extrabold bg-clip-text text-transparent mb-4 opacity-50" style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334)' }}>
                  {step.number}
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-body">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#fefdfb] via-[#fff7ed] to-[#fef3c7]/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(122,130,80,0.06),transparent_60%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px" style={{ backgroundImage: 'linear-gradient(to right, transparent, rgba(113, 147, 52, 0.5), transparent)' }}></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-4">
              Our Custom AI{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Development Services
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              End-to-end AI development services tailored to your business needs
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-white/90 backdrop-blur-sm border border-amber-100/50 rounded-2xl p-6 lg:p-8 hover:-translate-y-1 transition-all duration-500"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(113, 147, 52, 0.6)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(113, 147, 52, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(251, 191, 36, 0.5)';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <div className="mb-4">
                  <div className="inline-flex w-14 h-14 rounded-xl items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(to bottom right, rgba(113, 147, 52, 0.2), rgba(113, 147, 52, 0.2))', color: '#719334' }}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-body">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Zynex Technologies Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(113,147,52,0.03),transparent_70%)]"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-4">
              Why Choose{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Zynex Technologies
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              When working with Zynex Technologies, businesses get AI solutions that are designed around real operational needs rather than generic software implementations. Our focus is on building practical systems that integrate smoothly with your business processes and support long-term growth.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-gradient-to-br from-white to-gray-50/50 border rounded-2xl p-6 lg:p-8 hover:-translate-y-1 transition-all duration-500"
                style={{ borderColor: 'rgba(113, 147, 52, 0.2)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(113, 147, 52, 0.4)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(113, 147, 52, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(113, 147, 52, 0.2)';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: 'rgba(113, 147, 52, 0.15)' }}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#719334" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-body pl-9">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f8fafb] via-[#f5f7f9] to-[#f0f4f8] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(113,147,52,0.03),transparent_70%)]"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-4">
              Frequently Asked{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Questions
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Common questions about custom AI development in Australia
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/90 backdrop-blur-sm border rounded-xl overflow-hidden transition-all duration-300"
                style={{ borderColor: openFaqIndex === index ? '#719334' : 'rgba(113, 147, 52, 0.2)' }}
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50/50 transition-colors duration-200"
                >
                  <span className="text-base sm:text-lg font-heading font-bold text-foreground pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`}
                    style={{ color: '#719334' }}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaqIndex === index ? 'max-h-96' : 'max-h-0'}`}
                >
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-body">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="relative bg-white/90 backdrop-blur-xl border border-border/30 rounded-3xl overflow-hidden shadow-lg p-8 lg:p-12"
          >
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #719334, #719334)' }}></div>
            
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-6">
                Ready to Build{' '}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Your AI Solution?
                </span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Start with a free discovery call. We'll discuss your challenge, explore whether AI is the right solution, 
                and outline a potential path forward—with complete transparency about feasibility, timeline, and costs.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center justify-center gap-2 text-white px-4 py-2.5 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg w-full sm:w-auto min-h-[44px]"
                  style={{ background: 'linear-gradient(to right, #719334, #719334)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(to right, #5a7529, #5a7529)';
                    e.currentTarget.style.boxShadow = '0 12px 35px rgba(113, 147, 52, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(to right, #719334, #719334)';
                    e.currentTarget.style.boxShadow = '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)';
                  }}
                >
                  <span>Book a Discovery Call</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="none">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-border/50 mt-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg className="w-5 h-5 flex-shrink-0 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-medium">No Obligation</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg className="w-5 h-5 flex-shrink-0 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-medium">Free Feasibility Assessment</span>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(to bottom right, rgba(113, 147, 52, 0.05), transparent, rgba(113, 147, 52, 0.05))' }}></div>
          </motion.div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      {/* Area of Work Modals */}
      <MachineLearningModal 
        isOpen={activeModal === 'machineLearning'} 
        onClose={closeModal}
        onContact={() => {
          closeModal();
          setIsModalOpen(true);
        }}
      />
      <ChatbotModal 
        isOpen={activeModal === 'chatbot'} 
        onClose={closeModal}
        onContact={() => {
          closeModal();
          setIsModalOpen(true);
        }}
      />
      <GenerativeAIModal 
        isOpen={activeModal === 'generativeAI'} 
        onClose={closeModal}
        onContact={() => {
          closeModal();
          setIsModalOpen(true);
        }}
      />
      <ComputerVisionModal 
        isOpen={activeModal === 'computerVision'} 
        onClose={closeModal}
        onContact={() => {
          closeModal();
          setIsModalOpen(true);
        }}
      />
      <RecommendationEngineModal 
        isOpen={activeModal === 'recommendationEngine'} 
        onClose={closeModal}
        onContact={() => {
          closeModal();
          setIsModalOpen(true);
        }}
      />
      <AgenticAIModal 
        isOpen={activeModal === 'agenticAI'} 
        onClose={closeModal}
        onContact={() => {
          closeModal();
          setIsModalOpen(true);
        }}
      />

      <Footer />
    </div>
    
  );
};

export default CustomAI;

