const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.file = require('../model/file.model.js')(sequelize, Sequelize);
db.users = require('../model/users.model.js')(sequelize, Sequelize);
db.building = require('../model/building.model.js')(sequelize, Sequelize);
db.contract = require('../model/contract.model.js')(sequelize, Sequelize);

module.exports = db;