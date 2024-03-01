/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
    webpack: (config, { isServer, webpack }) => {
        return config;
    },        
    env: {
        NEXTAUTH_URL: "http://localhost:4000",
        NEXTAUTH_SECRET: "kkowHC0+WwAEvsQr7NKRBwdKvAKMUIMjmWPDYWjOe4w="
    },
    images: {
        domains: ['vinafreshfruit.vn'],        
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '*',
            port: '',
            pathname: '/**',
          },
        ],
    },    
};

export default withNextIntl(nextConfig);
