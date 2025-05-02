"use client"

import { useState, useRef, useCallback, useMemo } from "react"
import { Rnd } from "react-rnd"
import { motion } from "framer-motion"
import { X, Minus, Maximize } from "lucide-react"

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
  onMinimize,
  onClose,
  minY = 72,
}) => {
  const [isMaximized, setIsMaximized] = useState(false)
  const [prevSize, setPrevSize] = useState(size)
  const [prevPos, setPrevPos] = useState(position)
  const windowRef = useRef(null)

  const handleMinimize = useCallback((e) => {
    e.stopPropagation()
    onMinimize && onMinimize(id)
  }, [id, onMinimize])

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
    const newY = Math.max(d.y, minY)
    onDragStop && onDragStop(e, { x: newX, y: newY })
  }, [onDragStop, minY])

  const renderContent = useMemo(() => (
    <motion.div
      className="flex h-full w-full flex-col overflow-hidden rounded-2xl shadow-2xl backdrop-blur-xl bg-white/20 border border-white/30"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.18 }}
      style={{ boxShadow: '0 8px 40px 0 rgba(30,40,80,0.16)' }}
    >
      <div className="window-drag-handle flex h-10 items-center justify-between bg-gradient-to-r from-gray-900/80 to-gray-800/70 px-4 border-b border-white/20">
        <div className="text-base font-semibold text-white/90 tracking-wide select-none drop-shadow-md">
          {title}
        </div>
        <div className="flex items-center space-x-2">
          <button
            className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400/90 text-yellow-900 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-200/60 shadow"
            onClick={handleMinimize}
            tabIndex={0}
            aria-label="Minimize"
          >
            <Minus size={14} />
          </button>
          <button
            className="flex h-6 w-6 items-center justify-center rounded-full bg-green-400/90 text-green-900 hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-200/60 shadow"
            onClick={handleMaximize}
            tabIndex={0}
            aria-label="Maximize"
          >
            <Maximize size={14} />
          </button>
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
  ), [title, handleMinimize, handleMaximize, handleClose, children])

  return isMaximized ? (
    <Rnd
      ref={windowRef}
      position={{ x: 0, y: 0 }}
      size={{ width: "100%", height: `calc(100% - ${minY}px)` }}
      style={{ zIndex }}
      minWidth={340}
      minHeight={220}
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
      minHeight={220}
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
