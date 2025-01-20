import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // State to keep track of the current section being displayed
  const [currentSection, setCurrentSection] = useState('about-me');

  // Set the document title and favicon when the component mounts
  useEffect(() => {
    document.title = "NDavis Portfolio";
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = '/src/assets/img/professional-portfolio.png'; 
    document.head.appendChild(link);
  }, []);

  // Handle form submission and show an alert
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Your message has been sent!');
  };

  // Render the appropriate section based on the currentSection state
  const renderSection = () => {
    switch (currentSection) {
      case 'about-me':
        return (
          <section id="about-me" className="container-fluid mt-5">
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
          <section id="portfolio" className="container-fluid mt-5">
            <h2>Portfolio</h2>
            <div className="row">
              {/* Portfolio project cards */}
              <div className="col-md-4">
                <div className="card mb-4">
                  <img src="path/to/project1.jpg" className="card-img-top" alt="Project 1" />
                  <div className="card-body">
                    <h5 className="card-title">Project 1</h5>
                    <p className="card-text">Short description of Project 1.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <img src="path/to/project2.jpg" className="card-img-top" alt="Project 2" />
                  <div className="card-body">
                    <h5 className="card-title">Project 2</h5>
                    <p className="card-text">Short description of Project 2.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <img src="path/to/project3.jpg" className="card-img-top" alt="Project 3" />
                  <div className="card-body">
                    <h5 className="card-title">Project 3</h5>
                    <p className="card-text">Short description of Project 3.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <img src="path/to/project4.jpg" className="card-img-top" alt="Project 4" />
                  <div className="card-body">
                    <h5 className="card-title">Project 4</h5>
                    <p className="card-text">Short description of Project 4.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <img src="path/to/project5.jpg" className="card-img-top" alt="Project 5" />
                  <div className="card-body">
                    <h5 className="card-title">Project 5</h5>
                    <p className="card-text">Short description of Project 5.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <img src="path/to/project6.jpg" className="card-img-top" alt="Project 6" />
                  <div className="card-body">
                    <h5 className="card-title">Project 6</h5>
                    <p className="card-text">Short description of Project 6.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      case 'contact':
        return (
          <section id="contact" className="container-fluid mt-5">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
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
          <section id="resume" className="container-fluid mt-5">
            <h2>Resume</h2>
            <a href="path/to/resume.pdf" download className="btn btn-secondary mb-3">Download Resume</a>
            <h3>Proficiencies</h3>
            <ul className="list-group">
              <li className="list-group-item">HTML</li>
              <li className="list-group-item">CSS</li>
              <li className="list-group-item">JavaScript</li>
              <li className="list-group-item">TypeScript</li>
              <li className="list-group-item">NodeJS</li>
              <li className="list-group-item">SQL</li>
              <li className="list-group-item">ChatGPT</li>
              <li className="list-group-item">Github Copilot</li>
              <li className="list-group-item">Amazon Q</li>
              <li className="list-group-item">Jira</li>
              <li className="list-group-item">Confluence</li>
              <li className="list-group-item">Qase</li>
              <li className="list-group-item">LucidChart</li>
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
        <div className="container-fluid">
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
        <div className="container-fluid">
          <a href="https://github.com/NickDavis07" target="_blank" className="text-white mr-3">GitHub</a>
          <a href="https://www.linkedin.com/in/nick-davis-491480323/" target="_blank" className="text-white mr-3">LinkedIn</a>
          <a href="https://stackoverflow.com/users/developer" target="_blank" className="text-white">Stack Overflow</a>
        </div>
        <div className="text-white mt-3" style={{ fontSize: '0.75rem' }}>
          <a href="https://www.flaticon.com/free-icons/portfolio" title="portfolio icons" className="text-white">Portfolio icons created by Flat Icons - Flaticon</a>
        </div>
      </footer>
    </>
  );
}

export default App;
