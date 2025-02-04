
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Required for static export
    images: {
        unoptimized: true,  // GitHub Pages does not support Next.js image optimization
    },
    basePath: process.env.NODE_ENV === "production" ? "/Stuti-Portfolio" : "",
    assetPrefix: process.env.NODE_ENV === "production" ? "/Stuti-Portfolio/" : "",
};

export default nextConfig;

