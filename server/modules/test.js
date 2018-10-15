module.exports = async (ctx) => {
  const data = {
    title: 'test',
    data: '这是测试页'
  };
  await ctx.render('test/index', data);
};
