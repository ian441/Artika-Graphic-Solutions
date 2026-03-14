import React, { useState } from "react";
import { FadeUp } from "../components/SharedComponents";

export const PageContact = ({ site }) => {
  const [form, setForm] = useState({ name: "", email: "", project: "", message: "" });
  const [sent, setSent] = useState(false);
  const upd = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <div style={{ background: "#080806", minHeight: "100vh", paddingTop: "5rem" }}>
      <div
        style={{
          padding: "5rem 3rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "8rem",
          alignItems: "start",
        }}
      >
        <div>
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
              Get in Touch
            </div>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: "clamp(2.5rem,5.5vw,5.5rem)",
                fontWeight: 300,
                color: "#F5F0E8",
                lineHeight: 0.9,
                margin: "0 0 2.5rem",
              }}
            >
              Let's build
              <br />
              something
              <br />
              <em style={{ color: "#C8A97E" }}>unforgettable</em>
            </h1>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.8rem" }}>
              {[
                ["Email", site.email],
                ["Based in", site.location],
                ["Available for", "Global Projects"],
              ].map(([label, val]) => (
                <div key={label}>
                  <div
                    style={{
                      fontFamily: "'DM Mono',monospace",
                      fontSize: "0.57rem",
                      letterSpacing: "0.2em",
                      color: "rgba(255,255,255,0.22)",
                      textTransform: "uppercase",
                      marginBottom: "0.32rem",
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Playfair Display',serif",
                      fontStyle: "italic",
                      fontSize: "1rem",
                      color: "rgba(245,240,232,0.58)",
                    }}
                  >
                    {val}
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
        <FadeUp delay={0.15}>
          {sent ? (
            <div
              style={{
                padding: "4rem",
                border: "1px solid rgba(200,169,126,0.18)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: "3rem",
                  color: "#C8A97E",
                  fontStyle: "italic",
                  marginBottom: "1rem",
                }}
              >
                Thank you.
              </div>
              <p
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontStyle: "italic",
                  fontSize: "0.9rem",
                  color: "rgba(245,240,232,0.38)",
                  lineHeight: 1.8,
                }}
              >
                We will be in touch within 48 hours.
              </p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column" }}>
              {[
                { key: "name", label: "Full Name", placeholder: "Your name" },
                { key: "email", label: "Email Address", placeholder: "your@email.com" },
                {
                  key: "project",
                  label: "Project Type",
                  placeholder: "Brand identity, editorial, web…",
                },
              ].map((f) => (
                <div key={f.key} style={{ marginBottom: "2.2rem" }}>
                  <div
                    style={{
                      fontFamily: "'DM Mono',monospace",
                      fontSize: "0.57rem",
                      letterSpacing: "0.2em",
                      color: "rgba(255,255,255,0.22)",
                      textTransform: "uppercase",
                      marginBottom: "0.6rem",
                    }}
                  >
                    {f.label}
                  </div>
                  <input
                    value={form[f.key]}
                    onChange={(e) => upd(f.key, e.target.value)}
                    placeholder={f.placeholder}
                    style={{
                      width: "100%",
                      background: "none",
                      border: "none",
                      borderBottom: "1px solid rgba(200,169,126,0.14)",
                      outline: "none",
                      fontFamily: "'Playfair Display',serif",
                      fontStyle: "italic",
                      fontSize: "1rem",
                      color: "rgba(245,240,232,0.75)",
                      caretColor: "#C8A97E",
                      padding: "0 0 0.5rem",
                    }}
                  />
                </div>
              ))}
              <div style={{ marginBottom: "2.8rem" }}>
                <div
                  style={{
                    fontFamily: "'DM Mono',monospace",
                    fontSize: "0.57rem",
                    letterSpacing: "0.2em",
                    color: "rgba(255,255,255,0.22)",
                    textTransform: "uppercase",
                    marginBottom: "0.6rem",
                  }}
                >
                  Message
                </div>
                <textarea
                  value={form.message}
                  onChange={(e) => upd("message", e.target.value)}
                  placeholder="Tell us about your project…"
                  rows={5}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    borderBottom: "1px solid rgba(200,169,126,0.14)",
                    outline: "none",
                    fontFamily: "'Playfair Display',serif",
                    fontStyle: "italic",
                    fontSize: "1rem",
                    color: "rgba(245,240,232,0.75)",
                    caretColor: "#C8A97E",
                    resize: "none",
                    padding: "0 0 0.5rem",
                  }}
                />
              </div>
              <button
                data-hover
                onClick={() => {
                  if (form.name && form.email) setSent(true);
                }}
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "0.68rem",
                  letterSpacing: "0.2em",
                  color: "#080806",
                  background: "#C8A97E",
                  padding: "1.1rem 0",
                  width: "100%",
                  border: "none",
                  cursor: "none",
                  textTransform: "uppercase",
                  transition: "opacity 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.target.style.opacity = "1")}
              >
                Send Inquiry
              </button>
            </div>
          )}
        </FadeUp>
      </div>
      <div
        style={{
          background: "#C8A97E",
          padding: "4rem 3rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
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
              fontSize: "22vw",
              color: "rgba(8,8,6,0.05)",
              fontWeight: 700,
              userSelect: "none",
              lineHeight: 1,
            }}
          >
            AGS
          </div>
        </div>
        <div
          style={{
            position: "relative",
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: "clamp(1.5rem,3vw,2.8rem)",
            fontWeight: 300,
            color: "#080806",
            fontStyle: "italic",
          }}
        >
          Great design begins with a conversation.
        </div>
      </div>
    </div>
  );
};
