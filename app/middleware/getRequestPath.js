module.exports = () => {
  return async function (ctx, next) {
    console.log('request path::::', ctx.request.path)
    ctx.logger.info('request path::::: %j', ctx.request.path);
    await next();
    // 上报请求时间
  }
}
