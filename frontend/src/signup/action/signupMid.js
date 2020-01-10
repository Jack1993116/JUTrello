import {signUp} from '../const/const';

export const signupMid =(userinfo, history)=>dispatch=>{
	fetch("http://localhost:3001/signup", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(userinfo)
    })
    .then(async res => {
    	if (res.status==200) {
        // 
        history.push("/login");
        // 
        const {token} = await res.json();
        console.log(token);
    		dispatch({type: signUp, info: userinfo});
	    }else{
	    	alert("Email already exists.");
	    }
	})
}

export default signupMid;