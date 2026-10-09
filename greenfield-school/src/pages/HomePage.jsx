import { useState, useEffect } from "react";
import C from "../styles/tokens.js";
import { Btn, NewsletterBar } from "../components/UI.jsx";
import { CampusIllustration, StudentsIllustration } from "../components/Illustrations.jsx";

const SLIDES = [
  {
    eyebrow: "Welcome to Greenfield",
    title: "Nurturing Minds.\nBuilding Futures.",
    desc: "We provide a safe, supportive, and challenging environment where students grow academically, socially, and emotionally.",
  },
  {
    eyebrow: "Academic Excellence",
    title: "Inspiring the\nNext Generation.",
    desc: "Our rigorous curriculum blends global best practices with innovative teaching methods to unlock every student's full potential.",
  },
  {
    eyebrow: "Global Community",
    title: "Diverse.\nInclusive.\nExcellent.",
    desc: "Join a vibrant international community of over 1,200 students from around the world, guided by 95+ passionate educators.",
  },
];

const FEATURES = [
  { icon: "🎓", title: "Academic Excellence", desc: "A rigorous curriculum designed to challenge and inspire every student." },
  { icon: "🌱", title: "Holistic Development", desc: "Focus on the overall development of each child in and out of the classroom." },
  { icon: "🌍", title: "Global Perspective", desc: "Preparing students to be responsible global citizens in a diverse world." },
  { icon: "💛", title: "Values & Character", desc: "Instilling strong values and leadership for a better tomorrow." },
];

const EVENTS = [
  { day: 24, month: "MAY", title: "Sports Day 2024", time: "8:00 AM – 2:00 PM" },
  { day: 5,  month: "JUN", title: "Parent-Teacher Meeting", time: "10:00 AM – 1:00 PM" },
  { day: 15, month: "JUN", title: "Annual Day Celebration", time: "5:00 PM – 8:00 PM" },
];

const STATS = [
  { n: "19+",   l: "Years of Excellence" },
  { n: "1200+", l: "Students" },
  { n: "95+",   l: "Faculty Members" },
  { n: "20+",   l: "Campus Facilities" },
];

const HomePage = ({ setPage }) => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);

  const s = SLIDES[slide];

  return (
    <div>
      {/* ── Hero Slider ── */}
      <div style={{ position: "relative", height: 520, background: C.navy, overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.15 }}>
          <CampusIllustration />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(8,18,48,0.95) 50%, rgba(8,18,48,0.4))" }} />

        <div key={slide} style={{ position: "relative", zIndex: 2, padding: "0 60px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: 640, animation: "fadeUp 0.6s ease both" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: C.gold, marginBottom: 16 }}>{s.eyebrow}</p>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 58, fontWeight: 900, color: C.white, lineHeight: 1.05, marginBottom: 20, whiteSpace: "pre-line" }}>{s.title}</h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, lineHeight: 1.7, maxWidth: 480, marginBottom: 32 }}>{s.desc}</p>
          <div style={{ display: "flex", gap: 12 }}>
            <Btn variant="gold" onClick={() => setPage("about-us")}>Discover More →</Btn>
            <Btn variant="outlineLight" onClick={() => setPage("admissions")}>Apply Now</Btn>
          </div>
        </div>

        {/* Dots */}
        <div style={{ position: "absolute", bottom: 28, left: 60, display: "flex", gap: 10, zIndex: 3 }}>
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)}
              style={{ width: i === slide ? 28 : 10, height: 10, borderRadius: 5, background: i === slide ? C.gold : "rgba(255,255,255,0.3)", border: "none", cursor: "pointer", transition: "all .3s" }} />
          ))}
        </div>

        {/* Arrows */}
        {[[-1, "‹", "20px", "left"], [1, "›", "20px", "right"]].map(([dir, ch, val, side]) => (
          <button key={ch} onClick={() => setSlide(s => (s + dir + SLIDES.length) % SLIDES.length)}
            style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: C.white, width: 44, height: 44, borderRadius: "50%", fontSize: 22, cursor: "pointer", zIndex: 3, [side]: val }}>
            {ch}
          </button>
        ))}
      </div>

      {/* ── Feature Cards ── */}
      <div style={{ background: C.offWhite, padding: "0 60px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0 }}>
          {FEATURES.map(({ icon, title, desc }, i) => (
            <div key={title}
              style={{ padding: "32px 28px", background: C.white, borderRight: i < 3 ? `1px solid ${C.grayLight}` : "none", borderBottom: "3px solid transparent", transition: "border-color .2s", cursor: "default" }}
              onMouseEnter={e => e.currentTarget.style.borderBottomColor = C.gold}
              onMouseLeave={e => e.currentTarget.style.borderBottomColor = "transparent"}>
              <div style={{ width: 52, height: 52, background: i % 2 === 0 ? C.navy : C.gold, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 14 }}>{icon}</div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 17, color: C.navy, marginBottom: 8 }}>{title}</h3>
              <p style={{ fontSize: 13.5, color: C.grayMid, lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── About + Campus + Events ── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0, background: C.white }}>
        {/* About text */}
        <div style={{ padding: "60px 50px" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: C.gold, marginBottom: 8 }}>About Our School</p>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 30, color: C.navy, marginBottom: 4, lineHeight: 1.2 }}>A Place to Learn and Grow</h2>
          <div style={{ width: 42, height: 3, background: C.gold, borderRadius: 2, marginBottom: 18 }} />
          <p style={{ fontSize: 14, color: C.grayText, lineHeight: 1.8, marginBottom: 24 }}>
            At Greenfield International School, we believe every child has unique potential. Our dedicated educators and world-class facilities create a nurturing environment that encourages curiosity, creativity, and success.
          </p>
          <Btn variant="primary" onClick={() => setPage("about-us")}>Read More</Btn>
        </div>

        {/* Campus image */}
        <div style={{ background: C.offWhite, overflow: "hidden" }}>
          <CampusIllustration style={{ height: 380 }} />
        </div>

        {/* Events */}
        <div style={{ background: C.navy, padding: "40px 36px" }}>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: C.gold, marginBottom: 6 }}>Upcoming Events</p>
          <div style={{ width: 36, height: 2, background: C.gold, marginBottom: 20 }} />
          {EVENTS.map(({ day, month, title, time }) => (
            <div key={title} style={{ display: "flex", gap: 14, marginBottom: 16, paddingBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ width: 52, height: 52, background: "rgba(255,255,255,0.08)", borderRadius: 8, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontSize: 20, fontWeight: 800, color: C.white, lineHeight: 1 }}>{day}</span>
                <span style={{ fontSize: 9, color: C.gold, letterSpacing: "1px", fontWeight: 600 }}>{month}</span>
              </div>
              <div>
                <p style={{ fontSize: 14, fontWeight: 600, color: C.white, marginBottom: 3 }}>{title}</p>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{time}</p>
              </div>
            </div>
          ))}
          <Btn variant="gold" onClick={() => setPage("news-&-events")} style={{ width: "100%", justifyContent: "center", marginTop: 8 }}>
            View All Events
          </Btn>
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <div style={{ background: C.navyDark, padding: "50px 60px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0, maxWidth: 900, margin: "0 auto" }}>
          {STATS.map(({ n, l }, i) => (
            <div key={l} style={{ textAlign: "center", padding: "20px 10px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 42, fontWeight: 900, color: C.gold }}>{n}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      <NewsletterBar />
    </div>
  );
};

export default HomePage;
