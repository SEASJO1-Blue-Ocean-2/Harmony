var path = require('path');
var webpack = require('webpack');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: [`${SRC_DIR}/index.jsx`],
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js|.jsx?/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      }]
  },
  stats: {
    colors: true
  },
  externals: {
    'react': 'React'
  },
  devtool: 'source-map'
};