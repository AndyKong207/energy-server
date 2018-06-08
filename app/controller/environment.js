'use strict'

const Controller = require('egg').Controller

class EnvrionmentController extends Controller {

  async searchNew() {
    console.log('111111', this.ctx.service)
    const envNew = await this.ctx.service.environment.searchNew()
    this.ctx.body = envNew
  }
  async create() {
    console.log('===', this.ctx.service)
    const result = await this.ctx.service.environment.create()
    this.ctx.body = result
  }
}

module.exports = EnvrionmentController
