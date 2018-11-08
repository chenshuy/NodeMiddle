// 404
module.exports = () => {
  return async (ctx, next) => {
    if (ctx.status === 404) {
      ctx.status = 404;
      await ctx.render('404.html');
    }
    await next();
  };
};
