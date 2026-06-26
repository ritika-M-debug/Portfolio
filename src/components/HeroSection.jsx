import React from "react";

export default function HeroSection({ typedName }) {
  return (
    <section id="home">
      <div className="hero-text">
        <h3>Full Stack Developer</h3>
        <h1>{typedName}</h1>
        <p>
          Building scalable web applications with clean architecture, modern frameworks,
          and a passion for elegant code.
        </p>
        
        <div className="hero-socials">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">in</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">⚙</a>
          <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" title="LeetCode">LC</a>
          <a href="mailto:ritika96013@gmail.com" title="Email">✉</a>
        </div>

        <div className="hero-buttons">
          <button
            className="btn-primary"
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              View Projects
            </button>
           <button className="btn-secondary" onClick={() => window.open('/resume.pdf')}>Download Resume</button>
        </div>
      </div>

      <div className="hero-img">
        <img src="/profile.jpeg" alt="Profile" />
      </div>
    </section>
  );
}
