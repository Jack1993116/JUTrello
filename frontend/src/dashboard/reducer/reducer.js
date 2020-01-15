const initstate = {
	usercollection: {collections:[],groups:[], stared: []},
	selectedcol: {},
	stared: []
}

const reducer = (state = initstate, action) => {
	switch(action.type){
		case 'logout' : 
			return {...state, usercollection: {}};
			break;

		case 'stared' : {

				return {...state, stared: action.stared};

			}; break;

		case 'getuserinfo' : {
		    return {
		    	...state,usercollection: action.usercollection, stared: action.usercollection.stared
		    };
		}; break;

		case 'createboard' : {
			return {...state,usercollection: { ...action.usercollection}}
		}; break;

		case 'gotoboard': {
			return {...state,selectedcol: action.selectedcol};
		}; break;
			
		default: return state;
	}
}

export default reducer;