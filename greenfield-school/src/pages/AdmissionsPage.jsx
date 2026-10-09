import C from "../styles/tokens.js";
import { Btn, SectionTitle } from "../components/UI.jsx";
import { StudentsIllustration } from "../components/Illustrations.jsx";

const REASONS = [
  { icon: "🎓", title: "Academic Excellence",    desc: "Rigorous curriculum that encourages critical thinking and real-world learning." },
  { icon: "🌱", title: "Holistic Development",   desc: "Focus on academics, arts, sports, leadership, and character building." },
  { icon: "🌍", title: "Global Perspective",     desc: "Diverse community that prepares students to be responsible global citizens." },
  { icon: "👩‍🏫", title: "Experienced Faculty",   desc: "Passionate educators dedicated to inspiring and nurturing every student." },
  { icon: "🏫", title: "World-Class Facilities", desc: "Modern classrooms, labs, libraries, and sports facilities." },
];

const STEPS = [
  { n: 1, title: "Inquiry",                  desc: "Submit an online inquiry form or contact our admissions office." },
  { n: 2, title: "Application",              desc: "Complete the application form and submit required documents." },
  { n: 3, title: "Assessment & Interaction", desc: "Students may be required to attend an assessment or interaction session." },
  { n: 4, title: "Admission Decision",       desc: "Our team will review your application and notify you of the decision." },
  { n: 5, title: "Enrollment",               desc: "Complete the enrollment process and welcome to Greenfield!" },
];

const PROGRAMS = [
  { title: "Early Years (Pre-K – KG)",        desc: "A nurturing environment where young learners explore, play, and grow.",      icon: "👶" },
  { title: "Primary School (Grades 1 – 5)",   desc: "Building strong foundations in academics, creativity, and character.",       icon: "📚" },
  { title: "Middle School (Grades 6 – 8)",    desc: "Encouraging curiosity, critical thinking, and leadership skills.",           icon: "🔬" },
  { title: "High School (Grades 9 – 12)",     desc: "Preparing students for university and future success.",                      icon: "🎓" },
];

const INFO_ITEMS = [
  { icon: "📅", title: "Application Period",   text: "Applications are accepted throughout the year." },
  { icon: "👥", title: "Age Criteria",         text: "We welcome students from Pre-Kindergarten to Grade 12." },
  { icon: "📄", title: "Required Documents",   text: "Birth certificate, previous school records, passport size photo, and other supporting documents." },
];

