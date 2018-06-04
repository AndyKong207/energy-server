'use strict'

const Controller = require('egg').Controller

class EnergyTypeController extends Controller {
  async search() {
    const list = await this.ctx.service.energyType.select()
    this.ctx.body = list
  }
  async create() {
    const result = await this.ctx.service.energyType.create()
    this.ctx.body = result
  }
  async update() {
    const result = await this.ctx.service.energyType.update()
    this.ctx.body = result
  }
  async delete() {
    const id = this.ctx.query.id
    const result = await this.ctx.service.energyType.delete(id)
    this.ctx.body = result
  }
}

module.exports = EnergyTypeController
