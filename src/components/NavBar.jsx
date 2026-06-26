// import React from "react";

// export default function NavBar({ navItems, activeSection, isNavScrolled }) {
//   return (
//     <nav className={isNavScrolled ? "scrolled" : ""}>
//       <h2>RM</h2>
//       <ul>
//         {navItems.map((item) => (
//           <li key={item}>
//             <a className={activeSection === item ? "active" : ""} href={`#${item}`}>
//               {item.charAt(0).toUpperCase() + item.slice(1)}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }


import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function NavBar({
  navItems,
  activeSection,
  isNavScrolled,
  darkMode,
  setDarkMode,
}) {
  return (
    <nav className={isNavScrolled ? "scrolled" : ""}>
      <h2>RM</h2>

      <ul>
        {navItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              className={activeSection === item ? "active" : ""}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="theme-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
}
