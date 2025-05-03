import { motion } from "framer-motion"
import { useState } from "react"

// IE-inspired colors
const IE_BLUE = "#1b5790"
const IE_LIGHT = "#e5f1fb"
const IE_BORDER = "#6ba4d6"

const resume = {
  name: "Aiden Huang",
  contact: [
    { label: "Phone", value: "650-213-7759" },
    { label: "Email", value: "aidenhuang.pro@gmail.com" },
  ],
  education: [
    {
      school: "University of California, Berkeley",
      degree: "B.S. Electrical Engineering & Computer Science",
      location: "Berkeley, CA",
      date: "Aug 2025 - May 2029",
    },
    {
      school: "Monta Vista High School",
      degree: "High School Diploma",
      location: "Cupertino, CA",
      date: "Aug 2021 – May 2025",
      achievements: [
        "NSA Codebreaker High Performer/ Stokes Scholar",
        "USACO Plat, 4x AIME, FRC Robotics Lead"
      ],
    },
  ],
  experience: [
    {
      title: "Software Engineering Intern",
      company: "NextSilicon",
      location: "Tel Aviv, Israel (Remote)",
      date: "June 2024 – Aug 2024",
      bullets: [
        "Developed Maverick-2, focusing on optimizing software-defined hardware acceleration for HPC workloads",
        "Integrated support for models like OpenMP and Kokkos, enhancing accessibility and reducing code porting efforts",
        "Collaborated with other teams to profile and improve performance of HPC applications on the Maverick-2 platform"
      ],
    },
    {
      title: "HPC Intern",
      company: "ETH Zurich",
      location: "Remote",
      date: "Mar 2023 – Present",
      bullets: [
        "Optimized PyTorch model training on multi-node SLURM clusters using Horovod, reducing epoch time by 40%",
        "Engineered data ingestion pipeline to process 50TB+ datasets using Dask and HDF5, achieving 6x throughput",
        "Built HPC–cloud workload manager using Terraform + Python CLI, enabling serverless access to on-prem compute"
      ],
    },
    {
      title: "Research Assistant",
      company: "UC Santa Cruz",
      location: "Santa Cruz, CA",
      date: "June 2022 – Present",
      bullets: [
        "Authored NeurIPS 2024 paper on spiking neural networks for autonomous navigation in adversarial environments",
        "Boosted self-driving system performance by 35% in urban scenarios through biologically inspired rewards",
        "Ran extensive simulations to validate safe deployment across edge cases in multi-agent coordination"
      ],
    },
    {
      title: "AI Research Assistant",
      company: "Harvard University",
      location: "Remote",
      date: "May 2023 – Dec 2023",
      bullets: [
        "Built LLM-based tool using OpenAI API + custom prompt engineering, speeding up research script generation",
        "Automated genomic data processing pipelines to model murine DNA structures across 500GB+ datasets",
        "Containerized workflow using Docker and deployed reproducible research environments on GCP"
      ],
    },
  ],
  projects: [
    {
      name: "Library Compute Cluster",
      tech: "Python, Kubernetes, Docker, Shell Scripting, SSH Tunneling",
      date: "Feb 2024 – Present",
      bullets: [
        "Created Kubernetes cluster across 20+ unused school library desktops, enabling private multi-node compute",
        "Executed over 1,000 hours of PyTorch training and fuzz testing for real-world ML and security experimentation"
      ],
    },
    {
      name: "Project Empower",
      tech: "Python, Pandas, Scikit-learn, Flask, React",
      date: "June 2023 – March 2025",
      bullets: [
        "Conducted cold outreach for hackathon sponsorships, securing over $250,000 in rewards",
        "Ran 5 person Social Media Team, growing to 1 M+ page visits, 500 K+ views on Instagram",
        "Created Illuminate and OpenGrant, both with over 20 K active users"
      ],
    },
  ],
  skills: {
    Languages: ["Java", "Python", "C++", "JavaScript", "SQL (PostgreSQL)"],
    Frameworks: ["React", "Node.js", "Flask", "PyTorch", "TensorFlow"],
    Tools: ["Git", "Docker", "Google Cloud Platform", "SLURM"],
    Cybersecurity: ["Kali Linux", "nmap", "Ghidra", "Burpsuite", "Wireshark"],
  },
  hobbies: ["Thrifting", "Poker", "Chess (2000 ELO)", "Baseball", "Cycling"],
}

const Section = ({ title, children }) => (
  <section className="mb-10">
    <h2 className="text-2xl font-bold text-blue-400 mb-3 tracking-wide uppercase">{title}</h2>
    <div>{children}</div>
  </section>
)

const LensTab = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] text-white">
      <h1 className="text-2xl font-bold mb-4">Lens</h1>
      <p className="mb-4 text-blue-200">Photo gallery integration coming soon!</p>
      {/* You can add photo grid or gallery logic here */}
    </div>
  )
}

