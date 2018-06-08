'use strict'

module.exports = app => {
  const { router, controller } = app
  router.post('/environment', controller.environment.search)
  router.post('/environment/post', controller.environment.create)
  router.post('/environment/update', controller.environment.update)
  router.post('/environment/del', controller.environment.delete)
  router.post('/environment/new', controller.environment.searchNew)
}
