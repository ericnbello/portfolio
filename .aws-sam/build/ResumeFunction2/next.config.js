/** @type {import('next').NextConfig} */
module.exports = {
    // output: 'standalone',
    exportPathMap: async function (defaultPathMap) {
      return {
        '/': { page: '/' },
        '/about': { page: '/about' },
        // '/blog': { page: '/blog' },
        '/contact': { page: '/contact' },
        '/experience': { page: '/experience' },
        '/projects': { page: '/projects' },
      };
    },
    trailingSlash: true,
    images: {
      loader: 'akamai',
      path: '',
    },
    async rewrites() {
      return [
        {
          source: "/blog",
          destination: "https://starter-kit-ten-pearl.vercel.app/blog",
        },
        {
          source: "/blog/:path*",
          destination: "https://starter-kit-ten-pearl.vercel.app/blog/:path*",
        },
      ];
    },
  }