'use strict'

module.exports = app => {
  const { router, controller } = app
  router.post('/user', controller.user.search)
  router.post('/user/post', controller.user.create)
  router.post('/user/update', controller.user.update)
  router.post('/user/del', controller.user.delete)
}
