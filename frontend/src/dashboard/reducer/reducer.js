const initstate = {
	usercollection: {collections:[],groups:[]},
	selectedcol: {},
	stared: []
}

const reducer = (state = initstate, action) => {
	switch(action.type){
		case 'logout' : 
			return {...state, usercollection: {}};
			break;

		case 'stared' : {
				let stars = state.stared;
				let pos = stars.indexOf(action.stared);
				if (pos == (-1)) {
					return {...state, stared: [...state.stared, action.stared]};
				} else {
					return { ...state }
				}
				
			}; break;

		case 'nostared' : {
				let stars = state.stared;
				let pos = stars.indexOf(action.stared);
				stars.splice(pos, 1);
				return {...state, stared: [...stars]};
			}; break;

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