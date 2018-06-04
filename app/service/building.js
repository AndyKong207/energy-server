'use strict'

const Service = require('egg').Service

class BuildingService extends Service {
  async select(building_id) {
    const option = {
      where: { building_id }
    }
    const list = await this.app.mysql.select('building', option)
    return { list }
  }
  async create() {
    const result = await this.app.mysql.insert('building', this.ctx.request.body)
    return { result }
  }
  async update() {
    const params = this.ctx.request.body
    const options = {
      where: {
        building_id: params.building_id
      }
    }
    const result = await this.app.mysql.update('building', this.ctx.request.body, options)
    return { result }
  }
  async delete(building_id) {
    const result = await this.app.mysql.delete('building', { building_id })
    return { result }
  }
}

module.exports = BuildingService
