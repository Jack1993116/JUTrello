const initstate = {
	usercollection: {collections:[],groups:[]}
}

const reducer = (state = initstate, action) => {
	switch(action.type){
		case 'logout' : 
			return {...state, usercollection: {}};
			break;

		case 'getuserinfo' : {
		    return {
		    	usercollection: action.usercollection
		    };
		}; break;

		case 'createboard' : {
			return {usercollection: action.usercollection}
		}; break;

		case 'gotoboard': {
			return state;
		}; break;
			
		default: return state;
	}
}

export default reducer;