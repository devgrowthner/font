'use client';

import React from 'react';
import { motion } from 'framer-motion';
import './Partners.css';

// Import images from src/assets
import pytorchImg from '../assets/Machine/pytorch.png';
import awsImg from '../assets/Machine/aws.png';
import pythonImg from '../assets/Machine/python.png';
import scikitImg from '../assets/Machine/scikit.png';
import langchainImg from '../assets/generativeai/langchain.png';
import tensorImg from '../assets/generativeai/tenser.png';
import chatgptImg from '../assets/chatbot/chatgpt.png';
import claudeImg from '../assets/chatbot/claude.jpeg';
import geminiImg from '../assets/chatbot/gemini.png';
import llamaImg from '../assets/chatbot/llama.png';
import pineconeImg from '../assets/chatbot/pinecone.png';
import crewaiImg from '../assets/agenticai/crewai.png';
import autogenImg from '../assets/agenticai/autogen.jpeg';
import vapiImg from '../assets/slider/vapi.png';
import twillioImg from '../assets/slider/twillio.png';
import elevenlabsImg from '../assets/slider/elevenlabs.png';
import aws from '../assets/slider/aws.png';
import antigravity from '../assets/slider/antigravity.jpeg';
import canva from '../assets/slider/canva.jpeg';
import copilot from '../assets/slider/copilot.jpeg';
import figma from '../assets/slider/figma.jpeg';
import xai from '../assets/slider/xailogo.png';
import deepseek from '../assets/slider/deepseek.png';








// ERP stack logos — sourced from src/assets/Machine/
import xmlImg from '../assets/Machine/xml.png';
import javascriptImg from '../assets/Machine/JavaScript-logo.png';
import qwebImg from '../assets/Machine/Qweb.png';
import html5Img from '../assets/Machine/HTML5 Logo.svg';
import odooImg from '../assets/Machine/oddo.png';
import erpnext from '../assets/Machine/erpnext.png';





const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const Partners = () => {
  const partners = [
    { name: "OpenAI", logo: chatgptImg },
    { name: "ClaudeAI", logo: claudeImg },
    { name: "Google Gemini", logo: geminiImg },
    { name: "Vapi", logo: vapiImg },
    { name: "Twilio", logo: twillioImg },
    { name: "ElevenLabs", logo: elevenlabsImg },
    { name: "Meta Llama", logo: llamaImg },
    { name: "LangChain", logo: langchainImg },
    { name: "PyTorch", logo: pytorchImg },
    { name: "Python", logo: pythonImg },
    { name: "Scikit-Learn", logo: scikitImg },
    { name: "TensorFlow", logo: tensorImg },
    { name: "Pinecone", logo: pineconeImg },
    { name: "CrewAI", logo: crewaiImg },
    { name: "AutoGen", logo: autogenImg },
    { name: "XAI", logo: xai },
    { name: "AWS", logo: aws },
    { name: "Antigravity", logo: antigravity },
    { name: "Canva", logo: canva },
    { name: "Copilot", logo: copilot },
    { name: "Figma", logo: figma },
    { name: "DeepSeek", logo: deepseek },
  ];

  const duplicatedPartners = [...partners, ...partners];

  // Odoo ERP core tech stack — static display, no scrolling
  const erpStack = [
    // { name: "Python", logo: pythonImg },
    { name: "Salesforce", logo: "/salesforce-logo.png" },
    // { name: "QWeb", logo: qwebImg },
    // { name: "HTML5 & CSS/SCSS", logo: html5Img },
    { name: "ODOO", logo: odooImg },
    { name: "ERPNext", logo: erpnext },
    { name: "Zoho ERP", logo: "/zoho-erp.png" },

  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 overflow-hidden bg-gradient-to-b from-[#fdfcfa] to-[#f9f7f4]">
      <div className="w-full">
        {/* Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-10 sm:mb-12 px-4 sm:px-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-gray-900 mb-4">
            AI & ERP Technologies Powering{' '}
            <span className="text-brand-green">
              Our Products
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We integrate industry-leading AI platforms and ERP frameworks to build intelligent, scalable, and
            reliable solutions.
          </p>
        </motion.div>

        {/* AI Technologies - infinite scrolling carousel */}
        <div className="mb-14 sm:mb-16">
          <p className="text-center text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-brand-green mb-6 sm:mb-8">
            AI Technologies
          </p>

          <div className="relative px-2 sm:px-4">
            {/* Gradient Fade Left */}
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#fdfcfa] to-transparent z-10 pointer-events-none"></div>

            {/* Gradient Fade Right */}
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#f9f7f4] to-transparent z-10 pointer-events-none"></div>

            {/* Scrolling Container */}
            <div className="flex overflow-hidden">
              <div className="partners-carousel flex gap-5 sm:gap-6 lg:gap-8">
                {duplicatedPartners.map((partner, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex flex-col items-center justify-center group"
                  >
                    {/* Logo Container */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center p-2 sm:p-3 group-hover:shadow-lg group-hover:border-brand-green/30 group-hover:-translate-y-1 transition-all duration-300">
                      <img
                        src={typeof partner.logo === 'string' ? partner.logo : partner.logo.src}
                        alt={partner.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {/* Partner Name */}
                    <p className="mt-2 text-xs sm:text-sm font-medium text-gray-500 group-hover:text-brand-green transition-colors duration-300 whitespace-nowrap">
                      {partner.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ERP Technologies - static, no scrolling */}
        <div className="px-4 sm:px-6">
          <p className="text-center text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-brand-green mb-6 sm:mb-8">
            ERP Technologies
          </p>

          <div className="mx-auto flex max-w-4xl flex-wrap items-start justify-center gap-6 sm:gap-8">
            {erpStack.map(({ name, logo }) => (
              <div
                key={name}
                className="flex flex-col items-center justify-center group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center p-2 sm:p-3 group-hover:shadow-lg group-hover:border-brand-green/30 group-hover:-translate-y-1 transition-all duration-300">
                  <img
                    src={typeof logo === 'string' ? logo : logo.src}
                    alt={name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="mt-2 text-xs sm:text-sm font-medium text-gray-500 group-hover:text-brand-green transition-colors duration-300 whitespace-nowrap">
                  {name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
