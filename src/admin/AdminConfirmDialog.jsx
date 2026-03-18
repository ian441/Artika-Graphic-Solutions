import React, { useEffect } from "react";

export const AdminConfirmDialog = ({
  open,
  title = "Confirm action",
  message,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  tone = "danger",
  onConfirm,
  onCancel,
  ui = {},
}) => {
  const { isMobile, isTablet } = ui;

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onCancel?.();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onCancel]);

  if (!open) return null;

  const confirmBackground = tone === "danger" ? "#c87e7e" : "#C8A97E";
  const confirmColor = "#080806";

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: isMobile ? "1rem" : "1.5rem",
      }}
    >
      <div
        onClick={onCancel}
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.68)",
          backdropFilter: "blur(8px)",
        }}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="admin-confirm-title"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: isMobile ? "100%" : "30rem",
          background: "linear-gradient(180deg, rgba(14,14,11,0.98) 0%, rgba(8,8,6,0.98) 100%)",
          border: "1px solid rgba(200,169,126,0.14)",
          boxShadow: "0 24px 70px rgba(0,0,0,0.45)",
          padding: isMobile ? "1.25rem" : "1.75rem",
        }}
      >
        <div
          style={{
            fontFamily: "'DM Mono',monospace",
            fontSize: "0.56rem",
            letterSpacing: "0.18em",
            color: tone === "danger" ? "rgba(200,126,126,0.85)" : "rgba(200,169,126,0.75)",
            textTransform: "uppercase",
            marginBottom: "0.85rem",
          }}
        >
          Please confirm
        </div>
        <h3
          id="admin-confirm-title"
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: isMobile ? "1.5rem" : "1.9rem",
            color: "#F5F0E8",
            fontWeight: 400,
            margin: "0 0 0.8rem",
            lineHeight: 1.05,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: isMobile ? "0.95rem" : "1rem",
            color: "rgba(245,240,232,0.62)",
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          {message}
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: isTablet ? "column-reverse" : "row",
            gap: "0.75rem",
            marginTop: "1.5rem",
          }}
        >
          <button
            data-hover
            onClick={onCancel}
            style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: "0.62rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              padding: isMobile ? "0.95rem 1rem" : "0.85rem 1.2rem",
              border: "1px solid rgba(255,255,255,0.1)",
              background: "transparent",
              color: "rgba(255,255,255,0.55)",
              cursor: isTablet ? "pointer" : "none",
              flex: 1,
            }}
          >
            {cancelLabel}
          </button>
          <button
            data-hover
            onClick={onConfirm}
            style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: "0.62rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              padding: isMobile ? "0.95rem 1rem" : "0.85rem 1.2rem",
              border: "none",
              background: confirmBackground,
              color: confirmColor,
              cursor: isTablet ? "pointer" : "none",
              flex: 1,
            }}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
};
