/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/portfolio-prithvi",
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
