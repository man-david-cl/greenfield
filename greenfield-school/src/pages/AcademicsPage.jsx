import C from "../styles/tokens.js";
import { SectionTitle } from "../components/UI.jsx";
import { CampusIllustration } from "../components/Illustrations.jsx";

const PROGRAMS = [
  { icon: "🔬", title: "Science & Technology",  desc: "Cutting-edge labs and STEM programs preparing students for the future." },
  { icon: "📖", title: "Language Arts",          desc: "Develop critical reading, writing, and communication skills." },
  { icon: "🎨", title: "Arts & Culture",         desc: "Nurture creativity through visual arts, music, drama, and dance." },
  { icon: "⚽", title: "Sports & Health",        desc: "World-class sports facilities and a commitment to physical wellbeing." },
  { icon: "🌐", title: "Global Studies",         desc: "International perspectives integrated across all subject areas." },
  { icon: "💻", title: "Digital Learning",       desc: "Technology-integrated education for the digital age." },
];

const AcademicsPage = () => (
  <div>
    {/* ── Hero ── */}
    <div style={{ background: C.navy, padding: "70px 60px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.1 }}><CampusIllustration /></div>
      <div style={{ position: "relative", zIndex: 1, maxWidth: 600 }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: C.gold, marginBottom: 10 }}>Academics</p>
        <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 50, fontWeight: 900, color: C.white, marginBottom: 6, lineHeight: 1.1 }}>
          Excellence in<br />Education
        </h1>
        <div style={{ width: 48, height: 3, background: C.gold, borderRadius: 2, marginBottom: 18 }} />
        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, lineHeight: 1.7 }}>
          Our comprehensive curriculum is designed to challenge, inspire, and prepare students for a rapidly changing world.
        </p>
      </div>
    </div>

    {/* ── Programs Grid ── */}
    <div style={{ padding: "70px 60px", background: C.offWhite }}>
      <SectionTitle title="Academic Programs" center />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, maxWidth: 1100, margin: "0 auto" }}>
        {PROGRAMS.map(({ icon, title, desc }, i) => (
          <div key={title}
            style={{ background: C.white, border: `1px solid ${C.grayLight}`, borderRadius: 14, padding: "32px 28px", transition: "all .2s", cursor: "default" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = C.gold; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.borderColor = C.grayLight; e.currentTarget.style.boxShadow = "none"; }}>
            <div style={{ width: 58, height: 58, background: i % 2 === 0 ? C.navy : C.gold, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, marginBottom: 16 }}>{icon}</div>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 19, color: C.navy, marginBottom: 10 }}>{title}</h3>
            <p style={{ fontSize: 14, color: C.grayText, lineHeight: 1.7 }}>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default AcademicsPage;
