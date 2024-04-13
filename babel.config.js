module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.json'],
        alias: {
          '@': './src',
        },
      },
    ],
    ['@babel/plugin-transform-flow-strip-types', {loose: true}],
    ['@babel/plugin-transform-private-methods', {loose: true}],
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    // ['transform-remove-console'],
    [
      'babel-plugin-idx',
      {
        importName: './idx',
      },
    ],
    'react-native-reanimated/plugin', // this has to be list last
  ],
}
