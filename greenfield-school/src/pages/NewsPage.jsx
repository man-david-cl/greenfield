import { useState } from "react";
import C from "../styles/tokens.js";
import { Btn, SectionTitle, NewsletterBar } from "../components/UI.jsx";
import { CampusIllustration, StudentsIllustration } from "../components/Illustrations.jsx";

const NEWS_ITEMS = [
  { date: "May 15, 2024", title: "Greenfield Students Excel in International Science Olympiad", desc: "Our students brought home 5 medals in the International Science Olympiad held in Singapore." },
  { date: "May 10, 2024", title: "New Innovation Lab Now Open!",                                desc: "Our state-of-the-art Innovation Lab is now open, empowering students to explore, create and innovate." },
  { date: "May 06, 2024", title: "Spring Music Concert A Grand Success",                       desc: "Thank you to everyone who joined us for a memorable evening of music and talent." },
  { date: "Apr 28, 2024", title: "Greenfield Wins Regional Football Championship!",            desc: "Our football team demonstrated exceptional skill and teamwork throughout the season." },
  { date: "Apr 22, 2024", title: "Earth Day Celebrations at Greenfield",                       desc: "Students participated in tree planting and sustainability workshops to promote a greener future." },
  { date: "Apr 22, 2024", title: "Student Art Exhibition Showcases Creativity",               desc: "Our talented young artists showcased their amazing work at the Annual Art Exhibition." },
];

const EVENTS = [
  { day: 24, month: "MAY", title: "Sports Day 2024",            time: "8:00 AM – 2:00 PM",   loc: "Greenfield Sports Complex" },
  { day: 5,  month: "JUN", title: "Parent-Teacher Meeting",     time: "10:00 AM – 1:00 PM",  loc: "Main Building, Room 201" },
  { day: 15, month: "JUN", title: "Annual Day Celebration",     time: "5:00 PM – 8:00 PM",   loc: "Greenfield Auditorium" },
  { day: 28, month: "JUN", title: "Student Leadership Workshop",time: "9:00 AM – 12:00 PM",  loc: "Seminar Hall" },
  { day: 10, month: "JUL", title: "Summer Camp Begins",         time: "9:00 AM – 3:00 PM",   loc: "Various Locations" },
];

const NewsCard = ({ date, title, desc }) => {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ border: `1px solid ${hov ? C.gold : C.grayLight}`, borderRadius: 12, overflow: "hidden", background: C.white, transition: "all .2s", transform: hov ? "translateY(-4px)" : "none", boxShadow: hov ? "0 8px 24px rgba(0,0,0,0.1)" : "none" }}>
      <div style={{ height: 150, background: C.navy, position: "relative", overflow: "hidden" }}>
        <StudentsIllustration />
        <div style={{ position: "absolute", bottom: 10, left: 12, background: "rgba(201,162,39,0.95)", color: C.navyDark, fontSize: 10, fontWeight: 700, padding: "4px 10px", borderRadius: 4 }}>{date}</div>
      </div>
      <div style={{ padding: "18px 18px 20px" }}>
        <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 15.5, color: C.navy, marginBottom: 8, lineHeight: 1.3 }}>{title}</h3>
        <p style={{ fontSize: 13, color: C.grayMid, lineHeight: 1.6, marginBottom: 12 }}>{desc}</p>
        <a href="#" style={{ fontSize: 12.5, color: C.gold, fontWeight: 700, letterSpacing: "0.5px" }}>Read More →</a>
      </div>
    </div>
  );
};

const NewsPage = () => (
  <div>
    {/* ── Hero ── */}
    <div style={{ background: C.navy, padding: "60px 60px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.12 }}><CampusIllustration /></div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 52, fontWeight: 900, color: C.white, marginBottom: 6 }}>News & Events</h1>
        <div style={{ width: 48, height: 3, background: C.gold, borderRadius: 2, marginBottom: 18 }} />
        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, maxWidth: 500, lineHeight: 1.7 }}>
          Stay updated with the latest news, achievements, and upcoming events at Greenfield International School.
        </p>
      </div>
    </div>

    {/* ── Content ── */}
    <div style={{ padding: "60px 60px", background: C.offWhite }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 40, maxWidth: 1200, margin: "0 auto" }}>

        {/* News Grid */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
            <SectionTitle title="Latest News" />
            <a href="#" style={{ fontSize: 13, color: C.navy, fontWeight: 600, borderBottom: `1.5px solid ${C.navy}` }}>View All News →</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {NEWS_ITEMS.map(n => <NewsCard key={n.title} {...n} />)}
          </div>
        </div>

        {/* Events Sidebar */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
            <SectionTitle title="Upcoming Events" />
            <a href="#" style={{ fontSize: 13, color: C.navy, fontWeight: 600, borderBottom: `1.5px solid ${C.navy}` }}>View All →</a>
          </div>
          <div style={{ background: C.white, border: `1px solid ${C.grayLight}`, borderRadius: 14, overflow: "hidden" }}>
            {EVENTS.map(({ day, month, title, time, loc }, i) => (
              <div key={title}
                style={{ display: "flex", gap: 14, padding: "16px 18px", borderBottom: i < EVENTS.length - 1 ? `1px solid ${C.grayLight}` : "none", transition: "background .2s", cursor: "pointer" }}
                onMouseEnter={e => e.currentTarget.style.background = C.offWhite}
                onMouseLeave={e => e.currentTarget.style.background = C.white}>
                <div style={{ width: 50, height: 50, background: C.navy, borderRadius: 8, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontSize: 18, fontWeight: 900, color: C.white, lineHeight: 1 }}>{day}</span>
                  <span style={{ fontSize: 8, color: C.gold, letterSpacing: "1px", fontWeight: 700 }}>{month}</span>
                </div>
                <div>
                  <p style={{ fontSize: 13.5, fontWeight: 700, color: C.navy, marginBottom: 2 }}>{title}</p>
                  <p style={{ fontSize: 12, color: C.grayMid }}>{time}</p>
                  <p style={{ fontSize: 11.5, color: C.grayMid }}>{loc}</p>
                </div>
              </div>
            ))}
            <div style={{ padding: "14px 18px" }}>
              <Btn variant="primary" style={{ width: "100%", justifyContent: "center" }}>📅 View Full Calendar</Btn>
            </div>
          </div>
        </div>
      </div>
    </div>

    <NewsletterBar />
  </div>
);

export default NewsPage;
