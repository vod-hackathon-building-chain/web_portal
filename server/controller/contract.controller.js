const db = require('../config/db.config.js');
const Contract = db.contract;

exports.create = (req, res, next) => {	
    contract = req.body;
	Contract.create(contract).then(contract => {
		res.send(contract);
	}).catch(next);
};

exports.update = (req, res, next) => {
    const id = req.params.contractId;
    contract = req.body;
	Contract.update( contract, 
					 { where: {id: id} }
				   ).then(() => {
						// next()
					 res.status(200).send("updated successfully a contract with id = " + id);
				   }).catch(next);
};

exports.findContractsBycritira=(req, res, next)=>{
    critira = {};
    if(req.query){
        critira = JSON.stringify( req.query)
    }
    Contract.findAll({include: [
		{ model: db.users, as: 'buyer' },{ model: db.building, as: 'building' }
	],where:JSON.parse(critira)}).then(buildings => {
	//   next()
	  res.send(buildings);
	}).catch(next);
}