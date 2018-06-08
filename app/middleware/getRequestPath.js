module.exports = () => {
  return async function (ctx, next) {
    // console.log('request path::::', ctx.request.path)
    // console.info('request body::::: %j', ctx.request)
    ctx.logger.info('request path::::: %j', ctx.request.path)
    // ctx.logger.info('request body::::: %j', ctx.request)
    await next();
    // 上报请求时间
  }
}
