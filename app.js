const path = require('path');
const Koa = require('koa');
const koaStatic = require('koa-static');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');

const router = require('./routes/index');

const app = new Koa();

// 配置控制台日志中间件
app.use(logger());

// 配置ctx.body解析中间件
app.use(bodyparser());

// 配置静态资源加载中间件
app.use(koaStatic(
  path.join(__dirname, './static')
));

// 初始化路由中间件
app.use(router.routes()).use(router.allowedMethods());

app.listen(5000, () => {
  console.log('The server is running at http://localhost:5000/');
});
