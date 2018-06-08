'use strict'

const Controller = require('egg').Controller

class EnvrionmentController extends Controller {
  async search() {
    const list = await this.ctx.service.envrionment.select()
    this.ctx.body = list
  }
  async searchNew() {
    const envNew = await this.ctx.service.environment.searchNew()
    this.ctx.body = envNew
  }
  async create() {
    const result = await this.ctx.service.envrionment.create()
    this.ctx.body = result
  }
  async update() {
    const result = await this.ctx.service.envrionment.update()
    this.ctx.body = result
  }
  async delete() {
    const id = this.ctx.query.id
    const result = await this.ctx.service.envrionment.delete(id)
    this.ctx.body = result
  }
}

module.exports = EnvrionmentController
