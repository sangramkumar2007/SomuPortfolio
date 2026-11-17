import { useState } from "react";
function App(){

const [form, setForm] = useState({
  name: "",
  email: "",
  message: ""
});

const handleSubmit = (e) => {
  e.preventDefault();

  const subject = `Portfolio Contact from ${form.name}`;
  const body = `Name: ${form.name}
Email: ${form.email}
Message: ${form.message}`;

  window.location.href =
    `mailto:sangramkumarmohapatra645@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};
  return(
    <div className="portfolio">
      <nav className="navbar">
        <h2 className="logo">Sangram <span>.</span></h2>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        </nav>
        <section className="hero" id="home">
          <p className="welcome">WELCOME TO MY PORTFOLIO</p>
          <h1>
            Hi, I'm <span>Sangram</span>
          </h1>
          <h2>Java & Python Developer</h2>
          <p className="description">I build applications, explore new technologies and create solutions through code.</p>
          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View my Work
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>

            <a
              href="/Sangram_Kumar_Mohapatra_Resume.pdf"
              download="Sangram_Kumar_Mohapatra_Resume.pdf"
              className="primary-btn"
            >
              Download Resume ↓
            </a>
          </div>
<div className="social-links">
  <a
    href="https://github.com/sangramkumar2007"
    target="_blank"
    rel="noopener noreferrer"
  >
    GitHub →
  </a>

  <a
    href="https://www.linkedin.com/in/sangram-kumar-mohapatra-346a47375/"
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn →
  </a>
</div>

        </section>
        <section className="about" id="about">
          <p className="section-title"> GET TO KNOW ME</p>
          <h2>About <span>Me</span></h2>
          <p className="about-text">
  Hello! I'm Sangram Kumar Mohapatra, a passionate Java and Python Developer
  interested in building real-world applications.
  I enjoy learning new technologies, solving problems,
  exploring cybersecurity, and continuously improving
  my technical knowledge.
</p>
        </section>

        <section className="skills" id="skills">
          <p className="section-title">WHAT I WORK WITH</p>

          <h2>My <span>Skills</span></h2>

          <p className="skills-description">
            Technologies and tools I use to build applications
            and solve problems.
          </p>

          <div className="skills-container">

            <div className="skill-card">
              <h3>Java</h3>
              <p>Core Java, OOP, Collections, Spring Boot</p>
            </div>

            <div className="skill-card">
              <h3>Python</h3>
              <p>Python, FastAPI, NumPy, Pandas</p>
            </div>

            <div className="skill-card">
              <h3>React</h3>
              <p>Components, Hooks, Axios, React Router</p>
            </div>

            <div className="skill-card">
              <h3>MySQL</h3>
              <p>SQL, Database Design, CRUD Operations</p>
            </div>

            <div className="skill-card">
              <h3>HTML & CSS</h3>
              <p>Responsive Design, Flexbox, Styling</p>
            </div>

            <div className="skill-card">
              <h3>Git & GitHub</h3>
              <p>Version Control, Repositories, Git Push</p>
            </div>

          </div>
        </section>

          <section className="projects" id="projects">
            <p className="welcome">WHAT I'VE BUILT</p>
            <h2>My <span>Projects</span></h2>
            <p className="section-description">
              Some projects I've developed using Java and Python.
            </p>

            <div className="project-container">

              <div className="project-card">
                <h3>Student Course Catalog</h3>
                <h4>Java | Spring Boot</h4>
                <p>
                  A backend application for managing courses
                  with REST APIs, Spring Boot, JPA and MySQL.
                </p>
                <a
                  href="https://github.com/sangramkumar2007/course-catalog-springboot"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub →
                </a>
              </div>

              <div className="project-card">
                <h3>Student Course Catalog</h3>
                <h4>Python | FastAPI</h4>
                <p>
                  A course management application built using
                  FastAPI, SQLAlchemy, MySQL and React.
                </p>
                <a
                  href="https://github.com/sangramkumar2007/FastAPI-Course-Catalog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub →
                </a>
              </div>

            </div>
          </section>
<section className="certifications" id="certifications">
  <p className="section-title">MY ACHIEVEMENTS</p>
  <h2>My <span>Certifications</span></h2>

  <p className="section-description">
    Professional training and certifications I've completed.
  </p>

  <div className="certificate-container">

    <div className="certificate-card">
      <h3>Software Development</h3>
      <p>Software Development Internship Certificate</p>
      <a
        href="/certificates/software-certificate.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Certificate →
      </a>
    </div>

    <div className="certificate-card">
      <h3>HPE Forage</h3>
      <p>Software Engineering Virtual Experience</p>
      <a
        href="/certificates/hpe-forage.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Certificate →
      </a>
    </div>

  </div>
</section>


<section className="contact" id="contact">
  <p className="welcome">GET IN TOUCH</p>
  <h2>Contact <span>Me</span></h2>

  <p className="section-description">
    Have a project or opportunity? Let's connect!
  </p>

  <form className="contact-form" onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Your Name"
      value={form.name}
      onChange={(e) =>
        setForm({ ...form, name: e.target.value })
      }
      required
    />

    <input
      type="email"
      placeholder="Your Email"
      value={form.email}
      onChange={(e) =>
        setForm({ ...form, email: e.target.value })
      }
      required
    />

    <textarea
      placeholder="Your Message"
      rows="5"
      value={form.message}
      onChange={(e) =>
        setForm({ ...form, message: e.target.value })
      }
      required
    />

    <button type="submit">Send Message →</button>
  </form>
</section>



        <footer>
          © 2026 SangramPortfolio. Build With React.
        </footer>
      </div>
  )
}
export default App