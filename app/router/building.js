'use strict'

module.exports = app => {
  const { router, controller } = app
  router.post('/building', controller.building.search)
  router.post('/building/post', controller.building.create)
  router.post('/building/update', controller.building.update)
  router.post('/building/del', controller.building.delete)
}
