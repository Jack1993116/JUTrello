import setAuthToken from './setAuthToken';
import axios from 'axios';

const createboard = (createinfo,history) => dispatch => {

	if (localStorage.token) {
		setAuthToken(localStorage.token);
	}
	axios
    .post("http://localhost:3001/createboard",{createinfo:createinfo})
    .then(res => {
    		console.log(res.data);
     		// dispatch({type:'createboard', usercollection:res.data})
            history.push('/dashboard')
    })
    .catch(err =>{
			console.log("create collection error")
        	history.push('/dashboard')
        }
    );


};

export default createboard;