'use strict'

module.exports = app => {
  const { router, controller } = app
  router.post('/device', controller.device.search)
  router.post('/device/post', controller.device.create)
  router.post('/device/update', controller.device.update)
  router.post('/device/del', controller.device.delete)
}
