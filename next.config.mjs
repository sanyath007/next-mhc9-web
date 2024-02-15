/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            "localhost",
            process.env.UPLOAD_URL.match(/(http(?:s)?:\/\/)(.*)/)[2], // Valid Upload Image domain.
            "mhc9dmh.com",
        ],
    },
};

export default nextConfig;
