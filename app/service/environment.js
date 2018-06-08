'use strict'

const Service = require('egg').Service
const response = require('../utils/responseHelper')

class EnvironmentService extends Service {
  async find() {
    const envList = await this.app.mysql.get('environment', { env_id: 1 })
    // const envList = await this.app.mysql.query('select * from environment')
    return { envList }
  }

  async searchNew() {
    let sql = `SELECT * from environment ORDER BY env_id desc LIMIT  1`
    const envNew = await this.app.mysql.query(sql)
    return response(envNew)
  }

  async create() {
    console.log(this.ctx.request.body)
    const result = await this.app.mysql.insert('environment', this.ctx.request.body)
    return { result }
  }
}

module.exports = EnvironmentService
