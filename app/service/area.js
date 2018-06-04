'use strict'

const Service = require('egg').Service
const response = require('../utils/responseHelper')

class AreaService extends Service {
  async select() {
    const params = this.ctx.request.body
    const {area_id} = params
    const option = {
      where: area_id && {area_id}
    }
    const list = await this.app.mysql.select('area', option)
    return response(list)
  }

  async create() {
    const result = await this.app.mysql.insert('area', this.ctx.request.body)
    const isSuccess = result.affectedRows === 1
    return response(isSuccess, isSuccess ? '添加成功' : '添加失败')
  }
  async update() {
    const params = this.ctx.request.body
    const options = {
      where: {
        area_id: params.area_id
      }
    }
    const result = await this.app.mysql.update('area', this.ctx.request.body, options)
    const isSuccess = result.affectedRows === 1
    return response(isSuccess, isSuccess ? '修改成功' : '修改失败')
  }
  async delete() {
    const params = this.ctx.request.body
    const { area_id } = params
    const option = area_id && {
      area_id
    }
    const result = await this.app.mysql.delete('area', option)
    const isSuccess = result.affectedRows === 1
    return response(isSuccess, isSuccess ? '删除成功' : '删除失败')
  }
}

module.exports = AreaService
