'use strict'

const Service = require('egg').Service

class EnergyService extends Service {
  async select(energy_id) {
    const option = {
      where: { energy_id }
    }
    const list = await this.app.mysql.select('energy', option)
    return { list }
  }
  async create() {
    const result = await this.app.mysql.insert('energy', this.ctx.request.body)
    return { result }
  }
  async update() {
    const params = this.ctx.request.body
    const options = {
      where: {
        energy_id: params.energy_id
      }
    }
    const result = await this.app.mysql.update('energy', this.ctx.request.body, options)
    return { result }
  }
  async delete(energy_id) {
    const result = await this.app.mysql.delete('energy', { energy_id })
    return { result }
  }
}

module.exports = EnergyService
