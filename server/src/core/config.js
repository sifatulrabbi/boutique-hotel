const DB_HOST = process.env.DB_HOST;
const PORT = parseInt(process.env.NODE_PORT || "8080");
const DB_NAME = process.env.DB_NAME;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const SMTP_EMAIL = process.env.SMTP_EMAIL;
const SMTP_PASSWORD = process.env.SMTP_PASSWORD;

// Verify the configs, if one of the config is not found then quit the server
if (!DB_HOST || !PORT || !DB_NAME || !DB_USERNAME || !DB_PASSWORD) {
  console.error();
  process.exit(1);
}

module.exports = {
  DB_HOST,
  PORT,
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
  SMTP_EMAIL,
  SMTP_PASSWORD,
};
