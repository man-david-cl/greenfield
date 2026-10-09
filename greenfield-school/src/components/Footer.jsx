import C from "../styles/tokens.js";

const Footer = ({ setPage }) => {
  const toPageKey = (label) =>
    label.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-");

  return (
    <footer style={{ background: C.navyDark, color: "rgba(255,255,255,0.65)", padding: "56px 60px 0" }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.5fr", gap: 40, paddingBottom: 40, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>

        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 42, height: 42, background: C.gold, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🎓</div>
            <div>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 14, fontWeight: 700, color: C.white }}>GREENFIELD<br />INTERNATIONAL SCHOOL</div>
              <div style={{ fontSize: 9.5, color: C.gold, fontWeight: 500, letterSpacing: "1.5px", textTransform: "uppercase" }}>Inspire. Learn. Achieve.</div>
            </div>
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.7, marginBottom: 20 }}>Empowering students to become confident, responsible, and compassionate global citizens.</p>
          <div style={{ display: "flex", gap: 10 }}>
            {["f", "in", "Li", "▶"].map(s => (
              <a key={s} href="#"
                style={{ width: 32, height: 32, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.6)", fontSize: 12, transition: "all .2s" }}
                onMouseEnter={e => { e.target.style.background = C.gold; e.target.style.borderColor = C.gold; e.target.style.color = C.navyDark; }}
                onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.borderColor = "rgba(255,255,255,0.2)"; e.target.style.color = "rgba(255,255,255,0.6)"; }}>
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        {[
          { title: "Quick Links", links: ["About Us", "Academics", "Admissions", "Student Life", "News & Events", "Contact Us"] },
          { title: "Resources", links: ["Student Portal", "Parent Portal", "School Calendar", "Policies", "Careers"] },
        ].map(col => (
          <div key={col.title}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: C.white, marginBottom: 18 }}>{col.title}</p>
            <ul style={{ listStyle: "none" }}>
              {col.links.map(l => (
                <li key={l} style={{ marginBottom: 10 }}>
                  <button onClick={() => setPage(toPageKey(l))}
                    style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.6)", fontSize: 13.5, transition: "color .2s", padding: 0 }}
                    onMouseEnter={e => e.target.style.color = C.goldLight}
                    onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.6)"}>
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: C.white, marginBottom: 18 }}>Contact Us</p>
          {[
            { icon: "📍", text: "123 Greenfield Road,\nNew York, USA 10001" },
            { icon: "📞", text: "+1 123-456-7890" },
            { icon: "✉", text: "info@greenfieldschool.edu" },
          ].map(({ icon, text }) => (
            <div key={icon} style={{ display: "flex", gap: 10, marginBottom: 14, alignItems: "flex-start" }}>
              <span style={{ color: C.gold, fontSize: 13, marginTop: 2, flexShrink: 0 }}>{icon}</span>
              <span style={{ fontSize: 13, lineHeight: 1.5, whiteSpace: "pre-line" }}>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 0", fontSize: 12.5 }}>
        <span>© 2024 Greenfield International School. All Rights Reserved.</span>
        <div style={{ display: "flex", gap: 20 }}>
          {["Privacy Policy", "Terms & Conditions"].map(l => (
            <a key={l} href="#"
              style={{ color: "rgba(255,255,255,0.5)", transition: "color .2s" }}
              onMouseEnter={e => e.target.style.color = C.goldLight}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.5)"}>
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
