const initstate = {
	usercollection: {collections:[],groups:[]},
	selectedcol: {}
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

		case 'createboard' : {
			return {...state,usercollection: action.usercollection}
		}; break;

		case 'gotoboard': {
			return {...state,selectedcol: action.selectedcol};
		}; break;
			
		default: return state;
	}
}

export default reducer;