import React, { useEffect, useMemo, useState } from "react";
import AboutSection from "./components/AboutSection";
import AchievementsSection from "./components/AchievementsSection";
import CertificationsSection from "./components/CertificationsSection";
import ContactSection from "./components/ContactSection";
import EducationSection from "./components/EducationSection";
import HeroSection from "./components/HeroSection";
import InternshipsSection from "./components/InternshipsSection";
import NavBar from "./components/NavBar";
import ProjectsSection from "./components/ProjectsSection";
import SiteFooter from "./components/SiteFooter";
import SkillsSection from "./components/SkillsSection";


const navItems = [
  "home",
  "about",
  "skills",
  "projects",
  "achievements",
  "education",
  "contact",
];

const fullName = "Ritika Mahalingam";

export default function App() {
  const [typedName, setTypedName] = useState("");
  const [activeSection, setActiveSection] = useState("home");
  const [isNavScrolled, setIsNavScrolled] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
      return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
      if (darkMode) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }

      localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTypedName(fullName.slice(0, index + 1));
      index += 1;

      if (index >= fullName.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const sectionElements = useMemo(
    () => navItems.map((item) => document.getElementById(item)).filter(Boolean),
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsNavScrolled(window.scrollY > 50);

      let current = "home";
      sectionElements.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionElements]);

  const onContactSubmit = (event) => {
    event.preventDefault();
    window.alert("Message sent successfully! I will get back to you soon.");
    event.currentTarget.reset();
  };

  return (
    <>
      <NavBar
      navItems={navItems}
      activeSection={activeSection}
      isNavScrolled={isNavScrolled}
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    />
      <HeroSection typedName={typedName} />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <AchievementsSection />
      <EducationSection />
      <ContactSection onContactSubmit={onContactSubmit} />
      <SiteFooter />
    </>
  );
}
