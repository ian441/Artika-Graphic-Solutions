import nodemailer from "nodemailer";

const requireEnv = (name) => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} is required`);
  }
  return value;
};

const getTransporter = () =>
  nodemailer.createTransport({
    host: requireEnv("SMTP_HOST"),
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: requireEnv("SMTP_USER"),
      pass: requireEnv("SMTP_PASS"),
    },
  });

const escapeHtml = (value) =>
  `${value || ""}`
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export const sendContactEmail = async ({ name, email, project, message }) => {
  const transporter = getTransporter();
  const to = requireEnv("CONTACT_TO_EMAIL");
  const from = process.env.CONTACT_FROM_EMAIL || requireEnv("SMTP_USER");
  const subject = `New Artika inquiry from ${name}`;

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeProject = escapeHtml(project || "Not specified");
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  await transporter.sendMail({
    to,
    from,
    replyTo: email,
    subject,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Project Type: ${project || "Not specified"}`,
      "",
      "Message:",
      message,
    ].join("\n"),
    html: `
      <div style="font-family: Georgia, serif; color: #222; line-height: 1.6;">
        <h2 style="margin-bottom: 16px;">New website inquiry</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Project Type:</strong> ${safeProject}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      </div>
    `,
  });
};
