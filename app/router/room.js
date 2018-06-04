'use strict'

module.exports = app => {
  const { router, controller } = app
  router.post('/room', controller.room.search)
  router.post('/room/post', controller.room.create)
  router.post('/room/update', controller.room.update)
  router.post('/room/del', controller.room.delete)
}
