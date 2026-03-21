import { DEFAULT_GALLERY, DEFAULT_PROJECTS, DEFAULT_SERVICES, DEFAULT_SITE } from "../src/utils/constants.js";
import { query } from "./db.js";

export const CONTENT_KEYS = ["projects", "gallery", "services", "site"];

const DEFAULT_CONTENT = {
  projects: DEFAULT_PROJECTS,
  gallery: DEFAULT_GALLERY,
  services: DEFAULT_SERVICES,
  site: DEFAULT_SITE,
};

export const ensureSchema = async () => {
  await query(`
    CREATE TABLE IF NOT EXISTS content_entries (
      key TEXT PRIMARY KEY,
      value JSONB NOT NULL,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);

  for (const key of CONTENT_KEYS) {
    await query(
      `
        INSERT INTO content_entries (key, value)
        VALUES ($1, $2::jsonb)
        ON CONFLICT (key) DO NOTHING
      `,
      [key, JSON.stringify(DEFAULT_CONTENT[key])]
    );
  }
};

export const getAllContent = async () => {
  const { rows } = await query("SELECT key, value FROM content_entries");

  return rows.reduce(
    (acc, row) => {
      acc[row.key] = row.value;
      return acc;
    },
    { ...DEFAULT_CONTENT }
  );
};

export const updateContent = async (key, value) => {
  if (!CONTENT_KEYS.includes(key)) {
    throw new Error("Unsupported content key");
  }

  const { rows } = await query(
    `
      INSERT INTO content_entries (key, value, updated_at)
      VALUES ($1, $2::jsonb, NOW())
      ON CONFLICT (key)
      DO UPDATE SET value = EXCLUDED.value, updated_at = NOW()
      RETURNING key, value, updated_at
    `,
    [key, JSON.stringify(value)]
  );

  return rows[0];
};
