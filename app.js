'use strict'
//
// module.exports = app => {
//   app.beforeStart(async () => {
//     // 从配置中心获取 MySQL 的配置
//     // { host: 'mysql.com', port: '3306', user: 'test_user', password: 'test_password', database: 'test' }
//     const mysqlConfig = await app.configCenter.fetch('mysql');
//     console.log(mysqlConfig);
//     app.database = app.mysql.createInstance(mysqlConfig);
//   })
// }
// module.exports = app => {
//   app.beforeStart(async () => {
//     console.log(app.configCenter.mysql, 1)
//     // const mysqlConfig = await app.configCenter.fetch('mysql')
//     const mysqlConfig = await app.config.mysql.client
//     app.database = app.mysql.createInstance(mysqlConfig)
//   })
// }