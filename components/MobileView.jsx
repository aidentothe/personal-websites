const MobileView = () => {
  return (
    <div className="bg-gray-100 w-full font-sans text-gray-900">
      <header className="bg-white py-6 px-4 shadow-sm sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-center">Aiden Huang</h1>
        <div className="text-center mt-1 text-gray-600 text-sm">
          <p>650-213-7759 | aidenhuang.pro@gmail.com</p>
        </div>
      </header>

      <div className="px-4 py-6">
        <section className="mb-8">
          <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">Education</h2>
          <div className="mb-2">
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <h3 className="font-semibold">Monta Vista High School</h3>
              <span className="text-sm text-gray-600">August 2021 – May 2025</span>
            </div>
            <p className="text-sm">High School Diploma, Cupertino, CA</p>
            <ul className="list-disc list-inside text-sm mt-1 text-gray-700">
              <li>NSA Codebreaker High Performer/ Stokes Scholar, USACO Plat, 4x AIME, FRC Robotics Lead</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">Experience</h2>

          <div className="mb-6">
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <h3 className="font-semibold">AI Intern</h3>
              <span className="text-sm text-gray-600">September 2024 – Present</span>
            </div>
            <p className="text-sm italic">Simular.AI, Remote</p>
            <ul className="list-disc list-outside ml-4 text-sm mt-2 text-gray-700 space-y-1">
              <li>
                Built distributed Python backend for LLM agent orchestration using FastAPI, asyncio, and task queues,
                reducing average latency by 40% under high concurrency
              </li>
              <li>
                Developed custom input parsers and token management system to minimize prompt duplication and improve
                semantic routing accuracy
              </li>
              <li>
                Refactored React/Tailwind front-end by eliminating unnecessary re-renders and restructuring component
                hierarchy, reducing load time by 30%
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <h3 className="font-semibold">HPC Intern</h3>
              <span className="text-sm text-gray-600">March 2023 – Present</span>
            </div>
            <p className="text-sm italic">ETH Zurich, Remote</p>
            <ul className="list-disc list-outside ml-4 text-sm mt-2 text-gray-700 space-y-1">
              <li>
                Optimized PyTorch-based model training on multi-node SLURM HPC clusters using Horovod and NCCL, reducing
                epoch time by 40%
              </li>
              <li>
                Engineered parallel data ingestion pipeline to process 50TB+ genomics datasets using Dask and HDF5,
                achieving 6x throughput
              </li>
              <li>
                Built hybrid HPC–cloud workload manager using Terraform + custom Python CLI, enabling serverless access
                to on-prem compute resources
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <h3 className="font-semibold">Research Assistant</h3>
              <span className="text-sm text-gray-600">June 2022 – Present</span>
            </div>
            <p className="text-sm italic">University of California, Santa Cruz, CA</p>
            <ul className="list-disc list-outside ml-4 text-sm mt-2 text-gray-700 space-y-1">
              <li>
                Co-authored NeurIPS 2024 paper on spiking neural networks for real-time autonomous navigation in
                adversarial environments
              </li>
              <li>
                Boosted self-driving system performance by 35% in dense urban scenarios through biologically inspired
                decision frameworks
              </li>
              <li>
                Ran extensive simulation + real-world tests to validate safe deployment across edge cases in multi-agent
                coordination
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <h3 className="font-semibold">Artificial Intelligence Research Assistant</h3>
              <span className="text-sm text-gray-600">May 2023 – December 2023</span>
            </div>
            <p className="text-sm italic">Harvard University, Remote</p>
            <ul className="list-disc list-outside ml-4 text-sm mt-2 text-gray-700 space-y-1">
              <li>
                Built LLM-based code synthesis tool using OpenAI API + custom prompt engineering, increasing research
                script generation speed by 30%
              </li>
              <li>
                Automated genomic data processing pipelines in Snakemake + pandas to model murine DNA structures across
                500GB+ datasets
              </li>
              <li>
                Containerized entire workflow using Docker and deployed reproducible research environments on GCP with
                CI/CD for reproducibility
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">Projects</h2>
          <div className="mb-4">
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <h3 className="font-semibold">Library Compute Cluster</h3>
              <span className="text-sm text-gray-600">February 2024 – Present</span>
            </div>
            <p className="text-sm italic">Python, Kubernetes, Docker, Shell Scripting, SSH Tunneling</p>
            <ul className="list-disc list-outside ml-4 text-sm mt-2 text-gray-700 space-y-1">
              <li>
                Created Kubernetes cluster across 20+ unused school library desktops, enabling private multi-node
                compute
              </li>
              <li>
                Executed over 1,000 hours of PyTorch training and fuzz testing for real-world ML and security
                experimentation
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">Technical Skills</h2>
          <div className="space-y-2 text-sm">
            <div className="p-2 bg-white rounded-md shadow-sm">
              <span className="font-semibold">Languages:</span> Java, Python, C++, JavaScript, SQL (PostgreSQL)
            </div>
            <div className="p-2 bg-white rounded-md shadow-sm">
              <span className="font-semibold">Frameworks:</span> React, Node.js, Flask, PyTorch, TensorFlow
            </div>
            <div className="p-2 bg-white rounded-md shadow-sm">
              <span className="font-semibold">Developer Tools:</span> Git, Docker, Google Cloud Platform, SLURM
            </div>
            <div className="p-2 bg-white rounded-md shadow-sm">
              <span className="font-semibold">Cybersecurity:</span> Kali Linux, nmap, Ghidra, Burpsuite, Wireshark
            </div>
            <div className="p-2 bg-white rounded-md shadow-sm">
              <span className="font-semibold">Hobbies:</span> Thrifting, Poker, Chess (2000 ELO), Baseball, Cycling
            </div>
          </div>
        </section>

        <div className="mt-8 pt-4 border-t border-gray-300 text-center">
          <a
            href="/assets/resume/AidenHuang_Resume.pdf"
            download
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-150"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
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
            Download Full Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default MobileView
