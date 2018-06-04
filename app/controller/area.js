'use strict'

const Controller = require('egg').Controller

class AreaController extends Controller {
  async search() {
    const list = await this.ctx.service.area.select()
    this.ctx.body = list
  }
  async create() {
    const result = await this.ctx.service.area.create()
    this.ctx.body = result
  }
  async update() {
    const result = await this.ctx.service.area.update()
    this.ctx.body = result
  }
  async delete() {
    const id = this.ctx.query.id
    const result = await this.ctx.service.area.delete(id)
    this.ctx.body = result
  }
}

module.exports = AreaController
