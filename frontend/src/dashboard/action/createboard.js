import setAuthToken from "./setAuthToken";
import axios from "axios";

import gotoboard from "./gotoboard";

const createboard = (createinfo,history) => dispatch => {

	if (localStorage.token) {
		setAuthToken(localStorage.token);
        axios
        .post("http://localhost:3001/api/createboard",{createinfo:createinfo})
        .then(res => {
                console.log(res.data.newcollection);
                dispatch({type:"createboard", newcollection:res.data.newcollection});
                dispatch(gotoboard(res.data.newcollection._id,history));
        })
        .catch(err =>{
                console.log("create collection error");
                history.push("/dashboard");
            }
        );
	}else{
        history.push("/");
    }
	


};

export default createboard;