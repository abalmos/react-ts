const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const PACKAGE_NAME = 'tracker';

module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    https: true,
    hot: true,
    stats: 'minimal'
  },
  mode: 'development',
  entry: path.resolve('src', 'index.tsx'),
  output: {
    path: path.resolve('dist'),
    filename: `${PACKAGE_NAME}.[hash].js`
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'ts-loader',
            options: {
              allowTsInNodeModules: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.tsx', '.ts']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ tempalte: './public/index.html' }),
    new StyleLintPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
