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
    const windowW = size?.width || 400
    const windowH = size?.height || 400
    const menuBarHeight = 44 // px, adjust if needed for your header
    const screenW = window.innerWidth
    const screenH = window.innerHeight
    // Allow window to be dragged fully off any edge except the top menu bar
    let newX = d.x
    let newY = d.y
    // Prevent the top menu bar from moving above the viewport
    if (newY < 0) newY = 0
    // If the window is dragged so far down that only the menu bar is visible, clamp so menu bar stays in view
    if (newY > screenH - menuBarHeight) newY = screenH - menuBarHeight
    onDragStop && onDragStop(e, { x: newX, y: newY })
  }, [onDragStop, size])

  const renderContent = useMemo(() => (
    <motion.div
      className="flex h-full w-full flex-col overflow-hidden rounded-2xl shadow-2xl backdrop-blur-xl bg-white/20"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.18 }}
      style={{ boxShadow: '0 8px 40px 0 rgba(30,40,80,0.16)', borderRadius: 24 }}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
      >
        {/* 5 Sierpinski triangles, spaced, forming a rectangle, legible */}
        <svg width="100%" height="100%" viewBox="0 0 500 330" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.15 }}>
          {(() => {
            function sierpinski(x, y, size, depth, keyPrefix) {
              if (depth === 0) {
                const h = size * Math.sqrt(3) / 2;
                return [<polygon key={keyPrefix} points={`${x},${y+h} ${x+size/2},${y} ${x+size},${y+h}`} fill="#fff" fillOpacity="0.13" />];
              }
              const half = size / 2;
              const h = size * Math.sqrt(3) / 2;
              return [
                ...sierpinski(x, y + h/2, half, depth-1, keyPrefix+"a"),
                ...sierpinski(x + half/2, y, half, depth-1, keyPrefix+"b"),
                ...sierpinski(x + half, y + h/2, half, depth-1, keyPrefix+"c")
              ];
            }
            const tris = [];
            const size = 110, gapX = 35, gapY = 30;
            tris.push(...sierpinski(85, 18, size, 4, "T1"));
            tris.push(...sierpinski(85+size+gapX, 18, size, 4, "T2"));
            tris.push(...sierpinski(0, 18+size+gapY, size, 4, "B1"));
            tris.push(...sierpinski(size+gapX, 18+size+gapY, size, 4, "B2"));
            tris.push(...sierpinski(2*(size+gapX), 18+size+gapY, size, 4, "B3"));
            return tris;
          })()}
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
