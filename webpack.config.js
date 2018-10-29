const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    main: './client/views/main.js',
    index: './client/views/index/index.js',
    test: './client/views/test/index.js'
  },
  output: {
    path: path.resolve('dist'),
    filename: 'js/[name].[chunkhash:4].js'
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    new MiniCssExtractPlugin({
      filename: 'style/[name].[chunkhash:4].css'
    }),
    new HtmlWebpackPlugin({
      template: 'client/views/base/footer.html',
      filename: 'views/base/footer.html',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      template: 'client/views/index/index.html',
      filename: 'views/index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: 'client/views/test/index.html',
      filename: 'views/test.html',
      chunks: ['test']
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.resolve('client'),
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/transform-runtime']
        }
      },
      {
        test: /\.(css|less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'img/[name].[hash:4].[ext]'
        }
      },
      {
        test: /\.(html)$/,
        loader: 'html-withimg-loader?min=false'// min=false 禁用去除换行符
      }
    ]
  }
};
