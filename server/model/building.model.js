module.exports = (sequelize, Sequelize) => {
    const User =  require('../model/users.model.js')(sequelize, Sequelize);
	const Building = sequelize.define('building', {
        address: {
            type: Sequelize.STRING,
            allowNull: true
        },
        latitude: {
            type: Sequelize.STRING,
            allowNull: true
        },
        longitudes: {
            type: Sequelize.STRING,
            allowNull: true
        },
        numberOfRooms: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue:0
        },
        numberOfBathrooms: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue:0
        },
        numberOfBalcony: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue:0
        },
        level: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue:0
        },
        area: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue:0
        },
        isFurnitured: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
            defaultValue:0
        },
        city:{
            type: Sequelize.STRING,
            allowNull: true
        },
        waterTotalReader : {
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue:0
        }, 
        waterMonthReader : {
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue:0
        }, 
        waterTotalToPay : {
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue:0
        },
        gasTotalReader : {
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue:0
        }, 
        gasMonthReader : {
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue:0
        },
        gasTotalToPay : {
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue:0
        },
        electricityTotalReader : {
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue:0
        },
        electricityMonthReader : {
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue:0
        },
        electricityTotalToPay : {
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue:0
        },
        availableStock:{
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue:0
        },
        approved:{
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue:false
        },price: {
            type: Sequelize.INTEGER,
            allowNull: true
        }

    })
    Building.belongsTo(User, {foreignKey : 'ownerId', as:'owner'})
    return Building;
}