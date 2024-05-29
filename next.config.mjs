/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'v6xebcddns1pkdoe.public.blob.vercel-storage.com',
          pathname: '/company_logos/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  