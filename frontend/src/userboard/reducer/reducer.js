const initstate = {
	boardinfo: {},
}

const reducer = (state = initstate, action) => {
	switch(action.type){
		case '' : 
			return {};
			break;

		default: return state;
	}
}

export default reducer;