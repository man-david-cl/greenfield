import { useState } from "react";
import C from "../styles/tokens.js";
import { Btn } from "../components/UI.jsx";
import { CampusIllustration } from "../components/Illustrations.jsx";

const INFO_ITEMS = [
  { icon: "📍", label: "Address",      val: "123 Greenfield Road\nNew York, USA 10001" },
  { icon: "📞", label: "Phone",        val: "+1 123-456-7890\n+1 123-456-7891 (Admissions)" },
  { icon: "✉",  label: "Email",        val: "info@greenfieldschool.edu\nadmissions@greenfieldschool.edu" },
  { icon: "🕐", label: "Office Hours", val: "Monday – Friday: 8:00 AM – 4:00 PM\nSaturday – Sunday: Closed" },
  { icon: "🌐", label: "Website",      val: "www.greenfieldschool.edu" },
];

// ── Field helper ─────────────────────────────────────────────────────────────
const Field = ({ id, label, value, onChange, error, type = "text", placeholder, multiline = false }) => {
  const inputStyle = {
    fontFamily: "'DM Sans',sans-serif",
    fontSize: 14,
    color: C.grayText,
    border: `1.5px solid ${error ? "#e24b4a" : C.grayLight}`,
    borderRadius: 8,
    padding: multiline ? "12px 14px" : "11px 14px",
    background: C.white,
    transition: "border-color .2s, box-shadow .2s",
    outline: "none",
    width: "100%",
    resize: multiline ? "vertical" : "none",
    minHeight: multiline ? 110 : undefined,
  };
  const handleFocus = e => { e.target.style.borderColor = C.gold; e.target.style.boxShadow = "0 0 0 3px rgba(201,162,39,0.1)"; };
  const handleBlur  = e => { e.target.style.borderColor = error ? "#e24b4a" : C.grayLight; e.target.style.boxShadow = "none"; };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 5, flex: 1 }}>
      <label style={{ fontSize: 11.5, fontWeight: 700, color: C.navy, letterSpacing: "0.5px", textTransform: "uppercase" }}>
        {label}{id !== "phone" && " *"}
      </label>
      {multiline
        ? <textarea id={id} value={value} onChange={onChange} placeholder={placeholder} style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
        : <input id={id} type={type} value={value} onChange={onChange} placeholder={placeholder} style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
      }
      {error && <span style={{ fontSize: 11, color: "#e24b4a" }}>{error}</span>}
    </div>
  );
};

// ── Map Section ───────────────────────────────────────────────────────────────
const MapSection = () => (
  <div style={{ height: 360, background: "#d4e3c8", position: "relative", overflow: "hidden" }}>
    {/* Map illustration */}
    <svg viewBox="0 0 1200 360" style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }} preserveAspectRatio="xMidYMid slice">
      <rect width="1200" height="360" fill="#d4e3c8" />
      {/* Roads */}
      {[["0","160","1200","20"],["0","245","1200","14"],["0","315","1200","10"]].map(([x,y,w,h]) => (
        <rect key={y} x={x} y={y} width={w} height={h} fill="#e8ded0" />
      ))}
      {[["200","0","18","360"],["425","0","14","360"],["640","0","22","360"],["870","0","14","360"]].map(([x,y,w,h]) => (
        <rect key={x} x={x} y={y} width={w} height={h} fill="#e8ded0" />
      ))}
      {/* City blocks */}
      {[[20,20,160,130],[225,20,180,130],[445,20,170,130],[670,20,180,130],[890,20,150,130],[20,190,160,115],[225,190,180,115],[445,190,160,115],[670,190,180,115],[890,190,150,115]].map(([x,y,w,h]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width={w} height={h} rx="3" fill="#c8d8b8" />
      ))}
      <ellipse cx="760" cy="295" rx="75" ry="42" fill="#9dc485" opacity="0.6" />
      <text x="680" y="155" fontSize="10" fill="#666" fontFamily="sans-serif">Greenfield Road</text>
    </svg>

    {/* Map pin */}
    <div style={{ position: "absolute", top: "42%", left: "57%", transform: "translate(-50%,-100%)", zIndex: 5 }}>
      <div style={{ background: C.navy, color: C.white, fontSize: 11, fontWeight: 700, padding: "6px 12px", borderRadius: 6, whiteSpace: "nowrap", textAlign: "center" }}>
        Greenfield International School
      </div>
      <div style={{ width: 0, height: 0, borderLeft: "8px solid transparent", borderRight: "8px solid transparent", borderTop: `9px solid ${C.navy}`, margin: "0 auto" }} />
      <div style={{ width: 14, height: 14, background: C.gold, border: `3px solid ${C.white}`, borderRadius: "50%", margin: "0 auto", boxShadow: "0 2px 8px rgba(0,0,0,0.3)" }} />
    </div>

    {/* Overlay card */}
    <div style={{ position: "absolute", top: "50%", left: 60, transform: "translateY(-50%)", background: C.white, borderRadius: 14, padding: "28px 30px", boxShadow: "0 8px 32px rgba(0,0,0,0.15)", width: 270, zIndex: 10 }}>
      <div style={{ width: 46, height: 46, background: C.navy, borderRadius: 11, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, marginBottom: 12 }}>🏫</div>
      <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, color: C.navy, marginBottom: 8 }}>Visit Our Campus</h3>
      <p style={{ fontSize: 13, color: C.grayMid, lineHeight: 1.6, marginBottom: 16 }}>
        We welcome prospective students and families to visit our campus and meet our staff.
      </p>
      <a href="#"
        style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: C.navy, borderBottom: `2px solid ${C.navy}`, paddingBottom: 2, transition: "color .2s, border-color .2s" }}
        onMouseEnter={e => { e.target.style.color = C.gold; e.target.style.borderColor = C.gold; }}
        onMouseLeave={e => { e.target.style.color = C.navy; e.target.style.borderColor = C.navy; }}>
        Schedule a Visit →
      </a>
    </div>
  </div>
);

