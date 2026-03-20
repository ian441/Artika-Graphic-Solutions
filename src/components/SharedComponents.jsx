import { useState, useEffect, useRef } from "react";
import { useInView } from "../hooks/useCustomHooks";

const SECRET_HOLD_MS = 700;
const SECRET_TAP_THRESHOLD_MS = 450;
const SECRET_TAP_COUNT = 4;

const useSecretAdminGesture = (onSecretAdminTrigger) => {
  const pressTimerRef = useRef(null);
  const tapCountRef = useRef(0);
  const lastTapRef = useRef(0);

  const clearPressTimer = () => {
    clearTimeout(pressTimerRef.current);
    pressTimerRef.current = null;
  };

  const fireSecretTrigger = () => {
    if (!onSecretAdminTrigger) return;
    clearPressTimer();
    tapCountRef.current = 0;
    onSecretAdminTrigger();
  };

  const startSecretPress = () => {
    if (!onSecretAdminTrigger) return;
    clearPressTimer();
    pressTimerRef.current = setTimeout(() => {
      fireSecretTrigger();
    }, SECRET_HOLD_MS);
  };

  const cancelSecretPress = () => {
    clearPressTimer();
  };

  const registerSecretTap = () => {
    if (!onSecretAdminTrigger) return;

    const now = Date.now();
    tapCountRef.current = now - lastTapRef.current <= SECRET_TAP_THRESHOLD_MS ? tapCountRef.current + 1 : 1;
    lastTapRef.current = now;

    if (tapCountRef.current >= SECRET_TAP_COUNT) {
      fireSecretTrigger();
    }
  };

  useEffect(() => {
    return () => clearPressTimer();
  }, []);

  return {
    startSecretPress,
    cancelSecretPress,
    registerSecretTap,
  };
};

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
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const syncCursor = () => {
      const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
      setEnabled(!coarsePointer && window.innerWidth > 900);
    };

    syncCursor();
    window.addEventListener("resize", syncCursor);
    return () => window.removeEventListener("resize", syncCursor);
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;

    const m = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setHov(!!e.target.closest("a,button,[data-hover]"));
    };
    window.addEventListener("mousemove", m);
    return () => window.removeEventListener("mousemove", m);
  }, [enabled]);

  if (!enabled) return null;

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
// Navigation bar
export const Nav = ({ page, setPage, scrollY, site, onSecretAdminTrigger }) => {
  const past = scrollY > 50;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { startSecretPress, cancelSecretPress, registerSecretTap } = useSecretAdminGesture(onSecretAdminTrigger);
  const links = ["Home","About", "Services",  "Portfolio", "Gallery"];
  const socialLinks = [
    { label: "IG", href: site?.socialInstagram },
    { label: "BE", href: site?.socialBehance },
    { label: "LI", href: site?.socialLinkedIn },
  ].filter((item) => item.href);
  
  // Check if screen is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close menu when clicking a link
  const handleLinkClick = (p) => {
    setPage(p);
    setIsMenuOpen(false);
  };

  // Prevent body scroll when menu is open on mobile
  useEffect(() => {
    if (isMobile && isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen, isMobile]);

  // Close menu with Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 500,
        padding: isMobile ? "0 1.5rem" : "0 3rem",
        height: "5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: past ? "rgba(8,8,6,0.98)" : "transparent",
        backdropFilter: past ? "blur(20px)" : "none",
        borderBottom: past ? "1px solid rgba(200,169,126,0.07)" : "none",
        transition: "all 0.5s",
      }}
    >
      <button
        data-hover
        onClick={() => setPage("Home")}
        onPointerDown={startSecretPress}
        onPointerUp={cancelSecretPress}
        onPointerCancel={cancelSecretPress}
        onPointerLeave={cancelSecretPress}
        onTouchEnd={registerSecretTap}
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
          zIndex: 501,
        }}
      >
        Artika
      </button>

      {/* Desktop Menu */}
      {!isMobile && (
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
      )}

      {/* Hamburger Icon - Mobile */}
      {isMobile && (
        <>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "none",
              zIndex: 502,
              width: "40px",
              height: "40px",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "6px",
              padding: 0,
            }}
          >
            <span style={{
              display: "block",
              width: "30px",
              height: "2px",
              background: "#C8A97E",
              transition: "all 0.3s ease",
              transform: isMenuOpen ? "rotate(45deg) translate(8px, 8px)" : "none",
              opacity: isMenuOpen ? 1 : 1,
            }} />
            <span style={{
              display: "block",
              width: "30px",
              height: "2px",
              background: "#C8A97E",
              transition: "all 0.3s ease",
              opacity: isMenuOpen ? 0 : 1,
              transform: isMenuOpen ? "scale(0)" : "scale(1)",
            }} />
            <span style={{
              display: "block",
              width: "30px",
              height: "2px",
              background: "#C8A97E",
              transition: "all 0.3s ease",
              transform: isMenuOpen ? "rotate(-45deg) translate(8px, -8px)" : "none",
              opacity: isMenuOpen ? 1 : 1,
            }} />
          </button>

          {/* Backdrop overlay */}
          <div 
            onClick={() => setIsMenuOpen(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(4px)",
              zIndex: 500,
              opacity: isMenuOpen ? 1 : 0,
              visibility: isMenuOpen ? "visible" : "hidden",
              transition: "opacity 0.3s ease, visibility 0.3s ease",
              pointerEvents: isMenuOpen ? "auto" : "none",
            }}
          />

          {/* Mobile Menu Panel */}
          <div style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "min(85%, 400px)",
            height: "100vh",
            background: "linear-gradient(145deg, #0a0a08 0%, #1a1a14 100%)",
            backdropFilter: "blur(20px)",
            zIndex: 501,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "1.5rem",
            transform: isMenuOpen ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            padding: "4rem 2.5rem",
            boxShadow: "-10px 0 30px rgba(0,0,0,0.5)",
            borderLeft: "1px solid rgba(200,169,126,0.15)",
            overflowY: "auto",
          }}>
            {/* Decorative element */}
            <div style={{
              position: "absolute",
              top: "2rem",
              left: "2rem",
              width: "50px",
              height: "2px",
              background: "linear-gradient(90deg, #C8A97E, transparent)",
            }} />

            {/* Logo in menu */}
            <div style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: "1.5rem",
              letterSpacing: "0.28em",
              color: "#C8A97E",
              fontWeight: 600,
              textTransform: "uppercase",
              marginBottom: "2rem",
              opacity: 0.8,
            }}>
              Menu
            </div>

            {/* Navigation Links */}
            {links.map((p, index) => (
              <button
                key={p}
                data-hover
                onClick={() => handleLinkClick(p)}
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "1.4rem",
                  letterSpacing: "0.18em",
                  color: page === p ? "#C8A97E" : "rgba(255,255,255,0.5)",
                  textTransform: "uppercase",
                  background: "none",
                  border: "none",
                  cursor: "none",
                  padding: "0.5rem 0",
                  width: "100%",
                  textAlign: "left",
                  position: "relative",
                  transform: `translateX(${isMenuOpen ? '0' : '20px'})`,
                  opacity: isMenuOpen ? 1 : 0,
                  transition: `all 0.3s ease ${index * 0.1}s`,
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#C8A97E";
                  e.target.style.transform = "translateX(10px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = page === p ? "#C8A97E" : "rgba(255,255,255,0.5)";
                  e.target.style.transform = "translateX(0)";
                }}
              >
                <span style={{
                  position: "relative",
                  display: "inline-block",
                }}>
                  {p}
                  {page === p && (
                    <span style={{
                      position: "absolute",
                      bottom: "-4px",
                      left: 0,
                      width: "100%",
                      height: "1px",
                      background: "#C8A97E",
                    }} />
                  )}
                </span>
              </button>
            ))}

            {/* Divider */}
            <div style={{
              width: "100%",
              height: "1px",
              background: "linear-gradient(90deg, rgba(200,169,126,0.3), transparent)",
              margin: "2rem 0",
            }} />

            {/* Inquire Button */}
            <button
              data-hover
              onClick={() => handleLinkClick("Contact")}
              style={{
                fontFamily: "'DM Mono',monospace",
                fontSize: "1.1rem",
                letterSpacing: "0.14em",
                color: "#080806",
                background: "#C8A97E",
                padding: "1rem 2.5rem",
                border: "none",
                cursor: "none",
                width: "100%",
                textAlign: "center",
                borderRadius: "4px",
                transform: `translateY(${isMenuOpen ? '0' : '20px'})`,
                opacity: isMenuOpen ? 1 : 0,
                transition: `all 0.3s ease ${links.length * 0.1}s`,
                boxShadow: "0 4px 15px rgba(200,169,126,0.3)",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#dbb88c";
                e.target.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "#C8A97E";
                e.target.style.transform = "scale(1)";
              }}
            >
              Start a Project
            </button>

            {/* Social Links */}
            <div style={{
              display: "flex",
              gap: "2rem",
              marginTop: "2rem",
              opacity: isMenuOpen ? 1 : 0,
              transition: `all 0.3s ease ${links.length * 0.1 + 0.1}s`,
            }}>
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  data-hover
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontFamily: "'DM Mono',monospace",
                    fontSize: "0.8rem",
                    letterSpacing: "0.14em",
                    color: "rgba(255,255,255,0.4)",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#C8A97E")}
                  onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.4)")}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Decorative element at bottom */}
            <div style={{
              position: "absolute",
              bottom: "2rem",
              right: "2rem",
              width: "30px",
              height: "30px",
              borderRight: "2px solid rgba(200,169,126,0.2)",
              borderBottom: "2px solid rgba(200,169,126,0.2)",
            }} />
          </div>
        </>
      )}
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
export const Footer = ({ setPage, site, onSecretAdminTrigger }) => {
  const { startSecretPress, cancelSecretPress, registerSecretTap } = useSecretAdminGesture(onSecretAdminTrigger);
  const socialLinks = [
    { label: "Instagram", href: site?.socialInstagram },
    { label: "Behance", href: site?.socialBehance },
    { label: "LinkedIn", href: site?.socialLinkedIn },
  ].filter((item) => item.href);

  return (
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
        onPointerDown={startSecretPress}
        onPointerUp={cancelSecretPress}
        onPointerCancel={cancelSecretPress}
        onPointerLeave={cancelSecretPress}
        onTouchEnd={registerSecretTap}
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
        {socialLinks.map((item) => (
          <a
            key={item.label}
            data-hover
            href={item.href}
            target="_blank"
            rel="noreferrer"
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
            {item.label}
          </a>
        ))}
      </div>
    </footer>
  );
};

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
