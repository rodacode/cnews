const generateSitemap = require("./scripts/generate-sitemap");

module.exports = {
  // images: { domains: ["rcm-eu.amazon-adsystem.com"] },
  webpack: (config, { isServer }) => {
    if (isServer) {
      // generateSitemap();
    }
    return config;
  },
};
