'use strict'

module.exports = app => {
  const { router, controller } = app
  router.post('/organization', controller.organization.search)
  router.post('/organization/post', controller.organization.create)
  router.post('/organization/update', controller.organization.update)
  router.post('/organization/del', controller.organization.delete)
}
