import React from "react";

export default function AchievementsSection() {
  const achievements = [
    {
      title: "NPTEL Elite Certificate",
      desc: "Foundations of R Programming - Score: 58%"
    },
    {
      title: "NPTEL Elite Certificate",
      desc: "Introduction to Industry 4.0 and IoT - Score: 62%"
    },
    {
      title: "NPTEL Elite Certificate",
      desc: "Human Computer Interaction - Score: 93%"
    },
    {
      title: "Academic Excellence",
      desc: "CGPA: 8.25/10 - B.Tech IT"
    },
    {
      title: "Problem Solver",
      desc: "350+ DSA problems solved on LeetCode"
    }
  ];

  return (
    <section id="achievements">
       <div className="container">
      <h2 className="section-title">Achievements</h2>
      <div className="achievements-grid">
        {achievements.map((achievement, idx) => (
          <div key={idx} className="achievement-card">
            <div className="achievement-icon">★</div>
            <h3>{achievement.title}</h3>
            <p>{achievement.desc}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
