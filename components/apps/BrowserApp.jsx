import { motion } from "framer-motion"

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
        "Ran 5 person Social Media Team, growing to 1mil+ page visits, 500k+ views on Instagram",
        "Created Illuminate and OpenGrant, both with over 20k active users"
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

const BrowserApp = () => {
  return (
    <div className="min-h-full w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 py-8 flex flex-col items-center font-sans overflow-auto">
      {/* Header */}
      <div className="max-w-3xl w-full bg-white/10 rounded-2xl shadow-xl p-8 mb-8 text-center border border-white/10">
        <h1 className="text-4xl font-extrabold text-white mb-2 tracking-tight">{resume.name}</h1>
        <div className="flex flex-wrap justify-center gap-4 text-blue-200 text-lg mb-2">
          {resume.contact.map((c) => (
            <span key={c.label} className="flex items-center gap-1">
              {c.value}
            </span>
          ))}
        </div>
      </div>
      <div className="max-w-3xl w-full bg-white/5 rounded-2xl shadow-lg p-8 border border-white/10">
        {/* Education */}
        <Section title="Education">
          <ul>
            {resume.education.map((edu) => (
              <li key={edu.school} className="mb-4">
                <div className="flex justify-between items-center flex-wrap">
                  <span className="font-semibold text-white text-lg">{edu.school}</span>
                  <span className="text-sm text-gray-300">{edu.date}</span>
                </div>
                <div className="text-blue-200 mb-1">{edu.degree} <span className="text-gray-400">| {edu.location}</span></div>
                {edu.achievements && (
                  <ul className="list-disc list-inside text-gray-300 text-sm ml-2">
                    {edu.achievements.map((a, i) => <li key={i}>{a}</li>)}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </Section>
        {/* Experience */}
        <Section title="Experience">
          <ul>
            {resume.experience.map((exp) => (
              <li key={exp.title + exp.company} className="mb-6">
                <div className="flex justify-between items-center flex-wrap">
                  <span className="font-semibold text-white text-lg">{exp.title}, {exp.company}</span>
                  <span className="text-sm text-gray-300">{exp.date}</span>
                </div>
                <div className="text-blue-200 mb-1">{exp.location}</div>
                <ul className="list-disc list-inside text-gray-300 ml-2">
                  {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </li>
            ))}
          </ul>
        </Section>
        {/* Projects */}
        <Section title="Projects">
          <ul>
            {resume.projects.map((proj) => (
              <li key={proj.name} className="mb-6">
                <div className="flex justify-between items-center flex-wrap">
                  <span className="font-semibold text-white text-lg">{proj.name}</span>
                  <span className="text-sm text-gray-300">{proj.date}</span>
                </div>
                <div className="text-blue-200 mb-1">{proj.tech}</div>
                <ul className="list-disc list-inside text-gray-300 ml-2">
                  {proj.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </li>
            ))}
          </ul>
        </Section>
        {/* Technical Skills */}
        <Section title="Technical Skills">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-200">
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
        {/* Hobbies */}
        <Section title="Hobbies">
          <div className="flex flex-wrap gap-3 text-blue-200">
            {resume.hobbies.map((h) => <span key={h} className="bg-white/10 px-3 py-1 rounded-full shadow text-base">{h}</span>)}
          </div>
        </Section>
      </div>
    </div>
  )
}

export default BrowserApp
