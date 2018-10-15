const axios = require('axios');
const config = require('../../build');

// 接口地址
const url = config.url;

const instance = axios.create({
  baseURL: url,
  timeout: 1000,
  headers: {}
});

module.exports = instance;
