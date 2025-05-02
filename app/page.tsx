"use client"

import dynamic from "next/dynamic"
import BootScreen from "@/components/BootScreen"
import { useMobile } from "@/hooks/use-mobile"
import { useEffect, useState } from "react"

// Dynamically load Desktop only on client
const Desktop = dynamic(() => import("@/components/Desktop"), { ssr: false })

export default function Home() {
  const isMobile = useMobile()
  const [booting, setBooting] = useState(true)

  useEffect(() => {
    if (!isMobile) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    const timer = setTimeout(() => {
      setBooting(false)
    }, 3000)

    return () => {
      document.body.style.overflow = "auto"
      clearTimeout(timer)
    }
  }, [isMobile])

  return (
    <main
      className={
        isMobile
          ? "w-full"
          : "h-screen w-screen overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200"
      }
    >
      {!isMobile && booting ? <BootScreen /> : <Desktop />}
    </main>
  )
}
