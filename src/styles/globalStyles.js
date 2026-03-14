export const getGlobalStyles = () => `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=DM+Mono:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;1,400;1,500&display=swap');
  
  *,*::before,*::after{
    box-sizing:border-box;
    margin:0;
    padding:0;
  }
  
  html{
    scroll-behavior:smooth;
    cursor:none;
  }
  
  body{
    background:#080806;
    overflow-x:hidden;
  }
  
  a,button,input,textarea{
    cursor:none;
  }
  
  input::placeholder,textarea::placeholder{
    color:rgba(245,240,232,0.2);
  }
  
  @keyframes marquee{
    from{transform:translateX(0);}
    to{transform:translateX(-33.333%);}
  }
  
  @keyframes scrollPulse{
    0%,100%{opacity:0.4;}
    50%{opacity:1;}
  }
  
  @keyframes pulse{
    0%,100%{opacity:0.4;}
    50%{opacity:1;}
  }
  
  @keyframes shake{
    0%,100%{transform:translateX(0);}
    20%,60%{transform:translateX(-8px);}
    40%,80%{transform:translateX(8px);}
  }
  
  @keyframes fadeInDown{
    from{opacity:0;transform:translateY(-10px);}
    to{opacity:1;transform:translateY(0);}
  }
  
  ::-webkit-scrollbar{
    width:3px;
  }
  
  ::-webkit-scrollbar-track{
    background:#080806;
  }
  
  ::-webkit-scrollbar-thumb{
    background:#C8A97E;
  }

  /* mobile / small-screen tweaks */
  @media (max-width: 768px) {
    nav { padding: 0 1.5rem !important; height: 4rem !important; }
    nav button { font-size: 0.55rem !important; letter-spacing:0.12em !important; }
    nav > div { gap: 1rem !important; }
    section, header { padding: 3rem 1.5rem !important; }
    footer { padding: 2rem 1.5rem !important; flex-direction: column; gap: 1rem; }
    footer div, footer a { font-size: 0.5rem !important; }
    /* target inline grid styles regardless of camel/hyphen */
    [style*="grid-template-columns" i] { grid-template-columns: 1fr !important; }
    img { max-width:100%;height:auto !important; }
  }
`;

export const getAdminStyles = () => `
  *,*::before,*::after{
    box-sizing:border-box;
    margin:0;
    padding:0;
  }
  
  html{
    cursor:none;
  }
  
  body{
    background:#060604;
    overflow-x:hidden;
  }
  
  a,button,input,select,textarea{
    cursor:none;
  }
  
  input::placeholder,textarea::placeholder{
    color:rgba(245,240,232,0.15);
  }
  
  select option{
    background:#0A0A08;
  }
  
  ::-webkit-scrollbar{
    width:3px;
  }
  
  ::-webkit-scrollbar-track{
    background:#040402;
  }
  
  ::-webkit-scrollbar-thumb{
    background:#C8A97E;
  }
  
  @keyframes shake{
    0%,100%{transform:translateX(0);}
    20%,60%{transform:translateX(-8px);}
    40%,80%{transform:translateX(8px);}
  }
  
  @keyframes fadeInDown{
    from{opacity:0;transform:translateY(-10px);}
    to{opacity:1;transform:translateY(0);}
  }
  
  @keyframes pulse{
    0%,100%{opacity:0.4;}
    50%{opacity:1;}
  }
`;
