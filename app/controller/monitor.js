'use strict'

const Controller = require('egg').Controller

class MonitorController extends Controller {
  async search() {
    const list = await this.ctx.service.monitor.select()
    this.ctx.body = list
  }
  async create() {
    const result = await this.ctx.service.monitor.create()
    this.ctx.body = result
  }
  async update() {
    const result = await this.ctx.service.monitor.update()
    this.ctx.body = result
  }
  async delete() {
    const id = this.ctx.query.id
    const result = await this.ctx.service.monitor.delete(id)
    this.ctx.body = result
  }
}

module.exports = MonitorController
