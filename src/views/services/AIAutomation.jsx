'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import ContactModal from '../../components/ContactModal';
import Footer from '../../components/Footer';
import Schema from '../../components/Schema';
import { useSeo } from '../../hooks/useSeo';

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

const AIAutomation = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useSeo({
    title: "AI Automation Company in Australia | AI Workflow Solutions",
    description:
      "AI automation company in Australia helping businesses automate workflows, data processing, chatbots, and document management to improve efficiency and reduce costs.",
    canonical: "https://zynextechnologies.com.au/ai-automation"
  });

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can AI automation improve business operations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI automation improves business operations by streamlining repetitive tasks, processing large volumes of data, and reducing manual errors. Automated systems can manage workflows, generate insights from data, and support decision-making faster than traditional processes. This allows organizations to increase productivity, reduce operational delays, and maintain consistent performance across departments."
        }
      },
      {
        "@type": "Question",
        "name": "What industries benefit the most from AI automation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Industries such as healthcare, finance, retail, manufacturing, logistics, and SaaS benefit significantly from AI automation. Businesses in these sectors use automation to process data, manage customer interactions, optimize supply chains, and improve operational workflows. AI-driven systems help organizations handle complex operations more efficiently while maintaining accuracy and scalability."
        }
      },
      {
        "@type": "Question",
        "name": "What is intelligent document processing in AI automation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Intelligent document processing uses artificial intelligence to automatically classify, extract, and manage data from documents such as invoices, contracts, and forms. AI models can identify key information within documents and organize it into structured systems. This reduces manual document handling and improves accuracy in data management processes."
        }
      },
      {
        "@type": "Question",
        "name": "How are AI automation systems integrated with existing business software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI automation systems can be integrated with existing business tools such as CRM platforms, ERP systems, analytics tools, and internal databases through APIs and automation frameworks. This integration allows automated workflows to operate within the company's current technology stack, ensuring minimal disruption while improving efficiency and process visibility."
        }
      },
      {
        "@type": "Question",
        "name": "What are the main benefits of implementing AI automation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Implementing AI automation offers several benefits, including improved productivity, reduced operational costs, better process accuracy, and faster decision-making. Automated systems can operate continuously without interruptions, allowing businesses to maintain consistent performance and scale their operations more efficiently while minimizing manual workload."
        }
      }
    ]
  };

  const services = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: "Workflow Automation",
      description: "Automate repetitive processes across departments such as sales, marketing, HR, finance, and customer support. Intelligent workflows help reduce manual effort and improve process efficiency."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "AI Data Processing",
      description: "Process large volumes of business data automatically and convert it into actionable insights that support better decision-making."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Intelligent Document Processing",
      description: "Automate document classification, data extraction, and document management using AI-powered systems."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      title: "AI Chatbots and Virtual Assistants",
      description: "Deploy intelligent chatbots that handle customer inquiries, provide support, and assist users across digital channels."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "Business Process Automation",
      description: "Automate complex business processes including approvals, notifications, reporting, and operational workflows."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      title: "AI Integration",
      description: "Integrate AI automation with your CRM, ERP, analytics platforms, and internal systems without disrupting your existing operations."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery and Requirement Analysis",
      description: "We begin by understanding your business operations and identifying processes that can benefit from automation."
    },
    {
      number: "02",
      title: "Workflow and Data Evaluation",
      description: "Our team analyzes your workflows and data sources to design the most effective automation strategy."
    },
    {
      number: "03",
      title: "AI Model Development",
      description: "Machine learning models and automation frameworks are developed to power intelligent systems."
    },
    {
      number: "04",
      title: "System Integration",
      description: "AI automation tools are integrated into your existing technology stack to ensure smooth adoption."
    },
    {
      number: "05",
      title: "Testing and Optimization",
      description: "The automation system undergoes thorough testing to ensure performance, reliability, and accuracy."
    },
    {
      number: "06",
      title: "Deployment and Continuous Monitoring",
      description: "After deployment, we continuously monitor system performance and improve automation workflows."
    }
  ];

  const industries = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Healthcare",
      description: "Automate patient data processing, scheduling systems, and healthcare documentation workflows."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Finance and Banking",
      description: "Improve financial analysis, automate compliance tasks, and enhance fraud detection systems."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      title: "Retail and E-commerce",
      description: "Automate inventory management, customer interactions, and product recommendations."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Manufacturing",
      description: "Improve production planning, predictive maintenance, and operational monitoring."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
      title: "Logistics and Supply Chain",
      description: "Automate shipment tracking, route optimization, and supply chain management."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "SaaS and Technology",
      description: "Improve onboarding workflows, customer support systems, and product analytics using AI automation."
    }
  ];

  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Higher Productivity",
      description: "Automated systems handle repetitive tasks, allowing employees to focus on higher-value work."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Reduced Operational Costs",
      description: "Businesses can reduce manual workload and improve cost efficiency through automation."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Improved Accuracy",
      description: "AI automation reduces human errors and ensures consistent process execution."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Faster Decision Making",
      description: "AI systems analyze large datasets quickly and provide insights that support strategic decisions."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Continuous Operations",
      description: "Automation systems can run 24/7 without interruptions, improving operational efficiency."
    }
  ];

  const whyChooseUs = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Experienced AI Development Team",
      description: "Our engineers have extensive experience in artificial intelligence, machine learning, and automation technologies."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: "Custom-Built Solutions",
      description: "We design automation systems tailored to the specific workflows and requirements of each business."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      title: "Seamless System Integration",
      description: "Our AI solutions integrate smoothly with your existing business software and infrastructure."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "End-to-End Support",
      description: "From strategy and development to deployment and maintenance, we support the entire automation lifecycle."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      title: "Scalable AI Systems",
      description: "Our automation solutions are built to grow with your business and evolving technology needs."
    }
  ];

  const faqs = [
    {
      question: "How can AI automation improve business operations?",
      answer: "AI automation improves business operations by streamlining repetitive tasks, processing large volumes of data, and reducing manual errors. Automated systems can manage workflows, generate insights from data, and support decision-making faster than traditional processes. This allows organizations to increase productivity, reduce operational delays, and maintain consistent performance across departments."
    },
    {
      question: "What industries benefit the most from AI automation?",
      answer: "Industries such as healthcare, finance, retail, manufacturing, logistics, and SaaS benefit significantly from AI automation. Businesses in these sectors use automation to process data, manage customer interactions, optimize supply chains, and improve operational workflows. AI-driven systems help organizations handle complex operations more efficiently while maintaining accuracy and scalability."
    },
    {
      question: "What is intelligent document processing in AI automation?",
      answer: "Intelligent document processing uses artificial intelligence to automatically classify, extract, and manage data from documents such as invoices, contracts, and forms. AI models can identify key information within documents and organize it into structured systems. This reduces manual document handling and improves accuracy in data management processes."
    },
    {
      question: "How are AI automation systems integrated with existing business software?",
      answer: "AI automation systems can be integrated with existing business tools such as CRM platforms, ERP systems, analytics tools, and internal databases through APIs and automation frameworks. This integration allows automated workflows to operate within the company's current technology stack, ensuring minimal disruption while improving efficiency and process visibility."
    },
    {
      question: "What are the main benefits of implementing AI automation?",
      answer: "Implementing AI automation offers several benefits, including improved productivity, reduced operational costs, better process accuracy, and faster decision-making. Automated systems can operate continuously without interruptions, allowing businesses to maintain consistent performance and scale their operations more efficiently while minimizing manual workload."
    }
  ];

  return (
    <div className="min-h-screen bg-[#fefdfb]">
      {/* FAQ Schema */}
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
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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
                AI Automation Company in Australia
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-foreground mb-6 leading-tight">
                AI Automation Company{' '}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  in Australia
                </span>
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
                Automate business processes and improve efficiency with AI-powered automation solutions built for modern organizations.
              </p>

              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center justify-center gap-2 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg min-h-[44px]"
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
                <span>Talk to our AI experts today</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInRight}
              className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)]"
            >
              <img
                src="/aiautomation/aiautomation.webp"
                alt="AI Automation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom right, rgba(113, 147, 52, 0.3), rgba(113, 147, 52, 0.3))' }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </motion.div>
          </div>
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
              AI Automation{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Services We Offer
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              As an experienced AI automation company in Australia, we build solutions that automate critical business processes and improve operational performance.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-white/90 backdrop-blur-sm border border-amber-100/50 rounded-2xl p-6 lg:p-8 hover:-translate-y-1 transition-all duration-500 h-full flex flex-col"
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
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-body flex-grow">
                  {service.description}
                </p>
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
              Our AI Automation{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Development Process
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              We follow a structured approach to deliver reliable and scalable AI automation systems.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative h-full"
              >
                {/* Card with corner fold effect */}
                <div className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col">
                  {/* Number badge in top-right corner */}
                  <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-heading font-extrabold shadow-lg transform group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #719334, #5a7529)' }}>
                    {step.number}
                  </div>
                  
                  {/* Decorative corner fold */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[40px] border-l-transparent border-t-[40px] opacity-20 transition-all duration-300 group-hover:border-l-[50px] group-hover:border-t-[50px]" style={{ borderTopColor: '#719334' }}></div>
                  
                  <div className="relative z-10 pt-6 flex-grow">
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-body">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-400 to-green-600 w-0 group-hover:w-full transition-all duration-500"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f5f5f5] via-[#f0f0f0] to-[#ebebeb] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(113,147,52,0.02),transparent_70%)]"></div>
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
              AI Automation for{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Different Industries
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Our AI automation solutions support businesses across multiple industries.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative h-full"
              >
                {/* Circular icon badge floating above */}
                <div className="absolute -top-6 left-6 z-20">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #719334, #5a7529)', color: 'white' }}>
                    {industry.icon}
                  </div>
                </div>
                
                {/* Main card */}
                <div className="relative pt-8 pb-6 px-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 group-hover:border-green-200 h-full flex flex-col">
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-3 mt-2">
                    {industry.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-body flex-grow">
                    {industry.description}
                  </p>
                  
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50/0 to-green-50/0 group-hover:from-green-50/50 group-hover:to-transparent rounded-2xl transition-all duration-500 -z-10"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#fefdfb] via-[#fef3c7]/20 to-[#fff7ed] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(122,130,80,0.06),transparent_60%)]"></div>
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
              Benefits of AI Automation{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                for Businesses
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              AI automation delivers measurable benefits that help organizations grow faster and operate more efficiently.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group"
              >
                <div className="relative h-full bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border-l-4 hover:border-l-8 border-green-400">
                  {/* Icon */}
                  <div className="mb-5 flex items-center gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300" style={{ background: 'linear-gradient(135deg, rgba(113, 147, 52, 0.1), rgba(113, 147, 52, 0.2))', color: '#719334' }}>
                      {benefit.icon}
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-green-200 to-transparent"></div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-body">
                    {benefit.description}
                  </p>
                  
                  {/* Decorative circle */}
                  <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br from-green-100/30 to-green-200/30 group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f0fdf4] via-[#fefdfb] to-[#ecfdf5] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(122,130,80,0.05),transparent_60%)]"></div>
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
              Why Choose Our{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                AI Automation Company
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Organizations choose our AI automation services because we focus on delivering practical solutions that drive business results.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group flex flex-col items-center text-center"
              >
                {/* Stacked layers effect */}
                <div className="relative mb-5">
                  <div className="absolute inset-0 bg-green-200/30 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                  <div className="absolute inset-0 bg-green-300/30 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300"></div>
                  <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300" style={{ background: 'linear-gradient(135deg, #719334, #5a7529)', color: 'white' }}>
                    {item.icon}
                  </div>
                </div>
                
                <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-body">
                  {item.description}
                </p>
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
                Start Your{' '}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  AI Automation Journey
                </span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                AI automation is transforming how businesses operate. By implementing intelligent automation systems, companies can improve efficiency, reduce operational costs, and unlock new growth opportunities.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
                  <span>Contact our team today</span>
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
                  <span className="font-medium">Free Consultation</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg className="w-5 h-5 flex-shrink-0 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-medium">Custom Solutions</span>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(to bottom right, rgba(113, 147, 52, 0.05), transparent, rgba(113, 147, 52, 0.05))' }}></div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#f0fdf4]">
        <div className="container mx-auto max-w-4xl">
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
              Common questions about AI automation services and implementation
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
                className="bg-white/90 backdrop-blur-sm border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                style={{ borderColor: 'rgba(113, 147, 52, 0.4)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(113, 147, 52, 0.6)';
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(113, 147, 52, 0.1), 0 10px 10px -5px rgba(113, 147, 52, 0.04)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(113, 147, 52, 0.4)';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-green-50/30 transition-colors duration-200"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transition-transform duration-300 ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                    style={{ color: '#719334' }}
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
                  <p className="text-base text-gray-600 leading-relaxed px-6 pb-6 border-t border-green-100/30">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
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

export default AIAutomation;
