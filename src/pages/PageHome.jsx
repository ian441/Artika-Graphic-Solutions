import React from "react";
import { FadeUp } from "../components/SharedComponents";

export const PageHome = ({ scrollY, setPage, projects, gallery, site, services }) => {
  const y = scrollY * 0.35;
  const op = Math.max(0, 1 - scrollY / 620);
  const featured = projects.filter((p) => p.featured);
  // fall back to empty array if neither prop nor site.services defined
  const serviceList = services || site?.services || [];

  return (
    <div style={{ background: "#080806" }}>
      {/* Hero Section */}
      <section
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0 3rem 5.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 72% 38%,rgba(200,169,126,0.065) 0%,transparent 58%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "-3rem",
            top: "50%",
            transform: `translateY(calc(-50% + ${y}px))`,
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: "40vw",
            color: "rgba(200,169,126,0.032)",
            fontWeight: 700,
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          A
        </div>
        <div
          style={{
            position: "absolute",
            top: "32%",
            left: "3rem",
            width: "1px",
            height: "9rem",
            background: "linear-gradient(to bottom,transparent,#C8A97E,transparent)",
            opacity: op,
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            opacity: op,
            transform: `translateY(${y * 0.18}px)`,
          }}
        >
          <div
            style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.32em",
              color: "#C8A97E",
              textTransform: "uppercase",
              marginBottom: "2rem",
            }}
          >
            {site.established} — Design Studio
          </div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: "clamp(3.5rem,9.5vw,9rem)",
              fontWeight: 300,
              color: "#F5F0E8",
              lineHeight: 0.9,
              letterSpacing: "-0.025em",
              margin: 0,
            }}
          >
            <span style={{ display: "block" }}>Artika</span>
            <span style={{ display: "block", fontStyle: "italic", color: "rgba(245,240,232,0.32)" }}>
              Graphics
            </span>
            <span style={{ display: "block" }}>Solutions</span>
          </h1>
          <div
            style={{
              marginTop: "3rem",
              display: "flex",
              gap: "4rem",
              alignItems: "flex-end",
            }}
          >
            <p
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: "1rem",
                color: "rgba(245,240,232,0.48)",
                maxWidth: "26rem",
                lineHeight: 1.8,
                margin: 0,
                fontStyle: "italic",
              }}
            >
              {site.tagline}
            </p>
            <button
              data-hover
              onClick={() => setPage("Portfolio")}
              style={{
                fontFamily: "'DM Mono',monospace",
                fontSize: "0.66rem",
                letterSpacing: "0.2em",
                color: "#C8A97E",
                textTransform: "uppercase",
                background: "none",
                border: "none",
                cursor: "none",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              View Work{" "}
              <svg width="44" height="1" viewBox="0 0 44 1">
                <line x1="0" y1="0.5" x2="44" y2="0.5" stroke="#C8A97E" strokeWidth="1" />
              </svg>
            </button>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "2.5rem",
            right: "3rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.6rem",
            opacity: op * 0.5,
            zIndex: 2,
          }}
        >
          <div
            style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: "0.54rem",
              letterSpacing: "0.25em",
              color: "rgba(255,255,255,0.3)",
              writingMode: "vertical-rl",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </div>
          <div
            style={{
              width: "1px",
              height: "4rem",
              background: "linear-gradient(to bottom,rgba(200,169,126,0.6),transparent)",
              animation: "scrollPulse 2.2s ease-in-out infinite",
            }}
          />
        </div>
      </section>

      {/* Featured work section */}
      <section style={{ padding: "7rem 3rem" }}>
        <FadeUp>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "4.5rem",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.28em",
                  color: "#C8A97E",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                Featured Work
              </div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: "clamp(2rem,4.5vw,4rem)",
                  fontWeight: 300,
                  color: "#F5F0E8",
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                Projects that
                <br />
                <em style={{ color: "rgba(245,240,232,0.3)" }}>define us</em>
              </h2>
            </div>
            <button
              data-hover
              onClick={() => setPage("Portfolio")}
              style={{
                fontFamily: "'DM Mono',monospace",
                fontSize: "0.62rem",
                letterSpacing: "0.18em",
                color: "rgba(255,255,255,0.3)",
                textTransform: "uppercase",
                background: "none",
                border: "none",
                cursor: "none",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#C8A97E")}
              onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.3)")}
            >
              All Projects →
            </button>
          </div>
        </FadeUp>
        {featured[0] && (
          <FadeUp>
            <div
              data-hover
              onClick={() => setPage("Portfolio")}
              style={{
                position: "relative",
                overflow: "hidden",
                marginBottom: "1.5px",
                cursor: "none",
              }}
            >
              <img
                src={featured[0].img}
                alt={featured[0].title}
                style={{
                  width: "100%",
                  height: "60vh",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.85s cubic-bezier(0.16,1,0.3,1)",
                }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.04)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top,rgba(8,8,6,0.9) 0%,rgba(8,8,6,0.1) 55%,transparent 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "2.5rem",
                  left: "2.5rem",
                  right: "2.5rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "'DM Mono',monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.18em",
                      color: featured[0].color,
                      textTransform: "uppercase",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {featured[0].category} — {featured[0].year}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond',serif",
                      fontSize: "clamp(1.8rem,3.5vw,3rem)",
                      color: "#F5F0E8",
                      fontWeight: 400,
                      margin: 0,
                      lineHeight: 1.05,
                    }}
                  >
                    {featured[0].title}
                  </h3>
                </div>
                <div
                  style={{
                    fontFamily: "'DM Mono',monospace",
                    fontSize: "0.65rem",
                    color: "rgba(255,255,255,0.22)",
                  }}
                >
                  {featured[0].id}
                </div>
              </div>
            </div>
          </FadeUp>
        )}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "1.5px",
            background: "rgba(200,169,126,0.04)",
          }}
        >
          {featured.slice(1, 4).map((p, i) => (
            <FadeUp key={p.id} delay={i * 0.08}>
              <div
                data-hover
                onClick={() => setPage("Portfolio")}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  aspectRatio: "4/3",
                  cursor: "none",
                }}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.8s cubic-bezier(0.16,1,0.3,1)",
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = "scale(1.07)")}
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top,rgba(8,8,6,0.85) 0%,transparent 60%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "1.5rem",
                    left: "1.5rem",
                    right: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'DM Mono',monospace",
                      fontSize: "0.56rem",
                      letterSpacing: "0.16em",
                      color: p.color,
                      textTransform: "uppercase",
                      marginBottom: "0.35rem",
                    }}
                  >
                    {p.category}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond',serif",
                      fontSize: "1.25rem",
                      color: "#F5F0E8",
                      fontWeight: 400,
                      lineHeight: 1.1,
                    }}
                  >
                    {p.title}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Gallery preview section */}
      <section style={{ padding: "0 3rem 7rem" }}>
        <FadeUp>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr 1fr",
                gap: "1.5px",
                background: "rgba(200,169,126,0.04)",
              }}
            >
              {gallery
                .filter((g) => g.visible)
                .slice(0, 3)
                .map((g, i) => (
                  <div
                    key={g.id}
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      aspectRatio: i === 0 ? "16/9" : "4/5",
                    }}
                  >
                    <img
                      src={g.img}
                      alt={g.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: "grayscale(35%)",
                        transition: "transform 0.7s,filter 0.5s",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = "scale(1.06)";
                        e.target.style.filter = "grayscale(0%)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = "scale(1)";
                        e.target.style.filter = "grayscale(35%)";
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(8,8,6,0.28)",
                      }}
                    />
                  </div>
                ))}
            </div>
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: "6vw",
                  color: "rgba(245,240,232,0.07)",
                  fontStyle: "italic",
                  userSelect: "none",
                }}
              >
                Art Gallery
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.28em",
                  color: "rgba(255,255,255,0.25)",
                  textTransform: "uppercase",
                  marginBottom: "0.4rem",
                }}
              >
                The Studio Collection
              </div>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: "1.55rem",
                  color: "#F5F0E8",
                  fontStyle: "italic",
                  fontWeight: 300,
                }}
              >
                A curated space for visual exploration
              </div>
            </div>
            <button
              data-hover
              onClick={() => setPage("Gallery")}
              style={{
                fontFamily: "'DM Mono',monospace",
                fontSize: "0.67rem",
                letterSpacing: "0.18em",
                color: "#080806",
                background: "#C8A97E",
                padding: "0.9rem 2.2rem",
                border: "none",
                cursor: "none",
                transition: "opacity 0.3s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => (e.target.style.opacity = "0.82")}
              onMouseLeave={(e) => (e.target.style.opacity = "1")}
            >
              Enter Gallery →
            </button>
          </div>
        </FadeUp>
      </section>

      {/* Testimonials section */}
      <section style={{ padding: "7rem 3rem", background: "#0B0A09" }}>
        <FadeUp>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: "clamp(2rem,4vw,3.5rem)",
              fontWeight: 300,
              color: "#F5F0E8",
              margin: 0,
              lineHeight: 1,
              marginBottom: "4rem",
            }}
          >
            What Clients Say
          </h2>
        </FadeUp>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          <FadeUp>
            <div
              style={{
                padding: "2rem",
                background: "#111",
                borderRadius: "8px",
              }}
            >
              <p
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: "1rem",
                  color: "rgba(245,240,232,0.8)",
                  lineHeight: 1.6,
                  margin: "0 0 1.5rem",
                  fontStyle: "italic",
                }}
              >
                "Artika Graphics Solutions transformed our brand identity. Their creativity and attention to detail exceeded our expectations."
              </p>
              <div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: "1.1rem",
                    color: "#C8A97E",
                    fontWeight: 400,
                  }}
                >
                  Sarah Johnson
                </div>
                <div
                  style={{
                    fontFamily: "'DM Mono',monospace",
                    fontSize: "0.7rem",
                    color: "rgba(245,240,232,0.5)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  CEO, TechStart Inc.
                </div>
              </div>
            </div>
          </FadeUp>
          <FadeUp>
            <div
              style={{
                padding: "2rem",
                background: "#111",
                borderRadius: "8px",
              }}
            >
              <p
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: "1rem",
                  color: "rgba(245,240,232,0.8)",
                  lineHeight: 1.6,
                  margin: "0 0 1.5rem",
                  fontStyle: "italic",
                }}
              >
                "Working with Artika was a game-changer. Their designs not only look stunning but also drive real results for our business."
              </p>
              <div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: "1.1rem",
                    color: "#C8A97E",
                    fontWeight: 400,
                  }}
                >
                  Michael Chen
                </div>
                <div
                  style={{
                    fontFamily: "'DM Mono',monospace",
                    fontSize: "0.7rem",
                    color: "rgba(245,240,232,0.5)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  Marketing Director, Innovate Corp.
                </div>
              </div>
            </div>
          </FadeUp>
          <FadeUp>
            <div
              style={{
                padding: "2rem",
                background: "#111",
                borderRadius: "8px",
              }}
            >
              <p
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: "1rem",
                  color: "rgba(245,240,232,0.8)",
                  lineHeight: 1.6,
                  margin: "0 0 1.5rem",
                  fontStyle: "italic",
                }}
              >
                "The team's professionalism and innovative approach helped us stand out in a competitive market. Highly recommended!"
              </p>
              <div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: "1.1rem",
                    color: "#C8A97E",
                    fontWeight: 400,
                  }}
                >
                  Emily Rodriguez
                </div>
                <div
                  style={{
                    fontFamily: "'DM Mono',monospace",
                    fontSize: "0.7rem",
                    color: "rgba(245,240,232,0.5)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  Founder, Creative Studios
                </div>
              </div>
            </div>
          </FadeUp>
          <FadeUp>
            <div
              style={{
                padding: "2rem",
                background: "#111",
                borderRadius: "8px",
              }}
            >
              <p
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: "1rem",
                  color: "rgba(245,240,232,0.8)",
                  lineHeight: 1.6,
                  margin: "0 0 1.5rem",
                  fontStyle: "italic",
                }}
              >
                "From concept to execution, Artika delivered exceptional graphics that perfectly captured our vision. Outstanding work!"
              </p>
              <div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: "1.1rem",
                    color: "#C8A97E",
                    fontWeight: 400,
                  }}
                >
                  David Kim
                </div>
                <div
                  style={{
                    fontFamily: "'DM Mono',monospace",
                    fontSize: "0.7rem",
                    color: "rgba(245,240,232,0.5)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  Product Manager, DesignHub
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
      {/* Book a Call Section - Sculptural Experience */}
<section style={{ 
  padding: "8rem 3rem",
  background: "#080806",
  position: "relative",
  overflow: "hidden",
  borderTop: "1px solid rgba(200,169,126,0.08)",
  borderBottom: "1px solid rgba(200,169,126,0.08)",
}}>
  {/* Ambient background geometry */}
  <div style={{
    position: "absolute",
    inset: 0,
    background: "radial-gradient(circle at 30% 50%, rgba(200,169,126,0.03) 0%, transparent 50%)",
    pointerEvents: "none",
  }} />
  
  {/* 3D-inspired floating elements */}
  <div style={{
    position: "absolute",
    right: "5%",
    top: "15%",
    width: "180px",
    height: "180px",
    border: "1px solid rgba(200,169,126,0.12)",
    borderRadius: "50%",
    transform: "rotate(45deg)",
    opacity: 0.4,
  }} />
  <div style={{
    position: "absolute",
    left: "2%",
    bottom: "10%",
    width: "240px",
    height: "240px",
    border: "1px solid rgba(200,169,126,0.08)",
    borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
    opacity: 0.3,
  }} />
  
  {/* Main content */}
  <div style={{
    position: "relative",
    zIndex: 2,
    maxWidth: "1400px",
    margin: "0 auto",
  }}>
    <FadeUp>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1.2fr 0.8fr",
        gap: "4rem",
        alignItems: "center",
      }}>
        {/* Left side - Sculptural text and visual */}
        <div>
          {/* Timepiece indicator */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "2.5rem",
          }}>
            <div style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              border: "1px solid rgba(200,169,126,0.3)",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <div style={{
                width: "4px",
                height: "4px",
                background: "#C8A97E",
                borderRadius: "50%",
              }} />
              <div style={{
                position: "absolute",
                width: "1px",
                height: "10px",
                background: "#C8A97E",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) rotate(45deg)",
                opacity: 0.5,
              }} />
            </div>
            <div style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.28em",
              color: "rgba(200,169,126,0.6)",
              textTransform: "uppercase",
            }}>
              Reserve Your Moment
            </div>
          </div>

          {/* Main headline with architectural styling */}
          <h2 style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: "clamp(3rem, 6vw, 5rem)",
            fontWeight: 300,
            color: "#F5F0E8",
            margin: "0 0 1.5rem",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            position: "relative",
          }}>
            <span style={{ display: "block" }}>Let's Build</span>
            <span style={{ 
              display: "block",
              fontStyle: "italic",
              color: "#C8A97E",
              position: "relative",
              marginLeft: "2rem",
            }}>
              Something
              <span style={{
                position: "absolute",
                bottom: "0.2em",
                left: 0,
                width: "100%",
                height: "1px",
                background: "linear-gradient(90deg, #C8A97E 0%, transparent 100%)",
              }} />
            </span>
            <span style={{ display: "block" }}>Remarkable</span>
          </h2>

          {/* Descriptive text */}
          <p style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: "1.1rem",
            color: "rgba(245,240,232,0.55)",
            lineHeight: 1.7,
            maxWidth: "440px",
            margin: "0 0 3rem",
            fontStyle: "italic",
            borderLeft: "2px solid rgba(200,169,126,0.3)",
            paddingLeft: "1.5rem",
          }}>
            Every great collaboration begins with a conversation. 
            Let's explore how we can bring your vision to life through design that resonates.
          </p>

          {/* Availability indicator - unique touch */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "3rem",
          }}>
            <div style={{
              display: "flex",
              gap: "0.3rem",
            }}>
              {[0,1,2,3].map((i) => (
                <div key={i} style={{
                  width: "40px",
                  height: "4px",
                  background: i < 2 ? "#C8A97E" : "rgba(200,169,126,0.15)",
                  borderRadius: "2px",
                  transition: "background 0.3s",
                }} />
              ))}
            </div>
            <span style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              color: "rgba(255,255,255,0.3)",
              textTransform: "uppercase",
            }}>
              2 spots available this month
            </span>
          </div>
        </div>

        {/* Right side - Interactive booking sculpture */}
        <div style={{
          position: "relative",
        }}>
          {/* Main booking card - sculptural form */}
          <div style={{
            background: "rgba(17, 17, 14, 0.6)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(200,169,126,0.15)",
            borderRadius: "24px",
            padding: "3rem 2.5rem",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 20px 40px -15px rgba(0,0,0,0.5)",
          }}>
            {/* Decorative corner elements */}
            <div style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "60px",
              height: "60px",
              borderTop: "1px solid rgba(200,169,126,0.3)",
              borderRight: "1px solid rgba(200,169,126,0.3)",
            }} />
            <div style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "60px",
              height: "60px",
              borderBottom: "1px solid rgba(200,169,126,0.3)",
              borderLeft: "1px solid rgba(200,169,126,0.3)",
            }} />

            {/* Time slots visualization */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem",
              marginBottom: "2.5rem",
            }}>
              {["30min", "60min", "90min"].map((duration, i) => (
                <div key={duration} style={{
                  textAlign: "center",
                  padding: "1rem 0.5rem",
                  background: i === 1 ? "rgba(200,169,126,0.08)" : "transparent",
                  borderRadius: "12px",
                  border: i === 1 ? "1px solid rgba(200,169,126,0.2)" : "1px solid transparent",
                  transition: "all 0.3s",
                  cursor: "none",
                }}
                onMouseEnter={(e) => {
                  if (i !== 1) {
                    e.currentTarget.style.background = "rgba(200,169,126,0.04)";
                    e.currentTarget.style.borderColor = "rgba(200,169,126,0.1)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (i !== 1) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "transparent";
                  }
                }}>
                  <div style={{
                    fontFamily: "'DM Mono',monospace",
                    fontSize: "0.7rem",
                    letterSpacing: "0.1em",
                    color: i === 1 ? "#C8A97E" : "rgba(255,255,255,0.4)",
                    marginBottom: "0.25rem",
                  }}>
                    {duration}
                  </div>
                  <div style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: "0.9rem",
                    color: i === 1 ? "#F5F0E8" : "rgba(245,240,232,0.3)",
                  }}>
                    {i === 0 ? "Quick chat" : i === 1 ? "Deep dive" : "Workshop"}
                  </div>
                </div>
              ))}
            </div>

            {/* Main call to action button - sculptural form */}
            <button
              data-hover
              onClick={() => window.open("https://calendly.com/your-link", "_blank")}
              style={{
                width: "100%",
                background: "none",
                border: "none",
                padding: 0,
                cursor: "none",
                marginBottom: "1.5rem",
              }}
            >
              <div style={{
                background: "#C8A97E",
                padding: "1.8rem 2rem",
                borderRadius: "16px",
                position: "relative",
                transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
                transform: "translateY(0)",
                boxShadow: "0 4px 0 #8b6e4b",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 8px 0 #8b6e4b";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 0 #8b6e4b";
              }}>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                  <span style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: "1.6rem",
                    fontWeight: 500,
                    color: "#080806",
                    letterSpacing: "-0.02em",
                  }}>
                    Book your call
                  </span>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="15.5" stroke="#080806" strokeOpacity="0.3"/>
                    <path d="M12 10L22 16L12 22V10Z" fill="#080806" fillOpacity="0.9"/>
                  </svg>
                </div>
                <div style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  color: "rgba(8,8,6,0.6)",
                  textTransform: "uppercase",
                  marginTop: "0.5rem",
                  textAlign: "left",
                }}>
                  Free consultation • 100% commitment-free
                </div>
              </div>
            </button>

            {/* Quick response promise */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
            }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7.5" stroke="#C8A97E" strokeOpacity="0.3"/>
                <path d="M5 8L7 10L11 6" stroke="#C8A97E" strokeWidth="1.5"/>
              </svg>
              <span style={{
                fontFamily: "'DM Mono',monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                color: "rgba(200,169,126,0.7)",
                textTransform: "uppercase",
              }}>
                Response within 24 hours
              </span>
            </div>
          </div>

          {/* Floating decorative element */}
          <div style={{
            position: "absolute",
            top: "-15px",
            right: "-15px",
            width: "60px",
            height: "60px",
            background: "radial-gradient(circle at center, rgba(200,169,126,0.1) 0%, transparent 70%)",
            borderRadius: "50%",
            zIndex: -1,
          }} />
        </div>
      </div>
    </FadeUp>
  </div>
</section>
    </div>
  );
};
