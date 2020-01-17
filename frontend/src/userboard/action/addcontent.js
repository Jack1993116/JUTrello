import setAuthToken from './setAuthToken';
import axios from 'axios';

const addcontent = (content,title) => dispatch => {

	// if (localStorage.token) {
	// 	setAuthToken(localStorage.token);
	// }
	// axios
 //    .post("http://localhost:3001/addlist",{title:title})
 //    .then(res => {
 //    		console.log(res.data);
 //    })
 //    .catch(err =>{
	// 		console.log("create list error")
 //        }
 //    );
 	console.log(content+title)
    dispatch({type:'addcontent',title: title,content: content });



};

export default addcontent;