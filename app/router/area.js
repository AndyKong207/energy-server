'use strict'

module.exports = app => {
  const { router, controller } = app
  router.post('/area', controller.area.search)
  router.post('/area/post', controller.area.create)
  router.post('/area/update', controller.area.update)
  router.post('/area/del', controller.area.delete)
}
