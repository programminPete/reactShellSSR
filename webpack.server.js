const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
  // Tell webpack node, not for the browser/
  target: 'node',
  // Tell webpck that we're building a bundle for nodeJS, rather than 
  // for the browser
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  }
}

module.exports = merge(baseConfig, config);