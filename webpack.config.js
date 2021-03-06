const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  mode: 'none',
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      test: /\.jsx?$/,
      use: [ 'babel-loader' ]
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
