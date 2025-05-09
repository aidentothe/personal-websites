"use client"

import { motion } from "framer-motion"

export default function BootScreen() {
  return (
    <motion.div
      className="flex h-full w-full flex-col items-center justify-center bg-black"
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
        <div className="h-24 w-24 rounded-full border-4 border-blue-500 flex items-center justify-center bg-black">
          {/* Stylized logo: vertical trapezoid with circle below, matching user image */}
          <svg width="60" height="70" viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Trapezoid (like an 'A' without crossbar) */}
            <polygon points="10,60 30,10 50,60" fill="#bbb" />
            {/* Rectangle for the vertical bar */}
            <rect x="24" y="30" width="12" height="30" fill="#bbb" />
            {/* Circle below the bar */}
            <circle cx="30" cy="65" r="6" fill="#bbb" />
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
  )
}