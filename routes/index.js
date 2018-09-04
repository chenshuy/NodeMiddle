const Router = require('koa-router');

const router = new Router({
  prefix: '/'
});

const index = (ctx, next) => {
  ctx.response.body = 'Hello World';
};

router
  .get('/', index);

module.exports = router;
