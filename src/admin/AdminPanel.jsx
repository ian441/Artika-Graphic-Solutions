import React, { useState } from "react";
import { AdminProjects } from "./AdminProjects";
import { AdminGallery } from "./AdminGallery";
import { AdminServices } from "./AdminServices";
import { AdminSite } from "./AdminSite";
import { Cursor } from "../components/SharedComponents";
import { saveStore } from "../utils/storage";
import { STORE_KEY_PROJECTS, STORE_KEY_GALLERY, STORE_KEY_SERVICES, STORE_KEY_SITE } from "../utils/constants";

export const AdminPanel = ({ projects, setProjects, gallery, setGallery, services, setServices, site, setSite, onLogout }) => {
  const [tab, setTab] = useState("dashboard");
  const [toast, setToast] = useState(null);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const save = async (key, val, setter, successMsg) => {
    setter(val);
    await saveStore(key, val);
    showToast(successMsg || "Saved successfully");
  };

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: "◈" },
    { id: "projects", label: "Portfolio", icon: "▣" },
    { id: "gallery", label: "Gallery", icon: "◉" },
    { id: "services", label: "Services", icon: "◎" },
    { id: "site", label: "Site Settings", icon: "◇" },
  ];

  const S = {
    label: {
      fontFamily: "'DM Mono',monospace",
      fontSize: "0.58rem",
      letterSpacing: "0.2em",
      color: "rgba(255,255,255,0.3)",
      textTransform: "uppercase",
      marginBottom: "0.5rem",
      display: "block",
    },
    input: {
      width: "100%",
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(200,169,126,0.12)",
      outline: "none",
      fontFamily: "'Playfair Display',serif",
      fontStyle: "italic",
      fontSize: "0.95rem",
      color: "rgba(245,240,232,0.75)",
      caretColor: "#C8A97E",
      padding: "0.6rem 0.9rem",
      marginBottom: "1.2rem",
      transition: "border-color 0.3s",
    },
    btn: {
      fontFamily: "'DM Mono',monospace",
      fontSize: "0.62rem",
      letterSpacing: "0.18em",
      padding: "0.6rem 1.4rem",
      border: "none",
      cursor: "none",
      textTransform: "uppercase",
      transition: "opacity 0.3s",
    },
    card: {
      background: "rgba(255,255,255,0.025)",
      border: "1px solid rgba(200,169,126,0.08)",
      padding: "1.5rem",
      marginBottom: "1rem",
    },
    h3: {
      fontFamily: "'Cormorant Garamond',serif",
      fontSize: "1.3rem",
      color: "#F5F0E8",
      fontWeight: 400,
      margin: "0 0 1rem",
    },
    sectionTitle: {
      fontFamily: "'Cormorant Garamond',serif",
      fontSize: "1.8rem",
      color: "#F5F0E8",
      fontWeight: 300,
      margin: "0 0 2rem",
      borderBottom: "1px solid rgba(200,169,126,0.08)",
      paddingBottom: "1rem",
    },
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#060604",
        display: "flex",
        fontFamily: "'DM Mono',monospace",
        cursor: "none",
      }}
    >
      {/* Toast */}
      {toast && (
        <div
          style={{
            position: "fixed",
            top: "1.5rem",
            right: "1.5rem",
            zIndex: 9999,
            background: toast.type === "success" ? "#C8A97E" : "#c87e7e",
            color: "#080806",
            fontFamily: "'DM Mono',monospace",
            fontSize: "0.62rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            padding: "0.8rem 1.5rem",
            animation: "fadeInDown 0.3s ease",
          }}
        >
          {toast.type === "success" ? "✓" : "✕"} {toast.msg}
        </div>
      )}

      {/* Sidebar */}
      <aside
        style={{
          width: "15rem",
          background: "#040402",
          borderRight: "1px solid rgba(200,169,126,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "2rem 0",
          flexShrink: 0,
        }}
      >
        <div style={{ padding: "0 1.5rem 2rem", borderBottom: "1px solid rgba(200,169,126,0.06)" }}>
          <div
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: "1rem",
              letterSpacing: "0.25em",
              color: "#C8A97E",
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          >
            Artika
          </div>
          <div
            style={{
              fontSize: "0.55rem",
              letterSpacing: "0.18em",
              color: "rgba(255,255,255,0.18)",
              textTransform: "uppercase",
              marginTop: "0.25rem",
            }}
          >
            Studio CMS
          </div>
        </div>
        <nav style={{ flex: 1, padding: "1.5rem 0" }}>
          {tabs.map((t) => (
            <button
              key={t.id}
              data-hover
              onClick={() => setTab(t.id)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: "0.9rem",
                padding: "0.75rem 1.5rem",
                background: tab === t.id ? "rgba(200,169,126,0.08)" : "transparent",
                border: "none",
                borderLeft: tab === t.id ? "2px solid #C8A97E" : "2px solid transparent",
                color: tab === t.id ? "#C8A97E" : "rgba(255,255,255,0.35)",
                fontSize: "0.6rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                cursor: "none",
                transition: "all 0.25s",
                textAlign: "left",
              }}
            >
              <span style={{ fontSize: "0.8rem" }}>{t.icon}</span>
              {t.label}
            </button>
          ))}
        </nav>
        <div style={{ padding: "1.5rem", borderTop: "1px solid rgba(200,169,126,0.06)" }}>
          <button
            data-hover
            onClick={onLogout}
            style={{
              ...S.btn,
              width: "100%",
              color: "rgba(255,255,255,0.3)",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#c87e7e")}
            onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.3)")}
          >
            ← Log Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, overflow: "auto", padding: "3rem" }}>
        {/* ── DASHBOARD ── */}
        {tab === "dashboard" && (
          <div>
            <div style={{ marginBottom: "2.5rem" }}>
              <div
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.28em",
                  color: "rgba(200,169,126,0.6)",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                Welcome back
              </div>
              <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2.8rem", color: "#F5F0E8", fontWeight: 300, margin: 0 }}>
                Studio Dashboard
              </h1>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: "1px",
                background: "rgba(200,169,126,0.06)",
                marginBottom: "2.5rem",
              }}
            >
              {[
                ["Projects", projects.length, "▣"],
                ["Gallery Items", gallery.filter((g) => g.visible).length, "◉"],
                ["Services", services.length, "◎"],
                ["Featured", projects.filter((p) => p.featured).length, "★"],
              ].map(([label, count, icon]) => (
                <div key={label} style={{ background: "#060604", padding: "2rem" }}>
                  <div style={{ fontSize: "1.2rem", marginBottom: "0.5rem", color: "rgba(200,169,126,0.5)" }}>{icon}</div>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond',serif",
                      fontSize: "2.8rem",
                      color: "#C8A97E",
                      fontWeight: 300,
                      lineHeight: 1,
                      marginBottom: "0.3rem",
                    }}
                  >
                    {count}
                  </div>
                  <div
                    style={{
                      fontSize: "0.58rem",
                      letterSpacing: "0.16em",
                      color: "rgba(255,255,255,0.22)",
                      textTransform: "uppercase",
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              <div style={{ ...S.card }}>
                <div style={{ ...S.h3 }}>Recent Projects</div>
                {projects.slice(0, 4).map((p) => (
                  <div
                    key={p.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      padding: "0.6rem 0",
                      borderBottom: "1px solid rgba(200,169,126,0.05)",
                    }}
                  >
                    <img src={p.img} style={{ width: "2.5rem", height: "2.5rem", objectFit: "cover", flexShrink: 0 }} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          fontSize: "0.68rem",
                          color: "rgba(245,240,232,0.65)",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {p.title}
                      </div>
                      <div
                        style={{
                          fontSize: "0.56rem",
                          color: p.color,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          marginTop: "0.15rem",
                        }}
                      >
                        {p.category}
                      </div>
                    </div>
                    {p.featured && (
                      <span
                        style={{
                          fontSize: "0.52rem",
                          color: "#C8A97E",
                          border: "1px solid rgba(200,169,126,0.3)",
                          padding: "0.1rem 0.4rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                        }}
                      >
                        Featured
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <div style={{ ...S.card }}>
                <div style={{ ...S.h3 }}>Quick Actions</div>
                {[
                  ["Add Project", "projects"],
                  ["Add Gallery Item", "gallery"],
                  ["Edit Services", "services"],
                  ["Update Site Info", "site"],
                ].map(([label, t]) => (
                  <button
                    key={label}
                    data-hover
                    onClick={() => setTab(t)}
                    style={{
                      ...S.btn,
                      display: "block",
                      width: "100%",
                      textAlign: "left",
                      marginBottom: "0.5rem",
                      color: "rgba(245,240,232,0.55)",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(200,169,126,0.08)",
                    }}
                    onMouseEnter={(e) => (e.target.style.borderColor = "rgba(200,169,126,0.3)")}
                    onMouseLeave={(e) => (e.target.style.borderColor = "rgba(200,169,126,0.08)")}
                  >
                    + {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── PROJECTS ── */}
        {tab === "projects" && (
          <AdminProjects
            projects={projects}
            setProjects={(p) => save(STORE_KEY_PROJECTS, p, setProjects, "Projects saved")}
            S={S}
            showToast={showToast}
          />
        )}
        {/* ── GALLERY ── */}
        {tab === "gallery" && (
          <AdminGallery
            gallery={gallery}
            setGallery={(g) => save(STORE_KEY_GALLERY, g, setGallery, "Gallery saved")}
            S={S}
            showToast={showToast}
          />
        )}
        {/* ── SERVICES ── */}
        {tab === "services" && <AdminServices services={services} setServices={(s) => save(STORE_KEY_SERVICES, s, setServices, "Services saved")} S={S} />}
        {/* ── SITE ── */}
        {tab === "site" && <AdminSite site={site} setSite={(s) => save(STORE_KEY_SITE, s, setSite, "Site settings saved")} S={S} />}
      </main>
    </div>
  );
};
