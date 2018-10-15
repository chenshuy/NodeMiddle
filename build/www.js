#!/usr/bin/env node

const http = require('http');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../webpack.config.js');
const app = require('../server/app');
const config = require('./index');

// const compiler = webpack(webpackConfig);
// app.use(webpackDevMiddleware(compiler, {
//   publicPath: 'dist'
// }));

const server = http.createServer(app.callback());
const port = process.env.PORT || config.port; // 设置端口

server.listen(port, () => {
  console.log('server on port http://localhost:%d', port);
});
