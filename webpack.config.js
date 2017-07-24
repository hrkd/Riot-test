var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './source/javascripts/index.js'
  ],
  output: {
    path: path.join(__dirname, '.dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tag$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: [{loader:'riot-tag-loader'}],
      },
      {
        test: /\.js[x]?$|\.tag$/,
        enforce: 'post',
        use:[{loader: 'babel-loader'}],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.tag']
  },
  plugins: [
  ]
}
