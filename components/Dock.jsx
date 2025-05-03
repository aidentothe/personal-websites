"use client"

import { memo, useMemo } from "react"
import { motion } from "framer-motion"
import { Terminal, Globe, Music } from "lucide-react"

const Dock = memo(({ toggleWindow, windows }) => {
  const getIconStyle = (id) => {
    if (!windows[id].visible) return "text-gray-400"
    return windows[id].zIndex === Math.max(...Object.values(windows).map((w) => w.zIndex))
      ? "text-white drop-shadow-lg"
      : "text-gray-200"
  }

  // Memoize dock icons for smoother animation
  const dockIcons = useMemo(() => [
    { icon: <Terminal size={24} />, label: "Terminal", id: "terminal" },
    { icon: <Globe size={24} />, label: "Browser", id: "browser" },
    { icon: <Music size={24} />, label: "Spotify", id: "spotify" },
  ], [])

  return (
    <motion.div
      className="fixed bottom-4 flex items-end space-x-3 px-4 py-3 rounded-2xl bg-white/20 backdrop-blur-2xl shadow-2xl border border-white/30 z-[9999] transition-all"
      style={{ transform: 'translateX(-50%)', left: '50%' , boxShadow: '0 8px 40px 0 rgba(30,40,80,0.16)' }}
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.4, duration: 0.4, type: "spring" }}
    >
      {dockIcons.map(({ icon, label, id }) => (
        <DockIcon
          key={id}
          icon={icon}
          label={label}
          onClick={() => toggleWindow(id)}
          className={getIconStyle(id)}
        />
      ))}
    </motion.div>
  )
})

const DockIcon = memo(({ icon, label, onClick, className }) => {
  return (
    <motion.button
      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-black/40 hover:bg-black/60 ${className} transition-all duration-200 hover:ring-2 hover:ring-white/30 focus:outline-none focus:ring-2 focus:ring-blue-200/60 shadow-lg`}
      onClick={onClick}
      whileHover={{ scale: 1.18 }}
      whileTap={{ scale: 0.95 }}
      title={label}
      tabIndex={0}
      aria-label={label}
    >
      {icon}
    </motion.button>
  )
})

export default Dock
