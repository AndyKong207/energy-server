'use strict'

const Service = require('egg').Service
const response = require('../utils/responseHelper')

class BuildingService extends Service {
  async select() {
    const params = this.ctx.request.body
    const {building_id} = params
    let sql = `select * from building B 
    inner join area A on B.area_id=A.area_id `
    if (building_id) {
      sql += `where building_id=${building_id}`
    }
    const list = await this.app.mysql.query(sql)
    return response(list)
  }
  async create() {
    const result = await this.app.mysql.insert('building', this.ctx.request.body)
    const isSuccess = result.affectedRows === 1
    return response(isSuccess, isSuccess ? '添加成功' : '添加失败')
  }
  async update() {
    const params = this.ctx.request.body
    const options = {
      where: {
        building_id: params.building_id
      }
    }
    const result = await this.app.mysql.update('building', this.ctx.request.body, options)
    const isSuccess = result.affectedRows === 1
    return response(isSuccess, isSuccess ? '修改成功' : '修改失败')
  }
  async delete() {
    const params = this.ctx.request.body
    const { building_id } = params
    const option = building_id && {
      building_id
    }
    const result = await this.app.mysql.delete('building', option)
    const isSuccess = result.affectedRows === 1
    return response(isSuccess, isSuccess ? '删除成功' : '删除失败')

    return { result }
  }
}

module.exports = BuildingService
