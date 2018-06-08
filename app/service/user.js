'use strict'

const Service = require('egg').Service
const response = require('../utils/responseHelper')

class UserService extends Service {
  async select() {
    const params = this.ctx.request.body
    const {user_id} = params
    let sql = `select * from user U
     inner join organization O on U.org_id=O.org_id `
    if (user_id) {
      sql += `where user_id=${user_id}`
    }
    const list = await this.app.mysql.query(sql)
    return response(list)
  }

  async create() {
    const result = await this.app.mysql.insert('user', this.ctx.request.body)
    const isSuccess = result.affectedRows === 1
    return response(isSuccess, isSuccess ? '添加成功' : '添加失败')
  }
  async update() {
    const params = this.ctx.request.body
    const options = {
      where: {
        user_id: params.user_id
      }
    }
    const result = await this.app.mysql.update('user', this.ctx.request.body, options)
    const isSuccess = result.affectedRows === 1
    return response(isSuccess, isSuccess ? '修改成功' : '修改失败')
  }
  async delete() {
    const params = this.ctx.request.body
    const { user_id } = params
    const option = user_id && {
      user_id
    }
    const result = await this.app.mysql.delete('user', option)
    const isSuccess = result.affectedRows === 1
    return response(isSuccess, isSuccess ? '删除成功' : '删除失败')
  }
}

module.exports = UserService
