import setAuthToken from './setAuthToken';
import axios from 'axios';

const changecolletion = (collection,id) => dispatch => {

	if (localStorage.token) {
		setAuthToken(localStorage.token);
	}
	axios
    .post("http://localhost:3001/api/changecollection",{collection:collection, id: id})
    .then(res => {
    		console.log(res.data);
    })
    .catch(err =>{
			console.log("change DB error")
        }
    );

};

export default changecolletion;