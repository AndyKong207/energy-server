'use strict'

module.exports = app => {
  const { router, controller } = app
  router.post('/deviceType', controller.deviceType.search)
  router.post('/deviceType/post', controller.deviceType.create)
  router.post('/deviceType/update', controller.deviceType.update)
  router.post('/deviceType/del', controller.deviceType.delete)
}
