/** @type {import('next').NextConfig} */
module.exports = {
    // output: 'standalone',
    exportPathMap: async function (defaultPathMap) {
      return {
        '/': { page: '/' },
      };
    },
    trailingSlash: true,
    images: {
      loader: 'akamai',
      path: '',
    },
  }