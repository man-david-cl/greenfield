import C from "../styles/tokens.js";
import { SectionTitle } from "../components/UI.jsx";
import { StudentsIllustration } from "../components/Illustrations.jsx";

const ACTIVITIES = [
  { icon: "🎭", title: "Drama & Theater",   desc: "Express yourself through the performing arts in our school productions." },
  { icon: "🎵", title: "Music Program",     desc: "From orchestra to rock band, find your musical voice." },
  { icon: "⚽", title: "Sports Teams",      desc: "Compete at regional and national levels across 15+ sports." },
  { icon: "🤖", title: "Robotics Club",     desc: "Build and program robots in our Innovation Lab." },
  { icon: "📰", title: "School Newspaper",  desc: "Write, edit, and publish the Greenfield Gazette." },
  { icon: "🌿", title: "Eco Club",          desc: "Lead sustainability initiatives on campus and beyond." },
];

const StudentLifePage = () => (
  <div>
    {/* ── Hero ── */}
    <div style={{ background: C.navy, padding: "70px 60px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.1 }}><StudentsIllustration /></div>
      <div style={{ position: "relative", zIndex: 1, maxWidth: 600 }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: C.gold, marginBottom: 10 }}>Student Life</p>
        <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 50, fontWeight: 900, color: C.white, marginBottom: 6, lineHeight: 1.1 }}>
          Life Beyond<br />the Classroom
        </h1>
        <div style={{ width: 48, height: 3, background: C.gold, borderRadius: 2, marginBottom: 18 }} />
        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, lineHeight: 1.7 }}>
          Greenfield offers a rich array of extracurricular activities, clubs, and events designed to develop the whole child.
        </p>
      </div>
    </div>

    {/* ── Activities Grid ── */}
    <div style={{ padding: "70px 60px", background: C.offWhite }}>
      <SectionTitle title="Clubs & Activities" center />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, maxWidth: 1100, margin: "0 auto" }}>
        {ACTIVITIES.map(({ icon, title, desc }, i) => (
          <div key={title}
            style={{ background: C.white, border: `1px solid ${C.grayLight}`, borderRadius: 14, padding: "32px 28px", display: "flex", gap: 16, transition: "all .2s" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = C.gold; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.borderColor = C.grayLight; e.currentTarget.style.boxShadow = "none"; }}>
            <div style={{ width: 52, height: 52, background: i % 2 === 0 ? C.navy : C.gold, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>{icon}</div>
            <div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 17, color: C.navy, marginBottom: 8 }}>{title}</h3>
              <p style={{ fontSize: 13.5, color: C.grayText, lineHeight: 1.6 }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default StudentLifePage;
