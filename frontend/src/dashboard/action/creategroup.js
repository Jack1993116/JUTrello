import setAuthToken from './setAuthToken';
import axios from 'axios';

const creategroup = (createinfo, history) => dispatch => {

	if (localStorage.token) {
		setAuthToken(localStorage.token);
	}

	axios
    .post("http://localhost:3001/api/creategroup",{createinfo:createinfo})
    .then(res => {
    		console.log(res.data.group);
            
     		dispatch({type:'creategroup', group: res.data.group});
            history.push("/dashboard");
    })
    .catch(err=>{
        console.log("create group error");
    })

};

export default creategroup;