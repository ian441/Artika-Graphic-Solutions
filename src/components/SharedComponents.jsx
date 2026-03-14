import { useState, useEffect } from "react";
import { useInView } from "../hooks/useCustomHooks";

// Fade Up animation component
export const FadeUp = ({ children, delay = 0, style = {} }) => {
  const [ref, v] = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: v ? 1 : 0,
        transform: v ? "none" : "translateY(44px)",
        transition: `opacity 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}s,transform 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

// Custom cursor component
export const Cursor = () => {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [hov, setHov] = useState(false);
  useEffect(() => {
    const m = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setHov(!!e.target.closest("a,button,[data-hover]"));
    };
    window.addEventListener("mousemove", m);
    return () => window.removeEventListener("mousemove", m);
  }, []);
  return (
    <>
      <div
        style={{
          position: "fixed",
          left: pos.x,
          top: pos.y,
          width: hov ? 52 : 10,
          height: hov ? 52 : 10,
          borderRadius: "50%",
          background: "rgba(200,169,126,0.15)",
          border: "1.5px solid rgba(200,169,126,0.75)",
          transform: "translate(-50%,-50%)",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "width 0.3s,height 0.3s",
        }}
      />
      <div
        style={{
          position: "fixed",
          left: pos.x,
          top: pos.y,
          width: 4,
          height: 4,
          borderRadius: "50%",
          background: "#C8A97E",
          transform: "translate(-50%,-50%)",
          pointerEvents: "none",
          zIndex: 10000,
        }}
      />
    </>
  );
};

// Navigation bar
export const Nav = ({ page, setPage, scrollY }) => {
  const past = scrollY > 50;
  const links = ["Home","About", "Services",  "Portfolio", "Gallery"];
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 500,
        padding: "0 3rem",
        height: "5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: past ? "rgba(8,8,6,0.92)" : "transparent",
        backdropFilter: past ? "blur(20px)" : "none",
        borderBottom: past ? "1px solid rgba(200,169,126,0.07)" : "none",
        transition: "all 0.5s",
      }}
    >
      <button
        data-hover
        onClick={() => setPage("Home")}
        style={{
          fontFamily: "'Cormorant Garamond',serif",
          fontSize: "1.1rem",
          letterSpacing: "0.28em",
          color: "#C8A97E",
          fontWeight: 600,
          textTransform: "uppercase",
          background: "none",
          border: "none",
          cursor: "none",
        }}
      >
        Artika
      </button>
      <div style={{ display: "flex", gap: "2.2rem", alignItems: "center" }}>
        {links.map((p) => (
          <button
            key={p}
            data-hover
            onClick={() => setPage(p)}
            style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: "0.66rem",
              letterSpacing: "0.18em",
              color: page === p ? "#C8A97E" : "rgba(255,255,255,0.42)",
              textTransform: "uppercase",
              background: "none",
              border: "none",
              borderBottom: page === p ? "1px solid #C8A97E" : "1px solid transparent",
              paddingBottom: "2px",
              cursor: "none",
              transition: "color 0.3s",
            }}
          >
            {p}
          </button>
        ))}
        <button
          data-hover
          onClick={() => setPage("Contact")}
          style={{
            fontFamily: "'DM Mono',monospace",
            fontSize: "0.66rem",
            letterSpacing: "0.14em",
            color: "#080806",
            background: "#C8A97E",
            padding: "0.5rem 1.3rem",
            border: "none",
            cursor: "none",
            transition: "opacity 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.opacity = "0.8")}
          onMouseLeave={(e) => (e.target.style.opacity = "1")}
        >
          Inquire
        </button>
      </div>
    </nav>
  );
};

// Scrolling marquee
export const Marquee = () => {
  const words = [
    "Brand Identity",
    "Motion Design",
    "Editorial",
    "Typography",
    "UI/UX",
    "Lettering",
    "Art Direction",
    "Visual Systems",
  ];
  return (
    <div style={{ background: "#C8A97E", padding: "0.85rem 0", overflow: "hidden" }}>
      <div
        style={{
          display: "flex",
          gap: "3.5rem",
          animation: "marquee 22s linear infinite",
          whiteSpace: "nowrap",
        }}
      >
        {[...words, ...words, ...words].map((w, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              color: "#080806",
              textTransform: "uppercase",
              display: "inline-flex",
              alignItems: "center",
              gap: "3.5rem",
            }}
          >
            {w}
            <span style={{ opacity: 0.35 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
};

// Footer
export const Footer = ({ setPage, site }) => (
  <footer
    style={{
      background: "#050504",
      padding: "2.5rem 3rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderTop: "1px solid rgba(200,169,126,0.06)",
    }}
  >
    <button
      data-hover
      onClick={() => setPage("Home")}
      style={{
        fontFamily: "'Cormorant Garamond',serif",
        fontSize: "0.95rem",
        letterSpacing: "0.2em",
        color: "#C8A97E",
        fontWeight: 600,
        textTransform: "uppercase",
        background: "none",
        border: "none",
        cursor: "none",
      }}
    >
      {site.studioName}
    </button>
    <div
      style={{
        fontFamily: "'DM Mono',monospace",
        fontSize: "0.58rem",
        letterSpacing: "0.15em",
        color: "rgba(255,255,255,0.18)",
        textTransform: "uppercase",
      }}
    >
      2024 All rights reserved
    </div>
    <div style={{ display: "flex", gap: "2rem" }}>
      {["Instagram", "Behance", "LinkedIn"].map((s) => (
        <a
          key={s}
          data-hover
          href="#"
          style={{
            fontFamily: "'DM Mono',monospace",
            fontSize: "0.58rem",
            letterSpacing: "0.14em",
            color: "rgba(255,255,255,0.28)",
            textDecoration: "none",
            textTransform: "uppercase",
            transition: "color 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#C8A97E")}
          onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.28)")}
        >
          {s}
        </a>
      ))}
    </div>
  </footer>
);

// Page wrapper with transition animations
export const PageWrapper = ({ children, k }) => {
  const [v, setV] = useState(false);
  useEffect(() => {
    setV(false);
    const t = setTimeout(() => setV(true), 55);
    return () => clearTimeout(t);
  }, [k]);
  return (
    <div
      style={{
        opacity: v ? 1 : 0,
        transform: v ? "none" : "translateY(18px)",
        transition: "opacity 0.5s cubic-bezier(0.16,1,0.3,1),transform 0.5s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {children}
    </div>
  );
};
