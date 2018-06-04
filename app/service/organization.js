'use strict'

const Service = require('egg').Service
const response = require('../utils/responseHelper')

class OrganizationService extends Service {
  async select() {
    const params = this.ctx.request.body
    const { org_id } = params
    const option = {
       where: org_id && { org_id }
    }
    const list = await this.app.mysql.select('organization', option)
    return response(list)
  }
  async create() {
    const result = await this.app.mysql.insert('organization', this.ctx.request.body)
    const isSuccess = result.affectedRows === 1
    return response(isSuccess, isSuccess ? '添加成功' : '添加失败')
  }
  async update() {
    const params = this.ctx.request.body
    const options = {
      where: {
        org_id: params.org_id
      }
    }
    const result = await this.app.mysql.update('organization', this.ctx.request.body, options)
    const isSuccess = result.affectedRows === 1
    return response(isSuccess, isSuccess ? '修改成功' : '修改失败')
  }
  async delete() {
    const params = this.ctx.request.body
    const { org_id } = params
    const option = org_id && {
      org_id
    }
    const result = await this.app.mysql.delete('organization', option)
    const isSuccess = result.affectedRows === 1
    return response(isSuccess, isSuccess ? '删除成功' : '删除失败')
  }
}

module.exports = OrganizationService
