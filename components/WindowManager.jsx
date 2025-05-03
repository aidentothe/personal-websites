"use client"

import { memo, useMemo } from "react"
import Window from "./Window"
import TerminalApp from "./apps/TerminalApp"
import BrowserApp from "./apps/BrowserApp"
import SpotifyApp from "./apps/SpotifyApp"

const WindowManager = memo(({ windows, setWindows, bringToFront, minY }) => {
  const handleMinimize = (id) => {
    setWindows(prev => ({
      ...prev,
      [id]: { ...prev[id], visible: false }
    }))
  }

  const handleClose = (id) => {
    setWindows(prev => ({
      ...prev,
      [id]: { ...prev[id], visible: false }
    }))
  }

  // Memoize window configs for performance
  const windowConfigs = useMemo(() => ([
    {
      key: 'terminal',
      title: 'Terminal',
      minY: minY - 48,
      App: TerminalApp
    },
    {
      key: 'browser',
      title: 'Browser',
      minY,
      App: BrowserApp
    },
    {
      key: 'spotify',
      title: 'Spotify',
      minY,
      App: SpotifyApp,
      minHeight: 500,
    },
  ]), [minY])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {windowConfigs.map(({ key, title, minY, App, minHeight }) =>
        windows[key].visible && (
          <Window
            key={key}
            id={key}
            title={title}
            position={windows[key].position}
            size={windows[key].size}
            zIndex={windows[key].zIndex}
            onFocus={() => bringToFront(key)}
            minY={minY}
            onDragStop={(e, d) =>
              setWindows(prev => ({
                ...prev,
                [key]: {
                  ...prev[key],
                  position: { x: d.x, y: d.y },
                },
              }))
            }
            onResizeStop={(e, dir, ref, delta, pos) =>
              setWindows(prev => ({
                ...prev,
                [key]: {
                  ...prev[key],
                  size: { width: ref.offsetWidth, height: ref.offsetHeight },
                  position: pos,
                },
              }))
            }
            onMinimize={handleMinimize}
            onClose={handleClose}
            minHeight={minHeight}
          >
            <App />
          </Window>
        )
      )}
    </div>
  )
})

export default WindowManager
