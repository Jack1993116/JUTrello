import {logIn} from '../const/const';
const loginMid = (userinfo,history) => dispatch => {
	fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(userinfo)
    })
    .then(async res=> {
    	if (res.status==200) {
    		const {token} = await res.json();
    		console.log(token)
    		localStorage.setItem("token", token);
    		history.push("/dashboard");
    		dispatch({type: logIn, info: userinfo})
    	}else{
        history.push("/")
          alert("incorect acount!")
      }
          
    });
};

export default loginMid;