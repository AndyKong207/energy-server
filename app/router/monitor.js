'use strict'

module.exports = app => {
  const { router, controller } = app
  router.post('/monitor', controller.monitor.search)
  router.post('/monitor/post', controller.monitor.create)
  router.post('/monitor/update', controller.monitor.update)
  router.post('/monitor/del', controller.monitor.delete)
}
