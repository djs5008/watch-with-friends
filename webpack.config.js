const path = require('path');

module.exports = {
  entry: {
    background: './src/background.js',
    content: './src/content.js',
  },
  output: {
    filename: './js/[name].js',
    path: path.resolve(__dirname, 'out'),
    sourceMapFilename: './js/[name].js.map'
  },
  devtool: 'cheap-module-source-map'
};