import type { Metadata } from "next";
import "./resume.css";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "Sakib Al Hasan | Junior Frontend Developer Resume",
  description: "ATS-friendly resume for Sakib Al Hasan, Junior Frontend Developer."
};

const webSkills = ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Git & GitHub"];
const creativeSkills = ["Photography", "Videography", "Video Editing", "Photo Editing", "Adobe Photoshop"];
const productivitySkills = ["MS Word", "MS Excel", "MS PowerPoint"];

export default function Resume() {
  return (
    <main className="resume-page">
      <article className="resume-sheet">
        <header className="resume-header">
          <div>
            <h1>Sakib Al Hasan</h1>
            <p className="resume-role">Junior Frontend Developer</p>
          </div>
          <div className="resume-contact">
            <span>Dhaka, Bangladesh</span>
            <a href="tel:+8801886740284">+880 1886-740284</a>
            <a href="mailto:sakibnx50@gmail.com">sakibnx50@gmail.com</a>
          </div>
        </header>

        <nav className="resume-links" aria-label="Professional links">
          <a href="https://github.com/sakibdev-coder">github.com/sakibdev-coder</a>
          <a href="https://www.linkedin.com/in/sakib-al-hasan-465342311/">linkedin.com/in/sakib-al-hasan-465342311</a>
          <a href="https://sakibdev-biubweq40-sakibdev-coder.vercel.app">sakibdev-biubweq40-sakibdev-coder.vercel.app</a>
        </nav>

        <section className="resume-section">
          <h2>Professional Summary</h2>
          <p>
            Junior Frontend Developer and Computer Science and Engineering student with hands-on experience
            building responsive, user-focused web interfaces. Skilled in React.js, Next.js, JavaScript,
            Tailwind CSS, and modern web development workflows. A fast learner with a creative mindset,
            strong attention to detail, and an interest in accessible digital experiences.
          </p>
        </section>

        <section className="resume-section">
          <h2>Technical Skills</h2>
          <div className="skill-list">
            <p><strong>Web Development:</strong> {webSkills.join(" • ")}</p>
            <p><strong>Creative & Multimedia:</strong> {creativeSkills.join(" • ")}</p>
            <p><strong>Productivity:</strong> {productivitySkills.join(" • ")}</p>
          </div>
        </section>

        <section className="resume-section">
          <h2>Projects</h2>
          <div className="resume-entry">
            <div className="entry-heading">
              <h3>Chougachha Website</h3>
              <span>Live Project</span>
            </div>
            <p className="entry-description">
              Built a modern digital information hub for a local community to connect people, places, and stories.
            </p>
            <p><strong>Technologies:</strong> Next.js, TypeScript, Tailwind CSS</p>
            <p className="entry-links">
              <a href="https://chougachha-lime.vercel.app/">Live Demo</a>
              <a href="https://github.com/sakibdev-coder/chougachha">GitHub Repository</a>
            </p>
          </div>
          <div className="resume-entry">
            <div className="entry-heading">
              <h3>Kindred</h3>
              <span>Concept Project · In Progress</span>
            </div>
            <p className="entry-description">
              Designed a platform concept for creating, joining, and managing community social development events.
            </p>
            <p><strong>Technologies:</strong> React, Node.js, MongoDB</p>
          </div>
        </section>

        <section className="resume-section">
          <h2>Education</h2>
          <div className="resume-entry">
            <div className="entry-heading">
              <h3>BSc in Computer Science &amp; Engineering (CSE)</h3>
              <span>2025 – Present</span>
            </div>
            <p>University of Liberal Arts Bangladesh (ULAB) · Dhaka, Bangladesh</p>
          </div>
        </section>

        <section className="resume-section resume-footer-section">
          <div>
            <h2>Additional Information</h2>
            <p><strong>Experience:</strong> Fresher</p>
            <p><strong>English:</strong> Intermediate</p>
          </div>
          <PrintButton />
        </section>
      </article>
    </main>
  );
}
