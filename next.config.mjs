/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "www.pexels.com" },
      { protocol: "https", hostname: "img.freepik.com" },
      { protocol: "https", hostname: "cdn4.iconfinder.com" },
      { protocol: "https", hostname: "cdn1.iconfinder.com" },
      { protocol: "https", hostname: "cdn0.iconfinder.com" },
    ],
  },
};

export default nextConfig;
