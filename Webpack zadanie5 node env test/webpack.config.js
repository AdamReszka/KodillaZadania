const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const OptimizeJsPlugin = require('optimize-js-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src') + '/index.js',
    output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  var env = process.env.NODE_ENV || 'development';
  var plugins: [
    new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
    })

  ];
  console.log('NODE_ENV:', env);

  if (env === 'production'){
    plugins.push(
      new webpack.optimize.UglifyJsPlugin(),
      new OptimizeJsPlugin({
        sourceMap: false
      })
    );
  }
};
