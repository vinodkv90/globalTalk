/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
        domains: ['lh3.googleusercontent.com'],
    }
};

export default nextConfig;
