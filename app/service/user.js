'use strict'

const Service = require('egg').Service

class UserService extends Service {
  async select(user_id) {
    const option = {
      where: { user_id }
    }
    const list = await this.app.mysql.select('user', option)
    return { list }
  }
  async create() {
    const result = await this.app.mysql.insert('user', this.ctx.request.body)
    return { result }
  }
  async update() {
    const params = this.ctx.request.body
    const options = {
      where: {
        user_id: params.user_id
      }
    }
    const result = await this.app.mysql.update('user', this.ctx.request.body, options)
    return { result }
  }
  async delete(user_id) {
    const result = await this.app.mysql.delete('user', { user_id })
    return { result }
  }
}

module.exports = UserService
