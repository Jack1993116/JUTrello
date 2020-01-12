var Collections = require('../models/collections');



// input usercollection id array as idarray
// return array of collection objects
const getcollectionByColId = async (idarray) => {

	console.log("----------1------")

	var collections = [];
	for (var i = 0; i < idarray.length; i++) {
		await Collections.findOne({_id:idarray[i]})
		.then(row=>{
				collections = [...collections,row]
			}
			)
	}
	
	console.log("----------3--------"+collections)
	return collections;
}

module.exports = getcollectionByColId;