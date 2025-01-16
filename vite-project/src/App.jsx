import { useState } from 'react';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState('about-me');

  const renderSection = () => {
    switch (currentSection) {
      case 'about-me':
        return (
          <section id="about-me">
            <h2>About Me</h2>
            <img src="path/to/photo.jpg" alt="Developer's Photo" />
            <p>Short bio about the developer.</p>
          </section>
        );
      case 'portfolio':
        return (
          <section id="portfolio">
            <h2>Portfolio</h2>
            {/* Portfolio items will be added here */}
          </section>
        );
      case 'contact':
        return (
          <section id="contact">
            <h2>Contact</h2>
            <form>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
              <button type="submit">Submit</button>
            </form>
          </section>
        );
      case 'resume':
        return (
          <section id="resume">
            <h2>Resume</h2>
            <a href="path/to/resume.pdf" download>Download Resume</a>
            <ul>
              <li>Proficiency 1</li>
              <li>Proficiency 2</li>
              <li>Proficiency 3</li>
            </ul>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <header>
        <h1>Developer's Name</h1>
        <nav>
          <ul>
            <li><a href="#about-me" onClick={() => setCurrentSection('about-me')}>About Me</a></li>
            <li><a href="#portfolio" onClick={() => setCurrentSection('portfolio')}>Portfolio</a></li>
            <li><a href="#contact" onClick={() => setCurrentSection('contact')}>Contact</a></li>
            <li><a href="#resume" onClick={() => setCurrentSection('resume')}>Resume</a></li>
          </ul>
        </nav>
      </header>
      <main>
        {renderSection()}
      </main>
      <footer>
        <a href="https://github.com/developer" target="_blank">GitHub</a>
        <a href="https://linkedin.com/in/developer" target="_blank">LinkedIn</a>
        <a href="https://stackoverflow.com/users/developer" target="_blank">Stack Overflow</a>
      </footer>
    </>
  );
}

export default App;
