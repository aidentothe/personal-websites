"use client";

import { motion } from "framer-motion";

export default function BootScreen() {
  return (
    <motion.div
      className="flex h-full w-full flex-col items-center justify-center bg-gray-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mb-8"
      >
        <div className="h-24 w-24 flex items-center justify-center">
          {/* AidenOS logomark */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="h-full w-full text-white"
            fill="currentColor"
          >
            {/* stylised exclamation‑mark / "A" glyph */}
            <path d="M28 82 L44 10 L56 10 L72 82 L60 82 L50 40 L40 82 Z" />
            <circle cx="50" cy="92" r="8" />
          </svg>
        </div>
      </motion.div>

      <motion.h1
        className="text-2xl font-mono mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        AidenOS
      </motion.h1>

      <motion.div
        className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          className="h-full bg-blue-500"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 1.5, duration: 1.2 }}
        />
      </motion.div>
    </motion.div>
  );
}
