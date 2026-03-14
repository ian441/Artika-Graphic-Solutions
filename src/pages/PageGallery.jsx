import React, { useState } from "react";
import { FadeUp } from "../components/SharedComponents";

export const PageGallery = ({ gallery }) => {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");
  const visible = gallery.filter((g) => g.visible);
  const mediums = ["All", ...[...new Set(visible.map((g) => g.medium))]];
  const filtered = filter === "All" ? visible : visible.filter((g) => g.medium === filter);

  return (
    <div style={{ background: "#0A0906", minHeight: "100vh", paddingTop: "5rem" }}>
      {/* Modal */}
      {selected && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(8,8,6,0.97)",
            zIndex: 800,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "3rem",
          }}
          onClick={() => setSelected(null)}
        >
          <div
            style={{ maxWidth: "80vw", position: "relative" }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.img}
              alt={selected.title}
              style={{
                maxWidth: "100%",
                maxHeight: "72vh",
                objectFit: "contain",
                display: "block",
              }}
            />
            <div
              style={{
                padding: "1.5rem 0 0",
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
                    letterSpacing: "0.2em",
                    color: selected.color,
                    textTransform: "uppercase",
                    marginBottom: "0.4rem",
                  }}
                >
                  {selected.medium} — {selected.year}
                </div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: "1.9rem",
                    color: "#F5F0E8",
                    fontWeight: 300,
                  }}
                >
                  {selected.title}
                </div>
              </div>
              <button
                data-hover
                onClick={() => setSelected(null)}
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.15em",
                  color: "rgba(255,255,255,0.38)",
                  background: "none",
                  border: "1px solid rgba(255,255,255,0.1)",
                  padding: "0.45rem 1rem",
                  cursor: "none",
                  textTransform: "uppercase",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#C8A97E";
                  e.target.style.borderColor = "#C8A97E";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "rgba(255,255,255,0.38)";
                  e.target.style.borderColor = "rgba(255,255,255,0.1)";
                }}
              >
                Close ✕
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div
        style={{
          padding: "5rem 3rem 3rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "40%",
            background: "radial-gradient(ellipse at right,rgba(200,169,126,0.04),transparent 70%)",
            pointerEvents: "none",
          }}
        />
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
            Art Gallery
          </div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: "clamp(3rem,6vw,6rem)",
              fontWeight: 300,
              color: "#F5F0E8",
              lineHeight: 0.94,
              margin: "0 0 1.2rem",
            }}
          >
            The Studio
            <br />
            <em style={{ color: "rgba(245,240,232,0.28)" }}>Collection</em>
          </h1>
          <p
            style={{
              fontFamily: "'Playfair Display',serif",
              fontStyle: "italic",
              fontSize: "0.98rem",
              color: "rgba(245,240,232,0.38)",
              maxWidth: "32rem",
              lineHeight: 1.82,
              marginBottom: "2.5rem",
            }}
          >
            A curated selection of works exploring form, colour, and conceptual expression.
          </p>
          <div style={{ display: "flex", gap: "0.45rem", flexWrap: "wrap" }}>
            {mediums.map((m) => (
              <button
                key={m}
                data-hover
                onClick={() => setFilter(m)}
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "0.59rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "0.42rem 0.9rem",
                  border: "1px solid",
                  borderColor: filter === m ? "#C8A97E" : "rgba(200,169,126,0.16)",
                  color: filter === m ? "#080806" : "rgba(255,255,255,0.33)",
                  background: filter === m ? "#C8A97E" : "transparent",
                  cursor: "none",
                  transition: "all 0.3s",
                }}
              >
                {m}
              </button>
            ))}
          </div>
        </FadeUp>
      </div>

      {/* Masonry Gallery */}
      <div style={{ padding: "3rem", columns: 3, columnGap: "1.5px" }}>
        {filtered.map((g, i) => (
          <FadeUp key={g.id} delay={i * 0.065}>
            <div
              data-hover
              style={{
                breakInside: "avoid",
                marginBottom: "1.5px",
                position: "relative",
                overflow: "hidden",
                cursor: "none",
              }}
              onClick={() => setSelected(g)}
            >
              <img
                src={g.img}
                alt={g.title}
                style={{
                  width: "100%",
                  display: "block",
                  transition: "transform 0.8s cubic-bezier(0.16,1,0.3,1),filter 0.5s",
                  filter: "grayscale(18%) brightness(0.83)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.04)";
                  e.target.style.filter = "grayscale(0%) brightness(1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.filter = "grayscale(18%) brightness(0.83)";
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "0.9rem",
                  right: "0.9rem",
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "0.53rem",
                  color: "rgba(255,255,255,0.22)",
                  background: "rgba(8,8,6,0.6)",
                  padding: "0.2rem 0.45rem",
                }}
              >
                {String(g.id).padStart(2, "0")}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>

      {/* Quote Section */}
      <div
        style={{
          padding: "5rem 3rem 8rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem",
          alignItems: "center",
          borderTop: "1px solid rgba(200,169,126,0.05)",
        }}
      >
        <FadeUp>
          <div
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: "clamp(1.8rem,3vw,3rem)",
              fontWeight: 300,
              color: "#F5F0E8",
              lineHeight: 1.2,
            }}
          >
            "Art is not what you see,
            <br />
            but what you make
            <br />
            <em style={{ color: "#C8A97E" }}>others see."</em>
          </div>
          <div
            style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: "0.58rem",
              letterSpacing: "0.18em",
              color: "rgba(255,255,255,0.22)",
              textTransform: "uppercase",
              marginTop: "1.5rem",
            }}
          >
            — Edgar Degas
          </div>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p
            style={{
              fontFamily: "'Playfair Display',serif",
              fontStyle: "italic",
              fontSize: "0.95rem",
              color: "rgba(245,240,232,0.38)",
              lineHeight: 1.9,
            }}
          >
            Our gallery is an evolving archive of experimental work — pieces that exist outside
            client briefs, purely for the exploration of form, colour, and materiality.
          </p>
        </FadeUp>
      </div>
    </div>
  );
};
