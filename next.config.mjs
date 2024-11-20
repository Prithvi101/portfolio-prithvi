/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/portfolio-prithvi",
  assetPrefix: "/portfolio-prithvi/", // Ensures static assets like images load correctly

  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
