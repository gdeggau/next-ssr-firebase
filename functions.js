const { https } = require("firebase-functions");
const { default: next } = require("next");

const isDev = process.env.NODE_ENV !== "production";

const server = next({
  dev: isDev,
  conf: { distDir: ".next" },
});

const nextJsHandler = server.getRequestHandler();
exports.nextServer = https.onRequest(async (req, res) => {
  return server.prepare().then(() => nextJsHandler(req, res));
});