const AdmissionsPage = () => (
  <div>
    {/* ── Hero ── */}
    <div style={{ background: C.navy, minHeight: 340, display: "grid", gridTemplateColumns: "1fr 1fr", overflow: "hidden" }}>
      <div style={{ padding: "60px 60px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: C.gold, marginBottom: 12 }}>Admissions</p>
        <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 48, fontWeight: 900, color: C.white, lineHeight: 1.05, marginBottom: 20 }}>Begin Your Journey<br />of Excellence</h1>
        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, lineHeight: 1.7, maxWidth: 440, marginBottom: 28 }}>
          At Greenfield International School, we welcome students who are eager to learn, grow, and make a difference. Join our vibrant community and unlock your potential.
        </p>
        <div><Btn variant="gold">Apply Now →</Btn></div>
      </div>
      <div style={{ overflow: "hidden", opacity: 0.35 }}><StudentsIllustration /></div>
    </div>

    {/* ── Why Choose Greenfield ── */}
    <div style={{ padding: "70px 60px", background: C.white }}>
      <SectionTitle title="Why Choose Greenfield?" center />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 16, maxWidth: 1100, margin: "0 auto" }}>
        {REASONS.map(({ icon, title, desc }, i) => (
          <div key={title}
            style={{ textAlign: "center", padding: "28px 16px", border: `1px solid ${C.grayLight}`, borderRadius: 12, transition: "all .2s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = C.gold; e.currentTarget.style.transform = "translateY(-4px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = C.grayLight; e.currentTarget.style.transform = "none"; }}>
            <div style={{ width: 54, height: 54, background: i % 2 === 0 ? C.navy : C.gold, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, margin: "0 auto 14px" }}>{icon}</div>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 14, color: C.navy, marginBottom: 8, lineHeight: 1.3 }}>{title}</h3>
            <p style={{ fontSize: 12, color: C.grayMid, lineHeight: 1.6 }}>{desc}</p>
          </div>
        ))}
      </div>
    </div>

    {/* ── Admissions Process + Important Info ── */}
    <div style={{ background: C.offWhite, padding: "70px 60px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 40, maxWidth: 1100, margin: "0 auto" }}>
        {/* Steps */}
        <div>
          <SectionTitle title="Admissions Process" />
          <p style={{ fontSize: 14, color: C.grayMid, marginBottom: 32 }}>Our admissions process is designed to be simple, transparent, and welcoming.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 8 }}>
            {STEPS.map(({ n, title, desc }, i) => (
              <div key={n} style={{ position: "relative", textAlign: "center" }}>
                {i < 4 && <div style={{ position: "absolute", top: 20, left: "60%", width: "80%", height: 2, background: C.grayLight, zIndex: 0 }} />}
                <div style={{ width: 48, height: 48, background: C.navy, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px", position: "relative", zIndex: 1 }}>
                  <span style={{ fontSize: 16, fontWeight: 800, color: C.gold }}>{n}</span>
                </div>
                <p style={{ fontSize: 12, fontWeight: 700, color: C.navy, marginBottom: 4 }}>{title}</p>
                <p style={{ fontSize: 11, color: C.grayMid, lineHeight: 1.5 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Info panel */}
        <div style={{ background: C.navy, borderRadius: 14, padding: "32px 28px" }}>
          <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, color: C.white, marginBottom: 6 }}>Important Information</h3>
          <div style={{ width: 36, height: 2, background: C.gold, marginBottom: 22 }} />
          {INFO_ITEMS.map(({ icon, title, text }) => (
            <div key={title} style={{ display: "flex", gap: 14, marginBottom: 20, paddingBottom: 20, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ width: 38, height: 38, background: "rgba(255,255,255,0.08)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{icon}</div>
              <div>
                <p style={{ fontSize: 13, fontWeight: 700, color: C.white, marginBottom: 4 }}>{title}</p>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>{text}</p>
              </div>
            </div>
          ))}
          <Btn variant="gold" style={{ width: "100%", justifyContent: "center" }}>Apply Now →</Btn>
        </div>
      </div>
    </div>

    {/* ── Explore Programs ── */}
    <div style={{ padding: "70px 60px", background: C.white }}>
      <SectionTitle title="Explore Our Programs" center />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20, maxWidth: 1100, margin: "0 auto" }}>
        {PROGRAMS.map(({ title, desc, icon }, i) => (
          <div key={title}
            style={{ border: `1px solid ${C.grayLight}`, borderRadius: 12, overflow: "hidden", transition: "all .2s" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
            <div style={{ height: 120, background: i % 2 === 0 ? C.navy : C.navyMid, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 40 }}>{icon}</div>
            <div style={{ padding: "20px 18px" }}>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 15, color: C.navy, marginBottom: 8 }}>{title}</h3>
              <p style={{ fontSize: 13, color: C.grayMid, lineHeight: 1.6, marginBottom: 12 }}>{desc}</p>
              <a href="#" style={{ fontSize: 13, color: C.gold, fontWeight: 600 }}>Learn More →</a>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* ── CTA Bar ── */}
    <div style={{ background: C.offWhite, padding: "40px 60px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <div style={{ width: 52, height: 52, background: C.navy, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>❓</div>
        <div>
          <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, color: C.navy }}>Have Questions?</h3>
          <p style={{ fontSize: 13.5, color: C.grayMid }}>Our admissions team is here to help you every step of the way.</p>
        </div>
      </div>
      <Btn variant="outline">Contact Us</Btn>
    </div>
  </div>
);

export default AdmissionsPage;
