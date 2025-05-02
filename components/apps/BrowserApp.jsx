"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const tabs = [
  { id: "about", label: "About Me" },
  { id: "projects", label: "Projects" },
  { id: "socials", label: "Socials" },
  { id: "resume", label: "Resume" },
]

const BrowserApp = () => {
  const [activeTab, setActiveTab] = useState("about")

  return (
    <div className="flex h-full flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 font-sans relative">
      {/* Address/Search Bar */}
      <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-t-xl shadow border-b border-white/10">
        <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
        <input
          className="flex-1 bg-transparent text-white placeholder-gray-400 px-2 py-1 focus:outline-none"
          placeholder="Search or enter address..."
          disabled
        />
        <button className="ml-2 px-2 py-1 bg-blue-500/80 hover:bg-blue-400/80 text-white rounded shadow transition">Go</button>
      </div>
      {/* Bookmarks Bar */}
      <div className="flex items-center space-x-3 px-4 py-1 bg-black/10 border-b border-white/10">
        <a href="#" className="flex items-center space-x-1 text-blue-300 hover:text-blue-100 transition"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 0 1 1 1v14l-5-5H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h7zm0 0h7a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2l-5 5V3a1 1 0 0 1 1-1z"/></svg><span>Docs</span></a>
        <a href="#" className="flex items-center space-x-1 text-green-300 hover:text-green-100 transition"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M4 3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4zm1 3h10v10H5V6z"/></svg><span>GitHub</span></a>
        <a href="#" className="flex items-center space-x-1 text-pink-300 hover:text-pink-100 transition"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm1 12h-2v-2h2v2zm0-4h-2V7h2v3z"/></svg><span>Blog</span></a>
      </div>
      {/* Tabs */}
      <div className="flex items-center bg-gray-800/80 px-4 py-2 rounded-t-lg mt-1 shadow-inner">
        <div className="flex space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`relative px-4 py-2 text-sm font-medium rounded-t-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/40 shadow-md ${
                activeTab === tab.id ? "text-white bg-blue-700/80" : "text-gray-200 hover:bg-blue-800/30"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div className="absolute bottom-0 left-2 right-2 h-1 bg-blue-400/80 rounded-full" layoutId="activeTab" />
              )}
            </button>
          ))}
        </div>
      </div>
      {/* Tab Content */}
      <motion.div
        className="flex-1 overflow-auto bg-gradient-to-br from-gray-800/70 to-gray-900/80 p-6"
        key={activeTab}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.32 }}
      >
        {activeTab === "about" && <AboutTab />}
        {activeTab === "projects" && <ProjectsTab />}
        {activeTab === "socials" && <SocialsTab />}
        {activeTab === "resume" && <ResumeTab />}
      </motion.div>
    </div>
  )
}

const AboutTab = () => {
  return (
    <div className="max-w-3xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <p className="mb-4">
        I'm Aiden Huang — a software engineer with a passion for efficient systems, distributed computing, and AI.
        I’ve interned at Simular.AI, ETH Zurich, UCSC, and Harvard, working on LLM pipelines, SLURM clusters, and autonomous decision systems.
      </p>
      <p className="mb-4">
        I’m currently experimenting with novel ways to present information using first principles, like the site you’re viewing.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-3">Tech Stack</h2>
      <div className="flex flex-wrap gap-2">
        {[
          "Python", "C++", "JavaScript", "React", "Next.js", "Tailwind", "FastAPI",
          "PyTorch", "TensorFlow", "GCP", "Docker", "Kubernetes", "SLURM", "Terraform",
        ].map((skill) => (
          <span key={skill} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

const ProjectsTab = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Sample Project Card 1 */}
      <div className="bg-white/10 rounded-xl shadow-lg p-5 hover:scale-[1.025] transition-transform duration-200 border border-white/10">
        <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80" alt="Project 1" className="rounded-lg mb-3 h-36 w-full object-cover" />
        <h3 className="text-xl font-bold text-blue-200 mb-2">AI Workflow Builder</h3>
        <p className="text-gray-200 mb-2">Drag-and-drop interface for building LLM pipelines, with real-time visualization and cloud execution.</p>
        <a href="#" className="text-blue-400 hover:underline">View Project →</a>
      </div>
      {/* Sample Project Card 2 */}
      <div className="bg-white/10 rounded-xl shadow-lg p-5 hover:scale-[1.025] transition-transform duration-200 border border-white/10">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Project 2" className="rounded-lg mb-3 h-36 w-full object-cover" />
        <h3 className="text-xl font-bold text-green-200 mb-2">Distributed Cluster Monitor</h3>
        <p className="text-gray-200 mb-2">Live dashboard for monitoring SLURM clusters, GPU/CPU usage, and job scheduling analytics.</p>
        <a href="#" className="text-green-400 hover:underline">View Project →</a>
      </div>
      {/* Add more cards as desired */}
    </div>
  )
}

const SocialsTab = () => {
  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/aidentothe",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aidentothe",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    },
    {
      name: "Portfolio",
      url: "https://aidentothe.com",
      icon: "https://cdn-icons-png.flaticon.com/512/841/841364.png",
    },
  ]

  return (
    <div className="max-w-2xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-6">Find Me Online</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 transition-colors duration-200 p-4 rounded-lg flex flex-col items-center shadow-md"
          >
            <img src={social.icon} alt={social.name} className="w-10 h-10 mb-2" />
            <span className="text-lg font-semibold">{social.name}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

const ResumeTab = () => {
  const resumeUrl = "https://drive.google.com/file/d/1PQgigV-Jd_1boY1-ybn09N5V8UqquBuD/preview"
  const downloadUrl = "https://drive.google.com/uc?export=download&id=1PQgigV-Jd_1boY1-ybn09N5V8UqquBuD"

  return (
    <div className="max-w-4xl mx-auto text-white h-full flex flex-col">
      <h1 className="text-3xl font-bold mb-4">Resume</h1>
      <div className="mb-4">
        <a
          href={downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-150"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download Resume
        </a>
      </div>
      <div className="flex-1 bg-gray-800 rounded-lg overflow-hidden">
        <iframe
          src={resumeUrl}
          className="w-full h-full"
          title="Aiden Huang Resume"
          allow="autoplay"
        ></iframe>
      </div>
    </div>
  )
}

export default BrowserApp
