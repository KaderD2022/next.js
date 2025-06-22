const isProd = process.env.NODE_ENV === "production";
 /**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // basePath: isProd ? "/Next.js-Tailwind-CSS-Portfolio-Template" : "",
  // assetPrefix: isProd ? "/Next.js-Tailwind-CSS-Portfolio-Template/" : "",
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
}; 
 
module.exports = nextConfig;