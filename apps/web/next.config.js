module.exports = {
  reactStrictMode: true,
  experimental: {
    transpilePackages: ["ui", 'client'],
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      // your aliases
      'react-native$': 'react-native-web'
    }
    return config
  }
};
