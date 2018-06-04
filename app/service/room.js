'use strict'

const Service = require('egg').Service

class RoomService extends Service {
  async select(room_id) {
    const option = {
      where: { room_id }
    }
    const list = await this.app.mysql.select('room', option)
    return { list }
  }
  async create() {
    const result = await this.app.mysql.insert('room', this.ctx.request.body)
    return { result }
  }
  async update() {
    const params = this.ctx.request.body
    const options = {
      where: {
        room_id: params.room_id
      }
    }
    const result = await this.app.mysql.update('room', this.ctx.request.body, options)
    return { result }
  }
  async delete(room_id) {
    const result = await this.app.mysql.delete('room', { room_id })
    return { result }
  }
}

module.exports = RoomService
