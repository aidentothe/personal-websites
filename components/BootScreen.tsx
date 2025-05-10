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
          {/* Stylized logo: two thick white bars forming an 'A' with a circle below, matching the provided image */}
          <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Left bar (slanting from top center to bottom left) */}
            <rect x="28" y="15" width="12" height="50" rx="2" fill="#fff" transform="rotate(-13 34 40)" />
            {/* Right bar (slanting from top center to bottom right) */}
            <rect x="50" y="15" width="12" height="50" rx="2" fill="#fff" transform="rotate(13 56 40)" />
            {/* Circle */}
            <circle cx="45" cy="74" r="11" fill="#fff" />
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