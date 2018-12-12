module.exports = function(app) {
 
    const contractController = require('../controller/contract.controller.js');

    app.post('/api/contract', contractController.create);
    app.put('/api/contract/:contractId', contractController.update);
    app.get('/api/contract', contractController.findContractsBycritira);
}