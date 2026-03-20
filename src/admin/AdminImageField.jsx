import React, { useRef, useState } from "react";

export const AdminImageField = ({ value, onChange, label = "Image", placeholder = "https://images.unsplash.com/...", S, isMobile, showToast }) => {
  const fileInputRef = useRef(null);
  const [isReading, setIsReading] = useState(false);

  const handlePickClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      showToast?.("Please select an image file", "error");
      e.target.value = "";
      return;
    }

    const reader = new FileReader();
    setIsReading(true);

    reader.onload = () => {
      onChange(reader.result);
      setIsReading(false);
      showToast?.("Image selected from device");
      e.target.value = "";
    };

    reader.onerror = () => {
      setIsReading(false);
      showToast?.("Couldn't read that image file", "error");
      e.target.value = "";
    };

    reader.readAsDataURL(file);
  };

  return (
    <>
      <label style={S.label}>{label} *</label>
      <input value={value} onChange={(e) => onChange(e.target.value)} style={S.input} placeholder={placeholder} />
      <div
        style={{
          display: "flex",
          gap: "0.75rem",
          marginBottom: "1rem",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <button
          type="button"
          data-hover
          onClick={handlePickClick}
          style={{
            ...S.btn,
            color: "#080806",
            background: "#C8A97E",
            width: isMobile ? "100%" : "auto",
          }}
        >
          {isReading ? "Loading image..." : "Choose From Device"}
        </button>
        <div
          style={{
            fontSize: "0.58rem",
            letterSpacing: "0.08em",
            color: "rgba(255,255,255,0.4)",
            textTransform: "uppercase",
            alignSelf: "center",
          }}
        >
          Works with mobile photo/files storage
        </div>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      {value && (
        <img
          src={value}
          style={{
            width: "100%",
            height: isMobile ? "10.5rem" : "8.5rem",
            objectFit: "cover",
            marginBottom: "1.2rem",
            border: "1px solid rgba(200,169,126,0.1)",
          }}
        />
      )}
    </>
  );
};
