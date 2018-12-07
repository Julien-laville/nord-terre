const path = require('path');
const outputDir = path.join(__dirname, 'public/build/');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    path: outputDir,
    publicPath: outputDir,
    filename: 'bundle.js',
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'template.html',
    inject: 'body',
  })],
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['@babel/react']
        }
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    compress: true,
    contentBase: path.join(__dirname, 'public/build/'),
    port: process.env.PORT || 8000,
    historyApiFallback: true
  }
};
