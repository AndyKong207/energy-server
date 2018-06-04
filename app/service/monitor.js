'use strict'

const Service = require('egg').Service

class MonitorService extends Service {
  async select(monitor_id) {
    const option = {
      where: { monitor_id }
    }
    const list = await this.app.mysql.select('monitor', option)
    return { list }
  }
  async create() {
    const result = await this.app.mysql.insert('monitor', this.ctx.request.body)
    return { result }
  }
  async update() {
    const params = this.ctx.request.body
    const options = {
      where: {
        monitor_id: params.monitor_id
      }
    }
    const result = await this.app.mysql.update('monitor', this.ctx.request.body, options)
    return { result }
  }
  async delete(monitor_id) {
    const result = await this.app.mysql.delete('monitor', { monitor_id })
    return { result }
  }
}

module.exports = MonitorService
