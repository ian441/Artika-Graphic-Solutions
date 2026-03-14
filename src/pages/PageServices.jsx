import React from "react";
import { FadeUp } from "../components/SharedComponents";

export const PageServices = ({ setPage, services }) => (
  <div style={{ background: "#080806", minHeight: "100vh", paddingTop: "5rem" }}>
    <div style={{ padding: "5rem 3rem 3rem" }}>
      <FadeUp>
        <div
          style={{
            fontFamily: "'DM Mono',monospace",
            fontSize: "0.62rem",
            letterSpacing: "0.3em",
            color: "#C8A97E",
            textTransform: "uppercase",
            marginBottom: "1.2rem",
          }}
        >
          What We Do
        </div>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: "clamp(3rem,6vw,6rem)",
            fontWeight: 300,
            color: "#F5F0E8",
            lineHeight: 0.94,
            margin: 0,
          }}
        >
          Services crafted
          <br />
          <em style={{ color: "rgba(245,240,232,0.28)" }}>for distinction</em>
        </h1>
      </FadeUp>
    </div>
    <div style={{ background: "#F5F0E8", padding: "5rem 3rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        {services.map((s, i) => {
          // Define service images based on service type
          const serviceImages = {
            1: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=400&q=80", // Brand Identity
            2: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80", // Editorial Design
            3: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&q=80", // Motion and Film
            4: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",  // Digital Experiences
            5: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&q=80", // Type Design
          };

          return (
            <FadeUp key={s.id} delay={i * 0.09}>
              <div
                data-hover
                style={{
                  padding: "3.5rem",
                  borderTop: "1px solid rgba(8,8,6,0.1)",
                  borderRight: i % 2 === 0 ? "1px solid rgba(8,8,6,0.1)" : "none",
                  transition: "background 0.4s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(200,169,126,0.1)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0 }}>
                    <img
                      src={serviceImages[s.id] || "https://via.placeholder.com/120x120/080806/F5F0E8?text=S"}
                      alt={`${s.name} service`}
                      style={{
                        width: "120px",
                        height: "120px",
                        objectFit: "cover",
                        borderRadius: "8px",
                        border: "2px solid rgba(200,169,126,0.2)",
                      }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start", marginBottom: "1rem" }}>
                      <span
                        style={{
                          fontFamily: "'Cormorant Garamond',serif",
                          fontSize: "1.05rem",
                          color: "#C8A97E",
                          fontStyle: "italic",
                          flexShrink: 0,
                          marginTop: "0.22rem",
                        }}
                      >
                        {s.num}
                      </span>
                      <h3
                        style={{
                          fontFamily: "'Cormorant Garamond',serif",
                          fontSize: "1.7rem",
                          fontWeight: 500,
                          color: "#080806",
                          margin: 0,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {s.name}
                      </h3>
                    </div>
                    <p
                      style={{
                        fontFamily: "'Playfair Display',serif",
                        fontStyle: "italic",
                        fontSize: "0.88rem",
                        color: "rgba(8,8,6,0.48)",
                        lineHeight: 1.8,
                        margin: 0,
                      }}
                    >
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          );
        })}
      </div>
    </div>
    <div style={{ padding: "6rem 3rem 8rem" }}>
      <FadeUp>
        <div style={{ maxWidth: "50rem" }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: "clamp(1.8rem,3.5vw,3.2rem)",
              fontWeight: 300,
              color: "#F5F0E8",
              margin: "0 0 2rem",
              lineHeight: 1.15,
            }}
          >
            Every engagement begins with <em style={{ color: "#C8A97E" }}>deep listening.</em>
          </h2>
          <button
            data-hover
            onClick={() => setPage("Contact")}
            style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: "0.67rem",
              letterSpacing: "0.2em",
              color: "#080806",
              background: "#C8A97E",
              padding: "1rem 2.5rem",
              border: "none",
              cursor: "none",
              transition: "opacity 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.opacity = "0.82")}
            onMouseLeave={(e) => (e.target.style.opacity = "1")}
          >
            Start a Conversation
          </button>
        </div>
      </FadeUp>
    </div>

    {/* How it works */}
    <div style={{ padding: "6rem 3rem", background: "#F5F0E8", position: "relative" }}>
      <FadeUp>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: "clamp(2rem,4vw,3rem)",
            fontWeight: 300,
            color: "#080806",
            margin: "0 0 4rem",
            lineHeight: 1.1,
            textAlign: "center",
          }}
        >
          How it works
        </h2>
      </FadeUp>

      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {[
          {
            step: "01",
            title: "Discovery & Consultation",
            desc: "We begin by understanding your vision, goals, and challenges through in-depth conversations.",
            icon: "🔍",
          },
          {
            step: "02",
            title: "Strategy & Planning",
            desc: "Developing a tailored roadmap that aligns with your brand and objectives.",
            icon: "📋",
          },
          {
            step: "03",
            title: "Creative Development",
            desc: "Bringing ideas to life with innovative designs and meticulous craftsmanship.",
            icon: "🎨",
          },
          {
            step: "04",
            title: "Review & Iteration",
            desc: "Collaborative feedback sessions to refine and perfect every detail.",
            icon: "🔄",
          },
          {
            step: "05",
            title: "Launch & Support",
            desc: "Seamless delivery with ongoing support to ensure lasting impact.",
            icon: "🚀",
          },
        ].map((item, i) => (
          <FadeUp key={i} delay={i * 0.1}>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: i < 4 ? "3rem" : "0",
                position: "relative",
              }}
            >
              {/* Timeline line */}
              {i < 4 && (
                <div
                  style={{
                    position: "absolute",
                    left: "2.5rem",
                    top: "4rem",
                    width: "2px",
                    height: "3rem",
                    background: "linear-gradient(to bottom, #C8A97E, rgba(200,169,126,0.3))",
                  }}
                ></div>
              )}

              {/* Step circle */}
              <div
                style={{
                  width: "5rem",
                  height: "5rem",
                  borderRadius: "50%",
                  background: "#C8A97E",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  color: "#F5F0E8",
                  fontWeight: "bold",
                  marginRight: "2rem",
                  flexShrink: 0,
                  boxShadow: "0 4px 12px rgba(200,169,126,0.3)",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                {item.icon}
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontFamily: "'DM Mono',monospace",
                    fontSize: "0.8rem",
                    fontWeight: "bold",
                    color: "#C8A97E",
                    marginBottom: "0.5rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  {item.step}
                </div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: "1.8rem",
                    fontWeight: 600,
                    color: "#080806",
                    margin: "0 0 1rem",
                    lineHeight: 1.2,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: "1rem",
                    color: "rgba(8,8,6,0.7)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </div>
);
