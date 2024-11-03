/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'lostsagakr-cdn-image.valofe.com',
              port: '', // Kosongkan jika tidak ada port khusus
              pathname: '/**', // Sesuaikan dengan path yang diperlukan
          },
      ],
  },
};

export default nextConfig;