import C from "../styles/tokens.js";
import { Btn, SectionTitle } from "../components/UI.jsx";
import { CampusIllustration, StudentsIllustration } from "../components/Illustrations.jsx";

const MVV = [
  { icon: "🎯", title: "Our Mission", text: "We provide a challenging and supportive environment that fosters academic excellence, creativity, and personal growth for every student." },
  { icon: "👁",  title: "Our Vision",  text: "To be a leading international school recognized for developing innovative thinkers and global leaders who make a positive impact in the world." },
  { icon: "💎", title: "Our Values",  text: "Integrity | Respect | Responsibility\nExcellence | Compassion\nCollaboration" },
];

const STATS = [
  { n: "19+",   l: "Years of Excellence" },
  { n: "1200+", l: "Students" },
  { n: "95+",   l: "Dedicated Faculty" },
  { n: "20+",   l: "Campus Facilities" },
];

const TEAM = [
  { name: "Dr. Sarah Mitchell", role: "Principal",           initial: "SM" },
  { name: "Mr. James O'Brien",  role: "Vice Principal",      initial: "JO" },
  { name: "Ms. Priya Sharma",   role: "Head of Academics",   initial: "PS" },
  { name: "Mr. David Chen",     role: "Head of Admissions",  initial: "DC" },
];

const AboutPage = ({ setPage }) => (
  <div>
    {/* ── Hero ── */}
    <div style={{ background: C.navy, minHeight: 320, display: "grid", gridTemplateColumns: "1fr 1fr", overflow: "hidden" }}>
      <div style={{ padding: "60px 60px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: C.gold, marginBottom: 4 }}>
          <span style={{ color: "rgba(255,255,255,0.4)", cursor: "pointer" }} onClick={() => setPage("home")}>HOME</span>
          <span style={{ color: "rgba(255,255,255,0.4)" }}> › </span>
          <span>ABOUT US</span>
        </p>
        <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 52, fontWeight: 900, color: C.white, lineHeight: 1.05, marginBottom: 16 }}>About Us</h1>
        <div style={{ width: 48, height: 3, background: C.gold, borderRadius: 2, marginBottom: 20 }} />
        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, lineHeight: 1.7, maxWidth: 440 }}>
          At Greenfield International School, we are dedicated to nurturing young minds and empowering students to become confident, responsible, and compassionate global citizens.
        </p>
      </div>
      <div style={{ overflow: "hidden", opacity: 0.4 }}><CampusIllustration /></div>
    </div>

    {/* ── Mission Vision Values ── */}
    <div style={{ padding: "70px 60px", background: C.white }}>
      <SectionTitle title="Our Mission, Vision & Values" center />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, maxWidth: 1100, margin: "0 auto" }}>
        {MVV.map(({ icon, title, text }) => (
          <div key={title}
            style={{ border: `1px solid ${C.grayLight}`, borderRadius: 14, padding: "32px 28px", transition: "all .2s", cursor: "default" }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.1)"; e.currentTarget.style.borderColor = C.gold; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = C.grayLight; }}>
            <div style={{ width: 60, height: 60, background: C.navy, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, marginBottom: 18 }}>{icon}</div>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, color: C.navy, marginBottom: 10 }}>{title}</h3>
            <p style={{ fontSize: 14, color: C.grayText, lineHeight: 1.7, whiteSpace: "pre-line" }}>{text}</p>
          </div>
        ))}
      </div>
    </div>

    {/* ── Our Story ── */}
    <div style={{ background: C.offWhite, padding: "70px 60px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "380px 1fr 240px", gap: 40, maxWidth: 1100, margin: "0 auto", alignItems: "start" }}>
        <div style={{ borderRadius: 14, overflow: "hidden", aspectRatio: "4/3", background: C.navy }}>
          <StudentsIllustration />
        </div>
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: C.gold, marginBottom: 8 }}>Our Story</p>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 32, color: C.navy, marginBottom: 4, lineHeight: 1.2 }}>A Legacy of Excellence in Education</h2>
          <div style={{ width: 42, height: 3, background: C.gold, borderRadius: 2, marginBottom: 18 }} />
          <p style={{ fontSize: 14.5, lineHeight: 1.8, marginBottom: 16 }}>
            Established in 2005, Greenfield International School was founded with a vision to provide world-class education that blends academic rigor with character building and global awareness.
          </p>
          <p style={{ fontSize: 14.5, lineHeight: 1.8, marginBottom: 24 }}>
            Over the years, we have grown into a vibrant learning community, guided by passionate educators and supported by modern facilities that inspire learning, creativity, and innovation.
          </p>
          <Btn variant="primary">Our History →</Btn>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {STATS.map(({ n, l }) => (
            <div key={l} style={{ background: C.navy, borderRadius: 12, padding: "18px 20px", display: "flex", gap: 14, alignItems: "center" }}>
              <div style={{ width: 42, height: 42, background: "rgba(255,255,255,0.1)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🏫</div>
              <div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 24, fontWeight: 900, color: C.gold, lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", marginTop: 2 }}>{l}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* ── Leadership Team ── */}
    <div style={{ padding: "70px 60px", background: C.white }}>
      <SectionTitle title="Our Leadership Team" center />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20, maxWidth: 900, margin: "0 auto" }}>
        {TEAM.map(({ name, role, initial }) => (
          <div key={name}
            style={{ textAlign: "center", border: `1px solid ${C.grayLight}`, borderRadius: 14, padding: "28px 20px", transition: "all .2s" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
            <div style={{ width: 64, height: 64, background: C.navy, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 700, color: C.gold, margin: "0 auto 14px" }}>{initial}</div>
            <p style={{ fontFamily: "'Playfair Display',serif", fontSize: 15, color: C.navy, fontWeight: 700, marginBottom: 4 }}>{name}</p>
            <p style={{ fontSize: 12, color: C.grayMid }}>{role}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default AboutPage;
