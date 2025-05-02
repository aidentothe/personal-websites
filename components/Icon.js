"use client"

import { motion } from "framer-motion"

export default function Icon({ icon, label, onClick }) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-2 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-800/50 backdrop-blur-sm shadow-neumorph mb-1">
        {icon}
      </div>
      <span className="text-xs text-center font-medium">{label}</span>
    </motion.div>
  )