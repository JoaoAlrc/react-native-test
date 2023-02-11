module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ios.js',
            '.android.js',
            '.js',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.json',
          ],
          alias: {
            '@components': './src/components',
            '@screens': './src/screens',
            '@utils': './src/utils',
            '@assets': './assets',
            '@constants': './src/constants',
            '@navigation': './src/navigation',
            '@services': './src/services',
            '@context': './src/context',
          },
        },
      ],
    ],
  };
};
