/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",          // builds a static site into the "out" folder
  images: { unoptimized: true },

  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
