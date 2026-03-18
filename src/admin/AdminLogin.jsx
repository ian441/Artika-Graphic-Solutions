import React, { useEffect, useState } from "react";
import { ADMIN_PASS } from "../utils/constants";

export const AdminLogin = ({ onLogin }) => {
  const [pw, setPw] = useState("");
  const [err, setErr] = useState(false);
  const [shake, setShake] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const attempt = () => {
    if (pw === ADMIN_PASS) {
      onLogin();
    } else {
      setErr(true);
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050503",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: isMobile ? "1.25rem" : "2rem",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 50% 40%,rgba(200,169,126,0.04),transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          fontSize: isMobile ? "48vw" : "30vw",
          fontFamily: "'Cormorant Garamond',serif",
          color: "rgba(200,169,126,0.025)",
          fontWeight: 700,
          userSelect: "none",
          lineHeight: 1,
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        ⌘
      </div>
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "26rem",
          animation: shake ? "shake 0.5s" : "none",
        }}
      >
        <div style={{ marginBottom: isMobile ? "2rem" : "3rem", textAlign: "center" }}>
          <div
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: isMobile ? "0.82rem" : "0.9rem",
              letterSpacing: isMobile ? "0.28em" : "0.4em",
              color: "rgba(200,169,126,0.5)",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Artika
          </div>
          <div
            style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: "0.62rem",
              letterSpacing: isMobile ? "0.18em" : "0.3em",
              color: "rgba(255,255,255,0.18)",
              textTransform: "uppercase",
            }}
          >
            Admin Access — Restricted
          </div>
        </div>
        <div
          style={{
            border: "1px solid rgba(200,169,126,0.12)",
            padding: isMobile ? "1.4rem" : "2.5rem",
            background: "rgba(8,8,6,0.8)",
            backdropFilter: "blur(14px)",
          }}
        >
          <div
            style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: "0.58rem",
              letterSpacing: "0.2em",
              color: "rgba(255,255,255,0.2)",
              textTransform: "uppercase",
              marginBottom: "0.7rem",
            }}
          >
            Passphrase
          </div>
          <input
            type="password"
            value={pw}
            onChange={(e) => {
              setPw(e.target.value);
              setErr(false);
            }}
            onKeyDown={(e) => e.key === "Enter" && attempt()}
            placeholder="Enter admin passphrase"
            style={{
              width: "100%",
              background: "none",
              border: "none",
              borderBottom: `1px solid ${err ? "#c87e7e" : "rgba(200,169,126,0.2)"}`,
              outline: "none",
              fontFamily: "'DM Mono',monospace",
              fontSize: isMobile ? "0.82rem" : "0.9rem",
              color: err ? "#c87e7e" : "rgba(245,240,232,0.7)",
              caretColor: "#C8A97E",
              padding: "0.5rem 0 0.75rem",
              marginBottom: "2rem",
              letterSpacing: isMobile ? "0.06em" : "0.1em",
              transition: "border-color 0.3s,color 0.3s",
            }}
          />
          {err && (
            <div
              style={{
                fontFamily: "'DM Mono',monospace",
                fontSize: "0.58rem",
                color: "#c87e7e",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "1.2rem",
                marginTop: "-1.5rem",
              }}
            >
              Incorrect passphrase
            </div>
          )}
          <button
            data-hover
            onClick={attempt}
            style={{
              width: "100%",
              fontFamily: "'DM Mono',monospace",
              fontSize: "0.65rem",
              letterSpacing: isMobile ? "0.14em" : "0.2em",
              color: "#080806",
              background: "#C8A97E",
              padding: isMobile ? "1rem 0" : "0.9rem 0",
              border: "none",
              cursor: isMobile ? "pointer" : "none",
              textTransform: "uppercase",
              transition: "opacity 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.opacity = "0.82")}
            onMouseLeave={(e) => (e.target.style.opacity = "1")}
          >
            Enter Studio CMS
          </button>
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: "1.5rem",
            fontFamily: "'DM Mono',monospace",
            fontSize: "0.55rem",
            letterSpacing: isMobile ? "0.12em" : "0.2em",
            color: "rgba(255,255,255,0.1)",
            textTransform: "uppercase",
          }}
        >
          This area is not publicly accessible
        </div>
      </div>
    </div>
  );
};