const BrowserApp = () => {
  const tabs = [
    { id: "about", label: "About Me" },
    { id: "projects", label: "Projects" },
    { id: "socials", label: "Socials" },
    { id: "resume", label: "Resume" },
    { id: "lens", label: "Lens" },
  ]

  const [activeTab, setActiveTab] = useState("about")

  return (
    <div className="h-full w-full flex flex-col overflow-x-hidden" style={{ background: IE_LIGHT }}>
      {/* IE Title Bar */}
      <div style={{ background: IE_BLUE, color: "white", borderBottom: `2px solid ${IE_BORDER}` }} className="flex items-center px-3 py-1 select-none">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/49/Internet_Explorer_9_icon.svg" alt="IE" className="h-6 w-6 mr-2" />
        <span className="font-bold text-base">Aiden Huang - Personal Website - Microsoft Internet Explorer</span>
        <div className="ml-auto flex items-center space-x-1">
          <button className="w-6 h-6 flex items-center justify-center bg-[#e5e5e5] border border-[#bcbcbc] rounded hover:bg-[#c5c5c5] text-[#222]">_</button>
          <button className="w-6 h-6 flex items-center justify-center bg-[#e5e5e5] border border-[#bcbcbc] rounded hover:bg-[#c5c5c5] text-[#222]">□</button>
          <button className="w-6 h-6 flex items-center justify-center bg-[#e5e5e5] border border-[#bcbcbc] rounded hover:bg-[#c5c5c5] text-[#d00]">✕</button>
        </div>
      </div>
      {/* IE Toolbar */}
      <div style={{ background: "linear-gradient(180deg, #f4f8fb 0%, #dbeaf9 100%)", borderBottom: `1.5px solid ${IE_BORDER}` }} className="flex items-center px-2 py-1 gap-1">
        <button className="px-2 py-1 border border-[#bcbcbc] rounded bg-white hover:bg-[#e5e5e5]">◀</button>
        <button className="px-2 py-1 border border-[#bcbcbc] rounded bg-white hover:bg-[#e5e5e5]">▶</button>
        <button className="px-2 py-1 border border-[#bcbcbc] rounded bg-white hover:bg-[#e5e5e5]">⟳</button>
        <input className="ml-2 px-2 py-1 border border-[#bcbcbc] rounded w-2/3 bg-white text-black" value="aidenhuang.com" readOnly />
        <button className="ml-2 px-3 py-1 border border-[#bcbcbc] rounded bg-[#e5f1fb] hover:bg-[#dbeaf9] text-[#1b5790] font-semibold">Go</button>
      </div>
      {/* Tabs Bar */}
      <div style={{ background: IE_LIGHT, borderBottom: `1px solid ${IE_BORDER}` }} className="flex items-center px-3 py-2 gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-1 rounded-t-md border border-b-0 text-sm font-semibold ${activeTab === tab.id ? 'bg-white border-[#bcbcbc] text-[#1b5790]' : 'bg-[#e5f1fb] border-[#bcbcbc] text-[#444] hover:bg-white'}`}
            style={activeTab === tab.id ? { zIndex: 2, position: 'relative' } : {}}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-4 py-6 flex flex-col items-center" style={{ background: "#fff" }}>
        <div className="max-w-3xl w-full">
          {activeTab === "about" && (
            <Section title="About Me">
              <div className="flex flex-col items-center justify-center min-h-[300px] text-black">
                <h1 className="text-2xl font-bold mb-4">About Me</h1>
                <p className="mb-4 text-blue-200">This is the about me page.</p>
              </div>
            </Section>
          )}
          {activeTab === "projects" && (
            <Section title="Projects">
              <div className="flex flex-col items-center justify-center min-h-[300px] text-black">
                <h1 className="text-2xl font-bold mb-4">Projects</h1>
                <p className="mb-4 text-blue-200">This is the projects page.</p>
              </div>
            </Section>
          )}
          {activeTab === "socials" && (
            <Section title="Socials">
              <div className="flex flex-col items-center justify-center min-h-[300px] text-black">
                <h1 className="text-2xl font-bold mb-4">Socials</h1>
                <p className="mb-4 text-blue-200">This is the socials page.</p>
              </div>
            </Section>
          )}
          {activeTab === "resume" && (
            <Section title="Resume">
              <div className="flex flex-col items-center justify-center min-h-[300px] text-black">
                <h1 className="text-2xl font-bold mb-4">Resume</h1>
                <p className="mb-4 text-blue-200">This is the resume page.</p>
              </div>
            </Section>
          )}
          {activeTab === "lens" && (
            <Section title="Lens">
              <LensTab />
            </Section>
          )}
        </div>
      </main>
    </div>
  )
}

export default BrowserApp
