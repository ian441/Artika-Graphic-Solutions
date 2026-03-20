import React, { useState } from "react";

export const AdminSite = ({ site, setSite, S, ui = {} }) => {
  const { isMobile, isTablet } = ui;
  const [form, setForm] = useState(site);
  const upd = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <div>
      <h2 style={S.sectionTitle}>Site Settings</h2>
      <div style={{ display: "grid", gridTemplateColumns: isTablet ? "1fr" : "1fr 1fr", gap: isMobile ? "1rem" : "2rem" }}>
        <div>
          <div style={{ ...S.card }}>
            <div style={{ ...S.h3 }}>Studio Identity</div>
            <label style={S.label}>Studio Name</label>
            <input value={form.studioName} onChange={(e) => upd("studioName", e.target.value)} style={S.input} />
            <label style={S.label}>Hero Tagline</label>
            <textarea
              value={form.tagline}
              onChange={(e) => upd("tagline", e.target.value)}
              rows={isMobile ? 3 : 2}
              style={{
                ...S.input,
                resize: "vertical",
                fontFamily: "'Playfair Display',serif",
                fontStyle: "italic",
              }}
            />
            <label style={S.label}>Established</label>
            <input value={form.established} onChange={(e) => upd("established", e.target.value)} style={S.input} placeholder="Est. 2026" />
          </div>
          <div style={{ ...S.card }}>
            <div style={{ ...S.h3 }}>Contact Info</div>
            <label style={S.label}>Email</label>
            <input value={form.email} onChange={(e) => upd("email", e.target.value)} style={S.input} />
            <label style={S.label}>Location</label>
            <input value={form.location} onChange={(e) => upd("location", e.target.value)} style={S.input} placeholder="Nairobi, Kenya" />
            <label style={S.label}>Instagram URL</label>
            <input value={form.socialInstagram || ""} onChange={(e) => upd("socialInstagram", e.target.value)} style={S.input} placeholder="https://instagram.com/yourhandle" />
            <label style={S.label}>LinkedIn URL</label>
            <input value={form.socialLinkedIn || ""} onChange={(e) => upd("socialLinkedIn", e.target.value)} style={S.input} placeholder="https://linkedin.com/in/yourhandle" />
            <label style={S.label}>Facebook URL</label>
            <input value={form.socialFacebook || ""} onChange={(e) => upd("socialFacebook", e.target.value)} style={S.input} placeholder="https://facebook.com/yourpage" />
            <label style={S.label}>Behance URL</label>
            <input value={form.socialBehance || ""} onChange={(e) => upd("socialBehance", e.target.value)} style={S.input} placeholder="https://behance.net/yourhandle" />
          </div>
        </div>
        <div>
          <div style={{ ...S.card }}>
            <div style={{ ...S.h3 }}>About Text</div>
            <label style={S.label}>Short Bio (shown prominently)</label>
            <textarea
              value={form.aboutShort}
              onChange={(e) => upd("aboutShort", e.target.value)}
              rows={isMobile ? 4 : 3}
              style={{
                ...S.input,
                resize: "vertical",
                fontFamily: "'Playfair Display',serif",
                fontStyle: "italic",
              }}
            />
            <label style={S.label}>Long Bio</label>
            <textarea
              value={form.aboutLong}
              onChange={(e) => upd("aboutLong", e.target.value)}
              rows={isMobile ? 5 : 3}
              style={{
                ...S.input,
                resize: "vertical",
                fontFamily: "'Playfair Display',serif",
                fontStyle: "italic",
              }}
            />
          </div>
          <div style={{ ...S.card }}>
            <div style={{ ...S.h3 }}>Statistics</div>
            {[
              ["stat1", "stat1Label"],
              ["stat2", "stat2Label"],
              ["stat3", "stat3Label"],
              ["stat4", "stat4Label"],
            ].map(([n, l], i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "6rem 1fr", gap: "0.75rem", marginBottom: 0 }}>
                <div>
                  <label style={{ ...S.label, fontSize: "0.52rem" }}>Number</label>
                  <input value={form[n]} onChange={(e) => upd(n, e.target.value)} style={{ ...S.input, textAlign: "center" }} placeholder="12+" />
                </div>
                <div>
                  <label style={{ ...S.label, fontSize: "0.52rem" }}>Label</label>
                  <input value={form[l]} onChange={(e) => upd(l, e.target.value)} style={S.input} placeholder="Years experience" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        data-hover
        onClick={() => setSite(form)}
        style={{
          ...S.btn,
          color: "#080806",
          background: "#C8A97E",
          marginTop: "1rem",
          padding: isMobile ? "0.95rem 1.2rem" : "0.8rem 2.5rem",
          width: isMobile ? "100%" : "auto",
        }}
      >
        Save All Settings
      </button>
    </div>
  );
};
