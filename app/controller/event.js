'use strict'

const Controller = require('egg').Controller

class EventController extends Controller {
  async search() {
    const list = await this.ctx.service.event.select()
    this.ctx.body = list
  }
  async create() {
    const result = await this.ctx.service.event.create()
    this.ctx.body = result
  }
  async update() {
    const result = await this.ctx.service.event.update()
    this.ctx.body = result
  }
  async delete() {
    const id = this.ctx.query.id
    const result = await this.ctx.service.event.delete(id)
    this.ctx.body = result
  }
}

module.exports = EventController
