const db = require('../config/db.config.js');
const Building = db.building;
 
exports.create = (req, res, next) => {	
    building = req.body;
	Building.create(building).then(building => {
		res.send(building);
	}).catch(next);
};
exports.findAll = (req, res, next) => {
	Building.findAll({include: [
		{ model: db.users, as: 'owner' }
	]}).then(buildings => {
	//   next()
	  res.send(buildings);
	}).catch(next);
};
exports.update = (req, res, next) => {
    const id = req.params.buildingId;
    building = req.body;
	Building.update( building, 
					 { where: {id: id} }
				   ).then(() => {
						// next()
					 res.status(200).send("updated successfully a building with id = " + id);
				   }).catch(next);
};
exports.findByUserId = (req, res, next) => {	
	Building.findAll({include: [
		{ model: db.users, as: 'owner' }
	],where:{ownerId:req.params.ownerId}}).then(buildings => {
	//   next()
	  res.send(buildings);
	}).catch(next);
};