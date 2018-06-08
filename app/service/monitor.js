'use strict'

const Service = require('egg').Service
const response = require('../utils/responseHelper')

class MonitorService extends Service {
  async select() {
    const params = this.ctx.request.body
    const {monitor_id} = params
    let sql = `select * from monitor `
    if (monitor_id) {
      sql += `where monitor_id=${monitor_id}`
    }
    const list = await this.app.mysql.query(sql)
    return response(list)
  }

  async create() {
    const result = await this.app.mysql.insert('monitor', this.ctx.request.body)
    const isSuccess = result.affectedRows === 1
    return response(isSuccess, isSuccess ? '添加成功' : '添加失败')
  }
  async update() {
    const params = this.ctx.request.body
    const options = {
      where: {
        monitor_id: params.monitor_id
      }
    }
    const result = await this.app.mysql.update('monitor', this.ctx.request.body, options)
    const isSuccess = result.affectedRows === 1
    return response(isSuccess, isSuccess ? '修改成功' : '修改失败')
  }
  async delete() {
    const params = this.ctx.request.body
    const { monitor_id } = params
    const option = monitor_id && {
      monitor_id
    }
    const result = await this.app.mysql.delete('monitor', option)
    const isSuccess = result.affectedRows === 1
    return response(isSuccess, isSuccess ? '删除成功' : '删除失败')
  }
}

module.exports = MonitorService
