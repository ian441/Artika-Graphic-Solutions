import React, { useState } from "react";

export const AdminServices = ({ services, setServices, S }) => {
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({});
  const upd = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const numerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

  const startEdit = (s) => {
    setForm(s);
    setEditing(s.id);
  };
  const startNew = () => {
    setForm({ id: Date.now(), num: numerals[services.length] || "VI", name: "", desc: "" });
    setEditing("new");
  };
  const cancel = () => setEditing(null);
  const save = () => {
    if (editing === "new") setServices([...services, form]);
    else setServices(services.map((s) => (s.id === editing ? form : s)));
    cancel();
  };
  const del = (id) => {
    if (confirm("Delete this service?")) setServices(services.filter((s) => s.id !== id));
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "2rem",
        }}
      >
        <h2 style={{ ...S.sectionTitle, margin: 0, border: "none", padding: 0 }}>Services</h2>
        <button
          data-hover
          onClick={startNew}
          style={{ ...S.btn, color: "#080806", background: "#C8A97E" }}
        >
          + Add Service
        </button>
      </div>

      {editing && (
        <div
          style={{
            background: "rgba(200,169,126,0.04)",
            border: "1px solid rgba(200,169,126,0.15)",
            padding: "2rem",
            marginBottom: "2rem",
          }}
        >
          <h3 style={S.h3}>{editing === "new" ? "New Service" : "Edit Service"}</h3>
          <label style={S.label}>Roman Numeral</label>
          <input
            value={form.num}
            onChange={(e) => upd("num", e.target.value)}
            style={{ ...S.input, width: "6rem" }}
            placeholder="I"
          />
          <label style={S.label}>Service Name</label>
          <input
            value={form.name}
            onChange={(e) => upd("name", e.target.value)}
            style={S.input}
            placeholder="Brand Identity"
          />
          <label style={S.label}>Description</label>
          <textarea
            value={form.desc}
            onChange={(e) => upd("desc", e.target.value)}
            rows={3}
            style={{
              ...S.input,
              resize: "vertical",
              fontFamily: "'Playfair Display',serif",
              fontStyle: "italic",
            }}
            placeholder="Service description…"
          />
          <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
            <button data-hover onClick={save} style={{ ...S.btn, color: "#080806", background: "#C8A97E" }}>
              Save Service
            </button>
            <button
              data-hover
              onClick={cancel}
              style={{
                ...S.btn,
                color: "rgba(255,255,255,0.4)",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {services.map((s, i) => (
        <div
          key={s.id}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "1.5rem",
            padding: "1.2rem",
            background: i % 2 === 0 ? "rgba(255,255,255,0.015)" : "transparent",
            border: "1px solid rgba(200,169,126,0.05)",
            marginBottom: "0.5rem",
          }}
        >
          <div
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: "1.3rem",
              color: "#C8A97E",
              fontStyle: "italic",
              flexShrink: 0,
              minWidth: "2rem",
            }}
          >
            {s.num}
          </div>
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: "1.1rem",
                color: "rgba(245,240,232,0.75)",
                marginBottom: "0.3rem",
              }}
            >
              {s.name}
            </div>
            <div
              style={{
                fontSize: "0.7rem",
                color: "rgba(255,255,255,0.25)",
                lineHeight: 1.6,
                fontFamily: "'Playfair Display',serif",
                fontStyle: "italic",
              }}
            >
              {s.desc}
            </div>
          </div>
          <div style={{ display: "flex", gap: "0.5rem", flexShrink: 0 }}>
            <button
              data-hover
              onClick={() => startEdit(s)}
              style={{
                ...S.btn,
                padding: "0.4rem 0.9rem",
                color: "rgba(245,240,232,0.5)",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              Edit
            </button>
            <button
              data-hover
              onClick={() => del(s.id)}
              style={{
                ...S.btn,
                padding: "0.4rem 0.9rem",
                color: "#c87e7e",
                background: "transparent",
                border: "1px solid rgba(200,126,126,0.15)",
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
