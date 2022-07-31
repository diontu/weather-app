const path = require('path');
const webpack = require('webpack');
require('dotenv').config({
  path: path.resolve(__dirname, '../environment/.env'),
});
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(path.resolve(__dirname, '../environment/.env'));

const devServer = {
  static: {
    publicPath: '../public/index.html',
    directory: path.resolve(__dirname, '../public'),
  },
  historyApiFallback: true,
  hot: true,
  compress: true,
  port: 8000,
};

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../public'),
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer,
  module: {
    rules: [
      {
        test: /\.?(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.WEATHER_API_KEY': JSON.stringify(
        process.env.WEATHER_API_KEY
      ),
    }),
    new HtmlWebpackPlugin({
      title: 'Weather Web App', //TODO
      template: 'config/template.html',
    }),
  ],
};
