/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/portfolio-prithvi",
  assetPrefix: "/portfolio-prithvi/", // Ensures static assets like images load correctly
  output: "export", // This enables static export
  images: {
    loader: "akamai",
    path: "", // Ensures paths are relative
  },
};

export default nextConfig;
