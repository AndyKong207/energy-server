'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/area')(app)
  require('./router/environment')(app)
  require('./router/building')(app)
  require('./router/device')(app)
  require('./router/deviceType')(app)
  require('./router/energy')(app)
  require('./router/energyType')(app)
  require('./router/event')(app)
  require('./router/monitor')(app)
  require('./router/organization')(app)
  require('./router/room')(app)
  require('./router/user')(app)
};
