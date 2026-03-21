const API_BASE = (import.meta.env.VITE_API_BASE_URL || "/api").replace(/\/$/, "");
const TOKEN_KEY = "artika_admin_token";

const CONTENT_KEY_MAP = {
  artika_projects: "projects",
  artika_gallery: "gallery",
  artika_services: "services",
  artika_site: "site",
};

const getToken = () => {
  if (typeof window === "undefined" || !window.sessionStorage) return "";
  return window.sessionStorage.getItem(TOKEN_KEY) || "";
};

const request = async (path, options = {}) => {
  const headers = new Headers(options.headers || {});

  if (!headers.has("Content-Type") && options.body) {
    headers.set("Content-Type", "application/json");
  }

  const token = getToken();
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers,
  });

  const contentType = response.headers.get("content-type") || "";
  const data = contentType.includes("application/json") ? await response.json() : null;

  if (!response.ok) {
    throw new Error(data?.error || `Request failed with status ${response.status}`);
  }

  return data;
};

export const loadContentBundle = async (fallbacks) => {
  try {
    const data = await request("/content");
    return {
      projects: data.projects ?? fallbacks.projects,
      gallery: data.gallery ?? fallbacks.gallery,
      services: data.services ?? fallbacks.services,
      site: data.site ?? fallbacks.site,
    };
  } catch {
    return fallbacks;
  }
};

export const saveStore = async (key, val) => {
  const contentKey = CONTENT_KEY_MAP[key] || key;
  await request(`/content/${contentKey}`, {
    method: "PUT",
    body: JSON.stringify({ value: val }),
  });
  return "api";
};

export const loginAdmin = async (password) => {
  const data = await request("/auth/login", {
    method: "POST",
    body: JSON.stringify({ password }),
  });

  if (typeof window !== "undefined" && window.sessionStorage) {
    window.sessionStorage.setItem(TOKEN_KEY, data.token);
  }

  return data.token;
};

export const submitContactForm = async (payload) =>
  request("/contact", {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const clearAdminSession = () => {
  if (typeof window === "undefined" || !window.sessionStorage) return;
  window.sessionStorage.removeItem(TOKEN_KEY);
};

export const isAdminAuthenticated = () => Boolean(getToken());
