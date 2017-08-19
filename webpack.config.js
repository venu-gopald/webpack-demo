
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HTMLWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: path.join(__dirname, 'app/index.js'),
  output: {
    path: __dirname + '/dist', // `dist` is the destination
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/, //Check for all js files
        use: 'babel-loader',
        exclude: /(node_modules)/,
      },
      {
        test: /\.(css)$/, //Check for sass or scss file names
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HTMLWebpackPlugin({
      title: 'Caching',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor-[hash].min.js',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime',
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.IgnorePlugin(/^\.\/locale$/,/moment$/),
    //compile time plugins
    new webpack.DefinePlugin({
      'process.env.NODE_ENV' :'"development"',
    }),
    //webpack-dev-server enhancement plugins
    new DashboardPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  //To run development server
  devServer: {
    contentBase: __dirname + '/dist',
  },

  devtool: 'eval-source-map', // Default development sourcemap
};

module.exports = config;