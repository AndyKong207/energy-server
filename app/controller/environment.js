'use strict'

const Controller = require('egg').Controller

class EnvrionmentController extends Controller {

  async searchNew() {
    const envNew = await this.ctx.service.environment.searchNew()
    this.ctx.body = envNew
  }
  async create() {
    const result = await this.ctx.service.environment.create()
    this.ctx.body = result
  }
}

module.exports = EnvrionmentController
