import React from "react";

export default function ContactSection({ onContactSubmit }) {
  return (
    <section id="contact">
       <div className="container">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>
            Feel free to reach out for collaborations, internships, or full stack
            development opportunities.
          </p>

          <div className="info-item">
            <strong>Name:</strong>
            <span>Ritika Mahalingam</span>
          </div>

          <div className="info-item">
            <strong>Email:</strong>
            <span>ritika96013@gmail.com</span>
          </div>

          <div className="info-item">
            <strong>Phone:</strong>
            <span>+91 8610393839</span>
          </div>

          <div className="info-item">
            <strong>Location:</strong>
            <span>Tamil Nadu, India</span>
          </div>
        </div>

        {/* <div className="contact-form">
          <form onSubmit={onContactSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea rows="6" placeholder="Your Message" required />
            <button type="submit">Send Message</button>
          </form>
        </div> */}
      </div>
      </div>
    </section>
  );
}
