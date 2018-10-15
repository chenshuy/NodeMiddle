const path = require('path');
const Koa = require('koa');
const serve = require('koa-static');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const render = require('koa-art-template');
const router = require('./routes');
const errorRouter = require('./routes/error');

const app = new Koa();

const env = process.env.NODE_ENV || 'development'; // 默认开发环境

// 视图模版引擎
render(app, {
  root: path.join(__dirname, 'dist'),
  extname: '.html',
  debug: env === 'development'
});

// 配置ctx.body解析中间件
app.use(bodyparser());

// 配置静态资源加载中间件
app.use(serve(
  path.join(__dirname, '../public')
));

// 配置控制台日志中间件
if (env === 'development') {
  app.use(logger());
}

// 初始化路由中间件
app.use(router.routes())
  .use(router.allowedMethods())
  .use(errorRouter());

module.exports = app;
