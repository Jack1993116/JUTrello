import setAuthToken from './setAuthToken';
import axios from 'axios';

const getuserinfo = (history) => dispatch => {

 		if (localStorage.token) {
 			setAuthToken(localStorage.token);
 		}
 		axios
    .post("http://localhost:3001/getinfo")
    .then(res => {
    		console.log(res);
     		dispatch({type:'getuserinfo', usercollection:res})
    })
    .catch(err =>{
    			console.log("get collection error")
        	history.push('/')
        }
    );


};

export default getuserinfo;