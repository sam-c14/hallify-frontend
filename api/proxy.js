const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = createProxyMiddleware({
  target: "https://hallbackend.onrender.com",
  changeOrigin: true,
  pathRewrite: { "^/api": "" },
});
