/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  ignoreDuringBuilds: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "is1-ssl.mzstatic.com",
        port: "",
        pathname: "/image/**",
      },
    ],
  },
};

module.exports = nextConfig;
