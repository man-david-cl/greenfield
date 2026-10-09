import C from "./tokens.js";

const GlobalStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap');
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    html{scroll-behavior:smooth}
    body{font-family:'DM Sans',sans-serif;color:${C.grayText};background:${C.white};line-height:1.6;font-size:15px}
    a{text-decoration:none;color:inherit}
    button{cursor:pointer;font-family:inherit}
    img{max-width:100%;display:block}
    input,textarea,select{font-family:inherit}

    @keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
    @keyframes fadeIn{from{opacity:0}to{opacity:1}}
    @keyframes slideRight{from{opacity:0;transform:translateX(-30px)}to{opacity:1;transform:translateX(0)}}
    @keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}

    .anim-fade-up{animation:fadeUp 0.6s ease both}
    .anim-fade-in{animation:fadeIn 0.5s ease both}
    .delay-1{animation-delay:0.1s}
    .delay-2{animation-delay:0.2s}
    .delay-3{animation-delay:0.3s}
    .delay-4{animation-delay:0.4s}
    .delay-5{animation-delay:0.5s}

    ::-webkit-scrollbar{width:6px}
    ::-webkit-scrollbar-track{background:#f0f0f0}
    ::-webkit-scrollbar-thumb{background:${C.navy};border-radius:3px}

    :focus-visible{outline:2px solid ${C.gold};outline-offset:3px}
  `}</style>
);

export default GlobalStyle;
