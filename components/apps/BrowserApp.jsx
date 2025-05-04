import { motion } from "framer-motion"
import { useState } from "react"

// Dark mode palette in line with the rest of the app
const BG_DARK = "#181c24"
const PANEL_DARK = "#232937"
const ACCENT = "#2e6de1"
const BORDER = "#334155"
const TEXT = "#e3e6ee"
const SUBTLE = "#8ca0c9"

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
      date: "Aug 2025 - May 2029"
    },
    {
      school: "Monta Vista High School",
      degree: "High School Diploma",
      location: "Cupertino, CA",
      date: "Aug 2021 – May 2025",
      achievements: [
        "NSA Codebreaker High Performer/ Stokes Scholar ",
        "USACO Plat, 4x AIME, FRC Robotics Lead"
      ]
    }
  ],
  experience: [
    {
      title: "Software Engineering Intern",
      company: "NextSilicon",
      location: "Tel Aviv, Israel (Remote)",
      date: "June 2024 – August 2024",
      bullets: [
        "Developed Maverick-2, focusing on optimizing software-defined hardware acceleration for HPC workloads",
        "Integrated support for models like OpenMP and Kokkos, enhancing accessibility and reducing code porting efforts",
        "Collaborated with other teams to profile and improve performance of HPC applications on the Maverick-2 platform"
      ]
    },
    {
      title: "HPC Intern",
      company: "ETH Zurich",
      location: "Remote",
      date: "March 2023 – Present",
      bullets: [
        "Optimized PyTorch model training on multi-node SLURM clusters using Horovod, reducing epoch time by 40%",
        "Engineered data ingestion pipeline to process 50TB+ datasets using Dask and HDF5, achieving 6x throughput",
        "Built HPC–cloud workload manager using Terraform + Python CLI, enabling serverless access to on-prem compute"
      ]
    },
    {
      title: "Research Assistant",
      company: "University of California, Santa Cruz",
      location: "Santa Cruz, CA",
      date: "June 2022 – Present",
      bullets: [
        "Authored NeurIPS 2024 paper on spiking neural networks for autonomous navigation in adversarial environments",
        "Boosted self-driving system performance by 35% in urban scenarios through biologically inspired rewards",
        "Ran extensive simulations to validate safe deployment across edge cases in multi-agent coordination"
      ]
    },
    {
      title: "Artificial Intelligence Research Assistant",
      company: "Harvard University",
      location: "Remote",
      date: "May 2023 – December 2023",
      bullets: [
        "Built LLM-based tool using OpenAI API + custom prompt engineering, speeding up research script generation",
        "Automated genomic data processing pipelines to model murine DNA structures across 500GB+ datasets",
        "Containerized workflow using Docker and deployed reproducible research environments on GCP"
      ]
    }
  ],
  projects: [
    {
      name: "Library Compute Cluster",
      tech: "Python, Kubernetes, Docker, Shell Scripting, SSH Tunneling",
      date: "Feb 2024 – Present",
      bullets: [
        "Created Kubernetes cluster across 20+ unused school library desktops, enabling private multi-node compute",
        "Executed over 1,000 hours of PyTorch training and fuzz testing for real-world ML and security experimentation"
      ]
    },
    {
      name: "Project Empower",
      tech: "Python, Pandas, Scikit-learn, Flask, React",
      date: "June 2023 – Present",
      bullets: [
        "Conducted cold outreach for hackathon sponsorships, securing over $250,000 in rewards",
        "Ran 5 person Social Media Team, growing to 1mil+ page visits, 500k+ views on Instagram",
        "Created Illuminate and OpenGrant, both with over 20k active users"
      ]
    }
  ],
  skills: {
    Languages: ["Java", "Python", "C++", "JavaScript", "SQL (PostgreSQL)"],
    Frameworks: ["React", "Node.js", "Flask", "PyTorch", "TensorFlow"],
    Tools: ["Git", "Docker", "Google Cloud Platform", "SLURM"],
    Cybersecurity: ["Kali Linux", "nmap", "Ghidra", "Burpsuite", "Wireshark"]
  },
  hobbies: ["Thrifting", "Poker", "Chess (2000 ELO)", "Baseball", "Cycling"]
}

const Section = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="text-xl font-bold text-white mb-3 tracking-wide border-b border-slate-700 pb-1">{title}</h2>
    {children}
  </section>
)

