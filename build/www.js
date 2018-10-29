#!/usr/bin/env node

const http = require('http');
const app = require('../server/app');
const config = require('./index');

const server = http.createServer(app.callback());
const port = process.env.PORT || config.port; // 设置端口

server.listen(port, () => {
  console.log('server on port http://localhost:%d', port);
});