// ── Main Component ────────────────────────────────────────────────────────────
const ContactPage = () => {
  const [form, setForm]     = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent]     = useState(false);
  const [errors, setErrors] = useState({});

  const update = key => e => setForm(f => ({ ...f, [key]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.subject.trim()) e.subject = "Required";
    if (!form.message.trim()) e.message = "Required";
    return e;
  };

  const submit = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSent(true);
    setErrors({});
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div>
      {/* ── Hero ── */}
      <div style={{ background: C.navy, minHeight: 300, display: "grid", gridTemplateColumns: "1fr 1fr", overflow: "hidden" }}>
        <div style={{ padding: "60px 60px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: C.gold, marginBottom: 14 }}>Contact Us</p>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 50, fontWeight: 900, color: C.white, lineHeight: 1.05, marginBottom: 18 }}>
            We'd Love to<br /><span style={{ color: C.gold }}>Hear From You!</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 15, lineHeight: 1.7, maxWidth: 380 }}>
            Have a question or need more information? Our team is here to help. Reach out to us using any of the options below.
          </p>
        </div>
        <div style={{ overflow: "hidden", opacity: 0.3 }}><CampusIllustration /></div>
      </div>

      {/* ── Form + Info ── */}
      <div style={{ padding: "70px 60px", background: C.offWhite }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 40, maxWidth: 1100, margin: "0 auto" }}>

          {/* Contact Form */}
          <div style={{ background: C.white, border: `1px solid ${C.grayLight}`, borderRadius: 16, padding: "42px 42px 48px", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 26, color: C.navy, marginBottom: 6 }}>Send Us a Message</h2>
            <div style={{ width: 40, height: 3, background: C.gold, borderRadius: 2, marginBottom: 14 }} />
            <p style={{ fontSize: 13.5, color: C.grayMid, marginBottom: 28 }}>Fill out the form below and we'll get back to you as soon as possible.</p>

            {sent ? (
              <div style={{ background: "#e8f5e9", border: "1px solid #a5d6a7", borderRadius: 10, padding: "20px 22px", display: "flex", alignItems: "center", gap: 14 }}>
                <span style={{ fontSize: 24 }}>✅</span>
                <div>
                  <p style={{ fontWeight: 700, color: "#2e7d32", marginBottom: 4 }}>Message Sent Successfully!</p>
                  <p style={{ fontSize: 13, color: "#388e3c" }}>Thank you for reaching out. We'll get back to you within 1–2 business days.</p>
                </div>
              </div>
            ) : (
              <>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  <Field id="name"    label="Full Name"      value={form.name}    onChange={update("name")}    error={errors.name}    placeholder="Your full name" />
                  <Field id="email"   label="Email Address"  value={form.email}   onChange={update("email")}   error={errors.email}   placeholder="your@email.com" type="email" />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  <Field id="phone"   label="Phone Number"   value={form.phone}   onChange={update("phone")}   placeholder="+1 (___) ___-____" type="tel" />
                  <Field id="subject" label="Subject"        value={form.subject} onChange={update("subject")} error={errors.subject} placeholder="How can we help?" />
                </div>
                <div style={{ marginBottom: 24 }}>
                  <Field id="message" label="Your Message"   value={form.message} onChange={update("message")} error={errors.message} placeholder="Write your message here..." multiline />
                </div>
                <Btn variant="primary" onClick={submit}>Send Message ✈</Btn>
              </>
            )}
          </div>

          {/* Contact Info */}
          <div style={{ background: C.white, border: `1px solid ${C.grayLight}`, borderRadius: 16, padding: "38px 32px", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 24, color: C.navy, marginBottom: 6 }}>Contact Information</h2>
            <div style={{ width: 40, height: 3, background: C.gold, borderRadius: 2, marginBottom: 24 }} />
            {INFO_ITEMS.map(({ icon, label, val }) => (
              <div key={label} style={{ display: "flex", gap: 14, marginBottom: 22, paddingBottom: 22, borderBottom: `1px solid ${C.grayLight}` }}>
                <div style={{ width: 44, height: 44, background: C.navy, borderRadius: 11, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{icon}</div>
                <div>
                  <p style={{ fontSize: 11, fontWeight: 700, color: C.navy, letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: 4 }}>{label}</p>
                  <p style={{ fontSize: 13.5, color: C.grayText, lineHeight: 1.65, whiteSpace: "pre-line" }}>{val}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Map ── */}
      <MapSection />
    </div>
  );
};

export default ContactPage;
