import crypto from "crypto";

const TOKEN_TTL_MS = 1000 * 60 * 60 * 12;

const base64UrlEncode = (value) => Buffer.from(value).toString("base64url");
const base64UrlDecode = (value) => Buffer.from(value, "base64url").toString("utf8");

const getSigningSecret = () => process.env.ADMIN_TOKEN_SECRET || process.env.ADMIN_PASSWORD || "change-me";

const sign = (value) =>
  crypto.createHmac("sha256", getSigningSecret()).update(value).digest("base64url");

export const createAdminToken = () => {
  const payload = JSON.stringify({
    role: "admin",
    exp: Date.now() + TOKEN_TTL_MS,
  });
  const encodedPayload = base64UrlEncode(payload);
  return `${encodedPayload}.${sign(encodedPayload)}`;
};

export const verifyAdminToken = (token) => {
  if (!token || !token.includes(".")) return false;

  const [encodedPayload, signature] = token.split(".");
  if (!encodedPayload || !signature) return false;
  if (sign(encodedPayload) !== signature) return false;

  try {
    const payload = JSON.parse(base64UrlDecode(encodedPayload));
    return payload.role === "admin" && Number(payload.exp) > Date.now();
  } catch {
    return false;
  }
};

export const requireAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : "";

  if (!verifyAdminToken(token)) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  next();
};
