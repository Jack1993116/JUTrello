import {signUp} from '../const/const';
import {logIn} from '../const/const';
import axios from 'axios';

const initstate = {
	userinfo: {signEmail:"defaultEmail",signPassword:"defaultPassword"}
}

const reducer = (state = initstate, action) => {
	switch(action.type){
		case signUp : 
			return {...state, userinfo: action.info};
			break;

		case logIn : {
		    return {
		    	...state,userinfo: action.info
		    };
		}; break;
			
		default: return state;
	}
}

export default reducer;