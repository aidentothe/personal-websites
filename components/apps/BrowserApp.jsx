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
    <div className="flex h-full flex-col bg-gray-900 font-sans">
      <div className="flex items-center bg-gray-800 px-4 py-2">
        <div className="flex space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`relative px-4 py-2 text-sm font-medium rounded-t-lg transition-colors duration-150 ${
                activeTab === tab.id ? "text-white bg-gray-700" : "text-gray-300 hover:bg-gray-700/50"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500" layoutId="activeTab" />
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 overflow-auto bg-gray-700 p-4">
        {activeTab === "about" && <AboutTab />}
        {activeTab === "projects" && <ProjectsTab />}
        {activeTab === "socials" && <SocialsTab />}
        {activeTab === "resume" && <ResumeTab />}
      </div>
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
  const projects = [
    {
      title: "Portfolio OS",
      description: "A portfolio site styled like an operating system. Made with Next.js, Tailwind, and Framer Motion.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      image: "/placeholder.svg",
    },
    {
      title: "Library Compute Cluster",
      description: "Recycled 20+ school desktops into a private multi-node Kubernetes cluster for ML experiments.",
      technologies: ["Python", "Docker", "Kubernetes", "SSH"],
      image: "/placeholder.svg",
    },
    {
      title: "NeurIPS SNN Navigation",
      description: "Co-authored NeurIPS 2024 paper on spiking neural networks for real-time autonomous driving.",
      technologies: ["PyTorch", "SNN", "Simulation", "ROS"],
      image: "/placeholder.svg",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-gray-700 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
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
