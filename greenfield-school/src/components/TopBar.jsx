import C from "../styles/tokens.js";

const TopBar = () => (
  <div style={{ background: C.navyDark, color: "rgba(255,255,255,0.75)", fontSize: "12.5px", padding: "7px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
    <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
      {[
        { icon: "📞", text: "+1 123-456-7890" },
        { icon: "✉", text: "info@greenfieldschool.edu" },
        { icon: "📍", text: "123 Greenfield Road, New York, USA" },
      ].map(({ icon, text }) => (
        <span key={text} style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ color: C.gold, fontSize: 11 }}>{icon}</span>{text}
        </span>
      ))}
    </div>

    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      {["Student Portal", "Parent Portal", "Staff Login"].map((l, i) => (
        <span key={l} style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {i > 0 && <span style={{ width: 1, height: 12, background: "rgba(255,255,255,0.2)", display: "inline-block" }} />}
          <a href="#" style={{ transition: "color .2s" }}
            onMouseEnter={e => e.target.style.color = C.goldLight}
            onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.75)"}>{l}</a>
        </span>
      ))}
      <div style={{ display: "flex", gap: 8, marginLeft: 8 }}>
        {["f", "in", "▶"].map(s => (
          <a key={s} href="#"
            style={{ width: 24, height: 24, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "rgba(255,255,255,0.7)", transition: "all .2s" }}
            onMouseEnter={e => { e.target.style.background = C.gold; e.target.style.borderColor = C.gold; e.target.style.color = C.navyDark; }}
            onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.borderColor = "rgba(255,255,255,0.25)"; e.target.style.color = "rgba(255,255,255,0.7)"; }}>
            {s}
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default TopBar;
