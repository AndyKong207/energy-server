'use strict'

const Service = require('egg').Service

class DeviceTypeService extends Service {
  async select(device_type_id) {
    const option = {
      where: { device_type_id }
    }
    const list = await this.app.mysql.select('device_type', option)
    return { list }
  }
  async create() {
    const result = await this.app.mysql.insert('device_type', this.ctx.request.body)
    return { result }
  }
  async update() {
    const params = this.ctx.request.body
    const options = {
      where: {
        device_type_id: params.device_type_id
      }
    }
    const result = await this.app.mysql.update('device_type', this.ctx.request.body, options)
    return { result }
  }
  async delete(device_type_id) {
    const result = await this.app.mysql.delete('device_type', { device_type_id })
    return { result }
  }
}

module.exports = DeviceTypeService
