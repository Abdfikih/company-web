/** @type {import('next').NextConfig} */

module.exports = {
  async redirects() {
    return [
      {
        source: "/admin",
        destination: "https://app.tina.io/signin",
        permanent: true,
        basePath: false,
      },
    ];
  },
  // Append the default value with md extensions
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx", "html"],
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    domains: ["res.cloudinary.com"],
  },
  compiler: {
    removeConsole: true,
  },
  async rewrites() {
    return [
      {
        source: "/cv",
        destination: "/paraSolutions's-cv.pdf",
      },
    ];
  },
};

// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
