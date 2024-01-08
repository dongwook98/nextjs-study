/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  /**
   * redirects는 A -> B로 다시 데리고가는 느낌
   * 사용자가 잘못된 경로로 접근시 알맞게 보내줌
   */
  async redirects() {
    return [
      {
        source: '/products/deleted_forever',
        destination: '/products',
        permanent: true, // 서치엔진한테 /products/deleted_forever가 영원히 삭제되었으니 /products를 캐시해도된다고 알려주는것
      },
      {
        source: '/products/deleted_temp',
        destination: '/products',
        permanent: false,
      },
    ];
  },
  /**
   * rewrites는 A를 B로 대체하는 느낌
   * 복잡한 경로대신 사용자에게 간단한 경로 제공
   * 프로젝트 구조 노출 X
   */
  async rewrites() {
    return [
      {
        source: '/dongwook',
        destination: '/about/me/dongwook',
      },
      {
        source: '/items/:slug',
        destination: '/products/:slug',
      },
    ];
  },
};

module.exports = nextConfig;
