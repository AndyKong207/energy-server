'use strict'

const Service = require('egg').Service

class DeviceService extends Service {
  async select(device_id) {
    const option = {
      where: { device_id }
    }
    const list = await this.app.mysql.select('device', option)
    return { list }
  }
  async create() {
    const result = await this.app.mysql.insert('device', this.ctx.request.body)
    return { result }
  }
  async update() {
    const params = this.ctx.request.body
    const options = {
      where: {
        device_id: params.device_id
      }
    }
    const result = await this.app.mysql.update('device', this.ctx.request.body, options)
    return { result }
  }
  async delete(device_id) {
    const result = await this.app.mysql.delete('device', { device_id })
    return { result }
  }
}

module.exports = DeviceService
