import React, { useEffect, useState } from "react";
import { AdminProjects } from "./AdminProjects";
import { AdminGallery } from "./AdminGallery";
import { AdminServices } from "./AdminServices";
import { AdminSite } from "./AdminSite";
import { saveStore } from "../utils/storage";
import { STORE_KEY_PROJECTS, STORE_KEY_GALLERY, STORE_KEY_SERVICES, STORE_KEY_SITE } from "../utils/constants";

export const AdminPanel = ({ projects, setProjects, gallery, setGallery, services, setServices, site, setSite, onLogout }) => {
  const [tab, setTab] = useState("dashboard");
  const [toast, setToast] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const save = async (key, val, setter, successMsg) => {
    setter(val);
    await saveStore(key, val);
    showToast(successMsg || "Saved successfully");
  };

  useEffect(() => {
    const syncViewport = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth <= 1100);
    };

    syncViewport();
    window.addEventListener("resize", syncViewport);
    return () => window.removeEventListener("resize", syncViewport);
  }, []);

  useEffect(() => {
    if (!isTablet) setMenuOpen(false);
  }, [isTablet]);

  useEffect(() => {
    if (!(isTablet && menuOpen)) return undefined;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isTablet, menuOpen]);

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: "◆" },
    { id: "projects", label: "Portfolio", icon: "▣" },
    { id: "gallery", label: "Gallery", icon: "◉" },
    { id: "services", label: "Services", icon: "◎" },
    { id: "site", label: "Site Settings", icon: "◇" },
  ];

  const currentTab = tabs.find((item) => item.id === tab);
  const selectTab = (nextTab) => {
    setTab(nextTab);
    if (isTablet) setMenuOpen(false);
  };

  const responsive = { isMobile, isTablet };

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
      padding: isMobile ? "0.78rem 0.9rem" : "0.6rem 0.9rem",
      marginBottom: "1.2rem",
      transition: "border-color 0.3s",
    },
    btn: {
      fontFamily: "'DM Mono',monospace",
      fontSize: "0.62rem",
      letterSpacing: isMobile ? "0.14em" : "0.18em",
      padding: isMobile ? "0.8rem 1rem" : "0.6rem 1.4rem",
      border: "none",
      cursor: isTablet ? "pointer" : "none",
      textTransform: "uppercase",
      transition: "opacity 0.3s",
    },
    card: {
      background: "rgba(255,255,255,0.025)",
      border: "1px solid rgba(200,169,126,0.08)",
      padding: isMobile ? "1.1rem" : "1.5rem",
      marginBottom: "1rem",
    },
    h3: {
      fontFamily: "'Cormorant Garamond',serif",
      fontSize: isMobile ? "1.15rem" : "1.3rem",
      color: "#F5F0E8",
      fontWeight: 400,
      margin: "0 0 1rem",
    },
    sectionTitle: {
      fontFamily: "'Cormorant Garamond',serif",
      fontSize: isMobile ? "1.55rem" : "1.8rem",
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
        flexDirection: isTablet ? "column" : "row",
        fontFamily: "'DM Mono',monospace",
        cursor: isTablet ? "auto" : "none",
        position: "relative",
      }}
    >
      {toast && (
        <div
          style={{
            position: "fixed",
            top: isMobile ? "1rem" : "1.5rem",
            right: isMobile ? "1rem" : "1.5rem",
            zIndex: 9999,
            background: toast.type === "success" ? "#C8A97E" : "#c87e7e",
            color: "#080806",
            fontFamily: "'DM Mono',monospace",
            fontSize: "0.62rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            padding: isMobile ? "0.75rem 1rem" : "0.8rem 1.5rem",
            animation: "fadeInDown 0.3s ease",
            maxWidth: isMobile ? "calc(100vw - 2rem)" : "none",
          }}
        >
          {toast.type === "success" ? "✓" : "✕"} {toast.msg}
        </div>
      )}

      {isTablet && (
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 30,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            padding: isMobile ? "1rem" : "1.15rem 1.5rem",
            background: "rgba(4,4,2,0.94)",
            borderBottom: "1px solid rgba(200,169,126,0.08)",
            backdropFilter: "blur(18px)",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: isMobile ? "1rem" : "1.1rem",
                letterSpacing: "0.2em",
                color: "#C8A97E",
                textTransform: "uppercase",
              }}
            >
              Artika
            </div>
            <div
              style={{
                fontSize: "0.52rem",
                letterSpacing: "0.16em",
                color: "rgba(255,255,255,0.24)",
                textTransform: "uppercase",
                marginTop: "0.2rem",
              }}
            >
              {currentTab?.label}
            </div>
          </div>
          <button
            data-hover
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            style={{
              ...S.btn,
              color: "#F5F0E8",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(200,169,126,0.12)",
            }}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      )}

      {isTablet && menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(4px)",
            zIndex: 25,
          }}
        />
      )}

      <aside
        style={{
          width: isTablet ? "min(22rem, calc(100vw - 2rem))" : "15rem",
          background: "#040402",
          borderRight: "1px solid rgba(200,169,126,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "2rem 0",
          flexShrink: 0,
          position: isTablet ? "fixed" : "relative",
          top: isTablet ? 0 : "auto",
          left: isTablet ? 0 : "auto",
          bottom: isTablet ? 0 : "auto",
          zIndex: isTablet ? 35 : "auto",
          transform: isTablet ? (menuOpen ? "translateX(0)" : "translateX(-105%)") : "none",
          transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)",
          boxShadow: isTablet ? "18px 0 40px rgba(0,0,0,0.35)" : "none",
          overflowY: "auto",
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
              onClick={() => selectTab(t.id)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: "0.9rem",
                padding: "0.85rem 1.5rem",
                background: tab === t.id ? "rgba(200,169,126,0.08)" : "transparent",
                border: "none",
                borderLeft: tab === t.id ? "2px solid #C8A97E" : "2px solid transparent",
                color: tab === t.id ? "#C8A97E" : "rgba(255,255,255,0.35)",
                fontSize: "0.6rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                cursor: isTablet ? "pointer" : "none",
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

      <main
        style={{
          flex: 1,
          overflow: "auto",
          padding: isMobile ? "1rem" : isTablet ? "1.5rem" : "3rem",
        }}
      >
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
              <h1
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: isMobile ? "2rem" : isTablet ? "2.35rem" : "2.8rem",
                  color: "#F5F0E8",
                  fontWeight: 300,
                  margin: 0,
                }}
              >
                Studio Dashboard
              </h1>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2,1fr)" : "repeat(4,1fr)",
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
                <div key={label} style={{ background: "#060604", padding: isMobile ? "1.35rem" : "2rem" }}>
                  <div style={{ fontSize: "1.2rem", marginBottom: "0.5rem", color: "rgba(200,169,126,0.5)" }}>{icon}</div>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond',serif",
                      fontSize: isMobile ? "2.2rem" : "2.8rem",
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
            <div style={{ display: "grid", gridTemplateColumns: isTablet ? "1fr" : "1fr 1fr", gap: "1.5rem" }}>
              <div style={{ ...S.card }}>
                <div style={{ ...S.h3 }}>Recent Projects</div>
                {projects.slice(0, 4).map((p) => (
                  <div
                    key={p.id}
                    style={{
                      display: "flex",
                      alignItems: isMobile ? "flex-start" : "center",
                      flexDirection: isMobile ? "column" : "row",
                      gap: "1rem",
                      padding: "0.8rem 0",
                      borderBottom: "1px solid rgba(200,169,126,0.05)",
                    }}
                  >
                    <img src={p.img} style={{ width: "2.8rem", height: "2.8rem", objectFit: "cover", flexShrink: 0 }} />
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
                ].map(([label, nextTab]) => (
                  <button
                    key={label}
                    data-hover
                    onClick={() => selectTab(nextTab)}
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

        {tab === "projects" && (
          <AdminProjects
            projects={projects}
            setProjects={(p) => save(STORE_KEY_PROJECTS, p, setProjects, "Projects saved")}
            S={S}
            showToast={showToast}
            ui={responsive}
          />
        )}
        {tab === "gallery" && (
          <AdminGallery
            gallery={gallery}
            setGallery={(g) => save(STORE_KEY_GALLERY, g, setGallery, "Gallery saved")}
            S={S}
            showToast={showToast}
            ui={responsive}
          />
        )}
        {tab === "services" && (
          <AdminServices
            services={services}
            setServices={(s) => save(STORE_KEY_SERVICES, s, setServices, "Services saved")}
            S={S}
            ui={responsive}
          />
        )}
        {tab === "site" && (
          <AdminSite
            site={site}
            setSite={(s) => save(STORE_KEY_SITE, s, setSite, "Site settings saved")}
            S={S}
            ui={responsive}
          />
        )}
      </main>
    </div>
  );
};
