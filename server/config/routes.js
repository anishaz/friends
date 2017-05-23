let controller = require('./../controllers/controller');

module.exports = app => {
  app.get('/api/friends', controller.getAll());
}
