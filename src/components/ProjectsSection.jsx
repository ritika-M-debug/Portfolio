import React from "react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Terrace Farming Management System",
      desc: "Developed a smart IoT-based terrace farming solution to monitor soil moisture, temperature, and humidity in real time. Automated irrigation and environmental controls through a responsive dashboard, improving resource utilization and crop management.",
      techs: ["IoT", "React", "Node.js", "MongoDB"],
      date: "2024"
    },
    {
      title: "Pet Shop Web Application",
      desc: "Built a full-stack e-commerce platform for pet products with secure user authentication, product catalog management, shopping cart, order processing, and an intuitive responsive interface for seamless online shopping.",
      techs: ["React", "Node.js", "MongoDB", "Bootstrap"],
      date: "2024"
    },
    {
      title: "Smart Career Recommendation System",
      desc: "An AI-powered career guidance platform that provides personalized recommendations for careers, courses, colleges, certifications, and competitive exams. The system leverages Large Language Models (LLMs) to analyze user interests, skills, and academic background, delivering intelligent suggestions with an interactive and user-friendly interface.",
      techs: ["React", "Node.js", "MongoDB", "LLM"],
      date: "2026"
    },
    {
      title: "Lost & Found REST API",
      desc: "Designed and developed a secure RESTful API for managing lost and found items with JWT-based authentication, CRUD operations, role-based access, and MySQL integration following REST architecture principles.",
      techs: ["Spring Boot", "REST API", "MySQL", "JWT"],
      date: "2023"
    },
    {
      title: "Event Booking Platform",
      desc: "A full-stack event management application that enables users to browse events, book tickets, and manage reservations securely. It includes user authentication, event creation, seat availability tracking, booking history, and an admin dashboard for managing events and registrations.",
      techs: ["React", "Spring Boot", "Java", "PostgreSQL"],
      date: "2026"
    },
    {
      title: "Personal To-Do List Management System",
      desc: "A full-stack task management application that enables users to securely organize daily activities with authentication, personalized dashboards, task categorization, priority management, search, filtering, and real-time tracking of pending, completed, and overdue tasks.",
      techs: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
      date: "2026"
    }
  ];

  return (
    <section id="projects">
       <div className="container">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card">
            <div className="project-year">{project.date}</div>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="tech-stack">
              {project.techs.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
