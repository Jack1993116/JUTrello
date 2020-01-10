const initstate = {
	usercollection: {}
}

const reducer = (state = initstate, action) => {
	switch(action.type){
		case 'logout' : 
			return {...state, usercollection: {}};
			break;

		case 'getuserinfo' : {
		    return {
		    	...state,usercollection: action.usercollection
		    };
		}; break;

		case 'gotoboard': {
			return state;
		}; break;
			
		default: return state;
	}
}

export default reducer;