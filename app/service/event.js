'use strict'

const Service = require('egg').Service

class EventService extends Service {
  async select(event_id) {
    const option = {
      where: { event_id }
    }
    const list = await this.app.mysql.select('event', option)
    return { list }
  }
  async create() {
    const result = await this.app.mysql.insert('event', this.ctx.request.body)
    return { result }
  }
  async update() {
    const params = this.ctx.request.body
    const options = {
      where: {
        event_id: params.event_id
      }
    }
    const result = await this.app.mysql.update('event', this.ctx.request.body, options)
    return { result }
  }
  async delete(event_id) {
    const result = await this.app.mysql.delete('event', { event_id })
    return { result }
  }
}

module.exports = EventService
