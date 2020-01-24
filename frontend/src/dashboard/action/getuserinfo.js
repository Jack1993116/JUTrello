import setAuthToken from './setAuthToken';
import axios from 'axios';

const getuserinfo = (history) => dispatch => {

 		if (localStorage.token) {
 			setAuthToken(localStorage.token);
 		}
 		axios
    .post("http://localhost:3001/api/getinfo")
    .then(res => {
    		console.log(res.data);
     		dispatch({type:'getuserinfo', usercollection:res.data})
    })
    .catch(err =>{
    			console.log("get collection error")
        	history.push('/')
        }
    );


};

export default getuserinfo;