import React from 'react';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <nav className="glass-nav">
        <div className="nav-content" style={{ justifyContent: 'center' }}>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#expertise">Expertise</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default App;
