"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import BackgroundImage from "./BackgroundImage"
import WindowManager from "./WindowManager"
import Dock from "./Dock"
import MobileView from "./MobileView"
import { useMobile } from "@/hooks/use-mobile"

const Desktop = () => {
  const [windows, setWindows] = useState({
    terminal: { visible: true, zIndex: 2, position: { x: 50, y: 100 }, size: { width: 600, height: 400 } },
    browser: { visible: true, zIndex: 1, position: { x: 700, y: 180 }, size: { width: 750, height: 750 } },
    spotify: { visible: true, zIndex: 3, position: { x: 100, y: 240 }, size: { width: 600, height: 400 } },
  })
  const [minY, setMinY] = useState(72-48) // Fallback default for browser chrome
  const isMobile = useMobile()

  useEffect(() => {
    // On mount, set up windows for 3-column layout:
    // Left third: split vertically, terminal (top), spotify (bottom)
    // Right two-thirds: browser full height
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;
    const leftW = Math.floor(screenW / 3);
    const rightW = screenW - leftW;
    setWindows({
      terminal: {
        visible: true,
        zIndex: 3,
        position: { x: 0, y: 0 },
        size: { width: leftW, height: Math.floor(screenH / 2) }
      },
      spotify: {
        visible: true,
        zIndex: 2,
        position: { x: 0, y: Math.floor(screenH / 2) },
        size: { width: leftW, height: screenH - Math.floor(screenH / 2) }
      },
      browser: {
        visible: true,
        zIndex: 1,
        position: { x: leftW, y: 0 },
        size: { width: rightW, height: screenH }
      }
    });
    const estimateMinY = () => {
      const safeMargin = 64
      const gap = window.screenY ?? 0 // offset from monitor top to window
      const chromeHeight = Math.max(gap, safeMargin)
      setMinY(chromeHeight-48)
    }

    estimateMinY()
    window.addEventListener("resize", estimateMinY)
    return () => window.removeEventListener("resize", estimateMinY)
  }, [])

  // Memoize handlers for performance
  const toggleWindow = useCallback((id) => {
    setWindows((prev) => {
      const maxZ = Math.max(...Object.values(prev).map((w) => w.zIndex))
      if (!prev[id].visible) {
        return { ...prev, [id]: { ...prev[id], visible: true, zIndex: maxZ + 1 } }
      } else if (prev[id].zIndex < maxZ) {
        return { ...prev, [id]: { ...prev[id], zIndex: maxZ + 1 } }
      } else {
        return { ...prev, [id]: { ...prev[id], visible: false } }
      }
    })
  }, [])

  const bringToFront = useCallback((id) => {
    setWindows((prev) => {
      const maxZ = Math.max(...Object.values(prev).map((w) => w.zIndex))
      if (prev[id].zIndex < maxZ) {
        return { ...prev, [id]: { ...prev[id], zIndex: maxZ + 1 } }
      }
      return prev
    })
  }, [])

  // Memoize main content for smoother render
  const desktopContent = useMemo(() => (
    <div className="relative h-full w-full overflow-hidden">
      <BackgroundImage wallpaperUrl="/background.jpg?height=1080&width=1920" />
      <WindowManager windows={windows} setWindows={setWindows} bringToFront={bringToFront} minY={minY} />
      <Dock toggleWindow={toggleWindow} windows={windows} />
    </div>
  ), [windows, minY, bringToFront, toggleWindow])

  if (isMobile) return <MobileView />
  return desktopContent
}

export default Desktop
