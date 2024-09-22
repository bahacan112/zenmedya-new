/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.tvplus.com.tr",
        port: "33207", // Eğer port kullanmıyorsanız bu alanı boş bırakabilirsiniz
        pathname: "/**",
      },
    ],
  },

  reactStrictMode: false,
};

export default nextConfig;
