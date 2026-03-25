import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const PageLoader = ({ visible, message }) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#f0fdf4] via-[#fefdfb] to-[#ecfdf5]"
        >
          <div className="flex flex-col items-center gap-7">
            {/* Spinner */}
            <div className="relative w-16 h-16">
              {/* Outer faded ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-[3px] border-[#719334]/15"
                style={{
                  borderTopColor: "#719334",
                  borderRightColor: "#8db044",
                }}
              />
              {/* Inner ring — opposite direction */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 rounded-full border-[2.5px] border-transparent"
                style={{
                  borderTopColor: "#5a7529",
                  borderLeftColor: "#719334",
                }}
              />
              {/* Center dot */}
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#719334] to-[#5a7529] shadow-sm" />
              </motion.div>
            </div>

            {/* Message */}
            <AnimatePresence mode="wait">
              {message && (
                <motion.p
                  key={message}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="text-sm font-medium text-gray-500 tracking-wide"
                >
                  {message}
                </motion.p>
              )}
            </AnimatePresence>

            {/* Animated dots */}
            <div className="flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    opacity: [0.25, 1, 0.25],
                    scale: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                  className="w-1.5 h-1.5 rounded-full bg-[#719334]"
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
