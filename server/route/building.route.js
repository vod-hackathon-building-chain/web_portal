module.exports = function(app) {
 
    const buildingController = require('../controller/building.controller.js');

    app.post('/api/building', buildingController.create);
    app.put('/api/building/:buildingId', buildingController.update);
    app.get('/api/building', buildingController.findAll);
    app.get('/api/building/:ownerId', buildingController.findByUserId);
}