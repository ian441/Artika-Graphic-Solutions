import React, { useState } from "react";
import { FadeUp } from "../components/SharedComponents";

export const PagePortfolio = ({ projects }) => {
  const [filter, setFilter] = useState("All");
  const [hovered, setHovered] = useState(null);
  const cats = ["All", ...[...new Set(projects.map((p) => p.category))]];
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div style={{ background: "#080806", minHeight: "100vh", paddingTop: "5rem" }}>
      <div
        style={{
          padding: "5rem 3rem 3rem",
          borderBottom: "1px solid rgba(200,169,126,0.07)",
        }}
      >
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
            Portfolio
          </div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: "clamp(3rem,6vw,6rem)",
              fontWeight: 300,
              color: "#F5F0E8",
              lineHeight: 0.94,
              margin: "0 0 2.5rem",
            }}
          >
            Selected
            <br />
            <em style={{ color: "rgba(245,240,232,0.28)" }}>projects</em>
          </h1>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {cats.map((c) => (
              <button
                key={c}
                data-hover
                onClick={() => setFilter(c)}
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "0.61rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  padding: "0.48rem 1.1rem",
                  border: "1px solid",
                  borderColor: filter === c ? "#C8A97E" : "rgba(200,169,126,0.2)",
                  color: filter === c ? "#080806" : "rgba(255,255,255,0.38)",
                  background: filter === c ? "#C8A97E" : "transparent",
                  cursor: "none",
                  transition: "all 0.3s",
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </FadeUp>
      </div>

      {/* Grid View */}
      <div style={{ padding: "4rem 3rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "1.5px",
            background: "rgba(200,169,126,0.04)",
          }}
        >
          {filtered.map((p, i) => (
            <FadeUp key={p.id} delay={i * 0.06}>
              <div
                data-hover
                style={{
                  position: "relative",
                  overflow: "hidden",
                  aspectRatio: "4/3",
                  cursor: "none",
                  background: p.bg,
                }}
                onMouseEnter={() => setHovered(p.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.85s cubic-bezier(0.16,1,0.3,1),opacity 0.45s",
                    transform: hovered === p.id ? "scale(1.08)" : "scale(1)",
                    opacity: hovered === p.id ? 0.65 : 0.88,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(135deg,${p.bg}bb 0%,transparent 100%)`,
                    opacity: hovered === p.id ? 1 : 0.35,
                    transition: "opacity 0.45s",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    padding: "1.7rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span
                      style={{
                        fontFamily: "'DM Mono',monospace",
                        fontSize: "0.57rem",
                        letterSpacing: "0.14em",
                        color: "rgba(255,255,255,0.28)",
                      }}
                    >
                      {p.id}
                    </span>
                    <span
                      style={{
                        fontFamily: "'DM Mono',monospace",
                        fontSize: "0.57rem",
                        color: p.color,
                      }}
                    >
                      {p.year}
                    </span>
                  </div>
                  <div
                    style={{
                      transform: hovered === p.id ? "translateY(0)" : "translateY(14px)",
                      opacity: hovered === p.id ? 1 : 0,
                      transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'DM Mono',monospace",
                        fontSize: "0.58rem",
                        letterSpacing: "0.16em",
                        color: p.color,
                        textTransform: "uppercase",
                        marginBottom: "0.55rem",
                      }}
                    >
                      {p.category}
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond',serif",
                        fontSize: "1.55rem",
                        fontWeight: 400,
                        color: "#F5F0E8",
                        margin: "0 0 0.55rem",
                        lineHeight: 1.1,
                      }}
                    >
                      {p.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Playfair Display',serif",
                        fontStyle: "italic",
                        fontSize: "0.8rem",
                        color: "rgba(245,240,232,0.48)",
                        lineHeight: 1.65,
                        margin: "0 0 0.9rem",
                      }}
                    >
                      {p.desc}
                    </p>
                    <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                      {(p.tags || []).map((t) => (
                        <span
                          key={t}
                          style={{
                            fontFamily: "'DM Mono',monospace",
                            fontSize: "0.53rem",
                            letterSpacing: "0.12em",
                            color: "rgba(255,255,255,0.28)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            padding: "0.18rem 0.5rem",
                            textTransform: "uppercase",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* List View */}
      <div style={{ padding: "0 3rem 7rem" }}>
        <FadeUp>
          <div
            style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.24em",
              color: "rgba(255,255,255,0.18)",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            All Projects
          </div>
        </FadeUp>
        {projects.map((p, i) => (
          <FadeUp key={p.id + "-l"} delay={i * 0.04}>
            <div
              data-hover
              style={{
                display: "grid",
                gridTemplateColumns: "4rem 1fr 14rem 6rem",
                alignItems: "center",
                gap: "2rem",
                padding: "1.7rem 3rem",
                borderTop: "1px solid rgba(200,169,126,0.07)",
                margin: "0 -3rem",
                transition: "background 0.3s",
                cursor: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(200,169,126,0.03)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <span
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "0.58rem",
                  color: "rgba(255,255,255,0.18)",
                }}
              >
                {p.id}
              </span>
              <span
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: "1.38rem",
                  color: "rgba(245,240,232,0.72)",
                  fontWeight: 400,
                }}
              >
                {p.title}
              </span>
              <span
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "0.58rem",
                  letterSpacing: "0.13em",
                  color: p.color,
                  textTransform: "uppercase",
                }}
              >
                {p.category}
              </span>
              <span
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "0.57rem",
                  color: "rgba(255,255,255,0.18)",
                  textAlign: "right",
                }}
              >
                {p.year}
              </span>
            </div>
          </FadeUp>
        ))}
        <div style={{ borderTop: "1px solid rgba(200,169,126,0.07)" }} />
      </div>
    </div>
  );
};
