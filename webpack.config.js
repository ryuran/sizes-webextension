const path = require('path');

module.exports = {
  entry: {
    background: './src/background.js',
    imagesSizes: './src/imagesSizes.js'
  },
  mode: 'production',
  optimization: {
    minimize: false
  },
  output: {
    path: path.resolve(__dirname, 'build/scripts'),
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd'
  }
};
