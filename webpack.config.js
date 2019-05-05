const path = require('path');

module.exports = {
  entry: {
    'background.js': './src/background.js',
    'content.js': './src/content.js',
  },
  output: {
    filename: '[name]',
    path: path.resolve(__dirname, 'out'),
    sourceMapFilename: '[name].map'
  },
  devtool: 'cheap-module-source-map'
};