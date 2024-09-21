/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Protokol: https kullanıyoruz
        hostname: "i.ytimg.com", // Domain: i.ytimg.com
        pathname: "/vi/**", // Resimlerin yolu için pattern: tüm /vi/ altındaki resimler
      },
    ],
  },

  reactStrictMode: false,
};

export default nextConfig;
