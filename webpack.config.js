const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const outputDir = path.join(__dirname, 'build/');

module.exports = {
  entry: './lib/js/src/Index.bs.js',
  output: {
    path: outputDir,
    publicPath: outputDir,
    filename: 'Index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: false
    })
  ],
  devServer: {
    compress: true,
    contentBase: outputDir,
    port: process.env.PORT || 8000,
    historyApiFallback: true
  }
};
