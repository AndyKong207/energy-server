'use strict'

module.exports = app => {
  const { router, controller } = app
  router.post('/energyType', controller.energyType.search)
  router.post('/energyType/post', controller.energyType.create)
  router.post('/energyType/update', controller.energyType.update)
  router.post('/energyType/del', controller.energyType.delete)
}
