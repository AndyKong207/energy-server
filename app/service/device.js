'use strict'

const Service = require('egg').Service
const response = require('../utils/responseHelper')

class DeviceService extends Service {
  async select() {
    const params = this.ctx.request.body
    const {device_id} = params
    let sql = `select * from device D 
    inner join device_type DT on D.device_type_id=DT.device_type_id 
    inner join energy_type ET on D.energy_type_id=ET.energy_type_id 
    inner join room R on R.room_id=D.room_id `
    if (device_id) {
      sql += `where device_id=${device_id}`
    }
    const list = await this.app.mysql.query(sql)
    return response(list)
  }

  async create() {
    const result = await this.app.mysql.insert('device', this.ctx.request.body)
    const isSuccess = result.affectedRows === 1
    return response(isSuccess, isSuccess ? '添加成功' : '添加失败')
  }
  async update() {
    const params = this.ctx.request.body
    const options = {
      where: {
        device_id: params.device_id
      }
    }
    const result = await this.app.mysql.update('device', this.ctx.request.body, options)
    const isSuccess = result.affectedRows === 1
    return response(isSuccess, isSuccess ? '修改成功' : '修改失败')
  }
  async delete() {
    const params = this.ctx.request.body
    const { device_id } = params
    const option = device_id && {
      device_id
    }
    const result = await this.app.mysql.delete('device', option)
    const isSuccess = result.affectedRows === 1
    return response(isSuccess, isSuccess ? '删除成功' : '删除失败')
  }
}

module.exports = DeviceService
