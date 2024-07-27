const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://rest-api-production-ee75.up.railway.app',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  );
};
