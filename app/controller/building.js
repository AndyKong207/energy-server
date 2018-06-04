'use strict'

const Controller = require('egg').Controller

class BuildingController extends Controller {
  async search() {
    const list = await this.ctx.service.building.select()
    this.ctx.body = list
  }
  async create() {
    const result = await this.ctx.service.building.create()
    this.ctx.body = result
  }
  async update() {
    const result = await this.ctx.service.building.update()
    this.ctx.body = result
  }
  async delete() {
    const id = this.ctx.query.id
    const result = await this.ctx.service.building.delete(id)
    this.ctx.body = result
  }
}

module.exports = BuildingController
