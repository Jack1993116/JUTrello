import setAuthToken from './setAuthToken';
import axios from 'axios';

const stared = (id) => dispatch => {

	if (localStorage.token) {

 			setAuthToken(localStorage.token);

 		}
 		axios
    .post("http://localhost:3001/stared", {staredid: id})
    .then(res => {

     		dispatch({type:'stared', stared:res.data.stared});

    })
    .catch(err =>{

			console.log("get stared collection error");

        }
    );

};

export default stared;