import React from "react";

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Replace with real or AI-generated avatar if available */}
      <div className="w-32 h-32 rounded-full mb-6 bg-gray-300 flex items-center justify-center text-4xl font-bold shadow-lg">
        HP
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-2">Harini Parasuraman</h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-2">Frontend Developer & UI/UX Designer</p>
      <p className="text-md md:text-lg text-gray-400 mb-4">Puducherry, India</p>
      <div className="flex gap-4 mt-2">
        <a href="#projects" className="px-6 py-2 bg-blue-600 rounded hover:bg-blue-700 transition">Projects</a>
        <a href="#contact" className="px-6 py-2 border border-blue-600 rounded hover:bg-blue-600 hover:text-white transition">Contact</a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-20 bg-white text-gray-900" id="about">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-700 mb-4">A passionate Frontend Developer and UI/UX Designer pursuing a B.Tech in Artificial Intelligence and Data Science. I design intuitive, user-centered interfaces and build responsive prototypes. My goal is to combine creative visual design with clean, performant development.</p>
        <div className="mt-6">
          <h3 className="text-2xl font-semibold mb-2">Skills & Technologies</h3>
          <div className="mb-2"><span className="font-semibold">Frontend:</span> Flutter, HTML5, CSS3, JavaScript</div>
          <div className="mb-2"><span className="font-semibold">Backend:</span> Python, SQL, Firebase, Azure</div>
          <div className="mb-2"><span className="font-semibold">Tools:</span> Git, GitHub, Figma, Adobe Photoshop, VS Code</div>
          <div className="mb-2"><span className="font-semibold">Soft Skills:</span> Creative Problem Solving, User-Centered Design Thinking, Collaboration & Communication, Attention to Detail, User Research & Usability Testing</div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="py-20 bg-gray-100" id="projects">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">MedVisor – Lab Report Analysis App</h3>
            <p className="text-gray-700 mb-2">Mobile app prototype designed for medical professionals to analyze lab reports.</p>
            <div className="text-sm text-gray-500 mb-1">Tech Stack: Flutter UI, Firebase backend integration</div>
            <div className="text-sm text-gray-500 mb-2">Outcome: Achieved a 25% performance boost and a 20% increase in user retention through responsive design and usability testing.</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">ClientsBridge – Freelancing Platform</h3>
            <p className="text-gray-700 mb-2">Web-based platform to connect clients, freelancers, and companies.</p>
            <div className="text-sm text-gray-500 mb-1">Tech Stack: HTML, CSS, JavaScript frontend; Firebase or Azure backend</div>
            <div className="text-sm text-gray-500 mb-2">Outcome: Improved navigation and enhanced usability for job discovery and platform engagement.</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Rupeasy – Budget Overview Platform</h3>
            <p className="text-gray-700 mb-2">A platform for managing and visualizing personal budgets efficiently.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="py-20 bg-white text-gray-900" id="experience">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Experience</h2>
        <div className="bg-gray-100 rounded-lg shadow p-6 mb-4">
          <h3 className="text-xl font-semibold mb-1">UI/UX Designer (Intern)</h3>
          <div className="text-sm text-gray-500 mb-1">Academic Project | July 2024 – Jan 2025</div>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Designed and prototyped intuitive UI/UX for web applications</li>
            <li>Conducted user research and usability testing, leading to 20% improvement in engagement</li>
            <li>Collaborated with developers to integrate responsive designs using HTML, CSS & JavaScript</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 bg-gray-900 text-gray-400 text-center" id="contact">
      <div className="mb-2">
        <a href="mailto:harini1604@gmail.com" className="hover:text-white transition">harini1604@gmail.com</a>
      </div>
      <div className="flex justify-center gap-4 mb-2">
        <a href="https://linkedin.com/in/harini-parasuraman" className="hover:text-white transition" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <div>&copy; {new Date().getFullYear()} Harini Parasuraman. All rights reserved.</div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="font-sans">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}
