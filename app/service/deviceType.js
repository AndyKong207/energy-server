'use strict'

const Service = require('egg').Service
const response = require('../utils/responseHelper')

class DeviceTypeService extends Service {
  async select() {
    const params = this.ctx.request.body
    const { device_type_id } = params
    const option = {
      where: device_type_id && { device_type_id }
    }
    const list = await this.app.mysql.select('device_type', option)
    return response(list)
  }
  async create() {
    const result = await this.app.mysql.insert('device_type', this.ctx.request.body)
    const isSuccess = result.affectedRows === 1
    return response(isSuccess, isSuccess ? '添加成功' : '添加失败')
  }
  async update() {
    const params = this.ctx.request.body
    const options = {
      where: {
        device_type_id: params.device_type_id
      }
    }
    const result = await this.app.mysql.update('device_type', this.ctx.request.body, options)
    const isSuccess = result.affectedRows === 1
    return response(isSuccess, isSuccess ? '修改成功' : '修改失败')
  }
  async delete() {
    const params = this.ctx.request.body
    const { device_type_id } = params
    const option = device_type_id && {
      device_type_id
    }
    const result = await this.app.mysql.delete('device_type', option)
    const isSuccess = result.affectedRows === 1
    return response(isSuccess, isSuccess ? '删除成功' : '删除失败')
  }
}

module.exports = DeviceTypeService
