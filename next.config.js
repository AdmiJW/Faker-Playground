/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    modularizeImports: {
        '@mui/material': {
            transform: '@mui/material/{{member}}',
        },
        '@mui/icons-material': {
            transform: '@mui/icons-material/{{member}}',
        },
        'react-icons/?(((\\w*)?/?)*)': {
            transform: '@react-icons/all-files/{{ matches.[1] }}/{{ member }}',
            skipDefaultConversion: true,
        },
    },
};

module.exports = nextConfig;
