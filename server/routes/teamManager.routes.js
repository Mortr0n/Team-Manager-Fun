const TeamManagerController = require('../controllers/teamManager.controller');

module.exports = (app) => {
    app.get('/api', TeamManagerController.index);
}