'use strict'

const Service = require('egg').Service

class EnergyTypeService extends Service {
  async select(energy_type_id) {
    const option = {
      where: { energy_type_id }
    }
    const list = await this.app.mysql.select('energy_type', option)
    return { list }
  }
  async create() {
    const result = await this.app.mysql.insert('energy_type', this.ctx.request.body)
    return { result }
  }
  async update() {
    const params = this.ctx.request.body
    const options = {
      where: {
        energy_type_id: params.energy_type_id
      }
    }
    const result = await this.app.mysql.update('energy_type', this.ctx.request.body, options)
    return { result }
  }
  async delete(energy_type_id) {
    const result = await this.app.mysql.delete('energy_type', { energy_type_id })
    return { result }
  }
}

module.exports = EnergyTypeService
