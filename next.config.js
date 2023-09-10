/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.twiliocdn.com',
        //hostname: '**',
        port: '',
        //pathname: 'AC41f9eb05cc84049fbc026ca91b527a81/**',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
