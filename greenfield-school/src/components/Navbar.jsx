import { useState, useEffect } from "react";
import C from "../styles/tokens.js";

const NAV_LINKS = [
  "Home",
  "About Us",
  "Academics",
  "Admissions",
  "Student Life",
  "News & Events",
  "Contact Us",
];

const toPageKey = (label) =>
  label.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-");

const Navbar = ({ activePage, setPage }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav style={{
      background: C.white,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 40px",
      boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.1)" : "0 2px 12px rgba(0,0,0,0.07)",
      position: "sticky",
      top: 0,
      zIndex: 100,
      height: 72,
      transition: "box-shadow .3s",
    }}>
      {/* Logo */}
      <button onClick={() => setPage("home")}
        style={{ display: "flex", alignItems: "center", gap: 14, background: "none", border: "none", cursor: "pointer" }}>
        <div style={{ width: 52, height: 52, background: C.navy, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <span style={{ fontSize: 22 }}>🎓</span>
        </div>
        <div style={{ textAlign: "left" }}>
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 16, fontWeight: 700, color: C.navy, lineHeight: 1.1 }}>
            GREENFIELD<br />INTERNATIONAL SCHOOL
          </div>
          <div style={{ fontSize: 10, color: C.gold, fontWeight: 500, letterSpacing: "1.5px", textTransform: "uppercase" }}>
            Inspire. Learn. Achieve.
          </div>
        </div>
      </button>

      {/* Nav links */}
      <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
        {NAV_LINKS.map(label => {
          const page = toPageKey(label);
          const isActive = activePage === page || (activePage === "home" && label === "Home");
          return (
            <button key={label} onClick={() => setPage(page)}
              style={{
                fontSize: 13, fontWeight: 500, color: isActive ? C.gold : C.navy,
                padding: "8px 13px", borderRadius: isActive ? 0 : 4,
                border: "none", borderBottom: isActive ? `2px solid ${C.gold}` : "2px solid transparent",
                background: "none", letterSpacing: "0.3px", transition: "all .2s",
                cursor: "pointer", whiteSpace: "nowrap",
              }}
              onMouseEnter={e => { if (!isActive) e.target.style.color = C.gold; }}
              onMouseLeave={e => { if (!isActive) e.target.style.color = C.navy; }}>
              {label}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
