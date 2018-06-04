'use strict'

const Controller = require('egg').Controller

class EnergyController extends Controller {
  async search() {
    const list = await this.ctx.service.energy.select()
    this.ctx.body = list
  }
  async create() {
    const result = await this.ctx.service.energy.create()
    this.ctx.body = result
  }
  async update() {
    const result = await this.ctx.service.energy.update()
    this.ctx.body = result
  }
  async delete() {
    const id = this.ctx.query.id
    const result = await this.ctx.service.energy.delete(id)
    this.ctx.body = result
  }
}

module.exports = EnergyController
