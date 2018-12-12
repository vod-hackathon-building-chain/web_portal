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
            allowNull: true
        },
        numberOfBathrooms: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        numberOfBalcony: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        level: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        area: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        isFurnitured: {
            type: Sequelize.BOOLEAN,
            allowNull: true
        },
        city:{
            type: Sequelize.STRING,
            allowNull: true
        },
        waterTotalReader : {
            type: Sequelize.STRING,
            allowNull: true
        }, 
        waterMonthReader : {
            type: Sequelize.STRING,
            allowNull: true
        }, 
        waterTotalToPay : {
            type: Sequelize.STRING,
            allowNull: true
        },
        gasTotalReader : {
            type: Sequelize.STRING,
            allowNull: true
        }, 
        gasMonthReader : {
            type: Sequelize.STRING,
            allowNull: true
        },
        gasTotalToPay : {
            type: Sequelize.STRING,
            allowNull: true
        },
        electricityTotalReader : {
            type: Sequelize.STRING,
            allowNull: true
        },
        electricityMonthReader : {
            type: Sequelize.STRING,
            allowNull: true
        },
        electricityTotalToPay : {
            type: Sequelize.STRING,
            allowNull: true
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