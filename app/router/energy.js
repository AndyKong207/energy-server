'use strict'

module.exports = app => {
  const { router, controller } = app
  router.post('/energy', controller.energy.search)
  router.post('/energy/post', controller.energy.create)
  router.post('/energy/update', controller.energy.update)
  router.post('/energy/del', controller.energy.delete)
}
