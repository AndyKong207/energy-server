'use strict'

const Controller = require('egg').Controller

class DeviceController extends Controller {
  async search() {
    const list = await this.ctx.service.device.select()
    this.ctx.body = list
  }
  async create() {
    const result = await this.ctx.service.device.create()
    this.ctx.body = result
  }
  async update() {
    const result = await this.ctx.service.device.update()
    this.ctx.body = result
  }
  async delete() {
    const id = this.ctx.query.id
    const result = await this.ctx.service.device.delete(id)
    this.ctx.body = result
  }
}

module.exports = DeviceController
