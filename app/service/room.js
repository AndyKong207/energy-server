'use strict'

const Service = require('egg').Service
const response = require('../utils/responseHelper')

class RoomService extends Service {
  async select() {
    const params = this.ctx.request.body
    const {room_id} = params

    let sql = `select * from room R 
    inner join building B on R.building_id=B.building_id `
    if (room_id) {
      sql += `where room_id=${room_id}`
    }
    const list = await this.app.mysql.query(sql)
    return response(list)
  }

  async create() {
    const result = await this.app.mysql.insert('room', this.ctx.request.body)
    const isSuccess = result.affectedRows === 1
    return response(isSuccess, isSuccess ? '添加成功' : '添加失败')
  }
  async update() {
    const params = this.ctx.request.body
    const options = {
      where: {
        room_id: params.room_id
      }
    }
    const result = await this.app.mysql.update('room', this.ctx.request.body, options)
    const isSuccess = result.affectedRows === 1
    return response(isSuccess, isSuccess ? '修改成功' : '修改失败')
  }
  async delete() {
    const params = this.ctx.request.body
    const { room_id } = params
    const option = room_id && {
      room_id
    }
    const result = await this.app.mysql.delete('room', option)
    const isSuccess = result.affectedRows === 1
    return response(isSuccess, isSuccess ? '删除成功' : '删除失败')
  }
}

module.exports = RoomService
