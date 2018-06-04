'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // this.ctx.body = 'hi, egg';
    const env = await this.ctx.service.environment.find()
    this.ctx.body = env
  }
}

module.exports = HomeController;
