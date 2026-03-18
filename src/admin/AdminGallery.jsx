import React, { useState } from "react";
import { AdminConfirmDialog } from "./AdminConfirmDialog";

export const AdminGallery = ({ gallery, setGallery, S, showToast, ui = {} }) => {
  const { isMobile, isTablet } = ui;
  const blank = {
    id: Date.now(),
    title: "",
    medium: "Photography",
    year: new Date().getFullYear().toString(),
    img: "",
    color: "#C8A97E",
    visible: true,
  };
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(blank);
  const [pendingDelete, setPendingDelete] = useState(null);
  const upd = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const mediums = [
    "Photography",
    "Digital Print",
    "Generative Art",
    "Mixed Media",
    "Print",
    "Illustration",
    "Type Design",
    "Digital Art",
    "Painting",
  ];

  const startNew = () => {
    setForm({ ...blank, id: Date.now() });
    setEditing("new");
  };
  const startEdit = (g) => {
    setForm(g);
    setEditing(g.id);
  };
  const cancel = () => {
    setEditing(null);
  };

  const save = () => {
    if (!form.title || !form.img) {
      showToast("Title and image URL are required", "error");
      return;
    }
    if (editing === "new") setGallery([...gallery, form]);
    else setGallery(gallery.map((g) => (g.id === editing ? form : g)));
    cancel();
  };

  const del = (item) => {
    setPendingDelete(item);
  };

  const toggle = (id) => setGallery(gallery.map((g) => (g.id === id ? { ...g, visible: !g.visible } : g)));

  return (
    <div>
      <AdminConfirmDialog
        open={!!pendingDelete}
        title="Delete artwork?"
        message={
          pendingDelete
            ? `This will permanently remove "${pendingDelete.title}" from the gallery collection.`
            : ""
        }
        confirmLabel="Delete Artwork"
        onCancel={() => setPendingDelete(null)}
        onConfirm={() => {
          setGallery(gallery.filter((g) => g.id !== pendingDelete.id));
          setPendingDelete(null);
          showToast("Artwork deleted");
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
        <h2 style={{ ...S.sectionTitle, margin: 0, border: "none", padding: 0 }}>Gallery Collection</h2>
        <button data-hover onClick={startNew} style={{ ...S.btn, color: "#080806", background: "#C8A97E", width: isTablet ? "100%" : "auto" }}>
          + Add Artwork
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
          <h3 style={S.h3}>{editing === "new" ? "New Artwork" : "Edit Artwork"}</h3>
          <div style={{ display: "grid", gridTemplateColumns: isTablet ? "1fr" : "1fr 1fr", gap: "1.5rem" }}>
            <div>
              <label style={S.label}>Title *</label>
              <input value={form.title} onChange={(e) => upd("title", e.target.value)} style={S.input} placeholder="Artwork title" />
              <label style={S.label}>Medium</label>
              <select
                value={form.medium}
                onChange={(e) => upd("medium", e.target.value)}
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
                {mediums.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
              <label style={S.label}>Year</label>
              <input value={form.year} onChange={(e) => upd("year", e.target.value)} style={S.input} placeholder="2024" />
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.2rem" }}>
                <input type="checkbox" checked={form.visible} onChange={(e) => upd("visible", e.target.checked)} style={{ width: "1rem", height: "1rem", accentColor: "#C8A97E" }} />
                <label style={{ ...S.label, margin: 0 }}>Visible in gallery</label>
              </div>
            </div>
            <div>
              <label style={S.label}>Image URL *</label>
              <input value={form.img} onChange={(e) => upd("img", e.target.value)} style={S.input} placeholder="https://images.unsplash.com/..." />
              {form.img && (
                <img
                  src={form.img}
                  style={{
                    width: "100%",
                    height: isMobile ? "11rem" : "9rem",
                    objectFit: "cover",
                    marginBottom: "1.2rem",
                    border: "1px solid rgba(200,169,126,0.1)",
                  }}
                />
              )}
              <label style={S.label}>Accent Color</label>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: isMobile ? "stretch" : "center", flexDirection: isMobile ? "column" : "row" }}>
                <input
                  type="color"
                  value={form.color}
                  onChange={(e) => upd("color", e.target.value)}
                  style={{ width: isMobile ? "100%" : "2.5rem", height: "2.5rem", border: "none", background: "none", cursor: isTablet ? "pointer" : "none" }}
                />
                <input value={form.color} onChange={(e) => upd("color", e.target.value)} style={{ ...S.input, marginBottom: 0, width: isMobile ? "100%" : "8rem" }} />
              </div>
            </div>
          </div>
          <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem", flexDirection: isMobile ? "column" : "row" }}>
            <button data-hover onClick={save} style={{ ...S.btn, color: "#080806", background: "#C8A97E", width: isMobile ? "100%" : "auto" }}>
              Save Artwork
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

      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2,1fr)" : "repeat(3,1fr)", gap: "1px", background: "rgba(200,169,126,0.05)" }}>
        {gallery.map((g) => (
          <div key={g.id} style={{ background: "#060604", position: "relative" }}>
            <div style={{ position: "relative", overflow: "hidden", aspectRatio: "4/3" }}>
              <img
                src={g.img}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  filter: g.visible ? "none" : "grayscale(80%) opacity(0.4)",
                }}
              />
              {!g.visible && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(8,8,6,0.6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.58rem",
                      letterSpacing: "0.15em",
                      color: "rgba(255,255,255,0.45)",
                      textTransform: "uppercase",
                      border: "1px solid rgba(255,255,255,0.2)",
                      padding: "0.3rem 0.8rem",
                    }}
                  >
                    Hidden
                  </span>
                </div>
              )}
            </div>
            <div style={{ padding: isMobile ? "1rem" : "0.9rem" }}>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: "0.95rem",
                  color: "rgba(245,240,232,0.7)",
                  marginBottom: "0.25rem",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {g.title}
              </div>
              <div
                style={{
                  fontSize: "0.54rem",
                  color: g.color,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "0.75rem",
                }}
              >
                {g.medium}
              </div>
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                <button
                  data-hover
                  onClick={() => toggle(g.id)}
                  style={{
                    ...S.btn,
                    padding: "0.45rem 0.7rem",
                    fontSize: "0.54rem",
                    color: g.visible ? "#C8A97E" : "rgba(255,255,255,0.3)",
                    background: "transparent",
                    border: "1px solid",
                    borderColor: g.visible ? "rgba(200,169,126,0.3)" : "rgba(255,255,255,0.07)",
                    flex: isMobile ? 1 : "initial",
                  }}
                >
                  {g.visible ? "Visible" : "Hidden"}
                </button>
                <button
                  data-hover
                  onClick={() => startEdit(g)}
                  style={{
                    ...S.btn,
                    padding: "0.45rem 0.7rem",
                    fontSize: "0.54rem",
                    color: "rgba(245,240,232,0.45)",
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.07)",
                    flex: isMobile ? 1 : "initial",
                  }}
                >
                  Edit
                </button>
                <button
                  data-hover
                  onClick={() => del(g)}
                  style={{
                    ...S.btn,
                    padding: "0.45rem 0.7rem",
                    fontSize: "0.54rem",
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
          </div>
        ))}
      </div>
    </div>
  );
};
