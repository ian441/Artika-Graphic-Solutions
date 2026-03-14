// ─── STORAGE HELPERS ──────────────────────────────────────────────────────────
export const loadStore = async (key, fallback) => {
  try {
    const r = await window.storage.get(key);
    return r ? JSON.parse(r.value) : fallback;
  } catch {
    return fallback;
  }
};

export const saveStore = async (key, val) => {
  try {
    await window.storage.set(key, JSON.stringify(val));
  } catch {}
};
