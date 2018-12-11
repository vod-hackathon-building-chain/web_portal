    var express = require('express'); 
    var app = express(); 
    var bodyParser = require('body-parser');
    const passport = require('passport');


        /** Serving from the same express Server
    No cors required */
    app.use(express.static('../frontend'));
    app.use(bodyParser.json());  
    app.use(function(err,req,res,next){
        // Catch unauthorised errors
    if (err.name === 'UnauthorizedError') {
        res.status(401);
        res.json({"message" : err.name + ": " + err.message});
    }    
        res.status(422).send({error:err.message})
    })
    
    app.use(function(req, res, next) { //allow cross origin requests
        res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
        res.header("Access-Control-Allow-Origin", "http://localhost");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });


    require('./route/user.route.js')(app);
    require('./route/authentication.route.js')(app);
    require('./route/building.route.js')(app);
    require('./route/contract.route.js')(app);

    

    
    
    const db = require('./config/db.config.js');
// force: true will drop the table if it already exists
db.sequelize.sync({force: false}).then(() => {
    console.log('Drop and Resync with { force: true }');
});
app.use('/uploads', express.static(process.cwd() + '/uploads'));

    app.listen('3000', function(){
        console.log('running on 3000...');
    });