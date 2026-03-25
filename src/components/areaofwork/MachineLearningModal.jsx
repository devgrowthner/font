import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
const mlImage = '/work/ml.jpeg';

const MachineLearningModal = ({ isOpen, onClose, onContact }) => {
  const features = [
    "Predictive analytics and forecasting models",
    "Classification and regression algorithms",
    "Custom model training and optimization",
    "Feature engineering and data preprocessing",
    "Model deployment and monitoring",
    "Performance tuning and validation"
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
                      src={mlImage} 
                      alt="Machine Learning" 
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
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-blue-600 leading-none"
                        style={{ fontFamily: 'Georgia, serif' }}
                      >
                        M
                      </motion.div>
                      <div className="flex-1 pt-1 sm:pt-2 md:pt-4">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-1 sm:mb-2 md:mb-3">
                          achine Learning
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-body">
                          Intelligent Systems That Learn and Adapt
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6 sm:mb-8 md:mb-10">
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                      Machine learning is no longer a futuristic concept—it's embedded in our daily lives. From smart assistants and automated customer service to AI-driven healthcare and education, our machine learning solutions help businesses extract valuable insights from data, automate decision-making processes, and predict future outcomes with high accuracy.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                      We build custom ML models tailored to your specific business needs, from simple regression models to complex deep learning architectures that transform the way you live and work.
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
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-600 flex-shrink-0 mt-1.5 sm:mt-2"></div>
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
                        className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
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

export default MachineLearningModal;
