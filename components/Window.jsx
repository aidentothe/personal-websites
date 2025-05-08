"use client"

import { useState, useRef, useCallback, useMemo } from "react"
import { Rnd } from "react-rnd"
import { motion } from "framer-motion"
import { X } from "lucide-react"

const Window = ({
  id,
  title,
  children,
  position,
  size,
  zIndex,
  onFocus,
  onDragStop,
  onResizeStop,
  onClose,
  minY = 72,
  minHeight = 220,
}) => {
  const [isMaximized, setIsMaximized] = useState(false)
  const [prevSize, setPrevSize] = useState(size)
  const [prevPos, setPrevPos] = useState(position)
  const windowRef = useRef(null)

  const handleClose = useCallback((e) => {
    e.stopPropagation()
    onClose && onClose(id)
  }, [id, onClose])

  const handleMaximize = useCallback((e) => {
    e.stopPropagation()
    const rnd = windowRef.current
    if (!isMaximized && rnd) {
      const width = rnd.resizableElement.current.offsetWidth
      const height = rnd.resizableElement.current.offsetHeight
      const { x, y } = rnd.draggableCore.state
      setPrevSize({ width, height })
      setPrevPos({ x, y })
      setIsMaximized(true)
    } else {
      setIsMaximized(false)
    }
  }, [isMaximized])

  const handleDragStop = useCallback((e, d) => {
    if (!d) return
    const newX = Math.max(d.x, 0)
    const newY = Math.max(d.y, 0)
    onDragStop && onDragStop(e, { x: newX, y: newY })
  }, [onDragStop])

  const renderContent = useMemo(() => (
    <motion.div
      className="flex h-full w-full flex-col overflow-hidden shadow-2xl backdrop-blur-xl bg-white/20 border border-white/10"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.18 }}
      style={{ boxShadow: '0 8px 40px 0 rgba(30,40,80,0.16)', borderRadius: 0 }}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
      >
        <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.18 }}>
          <g stroke="#fff" strokeWidth="0.8">
            <polygon points="200,20 380,380 20,380" fill="none" />
            <polygon points="200,75 320,355 80,355" fill="none" />
            <polygon points="200,140 270,320 130,320" fill="none" />
          </g>
        </svg>
      </motion.div>
      <div className="window-drag-handle flex h-10 items-center justify-between bg-gradient-to-r from-gray-900/80 to-gray-800/70 px-4 border-b border-white/15">
        <div className="text-base font-semibold text-white/90 tracking-wide select-none drop-shadow-md">
          {title}
        </div>
        <div className="flex items-center space-x-2">
          {/* Removed Minimize Button */}
          <button
            className="flex h-6 w-6 items-center justify-center rounded-full bg-red-400/90 text-red-900 hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-red-200/60 shadow"
            onClick={handleClose}
            tabIndex={0}
            aria-label="Close"
          >
            <X size={14} />
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-hidden p-4 bg-gradient-to-br from-white/10 to-gray-100/10">
        {children}
      </div>
    </motion.div>
  ), [title, handleClose, children])

  const minWindowHeight = typeof minHeight === 'number' ? minHeight : 220;

  return isMaximized ? (
    <Rnd
      ref={windowRef}
      position={{ x: 0, y: 0 }}
      size={{ width: "100%", height: `calc(100% - ${minY}px)` }}
      style={{ zIndex }}
      minWidth={340}
      minHeight={minWindowHeight}
      bounds="parent"
      disableDragging
      dragHandleClassName="window-drag-handle"
      onMouseDown={onFocus}
    >
      {renderContent}
    </Rnd>
  ) : (
    <Rnd
      ref={windowRef}
      position={{ x: position.x, y: position.y }}
      size={{ width: size.width, height: size.height }}
      style={{ zIndex }}
      minWidth={340}
      minHeight={minWindowHeight}
      bounds="parent"
      dragHandleClassName="window-drag-handle"
      onMouseDown={onFocus}
      onDragStop={handleDragStop}
      onResizeStop={onResizeStop}
    >
      {renderContent}
    </Rnd>
  )
}

export default Window
