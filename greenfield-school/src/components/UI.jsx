import { useState } from "react";
import C from "../styles/tokens.js";

// ─── BUTTON ──────────────────────────────────────────────────────────────────
export const Btn = ({ children, variant = "primary", onClick, style = {} }) => {
  const [hov, setHov] = useState(false);
  const base = {
    fontFamily: "'DM Sans',sans-serif",
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    padding: "13px 28px",
    borderRadius: 7,
    border: "none",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    transition: "all .2s",
    ...style,
  };

  if (variant === "primary")
    return (
      <button onClick={onClick}
        style={{ ...base, background: hov ? C.gold : C.navy, color: C.white, transform: hov ? "translateY(-2px)" : "none", boxShadow: hov ? "0 6px 20px rgba(0,0,0,0.18)" : "none" }}
        onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>{children}</button>
    );

  if (variant === "gold")
    return (
      <button onClick={onClick}
        style={{ ...base, background: hov ? C.navy : C.gold, color: hov ? C.white : C.navyDark, transform: hov ? "translateY(-2px)" : "none" }}
        onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>{children}</button>
    );

  if (variant === "outline")
    return (
      <button onClick={onClick}
        style={{ ...base, background: "transparent", color: hov ? C.gold : C.navy, border: `1.5px solid ${hov ? C.gold : C.navy}` }}
        onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>{children}</button>
    );

  if (variant === "outlineLight")
    return (
      <button onClick={onClick}
        style={{ ...base, background: hov ? C.white : "transparent", color: hov ? C.navy : C.white, border: `1.5px solid rgba(255,255,255,${hov ? 1 : 0.5})` }}
        onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>{children}</button>
    );
};

// ─── SECTION TITLE ────────────────────────────────────────────────────────────
export const SectionTitle = ({ eyebrow, title, center = false, light = false }) => (
  <div style={{ textAlign: center ? "center" : "left", marginBottom: 40 }}>
    {eyebrow && (
      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: C.gold, marginBottom: 8 }}>
        {eyebrow}
      </p>
    )}
    <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 34, fontWeight: 800, color: light ? C.white : C.navy, lineHeight: 1.15 }}>
      {title}
    </h2>
    <div style={{ width: 48, height: 3, background: C.gold, borderRadius: 2, marginTop: 12, marginLeft: center ? "auto" : 0, marginRight: center ? "auto" : 0 }} />
  </div>
);

// ─── NEWSLETTER BAR ───────────────────────────────────────────────────────────
export const NewsletterBar = () => {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <div style={{ background: C.offWhite, padding: "40px 60px", display: "flex", alignItems: "center", gap: 40, flexWrap: "wrap" }}>
      <div style={{ width: 52, height: 52, background: C.navy, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>✉</div>
      <div style={{ flex: 1, minWidth: 200 }}>
        <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, color: C.navy, marginBottom: 4 }}>Never Miss an Update!</h3>
        <p style={{ fontSize: 13.5, color: C.grayMid }}>Subscribe to our newsletter and get the latest news and event updates delivered to your inbox.</p>
      </div>
      {done ? (
        <div style={{ color: "#2e7d32", fontWeight: 600, fontSize: 14 }}>✅ Subscribed! Thank you.</div>
      ) : (
        <div style={{ display: "flex", gap: 0, minWidth: 360 }}>
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email address"
            style={{ flex: 1, padding: "13px 18px", border: `1.5px solid ${C.grayLight}`, borderRadius: "7px 0 0 7px", fontSize: 14, outline: "none" }} />
          <button onClick={() => { if (email) setDone(true); }}
            style={{ background: C.navy, color: C.white, border: "none", padding: "13px 24px", borderRadius: "0 7px 7px 0", fontSize: 13, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", cursor: "pointer", transition: "background .2s" }}
            onMouseEnter={e => e.target.style.background = C.gold}
            onMouseLeave={e => e.target.style.background = C.navy}>Subscribe</button>
        </div>
      )}
    </div>
  );
};
