'use strict'

const Controller = require('egg').Controller

class OrganizationController extends Controller {
  async search() {
    const list = await this.ctx.service.organization.select()
    this.ctx.body = list
  }
  async create() {
    const result = await this.ctx.service.organization.create()
    this.ctx.body = result
  }
  async update() {
    const result = await this.ctx.service.organization.update()
    this.ctx.body = result
  }
  async delete() {
    const id = this.ctx.query.id
    const result = await this.ctx.service.organization.delete(id)
    this.ctx.body = result
  }
}

module.exports = OrganizationController
