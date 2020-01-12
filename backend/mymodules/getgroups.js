var Groups = require('../models/groups');



// input usergroups id array as idarray
// return array of group objects
const getgroupsByGrpId = async (idarray) => {

	console.log("----------1------")

	var groups = [];
	for (var i = 0; i < idarray.length; i++) {
		await Groups.findOne({_id:idarray[i]})
		.then(row=>{
				groups = [...groups,row]
			}
			)
	}
	
	console.log("----------3--------"+groups)
	return groups;
}

module.exports = getgroupsByGrpId;