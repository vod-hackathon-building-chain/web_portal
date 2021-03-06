module.exports = (sequelize, Sequelize) => {
    const User =  require('../model/users.model.js')(sequelize, Sequelize);
    const Building =  require('../model/building.model.js')(sequelize, Sequelize);
	const Contract = sequelize.define('contract', {

        price: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        status: {
            type: Sequelize.STRING,
            allowNull: true
        },
        approvedByGovernment:{
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue:false
        },approvedByBuyer:{
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue:false
        },
        approvedByBank:{
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue:false
        },
        approvedBySeller:{
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue:false
        },
        hasAbuyer:{
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue:false
        },
    })
    Contract.belongsTo(Building, {foreignKey : 'buildingId', as:'building'})
    Contract.belongsTo(User, {foreignKey : 'buyerId', as:'buyer'})
    return Contract;
}