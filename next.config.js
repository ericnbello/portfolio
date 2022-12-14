/** @type {import('next').NextConfig} */
module.exports = {
    // output: 'standalone',
    exportPathMap: async function (defaultPathMap) {
      return {
        '/': { page: '/' },
      };
    },
    images: {
      loader: 'akamai',
      path: '',
    },
  }