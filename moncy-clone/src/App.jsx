import React from "react";
import reactLogo from "./assets/react.svg";

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <img src={reactLogo} alt="Profile" className="w-32 h-32 rounded-full mb-6 shadow-lg" />
      <h1 className="text-4xl md:text-6xl font-bold mb-2">Moncy Dev</h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-4">Building beautiful web experiences</p>
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
        <p className="text-lg text-gray-700">I'm a passionate developer focused on crafting clean, user-friendly web applications. I love working with modern technologies and bringing ideas to life on the web.</p>
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
            <h3 className="text-xl font-semibold mb-2">Project One</h3>
            <p className="text-gray-700 mb-2">A modern web app built with React and Tailwind CSS.</p>
            <a href="#" className="text-blue-600 hover:underline">View Project</a>
          </div>
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Project Two</h3>
            <p className="text-gray-700 mb-2">A beautiful portfolio site with animations and responsive design.</p>
            <a href="#" className="text-blue-600 hover:underline">View Project</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 bg-gray-900 text-gray-400 text-center" id="contact">
      <div className="mb-2">
        <a href="mailto:hello@moncy.dev" className="hover:text-white transition">hello@moncy.dev</a>
      </div>
      <div className="flex justify-center gap-4 mb-2">
        <a href="#" className="hover:text-white transition">GitHub</a>
        <a href="#" className="hover:text-white transition">LinkedIn</a>
        <a href="#" className="hover:text-white transition">Twitter</a>
      </div>
      <div>&copy; {new Date().getFullYear()} Moncy Dev. All rights reserved.</div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="font-sans">
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
