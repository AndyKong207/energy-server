'use strict'

module.exports = app => {
  const { router, controller } = app
  router.post('/event', controller.event.search)
  router.post('/event/post', controller.event.create)
  router.post('/event/update', controller.event.update)
  router.post('/event/del', controller.event.delete)
}
