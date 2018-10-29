const axios = require('../api/http');
module.exports = async (ctx) => {
  const data = {
    title: '首页标题',
    content: '你好啊！'
  };
  // 获取banner数据
  await axios.get('interface/prefecture/banner').then(function (res) {
    data.banner = res.data;
  });
  // 渲染页面
  await ctx.render('index', data);
};
