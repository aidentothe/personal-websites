"use client"

import { useState, useEffect, useRef } from "react"

const CMatrix = ({ onExit }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    // Full‐screen
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    // Characters to draw
    const katakana =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン"
    const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const nums = "0123456789"
    const alphabet = katakana + latin + nums

    const fontSize = 16
    const columns = Math.floor(canvas.width / fontSize)
    const drops = Array(columns).fill(1)

    // Draw loop
    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "#0F0"
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text =
          alphabet.charAt(Math.floor(Math.random() * alphabet.length))
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 50)

    // Ctrl+C to exit
    const onKey = (e) => {
      if (e.ctrlKey && e.key.toLowerCase() === "c") {
        clearInterval(interval)
        window.removeEventListener("keydown", onKey)
        window.removeEventListener("resize", resize)
        onExit()
      }
    }
    window.addEventListener("keydown", onKey)

    return () => {
      clearInterval(interval)
      window.removeEventListener("keydown", onKey)
      window.removeEventListener("resize", resize)
    }
  }, [onExit])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-50 bg-black"
    />
  )
}

const TerminalApp = () => {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState([
    {
      type: "output",
      content:
        "Welcome to Aiden's Terminal. Type 'help' to see available commands.",
    },
  ])
  const [showMatrix, setShowMatrix] = useState(false)
  const terminalRef = useRef(null)

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history, showMatrix])

  const commands = {
    about: `Hi, I'm Aiden Huang — a backend-heavy software engineer with a flair for efficient systems and AI. I've interned at Simular.AI, ETH Zurich, UCSC, and Harvard, optimizing LLM pipelines, HPC clusters, and autonomous systems. Currently, I'm pushing boundaries in distributed AI and real-time inference.`,
    projects: `Featured Projects:
- 🧠 Library Compute Cluster: Recycled 20+ desktops into a live Kubernetes ML cluster (1,000+ hours compute)
- 🔬 SNN Self-Driving: Co-authored NeurIPS paper with UCSC on spiking neural networks for adversarial navigation
- 🧬 Genomics Pipelines: Modeled murine DNA and automated 500GB+ workflows at Harvard with Snakemake + Docker
- 📦 Portfolio OS: This site — a desktop UI emulating terminal/browser UX for showcasing my work interactively`,
    resume: `Opening resume in browser. [Make sure to include your resume link in the browser window implementation]`,
    skills: `Tech Stack:
Languages: Python, C++, Java, JS, SQL
Frameworks: React, Node.js, Flask, PyTorch, TensorFlow
Tools: Git, Docker, GCP, SLURM, Horovod, FastAPI, Terraform
Cybersecurity: Kali Linux, nmap, Ghidra, Burpsuite`,
    help: `Available commands:
- about: Learn more about me
- projects: See my work
- resume: Open my resume
- skills: View my technical stack
- cmatrix: Launch Matrix rain (ctrl+c to quit)
- clear: Clear the terminal
- help: Show this message`,
    clear: null,
  }

  const processCommand = (cmd) => {
    const command = cmd.trim().toLowerCase()
    setHistory((prev) => [...prev, { type: "input", content: `$ ${cmd}` }])

    if (command === "clear") {
      setHistory([
        {
          type: "output",
          content:
            "Terminal cleared. Type 'help' to see available commands.",
        },
      ])
      return
    }

    if (command === "cmatrix") {
      setShowMatrix(true)
      return
    }

    if (commands[command]) {
      setHistory((prev) => [
        ...prev,
        { type: "output", content: commands[command] },
      ])
    } else if (command === "") {
      setHistory((prev) => [...prev, { type: "output", content: "" }])
    } else {
      setHistory((prev) => [
        ...prev,
        {
          type: "output",
          content: `Command not found: ${cmd}. Type 'help' to see available commands.`,
        },
      ])
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      processCommand(input)
      setInput("")
    }
  }

  // If Matrix is active, render that full‑screen canvas
  if (showMatrix) {
    return <CMatrix onExit={() => setShowMatrix(false)} />
  }

  return (
    <div className="relative flex h-full flex-col bg-gray-900 text-green-400 p-2 font-serif">
      <div
        ref={terminalRef}
        className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-green-700 scrollbar-track-gray-800"
      >
        {history.map((item, idx) => (
          <div
            key={idx}
            className={`mb-1 ${
              item.type === "input" ? "text-yellow-400" : ""
            }`}
          >
            <pre className="whitespace-pre-wrap break-words">
              {item.content}
            </pre>
          </div>
        ))}
      </div>

      <div className="flex items-center border-t border-green-800 pt-2">
        <span className="mr-2">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none"
          autoFocus
        />
      </div>
    </div>
  )
}

export default TerminalApp
