/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // double-invokingが有効化されていると仕様としてコンポーネントが2回レンダリングされることになる
};

export default nextConfig;
