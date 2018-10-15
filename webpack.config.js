const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    layout: './client/views/layout/index.js',
    index: './client/views/index/index.js'
  },
  output: {
    filename: 'js/[name].[chunkhash:8].js',
    path: path.resolve('dist')
  },
  devServer: {
    hot: true
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'vendors', // 打包第三方库
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    new MiniCssExtractPlugin({
      filename: 'style/[name].[chunkhash:8].css'
    }),
    // 公用模版页面，包含通用js
    new HtmlWebpackPlugin({
      template: 'client/views/layout/index.html',
      filename: 'layout/index.html',
      chunks: ['vendors', 'layout', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'client/views/index/index.html',
      filename: 'index/index.html',
      chunks: ['index']
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
          name: 'img/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(html)$/,
        loader: 'html-withimg-loader?min=false'// min=false 禁用去除换行符
      }
    ]
  }
};

// // 获取入口
// function getViewsJs (path) {
//   const files = glob.sync(path);
//   const entry = {};
//   files.forEach(item => {

//   });
// }

// function getViewsHtml (path) {
//   const files = glob.sync(path);
//   const entry = {};
//   files.forEach(item => {

//   });
// }

// var obj = getViewsJs('client/views/**/*.js');
