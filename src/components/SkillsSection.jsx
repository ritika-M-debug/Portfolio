import React from "react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "JavaScript", "C", "Go"]
    },
    {
      title: "Frontend",
      skills: ["React", "HTML/CSS", "Responsive UI"]
    },
    {
      title: "Backend & DB",
      skills: ["Node.js", "Spring Boot", "MongoDB", "MySQL", "Postgresql"]
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Postman", "VS Code"]
    },
    {
      title: "IoT",
      skills: ["Smart Farming", "Automation", "Sensors"]
    },
    {
      title: "Interests",
      skills: ["Full Stack", "AI", "Backend Develop", "Software Engineering"]
    }
  ];

  return (
    <section id="skills">
       <div className="container">
      <h2 className="section-title">Skills & Tools</h2>
      <p className="section-subtitle">Technologies and tools I work with to build modern, scalable applications.</p>
      <div className="skills-grid">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skill-category">
            <h3>{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
