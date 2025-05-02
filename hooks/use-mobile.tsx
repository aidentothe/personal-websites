"use client"

import { useState, useEffect } from "react"

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Function to detect mobile devices using both screen size and user agent
    const checkMobile = () => {
      // Check if device is mobile based on user agent
      const userAgentCheck = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

      // Also consider tablets as mobile for this application
      const isTablet = /iPad|Android(?!.*Mobile)/i.test(navigator.userAgent)

      // Check if viewport width is mobile-sized (under 1024px)
      const viewportCheck = window.innerWidth < 1024

      // Consider it mobile if either condition is true
      setIsMobile(userAgentCheck || isTablet || viewportCheck)
    }

    // Check on initial load
    checkMobile()

    // Add event listener for window resize and orientation change
    window.addEventListener("resize", checkMobile)
    window.addEventListener("orientationchange", checkMobile)

    // Clean up
    return () => {
      window.removeEventListener("resize", checkMobile)
      window.removeEventListener("orientationchange", checkMobile)
    }
  }, [])

  return isMobile
}
