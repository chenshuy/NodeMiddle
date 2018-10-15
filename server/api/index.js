const http = require('./http');

const banner = () => http('/interface/prefecture/banner');// 轮播图

// 接口
module.exports = {
  banner
};
