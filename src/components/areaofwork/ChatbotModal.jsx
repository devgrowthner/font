import React from 'react';
// eslint-disable-next-line no-unused-vars  
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
const chatbotImage = '/work/chatbot.jpeg';

const ChatbotModal = ({ isOpen, onClose, onContact }) => {
  const features = [
    "Natural language understanding and processing",
    "Multi-channel deployment (web, mobile, messaging apps)",
    "Context-aware conversations and memory",
    "Integration with existing systems and databases",
    "24/7 automated customer support",
    "Sentiment analysis and intent recognition"
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-2 sm:p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-5xl w-full overflow-hidden max-h-[95vh] overflow-y-auto hide-scrollbar"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-3 right-3 sm:top-6 sm:right-6 z-10 p-2 rounded-full bg-white hover:bg-gray-100 shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                </button>

                {/* Content Container */}
                <div className="p-4 sm:p-8 md:p-12 lg:p-16">
                  {/* Hero Image */}
                  <div className="mb-6 sm:mb-8 md:mb-12 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src={chatbotImage} 
                      alt="Chatbot Solutions" 
                      className="w-full h-48 sm:h-64 md:h-80 object-cover"
                    />
                  </div>

                  {/* Large Initial Letter with Heading */}
                  <div className="mb-6 sm:mb-8 md:mb-10">
                    <div className="flex items-start gap-2 sm:gap-4 mb-4 sm:mb-6">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-purple-600 leading-none"
                        style={{ fontFamily: 'Georgia, serif' }}
                      >
                        C
                      </motion.div>
                      <div className="flex-1 pt-1 sm:pt-2 md:pt-4">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-1 sm:mb-2 md:mb-3">
                          hatbot Solutions
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-body">
                          Conversational AI for Seamless Customer Engagement
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6 sm:mb-8 md:mb-10">
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                      Conversational AI has revolutionized customer service and engagement. Our intelligent chatbot solutions provide instant, accurate responses to customer queries, improving satisfaction while reducing operational costs. From simple FAQ bots to sophisticated AI assistants, we create experiences that feel natural and helpful.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                      We build custom chatbots that understand context, learn from interactions, and deliver personalized experiences across all channels. Whether it's customer support, lead generation, or internal automation, our chatbots work 24/7 to serve your users.
                    </p>
                  </div>

                  {/* Features with Bullet Points */}
                  <div className="mb-6 sm:mb-8 md:mb-10">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-gray-900 mb-4 sm:mb-6">
                      What We Deliver
                    </h4>
                    <div className="grid gap-3 sm:gap-4">
                      {features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index }}
                          className="flex items-start gap-2 sm:gap-3 bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-600 flex-shrink-0 mt-1.5 sm:mt-2"></div>
                          <span className="text-xs sm:text-sm md:text-base text-gray-800 font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons - Improved Footer */}
                  <div className="mt-6 pt-6 border-t-2 border-gray-100">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => {
                          onClose();
                          onContact();
                        }}
                        className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <span>Get In Touch</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={onClose}
                        className="sm:w-auto px-6 py-3 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all duration-200"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ChatbotModal;
