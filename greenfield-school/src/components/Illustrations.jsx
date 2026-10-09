// ─── CAMPUS ILLUSTRATION ─────────────────────────────────────────────────────
export const CampusIllustration = ({ style = {} }) => (
  <svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", ...style }}>
    <defs>
      <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#7ab3d8" />
        <stop offset="100%" stopColor="#b0d4e8" />
      </linearGradient>
      <linearGradient id="grass" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#5a9e3a" />
        <stop offset="100%" stopColor="#3d7a25" />
      </linearGradient>
    </defs>
    <rect width="600" height="340" fill="url(#sky)" />
    <rect y="260" width="600" height="80" fill="url(#grass)" />
    {/* Main building */}
    <rect x="100" y="80" width="400" height="190" rx="3" fill="#d4c8b0" />
    <rect x="100" y="70" width="400" height="20" fill="#c0b49a" />
    <rect x="150" y="50" width="300" height="30" fill="#b8a88e" />
    {/* Windows */}
    {[160, 220, 280, 340, 400].map(x =>
      [100, 150].map(y => (
        <rect key={`${x}-${y}`} x={x} y={y} width="40" height="35" rx="2" fill="#8ab4c8" opacity="0.8" />
      ))
    )}
    {/* Door */}
    <rect x="265" y="195" width="70" height="75" rx="3" fill="#6b5a42" />
    <rect x="295" y="210" width="8" height="8" rx="4" fill="#c9a227" />
    {/* Entrance columns */}
    <rect x="250" y="165" width="14" height="105" fill="#c8bc9e" />
    <rect x="336" y="165" width="14" height="105" fill="#c8bc9e" />
    {/* Roof detail */}
    <polygon points="280,30 300,10 320,30" fill="#8b7355" />
    {/* Flag */}
    <line x1="300" y1="10" x2="300" y2="55" stroke="#888" strokeWidth="2" />
    <rect x="300" y="10" width="30" height="18" fill="#c9a227" />
    {/* Sign */}
    <rect x="205" y="248" width="190" height="22" rx="3" fill="#0d1f4c" />
    <text x="300" y="263" textAnchor="middle" fill="white" fontSize="9" fontFamily="sans-serif" fontWeight="bold">
      GREENFIELD INTERNATIONAL SCHOOL
    </text>
    {/* Trees */}
    {[60, 530].map(x => (
      <g key={x}>
        <rect x={x - 5} y="220" width="10" height="45" fill="#6b4a2a" />
        <ellipse cx={x} cy="200" rx="28" ry="35" fill="#2d7a1a" />
        <ellipse cx={x} cy="190" rx="20" ry="25" fill="#3a9a22" />
      </g>
    ))}
    {/* Path */}
    <path d="M265 270 L265 340 M335 270 L335 340" stroke="#c8bc9e" strokeWidth="18" />
    <rect x="260" y="268" width="80" height="6" fill="#b8a88e" />
    {/* Clouds */}
    <ellipse cx="120" cy="50" rx="45" ry="18" fill="white" opacity="0.7" />
    <ellipse cx="480" cy="40" rx="35" ry="14" fill="white" opacity="0.6" />
  </svg>
);

// ─── STUDENTS ILLUSTRATION ────────────────────────────────────────────────────
export const StudentsIllustration = () => (
  <svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <rect width="500" height="300" fill="#1a3262" />
    {/* Study table */}
    <rect x="80" y="160" width="340" height="15" rx="4" fill="#c9a227" opacity="0.4" />
    <rect x="60" y="175" width="380" height="100" rx="4" fill="#142d6b" />
    {/* Open book */}
    <rect x="170" y="130" width="70" height="50" rx="3" fill="#fff" opacity="0.9" />
    <rect x="260" y="130" width="70" height="50" rx="3" fill="#fff" opacity="0.9" />
    <line x1="240" y1="130" x2="240" y2="180" stroke="#c9a227" strokeWidth="2" />
    {/* Student silhouettes */}
    {[120, 220, 320, 420].map((x, i) => (
      <g key={x}>
        <circle cx={x} cy="110" r="22" fill={i % 2 === 0 ? "#1e3a7a" : "#243f88"} />
        <rect x={x - 18} y="130" width="36" height="45" rx="8" fill={i % 2 === 0 ? "#0d1f4c" : "#142d6b"} />
      </g>
    ))}
    {/* Glow */}
    <ellipse cx="250" cy="160" rx="150" ry="30" fill="#c9a227" opacity="0.06" />
    {/* Sparkles */}
    {[[80, 60], [420, 80], [150, 40], [350, 30]].map(([x, y]) => (
      <text key={`${x}-${y}`} x={x} y={y} fill="#c9a227" fontSize="14" opacity="0.5">✦</text>
    ))}
  </svg>
);
