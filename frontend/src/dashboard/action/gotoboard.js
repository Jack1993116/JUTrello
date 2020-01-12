import setAuthToken from './setAuthToken';
import axios from 'axios';

const gotoboard = (collectionid,history) => dispatch => {
    
        // get collection info using collectionid 
        // receive collection info 
        if (localStorage.token) {
             setAuthToken(localStorage.token);
         }
         axios
        .post("http://localhost:3001/getcollectioninfo",{collectionid: collectionid})
        .then(res => {
                console.log(res.data[0]._id);
                history.push('/usercollection');
                dispatch({type:'gotoboard', usercollection:res.data[0]})
        })
        .catch(err =>{
                console.log("get collection error")
                history.push('/')
            }
        );
   

};

export default gotoboard;