var Collections = require('../models/collections');


const getcollectionByColId = async (idarray) => {
	console.log("----------1")
	var collections = [];
	await idarray.map(collectionid => {
		Collections.findOne({_id:collectionid})
		.then(row=>{
			collections = [...collections,row]
		})
	})
	console.log("----------2"+collections)
	return collections;
}

module.exports = getcollectionByColId;