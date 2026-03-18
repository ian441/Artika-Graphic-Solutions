import React, { useState, useEffect } from "react";
import { FadeUp } from "../components/SharedComponents";

export const PageServices = ({ setPage, services }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div style={{ background: "#080806", minHeight: "100vh", paddingTop: "5rem" }}>
      {/* Header Section - Responsive padding */}
      <div style={{ padding: isMobile ? "3rem 1.5rem" : "5rem 3rem 3rem" }}>
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
              fontSize: "clamp(2.5rem,8vw,6rem)",
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

      {/* Services Grid - Responsive layout */}
      <div style={{ 
        background: "#F5F0E8", 
        padding: isMobile ? "2rem 1rem" : "5rem 3rem" 
      }}>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "1rem" : "0"
        }}>
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
                    padding: isMobile ? "1.5rem" : "3.5rem",
                    borderTop: "1px solid rgba(8,8,6,0.1)",
                    borderRight: !isMobile && i % 2 === 0 ? "1px solid rgba(8,8,6,0.1)" : "none",
                    borderBottom: isMobile ? "1px solid rgba(8,8,6,0.1)" : "none",
                    transition: "background 0.4s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(200,169,126,0.1)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  <div style={{ 
                    display: "flex", 
                    flexDirection: isMobile ? "column" : "row",
                    gap: isMobile ? "1.5rem" : "2rem", 
                    alignItems: isMobile ? "flex-start" : "flex-start"
                  }}>
                    <div style={{ 
                      flexShrink: 0,
                      width: isMobile ? "100%" : "auto",
                    }}>
                      <img
                        src={serviceImages[s.id] || "https://via.placeholder.com/120x120/080806/F5F0E8?text=S"}
                        alt={`${s.name} service`}
                        style={{
                          width: isMobile ? "100%" : "120px",
                          height: isMobile ? "200px" : "120px",
                          objectFit: "cover",
                          borderRadius: "8px",
                          border: "2px solid rgba(200,169,126,0.2)",
                        }}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ 
                        display: "flex", 
                        gap: isMobile ? "1rem" : "1.5rem", 
                        alignItems: "flex-start", 
                        marginBottom: "1rem",
                        flexWrap: "wrap"
                      }}>
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
                            fontSize: isMobile ? "1.4rem" : "1.7rem",
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
                          fontSize: isMobile ? "0.85rem" : "0.88rem",
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

      {/* CTA Section - Responsive padding */}
      <div style={{ padding: isMobile ? "4rem 1.5rem" : "6rem 3rem 8rem" }}>
        <FadeUp>
          <div style={{ maxWidth: "50rem" }}>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: "clamp(1.5rem,4vw,3.2rem)",
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
                padding: isMobile ? "0.9rem 2rem" : "1rem 2.5rem",
                border: "none",
                cursor: "none",
                transition: "opacity 0.3s",
                width: isMobile ? "100%" : "auto",
              }}
              onMouseEnter={(e) => (e.target.style.opacity = "0.82")}
              onMouseLeave={(e) => (e.target.style.opacity = "1")}
            >
              Start a Conversation
            </button>
          </div>
        </FadeUp>
      </div>

      {/* How it works - Interactive Experience */}
<div
  style={{
    padding: isMobile ? "4rem 1.5rem" : "7rem 3rem",
    background: "#F5F0E8",
    overflow: "hidden",
  }}
>
  <FadeUp>
    <h2
      style={{
        fontFamily: "'Cormorant Garamond',serif",
        fontSize: "clamp(2rem,5vw,3.5rem)",
        textAlign: "center",
        marginBottom: "4rem",
      }}
    >
      How it works
    </h2>
  </FadeUp>

  {/* INTERACTIVE STEPS */}
  <InteractiveSteps isMobile={isMobile} />

  
   </div>
    </div>
  );
};
const InteractiveSteps = ({ isMobile }) => {
  const [active, setActive] = useState(0);

  const steps = [
    {
      title: "Discovery",
      desc: "We begin by understanding your vision, goals, and challenges through deep conversations.",
      icon: "🔍",
    },
    {
      title: "Strategy",
      desc: "We craft a clear roadmap aligned with your brand and direction.",
      icon: "📋",
    },
    {
      title: "Creation",
      desc: "Ideas take shape through thoughtful, refined design execution.",
      icon: "🎨",
    },
    {
      title: "Refinement",
      desc: "We iterate together, sharpening every detail.",
      icon: "🔄",
    },
    {
      title: "Launch",
      desc: "Final delivery with support to ensure lasting impact.",
      icon: "🚀",
    },
  ];

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
          marginBottom: "3rem",
          flexWrap: isMobile ? "wrap" : "nowrap",
        }}
      >
        {steps.map((step, i) => (
          <div
            key={i}
            onClick={() => setActive(i)}
            onMouseEnter={() => !isMobile && setActive(i)}
            style={{
              flex: 1,
              cursor: "pointer",
              textAlign: "center",
              padding: "1rem",
              transition: "all 0.3s ease",
              transform: active === i ? "scale(1.05)" : "scale(0.95)",
              opacity: active === i ? 1 : 0.4,
            }}
          >
            <div style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>
              {step.icon}
            </div>
            <div
              style={{
                fontFamily: "'DM Mono',monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
              }}
            >
              0{i + 1}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          position: "relative",
          minHeight: "220px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {steps.map((step, i) => (
          <div
            key={i}
            style={{
              position: i === active ? "relative" : "absolute",
              opacity: i === active ? 1 : 0,
              transform: i === active ? "translateY(0px)" : "translateY(30px)",
              transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
              textAlign: "center",
              maxWidth: "600px",
            }}
          >
            <h3
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: isMobile ? "1.8rem" : "2.5rem",
                marginBottom: "1rem",
              }}
            >
              {step.title}
            </h3>

            <p
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: isMobile ? "0.95rem" : "1.05rem",
                lineHeight: 1.7,
                opacity: 0.7,
              }}
            >
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "3rem",
          height: "2px",
          background: "rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            width: `${((active + 1) / steps.length) * 100}%`,
            height: "100%",
            background: "#080806",
            transition: "width 0.4s ease",
          }}
        />
      </div>
    </div>
  );
};