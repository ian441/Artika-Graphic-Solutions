import "dotenv/config";
import cors from "cors";
import express from "express";
import { createAdminToken, requireAdmin } from "./auth.js";
import { ensureSchema, getAllContent, updateContent, CONTENT_KEYS } from "./contentStore.js";
import { pool } from "./db.js";
import { sendContactEmail } from "./mailer.js";

const app = express();
const port = Number(process.env.PORT || 4000);

const corsOrigins = (process.env.CORS_ORIGIN || "http://localhost:3000,http://127.0.0.1:3000")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: corsOrigins,
    credentials: false,
  })
);
app.use(express.json({ limit: "2mb" }));

app.get("/api/health", async (_req, res) => {
  try {
    await pool.query("SELECT 1");
    res.json({ ok: true });
  } catch {
    res.status(500).json({ ok: false });
  }
});

app.post("/api/auth/login", (req, res) => {
  const submittedPassword = `${req.body?.password || ""}`;
  const expectedPassword = process.env.ADMIN_PASSWORD;

  if (!expectedPassword) {
    res.status(500).json({ error: "ADMIN_PASSWORD is not configured" });
    return;
  }

  if (submittedPassword !== expectedPassword) {
    res.status(401).json({ error: "Invalid password" });
    return;
  }

  res.json({ token: createAdminToken() });
});

app.post("/api/contact", async (req, res) => {
  const name = `${req.body?.name || ""}`.trim();
  const email = `${req.body?.email || ""}`.trim();
  const project = `${req.body?.project || ""}`.trim();
  const message = `${req.body?.message || ""}`.trim();

  if (!name || !email || !message) {
    res.status(400).json({ error: "Name, email, and message are required" });
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    res.status(400).json({ error: "Please enter a valid email address" });
    return;
  }

  try {
    await sendContactEmail({ name, email, project, message });
    res.json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact email", error);
    res.status(500).json({ error: "Failed to send inquiry email" });
  }
});

app.get("/api/content", async (_req, res) => {
  try {
    const content = await getAllContent();
    res.json(content);
  } catch (error) {
    res.status(500).json({ error: "Failed to load content" });
  }
});

app.put("/api/content/:key", requireAdmin, async (req, res) => {
  const { key } = req.params;
  const { value } = req.body || {};

  if (!CONTENT_KEYS.includes(key)) {
    res.status(404).json({ error: "Unknown content key" });
    return;
  }

  if (typeof value === "undefined") {
    res.status(400).json({ error: "Missing value" });
    return;
  }

  try {
    const updated = await updateContent(key, value);
    res.json(updated);
  } catch {
    res.status(500).json({ error: "Failed to save content" });
  }
});

const start = async () => {
  await ensureSchema();
  app.listen(port, () => {
    console.log(`Artika API listening on http://localhost:${port}`);
  });
};

start().catch((error) => {
  console.error("Failed to start API", error);
  process.exit(1);
});
