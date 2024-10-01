/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // Ignora os avisos do ESLint durante o build
  },
  output: "export", // Adiciona a configuração para exportação
};

export default nextConfig;
