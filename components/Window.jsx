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
        {/* Nanotube/hexagonal tunnel fractal SVG */}
        <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.22, filter: 'blur(0.3px)' }}>
          {Array.from({length: 18}).map((_, layerIdx) => {
            const N = 12; // hexagon sides
            const R = 60 + layerIdx * 13; // radius grows per layer
            const cx = 200, cy = 200;
            // Draw hexagon
            let points = [];
            for (let i = 0; i < N; ++i) {
              const angle = (2 * Math.PI * i) / N;
              points.push([
                cx + Math.cos(angle) * R,
                cy + Math.sin(angle) * R
              ]);
            }
            // Draw lines between vertices (hexagon)
            const lines = points.map((pt, i) => {
              const next = points[(i+1)%N];
              return <line key={"l"+layerIdx+"-"+i} x1={pt[0]} y1={pt[1]} x2={next[0]} y2={next[1]} stroke="#fff" strokeWidth={5-layerIdx*0.23} strokeOpacity="0.17" />
            });
            // Draw circles at vertices
            const circles = points.map((pt, i) => (
              <circle key={"c"+layerIdx+"-"+i} cx={pt[0]} cy={pt[1]} r={8.5-Math.max(0,layerIdx*0.35)} fill="#fff" fillOpacity="0.21" />
            ));
            return <g key={layerIdx}>{lines}{circles}</g>;
          })}
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
