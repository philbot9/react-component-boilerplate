const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const BUILD_DIR = path.resolve(__dirname, 'dev')
const SRC_DIR = path.resolve(__dirname, 'src')
const TOOLS_DIR = path.resolve(__dirname, 'tools')

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('development'),
  __DEV__: true
}

const config = {
  entry: [ TOOLS_DIR + '/demo.js', SRC_DIR + '/index.js' ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, BUILD_DIR),
    compress: true,
    port: 3001
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Demo',
      template: 'tools/demo.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      inject: true
    }),

    new webpack.DefinePlugin(GLOBALS),
  ]
}

module.exports = config
