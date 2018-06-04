'use strict'

const Controller = require('egg').Controller

class RoomController extends Controller {
  async search() {
    const list = await this.ctx.service.room.select()
    this.ctx.body = list
  }
  async create() {
    const result = await this.ctx.service.room.create()
    this.ctx.body = result
  }
  async update() {
    const result = await this.ctx.service.room.update()
    this.ctx.body = result
  }
  async delete() {
    const id = this.ctx.query.id
    const result = await this.ctx.service.room.delete(id)
    this.ctx.body = result
  }
}

module.exports = RoomController
