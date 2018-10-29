const Router = require('koa-router');
const index = require('../controller/index'); // 首页
const test = require('../controller/test'); // 测试页面

const router = new Router();

router
  .get('/', index)
  .get('/test', test);

module.exports = router;
