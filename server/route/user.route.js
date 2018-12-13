module.exports = function(app) {
 
    const user = require('../controller/user.controller.js');
 
    app.post('/api/update_user', user.update);
    app.get('/api/users', user.findAll);
 
}