import { useState } from 'react';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState('about-me');

  const renderSection = () => {
    switch (currentSection) {
      case 'about-me':
        return (
          <section id="about-me" className="container mt-5">
            <h2>About Me</h2>
            <img src="path/to/photo.jpg" alt="Developer's Photo" className="img-fluid rounded-circle mb-3" />
            <p>
              I am a versatile Product Owner with a strong background in driving product development, implementing Agile methodologies, and leading cross-functional teams to deliver high-quality results. With expertise in QA management and Scrum Master roles, I have successfully managed projects across various industries, including HR, tech, and entertainment.
            </p>
            <p>
              My experience includes administering tools like Jira, Confluence, Qase, and LucidChart, as well as playing a key role in achieving SOC compliance. I am committed to continuous learning and have completed professional development courses from SVPG and SAFe, which have further honed my skills in Agile product management and strategic decision-making.
            </p>
            <p>
              Currently, I am enrolled in the University of Utah coding bootcamp, where I am expanding my technical skills to pursue a software development role upon graduation. Passionate about optimizing workflows and enhancing team productivity, I am eager to leverage my skills in a dynamic environment to drive innovation and success.
            </p>
          </section>
        );
      case 'portfolio':
        return (
          <section id="portfolio" className="container mt-5">
            <h2>Portfolio</h2>
            {/* Portfolio items will be added here */}
          </section>
        );
      case 'contact':
        return (
          <section id="contact" className="container mt-5">
            <h2>Contact</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" className="form-control" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </section>
        );
      case 'resume':
        return (
          <section id="resume" className="container mt-5">
            <h2>Resume</h2>
            <a href="path/to/resume.pdf" download className="btn btn-secondary mb-3">Download Resume</a>
            <ul className="list-group">
              <li className="list-group-item">Proficiency 1</li>
              <li className="list-group-item">Proficiency 2</li>
              <li className="list-group-item">Proficiency 3</li>
            </ul>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <header className="bg-dark text-white p-3">
        <div className="container">
          <h1>Developer's Name</h1>
          <nav>
            <ul className="nav">
              <li className="nav-item"><a href="#about-me" className="nav-link text-white" onClick={() => setCurrentSection('about-me')}>About Me</a></li>
              <li className="nav-item"><a href="#portfolio" className="nav-link text-white" onClick={() => setCurrentSection('portfolio')}>Portfolio</a></li>
              <li className="nav-item"><a href="#contact" className="nav-link text-white" onClick={() => setCurrentSection('contact')}>Contact</a></li>
              <li className="nav-item"><a href="#resume" className="nav-link text-white" onClick={() => setCurrentSection('resume')}>Resume</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        {renderSection()}
      </main>
      <footer className="bg-dark text-white p-3 mt-5">
        <div className="container">
          <a href="https://github.com/developer" target="_blank" className="text-white mr-3">GitHub</a>
          <a href="https://linkedin.com/in/developer" target="_blank" className="text-white mr-3">LinkedIn</a>
          <a href="https://stackoverflow.com/users/developer" target="_blank" className="text-white">Stack Overflow</a>
        </div>
      </footer>
    </>
  );
}

export default App;
