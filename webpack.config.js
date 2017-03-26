const webpack = require('webpack'),
  path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve('src'),
  devServer: {
    contentBase: './',
    historyApiFallback: true,
    inline: true,
    port: 8080
  },
  entry: [ './index.js' ],
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      test: /\.(js|jsx)$/
    }]
  },
  node: {
    dns: 'empty',
    net: 'empty'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'SERVER_NAME': process.env.SERVER_NAME
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    })
  ],
  resolve: {
    extensions: [ '.js', '.jsx', '.json' ]
  }
}