const BrowserApp = () => {
  const [activeTab, setActiveTab] = useState("resume")
  const tabs = [
    { id: "resume", label: "Resume" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "hobbies", label: "Hobbies" },
    { id: "lens", label: "Lens" },
  ]

  return (
    <div className="h-full w-full flex flex-col overflow-x-hidden" style={{ background: BG_DARK }}>
      {/* Custom dark IE-like title bar */}
      <div style={{ background: PANEL_DARK, color: TEXT, borderBottom: `2px solid ${BORDER}` }} className="flex items-center px-4 py-2 select-none">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/49/Internet_Explorer_9_icon.svg" alt="IE" className="h-6 w-6 mr-3" />
        <span className="font-bold text-base tracking-wide">Aiden Huang – Resume – Internet Explorer</span>
      </div>
      {/* Tabs Bar */}
      <div style={{ background: PANEL_DARK, borderBottom: `1px solid ${BORDER}` }} className="flex items-center px-4 py-1 gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-1 rounded-t-md border-b-0 text-sm font-semibold transition-colors duration-150 ${activeTab === tab.id ? 'bg-[#232937] text-white border-x border-t border-slate-700' : 'bg-[#181c24] text-slate-300 hover:bg-[#232937] border-transparent'}`}
            style={activeTab === tab.id ? { zIndex: 2, position: 'relative' } : {}}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-4 py-8 flex flex-col items-center" style={{ background: BG_DARK }}>
        <div className="max-w-3xl w-full">
          {activeTab === "resume" && (
            <div className="bg-[#222733] rounded-xl p-8 shadow-lg border border-slate-700 text-white">
              <div className="mb-6">
                <h1 className="text-3xl font-extrabold tracking-tight mb-1">{resume.name}</h1>
                <div className="flex flex-wrap gap-4 text-blue-300 text-lg mb-2">
                  {resume.contact.map((c) => (
                    <span key={c.label} className="flex items-center gap-1">{c.value}</span>
                  ))}
                </div>
              </div>
              <Section title="Education">
                <ul>
                  {resume.education.map((edu) => (
                    <li key={edu.school} className="mb-4">
                      <div className="flex justify-between items-center flex-wrap">
                        <span className="font-semibold text-white text-lg">{edu.school}</span>
                        <span className="text-sm text-slate-300">{edu.date}</span>
                      </div>
                      <div className="text-blue-200 mb-1">{edu.degree} <span className="text-slate-400">| {edu.location}</span></div>
                      {edu.achievements && (
                        <ul className="list-disc list-inside text-slate-400 text-sm ml-2">
                          {edu.achievements.map((a, i) => <li key={i}>{a}</li>)}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </Section>
              <Section title="Experience">
                <ul>
                  {resume.experience.map((exp) => (
                    <li key={exp.title + exp.company} className="mb-6">
                      <div className="flex justify-between items-center flex-wrap">
                        <span className="font-semibold text-white text-lg">{exp.title}, {exp.company}</span>
                        <span className="text-sm text-slate-300">{exp.date}</span>
                      </div>
                      <div className="text-blue-200 mb-1">{exp.location}</div>
                      <ul className="list-disc list-inside text-slate-400 ml-2">
                        {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                      </ul>
                    </li>
                  ))}
                </ul>
              </Section>
            </div>
          )}
          {activeTab === "projects" && (
            <div className="bg-[#222733] rounded-xl p-8 shadow-lg border border-slate-700 text-white">
              <Section title="Projects">
                <ul>
                  {resume.projects.map((proj) => (
                    <li key={proj.name} className="mb-6">
                      <div className="flex justify-between items-center flex-wrap">
                        <span className="font-semibold text-white text-lg">{proj.name}</span>
                        <span className="text-sm text-slate-300">{proj.date}</span>
                      </div>
                      <div className="text-blue-200 mb-1">{proj.tech}</div>
                      <ul className="list-disc list-inside text-slate-400 ml-2">
                        {proj.bullets.map((b, i) => <li key={i}>{b}</li>)}
                      </ul>
                    </li>
                  ))}
                </ul>
              </Section>
            </div>
          )}
          {activeTab === "skills" && (
            <div className="bg-[#222733] rounded-xl p-8 shadow-lg border border-slate-700 text-white">
              <Section title="Technical Skills">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-200">
                  <div>
                    <div className="font-semibold text-blue-300 mb-1">Languages</div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {resume.skills.Languages.map((s) => <span key={s} className="bg-blue-800/40 px-2 py-1 rounded text-sm">{s}</span>)}
                    </div>
                    <div className="font-semibold text-blue-300 mb-1">Frameworks</div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {resume.skills.Frameworks.map((s) => <span key={s} className="bg-blue-800/40 px-2 py-1 rounded text-sm">{s}</span>)}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-blue-300 mb-1">Developer Tools</div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {resume.skills.Tools.map((s) => <span key={s} className="bg-blue-800/40 px-2 py-1 rounded text-sm">{s}</span>)}
                    </div>
                    <div className="font-semibold text-blue-300 mb-1">Cybersecurity</div>
                    <div className="flex flex-wrap gap-2">
                      {resume.skills.Cybersecurity.map((s) => <span key={s} className="bg-blue-800/40 px-2 py-1 rounded text-sm">{s}</span>)}
                    </div>
                  </div>
                </div>
              </Section>
            </div>
          )}
          {activeTab === "hobbies" && (
            <div className="bg-[#222733] rounded-xl p-8 shadow-lg border border-slate-700 text-white">
              <Section title="Hobbies">
                <div className="flex flex-wrap gap-3 text-blue-200">
                  {resume.hobbies.map((h) => <span key={h} className="bg-white/10 px-3 py-1 rounded-full shadow text-base">{h}</span>)}
                </div>
              </Section>
            </div>
          )}
          {activeTab === "lens" && (
            <div className="bg-[#222733] rounded-xl p-8 shadow-lg border border-slate-700 text-white">
              <Section title="Lens">
                <LensTab />
              </Section>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

const LensTab = () => (
  <div className="flex flex-col items-center justify-center min-h-[300px] text-white">
    <h1 className="text-2xl font-bold mb-4">Lens</h1>
    <p className="mb-4 text-blue-200">Photo gallery integration coming soon!</p>
    {/* You can add photo grid or gallery logic here */}
  </div>
)

export default BrowserApp
