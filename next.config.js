/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
rewrites: async () => [
  {
    source: "/public/ml.html",
    destination: "/pages/api/ml.js",
  },
],
  (module.exports = nextConfig);
