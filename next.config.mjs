const siteEnv = process.env.SITE_ENV;

console.log("SITE ENV: ", siteEnv);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // enables static page generation, needed for deployment through GitHub Pages
  basePath: siteEnv === "staging" ? "/sarah-taylor-freelance-website" : "",
  assetPrefix: siteEnv === "staging" ? "/sarah-taylor-freelance-website/" : "",
  trailingSlash: true,
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
