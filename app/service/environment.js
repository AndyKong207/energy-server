'use strict'

const Service = require('egg').Service

class EnvironmentService extends Service {
  async find() {
    const envList = await this.app.mysql.get('environment', { env_id: 1 })
    // const envList = await this.app.mysql.query('select * from environment')
    return { envList }
  }
  async create() {
    console.log(this.ctx.request.body)
    const result = await this.app.mysql.insert('environment', this.ctx.request.body)
    return { result }
  }
}

module.exports = EnvironmentService
