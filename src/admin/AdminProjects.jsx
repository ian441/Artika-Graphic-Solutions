import React, { useState } from "react";
import { AdminConfirmDialog } from "./AdminConfirmDialog";
import { AdminImageField } from "./AdminImageField";

export const AdminProjects = ({ projects, setProjects, S, showToast, ui = {} }) => {
  const { isMobile, isTablet } = ui;
  const blank = {
    id: "",
    title: "",
    category: "Brand Design",
    year: new Date().getFullYear().toString(),
    color: "#C8A97E",
    bg: "#0A0A08",
    desc: "",
    img: "",
    tags: [],
    featured: false,
  };
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(blank);
  const [pendingDelete, setPendingDelete] = useState(null);
  const upd = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const cats = [
    "Brand Design",
    "Motion Graphics",
    "Publication Design",
    "UI/UX Design",
    "Type Design",
    "Illustration",
    "Photography",
  ];

  const startEdit = (p) => {
    setForm({ ...p, tags: (p.tags || []).join(", ") });
    setEditing(p.id);
  };
  const startNew = () => {
    setForm({ ...blank, id: String(Date.now()).slice(-4), tags: "" });
    setEditing("new");
  };
  const cancel = () => {
    setEditing(null);
    setForm(blank);
  };

  const save = () => {
    if (!form.title || !form.img) {
      showToast("Title and image are required", "error");
      return;
    }
    const p = { ...form, tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean) };
    if (editing === "new") setProjects([...projects, p]);
    else setProjects(projects.map((x) => (x.id === editing ? p : x)));
    cancel();
  };

  const del = (item) => {
    setPendingDelete(item);
  };

  const toggleFeatured = (id) => setProjects(projects.map((p) => (p.id === id ? { ...p, featured: !p.featured } : p)));

  return (
    <div>
      <AdminConfirmDialog
        open={!!pendingDelete}
        title="Delete project?"
        message={
          pendingDelete
            ? `This will permanently remove "${pendingDelete.title}" from the portfolio.`
            : ""
        }
        confirmLabel="Delete Project"
        onCancel={() => setPendingDelete(null)}
        onConfirm={() => {
          setProjects(projects.filter((p) => p.id !== pendingDelete.id));
          setPendingDelete(null);
          showToast("Project deleted");
        }}
        ui={ui}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: isTablet ? "stretch" : "flex-start",
          flexDirection: isTablet ? "column" : "row",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        <h2 style={{ ...S.sectionTitle, margin: 0, border: "none", padding: 0 }}>Portfolio Projects</h2>
        <button data-hover onClick={startNew} style={{ ...S.btn, color: "#080806", background: "#C8A97E", width: isTablet ? "100%" : "auto" }}>
          + Add Project
        </button>
      </div>

      {editing && (
        <div
          style={{
            background: "rgba(200,169,126,0.04)",
            border: "1px solid rgba(200,169,126,0.15)",
            padding: isMobile ? "1rem" : "2rem",
            marginBottom: "2rem",
          }}
        >
          <h3 style={{ ...S.h3 }}>{editing === "new" ? "New Project" : "Edit Project"}</h3>
          <div style={{ display: "grid", gridTemplateColumns: isTablet ? "1fr" : "1fr 1fr", gap: "1.5rem" }}>
            <div>
              <label style={S.label}>Title *</label>
              <input value={form.title} onChange={(e) => upd("title", e.target.value)} style={S.input} placeholder="Project title" />
              <label style={S.label}>Category</label>
              <select
                value={form.category}
                onChange={(e) => upd("category", e.target.value)}
                style={{
                  ...S.input,
                  padding: "0.6rem 0.9rem",
                  fontFamily: "'DM Mono',monospace",
                  fontStyle: "normal",
                  fontSize: "0.75rem",
                  color: "rgba(245,240,232,0.7)",
                  background: "rgba(8,8,6,0.8)",
                }}
              >
                {cats.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <label style={S.label}>Year</label>
              <input value={form.year} onChange={(e) => upd("year", e.target.value)} style={S.input} placeholder="2024" />
              <label style={S.label}>Tags (comma-separated)</label>
              <input value={form.tags} onChange={(e) => upd("tags", e.target.value)} style={S.input} placeholder="Identity, Packaging, Typography" />
            </div>
            <div>
              <AdminImageField
                value={form.img}
                onChange={(value) => upd("img", value)}
                label="Project Image"
                S={S}
                isMobile={isMobile}
                showToast={showToast}
              />
              <label style={S.label}>Accent Color</label>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: isMobile ? "stretch" : "center", flexDirection: isMobile ? "column" : "row", marginBottom: "1.2rem" }}>
                <input
                  type="color"
                  value={form.color}
                  onChange={(e) => upd("color", e.target.value)}
                  style={{ width: isMobile ? "100%" : "2.5rem", height: "2.5rem", border: "none", background: "none", cursor: isTablet ? "pointer" : "none" }}
                />
                <input value={form.color} onChange={(e) => upd("color", e.target.value)} style={{ ...S.input, marginBottom: 0, width: isMobile ? "100%" : "8rem" }} />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.2rem" }}>
                <input type="checkbox" checked={form.featured} onChange={(e) => upd("featured", e.target.checked)} style={{ width: "1rem", height: "1rem", accentColor: "#C8A97E" }} />
                <label style={{ ...S.label, margin: 0 }}>Featured on homepage</label>
              </div>
            </div>
          </div>
          <label style={S.label}>Description</label>
          <textarea
            value={form.desc}
            onChange={(e) => upd("desc", e.target.value)}
            rows={isMobile ? 4 : 3}
            style={{ ...S.input, resize: "vertical", fontFamily: "'Playfair Display',serif", fontStyle: "italic" }}
            placeholder="Project description..."
          />
          <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem", flexDirection: isMobile ? "column" : "row" }}>
            <button data-hover onClick={save} style={{ ...S.btn, color: "#080806", background: "#C8A97E", width: isMobile ? "100%" : "auto" }}>
              Save Project
            </button>
            <button
              data-hover
              onClick={cancel}
              style={{
                ...S.btn,
                color: "rgba(255,255,255,0.4)",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.1)",
                width: isMobile ? "100%" : "auto",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div>
        {projects.map((p, i) => (
          <div
            key={p.id}
            style={{
              display: "flex",
              alignItems: isTablet ? "flex-start" : "center",
              flexDirection: isTablet ? "column" : "row",
              gap: "1rem",
              padding: isMobile ? "1rem" : "1rem 1.2rem",
              background: i % 2 === 0 ? "rgba(255,255,255,0.015)" : "transparent",
              border: "1px solid rgba(200,169,126,0.05)",
              marginBottom: "0.5rem",
            }}
          >
            <img
              src={p.img}
              style={{
                width: isMobile ? "100%" : "4rem",
                maxWidth: isMobile ? "100%" : "4rem",
                height: isMobile ? "10rem" : "3rem",
                objectFit: "cover",
                flexShrink: 0,
                border: "1px solid rgba(200,169,126,0.1)",
              }}
            />
            <div style={{ flex: 1, minWidth: 0, width: "100%" }}>
              <div style={{ display: "flex", alignItems: isMobile ? "flex-start" : "center", flexDirection: isMobile ? "column" : "row", gap: "0.75rem", marginBottom: "0.25rem" }}>
                <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1rem", color: "rgba(245,240,232,0.75)" }}>{p.title}</span>
                {p.featured && (
                  <span
                    style={{
                      fontSize: "0.5rem",
                      color: "#C8A97E",
                      border: "1px solid rgba(200,169,126,0.3)",
                      padding: "0.08rem 0.4rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      flexShrink: 0,
                    }}
                  >
                    Featured
                  </span>
                )}
              </div>
              <div
                style={{
                  fontSize: "0.56rem",
                  color: "rgba(255,255,255,0.25)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                {p.category} - {p.year}
              </div>
            </div>
            <div style={{ display: "flex", gap: "0.5rem", flexShrink: 0, width: isMobile ? "100%" : "auto", flexWrap: "wrap" }}>
              <button
                data-hover
                onClick={() => toggleFeatured(p.id)}
                style={{
                  ...S.btn,
                  padding: "0.55rem 0.9rem",
                  color: p.featured ? "#C8A97E" : "rgba(255,255,255,0.25)",
                  background: "transparent",
                  border: "1px solid",
                  borderColor: p.featured ? "rgba(200,169,126,0.35)" : "rgba(255,255,255,0.07)",
                  flex: isMobile ? 1 : "initial",
                }}
                title="Toggle featured"
              >
                ★
              </button>
              <button
                data-hover
                onClick={() => startEdit(p)}
                style={{
                  ...S.btn,
                  padding: "0.55rem 0.9rem",
                  color: "rgba(245,240,232,0.5)",
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.07)",
                  flex: isMobile ? 1 : "initial",
                }}
              >
                Edit
              </button>
              <button
                data-hover
                onClick={() => del(p)}
                style={{
                  ...S.btn,
                  padding: "0.55rem 0.9rem",
                  color: "#c87e7e",
                  background: "transparent",
                  border: "1px solid rgba(200,126,126,0.15)",
                  flex: isMobile ? 1 : "initial",
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
